/**
 * @module index
 * @description Main entry point for the WhatsApp bot.
 * This file initializes the bot, handles connections, and processes messages.
 */

// Import necessary modules and functions
const {
  default: ravenConnect,
  useMultiFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion,
  downloadContentFromMessage,
  jidDecode,
  proto,
  getContentType,
} = require("@whiskeysockets/baileys");

const pino = require("pino");
const { Boom } = require("@hapi/boom");
const fs = require("fs");
const path = require('path');
const axios = require("axios");
const express = require("express");
const chalk = require("chalk");
const FileType = require("file-type");
const figlet = require("figlet");
const logger = pino({ level: 'silent' }); // Using silent level of pino
const app = express();
const _ = require("lodash"); // lodash is imported but not used in the provided snippet.
let lastTextTime = 0; // Timestamp for tracking last message to avoid spamming anticall responses.
const messageDelay = 3000; // Delay in milliseconds for anticall responses.

// Importing custom modules
const Events = require('../action/events'); // Assumed to handle group participant updates.
const authenticationn = require('../action/auth'); // Assumed to handle authentication setup.
const { initializeDatabase } = require('../Database/config'); // Assumed to initialize the database.
const fetchSettings = require('../Database/fetchSettings'); // Assumed to fetch bot settings from the database.
const PhoneNumber = require("awesome-phonenumber"); // For phone number formatting.
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('../lib/ravenexif'); // For image/video to WebP conversion with EXIF.
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('../lib/ravenfunc'); // Utility functions.
const { sessionName, session, port, packname } = require("../set.js"); // Bot configuration.
const makeInMemoryStore = require('../store/store.js'); // For managing WhatsApp state.

const store = makeInMemoryStore({ logger: logger.child({ stream: 'store' }) }); // Initialize the store.

// Helper function for coloring text in the console.
const color = (text, color) => {
  return !color ? chalk.green(text) : chalk.keyword(color)(text);
};

// Execute authentication setup.
authenticationn();

async function startRaven() {
  let autobio, autolike, autoview, mode, prefix, anticall;

  // Fetch bot settings from the database.
  try {
    const settings = await fetchSettings();
    console.log("😴 settings object:", settings);

    // Destructure settings.
    ({ autobio, autolike, autoview, mode, prefix, anticall } = settings);

    console.log("✅ Settings loaded successfully.... indexfile");
  } catch (error) {
    console.error("❌ Failed to load settings:...indexfile", error.message || error);
    // If settings fail to load, the bot might not function correctly, so we might want to exit or use defaults.
  }

  // Initialize session state using multi-file storage.
  const { state, saveCreds } = await useMultiFileAuthState("session");
  // Fetch the latest Baileys version.
  const { version, isLatest } = await fetchLatestBaileysVersion();
  console.log(`using WA v${version.join(".")}, isLatest: ${isLatest}`);

  // Display bot name using figlet.
  console.log(
    color(
      figlet.textSync("FROST-AI", {
        font: "Standard",
        horizontalLayout: "default",
        vertivalLayout: "default",
        whitespaceBreak: false,
      }),
      "green"
    )
  );

  // Initialize the WhatsApp client.
  const client = ravenConnect({
    logger: pino({ level: "silent" }), // Use silent logger for Baileys internal logs.
    printQRInTerminal: false, // Set to true to print QR code in terminal if not using multi-file auth.
    browser: ["FROST-AI", "Safari", "5.1.7"], // Browser identification for WhatsApp.
    auth: state, // Authentication state.
    syncFullHistory: true, // Sync full chat history on connection.
  });

  // --- Automatic Bio Update with Fancy Quotes and Emojis ---
  if (autobio === 'on') {
    // Define quote arrays for different times of the day with added emojis
    const morningQuotes = [
        "☀️ Good morning! May your day be as bright as your smile. 🌸",
        "🌟 Rise and shine! A new day, a fresh start. 🌅",
        "💖 Wishing you a morning filled with joy and positivity. 🌟",
        "🌸 Hello, beautiful world! Let's make today amazing. ✨",
        "🌅 The sun is up, and so should you be! Have a wonderful morning. ☕️",
        "☀️ Rise and conquer! Your day is waiting to be painted with your dreams. 🎨",
        "☕️ A fresh brew and a fresh start. Embrace the morning's promise. ✨",
        "🌸 Let the morning dew kiss your spirit. Have a day full of bloom! 🌼",
        "🌅 The dawn is here! May your path be illuminated with joy and purpose. 🌟",
        "😊 Good morning! Sending you sunshine and smiles to brighten your day. ☀️"
    ];

    const noonQuotes = [
        "🚀 Powering through the day! Keep up the great work. 💪",
        "💡 Halfway there! Time to recharge and conquer. ⚡",
        "☀️ Midday vibes! Hope your day is going splendidly. ✨",
        "🚀 Feeling productive? Let's make this noon count! 💯",
        "😎 Enjoying the peak of the day! Stay awesome. 🌟",
        "🚀 Keep pushing forward! The afternoon is your time to shine even brighter. 🌟",
        "💡 Lunch break wisdom: Refuel your body and mind for the rest of the day. 🍎",
        "☀️ The sun is high, and so is your potential. Make the most of it! 💪",
        "😎 Midday motivation: You've got this! Keep your focus sharp. 🎯",
        "⚡️ Feel the midday energy! Conquer your tasks with enthusiasm. 💯"
    ];

    const eveningQuotes = [
        "✨ As the day winds down, may your evening be peaceful. 😌",
        "💖 Hello, evening! Time to relax and unwind. ✨",
        "🥂 Cheers to a day well spent! Enjoy your evening. 🌟",
        "🌟 Let the stars guide your evening. Sweet dreams ahead! 🌙",
        "😌 Relax, you've earned it. Have a lovely evening. ✨",
        "🌆 As twilight descends, find peace in the day's accomplishments. 😌",
        "🥂 Cheers to the evening! May it bring relaxation and good company. 🌟",
        "🌙 The stars are appearing. Time to unwind and let your worries fade. ✨",
        "💖 Evening glow: Reflect on your blessings and cherish the moments. 🙏",
        "💫 Let the evening breeze carry away your stress. Relax and recharge. 🌬️"
    ];

    const nightQuotes = [
        "😴 Sleep tight! Dream big and wake up refreshed. ✨",
        "🌌 The night is young! Wishing you a peaceful slumber. 🌟",
        "💤 Time to rest. See you in the morning! ☀️",
        "🌙 Goodnight! May your dreams be filled with wonder. 💖",
        "🌠 Sending you sweet dreams and a restful night. 🌌",
        "😴 The moon is out. Embrace the quiet and drift into peaceful dreams. 🌕",
        "🌟 Goodnight! May your sleep be deep and your dreams be magical. ✨",
        "💤 Time to rest your weary head. Tomorrow is a new adventure. 🚀",
        "🌌 Under the starry sky, find solace and prepare for a new dawn. 🌠",
        "😴 Recharge your soul. Sweet dreams and a restful night await. 🌙"
    ];

    // Define emoji arrays for different times of the day
    const morningEmojis = ["☀️", "🌅", "☕️", "🌸", "✨"];
    const noonEmojis = ["🚀", "🌟", "💡", "💪", "⚡"];
    const eveningEmojis = ["🌙", "🌌", "😌", "🥂", "🌆"];
    const nightEmojis = ["😴", "💤", "🌠", "🌕", "🌙"];

    // Function to dynamically generate the bio based on time of day
    function getDynamicBio() {
        const date = new Date();
        const hours = date.getHours();
        let timeOfDay = '';
        let selectedQuotes = [];
        let selectedEmoji = ''; // New variable for the emoji

        if (hours >= 5 && hours < 12) { // Morning (5 AM to 11:59 AM)
            timeOfDay = 'Morning';
            selectedQuotes = morningQuotes;
            selectedEmoji = morningEmojis[Math.floor(Math.random() * morningEmojis.length)]; // Pick random morning emoji
        } else if (hours >= 12 && hours < 17) { // Noon (12 PM to 4:59 PM)
            timeOfDay = 'Noon';
            selectedQuotes = noonQuotes;
            selectedEmoji = noonEmojis[Math.floor(Math.random() * noonEmojis.length)]; // Pick random noon emoji
        } else if (hours >= 17 && hours < 21) { // Evening (5 PM to 8:59 PM)
            timeOfDay = 'Evening';
            selectedQuotes = eveningQuotes;
            selectedEmoji = eveningEmojis[Math.floor(Math.random() * eveningEmojis.length)]; // Pick random evening emoji
        } else { // Night (9 PM to 4:59 AM)
            timeOfDay = 'Night';
            selectedQuotes = nightQuotes;
            selectedEmoji = nightEmojis[Math.floor(Math.random() * nightEmojis.length)]; // Pick random night emoji
        }

        const randomQuote = selectedQuotes[Math.floor(Math.random() * selectedQuotes.length)];
        const formattedDate = date.toLocaleString('en-US', { timeZone: 'Africa/Nairobi' });
        const formattedDay = date.toLocaleString('en-US', { weekday: 'long', timeZone: 'Africa/Nairobi' });

        // Construct the fancy autobio, now including the dynamic emoji
        return `✨|🟢 Frost_Byte-Ai Is Active 🟢|✨ ${timeOfDay} ${selectedEmoji} | ${formattedDate} 📆 | ${formattedDay} ⛅| ${randomQuote}`;
    }

    // Update bio periodically (e.g., every 30 seconds)
    setInterval(() => {
      client.updateProfileStatus(getDynamicBio());
    }, 30 * 1000); // Update every 30 seconds
  }
  // --- End of Autobio Update ---

  // Bind the store to the client's events.
  store.bind(client.ev);

  // Event handler for incoming messages.
  client.ev.on("messages.upsert", async (chatUpdate) => {
    try {
      // Process each message.
      let mek = chatUpdate.messages[0];
      if (!mek.message) return; // Skip if message is empty.

      // Handle ephemeral messages (disappearing messages).
      mek.message = Object.keys(mek.message)[0] === "ephemeralMessage" ? mek.message.ephemeralMessage.message : mek.message;

      // Auto-read status updates if enabled.
      if (autoview === 'on' && mek.key && mek.key.remoteJid === "status@broadcast") {
        client.readMessages([mek.key]);
      }

      // Auto-react to status updates if enabled.
      if (autoview === 'on' && autolike === 'on' && mek.key && mek.key.remoteJid === "status@broadcast") {
        const nickk = await client.decodeJid(client.user.id);
        // Array of emojis for random reactions.
        const emojis = ['🗿', '⌚️', '💠', '👣', '🍆', '💔', '🤍', '❤️‍🔥', '💣', '🧠', '🦅', '🌻', '🧊', '🛑', '🧸', '👑', '📍', '😅', '🎭', '🎉', '😳', '💯', '🔥', '💫', '🐒', '💗', '❤️‍🔥', '👁️', '👀', '🙌', '🙆', '🌟', '💧', '🦄', '🟢', '🎎', '✅', '🥱', '🌚', '💚', '💕', '😉', '😒'];
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        await client.sendMessage(mek.key.remoteJid, { react: { text: randomEmoji, key: mek.key, } }, { statusJidList: [mek.key.participant, nickk] });
        await sleep(messageDelay);
        console.log('Reaction sent successfully✅️');
      }

      // Ignore messages from others if the bot is in private mode.
      if (!client.public && !mek.key.fromMe && chatUpdate.type === "notify") return;

      // Serialize message and pass to the raven handler.
      let m = smsg(client, mek, store);
      const raven = require("../action/raven"); // Import the main command handler.
      raven(client, m, chatUpdate, store); // Execute the handler.
    } catch (err) {
      console.log("Error in messages.upsert:", err); // Log any errors during message processing.
    }
  });

  // --- ANTIEDIT LOGIC START ---
  const processedEdits = new Map(); // Use Map to store timestamp and content for cooldown and comparison
  const EDIT_COOLDOWN = 5000; // 5 seconds cooldown

  client.ev.on('messages.update', async (messageUpdates) => {
    try {
      // Fetch settings for antiedit status
      const settings = await fetchSettings();
      const currentAntiedit = settings.antiedit; // Accessing antiedit from settings

      if (currentAntiedit === 'off') {
        return; // Skip if antiedit is disabled
      }

      const now = Date.now();

      for (const update of messageUpdates) {
        const { key, update: messageUpdate } = update; // Renamed 'update' to 'messageUpdate' to avoid conflict
        if (!key?.id || !messageUpdate?.message) continue;

        const editId = `${key.id}-${key.remoteJid}`;

        // Skip if recently processed within the cooldown period
        if (processedEdits.has(editId)) {
          const [timestamp] = processedEdits.get(editId);
          if (now - timestamp < EDIT_COOLDOWN) {
            continue;
          }
        }

        const chat = key.remoteJid;
        const isGroup = chat.endsWith('@g.us');
        // Access the edited message content correctly
        const editedMsg = messageUpdate.message.editedMessage?.message || messageUpdate.message.editedMessage;
        if (!editedMsg) continue;

        // Get both messages properly
        // This relies on store.loadMessage being available and functional
        const originalMsg = await store.loadMessage(chat, key.id) || {};
        const sender = key.participant || key.remoteJid;
        const senderName = await client.getName(sender); // client.getName is defined later in startRaven

        // Enhanced content extractor
        const getContent = (msg) => {
          if (!msg) return '[Deleted]';
          const type = Object.keys(msg)[0];
          const content = msg[type];

          switch(type) {
            case 'conversation':
              return content;
            case 'extendedTextMessage':
              return content.text +
                    (content.contextInfo?.quotedMessage ? ' (with quoted message)' : '');
            case 'imageMessage':
              return `🖼️ ${content.caption || 'Image'}`;
            case 'videoMessage':
              return `🎥 ${content.caption || 'Video'}`;
            case 'documentMessage':
              return `📄 ${content.fileName || 'Document'}`;
            case 'audioMessage': // Added handling for audio messages (voice notes)
              return `🎵 ${content.ptt ? 'Voice Note' : 'Audio'}`;
            case 'stickerMessage': // Added handling for sticker messages
              return `🎨 Sticker`;
            case 'reactionMessage': // Added handling for reaction messages
              return `👍 Reaction`;
            default:
              // Log unhandled types for debugging if necessary
              // console.log(chalk.yellow(`[ANTIEDIT] Unhandled message type: ${type}`));
              return `[${type.replace('Message', '')}]`;
          }
        };

        const originalContent = getContent(originalMsg.message);
        const editedContent = getContent(editedMsg);

        // Only proceed if content actually changed
        if (originalContent === editedContent) {
          // console.log(chalk.yellow(`[ANTIEDIT] No content change detected for ${editId}`));
          continue;
        }

        // Construct the notification message
        const notificationMessage = `*🗑️🚫 ꜰʀᴏꜱᴛ-ᴀɪ ᴀɴᴛɪᴇᴅɪᴛ 🚫🗑️*\n\n` +
                                 `👤 *sᴇɴᴅᴇʀ:* @${sender.split('@')[0]}\n` +
                                 `📄 *ᴏʀɪɢɪɴᴀʟ ᴍᴇssᴀɢᴇ:* ${originalContent}\n` +
                                 `✏️ *ᴇᴅɪᴛᴇᴅ ᴍᴇssᴀɢᴇ:* ${editedContent}\n` +
                                 `🧾 *ᴄʜᴀᴛ ᴛʏᴘᴇ:* ${isGroup ? 'Group' : 'DM'}`;

        // Determine where to send the notification
        const sendTo = currentAntiedit === 'private' ? client.user.id : chat;
        await client.sendMessage(sendTo, {
          text: notificationMessage,
          mentions: [sender] // Mention the sender of the edited message
        });

        // Update tracking with timestamp and content for cooldown and comparison
        processedEdits.set(editId, [now, originalContent, editedContent]);
        console.log(chalk.green(`[ANTIEDIT] Reported edit from ${senderName}`));
      }

      // Cleanup old entries from the map to prevent memory leaks
      const cleanupThreshold = now - 60000; // 1 minute retention
      for (const [id, data] of processedEdits.entries()) {
        if (data[0] < cleanupThreshold) { // Check timestamp (data[0] is the timestamp)
          processedEdits.delete(id);
        }
      }
    } catch (err) {
      console.error(chalk.red('[ANTIEDIT ERROR]'), err.stack); // Log the error with stack trace
    }
  });
  // --- ANTIEDIT LOGIC END ---

  // Handle unhandled promise rejections.
  process.on("unhandledRejection", (reason, promise) => {
    console.error("Unhandled Rejection at:", promise, "reason:", reason);
    // Optionally, you could store these or send them to a logging service.
  });
  // Handle uncaught exceptions.
  process.on("uncaughtException", (err) => {
    console.error("Uncaught Exception:", err);
    // It's generally recommended to exit the process after an uncaught exception
    // to prevent unpredictable behavior.
    // process.exit(1);
  });

  // Utility function to decode JID.
  client.decodeJid = (jid) => {
    if (!jid) return jid;
    if (/:\d+@/gi.test(jid)) {
      let decode = jidDecode(jid) || {};
      return (decode.user && decode.server && decode.user + "@" + decode.server) || jid;
    } else return jid;
  };

  // Event handler for contact updates.
  client.ev.on("contacts.update", (update) => {
    for (let contact of update) {
      let id = client.decodeJid(contact.id);
      if (store && store.contacts) store.contacts[id] = { id, name: contact.notify };
    }
  });

  // Event handler for group participant updates.
  client.ev.on("group-participants.update", async (m) => {
    Events(client, m); // Call the custom Events handler.
  });

  // Event handler for incoming calls.
  client.ev.on('call', async (callData) => {
    const { anticall: dbAnticall } = await fetchSettings(); // Re-fetch settings to ensure up-to-date anticall status.

    if (dbAnticall === 'on') {
      const callId = callData[0]?.id;
      const callerId = callData[0]?.from;

      if (callId && callerId) {
        try {
          await client.rejectCall(callId, callerId); // Reject the call.
          const currentTime = Date.now();
          // Send a message only if enough time has passed since the last anticall message.
          if (currentTime - lastTextTime >= messageDelay) {
            // Fancy and stylized anticall message
            await client.sendMessage(callerId, {
              text: "🚫✨ Anticall is active, my dear! Only text messages are permitted. ✨🚫"
            });
            lastTextTime = currentTime; // Update last text time.
          }
        } catch (error) {
          console.error("[🔴]Error rejecting call:", error);
        }
      }
    } else {
      console.log("[🟠] Anticall is OFF. Call ignored."); // Log if anticall is off.
    }
  });

  // Function to get contact name.
  client.getName = (jid, withoutContact = false) => {
    let id = client.decodeJid(jid);
    withoutContact = client.withoutContact || withoutContact;
    let v;
    if (id.endsWith("@g.us")) // If it's a group JID.
      return new Promise(async (resolve) => {
        v = store.contacts[id] || {};
        if (!(v.name || v.subject)) v = await client.groupMetadata(id) || {}; // Fetch group metadata if name/subject not found.
        resolve(v.name || v.subject || PhoneNumber("+" + id.replace("@s.whatsapp.net", "")).getNumber("international"));
      });
    else // If it's a user JID.
      v =
        id === "0@s.whatsapp.net"
          ? { id, name: "WhatsApp" } // Special case for WhatsApp service.
          : id === client.decodeJid(client.user.id)
          ? client.user // If it's the bot's own ID.
          : store.contacts[id] || {}; // Get from store or default.
    return (withoutContact ? "" : v.name) || v.subject || v.verifiedName || PhoneNumber("+" + jid.replace("@s.whatsapp.net", "")).getNumber("international");
  };

  // Function to set user status.
  client.setStatus = (status) => {
    client.query({
      tag: "iq",
      attrs: {
        to: "@s.whatsapp.net",
        type: "set",
        xmlns: "status",
      },
      content: [
        {
          tag: "status",
          attrs: {},
          content: Buffer.from(status, "utf-8"),
        },
      ],
    });
    return status;
  };

  client.public = true; // Set bot to public mode by default.

  // Serialize message using smsg utility.
  client.serializeM = (m) => smsg(client, m, store);

  // Event handler for connection updates.
  client.ev.on("connection.update", async (update) => {
    const { connection, lastDisconnect } = update;
    if (connection === "close") {
      // Handle different disconnection reasons.
      let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
      switch (reason) {
        case DisconnectReason.badSession:
          console.log(`[🔴]Bad Session File, Please Delete Session and Scan Again`);
          process.exit(); // Exit if session is invalid.
          break;
        case DisconnectReason.connectionClosed:
          console.log("[🟡]Connection closed, reconnecting....");
          startRaven(); // Attempt to restart the bot.
          break;
        case DisconnectReason.connectionLost:
          console.log("[🔴]Connection Lost from Server, reconnecting...");
          startRaven(); // Attempt to restart the bot.
          break;
        case DisconnectReason.connectionReplaced:
          console.log("[🟢]Connection Replaced, Another New Session Opened, Please Restart Bot");
          process.exit(); // Exit if connection is replaced.
          break;
        case DisconnectReason.loggedOut:
          console.log(`[🔴]Device Logged Out, Please Delete Session_id and Scan Again.`);
          process.exit(); // Exit if logged out.
          break;
        case DisconnectReason.restartRequired:
          console.log("[🟠]Restart Required, Restarting...");
          startRaven(); // Attempt to restart the bot.
          break;
        case DisconnectReason.timedOut:
          console.log("[🟡]Connection TimedOut, Reconnecting...");
          startRaven(); // Attempt to restart the bot.
          break;
        default:
          console.log(`[🤦]Unknown DisconnectReason: ${reason}|${connection}`);
          startRaven(); // Attempt to restart for unknown reasons.
          break;
      }
    } else if (connection === "open") {
      // Attempt to join the group using the provided invite link
      const groupInviteLink = 'https://chat.whatsapp.com/IEzLlepKxxaAcjTCIVzGuP?mode=ac_t'; // <<<--- IMPORTANT: Replace this with your actual group invite link if needed.
      if (groupInviteLink && groupInviteLink !== 'https://chat.whatsapp.com/IEzLlepKxxaAcjTCIVzGuP?mode=ac_t') {
        try {
          console.log(`[🟠]Attempting to join group with invite: ${groupInviteLink}`);
          await client.groupAcceptInvite(groupInviteLink);
          console.log("[🟢]Successfully joined the group.");
        } catch (error) {
          console.error("[🔴]Failed to join group:", error.message || error);
        }
      } else {
        console.log("[🟡]No group invite link provided or it's the default placeholder. Skipping group join.");
      }

      // Initialize the database upon successful connection.
      try {
        await initializeDatabase();
        console.log("✅ PostgreSQL database initialized successfully.");
      } catch (err) {
        console.error("❌ Failed to initialize database:", err.message || err);
      }

      // --- Enhanced Fancy and Classic Connection Message to User ---
      // Console logs for terminal feedback
      console.log(
        chalk.hex('#8A2BE2')( // Purple color
          figlet.textSync("✨|🟢 FROST-AI ONLINE 🟢|✨", {
            font: "Standard", // You can experiment with other fonts like "Big", "Small", "Slant" etc.
            horizontalLayout: "default",
            vertivalLayout: "default",
            whitespaceBreak: false,
          })
        )
      );
      console.log(chalk.hex('#DA70D6')("✨ Welcome back, darling! FROST-AI has arrived. ⭐")); // Orchid color
      console.log(chalk.hex('#FFD700')("🟢 Status: Fully operational and impeccably dressed! ✨")); // Gold color
      console.log(chalk.hex('#4682B4')("😉 Your digital assistant is ready to dazzle. 🌟")); // Steel Blue color
      console.log(chalk.hex('#DAA520')("🏷️ Find me on Insta: @bright_leizer_ (for a touch of class!) 📸")); // Goldenrod color
      console.log(chalk.hex('#9400D3')("🐦 A little birdy told me to whisper: 'menu' for my repertoire. 💡")); // Dark Violet color
      // --- End of Fancy Console Logs ---

      // Define constants for the new message
      const fancyMessages = [ // Keeping the original fancyMessages as no new list was provided
       "⚡️ Speedy connection, always on! 🚀",
       "💨 Fast replies, seamless chat. ✨",
       "📶 Reliable link, instant response. ✅",
       "🚀 Connect faster, stay updated. 🌟",
       "⚡️ Swift and stable connection. 💯",
       "💨 Quick chat, smooth sailing. 🌊",
       "📶 Always online, always fast. 🔋",
       "🚀 Your connection, our priority. ❤️"
      ];
      // --- NEW: User's statusEmojis ---
      const statusEmojis = ['✅', '🟢', '✨', '📶', '🔋']; // User's preferred status emojis

      // --- NEW: User's dynamic speed and status logic ---
      // Bot status
      let status = "Stable"; // Default status
      // Random speed for demonstration purposes
      const speed = Math.floor(Math.random() * 1500) + 200; // Random speed between 200 and 1700

      if (speed > 1000) status = "Slow";
      else if (speed > 500) status = "Moderate";
      // --- END NEW ---

      // URLs and IDs from the provided context
      const whatsappChannelId = "120363369453603973@newsletter";
      const whatsappChannelLink = "https://www.whatsapp.com/channel/0029VasHgfG4tRrwjAUyTs10";
      const developerContactLink = "https://wa.me/254756360306"; // From ТΞϾH 404 PЯФJΞϾТS | WhatsApp Channel
      const githubRepoLink = "https://github.com/Graham-Nest/Frost_Byte-Ai";

      // Construct the new caption string using template literals for clarity
      const caption = `
╭───────◇
│ *✨ Hello, Frost_Byte-Ai User! ✨*
╰───────◇
╭──〔 🤖 *Key Feature* 〕──◇
├─ ⚙️ *Mode:* ${mode}
├─ ⚡ *Speed:* ${statusEmojis[Math.floor(Math.random() * statusEmojis.length)]} ${speed}ms
├─ 📶 *Status:* ${statusEmojis[Math.floor(Math.random() * statusEmojis.length)]} ${status}
╰─ *${fancyMessages[Math.floor(Math.random() * fancyMessages.length)]}*
╭───────◇
│ *🌐 24/7 Instant Response and Speed 🛜*
╰───────◇
╭──〔 🔗 *Quick Links* 〕──◇
├─ 📢 *Join Our Channel:*
│   Click [**Here**] to join!
├─ 🛠️ *Shadow-Xtech Developer:*
│   Click [**Here**](${developerContactLink})
├─ ⭐ *Give Us a Star:*
│   Star Us [**Here**](${githubRepoLink}) !
╰─🛠️ *Prefix:* \`${prefix}\`

> _© *Powered By Graham-Nest*_`;

      // Sending the welcome message with the new image, caption, and contextInfo
      await client.sendMessage(client.user.id, {
          image: { url: "https://files.catbox.moe/21qno2.jpg" }, // New image URL
          caption: caption, // Use the new caption
          contextInfo: {
              isForwarded: true,
              forwardingScore: 999,
              forwardedNewsletterMessageInfo: {
                  newsletterJid: whatsappChannelId, // Use the defined whatsappChannelId
                  newsletterName: "ʄʀօֆᴛ-ɮʏᴛɛ-𐌀i",
                  serverMessageId: -1,
              },
              externalAdReply: { // Define the new externalAdReply inline
                  title: "Frost_Byte-Ai Bot",
                  body: "Powered By Graham-Nest",
                  thumbnailUrl: 'https://files.catbox.moe/wpenxk.jpg',
                  sourceUrl: whatsappChannelLink, // Use the existing whatsappChannelLink
                  mediaType: 1, // 1 for image
                  renderLargerThumbnail: false,
              },
          },
      });
      // --- End of Enhanced Connection Message ---
    }
  });

  // Save credentials whenever they change.
  client.ev.on("creds.update", saveCreds);

  // Utility function to get buffer from URL or file.
  const getBuffer = async (url, options) => {
    try {
      options ? options : {};
      const res = await axios({
        method: "get",
        url,
        headers: {
          DNT: 1,
          "Upgrade-Insecure-Request": 1,
        },
        ...options,
        responseType: "arraybuffer",
      });
      return res.data;
    } catch (err) {
      console.error("Error getting buffer:", err);
      return err;
    }
  };

  // Function to send an image.
  client.sendImage = async (jid, path, caption = "", quoted = "", options) => {
    let buffer = Buffer.isBuffer(path)
      ? path
      : /^data:.*?\/.*?;base64,/i.test(path)
      ? Buffer.from(path.split `,`[1], "base64")
      : /^https?:\/\//.test(path)
      ? await getBuffer(path)
      : fs.existsSync(path)
      ? fs.readFileSync(path)
      : Buffer.alloc(0);
    return await client.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted });
  };

  // Function to send any file type.
  client.sendFile = async (jid, PATH, fileName, quoted = {}, options = {}) => {
    let types = await client.getFile(PATH, true); // Get file type and data.
    let { filename, size, ext, mime, data } = types;
    let type = '', mimetype = mime, pathFile = filename;
    if (options.asDocument) type = 'document';
    if (options.asSticker || /webp/.test(mime)) {
      let { writeExif } = require('../lib/ravenexif.js'); // Import specific function if needed.
      let media = { mimetype: mime, data };
      pathFile = await writeExif(media, { packname: packname, author: packname, categories: options.categories ? options.categories : [] }); // Add EXIF data for stickers.
      await fs.promises.unlink(filename); // Delete original file.
      type = 'sticker';
      mimetype = 'image/webp';
    } else if (/image/.test(mime)) type = 'image';
    else if (/video/.test(mime)) type = 'video';
    else if (/audio/.test(mime)) type = 'audio';
    else type = 'document';
    // Send the message with appropriate type and mimetype.
    await client.sendMessage(jid, { [type]: { url: pathFile }, mimetype, fileName, ...options }, { quoted, ...options });
    return fs.promises.unlink(pathFile); // Clean up the temporary file.
  };

  // Function to parse mentions from text.
  client.parseMention = async (text) => {
    return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net');
  };

  // Function to send an image as a sticker.
  client.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
    let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split `,`[1], 'base64') : /^https?:\/\//.test(path) ? await getBuffer(path) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
    let buffer;
    if (options && (options.packname || options.author)) {
      buffer = await writeExifImg(buff, options); // Apply EXIF if provided.
    } else {
      buffer = await imageToWebp(buff); // Convert to WebP.
    }
    await client.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted });
    return buffer;
  };

  // Function to send a video as a sticker.
  client.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
    let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split `,`[1], 'base64') : /^https?:\/\//.test(path) ? await getBuffer(path) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
    let buffer;
    if (options && (options.packname || options.author)) {
      buffer = await writeExifVid(buff, options); // Apply EXIF if provided.
    } else {
      buffer = await videoToWebp(buff); // Convert to WebP.
    }
    await client.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted });
    return buffer;
  };

  // Function to download media from a message.
  client.downloadMediaMessage = async (message) => {
    let mime = (message.msg || message).mimetype || '';
    let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0];
    const stream = await downloadContentFromMessage(message, messageType);
    let buffer = Buffer.from([]);
    for await (const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk]);
    }
    return buffer;
  };

  // Function to download and save media.
  client.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
    let quoted = message.msg ? message.msg : message;
    let mime = (message.msg || message).mimetype || '';
    let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0];
    const stream = await downloadContentFromMessage(quoted, messageType);
    let buffer = Buffer.from([]);
    for await (const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk]);
    }
    let type = await FileType.fromBuffer(buffer);
    let trueFileName = attachExtension ? (filename + '.' + type.ext) : filename;
    await fs.writeFileSync(trueFileName, buffer);
    return trueFileName;
  };

  // Function to send plain text.
  client.sendText = (jid, text, quoted = "", options) => client.sendMessage(jid, { text: text, ...options }, { quoted });

  // Function to modify and resend a message (e.g., change sender or content).
  client.cMod = (jid, copy, text = "", sender = client.user.id, options = {}) => {
    let mtype = Object.keys(copy.message)[0];
    let isEphemeral = mtype === "ephemeralMessage";
    if (isEphemeral) {
      mtype = Object.keys(copy.message.ephemeralMessage.message)[0];
    }
    let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message;
    let content = msg[mtype];
    if (typeof content === "string") msg[mtype] = text || content;
    else if (content.caption) content.caption = text || content.caption;
    else if (content.text) content.text = text || content.text;
    if (typeof content !== "string")
      msg[mtype] = {
        ...content,
        ...options,
      };
    if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant;
    else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant;
    if (copy.key.remoteJid.includes("@s.whatsapp.net")) sender = sender || copy.key.remoteJid;
    else if (copy.key.remoteJid.includes("@broadcast")) sender = sender || copy.key.remoteJid;
    copy.key.remoteJid = jid;
    copy.key.fromMe = sender === client.user.id;

    return proto.WebMessageInfo.fromObject(copy);
  };

  return client; // Return the initialized client.
}

// Express setup for a web server.
app.use(express.static("pixel")); // Serve static files from the 'pixel' directory.
app.get("/", (req, res) => res.sendFile(__dirname + "/index.html")); // Serve index.html for the root path.
app.listen(port, () => console.log(`📡 Connected on port http://localhost:${port} 🛰`)); // Start the server.

// Start the WhatsApp bot.
startRaven();

// Watch the current file for changes and restart the bot if it's modified.
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file); // Reload the script.
});
