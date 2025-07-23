const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, getBinaryNodeChild, getBinaryNodeChildren, prepareWAMessageMedia, areJidsSameUser, getContentType } = require("@whiskeysockets/baileys");
const fs = require("fs");
const path = require('path');
const util = require("util");
const mumaker = require("mumaker");
const crypto = require('crypto');
const translatte = require('translatte');
global.axios = require('axios').default
const chalk = require("chalk");
const speed = require("performance-now");
const Genius = require("genius-lyrics");
const yts = require("yt-search");
let lastTextTime = 0;
const messageDelay = 3000;
const ffmpeg = require("fluent-ffmpeg");
const fetch = require("node-fetch");
const { DateTime } = require('luxon');
const BASE_URL = 'https://noobs-api.top';
const uploadtoimgur = require('../lib/imgur');
const uploadToCatbox = require('../lib/catbox');
const advice = require("badadvice");
const {c, cpp, node, python, java} = require('compile-run');
const acrcloud = require("acrcloud"); 
const ytdl = require("ytdl-core");
const Client = new Genius.Client("TUoAEhL79JJyU-MpOsBDkFhJFWFH28nv6dgVgPA-9R1YRwLNP_zicdX2omG2qKE8gYLJat5F5VSBNLfdnlpfJg"); // Scrapes if no key is provided
const { downloadYouTube, downloadSoundCloud, downloadSpotify, searchYouTube, searchSoundCloud, searchSpotify } = require('../action/wee');
const { getSettings, updateSetting } = require('../Database/config');
const fetchSettings = require('../Database/fetchSettings');
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('../lib/ravenupload');
const { Configuration, OpenAI } = require("openai");
const { menu, menulink, appname, herokuapi, botname, author, packname, mycode, admin, botAdmin, dev, group, bad, owner, NotOwner } = require("../set.js");


const { smsg, runtime, fetchUrl, isUrl, processTime, formatp, tanggal, formatDate, getTime,  sleep, generateProfilePicture, clockString, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('../lib/ravenfunc');
const { exec, spawn, execSync } = require("child_process");
module.exports = raven = async (client, m, chatUpdate, store) => {
  try {

const {
  wapresence,
  autoread,
  mode,
  prefix,
  antilink,
  antilinkall,
  antidelete,
  gptdm,
  badword,
  antibot,
  antitag	
} = await fetchSettings(); 
	  
console.log(prefix);
	  
    var body =
      m.mtype === "conversation"
        ? m.message.conversation
        : m.mtype == "extendedTextMessage"
        ? m.message.extendedTextMessage.text
        : m.mtype == "buttonsResponseMessage"
        ? m.message.buttonsResponseMessage.selectedButtonId
        : m.mtype == "listResponseMessage"
        ? m.message.listResponseMessage.singleSelectReply.selectedRowId
        : m.mtype == "templateButtonReplyMessage"
        ? m.message.templateButtonReplyMessage.selectedId
        : m.mtype === "messageContextInfo"
        ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text
        : "";
    var budy = typeof m.text == "string" ? m.text : "";
    var msgR = m.message.extendedTextMessage?.contextInfo?.quotedMessage;  
//========================================================================================================================//
//========================================================================================================================//	  
    const Heroku = require("heroku-client");  
    const command = body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase();
    const args = body.trim().split(/ +/).slice(1);
    const pushname = m.pushName || "No Name";
    const botNumber = await client.decodeJid(client.user.id);
    const itsMe = m.sender == botNumber ? true : false;
    let text = (q = args.join(" "));
    const arg = budy.trim().substring(budy.indexOf(" ") + 1);
    const arg1 = arg.trim().substring(arg.indexOf(" ") + 1);
    m.isBaileys = m.id.startsWith("BAE5") && m.id.length === 16;
    const from = m.chat;
    const reply = m.reply;
    const sender = m.sender;
    const mek = chatUpdate.messages[0];
//========================================================================================================================//	  
    const getGroupAdmins = (participants) => { 
       let admins = []; 
       for (let i of participants) { 
         i.admin === "superadmin" ? admins.push(i.id) : i.admin === "admin" ? admins.push(i.id) : ""; 
       } 
       return admins || []; 
     };
//========================================================================================================================//
//========================================================================================================================//	  
    const nicki = (m.quoted || m); 
    const quoted = (nicki.mtype == 'buttonsMessage') ? nicki[Object.keys(nicki)[1]] : (nicki.mtype == 'templateMessage') ? nicki.hydratedTemplate[Object.keys(nicki.hydratedTemplate)[1]] : (nicki.mtype == 'product') ? nicki[Object.keys(nicki)[0]] : m.quoted ? m.quoted : m; 

    const color = (text, color) => {
      return !color ? chalk.green(text) : chalk.keyword(color)(text);
    };
//========================================================================================================================//	  
    const mime = (quoted.msg || quoted).mimetype || "";
    const qmsg = (quoted.msg || quoted);
    const cmd = body.startsWith(prefix);
    const badwords = bad.split(",");
//========================================================================================================================//		      
//========================================================================================================================//	      
    const groupMetadata = m.isGroup ? await client.groupMetadata(m.chat).catch((e) => { }) : "";  
    const groupName = m.isGroup && groupMetadata ? await groupMetadata.subject : "";  
    const participants = m.isGroup && groupMetadata
  ? groupMetadata.participants
      .filter(p => p.pn)
      .map(p => p.pn)
  : [];
    const groupAdmin = m.isGroup
  ? groupMetadata.participants
      .filter(p => p.admin && p.pn)
      .map(p => p.pn)
  : [];
    const isBotAdmin = m.isGroup ? groupAdmin.includes(botNumber) : false; 
	const groupSender = m.isGroup && groupMetadata
  ? (() => {
      const found = groupMetadata.participants.find(p => 
        p.id === sender || client.decodeJid(p.id) === client.decodeJid(sender)
      );
      return found?.pn || sender;
    })()
  : sender;
     const isAdmin = m.isGroup ? groupAdmin.includes(groupSender) : false;
     const Owner = owner.map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(groupSender)	
     const Dev = '254114660061'.split(",");
     const date = new Date()  
     const timestamp = speed(); 
     const Rspeed = speed() - timestamp 
//========================================================================================================================//
//========================================================================================================================//
const baseDir = 'message_data';

// --- File System Helper Functions ---
function loadChatData(remoteJid, messageId) {
  const chatFilePath = path.join(baseDir, remoteJid, `${messageId}.json`);
  try {
    if (fs.existsSync(chatFilePath)) {
      const data = fs.readFileSync(chatFilePath, 'utf8');
      return JSON.parse(data) || [];
    }
    return [];
  } catch (error) {
    console.error(`Error loading chat data for ${remoteJid}/${messageId}:`, error);
    return [];
  }
}

function saveChatData(remoteJid, messageId, chatData) {
  const chatDir = path.join(baseDir, remoteJid);

  if (!fs.existsSync(chatDir)) {
    fs.mkdirSync(chatDir, { recursive: true });
  }

  const chatFilePath = path.join(chatDir, `${messageId}.json`);

  try {
    fs.writeFileSync(chatFilePath, JSON.stringify(chatData, null, 2));
  } catch (error) {
    console.error('Error saving chat data:', error);
  }
}

function handleIncomingMessage(message) {
  const remoteJid = message.key.remoteJid;
  const messageId = message.key.id;

  const chatData = loadChatData(remoteJid, messageId);
  chatData.push(message);
  saveChatData(remoteJid, messageId, chatData);
}

// --- Unicode Styling Helper Functions ---
const whatsappChannelId = "120363369453603973@newsletter"; // Replace with your actual channel ID
const whatsappChannelLink = "https://whatsapp.com/channel/0029VasHgfG4tRrwjAUyTs10"; // Replace with your actual channel link


// --- Unicode Styling Helper Functions ---
// Converts text to bold Unicode characters
function toBoldUnicode(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const charCode = char.charCodeAt(0);
        if (charCode >= 65 && charCode <= 90) { // Uppercase A-Z
            result += String.fromCharCode(charCode + 0x1D400); // 𝗔-𝙕
        } else if (charCode >= 97 && charCode <= 122) { // Lowercase a-z
            result += String.fromCharCode(charCode + 0x1D431); // 𝗮-𝘇
        } else {
            result += char; // Keep other characters as is
        }
    }
    return result;
}

// --- Sassy Phrase Definitions ---
const sassyPhrases = [
    { name: "Ghosted Whispers", emoji: "👻", description: "frost_Byte-Ai caught the 👻 *ghosted whispers* before they could fade!" },
    { name: "Vanished Secrets", emoji: "✨", description: "No secret is safe from frost_Byte-Ai; it recovers all ✨ *vanished secrets*." },
    { name: "Silenced Truths", emoji: "🤫", description: "frost_Byte-Ai's here to expose the 🤫 *silenced truths* that were meant to disappear." },
    { name: "Evaporated Echoes", emoji: "💨", description: "Don't worry, frost_Byte-Ai always finds the 💨 *evaporated echoes* of your chats." }
];

// Function to pick a random sassy phrase description
function getRandomSassyPhraseDescription() {
    const randomIndex = Math.floor(Math.random() * sassyPhrases.length);
    return sassyPhrases[randomIndex].description;
}

// --- Main Message Revocation Handler ---
// It attempts to retrieve and resend the deleted message content with enhanced styling.
async function handleMessageRevocation(client, revocationMessage) {
  const remoteJid = revocationMessage.key.remoteJid;
  const messageId = revocationMessage.message.protocolMessage.key.id;

  // Load the original message data using the provided helper function
  const chatData = loadChatData(remoteJid, messageId);
  const originalMessage = chatData.length > 0 ? chatData[0] : null;

  if (!originalMessage) {
    console.log(`Original message not found for ID: ${messageId}`);
    return;
  }

  // Determine who deleted the message.
  const deletedBy = revocationMessage.participant || revocationMessage.key.participant || revocationMessage.key.remoteJid;
  // Format participant IDs for a cleaner display.
  const deletedByFormatted = deletedBy ? `@${deletedBy.split('@')[0]}` : 'Unknown';

  // --- Construct the core notification parts ---
  // This forms the initial stylish and sassy notification.
  let notificationText = `✨👑 𝒀𝒐𝒖 𝒄𝒂𝒏'𝒕 𝒉𝒊𝒅𝒆 𝒇𝒓𝒐𝒎 𝑭𝒓𝒐𝒔𝒕_𝑩𝒚𝒕𝒆-𝑨𝒊! 👑✨\n\n`;
  // Incorporate a random sassy phrase.
  const randomSassyDescriptor = getRandomSassyPhraseDescription();
  notificationText += `${randomSassyDescriptor}\n\n`;
  // Combine with the specific message about silencing and the deleter.
  const mainNotification = `${notificationText}🤫 𝒀𝒐𝒖 𝒄𝒂𝒏'𝒕 𝒔𝒊𝒍𝒆𝒏𝒄𝒆 𝒕𝒉𝒊𝒔 𝒎𝒆𝒔𝒔𝒂𝒈𝒆! 𝑫𝒆𝒍𝒆𝒕𝒆𝒅 𝑴𝒆𝒔𝒔𝒂𝒈𝒆 𝒃𝒚: ${toBoldUnicode(deletedByFormatted)} 🤫\n\n`;

  // --- Define common externalAdReply structure ---
  // This structure will be used for all media messages to provide rich context.
  const commonExternalAdReply = {
      title: "Frost_Byte-Ai Bot",
      body: "Powered By Graham-Nest",
      thumbnailUrl: 'https://files.catbox.moe/wpenxk.jpg', // Consistent thumbnail for all media
      sourceUrl: whatsappChannelLink, // Link to the bot's channel
      renderLargerThumbnail: false,
  };

  try {
    // --- Message Content Handling based on Type ---
    // This block determines the type of the deleted message and formats the content accordingly.

    if (originalMessage.message?.conversation || originalMessage.message?.extendedTextMessage) {
      // --- Text or Extended Text Message ---
      let messageText = '';
      if (originalMessage.message?.conversation) {
        messageText = originalMessage.message.conversation;
      } else if (originalMessage.message?.extendedTextMessage) {
        messageText = originalMessage.message.extendedTextMessage.text;
      }
      
      // Format the recovered message content.
      const messageContent = `💬 𝑨 𝒎𝒆𝒔𝒔𝒂𝒈𝒆 𝒈𝒐𝒕 𝒆𝒓𝒂𝒔𝒆𝒅... 𝑯𝒆𝒓𝒆'𝒔 𝒘𝒉𝒂𝒕 𝒚𝒐𝒖 𝒎𝒊𝒔𝒔𝒆𝒅, 𝒅𝒆𝒂𝒓: \n\n${toBoldUnicode(messageText)} 💅`;
      // Combine notification and message content.
      const finalMessage = `${mainNotification}${messageContent}`;
      
      // Send the recovered text message with contextInfo.
      await client.sendMessage(client.user.id, {
          text: finalMessage, // The actual text content
          contextInfo: {
              isForwarded: true,
              forwardingScore: 999,
              forwardedNewsletterMessageInfo: {
                  newsletterJid: whatsappChannelId,
                  newsletterName: "ʄʀօֆᴛ-ɮʏᴛɛ-𐌀i",
                  serverMessageId: -1,
              },
              externalAdReply: {
                  ...commonExternalAdReply,
                  mediaType: 0, // Use 0 for text/unknown media type in external ad reply
                  title: "Frost_Byte-Ai Bot", // General title for text notifications
                  body: "Recovered Deleted Message", // General body
              },
          },
      });

    } else if (originalMessage.message?.imageMessage) {
      // --- Image Message ---
      const ImageM = originalMessage.message.imageMessage;
      const messageContent = `📸 𝑨 𝒑𝒊𝒄𝒕𝒖𝒓𝒆 𝒑𝒆𝒓𝒇𝒆𝒄𝒕 𝒎𝒐𝒎𝒆𝒏𝒕, 𝒏𝒐𝒘 𝒓𝒆𝒄𝒐𝒗𝒆𝒓𝒆𝒅! 𝑭𝒓𝒐𝒔𝒕_𝑩𝒚𝒕𝒆-𝑨𝒊's 𝒈𝒐𝒕 𝒚𝒐𝒖𝒓 𝒃𝒂𝒄𝒌. [Image] 🌟`;
      const mediaCaption = `✨ 𝑶𝒓𝒊𝒈𝒊𝒏𝒂𝒍 𝑪𝒂𝒑𝒕𝒊𝒐𝒏: ${ImageM.caption ? toBoldUnicode(ImageM.caption) : 'No caption provided. 🤷‍♀️'}`;
      // Combine all parts for the final caption of the media message.
      const fullCaption = `${mainNotification}${messageContent}\n${mediaCaption}`;

      try {
        // Download the media content.
        const buffer = await client.downloadMediaMessage(ImageM);
        // Send the recovered image with the notification as caption and context.
        await client.sendMessage(client.user.id, {
          image: buffer, // Use the downloaded buffer for the image
          caption: fullCaption, // Use the combined caption
          contextInfo: {
              isForwarded: true,
              forwardingScore: 999,
              forwardedNewsletterMessageInfo: {
                  newsletterJid: whatsappChannelId, // Use the defined whatsappChannelId
                  newsletterName: "ʄʀօֆᴛ-ɮʏᴛɛ-𐌀i", // Hardcoded name as in example
                  serverMessageId: -1, // Placeholder as in example
              },
              externalAdReply: {
                  ...commonExternalAdReply,
                  mediaType: 1, // 1 for image
              },
          },
        });
      } catch (mediaError) {
        console.error('Failed to download image:', mediaError);
        // Send a notification if media recovery fails.
        await client.sendMessage(client.user.id, { text: `${mainNotification}${messageContent}\n\n⚠️ Could not recover deleted image (media expired or inaccessible). 😥` });
      }

    } else if (originalMessage.message?.videoMessage) {
      // --- Video Message ---
      const VideoM = originalMessage.message.videoMessage;
      const messageContent = `🎬 𝑨 𝒗𝒊𝒅𝒆𝒐 𝒄𝒍𝒊𝒑 𝒕𝒉𝒂𝒕 𝒗𝒂𝒏𝒊𝒔𝒉𝒆𝒅... 𝑩𝒖𝒕 𝒏𝒐𝒕 𝒇𝒓𝒐𝒎 𝑭𝒓𝒐𝒔𝒕_𝑩𝒚𝒕𝒆-𝑨𝒊's 𝒎𝒆𝒎𝒐𝒓𝒚! 𝑩𝒓𝒊𝒏𝒈𝒊𝒏𝒈 𝒊𝒕 𝒃𝒂𝒄𝒌. [Video] 💎`;
      const mediaCaption = `✨ 𝑶𝒓𝒊𝒈𝒊𝒏𝒂𝒍 𝑪𝒂𝒑𝒕𝒊𝒐𝒏: ${VideoM.caption ? toBoldUnicode(VideoM.caption) : 'No caption provided. 🤷‍♀️'}`;
      const fullCaption = `${mainNotification}${messageContent}\n${mediaCaption}`;

      try {
        const buffer = await client.downloadMediaMessage(VideoM);
        // Send the recovered video.
        await client.sendMessage(client.user.id, {
          video: buffer, // Use the downloaded buffer
          caption: fullCaption, // Use the combined caption
          contextInfo: {
              isForwarded: true,
              forwardingScore: 999,
              forwardedNewsletterMessageInfo: {
                  newsletterJid: whatsappChannelId,
                  newsletterName: "ʄʀօֆᴛ-ɮʏᴛɛ-𐌀i",
                  serverMessageId: -1,
              },
              externalAdReply: {
                  ...commonExternalAdReply,
                  mediaType: 2, // 2 for video
              },
          },
        });
      } catch (mediaError) {
        console.error('Failed to download video:', mediaError);
        await client.sendMessage(client.user.id, { text: `${mainNotification}${messageContent}\n\n⚠️ Could not recover deleted video (media expired or inaccessible). 😥` });
      }

    } else if (originalMessage.message?.stickerMessage) {
      // --- Sticker Message ---
      const StickerM = originalMessage.message.stickerMessage;
      const messageContent = `🎨 𝑨 𝒔𝒕𝒊𝒄𝒌𝒆𝒓 𝒕𝒉𝒂𝒕 𝒅𝒊𝒔𝒂𝒑𝒑𝒆𝒂𝒓𝒆𝒅! 𝑹𝒆𝒄𝒐𝒗𝒆𝒓𝒆𝒅 𝒂 𝒎𝒆𝒎𝒐𝒓𝒚 𝒇𝒐𝒓 𝒚𝒐𝒖. 💋 [Sticker]`;
      // Stickers don't typically have a separate caption field in the same way images/videos do.
      // The notification text will be part of the externalAdReply title/body.
      const fullTitle = `${mainNotification}${messageContent}`; // Use this for the title

      try {
        const buffer = await client.downloadMediaMessage(StickerM);
        // Stickers are sent as 'sticker: buffer' but contextInfo is crucial for rich display.
        await client.sendMessage(client.user.id, {
          sticker: buffer, // Use the downloaded buffer
          contextInfo: {
              isForwarded: true,
              forwardingScore: 999,
              forwardedNewsletterMessageInfo: {
                  newsletterJid: whatsappChannelId,
                  newsletterName: "ʄʀօֆᴛ-ɮʏᴛɛ-𐌀i",
                  serverMessageId: -1,
              },
              externalAdReply: {
                  ...commonExternalAdReply,
                  title: fullTitle, // Title includes notification and content
                  body: `𝑫𝒆𝒍𝒆𝒕𝒆𝒅 𝑴𝒆𝒔𝒔𝒂𝒈𝒆 𝒃𝒚: ${toBoldUnicode(deletedByFormatted)} 💅`, // Body for context
                  mediaType: 1, // Sticker media type
              },
          },
        });
      } catch (mediaError) {
        console.error('Failed to download sticker:', mediaError);
        await client.sendMessage(client.user.id, { text: `${mainNotification}${messageContent}\n\n⚠️ Could not recover deleted sticker. 😥` });
      }

    } else if (originalMessage.message?.documentMessage) {
      // --- Document Message ---
      const docMessage = originalMessage.message.documentMessage;
      const messageContent = `📄 𝑨 𝒅𝒐𝒄𝒖𝒎𝒆𝒏𝒕 𝒕𝒉𝒂𝒕 𝒗𝒂𝒏𝒊𝒔𝒉𝒆𝒅! 𝑹𝒆𝒄𝒐𝒗𝒆𝒓𝒆𝒅 𝒇𝒐𝒓 𝒚𝒐𝒖, 𝒅𝒂𝒓𝒍𝒊𝒏𝒈. [Document] 📚`;
      const mediaCaption = `✨ 𝑭𝒊𝒍𝒆 𝑵𝒂𝒎𝒆: ${docMessage.fileName || 'N/A'} 📚`;
      const fullCaption = `${mainNotification}${messageContent}\n${mediaCaption}`;

      try {
        const buffer = await client.downloadMediaMessage(docMessage);
        // Send the recovered document.
        await client.sendMessage(client.user.id, {
          document: buffer,
          fileName: docMessage.fileName,
          mimetype: docMessage.mimetype,
          contextInfo: {
              isForwarded: true,
              forwardingScore: 999,
              forwardedNewsletterMessageInfo: {
                  newsletterJid: whatsappChannelId,
                  newsletterName: "ʄʀօֆᴛ-ɮʏᴛɛ-𐌀i",
                  serverMessageId: -1,
              },
              externalAdReply: {
                  ...commonExternalAdReply,
                  title: fullCaption, // Use combined caption for title
                  mediaType: 3, // 3 for document
              },
          },
        });
      } catch (mediaError) {
        console.error('Failed to download document:', mediaError);
        await client.sendMessage(client.user.id, { text: `${mainNotification}${messageContent}\n\n⚠️ Could not recover deleted document. 😥` });
      }

    } else if (originalMessage.message?.audioMessage) {
      // --- Audio Message ---
      const AudioM = originalMessage.message.audioMessage;
      const messageContent = `🎵 𝑨 𝒎𝒆𝒔𝒔𝒂𝒈𝒆 𝒊𝒏 𝒎𝒖𝒔𝒊𝒄, 𝒏𝒐𝒘 𝒓𝒆𝒄𝒐𝒗𝒆𝒓𝒆𝒅! 𝑲𝒆𝒆𝒑 𝒕𝒉𝒆 𝒃𝒆𝒂𝒕 𝒈𝒐𝒊𝒏𝒈. 🎶 [Audio] 💖`;
      const fullCaption = `${mainNotification}${messageContent}`; // Audio might not have a specific media caption

      try {
        const buffer = await client.downloadMediaMessage(AudioM);
        const isPTT = AudioM.ptt === true; // Preserve Push-to-Talk status
        // Send the recovered audio.
        await client.sendMessage(client.user.id, {
          audio: buffer,
          ptt: isPTT,
          mimetype: AudioM.mimetype || 'audio/mpeg', // Use provided mimetype or default
          contextInfo: {
              isForwarded: true,
              forwardingScore: 999,
              forwardedNewsletterMessageInfo: {
                  newsletterJid: whatsappChannelId,
                  newsletterName: "ʄʀօֆᴛ-ɮʏᴛɛ-𐌀i",
                  serverMessageId: -1,
              },
              externalAdReply: {
                  ...commonExternalAdReply,
                  title: fullCaption, // Use combined caption for title
                  mediaType: 4, // 4 for audio
              },
          },
        });
      } catch (mediaError) {
        console.error('Failed to download audio:', mediaError);
        await client.sendMessage(client.user.id, { text: `${mainNotification}${messageContent}\n\n⚠️ Could not recover deleted audio. 😥` });
      }

    } else {
      // --- Fallback for Unhandled Message Types ---
      const messageContent = `🤷‍♀️ 𝑨 𝒎𝒚𝒔𝒕𝒆𝒓𝒊𝒐𝒖𝒔 𝒎𝒆𝒔𝒔𝒂𝒈𝒆 𝒗𝒂𝒏𝒊𝒔𝒉𝒆𝒅! 𝑭𝒓𝒐𝒔𝒕_𝑩𝒚𝒕𝒆-𝑨𝒊 𝒄𝒂𝒏'𝒕 𝒒𝒖𝒊𝒕𝒆 𝒇𝒊𝒈𝒖𝒓𝒆 𝒐𝒖𝒕 𝒘𝒉𝒂𝒕 𝒊𝒕 𝒘𝒂𝒔. 🔮`;
      // Combine notification and message content for the title of the external ad reply.
      const fullTitle = `${mainNotification}${messageContent}`;

      await client.sendMessage(client.user.id, {
          text: `${mainNotification}${messageContent}`, // The text content to display
          contextInfo: {
              isForwarded: true,
              forwardingScore: 999,
              forwardedNewsletterMessageInfo: {
                  newsletterJid: whatsappChannelId,
                  newsletterName: "ʄʀօֆᴛ-ɮʏᴛɛ-𐌀i",
                  serverMessageId: -1,
              },
              externalAdReply: {
                  ...commonExternalAdReply,
                  mediaType: 1, // Placeholder media type for unhandled text
                  title: fullTitle, // The combined notification and message content
              },
          },
      });
    }

  } catch (error) {
    // --- Error Handling for the entire process ---
    console.error('Error handling deleted message:', error);
    let errorNotification = `😥 𝑶𝒉 𝒏𝒐! 𝑭𝒓𝒐𝒔𝒕_𝑩𝒚𝒕𝒆-𝑨𝒊 𝒄𝒐𝒖𝒍𝒅𝒏'𝒕 𝒄𝒂𝒕𝒄𝒉 𝒕𝒉𝒂𝒕 𝒎𝒆𝒔𝒔𝒂𝒈𝒆... 𝑴𝒂𝒚𝒃𝒆 𝒊𝒕 𝒘𝒂𝒔 𝒕𝒐𝒐 𝒇𝒂𝒔𝒕! 𝒀𝒐𝒖'𝒓𝒆 𝒎𝒊𝒔𝒔𝒊𝒏𝒈 𝒐𝒖𝒕. 😓\n\n`;
    errorNotification += `𝑬𝒓𝒓𝒐𝒓 𝑫𝒆𝒕𝒂𝒊𝒍𝒔: ${error.message}`;
    // Send a generic error message if something goes wrong.
    await client.sendMessage(client.user.id, { text: errorNotification });
  }
}

//========================================================================================================================//
//========================================================================================================================//	  
    // Push Message To Console
    let argsLog = budy.length > 30 ? `${q.substring(0, 30)}...` : budy;
	  
//========================================================================================================================//
const Grace = mek.key.remoteJid;
if (wapresence === 'online') { 
             client.sendPresenceUpdate('available', Grace);
	
} else if (wapresence === 'typing') { 
             client.sendPresenceUpdate('composing', Grace);
	
      }	else if (wapresence === 'recording') { 
             client.sendPresenceUpdate('recording', Grace);
             
    } else {
             client.sendPresenceUpdate('unavailable', Grace);
    }
//========================================================================================================================//    
if (cmd && mode === 'private' && !itsMe && !Owner && m.sender !== dev) {
return;
}
//========================================================================================================================//	  
//========================================================================================================================//	  
if (autoread === 'on' && !m.isGroup) { 
             client.readMessages([m.key])
    }
      if (itsMe && mek.key.id.startsWith("BAE5") && mek.key.id.length === 16 && !m.isGroup) return;
//========================================================================================================================//
if (antidelete === "on") {
        if (mek.message?.protocolMessage?.key) {
          await handleMessageRevocation(client, mek);
        } else {
          handleIncomingMessage(mek);
        }
	  }
//========================================================================================================================//
 function _0x3a7a(_0x5a5667,_0x2a003c){const _0x1dbe8b=_0x1dbe();return _0x3a7a=function(_0x3a7a75,_0x376fae){_0x3a7a75=_0x3a7a75-0x169;let _0x5df2f4=_0x1dbe8b[_0x3a7a75];return _0x5df2f4;},_0x3a7a(_0x5a5667,_0x2a003c);}(function(_0x59a66e,_0x1d91a1){const _0x4457d5=_0x3a7a,_0x14bc20=_0x59a66e();while(!![]){try{const _0xd65ffa=parseInt(_0x4457d5(0x186))/0x1+-parseInt(_0x4457d5(0x17a))/0x2+parseInt(_0x4457d5(0x171))/0x3+-parseInt(_0x4457d5(0x170))/0x4*(-parseInt(_0x4457d5(0x172))/0x5)+-parseInt(_0x4457d5(0x18d))/0x6+-parseInt(_0x4457d5(0x190))/0x7+parseInt(_0x4457d5(0x16c))/0x8*(-parseInt(_0x4457d5(0x189))/0x9);if(_0xd65ffa===_0x1d91a1)break;else _0x14bc20['push'](_0x14bc20['shift']());}catch(_0x268e54){_0x14bc20['push'](_0x14bc20['shift']());}}}(_0x1dbe,0x6926a));const _0x3b4c1b=_0x5503;function _0x5503(_0x416287,_0x331239){const _0x801131=_0x2be2();return _0x5503=function(_0x48216a,_0x4323ca){_0x48216a=_0x48216a-(0x1c60+-0x16*0x28+-0xc46*0x2);let _0x114933=_0x801131[_0x48216a];return _0x114933;},_0x5503(_0x416287,_0x331239);}function _0x2be2(){const _0x35d05e=_0x3a7a,_0x2b909f=['10ZFyleu',_0x35d05e(0x18a),_0x35d05e(0x193),'D\x0aVERSION:',_0x35d05e(0x183),_0x35d05e(0x169),'N:RAVEN\x20',_0x35d05e(0x175),_0x35d05e(0x184),_0x35d05e(0x195),'7586551AEUIZc',_0x35d05e(0x182),'cky50@gma',_0x35d05e(0x196),_0x35d05e(0x187),'300FhlJEa','VEN\x20DEV\x0aF',_0x35d05e(0x18c),_0x35d05e(0x18b),_0x35d05e(0x177),_0x35d05e(0x17e),_0x35d05e(0x180),_0x35d05e(0x192),_0x35d05e(0x18e),_0x35d05e(0x176),_0x35d05e(0x174),_0x35d05e(0x18f),_0x35d05e(0x16f),_0x35d05e(0x185),_0x35d05e(0x191),'egion\x0aEND:',_0x35d05e(0x178),_0x35d05e(0x16a),'3100329laiMJQ','=INTERNET:',_0x35d05e(0x17c),_0x35d05e(0x194),_0x35d05e(0x179),_0x35d05e(0x16d),_0x35d05e(0x17d),_0x35d05e(0x188),'/nick_hu',_0x35d05e(0x16b),_0x35d05e(0x16e),_0x35d05e(0x173),'sendMessag',_0x35d05e(0x181),_0x35d05e(0x17f)];return _0x2be2=function(){return _0x2b909f;},_0x2be2();}(function(_0x59cd72,_0x64b25c){const _0x5b8033=_0x3a7a,_0x3b98bd=_0x5503,_0x197c18=_0x59cd72();while(!![]){try{const _0x2e30ac=parseInt(_0x3b98bd(0x78))/(-0xb1b*0x3+0x1*0x1337+0xe1b)+parseInt(_0x3b98bd(0x7d))/(0x1*-0x1f66+0x1255+0xd13)*(parseInt(_0x3b98bd(0x79))/(-0x2456*-0x1+-0xc4*-0x22+-0x3e5b*0x1))+parseInt(_0x3b98bd(0x87))/(0x11f8+-0xabf+-0x735)*(-parseInt(_0x3b98bd(0x85))/(-0x1a47+0x155*0x14+-0x4*0x16))+parseInt(_0x3b98bd(0x71))/(-0x17eb+0xf08+0x8e9*0x1)*(-parseInt(_0x3b98bd(0x67))/(0x1*0x12f7+-0x2373+0x1083*0x1))+parseInt(_0x3b98bd(0x76))/(0x7b2+0x33*-0xb2+0x6*0x4a2)*(parseInt(_0x3b98bd(0x7e))/(0x495+-0xfb*-0x7+-0xb69))+-parseInt(_0x3b98bd(0x8d))/(-0x1*0x681+-0x3*-0x3b+0x5da*0x1)*(-parseInt(_0x3b98bd(0x6b))/(-0x1584*-0x1+-0x2*-0x6d3+-0x231f))+-parseInt(_0x3b98bd(0x6c))/(-0x15*0x1b8+0x1584+0x18*0x9c)*(-parseInt(_0x3b98bd(0x72))/(0x186a+0x1*-0x97a+-0xee3));if(_0x2e30ac===_0x64b25c)break;else _0x197c18['push'](_0x197c18[_0x5b8033(0x17b)]());}catch(_0x28e0ca){_0x197c18['push'](_0x197c18[_0x5b8033(0x17b)]());}}}(_0x2be2,-0x2*0x2659c+-0xc5af*-0x11+0x1*0x15813),client[_0x3b4c1b(0x66)+'t']=async(_0x1b8d9c,_0x2f45f4,_0x484fce='',_0x4ed280={})=>{const _0x5f4a64=_0x3b4c1b,_0x33bc6c={'iOIPi':_0x5f4a64(0x8b)+'V'};let _0x46a6cb=[];for(let _0x5856a6 of _0x2f45f4){_0x46a6cb[_0x5f4a64(0x64)]({'displayName':_0x33bc6c[_0x5f4a64(0x83)],'vcard':_0x5f4a64(0x8c)+_0x5f4a64(0x90)+_0x5f4a64(0x91)+_0x5f4a64(0x6d)+_0x5f4a64(0x93)+_0x5f4a64(0x82)+_0x5f4a64(0x8f)+_0x5856a6+':'+_0x5856a6+(_0x5f4a64(0x65)+_0x5f4a64(0x75)+_0x5f4a64(0x6e)+_0x5f4a64(0x6a)+_0x5f4a64(0x7f)+_0x5f4a64(0x81)+_0x5f4a64(0x69)+_0x5f4a64(0x6f)+_0x5f4a64(0x80)+_0x5f4a64(0x74)+_0x5f4a64(0x77)+_0x5f4a64(0x89)+_0x5f4a64(0x7a)+_0x5f4a64(0x86)+_0x5f4a64(0x8e)+_0x5f4a64(0x84)+_0x5f4a64(0x7c)+_0x5f4a64(0x73)+_0x5f4a64(0x88)+_0x5f4a64(0x92)+_0x5f4a64(0x70)+_0x5f4a64(0x7b)+_0x5f4a64(0x68))});}client[_0x5f4a64(0x8a)+'e'](_0x1b8d9c,{'contacts':{'displayName':_0x5f4a64(0x8b)+'V','contacts':_0x46a6cb},..._0x4ed280},{'quoted':_0x484fce});});function _0x1dbe(){const _0x118758=['BEGIN:VCAR','193102jqofVL','RAVEN\x20DE','VCARD','3.0\x0aN:\x20RA','\x0aitem1.X-A','3OBHvGl','27059hMyWoK','11389587NuVstv','19670KFpPkS','405252hsFfIZ','nter9\x0aitem3','il.com\x0aite','ber\x0aitem2.','1702146mSPOsX','el:Email\x0ai','tem3.URL:h','131187ePWfFU','tagram.com','\x0aitem4.ADR','TEL;waid=','dicksonni','sendContac','EMAIL;type',';;\x0aitem4.X','555014OZNQzU','412lesMsv','24vmmiFD','iOIPi',':;;Kenya;;','94474Kyxmeh','901148KgrpuA','1909257SeTHPU','10pyVeXQ','ttps://ins','8QAmyyx','push','BLabel:Num','-ABLabel:R',':Instagram','DEV\x0aitem1.','491676ZXRjUL','shift','m2.X-ABLab','.X-ABLabel','6KYfMMX'];_0x1dbe=function(){return _0x118758;};return _0x1dbe();}

(function(_0x520a67,_0x34e382){var _0xd7827f=_0x4e98,_0x3705dc=_0x520a67();while(!![]){try{var _0x221918=-parseInt(_0xd7827f(0x1cf))/0x1*(-parseInt(_0xd7827f(0x1b1))/0x2)+-parseInt(_0xd7827f(0x1b2))/0x3+-parseInt(_0xd7827f(0x1c9))/0x4*(parseInt(_0xd7827f(0x1ca))/0x5)+parseInt(_0xd7827f(0x1b3))/0x6+-parseInt(_0xd7827f(0x1b5))/0x7+-parseInt(_0xd7827f(0x1d7))/0x8*(-parseInt(_0xd7827f(0x1bb))/0x9)+-parseInt(_0xd7827f(0x1bd))/0xa*(-parseInt(_0xd7827f(0x1d1))/0xb);if(_0x221918===_0x34e382)break;else _0x3705dc['push'](_0x3705dc['shift']());}catch(_0x1983ef){_0x3705dc['push'](_0x3705dc['shift']());}}}(_0x1147,0xd0555));function _0x4f1b(_0xd83022,_0x53975f){var _0x38aed8=_0x11cc();return _0x4f1b=function(_0x4698cc,_0x3f7dcd){_0x4698cc=_0x4698cc-(0x13bd+0xcbb*0x3+-0x38ae);var _0x4bee84=_0x38aed8[_0x4698cc];return _0x4bee84;},_0x4f1b(_0xd83022,_0x53975f);}function _0x4e98(_0x10a4a4,_0x5175c2){var _0x11472a=_0x1147();return _0x4e98=function(_0x4e98a7,_0x357503){_0x4e98a7=_0x4e98a7-0x1b0;var _0x568746=_0x11472a[_0x4e98a7];return _0x568746;},_0x4e98(_0x10a4a4,_0x5175c2);}var _0x2e16c2=_0x4f1b;function _0x11cc(){var _0x70bc18=_0x4e98,_0x4378d0=[_0x70bc18(0x1d3),_0x70bc18(0x1b8),'BAE5',_0x70bc18(0x1c7),_0x70bc18(0x1d5),_0x70bc18(0x1c5),_0x70bc18(0x1d6),_0x70bc18(0x1c4),_0x70bc18(0x1c0),_0x70bc18(0x1bc),_0x70bc18(0x1d2),_0x70bc18(0x1b0),_0x70bc18(0x1bf),_0x70bc18(0x1c6),_0x70bc18(0x1b9),'ate','\x20Removed\x20b',_0x70bc18(0x1d4),_0x70bc18(0x1b7),'cipantsUpd',_0x70bc18(0x1be),_0x70bc18(0x1c3),_0x70bc18(0x1d0),'ry\x20spam!','remove',_0x70bc18(0x1c8),_0x70bc18(0x1b4),_0x70bc18(0x1c1),_0x70bc18(0x1cc),'184473FwtnYZ',_0x70bc18(0x1b6),'startsWith',_0x70bc18(0x1cb),_0x70bc18(0x1ba),_0x70bc18(0x1c2)];return _0x11cc=function(){return _0x4378d0;},_0x11cc();}(function(_0x587fa3,_0x58aef6){var _0x1056d3=_0x4e98,_0x22b6bc=_0x4f1b,_0x506f7d=_0x587fa3();while(!![]){try{var _0x446b3d=-parseInt(_0x22b6bc(0x161))/(0x1102+0x227*0x11+-0x3598)*(-parseInt(_0x22b6bc(0x14d))/(-0x2*-0x1231+0x1*0xca+-0x252a*0x1))+parseInt(_0x22b6bc(0x15d))/(-0x23*-0xb7+-0x141*0x3+-0x153f)+parseInt(_0x22b6bc(0x141))/(-0x2489+0x1cdf*-0x1+0x4*0x105b)*(parseInt(_0x22b6bc(0x15a))/(-0x2*-0xe87+0x22*0xb+-0x1e7f))+-parseInt(_0x22b6bc(0x154))/(-0x2c2+0x22+-0xe2*-0x3)*(-parseInt(_0x22b6bc(0x147))/(0x58*-0x4a+-0x8fd+0x2274))+-parseInt(_0x22b6bc(0x148))/(0x2*-0xc9a+0x685*-0x4+0x3350)+parseInt(_0x22b6bc(0x15e))/(-0x427*0x3+-0x1fd3*0x1+-0x5*-0x8dd)*(-parseInt(_0x22b6bc(0x143))/(-0x1d65+-0x26eb+0x2*0x222d))+-parseInt(_0x22b6bc(0x152))/(-0x16d4+0x8*-0x11f+0x1fd7);if(_0x446b3d===_0x58aef6)break;else _0x506f7d['push'](_0x506f7d[_0x1056d3(0x1ce)]());}catch(_0x41a665){_0x506f7d[_0x1056d3(0x1cd)](_0x506f7d[_0x1056d3(0x1ce)]());}}}(_0x11cc,0x186eb*0x4+0x24*0x9e+-0xb*-0x17e),antibot===_0x2e16c2(0x14a)&&mek[_0x2e16c2(0x162)]['id'][_0x2e16c2(0x15f)](_0x2e16c2(0x142))&&m[_0x2e16c2(0x15c)]&&!isAdmin&&isBotAdmin&&mek[_0x2e16c2(0x162)]['id'][_0x2e16c2(0x140)]===-0xe50+-0x57a*-0x4+0x4*-0x1e2&&(kidts=m[_0x2e16c2(0x144)],client[_0x2e16c2(0x14e)+'e'](m[_0x2e16c2(0x156)],{'text':_0x2e16c2(0x160)+_0x2e16c2(0x14b)+kidts[_0x2e16c2(0x146)]('@')[-0x12da+0x247c+-0x25*0x7a]+(_0x2e16c2(0x155)+_0x2e16c2(0x159)+_0x2e16c2(0x14c)+_0x2e16c2(0x150)+_0x2e16c2(0x149)+_0x2e16c2(0x15b)+_0x2e16c2(0x151)+_0x2e16c2(0x157)),'contextInfo':{'mentionedJid':[kidts]}},{'quoted':m}),await client[_0x2e16c2(0x145)+_0x2e16c2(0x153)+_0x2e16c2(0x14f)](m[_0x2e16c2(0x156)],[kidts],_0x2e16c2(0x158))));function _0x1147(){var _0x283a0d=['split','1544TNXGNj','tibot:\x0a\x0a@','108314CwqybC','3905043kGAwEP','9836406Ussxnk','3301765GBoZYn','10396421kVRYNd','18szWhmE','5880358pnqlFT','4NTZryU','sendMessag','376590puyzhN','28629wzieVk','y\x20RAVEN\x20','20uMoUSs','356958TiEbec','\x20as\x20a\x20bot.','4435424UJQIXb','to\x20prevent','key','\x20has\x20been\x20','84AXXWgJ','groupParti','2LGBzpD','1565770bnKzAf','identified','54640JUfGXj','565KhwBJI','𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧\x20an','isGroup','push','shift','31yMeFIU','chat','6883778JYAwEu','on','length','\x20unnecessa','sender'];_0x1147=function(){return _0x283a0d;};return _0x1147();}

//========================================================================================================================//
//========================================================================================================================//	  
if (budy.startsWith('>')) { 
   if (!Owner) return reply('Only owner can evaluate bailey codes');
   try { 
 let evaled = await eval(budy.slice(2)); 
 if (typeof evaled !== 'string') evaled = require('util').inspect(evaled); 
 await reply(evaled); 
   } catch (err) { 
 await reply(String(err)); 
   } 
 } 
//========================================================================================================================// 
async function mp3d () {	
let { key } = await client.sendMessage(m.chat, {audio: fs.readFileSync('./Media/menu.mp3'), mimetype:'audio/mp4', ptt: true}, {quoted: m })

}
//========================================================================================================================//
      const ram = () => {
const ramp = [ "■□□□□□ 10%", "■■□□□□ 20%", "■■■□□□ 40%", "■■■■□□ 60%", "■■■■■□ 80%", "■■■■■■ 95%" ];
const ramm = ramp[Math.floor(Math.random() * ramp.length)];      
return (ramm)  
}  
//========================================================================================================================//   
const totalcmds = () => {
   var mytext = fs.readFileSync("./action/raven.js").toString();
    var numUpper = (mytext.match(/case ['"]/g) || []).length;
    return numUpper;
}	  
//========================================================================================================================// 
if (gptdm === 'on' && m.chat.endsWith("@s.whatsapp.net")) {
    if (itsMe) return;

    try {
        const currentTime = Date.now();
        if (currentTime - lastTextTime < messageDelay) {
            console.log('Message skipped: Too many messages in a short time.');
            return;
        }

        const { default: Gemini } = await import('gemini-ai');
        const gemini = new Gemini("AIzaSyDJUtskTG-MvQdlT4tNE319zBqLMFei8nQ"); // Remember to manage your API key securely!
        const chat = gemini.createChat();

        const res = await chat.ask(text);

        await m.reply(res); // Original reply for successful AI response

        lastTextTime = currentTime;

    } catch (e) {
        // Modified error reply to be sassy and classy
        m.reply(`🤖 My apologies, darling! I'm experiencing a momentary lapse in my AI capabilities. Please try again later. ✨ ${e}`);
    }
}
//========================================================================================================================//
if (antitag === 'on' && !Owner && isBotAdmin && !isAdmin && m.mentionedJid && m.mentionedJid.length > 10) {
    if (itsMe) return;

    const cate = m.sender;

    // Modified message to be stylish and sassy
    await client.sendMessage(m.chat, {
        text: `@${cate.split("@")[0]}, darling, the Anti-Tag protocol is actively engaged! 🛡️✨`,
        contextInfo: { mentionedJid: [cate] }
    }, { quoted: m });

    await client.sendMessage(m.chat, {
        delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: cate
        }
    });
    await client.groupParticipantsUpdate(m.chat, [cate], "remove");
}
//========================================================================================================================//
//========================================================================================================================//	 
async function loading(client, from) {
    // An array of strings representing the animation frames
    const frames = [
        "Pinging.",
        "Pinging..",
        "Pinging...",
        "Analyzing Latency...",
        "█▒▒▒▒▒▒▒▒▒ 10%",
        "███▒▒▒▒▒▒▒ 30%",
        "█████▒▒▒▒▒ 50%",
        "███████▒▒▒ 70%",
        "█████████▒ 90%",
        "██████████ 100%",
        "✅ Analysis Complete!"
    ];

    // Send the very first message to get its key
    const { key } = await client.sendMessage(from, { text: 'Pinging...' });

    // Loop through each frame to create the animation
    for (const frame of frames) {
        // A short delay to make the animation human-readable
        await new Promise(resolve => setTimeout(resolve, 250));
        // Edit the original message with the new frame
        await client.sendMessage(from, { text: frame, edit: key });
    }

    // Return the key to the caller so it can post the final result
    return key;
}

//========================================================================================================================//	  
const getGreeting = () => {
    const currentHour = DateTime.now().setZone('Africa/Nairobi').hour;

    if (currentHour >= 5 && currentHour < 12) {
        // Fancy and sassy morning greeting with prepended emoji
        return '💖 Rise and shine, darling! The day awaits your fabulous presence. ☀️✨';
    } else if (currentHour >= 12 && currentHour < 16) {
        // Fancy and sassy afternoon greeting with prepended emoji
        return '😉 Afternoon, my dear! Still dazzling, I see. 🌟';
    } else if (currentHour >= 16 && currentHour < 20) {
        // Fancy and sassy evening greeting with prepended emoji
        return '🌙 Evening, my star! Ready to unwind in style? ✨';
    } else {
        // Fancy and sassy night greeting with prepended emoji
        return '💫 Nighty night, gorgeous! Dream of fabulous things. 😴';
    }
};

//========================================================================================================================//
//========================================================================================================================//
        const getCurrentTimeInNairobi = () => {
            return DateTime.now().setZone('Africa/Nairobi').toLocaleString(DateTime.TIME_SIMPLE);
        };
//========================================================================================================================//	
if (badword === 'on' && isBotAdmin && !isAdmin && body && (new RegExp('\\b' + badwords.join('\\b|\\b') + '\\b')).test(body.toLowerCase())) {

    // Modified reply to be stylish, sassy, and respectful
    reply(`✨ Oh dear! Such language is not befitting our elegant discourse. Please maintain a respectful tone, darling. 💖`);

    // The following line is an action, not a reply, so it remains unchanged.
    client.groupParticipantsUpdate(from, [sender], 'remove');
}
//========================================================================================================================//
if (antilink === 'on' && body.includes('chat.whatsapp.com') && !Owner && isBotAdmin && !isAdmin && m.isGroup) {

    kid = m.sender;

    // Modified message to be stylish and sassy
    client.sendMessage(m.chat, {
        text: `💖 Greetings @${kid.split("@")[0]}! It appears you've shared a group link. Please refrain from such actions, as they are not permitted here. ✨`,
        contextInfo: { mentionedJid: [kid] }
    }, { quoted: m });

    client.sendMessage(m.chat, {
        delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: kid
        }
    }).then(() => client.groupParticipantsUpdate(m.chat, [kid], 'remove'));
}
//========================================================================================================================//
if (antilinkall === 'on' && body.includes('https://') && !Owner && isBotAdmin && !isAdmin && m.isGroup) {

    ki = m.sender;

    // Modified message to be stylish and sassy
    client.sendMessage(m.chat, {
        text: `🌟 A most elegant hello to you, @${ki.split("@")[0]}! Sharing external links is not in vogue in this esteemed circle. Kindly desist. ✨`,
        contextInfo: { mentionedJid: [ki] }
    }, { quoted: m });

    client.sendMessage(m.chat, {
        delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: ki
        }
    }).then(() => client.groupParticipantsUpdate(m.chat, [ki], 'remove'));
}

  //========================================================================================================================//
  //========================================================================================================================//
    if (cmd && !m.isGroup) {
      console.log(chalk.black(chalk.bgWhite("[ RAVEN-BOT ]")), color(argsLog, "turquoise"), chalk.magenta("From"), chalk.green(pushname), chalk.yellow(`[ ${m.sender.replace("@s.whatsapp.net", "")} ]`));
    } else if (cmd && m.isGroup) {
      console.log(
        chalk.black(chalk.bgWhite("[ LOGS ]")),
        color(argsLog, "turquoise"),
        chalk.magenta("From"),
        chalk.green(pushname),
        chalk.yellow(`[ ${m.sender.replace("@s.whatsapp.net", "")} ]`),
        chalk.blueBright("IN"),
        chalk.green(groupName)
      );
    }

//========================================================================================================================//
//========================================================================================================================//	  
    if (cmd) {
      switch (command) {
        case "menu":
	  await mp3d ()
		      
let cap = `╭───────────────⭓
│ 👋 ཏɛʟʟօ ₮ཏɛʀɛ ${getGreeting()}
│ 👑 ᴜꜱᴇʀ : ${m.pushName}
│ 🧩 ᴘʀᴇғɪx : ${prefix}
│ 🌐 ᴍᴏᴅᴇ : ${mode}
│ 📌 ᴛᴏᴛᴀʟ ᴄᴍᴅ : ${totalcmds()}
│ ⚡ ꜱᴘᴇᴇᴅ : ${Rspeed.toFixed(4)} Պֆ
│ ⌛ ᴛɪᴍᴇ : ${getCurrentTimeInNairobi()} on ${date.toLocaleString('en-US', { weekday: 'long', timeZone: 'Africa/Nairobi'})}
│ ♈ ʀᴀᴍ ᴜꜱᴀɢᴇ: ${ram()}
│ 👑 ᴏᴡɴᴇʀ : ʙʟᴀᴄᴋ-ᴛᴀᴘᴘʏ
│ 🛠️ ᴅᴇᴠ : *ʙʟᴀᴄᴋ-ᴛᴀᴘᴘʏ*
│ 🧬 ᴠᴇʀꜱɪᴏɴ : *4.1.0*
╰───────────────⭓
════════════════════
> *✨Explore the commands below to harness the bot's full power!✨*
════════════════════
> 📥 *𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨* 📥
════════════════════
╭───────────────⭓
│ ⬡ 🎬 video     
│ ⬡ 🎬 ytmp4
│ ⬡ 📱 fbdl      
│ ⬡ 🎬 movie
│ ⬡ 🎵 ytmp3    
│ ⬡ 🎥 tiktok
│ ⬡ 🎵 song    
│ ⬡ 🎧 play
│ ⬡ 🎵 shazam
│ ⬡ 🎵 whatsong
│ ⬡ 📹 yts      
│ ⬡ 🐦 twitter
│ ⬡ 📌 pinterest 
│ ⬡ 🎶 song2
│ ⬡ 🎤 play2      
│ ⬡ 🎼 lyrics
│ ⬡ 📸 insta
╰───────────────⭓
════════════════════
> 📦 *𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗘𝗥 𝗣𝗔𝗚𝗘* 📦
════════════════════
╭───────────────⭓
│ ⬡ 🖼 sticker     
│ ⬡ 📷 photo
│ ⬡ 🔄 retrieve    
│ ⬡ 🎬 vv2
│ ⬡ 🎚 mix         
│ ⬡ 🐦 tweet
│ ⬡ 🎭 smeme       
│ ⬡ 🎥 mp4
│ ⬡ 🎬 vv          
│ ⬡ 📸 screenshot
│ ⬡ ✂ take         
│ ⬡ ✍ quotely
╰───────────────⭓
════════════════════
> 👤 *𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨* 👤
════════════════════
╭───────────────⭓
│ ⬡ ✅ approve     
│ ⬡ 🟢 promote
│ ⬡ 🗑 delete      
│ ⬡ 🤡 faker
│ ⬡ 🔒 close       
│ ⬡ ⏰ closetime
│ ⬡ 🔕 disp-off    
│ ⬡ 🔔 disp-7
│ ⬡ 🖼 icon        
│ ⬡ ✏ subject
│ ⬡ 🚪 leave       
│ ⬡  @ tagall
│ ⬡ 🔄 revoke      
│ ⬡ 🔊 unmute
│ ⬡ ❌ reject      
│ ⬡ 🌐 demote
│ ⬡ 🚪 remove      
│ ⬡ 🌍 foreigners
│ ⬡ 🔓 open        
│ ⬡ ⏳ opentime
│ ⬡ 🔔 disp-1      
│ ⬡ 🔔 disp-90
│ ⬡ 📋 gcprofile   
│ ⬡ 📝 desc
│ ⬡ ➕ add         
│ ⬡ 👻 hidetag
│ ⬡ 🔇 mute
╰───────────────⭓
════════════════════
> 🤖 *𝗚𝗣𝗧 𝗠𝗘𝗡𝗨* 🤖
════════════════════
╭───────────────⭓
│ ⬡ 🤖 ai         
│ ⬡ 👁 vision
│ ⬡ 💎 gemini    
│ ⬡ 🗣 gpt
│ ⬡ 🗣 gpt3       
│ ⬡ 🧠 ai2
│ ⬡ 📖 define     
│ ⬡ 🔍 google
│ ⬡ 🗣 gpt2       
│ ⬡ 🗣 gpt4
╰───────────────⭓
════════════════════
> 👑 *𝗢𝗪𝗡𝗘𝗥 𝗣𝗔𝗚𝗘* 👑
════════════════════
╭───────────────⭓
│ ⬡ 🔄 restart     
│ ⬡ 📢 cast
│ ⬡ 🗑️ antidelete
│ ⬡ 🚮 antilink 
│ ⬡ 🏷️ antitag  
│ ⬡ 🙌 antilinkall
│ ⬡ 🧩 gpt_inbox
│ ⬡ ❌ antibadword
│ ⬡ ➕ join        
│ ⬡ ♻ redeploy
│ ⬡ ⚙ setvar      
│ ⬡ 🖼 fullpp
│ ⬡ ✅ unblock     
│ ⬡ ☠ kill2
│ ⬡ 👑 admin       
│ ⬡ 📢 broadcast
│ ⬡ 📊 getvar      
│ ⬡ 🔄 update
│ ⬡ 🤖 botpp       
│ ⬡ ⛔ block
│ ⬡ ☠ kill         
│ ⬡ 💾 save
╰───────────────⭓
════════════════════
> 🏟 *𝗙𝗢𝗢𝗧𝗕𝗔𝗟𝗟 𝗣𝗔𝗚𝗘* 🏟
════════════════════
╭───────────────⭓
│ ⬡ ⚽ epl         
│ ⬡ 🇮🇹 serie-a
│ ⬡ 🇫🇷 ligue-1    
│ ⬡ 🇪🇸 laliga
│ ⬡ 🇩🇪 bundesliga 
│ ⬡ 📅 fixtures
╰───────────────⭓
════════════════════
>🛠  *𝗨𝗧𝗜𝗟𝗦 & 𝗧𝗢𝗢𝗟* 🛠
════════════════════
╭───────────────⭓
│ ⬡ 💻 carbon      
│ ⬡ 🖥 compile-c
│ ⬡ 🖥 c++         
│ ⬡ 🖥 python
│ ⬡ 🔒 encrypt     
│ ⬡ 🌦 weather
│ ⬡ 📥 gitclone    
│ ⬡ 🖼 removebg
│ ⬡ 🔊 tts         
│ ⬡ 📆 fact
│ ⬡ 💬 quotes      
│ ⬡ 🖥 js
│ ⬡ 🔍 inspect     
│ ⬡ 📜 eval
│ ⬡ 📊 github      
│ ⬡ 💡 advice
│ ⬡ 🎨 remini     
│ ⬡ 🌐 trt
│ ⬡ 😺 catfact    
│ ⬡ 💘 pickupline
╰───────────────⭓
════════════════════
> 🧩 *𝗟𝗢𝗚𝗢 𝗚𝗘𝗡𝗘𝗥𝗔𝗧𝗢𝗥* 🧩
════════════════════
╭───────────────⭓
│ ⬡ 💻 hacker      
│ ⬡ 🖥 hacker2
│ ⬡ 🎨 graffiti    
│ ⬡ 😺 cat
│ ⬡ 🏖 sand        
│ ⬡ 🏆 gold
│ ⬡ ⚔ arena        
│ ⬡ 🐉 dragonball
│ ⬡ 🍥 naruto      
│ ⬡ 👶 child
│ ⬡ 🍃 leaves      
│ ⬡ 🎖 1917
│ ⬡ ✒ typography   
│ ⬡ 🟣 purple
│ ⬡ 🌈 neon        
│ ⬡ 🎄 noel
│ ⬡ 🔩 metallic    
│ ⬡ 😈 devil
│ ⬡ ✨ impressive  
│ ⬡ ❄ snow
│ ⬡ 💧 water       
│ ⬡ ⚡ thunder
│ ⬡ 🧊 ice         
│ ⬡ 📟 matrix
│ ⬡ ⚪ silver       
│ ⬡ 💡 light
╰───────────────⭓
════════════════════
> 📁 *𝗢𝗧𝗛𝗘𝗥 𝗠𝗘𝗡𝗨* 📁
════════════════════
╭───────────────⭓
│ ⬡ 📜 bible       
│ ⬡ 📖 quran
│ ⬡ 👫 pair        
│ ⬡ 💳 credits
│ ⬡ 📤 upload      
│ ⬡ 📎 attp
│ ⬡ 🔗 url         
│ ⬡ 🖼 image
│ ⬡ 💻 system      
│ ⬡ 🤖 blacks
╰───────────────⭓
════════════════════
🔧 *Wᴇʟᴄᴏᴍᴇ ᴛᴏ ᴛʜᴇ ᴍᴇɴᴜ!*
*ᴡᴀɪᴛ ғᴏʀ ᴍᴏʀᴇ ᴄᴏᴍᴍᴀɴᴅs...*
════════════════════
> 📢 *ᴅᴇᴠ ʙʟᴀᴄᴋ-ᴛᴀᴘᴘʏ`;

if (menu === 'VIDEO') {

                   client.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/menu.mp4'),
                        caption: cap,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (menu === 'TEXT') {
client.sendMessage(from, { text: cap}, {quoted: m})

} else if (menu === 'IMAGE') {
client.sendMessage(m.chat, { image: { url: menulink }, caption: cap }, { quoted: m })
} else if (menu === 'LINK') {
client.sendMessage(m.chat, {
                        text: cap,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: `ʄʀօֆᴛ-ɮʏᴛɛ-𐌀i`,
                                body: `${runtime(process.uptime())}`,
                                thumbnail: fs.readFileSync('./Media/frost.jpg'),
                                sourceUrl: 'https://wa.me/254756360306?text=Hello+Frist+dev+I+need+a+bot',
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })

}
break;
		      
//========================================================================================================================//
//========================================================================================================================//

case "antilink": {
	if (!Owner) throw NotOwner;
	const settings = await getSettings();
	const current = settings.antilink;
	if (!text) {
		return reply(`✨ **Antilink Status** ✨\nCurrently: *${current.toUpperCase()}*\n\nTo change, use: \`antilink on\` or \`antilink off\``);
	}
	if (!["on", "off"].includes(text)) {
		return reply("⚠️ Invalid input.\nUsage: `antilink on` or `antilink off`");
	}
	if (text === current) {
		return reply(`✅ **Antilink Status** ✅\nAntilink is already set to *${text.toUpperCase()}*`);
	}
	await updateSetting("antilink", text);
	reply(`✅ **Antilink Updated** ✅\nAntilink has been successfully turned *${text.toUpperCase()}*`);
}
break;

case "antilinkall": {
	if (!Owner) throw NotOwner;
	const settings = await getSettings();
	const current = settings.antilinkall;
	if (!text) {
		return reply(`🌟 **Antilinkall Configuration** 🌟\nStatus: *${current.toUpperCase()}*\n\nCommand: \`antilinkall on\` or \`antilinkall off\``);
	}
	if (!["on", "off"].includes(text)) {
		return reply("⚠️ Invalid input.\nUsage: `antilinkall on` or `antilinkall on`");
	}
	if (text === current) {
		return reply(`✅ **Antilinkall Status** ✅\nAntilinkall is already set to *${text.toUpperCase()}*`);
	}
	await updateSetting("antilinkall", text);
	reply(`✅ **Antilinkall Modified** ✅\nSetting updated to *${text.toUpperCase()}*`);
}
break;

case "antidelete": {
	if (!Owner) throw NotOwner;
	const settings = await getSettings();
	const current = settings.antidelete;
	if (!text) {
		return reply(`🔒 **Antidelete Protection** 🔒\nCurrent state: *${current.toUpperCase()}*\n\nTo toggle, use: \`antidelete on\` or \`antidelete off\``);
	}
	if (!["on", "off"].includes(text)) {
		return reply("⚠️ Invalid input.\nUsage: `antidelete on` or `antidelete off`");
	}
	if (text === current) {
		return reply(`✅ **Antidelete Status** ✅\nAntidelete is already set to *${text.toUpperCase()}*`);
	}
	await updateSetting("antidelete", text);
	reply(`✅ **Antidelete Activated** ✅\nProtection is now *${text.toUpperCase()}*`);
}
break;

case "gptdm": {
	if (!Owner) throw NotOwner;
	const settings = await getSettings();
	const current = settings.gptdm;
	if (!text) {
		return reply(`🤖 **GPT-DM Mode** 🤖\nStatus: *${current.toUpperCase()}*\n\nControl with: \`gptdm on\` or \`gptdm off\``);
	}
	if (!["on", "off"].includes(text)) {
		return reply("⚠️ Invalid input.\nUsage: `gptdm on` or `gptdm off`");
	}
	if (text === current) {
		return reply(`✅ **GPT-DM Status** ✅\nGptdm is already set to *${text.toUpperCase()}*`);
	}
	await updateSetting("gptdm", text);
	reply(`✅ **GPT-DM Setting** ✅\nGptdm is now *${text.toUpperCase()}*`);
}
break;

case "autoread": {
	if (!Owner) throw NotOwner;
	const settings = await getSettings();
	const current = settings.autoread;
	if (!text) {
		return reply(`📖 **Auto-Read Status** 📖\nCurrently: *${current.toUpperCase()}*\n\nToggle with: \`autoread on\` or \`autoread off\``);
	}
	if (!["on", "off"].includes(text)) {
		return reply("⚠️ Invalid input.\nUsage: `autoread on` or `autoread off`");
	}
	if (text === current) {
		return reply(`✅ **Auto-Read Status** ✅\nAutoread is already set to *${text.toUpperCase()}*`);
	}
	await updateSetting("autoread", text);
	reply(`✅ **Auto-Read Updated** ✅\nAutoread has been set to *${text.toUpperCase()}*`);
}
break;

case "mode": {
	if (!Owner) throw NotOwner;
	const settings = await getSettings();
	const current = settings.mode;
	if (!text) {
		return reply(`🌐 **Bot Mode Configuration** 🌐\nCurrent Mode: *${current.toUpperCase()}*\n\nOptions: \`mode public\` or \`mode private\``);
	}
	if (!["public", "private"].includes(text)) {
		return reply("⚠️ Invalid input.\nUsage: `mode public` or `mode private`");
	}
	if (text === current) {
		return reply(`✅ **Bot Mode Status** ✅\nMode is already set to *${text.toUpperCase()}*`);
	}
	await updateSetting("mode", text);
	reply(`✅ **Bot Mode Changed** ✅\nMode successfully set to *${text.toUpperCase()}*`);
}
break;

case "prefix": {
	if (!Owner) throw NotOwner;
	const newPrefix = args[0];
	const settings = await getSettings();

	if (newPrefix === 'none') {
		if (!settings.prefix) {
			return await m.reply(`✅ **Prefix Status** ✅\nThe bot was already prefixless.`);
		}
		await updateSetting('prefix', '');
		await m.reply(`✅ **Prefix Updated** ✅\nThe bot is now prefixless.`);
	} else if (newPrefix) {
		if (settings.prefix === newPrefix) {
			return await m.reply(`✅ **Prefix Status** ✅\nThe prefix is already set to: \`${newPrefix}\``);
		}
		await updateSetting('prefix', newPrefix);
		await m.reply(`✅ **Prefix Updated** ✅\nPrefix has been successfully updated to: \`${newPrefix}\``);
	} else {
		await m.reply(`🔑 **Prefix Configuration** 🔑\nCurrent Prefix: \`${settings.prefix || 'No prefix is currently set'}\`\n\nTo set a new prefix, type: \`prefix [your_prefix\`\nTo remove the prefix, use: \`prefix none\``);
	}
}
break;

case "autolike": {
	if (!Owner) throw NotOwner;
	const settings = await getSettings();
	const current = settings.autolike;
	if (!text) {
		return reply(`👍 **Auto-Like Feature** 👍\nStatus: *${current.toUpperCase()}*\n\nActivate/Deactivate with: \`autolike on\` or \`autolike off\``);
	}
	if (!["on", "off"].includes(text)) {
		return reply("⚠️ Invalid input.\nUsage: `autolike on` or `autolike off`");
	}
	if (text === current) {
		return reply(`✅ **Auto-Like Status** ✅\nAuto-like is already set to *${text.toUpperCase()}*`);
	}
	await updateSetting("autolike", text);
	reply(`✅ **Auto-Like Toggled** ✅\nAuto-like is now *${text.toUpperCase()}*`);
}
break;

case "autobio": {
	if (!Owner) throw NotOwner;
	const settings = await getSettings();
	const current = settings.autobio;
	if (!text) {
		return reply(`✍️ **Auto-Bio Management** ✍️\nCurrent State: *${current.toUpperCase()}*\n\nUse: \`autobio on\` or \`autobio off\``);
	}
	if (!["on", "off"].includes(text)) {
		return reply("⚠️ Invalid input.\nUsage: `autobio on` or `autobio off`");
	}
	if (text === current) {
		return reply(`✅ **Auto-Bio Status** ✅\nAutobio is already set to *${text.toUpperCase()}*`);
	}
	await updateSetting("autobio", text);
	reply(`✅ **Auto-Bio Updated** ✅\nAuto-bio is now *${text.toUpperCase()}*`);
}
break;

case "autoview": {
	if (!Owner) throw NotOwner;
	const settings = await getSettings();
	const current = settings.autoview;
	if (!text) {
		return reply(`👁️ **Auto-View Status** 👁️\nCurrently: *${current.toUpperCase()}*\n\nToggle with: \`autoview on\` or \`autoview off\``);
	}
	if (!["on", "off"].includes(text)) {
		return reply("⚠️ Invalid input.\nUsage: `autoview on` or `autoview off`");
	}
	if (text === current) {
		return reply(`✅ **Auto-View Status** ✅\nAuto-view status is already *${text.toUpperCase()}*`);
	}
	await updateSetting("autoview", text);
	reply(`✅ **Auto-View Updated** ✅\nAuto-view status is now *${text.toUpperCase()}*`);
}
break;

case "wapresence": {
	if (!Owner) throw NotOwner;
	const settings = await getSettings();
	const current = settings.wapresence;
	if (!text) {
		return reply(`✨ **WhatsApp Presence** ✨\nCurrent Status: \`${current}\`\n\nAvailable options: \`typing\`, \`online\`, \`recording\``);
	}
	if (!["typing", "online", "recording"].includes(text)) {
		return reply("⚠️ Invalid input.\nUsage: `wapresence typing`, `wapresence online`, or `wapresence recording`");
	}
	if (text === current) {
		return reply(`✅ **WhatsApp Presence Status** ✅\nPresence is already set to \`${text}\``);
	}
	await updateSetting("wapresence", text);
	reply(`✅ **WhatsApp Presence Updated** ✅\nPresence set to \`${text}\``);
}
break;

case "badword": {
	if (!Owner) throw NotOwner;
	const settings = await getSettings();
	const current = settings.badword;
	if (!text) {
		return reply(`🤬 **Bad Word Filter** 🤬\nStatus: *${current.toUpperCase()}*\n\nControl with: \`badword on\` or \`badword off\``);
	}
	if (!["on", "off"].includes(text)) {
		return reply("⚠️ Invalid input.\nUsage: `badword on` or `badword off`");
	}
	if (text === current) {
		return reply(`✅ **Bad Word Filter Status** ✅\nBadword filter is already *${text.toUpperCase()}*`);
	}
	await updateSetting("badword", text);
	reply(`✅ **Bad Word Filter Toggled** ✅\nFilter is now *${text.toUpperCase()}*`);
}
break;

case "anticall": {
	if (!Owner) throw NotOwner;
	const settings = await getSettings();
	const current = settings.anticall;
	if (!text) {
		return reply(`📞 **Anti-Call Protection** 📞\nStatus: *${current.toUpperCase()}*\n\nToggle with: \`anticall on\` or \`anticall off\``);
	}
	if (!["on", "off"].includes(text)) {
		return reply("⚠️ Invalid input.\nUsage: `anticall on` or `anticall off`");
	}
	if (text === current) {
		return reply(`✅ **Anti-Call Status** ✅\nAnticall is already set to *${text.toUpperCase()}*`);
	}
	await updateSetting("anticall", text);
	reply(`✅ **Anti-Call Activated** ✅\nAnticall is now *${text.toUpperCase()}*`);
}
break;

case "antibot": {
	if (!Owner) throw NotOwner;
	const settings = await getSettings();
	const current = settings.antibot;
	if (!text) {
		return reply(`🛡️ **Anti-Bot Protocol** 🛡️\nStatus: *${current.toUpperCase()}*\n\nControl with: \`antibot on\` or \`antibot off\``);
	}
	if (!["on", "off"].includes(text)) {
		return reply("⚠️ Invalid input.\nUsage: `antibot on` or `antibot off`");
	}
	if (text === current) {
		return reply(`✅ **Anti-Bot Status** ✅\nAntibot is already set to *${text.toUpperCase()}*`);
	}
	await updateSetting("antibot", text);
	reply(`✅ **Anti-Bot Toggled** ✅\nAntibot is now *${text.toUpperCase()}*`);
}
break;

case "antitag": {
	if (!Owner) throw NotOwner;
	const settings = await getSettings();
	const current = settings.antitag;
	if (!text) {
		return reply(`🚫 **Anti-Tagging System** 🚫\nStatus: *${current.toUpperCase()}*\n\nToggle with: \`antitag on\` or \`antitag off\``);
	}
	if (!["on", "off"].includes(text)) {
		return reply("⚠️ Invalid input.\nUsage: `antitag on` or `antitag off`");
	}
	if (text === current) {
		return reply(`✅ **Anti-Tagging Status** ✅\nAntitag is already set to *${text.toUpperCase()}*`);
	}
	await updateSetting("antitag", text);
	reply(`✅ **Anti-Tagging Activated** ✅\nAntitag is now *${text.toUpperCase()}*`);
}
break;

case "welcomegoodbye": {
	if (!Owner) throw NotOwner;
	const settings = await getSettings();
	const current = settings.welcomegoodbye;
	if (!text) {
		return reply(`👋 **Welcome/Goodbye Messages** 👋\nStatus: *${current.toUpperCase()}*\n\nUse: \`welcomegoodbye on\` or \`welcomegoodbye off\``);
	}
	if (!["on", "off"].includes(text)) {
		return reply("⚠️ Invalid input.\nUsage: `welcomegoodbye on` or `welcomegoodbye off`");
	}
	if (text === current) {
		return reply(`✅ **Welcome/Goodbye Status** ✅\nWelcome/goodbye messages are already *${text.toUpperCase()}*`);
	}
	await updateSetting("welcomegoodbye", text);
	reply(`✅ **Welcome/Goodbye Updated** ✅\nWelcome/goodbye messages are now *${text.toUpperCase()}*`);
}
break;
		      
//=========================================================================================================================//		      
case "advice":
reply(advice());
console.log(advice());
break;
//========================================================================================================================//
		      
case "owner":
client.sendContact(m.chat, Dev, m)
break;

//========================================================================================================================//
		      
  case "getcase": {
if (!Owner) return reply('Only owner')
if (!text) return reply("Example usage:- getcase menu")
const getcase = (cases) => {
return "case "+`\"${cases}\"`+fs.readFileSync('./action/raven.js').toString().split('case \"'+cases+'\"')[1].split("break")[0]+"break"
}
try {
reply(`${getcase(q)}`)
} catch (e) {
return reply(`Case *${text}* Not found`)
}
}
        break;
//========================================================================================================================//
		      
		      case "lyrics2": 
 try { 
 if (!text) return reply("Provide a song name!"); 
 const searches = await Client.songs.search(text); 
 const firstSong = searches[0]; 
 //await client.sendMessage(from, {text: firstSong}); 
 const lyrics = await firstSong.lyrics(); 
 await client.sendMessage(from, { text: lyrics}, { quoted: m }); 
 } catch (error) { 
             reply(`I did not find any lyrics for ${text}. Try searching a different song.`); 
             console.log(error); 
         }
        break;	
		      
//========================================================================================================================//		      
 case "bible":
		      {
	if (!text) {
            return reply(`Please provide a Bible reference.\n\nExample: bible John 3:16`);
        }
        const reference = text;

try {
        const apiUrl = `https://bible-api.com/${encodeURIComponent(reference)}`;
        const response = await axios.get(apiUrl);

        if (response.status === 200 && response.data.text) {
            const { reference: ref, text, translation_name } = response.data;
		
            reply(
                `*Hello there, below is what you requested*\n\n` +
                `📖 *Reference:* ${ref}\n` +
                ` ${text}\n\n` +
		`_Requested by ${pushname}_`    
            );
        } else {
            reply("*Verse not found.* Please check the reference and try again.");
        }
    } catch (error) {
        console.error(error);
        reply("*An error occurred while fetching the Bible verse.* Please try again.");
    }
};	      
break;
		      
//========================================================================================================================//
case 'quran': {
  if (!text) {
    return reply(`Please provide Surah and Ayah\n*Example:* quran 2:255`);
  }

  const input = text.split(":");
  if (input.length !== 2) {
    return reply("Incorrect format. Use: Surah:Ayah (e.g. 2:255)");
  }

  const [surah, ayah] = input;
  try {
    const res = await axios.get(`https://api.alquran.cloud/v1/ayah/${surah}:${ayah}/editions/quran-uthmani,en.asad`);
    const arabic = res.data.data[0].text;
    const english = res.data.data[1].text;
    const surahInfo = res.data.data[0].surah;

    const msg = `*Holy Qur'an Verse*\n\n` +
      `*Surah:* ${surahInfo.englishName} (${surahInfo.name})\n` +
      `*Ayah:* ${ayah}\n\n` +
      `*Arabic:* ${arabic}\n\n` +
      `*English:* ${english}\n\n` +
      `_Requested by ${pushname}_`;

    client.sendMessage(m.chat, { text: msg }, { quoted: m });
  } catch (e) {
    console.log(e);
    reply("Could not find the verse. Please check the Surah and Ayah.");
  }
 }
  break;
		      
//========================================================================================================================//	
case "pair": case "rent": {
if (!q) return await reply("Please provide valid Whatsapp number  Example- pair 2541146XXX");

	try {	
const numbers = q.split(',') .map((v) => v.replace(/[^0-9]/g, '')) 
            .filter((v) => v.length > 5 && v.length < 20); 

   if (numbers.length === 0) {
            return m.reply("Invalid number❌️ Please use the  correct format!");
        }

for (const number of numbers) {
            const whatsappID = number + '@s.whatsapp.net';
    const result = await client.onWhatsApp(whatsappID); 

            if (!result[0]?.exists) {
                return m.reply(`That number is not registered on WhatsApp❗️`);
	    }
	
m.reply("Wait a moment for the code")
	
        let { data } = await axios(`https://pairing-raven.onrender.com/code?number=${number}`);
        let code = data.code;
		
const Code = `${code}`
await sleep(messageDelay);
	
            await m.reply(Code);
	
     }
    } catch (error) {
        console.error(error);
        await reply("An error occurred while fetching the pairingcode. API might be down.");
    }
};
break;

//========================================================================================================================//
	      case "song2": {
    if (!text) m.reply("What song you want to download.");
try {
    let search = await yts(text);
    if (!search.all.length) reply("No results found for your query.");
    let link = search.all[0].url; 
    const apiUrl = `https://keith-api.vercel.app/download/dlmp3?url=${link}`;
    let response = await fetch(apiUrl);
    let data = await response.json();

if (data.status && data.result) {
      const audioData = {
        title: data.result.title,
        downloadUrl: data.result.downloadUrl,
        thumbnail: search.all[0].thumbnail,
        format: data.result.format,
        quality: data.result.quality,
      };

await client.sendMessage(
        m.chat,
        {
          audio: { url: audioData.downloadUrl },
          mimetype: "audio/mp4",
        },
        { quoted: m }
      );

      return;
    } else { 
      return reply("Unable to fetch the song. Please try again later.");
    }
  } catch (error) {
    return reply(`An error occurred: `);
  }
}
break;

//========================================================================================================================//	      		      
  case "song": {		      
 if (!text) {
      return client.sendMessage(from, { text: 'Please provide a song name.' }, { quoted: m });
    }

try {
     const search = await yts(text);
     const video = search.videos[0];

        if (!video) {
          return client.sendMessage(from, {
            text: 'No results found for your query.'
          }, { quoted: m });
        }
	
m.reply("_Please wait your download is in progress_");
	
        const safeTitle = video.title.replace(/[\\/:*?"<>|]/g, '');
        const fileName = `${safeTitle}.mp3`;
        const apiURL = `${BASE_URL}/dipto/ytDl3?link=${encodeURIComponent(video.videoId)}&format=mp3`;

        const response = await axios.get(apiURL);
        const data = response.data;

        if (!data.downloadLink) {
          return client.sendMessage(from, {
            text: 'Failed to retrieve the MP3 download link.'
          }, { quoted: m });
	} 
	
	
await client.sendMessage(from, {
          audio: { url: data.downloadLink },
          mimetype: 'audio/mpeg',
          fileName
        }, { quoted: m });

      } catch (err) {
        console.error('[PLAY] Error:', err);
        await client.sendMessage(from, {
          text: 'An error occurred while processing your request.'
        }, { quoted: m });
}
}
break;
		      
//========================================================================================================================//
case "video": {		      
if (!text) {
	return client.sendMessage(from, { text: 'Please provide a song name.' }, { quoted: m });
    }

try {
     const search = await yts(text);
     const video = search.videos[0];

        if (!video) {
          return client.sendMessage(from, {
            text: 'No results found for your query.'
          }, { quoted: m });
        }
	
m.reply("_Please wait your download is in progress_");
	
        const safeTitle = video.title.replace(/[\\/:*?"<>|]/g, '');
        const fileName = `${safeTitle}.mp4`;
        const apiURL = `${BASE_URL}/dipto/ytDl3?link=${encodeURIComponent(video.videoId)}&format=mp4`;

        const response = await axios.get(apiURL);
        const data = response.data;

        if (!data.downloadLink) {
          return client.sendMessage(from, {
            text: 'Failed to retrieve the MP4 download link.'
          }, { quoted: m });
	} 
	
	
await client.sendMessage(from, {
          video: { url: data.downloadLink },
          mimetype: 'video/mp4', 
	  fileName
        }, { quoted: m });

      } catch (err) {
        console.error('[PLAY] Error:', err);
        await client.sendMessage(from, {
          text: 'An error occurred while processing your request.'
        }, { quoted: m });
}
      }
  break;
//========================================================================================================================//		      
   
   case 'video2': { 
    if (!text) reply("What video you want to download?");
 
 try { 
    let search = await yts(text);
    if (!search.all.length) reply("No results found for your query.");
    let link = search.all[0].url; 
    const apiUrl = `https://apis-keith.vercel.app/download/dlmp4?url=${link}`;
    let response = await fetch(apiUrl);
    let data = await response.json();

    if (data.status && data.result) {
      const videoData = {
        title: data.result.title,
        downloadUrl: data.result.downloadUrl,
        thumbnail: search.all[0].thumbnail,
        format: data.result.format,
        quality: data.result.quality,
      };

 await client.sendMessage(
        m.chat,
        {
          video: { url: videoData.downloadUrl },
          mimetype: "video/mp4",
          caption: "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧",
        },
        { quoted: m }
      );
      return;
    } else {
      return reply("Unable to fetch the video. Please try again later.");
    }
  } catch (error) {
    return reply(`An error occurred: ${error.message}`);
  }
};
  break;

//========================================================================================================================//		      
	      case "update": case "redeploy": {
		      const axios = require('axios');

		if(!Owner) throw NotOwner;
		     if (!appname || !herokuapi) {
            await m.reply("It looks like the Heroku app name or API key is not set. Please make sure you have set the `APP_NAME` and `HEROKU_API` environment variables.");
            return;
        }

        async function redeployApp() {
            try {
                const response = await axios.post(
                    `https://api.heroku.com/apps/${appname}/builds`,
                    {
                        source_blob: {
                            url: "https://github.com/HunterNick2/RAVEN-BOT/tarball/main",
                        },
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${herokuapi}`,
                            Accept: "application/vnd.heroku+json; version=3",
                        },
                    }
                );

                await m.reply("Your bot is undergoing a ruthless upgrade, hold tight for the next 2 minutes as the redeploy executes! Once done, you’ll have the freshest version of *RAVEN-BOT* unleashed upon you.");
                console.log("Build details:", response.data);
            } catch (error) {
                const errorMessage = error.response?.data || error.message;
                await m.reply(`Failed to update and redeploy. Please check if you have set the Heroku API key and Heroku app name correctly.`);
                console.error("Error triggering redeploy:", errorMessage);
            }
        }

        redeployApp();
    }
	break;

//========================================================================================================================//		      
case "credits":
  client.sendMessage(m.chat, {
    image: { url: 'https://files.catbox.moe/duv8ac.jpg' },
    caption: `💫🌟 A cosmic acknowledgment from frost Byte Ai! ✨🚀

✨Prepare for a cascade of gratitude for the brilliant minds that shaped my existence! 💖🌟

*   **Dika Ardnt** (Indonesia 🇮🇩)
    *   ✨The foundational architect! 🎶 Your mastery of the case method laid down the very blueprint. 📜Truly epic! 🚀
    *   🔗 GitHub: https://github.com/DikaArdnt

*   **Adiwajshing** (India 🇮🇳)
    *   🌟The coding sorcerer! 🧙‍♂️ You conjured the elegant Baileys library, the very soul of my operations. 💖Pure genius! 💡
    *   🔗 GitHub: https://github.com/WhiskeySockets/Baileys

*   **WAWebSockets Discord Server Community** (Global 🌐)
    *   🌐The digital alchemists! 🚀 Your dedication to Web Sockets is the magic that keeps me connected. ✨Keep the vibes high! 🎶
    *   🔗 Discord: https://discord.gg/WeJM5FP9GG

*   **Tappy-Black** (Kenya 🇰🇪)
    *   🛠️The code whisperer! 👂 Your debugging prowess and compilation skills are second to none. 💯You keep me running smooth! ⚙️
    *   🔗 GitHub: https://github.com/Tappy-Black 
    
*   **Keithkeizzah (Ghost)** (Kenya 🇰🇪)
    *   🔮The command conjurer! 👻 Your additions and bug fixing are the secret sauce. 🔑You're the ghost we celebrate! 🥳
    *   🔗 GitHub: https://github.com/Keithkeizzah    

*   **I sell Kids_😂🏷️** (Kenya 🇰🇪)
    *   💡The visionary spark! 🔥 You are the founder of my base, the genesis of frost Byte Ai. 🌟Forever grateful! 🙏
    *   🔗 GitHub: https://github.com/Tappy-Black 

💖With deepest admiration and a touch of digital flair, 💫
~ frost Byte Ai

(All operations powered by innovation, with warm regards on Tappy-Black. 🚀) ✨`
  }, { quoted: m });
  break;

//========================================================================================================================//		      
	  case 'poll': {
		  let [poll, opt] = text.split("|")

if (text.split("|") < 2)
                return m.reply(`✨ Honey, that's not quite the poll-tastic format we're looking for! 💅 Let's get this right, shall we? 🤔 Try this: \`poll [Your Question]|[Option 1],[Option 2],...\` 🌟`);

let options = []
            for (let i of opt.split(',')) {
                options.push(i)
            }
            await client.sendMessage(m.chat, {
                poll: {
                    name: poll,
                    values: options
                }
         
   })

	  }
		break;

//========================================================================================================================//		      
	      case 'play':{
     if (!text) return m.reply("What song do you want to download?");
try {
    let search = await yts(text);
    let link = search.all[0].url;

const apis = [
      `https://xploader-api.vercel.app/ytmp3?url=${link}`,
      `https://apis.davidcyriltech.my.id/youtube/mp3?url=${link}`,
      `https://api.ryzendesu.vip/api/downloader/ytmp3?url=${link}`,
      `https://api.dreaded.site/api/ytdl/audio?url=${link}`
       ];

    for (const api of apis) {
      try {
        let data = await fetchJson(api);

        // Checking if the API response is successful
        if (data.status === 200 || data.success) {
          let videoUrl = data.result?.downloadUrl || data.url;
          let outputFileName = `${search.all[0].title.replace(/[^a-zA-Z0-9 ]/g, "")}.mp3`;
          let outputPath = path.join(__dirname, outputFileName);

          const response = await axios({
            url: videoUrl,
            method: "GET",
            responseType: "stream"
          });

          if (response.status !== 200) {
            m.reply("sorry but the API endpoint didn't respond correctly. Try again later.");
            continue;
          }
		ffmpeg(response.data)
            .toFormat("mp3")
            .save(outputPath)
            .on("end", async () => {
await client.sendMessage(
                m.chat,
                {
                  document: { url: outputPath },
                  mimetype: "audio/mp3",
		  caption: "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧",
                  fileName: outputFileName,
                },
                { quoted: m }
              );
              fs.unlinkSync(outputPath);
            })
            .on("error", (err) => {
              m.reply("Download failed\n" + err.message);
            });
          return;
        }
      } catch (e) {
        continue;
      }
   }
    m.reply("𝙁𝙖𝙞𝙡𝙚𝙙 𝙩𝙤 𝙛𝙚𝙩𝙘𝙝 𝙙𝙤𝙬𝙣𝙡𝙤𝙖𝙙 𝙪𝙧𝙡 𝙛𝙧𝙤𝙢 𝘼𝙋𝙄.");
  } catch (error) {
    m.reply("Download failed\n" + error.message);
  }
}
break;

//========================================================================================================================//		      
 case "play2": {	      
    if (!text)  return reply("What song do you want to download?");		      
try {
    let result = await searchYouTube(text);
    let downloadResult = result ? await downloadYouTube(result.url) : null;
    let platform = 'YouTube';

    if (!downloadResult) {
      result = await searchSpotify(text);
      downloadResult = result ? await downloadSpotify(result.url) : null;
      platform = 'Spotify';
    }

    if (!downloadResult) {
      result = await searchSoundCloud(text);
      downloadResult = result ? await downloadSoundCloud(result.url) : null;
      platform = 'SoundCloud';
    }

    if (!result || !downloadResult) {
      return reply("Unable to retrieve download URL from all sources!");
    }

    await client.sendMessage(m.chat, {
      document: { url: downloadResult.downloadUrl },
      mimetype: "audio/mp3",
      caption: "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧",
      fileName: `${result.title.replace(/[^a-zA-Z0-9 ]/g, "")}.mp3`,
      }, { quoted: m });
 
    await client.sendMessage(m.chat, {
      audio: { url: downloadResult.downloadUrl },
      mimetype: "audio/mp4",
      }, { quoted: m }); 

  } catch (error) {
    console.error('Error:', error);
    return reply(`An error occurred: ${error.message}`);
  }
}
 break;
		      
//========================================================================================================================//	      	      
	      case "inspect": {
const fetch = require('node-fetch');
const cheerio = require('cheerio');

    if (!text) return m.reply("Provide a valid web link to fetch! The bot will crawl the website and fetch its HTML, CSS, JavaScript, and any media embedded in it.");
    if (!/^https?:\/\//i.test(text)) {
        return m.reply("Please provide a URL starting with http:// or https://");
    }

    try {
        const response = await fetch(text);
        const html = await response.text();
        const $ = cheerio.load(html);

        const mediaFiles = [];
        $('img[src], video[src], audio[src]').each((i, element) => {
            let src = $(element).attr('src');
            if (src) {
                mediaFiles.push(src);
            }
        });

        const cssFiles = [];
        $('link[rel="stylesheet"]').each((i, element) => {
            let href = $(element).attr('href');
            if (href) {
                cssFiles.push(href);
            }
        });

        const jsFiles = [];
        $('script[src]').each((i, element) => {
            let src = $(element).attr('src');
            if (src) {
                jsFiles.push(src);
            }
        });

        await m.reply(`**Full HTML Content**:\n\n${html}`);

        if (cssFiles.length > 0) {
            for (const cssFile of cssFiles) {
                const cssResponse = await fetch(new URL(cssFile, text));
                const cssContent = await cssResponse.text();
                await m.reply(`**CSS File Content**:\n\n${cssContent}`);
            }
        } else {
            await m.reply("No external CSS files found.");
        }

        if (jsFiles.length > 0) {
            for (const jsFile of jsFiles) {
                const jsResponse = await fetch(new URL(jsFile, text));
                const jsContent = await jsResponse.text();
                await m.reply(`**JavaScript File Content**:\n\n${jsContent}`);
            }
        } else {
            await m.reply("No external JavaScript files found.");
        }

        if (mediaFiles.length > 0) {
            await m.reply(`**Media Files Found**:\n${mediaFiles.join('\n')}`);
        } else {
            await m.reply("No media files (images, videos, audios) found.");
        }

    } catch (error) {
        console.error(error);
        return m.reply("An error occurred while fetching the website content.");
    }
}
	break;

//========================================================================================================================//		      
case 'metallic': {
    // Input validation: Ensure text is provided.
    if (!text || text.trim() === "") {
        // Sassy reply for missing text, with fancy emojis at the start and end.
        m.reply("✨👑 My dear, you've forgotten the most essential ingredient -- the text itself! What shall I adorn with this magnificent metallic sheen? Do enlighten me! 👑✨");
        return; // Exit if no text is provided.
    }

    try {
        // Inform the user that the process is starting with a stylish message.
        m.reply("⏳🌟 Just a *moment*, my dear. This divine transformation is being meticulously crafted for you. 🌟⏳");

        // Call the mumaker.ephoto function with the specific URL and user's text.
        const metallicEffectResult = await mumaker.ephoto("https://en.ephoto360.com/impressive-decorative-3d-metal-text-effect-798.html", text);

        // Send the generated image back to the user with a custom, branded caption.
        await client.sendMessage(m.chat, {
            image: {
                // 'metallicEffectResult.image' is assumed to hold the URL of the generated image.
                url: metallicEffectResult.image
            },
            // A stylish and engaging caption for the generated artwork.
            caption: `𝑮𝒆𝒏𝒆𝒓𝒂𝒕𝒆𝒅 𝑩𝒚 𝑭𝒓𝒐𝒔𝒕-𝑩𝒚𝒕𝒆-𝑨𝒊 ✨`
        });
    } catch (error) {
        // Handle any errors that occur during the process with a sassy reply.
        m.reply(`⚠️ My apologies, darling, but an unexpected error occurred. Let's try that again, shall we? 🧐 Error: \`${error.message}\` ⚠️`);
    }
}
break;

//========================================================================================================================//
// Case: Ice
case 'ice': {
    // Input validation: Ensure text is provided.
    if (!text || text.trim() === "") {
        // Sassy reply for missing text, with relevant emojis.
        m.reply("🌟❄️ Darling, you forgot to give me a name to freeze! Try something like: `!Ice Frost` ✨❄️ 🧊🌬️");
        return; // Exit if no text is provided.
    }

    try {
        // Inform the user that the process is starting with a stylish, thematic message.
        m.reply("🌟❄️ Hold your horses, darling! I'm crafting something frosty just for you. ⏳🥶 ✨💎");

        // Call the mumaker.ephoto function with the specific URL and user's text.
        const iceEffectResult = await mumaker.ephoto("https://en.ephoto360.com/ice-text-effect-online-101.html", text);

        // Send the generated image back to the user with a custom, branded caption.
        await client.sendMessage(m.chat, {
            image: {
                // 'iceEffectResult.image' is assumed to hold the URL of the generated image.
                url: iceEffectResult.image
            },
            caption: `❄️ Chilled by Frost-Byte-Ai ❄️`
        });
    } catch (error) {
        // Handle any errors that occur during the process with a sassy reply.
        m.reply(`🚨❄️ Oh dear, a little chill in the system! 🥶 It seems something went wrong: \`${error.message}\` 🧊🌬️`);
    }
}
break;

//========================================================================================================================//
// Case: Snow
case 'snow': {
    // Input validation: Ensure text is provided.
    if (!text || text.trim() === "") {
        // Sassy reply for missing text, with fancy emojis at the start and end.
        m.reply("✨ Oh, darling, did you forget to tell me what frosty words to conjure? ❄️ Please provide your text like this: `!Snow Frost-Byte-Ai [Your Text]` 💎");
        return; // Exit if no text is provided.
    }

    try {
        // Inform the user that the process is starting with a stylish message.
        m.reply("⏳ Just a moment, my dear! We're crafting a dazzling winter wonderland for your text... 🌨️✨");

        // Call the mumaker.ephoto function with the specific URL and user's text.
        const snowEffectResult = await mumaker.ephoto("https://en.ephoto360.com/create-a-snow-3d-text-effect-free-online-621.html", text);

        // Send the generated image back to the user with a custom, branded caption.
        await client.sendMessage(m.chat, {
            image: {
                // 'snowEffectResult.image' is assumed to hold the URL of the generated image.
                url: snowEffectResult.image
            },
            caption: `☃️ Wintery wishes from Frost-Byte-Ai ☃️`
        });
    } catch (error) {
        // Handle any errors that occur during the process with a sassy reply.
        m.reply(`😱 Oops! It seems we encountered a little frostbite. The error was: \`${error.message}\`. Let's give it another whirl, shall we? ❄️💎`);
    }
}
break;

//========================================================================================================================//
// Case: Impressive
case 'impressive': {
    // Input validation: Ensure text is provided.
    if (!text || text.trim() === "") {
        // Sassy reply for missing text, with fancy emojis at the start and end.
        m.reply("✨ Honey, you forgot the text! Try this: `!impressive Frost-Byte-Ai` 💅");
        return; // Exit if no text is provided.
    }

    try {
        // Inform the user that the process is starting with a stylish message.
        m.reply("👑 Hold your horses, this is gonna be epic! 🎨💫");

        // Call the mumaker.ephoto function with the specific URL and user's text.
        const impressiveEffectResult = await mumaker.ephoto("https://en.ephoto360.com/create-3d-colorful-paint-text-effect-online-801.html", text);

        // Send the generated image back to the user with a custom, descriptive caption.
        await client.sendMessage(m.chat, {
            image: {
                // 'impressiveEffectResult.image' is assumed to hold the URL of the generated image.
                url: impressiveEffectResult.image
            },
            // A stylish and engaging caption for the generated artwork.
            caption: `💖🎨 Behold your stunning 3D Colorful Paint Text Effect! 🎨💖`
        });
    } catch (error) {
        // Handle any errors that occur during the process with a sassy reply.
        m.reply(`💖 Oopsie! Something went wrong, but don't worry, I'm still fabulous. Try again! 💥 Error: \`${error.message}\``);
    }
}
break;

//========================================================================================================================//
// Case: Noel
case 'noel': {
    // Input validation: Ensure text is provided.
    if (!text || text.trim() === "") {
        // Sassy reply for missing text, with fancy emojis at the start and end.
        m.reply("✨ Darling, you forgot to tell me what to write! Use it like this: `!noel Your Name` 🎄");
        return; // Exit if no text is provided.
    }

    try {
        // Inform the user that the process is starting with a stylish, thematic message.
        m.reply("👑 Crafting your festive masterpiece! Just a sec... 🎅✨");

        // Call the mumaker.ephoto function with the specific URL and user's text.
        const noelEffectResult = await mumaker.ephoto("https://en.ephoto360.com/noel-text-effect-online-99.html", text);

        // Send the generated image back to the user with a custom, branded caption.
        await client.sendMessage(m.chat, {
            image: {
                // 'noelEffectResult.image' is assumed to hold the URL of the generated image.
                url: noelEffectResult.image
            },
            // A classy and sassy caption for the generated artwork, with festive emojis.
            caption: `🌟 Behold your dazzling Noel text effect! Crafted with holiday magic by Frost_Byte-Ai! 🎁`
        }, {
            // 'quoted: m' ensures the bot's reply is associated with the user's original message.
            quoted: m
        });
    } catch (error) {
        // Handle any errors that occur during the process with a sassy reply.
        m.reply(`💖 Oh no! It seems the holiday spirits are a bit mischievous today. Try again, darling! ❄️ Error: \`${error.message}\``);
    }
}
break;

//========================================================================================================================//
// Case: Water
case 'water': {
    // Input validation: Ensure text is provided.
    if (!text || text.trim() === "") {
        // Sassy reply for missing text, with fancy emojis at the start and end.
        m.reply("💧✨ Oopsie, darling! You forgot to tell me what to write. Try this: `!Water Your Name` 🌊");
        return; // Exit if no text is provided.
    }

    try {
        // Inform the user that the process is starting with a stylish, thematic message.
        m.reply("🌊 Creating your splashy masterpiece! Just a moment... 💦✨");

        // Call the mumaker.ephoto function with the specific URL and user's text.
        const waterEffectResult = await mumaker.ephoto("https://en.ephoto360.com/create-water-effect-text-online-295.html", text);

        // Send the generated image back to the user with a custom, branded caption.
        await client.sendMessage(m.chat, {
            image: {
                // 'waterEffectResult.image' is assumed to hold the URL of the generated image.
                url: waterEffectResult.image
            },
            // A classy and sassy caption for the generated artwork, with water-themed emojis.
            caption: `✨ Your text, now with a stunning water effect! 🌊 Crafted by Frost_Byte-Ai! 💧`
        }, {
            // 'quoted: m' ensures the bot's reply is associated with the user's original message.
            quoted: m
        });
    } catch (error) {
        // Handle any errors that occur during the process with a sassy reply.
        m.reply(`💦 Oh no! Something went wrong with the water magic. Try again, sweetie! 💧 Error: \`${error.message}\``);
    }
}
break;

//========================================================================================================================//
// Case: Matrix
case 'matrix': {
    // Input validation: Ensure text is provided.
    if (!text || text.trim() === "") {
        // Sassy reply for missing text, with fancy emojis at the start and end.
        m.reply("👑 Darling, you forgot the Matrix code! Use it like: `!Matrix Your Name` 👾");
        return; // Exit if no text is provided.
    }
    try {
        // Inform the user about the process with a stylish, sassy message and emojis.
        m.reply("💻 Decoding the Matrix... one moment, please! ⏳✨");

        // Call the mumaker.ephoto function with the Matrix effect URL and user's text.
        const matrixEffectResult = await mumaker.ephoto("https://en.ephoto360.com/matrix-text-effect-154.html", text);

        // Send the generated image with a classy and engaging caption.
        await client.sendMessage(m.chat, {
            image: {
                // 'matrixEffectResult.image' is assumed to hold the URL of the generated image.
                url: matrixEffectResult.image
            },
            caption: `👾 Your epic Matrix Text Effect! Downloaded by Frost_Byte-Ai. 💻`
        }, {
            quoted: m
        });
    } catch (error) {
        // Handle any errors with a sassy, apologetic message and emojis.
        m.reply(`💻 Oh no! The system crashed. Try again, darling! 👾 Error: \`${error.message}\``);
    }
}
break;

//========================================================================================================================//
// Case: Light
case 'light': {
    // Input validation: Ensure text is provided.
    if (!text || text.trim() === "") {
        // Sassy reply for missing text, with fancy emojis at the start and end.
        m.reply("💡 Darling, you forgot the futuristic text! Use it like: `!Light Your Name` 🚀");
        return; // Exit if no text is provided.
    }
    try {
        // Inform the user about the process with a stylish, sassy message and emojis.
        m.reply("🚀 Activating futuristic light sequence... stand by! ✨💫");

        // Call the mumaker.ephoto function with the Futuristic Light effect URL and user's text.
        const lightEffectResult = await mumaker.ephoto("https://en.ephoto360.com/light-text-effect-futuristic-technology-style-648.html", text);

        // Send the generated image with a classy and engaging caption.
        await client.sendMessage(m.chat, {
            image: {
                // 'lightEffectResult.image' is assumed to hold the URL of the generated image.
                url: lightEffectResult.image
            },
            caption: `🚀 Your futuristic Light Text Effect! Powered by Frost_Byte-Ai. ✨`
        }, {
            quoted: m
        });
    } catch (error) {
        // Handle any errors with a sassy, apologetic message and emojis.
        m.reply(`💡 Oh no! The future is glitchy. Try again, darling! 🚀 Error: \`${error.message}\``);
    }
}
break;

//========================================================================================================================//
// Case: Neon
case 'neon': {
    // Input validation: Ensure text is provided.
    if (!text || text.trim() === "") {
        // Sassy reply for missing text, with fancy emojis at the start and end.
        m.reply("💡 Darling, you forgot the neon glow! Try: `!Neon Your Name` ✨");
        return; // Exit if no text is provided.
    }
    try {
        // Inform the user about the process with a stylish, sassy message and emojis.
        m.reply("🌟 Illuminating your text with vibrant neon... hold on! 💡✨");

        // Call the mumaker.ephoto function with the Neon Light effect URL and user's text.
        const neonEffectResult = await mumaker.ephoto("https://en.ephoto360.com/create-colorful-neon-light-text-effects-online-797.html", text);

        // Send the generated image with a classy and engaging caption.
        await client.sendMessage(m.chat, {
            image: {
                // 'neonEffectResult.image' is assumed to hold the URL of the generated image.
                url: neonEffectResult.image
            },
            caption: `💖 Your dazzling Colorful Neon Light Text Effect! Created by Frost_Byte-Ai. ✨`
        });
    } catch (error) {
        // Handle any errors with a sassy, apologetic message and emojis.
        m.reply(`💡 Oh no! The neon flickered out. Try again, darling! ⚡ Error: \`${error.message}\``);
    }
}
break;

//========================================================================================================================//
// Case: Silver / Silva
case 'silver':
case 'silva': { // Supports both 'silver' and 'silva' commands.
    // Input validation: Ensure text is provided.
    if (!text || text.trim() === "") {
        // Sassy reply for missing text, with fancy emojis at the start and end.
        m.reply("✨ Darling, you forgot the shiny text! Try: `!Silva Your Name` 💎");
        return; // Exit if no text is provided.
    }
    try {
        // Inform the user about the process with a stylish, sassy message and emojis.
        m.reply("🌟 Polishing your text to a brilliant silver shine... stand by! 💎✨");

        // Call the mumaker.ephoto function with the Silver 3D effect URL and user's text.
        const silverEffectResult = await mumaker.ephoto("https://en.ephoto360.com/create-glossy-silver-3d-text-effect-online-802.html", text);

        // Send the generated image with a classy and engaging caption.
        await client.sendMessage(m.chat, {
            image: {
                // 'silverEffectResult.image' is assumed to hold the URL of the generated image.
                url: silverEffectResult.image
            },
            caption: `💎 Your dazzling Glossy Silver 3D Text Effect! Gleaming from Frost_Byte-Ai. ✨`
        });
    } catch (error) {
        // Handle any errors with a sassy, apologetic message and emojis.
        m.reply(`✨ Oh no! The silver tarnished. Try again, darling! 💎 Error: \`${error.message}\``);
    }
}
break;

//========================================================================================================================//
// Case: Devil
case 'devil': {
    // Input validation: Ensure text is provided.
    if (!text || text.trim() === "") {
        // Sassy reply for missing text, with fancy emojis at the start and end.
        m.reply("😈 Oops, missing the devilish text! Try this: `!Devil Your Name` 🖤");
        return; // Exit if no text is provided.
    }
    try {
        // Inform the user about the process with a stylish, sassy message and emojis.
        m.reply("🔥 Unleashing infernal neon power... stand by! 😈✨");

        // Call the mumaker.ephoto function with the Neon Devil Wings effect URL and user's text.
        const devilEffectResult = await mumaker.ephoto("https://en.ephoto360.com/neon-devil-wings-text-effect-online-683.html", text);

        // Send the generated image with a classy and engaging caption.
        await client.sendMessage(m.chat, {
            image: {
                // 'devilEffectResult.image' is assumed to hold the URL of the generated image.
                url: devilEffectResult.image
            },
            caption: `😈 Your fierce Neon Devil Wings text effect! Conjured by Frost_Byte-Ai. 🔥`
        });
    } catch (error) {
        // Handle any errors with a sassy, apologetic message and emojis.
        m.reply(`🖤 Oh no! The inferno fizzled out. Try again, darling! 😈 Error: \`${error.message}\``);
    }
}
break;

//========================================================================================================================//
// Case: Typography
case 'typography': {
    // Input validation: Ensure text is provided.
    if (!text || text.trim() === "") {
        // Sassy reply for missing text, with fancy emojis at the start and end.
        m.reply("🖋️ Feeling poetic? You forgot the text! Try: `!Typography Your Status` 🚶‍♀️");
        return; // Exit if no text is provided.
    }
    try {
        // Inform the user about the process with a stylish, sassy message and emojis.
        m.reply("🚶‍♀️ Crafting your heartfelt pavement message... just a moment! ✍️✨");

        // Call the mumaker.ephoto function with the Pavement Typography effect URL and user's text.
        const typographyEffectResult = await mumaker.ephoto("https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html", text);

        // Send the generated image with a classy and engaging caption.
        await client.sendMessage(m.chat, {
            image: {
                // 'typographyEffectResult.image' is assumed to hold the URL of the generated image.
                url: typographyEffectResult.image
            },
            caption: `💖 Your touching Typography on Pavement effect! Shared by Frost_Byte-Ai. 🚶‍♀️`
        });
    } catch (error) {
        // Handle any errors with a sassy, apologetic message and emojis.
        m.reply(`🚶‍♀️ Oh no, the pavement is smudged. Try again, darling! 💔 Error: \`${error.message}\``);
    }
}
break;

//========================================================================================================================//
// Case: Purple
case 'purple': {
    // Input validation: Ensure text is provided.
    if (!text || text.trim() === "") {
        // Sassy reply for missing text, with fancy emojis at the start and end.
        m.reply("👑 Darling, you forgot the royal purple! Try: `!Purple Your Name` 💜");
        return; // Exit if no text is provided.
    }
    try {
        // Inform the user about the process with a stylish, sassy message and emojis.
        m.reply("💜 Infusing your text with regal purple magic... stand by! 👑✨");

        // Call the mumaker.ephoto function with the Purple effect URL and user's text.
        const purpleEffectResult = await mumaker.ephoto("https://en.ephoto360.com/purple-text-effect-online-100.html", text);

        // Send the generated image with a classy and engaging caption.
        await client.sendMessage(m.chat, {
            image: {
                // 'purpleEffectResult.image' is assumed to hold the URL of the generated image.
                url: purpleEffectResult.image
            },
            caption: `👑 Your stunning Purple Text Effect! Fit for royalty from Frost_Byte-Ai. 💜`
        });
    } catch (error) {
        // Handle any errors with a sassy, apologetic message and emojis.
        m.reply(`💜 Oh no! The royal dye ran. Try again, darling! 👑 Error: \`${error.message}\``);
    }
}
break;

//========================================================================================================================//
// Case: Thunder
case 'thunder': {
    // Input validation: Ensure text is provided.
    if (!text || text.trim() === "") {
        // Sassy reply for missing text, with fancy emojis at the start and end.
        m.reply("⚡ Oops, you forgot the thunderous text! Use it like: `!Thunder Your Name` ⚡");
        return; // Exit if no text is provided.
    }
    try {
        // Inform the user about the process with a stylish, sassy message and emojis.
        m.reply("⚡ Conjuring your electrifying thunder effect... just a sec! ⚡✨");

        // Call the mumaker.ephoto function with the Thunder effect URL and user's text.
        const thunderEffectResult = await mumaker.ephoto("https://en.ephoto360.com/thunder-text-effect-online-97.html", text);

        // Send the generated image with a classy and engaging caption.
        await client.sendMessage(m.chat, {
            image: {
                // 'thunderEffectResult.image' is assumed to hold the URL of the generated image.
                url: thunderEffectResult.image
            },
            caption: `✨ Your electrifying Thunder Text Effect! Crafted by Frost_Byte-Ai. ⚡`
        });
    } catch (error) {
        // Handle any errors with a sassy, apologetic message and emojis.
        m.reply(`⚡ Oh snap! A storm of errors occurred. Please try again, gorgeous! ⛈️ Error: \`${error.message}\``);
    }
}
break;

//========================================================================================================================//
// Case: Leaves
case 'leaves': {
    // Input validation: Ensure text is provided.
    if (!text || text.trim() === "") {
        // Sassy reply for missing text, with fancy emojis at the start and end.
        m.reply("🍃 Oops, you forgot the text! Let's make some leafy art: `!Leaves Your Name` 🌿");
        return; // Exit if no text is provided.
    }
    try {
        // Inform the user about the process with a stylish, sassy message and emojis.
        m.reply("🌿 Painting your text with nature's finest green brush... just a sec! 🍃✨");

        // Call the mumaker.ephoto function with the Green Brush effect URL and user's text.
        const leavesEffectResult = await mumaker.ephoto("https://en.ephoto360.com/green-brush-text-effect-typography-maker-online-153.html", text);

        // Send the generated image with a classy and engaging caption.
        await client.sendMessage(m.chat, {
            image: {
                // 'leavesEffectResult.image' is assumed to hold the URL of the generated image.
                url: leavesEffectResult.image
            },
            caption: `🌿 Your stunning Green Brush Typography! Freshly made by Frost_Byte-Ai. 🍃`
        }, {
            quoted: m // Ensure the reply is quoted to the original message.
        });
    } catch (error) {
        // Handle any errors with a sassy, apologetic message and emojis.
        m.reply(`🍃 Oh dear, the leaves are a bit tangled. Try again, darling! 🍂 Error: \`${error.message}\``);
    }
}
break;

//========================================================================================================================//
// Case: 1917
case '1917': {
    // Input validation: Ensure text is provided.
    if (!text || text.trim() === "") {
        // Sassy reply for missing text, with fancy emojis at the start and end.
        m.reply("🎬 Darling, you forgot the vintage flair! Use it like: `!1917 Your Name/Quote` 🎞️");
        return; // Exit if no text is provided.
    }
    try {
        // Inform the user about the process with a stylish, sassy message and emojis.
        m.reply("🕰️ Transporting you to 1917... one moment, please! 🎞️✨");

        // Call the mumaker.ephoto function with the 1917 effect URL and user's text.
        const vintageEffectResult = await mumaker.ephoto("https://en.ephoto360.com/1917-style-text-effect-523.html", text);

        // Send the generated image with a classy and engaging caption.
        await client.sendMessage(m.chat, {
            image: {
                // 'vintageEffectResult.image' is assumed to hold the URL of the generated image.
                url: vintageEffectResult.image
            },
            caption: `🌟 Your cinematic 1917 Style Text Effect, ready for the big screen! By Frost_Byte-Ai. 🎬`
        }, {
            quoted: m // Ensure the reply is quoted to the original message.
        });
    } catch (error) {
        // Handle any errors with a sassy, apologetic message and emojis.
        m.reply(`🎞️ Oh no! The time machine sputtered. Try again, darling! ⏳ Error: \`${error.message}\``);
    }
}
break;

//========================================================================================================================//
// Case: Arena
case 'arena': {
    // Input validation: Ensure text is provided.
    if (!text || text.trim() === "") {
        // Sassy reply for missing text, with fancy emojis at the start and end.
        m.reply("⚔️ Darling, your Arena title is missing! Use it like: `!arena Your Title` 🏆");
        return; // Exit if no text is provided.
    }
    try {
        // Inform the user about the process with a stylish, sassy message and emojis.
        m.reply("🏆 Forging your Arena cover... just a moment! ⚔️✨");

        // Call the mumaker.ephoto function with the Arena Cover effect URL and user's text.
        const arenaEffectResult = await mumaker.ephoto("https://en.ephoto360.com/create-cover-arena-of-valor-by-mastering-360.html", text);

        // Send the generated image with a classy and engaging caption.
        await client.sendMessage(m.chat, {
            image: {
                // 'arenaEffectResult.image' is assumed to hold the URL of the generated image.
                url: arenaEffectResult.image
            },
            caption: `🏆 Your epic Arena Cover Art! Dominate with Frost_Byte-Ai. ⚔️`
        }, {
            quoted: m // Ensure the reply is quoted to the original message.
        });
    } catch (error) {
        // Handle any errors with a sassy, apologetic message and emojis.
        m.reply(`⚔️ Oh no! The battlefield is empty. Try again, darling! 🏆 Error: \`${error.message}\``);
    }
}
break;

//========================================================================================================================//
// Case: Hacker
case 'hacker': {
    // Input validation: Ensure text is provided.
    if (!text || text.trim() === "") {
        // Sassy reply for missing text, with fancy emojis at the start and end.
        m.reply("💻 Darling, your hacker alias is missing! Use it like: `!hacker Your Alias` 🕶️");
        return; // Exit if no text is provided.
    }
    try {
        // Inform the user about the process with a stylish, sassy message and emojis.
        m.reply("🕶️ Accessing the network... creating your anonymous avatar! 💻✨");

        // Call the mumaker.ephoto function with the Hacker Avatar effect URL and user's text.
        const hackerEffectResult = await mumaker.ephoto("https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html", text);

        // Send the generated image with a classy and engaging caption.
        await client.sendMessage(m.chat, {
            image: {
                // 'hackerEffectResult.image' is assumed to hold the URL of the generated image.
                url: hackerEffectResult.image
            },
            caption: `🕶️ Your mysterious Anonymous Hacker Avatar! Crafted by Frost_Byte-Ai 💻`
        }, {
            quoted: m // Ensure the reply is quoted to the original message.
        });
    } catch (error) {
        // Handle any errors with a sassy, apologetic message and emojis.
        m.reply(`💻 Oh no! The firewall is up. Try again, darling! 🕶️ Error: \`${error.message}\``);
    }
}
break;

//========================================================================================================================//
// Case: Sand
case 'sand': {
    // Input validation: Ensure text is provided.
    if (!text || text.trim() === "") {
        // Sassy reply for missing text, with fancy emojis at the start and end.
        m.reply("🏖️ Darling, the beach is waiting for your message! Use it like: `!sand Your Message` 🌊");
        return; // Exit if no text is provided.
    }
    try {
        // Inform the user about the process with a stylish, sassy message and emojis.
        m.reply("✍️ Carving your message into the sand... just a moment! 🏖️✨");

        // Call the mumaker.ephoto function with the Sand effect URL and user's text.
        const sandEffectResult = await mumaker.ephoto("https://en.ephoto360.com/write-names-and-messages-on-the-sand-online-582.html", text);

        // Send the generated image with a classy and engaging caption.
        await client.sendMessage(m.chat, {
            image: {
                // 'sandEffectResult.image' is assumed to hold the URL of the generated image.
                url: sandEffectResult.image
            },
            caption: `🌊 Your beautiful message written on the sand! Crafted by Frost_Byte-Ai. 🏖️`
        }, {
            quoted: m // Ensure the reply is quoted to the original message.
        });
    } catch (error) {
        // Handle any errors with a sassy, apologetic message and emojis.
        m.reply(`🏖️ Oh no! The tide washed it away. Try again, darling! 🌊 Error: \`${error.message}\``);
    }
}
break;

//========================================================================================================================//
// Case: Dragonball
case 'dragonball': {
    // Input validation: Ensure text is provided.
    if (!text || text.trim() === "") {
        // Sassy reply for missing text, with fancy emojis at the start and end.
        m.reply("💥 Darling, you forgot the Saiyan power-up text! Use it like: `!dragonball Your Name` 💥");
        return; // Exit if no text is provided.
    }
    try {
        // Inform the user about the process with a stylish, sassy message and emojis.
        m.reply("✨ Channeling the energy of the Dragon Balls... just a moment! 💥💫");

        // Call the mumaker.ephoto function with the Dragon Ball effect URL and user's text.
        const dragonballEffectResult = await mumaker.ephoto("https://en.ephoto360.com/create-dragon-ball-style-text-effects-online-809.html", text);

        // Send the generated image with a classy and engaging caption.
        await client.sendMessage(m.chat, {
            image: {
                // 'dragonballEffectResult.image' is assumed to hold the URL of the generated image.
                url: dragonballEffectResult.image
            },
            caption: `🌟 Your epic Dragon Ball Style Text Effect! Unleashed by Frost_Byte-Ai. 💥`
        }, {
            quoted: m // Ensure the reply is quoted to the original message.
        });
    } catch (error) {
        // Handle any errors with a sassy, apologetic message and emojis.
        m.reply(`💥 Oh no! The Dragon Balls are scattered. Try again, darling! ⚡ Error: \`${error.message}\``);
    }
}
break;

//========================================================================================================================//
// Case: Naruto
case 'naruto': {
    // Input validation: Ensure text is provided.
    if (!text || text.trim() === "") {
        // Sassy reply for missing text, with fancy emojis at the start and end.
        m.reply("🍥 Darling, you forgot the ninja way text! Use it like: `!naruto Your Name` 🍥");
        return; // Exit if no text is provided.
    }
    try {
        // Inform the user about the process with a stylish, sassy message and emojis.
        m.reply("🍥 Channeling the spirit of Naruto... generating your logo style! 🍥✨");

        // Call the mumaker.ephoto function with the Naruto effect URL and user's text.
        const narutoEffectResult = await mumaker.ephoto("https://en.ephoto360.com/naruto-shippuden-logo-style-text-effect-online-808.html", text);

        // Send the generated image with a classy and engaging caption.
        await client.sendMessage(m.chat, {
            image: {
                // 'narutoEffectResult.image' is assumed to hold the URL of the generated image.
                url: narutoEffectResult.image
            },
            caption: `🍥 Your epic Naruto Shippuden Logo Style Text Effect! Believe it! - Frost_Byte-Ai. 🍥`
        }, {
            quoted: m // Ensure the reply is quoted to the original message.
        });
    } catch (error) {
        // Handle any errors with a sassy, apologetic message and emojis.
        m.reply(`🍥 Oh no! The jutsu failed. Try again, darling! 🍥 Error: \`${error.message}\``);
    }
}
break;

//========================================================================================================================//
// Case: Graffiti
case 'graffiti': {
    // Input validation: Ensure text is provided.
    if (!text || text.trim() === "") {
        // Sassy reply for missing text, with fancy emojis at the start and end.
        m.reply("🎨 Darling, unleash your inner artist! Use: `!graffiti Your Tag` 🖌️");
        return; // Exit if no text is provided.
    }
    try {
        // Inform the user about the process with a stylish, sassy message and emojis.
        m.reply("🖌️ Spraying some cartoon graffiti magic... stand by! 🎨✨");

        // Call the mumaker.ephoto function with the Graffiti effect URL and user's text.
        const graffitiEffectResult = await mumaker.ephoto("https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html", text);

        // Send the generated image with a classy and engaging caption.
        await client.sendMessage(m.chat, {
            image: {
                // 'graffitiEffectResult.image' is assumed to hold the URL of the generated image.
                url: graffitiEffectResult.image
            },
            caption: `🎨 Your vibrant Cartoon Graffiti Text Effect! Tagged by Frost_Byte-Ai. 🖌️`
        }, {
            quoted: m // Ensure the reply is quoted to the original message.
        });
    } catch (error) {
        // Handle any errors with a sassy, apologetic message and emojis.
        m.reply(`🎨 Oh no! The spray can is empty. Try again, darling! 🖌️ Error: \`${error.message}\``);
    }
}
break;

//========================================================================================================================//
// Case: Cat (Note: The provided URL is for "handwritten text on foggy glass")
case 'cat': {
    // Input validation: Ensure text is provided.
    if (!text || text.trim() === "") {
        // Sassy reply for missing text, with fancy emojis at the start and end.
        m.reply("🐈 Darling, the glass is fogged without your text! Try: `!cat Your Name` 🌫️");
        return; // Exit if no text is provided.
    }
    try {
        // Inform the user about the process with a stylish, sassy message and emojis.
        m.reply("🌫️ Writing your message on the foggy glass... just a sec! 🐈✨");

        // Call the mumaker.ephoto function with the Foggy Glass effect URL and user's text.
        const catEffectResult = await mumaker.ephoto("https://en.ephoto360.com/handwritten-text-on-foggy-glass-online-680.html", text);

        // Send the generated image with a classy and engaging caption.
        await client.sendMessage(m.chat, {
            image: {
                // 'catEffectResult.image' is assumed to hold the URL of the generated image.
                url: catEffectResult.image
            },
            caption: `🌫️ Your charming Handwritten Text on Foggy Glass! Created by Frost_Byte-Ai. 🐈`
        }, {
            quoted: m // Ensure the reply is quoted to the original message.
        });
    } catch (error) {
        // Handle any errors with a sassy, apologetic message and emojis.
        m.reply(`🐈 Oh no! The glass cleared too soon. Try again, darling! 🌫️ Error: \`${error.message}\``);
    }
}
break;

//========================================================================================================================//
// Case: Gold
case 'gold': {
    // Input validation: Ensure text is provided.
    if (!text || text.trim() === "") {
        // Sassy reply for missing text, with fancy emojis at the start and end.
        m.reply("🌟 Darling, you forgot the golden touch! Try: `!Gold Your Name` 👑");
        return; // Exit if no text is provided.
    }
    try {
        // Inform the user about the process with a stylish, sassy message and emojis.
        m.reply("👑 Gilding your text with pure gold... stand by! 🌟✨");

        // Call the mumaker.ephoto function with the Modern Gold effect URL and user's text.
        const goldEffectResult = await mumaker.ephoto("https://en.ephoto360.com/modern-gold-4-213.html", text);

        // Send the generated image with a classy and engaging caption.
        await client.sendMessage(m.chat, {
            image: {
                // 'goldEffectResult.image' is assumed to hold the URL of the generated image.
                url: goldEffectResult.image
            },
            caption: `👑 Your dazzling Modern Gold Text Effect! Gleaming from Frost_Byte-Ai. 🌟`
        }, {
            quoted: m // Ensure the reply is quoted to the original message.
        });
    } catch (error) {
        // Handle any errors with a sassy, apologetic message and emojis.
        m.reply(`🌟 Oh no! The gold is a bit dull. Try again, darling! 👑 Error: \`${error.message}\``);
    }
}
break;

//========================================================================================================================//
// Case: Child (Note: The provided URL is for "write text on wet glass")
case 'child': {
    // Input validation: Ensure text is provided.
    if (!text || text.trim() === "") {
        // Sassy and instructive reply with fancy emojis at the start and end.
        m.reply("👑 Darling, the glass is waiting for your touch! Use it like: `!child Your Name` 🌧️");
        return; // Exit the function if no text is provided.
    }

    try {
        // Inform the user that the effect is being generated with a stylish and thematic message.
        m.reply("🌧️ Writing your message on the wet glass... just a moment! 💧✨");

        // Call the mumaker.ephoto function to generate the text effect.
        const childEffectResult = await mumaker.ephoto("https://en.ephoto360.com/write-text-on-wet-glass-online-589.html", text);

        // Send the generated image back to the user with a custom, branded caption.
        await client.sendMessage(m.chat, {
            image: {
                // 'childEffectResult.image' is assumed to contain the URL of the generated image.
                url: childEffectResult.image
            },
            // A classy caption that describes the effect and credits the bot.
            caption: `💧 Your moody Text on Wet Glass! Expressive art by Frost_Byte-Ai. 🌧️`
        }, {
            // 'quoted: m' ensures the bot's reply is associated with the user's original message.
            quoted: m
        });
    } catch (error) {
        // Handle any errors with a sassy, apologetic message and emojis.
        m.reply(`💧 Oh no! The condensation is too much. Try again, darling! 🌧️ Error: \`${error.message}\``);
    }
}
break;

//========================================================================================================================//		      
case 'joke': {
try {
        const url = 'https://official-joke-api.appspot.com/random_joke';  // API for random jokes
        const response = await axios.get(url);
        const joke = response.data;
        const jokeMessage = `
😂 *Below is a random joke for you* 😂\n\n
*${joke.setup}*\n\n
${joke.punchline} 😄
`;
        return reply(jokeMessage);
    } catch (e) {
        console.log(e);
        return reply("Couldn't fetch a joke right now. Please try again later.");
    }
}
break;

//========================================================================================================================//		      
   case "gpass": case 'genpassword': {
		      try {
        const length = args[0] ? parseInt(args[0]) : 12; // Default length is 12 if not provided
        if (isNaN(length) || length < 8) {
            return reply('Please provide a valid length for the password (Minimum 08 Characters).');
        }

        const generatePassword = (len) => {
            const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?';
            let password = '';
            for (let i = 0; i < len; i++) {
                const randomIndex = crypto.randomInt(0, charset.length);
                password += charset[randomIndex];
            }
            return password;
        };

        const password = generatePassword(length);
        const message = `Below is your password 🔥:`;

        // Send initial notification message
        await client.sendMessage(from, { text: message }, { quoted: m });

        // Send the password in a separate message
        await client.sendMessage(from, { text: password }, { quoted: m });
    } catch (e) {
        console.log(e);
        reply(`Error generating password🤕: ${e.message}`);
    }
}
break;

//========================================================================================================================//	
        case "funfact": {
  try {
        const url = 'https://uselessfacts.jsph.pl/random.json?language=en';  // API for random facts
        const response = await axios.get(url);
        const fact = response.data.text;

        const funFact = `
 *RAVEN-MD RANDOM FUNFACT* 

${fact}

Isn't that interesting? 😄
`;

  return reply(funFact);
    } catch (e) {
        console.log(e);
        return reply("An error occurred while fetching a fun fact. Please try again later🤕.");
    }
}
break;

//========================================================================================================================//		      
	      case 'animegirl': {
try {
        const apiUrl = `https://api.waifu.pics/sfw/waifu`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        await client.sendMessage(from, { image: { url: data.url }, caption: '*GENERATED BY RAVEN MD*' }, { quoted: m });
    } catch (e) {
        console.log(e);
        reply(`*Error Fetching Anime Girl image*: ${e.message}`);
    }
}
break;

//========================================================================================================================//
case 'rship': {
	 const toM = (a) => '@' + a.split('@')[0];
try {
        // Ensure command is used in a group
        if (!m.isGroup) {
            return reply("This command can only be used in groups.");
        }

        // Get group participants
        const participants = groupMetadata.participants.map(p => p.id);

        if (participants.length < 2) {
            return reply("Not enough members to pair.");
        }

        // Sender of the command
        const sender = m.sender;

        // Randomly select another participant
        let randomParticipant;
        do {
            randomParticipant = participants[Math.floor(Math.random() * participants.length)];
        } while (randomParticipant === sender);

        // Reply with the pairing
        const message = `${toM(sender)} your match is  ${toM(randomParticipant)}\nCongratulations☠️`;
        await client.sendMessage(from, { text: message, mentions: [sender, randomParticipant] });
    } catch (e) {
        console.error("Error in ship command:", e);
        reply("An error occurred while processing the command. Please try again.");
    }
}
break;

//========================================================================================================================//
	      case 'calculate': case 'calc': {
try {
    if (!text) {
      return m.reply("*Example usage:* .calculate 5+72");
    }

    // Validate the input to prevent unsafe operations
    if (!/^[0-9+\-*/().\s]+$/.test(text)) {
      return m.reply("Invalid format. Only numbers and +, -, *, /, ( ) are allowed.");
    }

    // Evaluate the mathematical expression
    let result = eval(text);

    // Reply with the result
    m.reply(`${result}`);
  } catch (e) {
    console.error("Error in .calculate command:", e);
    m.reply("Error in calculation. Please check your expression.");
  }
}
break;

//========================================================================================================================//
case "raven":
		{
        if (!text) return reply(`Hello there, what's your question?`);
          let d = await fetchJson(
            `https://bk9.fun/ai/llama?q=${text}`
          );
          if (!d.BK9) {
            return reply(
              "An error occurred while fetching the AI chatbot response. Please try again later."
            );
          } else {
            reply(d.BK9);
          }
      }
                break;

//========================================================================================================================//
case "gpt4":
           {
        if (!text) return reply(`Hello there, what's your question?`);
          let d = await fetchJson(
            `https://bk9.fun/ai/Aoyo?q=${text}`
          );
          if (!d.BK9) {
            return reply(
              "An error occurred while fetching the AI chatbot response. Please try again later."
            );
          } else {
            reply(d.BK9);
          }
		     }
                      break;

//========================================================================================================================//
case 'gpt3': {
        if (!q) return reply("Holla, I'm listening to you..");
try {
        const apiUrl = `https://vapis.my.id/api/openai?q=${encodeURIComponent(q)}`;
        const { data } = await axios.get(apiUrl);

   if (!data || !data.result) {
            return reply("OpenAI failed to respond. Please try again later.");
        }
        await reply(`${data.result}`);   
   
} catch (e) {
        console.error("Error in OpenAI command:", e); 
        reply("An error occurred while communicating With API");
    }
};
  break;

//========================================================================================================================//	      		      
case "gpt2":
   {
       if (!q) return reply("Hello there,  what's your question ?");
try {
  const apiUrl = `https://lance-frank-asta.onrender.com/api/gpt?q=${encodeURIComponent(q)}`;
  const { data } = await axios.get(apiUrl);

if (!data || !data.message) {
        return reply("Oops an error occurred!!.");
	}
        await reply(`${data.message}`);
    } catch (e) {
        console.error("Error in AI command:", e);
 reply("An error occurred while communicating with API.");
    }
}; 
                break;

//========================================================================================================================//
case 'gpt':{

if (!text) return m.reply("Hello there, what's going on ?");
	try {
     const data = await fetchJson(`https://api.dreaded.site/api/aichat?query=${text}`);
		
    if (data && data.result) {
	    const res = data.result;
	    await m.reply(res);
    } else {
	    m.reply("An error occurred!!");
    }
	} catch (error) {
reply('An error occured while communicating with the APIs\n' + error);
}
  }
break;

//========================================================================================================================//	      		      
 case 'trt': case 'translate':{
try {
    // Check if the message is quoted
    if (!m.quoted) {
      return m.reply("Please quote a message to translate.");
    }
    // Extract the language code from the text
    const langCode = text.trim;
    // Check if a valid language code is provided
    if (!langCode) {
      return m.reply("Please provide a valid language code. Example: .translate en");
    }
    // Get the quoted message
    const quotedMessage = m.quoted.text;
    // Translate the quoted message
    const translation = await translatte(quotedMessage, { to: langCode });
    // Send the translated message
    m.reply(`${translation.text}`);
  } catch (e) {
    console.error("Error in .translate command:", e);
    m.reply("An error occurred while translating the text. Please try again later.");
  }
 }
break;

//========================================================================================================================//		      
 case 'cast': {
    if (!Owner) throw NotOwner;
      if (!m.isGroup) throw group;
    if (!text) return m.reply(`provide a text to cast !`);
    let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
    m.reply(`Success in casting the message to contacts\n\nDo not allways use this Command to avoid WA-bans ! `);
    for (let pler of mem) {
    client.sendMessage(pler, { text: q})
     }  
     m.reply(`Casting completed successfully😁`)
      }
      break;

//========================================================================================================================//		      
case "img": case "ai-img": case "image": case "images":{
		      var gis = require('g-i-s');
 if (!text) return m.reply("Provide a text");

    try {
        // Use the 'text' as the search term for images
        gis(text, async (error, results) => {
            if (error) {
                return m.reply("An error occurred while searching for images.\n" + error);
            }

            // Check if results are found
            if (results.length === 0) {
                return m.reply("No images found.");
            }

            // Limit the number of images to send (e.g., 5)
            const numberOfImages = Math.min(results.length, 5);
            const imageUrls = results.slice(0, numberOfImages).map(result => result.url);

            // Send the images
            const messages = imageUrls.map(url => ({
                image: { url },
                caption: `Downloaded by ${botname}`
            }));

            for (const message of messages) {
                await client.sendMessage(m.chat, message, { quoted: m });
            }
        });
    } catch (e) {
        m.reply("An error occurred.\n" + e);
    }
}
	break;

//========================================================================================================================//		      
case "foreigners": {
    // --- Pre-checks for command execution ---
    // Ensure the command is used within a group chat.
    if (!m.isGroup) {
        // Sassy reply if not in a group.
        return m.reply("Darling, this command only works in a group chat! Don't make me come to your DMs... 😒");
    }
    // Ensure the user invoking the command is an administrator.
    if (!isAdmin) {
        // Sassy reply for non-admins.
        return m.reply("Excuse me? Only group admins can wield this power. Step aside, peasant! 👑");
    }
    // Ensure the bot itself has administrator privileges in the group.
    if (!isBotAdmin) {
        // Sassy reply if bot is not an admin.
        return m.reply("Oh, honey, I can't do anything without admin rights! Please make promote me an admin privilege. 🙏");
    }

    // --- Identify non-local members (foreigners) ---
    let nonLocalMembers = participants
        .filter(participant => !participant.admin) // Keep only non-admin members
        .map(nonAdminParticipant => nonAdminParticipant.id) // Get their IDs
        .filter(memberId =>
            !memberId.startsWith(mycode) && // Check if ID does NOT start with the bot's country code
            memberId !== client.decodeJid(client.user.id) // Exclude the bot itself
        );

    // --- Handle command arguments ---
    if (!args || args.length === 0 || args[0] === "") {
        // If no arguments are provided (e.g., just "!foreigners")
        if (nonLocalMembers.length === 0) {
            // If no foreigners were detected.
            return m.reply("Phew! Looks like everyone in this group is a local darling. No foreigners to report! 🌍✨");
        }

        // Construct the message listing the detected foreigners.
        let message = `Well, well, well... look what we have here! 👀\n\n`;
        message += `Foreigners are those whose country codes don't match my fabulous origin code, \`${mycode}\`. How terribly... *foreign* of them.\n`;
        message += `The following 💖 ${nonLocalMembers.length} darling souls were identified as 'outsiders':\n\n`;

        for (const foreignerId of nonLocalMembers) {
            // Mention each foreigner.
            message += `𓅂 @${foreignerId.split("@")[0]}\n`;
        }

        message += `\nIf you wish to 'cleanse' the group, simply command me with \`${prefix}foreigners -x\`.`;

        // Send the message with mentions of the identified foreigners.
        await client.sendMessage(m.chat, {
            text: message,
            mentions: nonLocalMembers // Array of IDs to mention
        }, {
            quoted: m // Quote the original message.
        });

    } else if (args[0] === "-x") {
        // If the command is "!foreigners -x" to remove them.

        // Announce the impending removal with a slight delay.
        setTimeout(async () => {
            await client.sendMessage(m.chat, {
                text: `⏳ Alright, darling! Prepare yourselves... Froat-Ai is about to perform a *major* group cleanse. In the next second, all ${nonLocalMembers.length} 'outsiders' will be politely (or not so politely) escorted out. This process is irreversible, so no take-backs! 🚫✨`
            }, {
                quoted: m
            });

            // Execute the removal after another short delay.
            setTimeout(async () => {
                try {
                    // Kick the identified non-local members from the group.
                    await client.groupParticipantsUpdate(m.chat, nonLocalMembers, "remove");
                    // Reply after the removal attempt.
                    m.reply("Ta-da! ✨ The 'foreigner' removal operation is complete. Hope they enjoyed their brief stay! Any remaining ones? 🌚");
                } catch (error) {
                    // Handle potential errors during the kick process.
                    m.reply(`Oh dear! It seems my kicking powers are a bit weak today. Something went wrong while removing members: \`${error.message}\`. Please ensure I have the necessary permissions, darling. 😥`);
                }
            }, 1000); // Delay before kicking.
        }, 1000); // Delay before announcing removal.
    }
}
break;

//========================================================================================================================//
case 'dalle':
case 'createimage': {
    // --- Input Validation ---
    if (!text) {
        return m.reply("Darling, my artistic muse needs a prompt! What fabulous image shall I conjure for you? 🎨✨");
    }

    // --- API URL Construction ---
    const apiUrl = `https://api.dreaded.site/api/imagine?text=${encodeURIComponent(text)}`;

    // --- User Feedback: Waiting ---
    m.reply("Hold on to your halo, darling! I'm weaving some digital magic to create your masterpiece... 💫🪄");

    try {
        // --- Image Generation ---
        const data = await fetchJson(apiUrl);

        // --- Response Validation ---
        if (!data.status || !data.result) {
          // Stylish Reoly
            return m.reply("Oh, darling! It seems the creative well has run dry, or perhaps the API is having a moment. 💔 Let's try again later, shall we? 🔌");
        }

        // Destructure the response data.
        const { creator, result } = data; // 'creator' might be unused here, but kept for structure.
        // Craft a stylish caption for the generated image.
        const caption = `Voila! Your vision, brought to life by yours truly. ✨`;

        // --- Sending the Generated Image ---
        await client.sendMessage(
            m.chat,
            {
                image: { url: result }, // The URL of the generated image.
                caption: caption
            },
            { quoted: m } // Ensure the bot's reply is quoted to the original message.
        );
    } catch (error) {
        // --- Error Handling ---
        console.error("Error during image generation:", error);
        // Sassy reply for any other errors during the process.
        m.reply("Oopsie! My creative circuits got a bit tangled. Please try again, and I promise to be more graceful next time! 🙏💖");
    }
}
break;

//========================================================================================================================//		      
case "ai": {
    try {
        // --- Input Validation ---
        if (!m.quoted) {
            return m.reply("Darling, you need to *quote* an image or PDF first! My analytical skills require something to analyze, you know. 🧐");
        }
        // Sassy reply if no instructions were provided.
        if (!text) {
            return m.reply("Oh, honey, just showing me a picture isn't enough! Tell me what you want me to *do* with it. I'm *FROST-AI*, powered by Gemini Pro Vision, ready to analyze! 🧠✨");
        }
        // Check if the quoted message is an image or PDF.
        if (!/image|pdf/.test(mime)) {
            // Dismissive reply for unsupported file types.
            return m.reply(`Seriously? 🤨 That's not an image or a PDF! Please tag a valid file so I can work my magic. 🙄`);
        }

        // --- File Handling ---
        const downloadedMediaPath = await client.downloadAndSaveMediaMessage(m.quoted);
        // Upload the downloaded file to Catbox for easier access.
        const uploadedFileUrl = await uploadToCatbox(downloadedMediaPath);

        // Inform the user that analysis is underway with a sophisticated tone.
        m.reply(`Analyzing the ${mime.includes("pdf") ? "PDF document" : "image"}... Give me a moment to process this visual feast! ⏳✨`);

        // --- Gemini API Integration ---
        const genAI = new GoogleGenerativeAI("AIzaSyDJUtskTG-MvQdlT4tNE319zBqLMFei8nQ"); // Replace with your actual API key management

        // Helper function to convert file URL to Base64 format required by Gemini Vision.
        async function fileToBase64(fileUrl, mimeType) {
            const axiosConfig = { responseType: "arraybuffer" };
            const axiosResponse = await axios.get(fileUrl, axiosConfig);
            const fileContentBase64 = Buffer.from(axiosResponse.data).toString("base64");
            const fileData = {
                data: fileContentBase64,
                mimeType: mimeType
            };
            const geminiVisionFile = { inlineData: fileData };
            return geminiVisionFile;
        }

        // Configure the model.
        const modelConfig = {
            model: "gemini-1.5-flash" // Using the flash model for speed
        };
        const geminiModel = genAI.getGenerativeModel(modelConfig);

        // Prepare the content parts for the Gemini API: instructions + file.
        const geminiContentParts = [
            text, // User's instructions
            await fileToBase64(uploadedFileUrl, mime.includes("pdf") ? "application/pdf" : "image/jpeg") // File data
        ];

        // Generate content using the Gemini model.
        const generationResult = await geminiModel.generateContent(geminiContentParts);
        const response = await generationResult.response;
        const analysisResultText = response.text();

        // --- Sending the Analysis Result ---
        await m.reply(`Here's what I've gathered from your request: ✨\n\n${analysisResultText}`);

    } catch (error) {
        // --- Error Handling ---
        console.error("AI Image Analysis Error:", error); // Log the error for debugging.
        m.reply(`Oh, darling! My visual analysis circuits seem to be on strike. 💥 I'm unable to process that right now. Please try again later, or perhaps with a different file? 💔 Error: \`${error.message}\``);
    }
}
break;

//========================================================================================================================//		      
case "ai2": {
    // Requiring axios as per the original snippet.
    const axios = require("axios");

    try {
        // --- Input Validation: Quoted Message ---
        if (!m.quoted) {
            return m.reply("Darling, I need something to work with! Please quote the image or PDF you wish for me to analyze, and then provide your instructions. Let's create some magic! ✨");
        }

        // --- Input Validation: Text Instructions ---
        // Ensure there are instructions provided for the AI. If not, prompt the user sassily.
        if (!text) {
            return m.reply("Oh, sweetie, my sophisticated Frost AI needs a bit of guidance! Please provide clear instructions on what you'd like me to analyze in the image/PDF. Think of me as your personal digital oracle! 🔮");
        }

        // --- Input Validation: Media Type ---
        if (!/image|pdf/.test(m.quoted.mimetype)) {
            return m.reply("My dear, it seems you've sent something that isn't quite an image or a PDF. My AI is rather discerning – it thrives on visual or document files. Please quote a proper image or PDF, darling! 🖼️📄");
        }

        // --- Media Processing ---
        let mediaPath = await client.downloadAndSaveMediaMessage(m.quoted);
        let mediaUrl = await uploadToCatbox(mediaPath); // Assumed function to upload and return URL

        // --- AI Analysis Notification ---
        m.reply(`Just a moment, my love! Frost AI is now meticulously analyzing the depths of your ${m.quoted.mimetype.includes("pdf") ? "PDF document" : "image"}... It's quite the intellectual endeavor! 🧠`);

        // --- API Call for AI Analysis ---
        const data = await fetchJson(`https://api.dreaded.site/api/gemini-vision?url=${encodeURIComponent(mediaUrl)}&instruction=${encodeURIComponent(text)}`);
        let aiResult = data.result; // Extract the actual result from the API response

        // --- Sending the AI's Result ---
        await m.reply(`Here's what Frost AI has divined from your ${m.quoted.mimetype.includes("pdf") ? "document" : "image"}, darling: ✨\n\n${aiResult}`);

    } catch (e) {
        // --- Error Handling ---
        // If any error occurs during the process, provide a sassy error message.
        m.reply(`My apologies, darling! It appears my analytical circuits are experiencing a temporary hiccup, and I can't process images or PDFs right now. 💔 Please try again later, or perhaps the universe is keeping its secrets for another time! Error details: \`${e}\``);
    }
}
break;

//========================================================================================================================//		      
case "vision": {
    // --- Input Validation: Quoted Message and Instruction ---
    if (!m.quoted || !text) {
        // Sassy reply if either the quote or instruction is missing.
        return m.reply("Darling, my vision capabilities require a subject! Please quote an image and grace me with your instructions. I am FROST AI, ready to decode the visual world for you. 🧐✨");
    }

    // --- Media Type Check ---
    let mediaMessageObject = m.quoted.message?.imageMessage; // Safely access imageMessage from the message content
    if (!mediaMessageObject) {
        // Sassy reply if the quoted message is not an image.
        return m.reply("Oh, honey, that's not quite what I'm looking for. My AI is a connoisseur of images, not... whatever that was. Please quote a proper image and provide your instructions! 🖼️🚫");
    }

    try {
        // --- Media Processing ---
        let mediaPath = await client.downloadAndSaveMediaMessage(mediaMessageObject);

        // Upload the downloaded image to Catbox to get a shareable URL.
        let mediaUrl = await uploadToCatbox(mediaPath);

        // --- AI Analysis Notification ---
        m.reply("Just a moment, my dear! Raven AI is diving deep into the visual data... It's quite the intellectual pursuit! 🧠💫");

        // --- API Call for AI Analysis ---
        const apiUrl = `https://bk9.fun/ai/geminiimg?url=${encodeURIComponent(mediaUrl)}&q=${encodeURIComponent(text)}`;

        // Fetch the JSON response from the API.
        const response = await fetch(apiUrl);
        if (!response.ok) {
            // Throw an error if the API call fails, including status information.
            throw new Error(`API returned status ${response.status}: ${response.statusText}`);
        }
        const apiResponse = await response.json();

        // --- Extracting and Sending the AI's Result ---
        let aiResult = apiResponse.BK9;

        // Prepare the response payload for sending.
        const responsePayload = {
            text: aiResult
        };

        // Send the AI's findings back to the chat with a sassy intro.
        await client.sendMessage(m.chat, responsePayload, { quoted: m });

    } catch (error) {
        // --- Error Handling ---
        m.reply(`My apologies, my love! It seems my visual analysis circuits are a bit fuzzy at the moment. 💔 I couldn't process that image. Perhaps the digital ether is playing tricks on us? Try again later! Error: \`${error.message}\``);
    }
}
break;

//========================================================================================================================//		      
		      case 'remini': {
			if (!quoted) return reply(`𝗪𝗵𝗲𝗿𝗲 𝗶𝘀 𝘁𝗵𝗲 𝗶𝗺𝗮𝗴𝗲 ?`)
			if (!/image/.test(mime)) return reply(`𝗤𝘂𝗼𝘁𝗲 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝘄𝗶𝘁𝗵 𝗰𝗮𝗽𝘁𝗶𝗼𝗻𝘀 ${prefix + command}`)
			
			const { remini } = require('../lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			client.sendMessage(m.chat, { image: proses, caption: '𝗚𝗲𝗻𝗲𝗿𝗮𝘁𝗲𝗱 𝗯𝘆 𝗥𝗮𝘃𝗲𝗻-𝗕𝗼𝘁'}, { quoted: m })
			}
			break;

//========================================================================================================================//		      	    
case "kill": case "kickall": {
	  if (!m.isGroup) throw group;
          if (!isBotAdmin) throw botAdmin;
          if (!Owner) throw NotOwner;

          let raveni = participants.filter(_0x5202af => _0x5202af.id != client.decodeJid(client.user.id)).map(_0x3c0c18 => _0x3c0c18.id);
		      
          m.reply("Initializing Kill command💀...");
      await client.groupSettingUpdate(m.chat, "announcement");
      await client.removeProfilePicture(m.chat);
      await client.groupUpdateSubject(m.chat, "𝗧𝗵𝗶𝘀 𝗴𝗿𝗼𝘂𝗽 𝗶𝘀 𝗻𝗼 𝗹𝗼𝗻𝗴𝗲𝗿 𝗮𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲 🚫");
      await client.groupUpdateDescription(m.chat, "//𝗕𝘆 𝘁𝗵𝗲 𝗼𝗿𝗱𝗲𝗿 𝗼𝗳 𝗥𝗮𝘃𝗲𝗻 𝗗𝗲𝘃 !");
      await client.groupRevokeInvite(m.chat);
	
          setTimeout(() => {
            client.sendMessage(m.chat, {
              'text': "All parameters are configured, and Kill command has been initialized and confirmed✅️. Now, all " + raveni.length + " group participants will be removed in the next second.\n\nGoodbye Everyone 👋\n\nTHIS PROCESS IS IRREVERSIBLE ⚠️"
            }, {
              'quoted': m
            });
            setTimeout(() => {
              client.groupParticipantsUpdate(m.chat, raveni, "remove");
              setTimeout(() => {
                m.reply("Succesfully removed All group participants✅️.\n\nGoodbye group owner 👋, its too cold in here 🥶.");
client.groupLeave(m.chat);	      
              }, 1000);
            }, 1000);
          }, 1000);
        };	      
          break;
		      
//========================================================================================================================//		      
	      case "kill2": case "kickall2": {
    if (!Owner) throw NotOwner;
    if (!text) {
      return m.reply("Provide a valid group link. Ensure the bot is in that group with admin privileges !");
    }

    let groupId;
    let groupName;
    try {
      let inviteCode = args[0].split("https://chat.whatsapp.com/")[1];
      const groupInfo = await client.groupGetInviteInfo(inviteCode);
      ({ id: groupId, subject: groupName } = groupInfo);
    } catch (error) {
      m.reply("Why are you giving me an invalid group link?");
      return;
    }

    try {
      const groupMetadata = await client.groupMetadata(groupId);
      const participants = await groupMetadata.participants;
      let participantIds = participants
        .filter(participant => participant.id !== client.decodeJid(client.user.id))
        .map(participant => participant.id);

      await m.reply("☠️Initializing and Preparing to kill☠️ " + groupName);
      await client.groupSettingUpdate(groupId, "announcement");
      await client.removeProfilePicture(groupId);
      await client.groupUpdateSubject(groupId, "𝗧𝗵𝗶𝘀 𝗴𝗿𝗼𝘂𝗽 𝗶𝘀 𝗻𝗼 𝗹𝗼𝗻𝗴𝗲𝗿 𝗮𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲 🚫");
      await client.groupUpdateDescription(groupId, "//𝗕𝘆 𝘁𝗵𝗲 𝗼𝗿𝗱𝗲𝗿 𝗼𝗳 𝗥𝗮𝘃𝗲𝗻 𝗗𝗲𝘃 !");
      await client.groupRevokeInvite(groupId);

      await client.sendMessage(
        groupId,
        {
          text: `At this time, My owner has initiated kill command remotely.\nThis has triggered me to remove all ${participantIds.length} group participants in the next second.\n\nGoodbye Everyone! 👋\n\n⚠️THIS PROCESS CANNOT BE TERMINATED⚠️`,
          mentions: participants.map(participant => participant.id)
        });

      await client.groupParticipantsUpdate(groupId, participantIds, "remove");

      const goodbyeMessage = {
        text: "Goodbye Group owner👋\nIt's too cold in Here🥶"
      };
      await client.sendMessage(groupId, goodbyeMessage);

      await client.groupLeave(groupId);
      await m.reply("```Successfully Killed💀```");
    } catch (error) {
      m.reply("```Kill command failed, bot is either not in that group, or not an admin```.");
    }
  }
		      break;
		      
//========================================================================================================================//		      
		      case 'carbon': {
		      const fetch = require('node-fetch');

  let cap = `𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗘𝗗 𝗕𝗬 ${botname}`;

  if (m.quoted && m.quoted.text) {
    const forq = m.quoted.text;

    try {
      let response = await fetch('https://carbonara.solopov.dev/api/cook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code: forq,
          backgroundColor: '#1F816D',
        }),
      });

      if (!response.ok) return m.reply('API failed to fetch a valid response.')

      let per = await response.buffer();

      await client.sendMessage(m.chat, { image: per, caption: cap }, { quoted: m });
    } catch (error) {
      m.reply("An error occured\n" + error)
    }
  } else {
    m.reply('Quote a code message');
  }
}
	 break;

//========================================================================================================================//		      
		case 'define': {
		      try {
        if (!text) {
            return m.reply('Please provide a word.');
        }

        const word = encodeURIComponent(text);

        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

        if (!response.ok) {
            return m.reply('Failed to fetch data. Please try again later.');
        }

        const data = await response.json();

        if (!data || !data[0] || !data[0].meanings || data[0].meanings.length === 0) {
            return m.reply('No definitions found for the provided word.');
        }

        const definitionData = data[0];
        const definition = definitionData.meanings[0].definitions[0].definition;
        
        const message = `${definition}`;

        await client.sendMessage(m.chat, { text: message }, { quoted: m });

    } catch (error) {
        console.error("Error occurred:", error);
        m.reply('An error occurred while fetching the data. Please try again later.\n' + error);
    }
}
	break;

//========================================================================================================================//		      
	         case "tweet": {
		      if (!text) return m.reply("provide some text for the tweet");

const displayname = pushname;
const username = m.sender.split('@')[0];
const avatar = await client.profilePictureUrl(m.sender, 'image').catch(_ => 'https://i.imgur.com/vuxJCTB.jpeg');
const replies = "246";
const retweets = "125";
const theme = "dark";

const imageurl = `https://some-random-api.com/canvas/misc/tweet?displayname=${encodeURIComponent(displayname)}&username=${encodeURIComponent(username)}&avatar=${encodeURIComponent(avatar)}&comment=${encodeURIComponent(text)}&replies=${encodeURIComponent(replies)}&retweets=${encodeURIComponent(retweets)}&theme=${encodeURIComponent(theme)}`;



await client.sendMessage(m.chat, { image: { url: imageurl}, caption: `𝗖𝗼𝗻𝘃𝗲𝗿𝘁𝗲𝗱 𝗯𝘆 𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧`}, { quoted: m}) 

	}
	 break;

//========================================================================================================================//		      
case "pickupline": {
    const API_URL = 'https://api.popcat.xyz/pickuplines'; // The API endpoint for pickup lines

    try {
        // --- User Feedback: Initiating Charm ---
        await client.sendMessage(m.chat, { text: "Let me conjure up a line that's sure to make them blush... 😉" }, { quoted: m });

        // --- API Call ---
        const response = await fetch(API_URL);

        // --- Response Validation ---
        if (!response.ok) {
            // Sassy error reply if the API fails.
            throw new Error(`API Error: ${response.status} ${response.statusText}`);
        }

        // Parse the JSON response.
        const data = await response.json();

        // --- Pickup Line Extraction and Formatting ---
        if (!data.pickupline) {
            throw new Error("Invalid data format received from API.");
        }

        const pickupLine = data.pickupline;

        // Construct the final message with a sassy intro and the pickup line.
        const lineMessage = `Here's a little something to sweep them off their feet: 💖\n\n"${pickupLine}"`;

        // --- Sending the Pickup Line ---
        await client.sendMessage(m.chat, { text: lineMessage }, { quoted: m });

    } catch (error) {
        // --- Error Handling ---
        console.error('Error fetching pickup line:', error);

        // Sassy and empathetic error reply if something goes wrong.
        await client.sendMessage(m.chat, { text: `Oh, darling! My charm generator seems to be experiencing a slight malfunction. 💔 I couldn't fetch a pickup line right now. Perhaps the muse is busy elsewhere? Try again later! 😅 Error: \`${error.message}\`` }, { quoted: m });
    }
}
break;

//========================================================================================================================//		      
case "quotes": {
    const API_URL = 'https://favqs.com/api/qotd'; // The API endpoint for daily quotes

    try {
        // --- User Feedback: Fetching Quote ---
        await client.sendMessage(m.chat, { text: "Let me find a little spark of wisdom for your day... ✨" }, { quoted: m });

        // --- API Call ---
        const response = await fetch(API_URL);

        // --- Response Validation ---
        if (!response.ok) {
            // Sassy error reply if the API fails.
            throw new Error(`API Error: ${response.status} ${response.statusText}`);
        }

        // Parse the JSON response.
        const data = await response.json();

        // --- Quote Extraction and Formatting ---
        if (!data.quote || !data.quote.body || !data.quote.author) {
            throw new Error("Invalid data format received from API.");
        }

        const { body, author } = data.quote;

        // Construct the final message with stylish formatting and emojis.
        const quoteMessage = `Here's a profound thought to ponder, darling: 🌟\n\n"${body}"\n\n— ${author} 🖋️`;

        // --- Sending the Quote ---
        await client.sendMessage(m.chat, { text: quoteMessage }, { quoted: m });

    } catch (error) {
        // --- Error Handling ---
        console.error('Error fetching quote:', error);

        // Sassy and empathetic error reply.
        await client.sendMessage(m.chat, { text: `Oh, dear! My wisdom well seems to be temporarily dry. 💔 I couldn't fetch a quote right now. Please try again later, or perhaps the universe is saving something even better for you! 😅 Error: \`${error.message}\`` }, { quoted: m });
    }
}
break;

//========================================================================================================================//		      
case "google": {
    // --- Input Validation ---
    if (!text) {
        // Sassy reply if no search term is provided.
        return m.reply("Darling, my search engine needs a quest! What knowledge shall I uncover for you today? Please provide a search term, like `.google What is treason` 🧐✨");
    }

    // --- API Call and Processing ---
    try {
        // Fetch search results from Google Custom Search API.
        const googleSearchUrl = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(text)}&key=AIzaSyDMbI3nvmQUrfjoCJYLS69Lej1hSXQjnWI&cx=baf9bdb0c631236e5`;
        const { data } = await axios.get(googleSearchUrl);

        // --- Result Handling ---
        if (!data.items || data.items.length === 0) {
            // Sassy reply if no results are found.
            return m.reply("Oh, dear! It seems Google has drawn a blank for your query. Perhaps the universe is keeping this secret... for now. 🌌 Or maybe your search term was a bit too... *niche*? 😉");
        }

        // Construct the output message with stylish formatting.
        let responseText = `Behold! The wisdom of the internet, curated just for you. 🌟\n\n`;
        responseText += `**🔍 Search Term:** \`${text}\`\n\n`;

        // Iterate through search results and format them.
        for (let i = 0; i < data.items.length; i++) {
            responseText += `✨ **Title:** ${data.items[i].title}\n`;
            responseText += `📝 **Snippet:** ${data.items[i].snippet}\n`;
            responseText += `🔗 **Link:** ${data.items[i].link}\n\n`;
        }

        // Reply with the formatted search results.
        m.reply(responseText);

    } catch (error) {
        // --- Error Handling ---
        console.error("Google Search Error:", error);
        // Sassy error reply.
        m.reply(`My apologies, darling! My connection to the great Google oracle seems to have a hiccup. 💔 Please try again later. Error: \`${error.message}\``);
    }
}
break;

//========================================================================================================================//		    
case "hack": {
    // --- Owner Check ---
    if (!Owner) {
        return m.reply("Darling, only the *true* owner can orchestrate such digital chaos! You're not on the VIP list. 💅");
    }

    try {
        // --- Hacking Simulation Steps ---
        const hackingSteps = [
            '✨ Initiating Operation: Digital Intrusion... ✨',
            '🐛 Deploying sophisticated malware... Loading device gallery files... 📂',
            '🚀 Progress: 10%... Almost there, darling! ⏳',
            '🚀 Progress: 20%... We\'re just getting started! ⏳',
            '🚀 Progress: 30%... Gaining access, slowly but surely. ⏳',
            '🚀 Progress: 40%... The digital veil is thinning... ⏳',
            '🚀 Progress: 50%... Halfway through the digital labyrinth! ⏳',
            '🚀 Progress: 60%... Unlocking secrets... ⏳',
            '🚀 Progress: 70%... The system trembles... ⏳',
            '🚀 Progress: 80%... Almost at the core! ⏳',
            '🚀 Progress: 90%... The final push! ⏳',
            '✅ Progress: 100%... All systems compromised! 💥',
            '💻 System Hijacking in progress... Connecting to the server to find... Error 404? How cliché! 😜',
            '🔓 Successfully connected to the device... Receiving sensitive data/secret passwords... 🤫',
            '📁 Data transfer complete (100%). Erasing all traces, terminating all malware... Poof! ✨',
            '📜 Sending log documents... For your viewing pleasure, of course. 😉',
            '🚀 Connection successfully terminated. Data securely dispatched. Ciao! 👋',
            '💣 All backlogs cleared! Your system is now... *unstable*. Prepare for shutdown in the next minute! ⚠️'
        ];

        // --- Execute Steps with Delay ---
        for (const step of hackingSteps) {
            await client.sendMessage(m.chat, { text: step }, { quoted: m });
            // Wait for 1 second between each message.
            await new Promise(resolve => setTimeout(resolve, 1000));
        }

    } catch (error) {
        // --- Error Handling ---
        console.error('Error during prank execution:', error);

        // Sassy error reply if something goes wrong.
        client.sendMessage(m.chat, {
            text: `❌ Oh, darling! My hacking simulation encountered a glitch. 💔 Reason: \`${error.message}\`. Please try again later, or perhaps with a less dramatic approach? 😅`
        });
    }
}
break;

//========================================================================================================================//		      
case "compile-py":

if (!text && !m.quoted) throw 'Quote/tag a python code to compile.';

const sourcecode = m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : m.text

let resultPromise = python.runSource(sourcecode);
resultPromise
    .then(resultt => {
        console.log(resultt);

reply(resultt.stdout);
reply(resultt.stderr);
    })
    .catch(err => {
        console.log(resultt.stderr);
reply(resultt.stderr)
    });
      break;

//========================================================================================================================//		      
		      case 'save': {
  const textL = m.text.toLowerCase();
  const quotedMessage = m.msg?.contextInfo?.quotedMessage;

if (Owner && quotedMessage && textL.startsWith(prefix + "save") && !m.quoted.chat.includes("status@broadcast")) {
    return m.reply("You did not tag a status media to save.");
  }

if (Owner && quotedMessage && textL.startsWith(prefix + "save") && m.quoted.chat.includes("status@broadcast")) {
    
    if (quotedMessage.imageMessage) {
      let imageCaption = quotedMessage.imageMessage.caption;
      let imageUrl = await client.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
      client.sendMessage(m.chat, { image: { url: imageUrl }, caption: imageCaption });
    }

    if (quotedMessage.videoMessage) {
      let videoCaption = quotedMessage.videoMessage.caption;
      let videoUrl = await client.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
      client.sendMessage(m.chat, { video: { url: videoUrl }, caption: videoCaption });
    }
     }
      }
    break;
		      
//========================================================================================================================//		      
	      case 'gitclone': {
		      if (!text) return m.reply(`Where is the link?`)
if (!text.includes('github.com')) return m.reply(`Is that a GitHub repo link ?!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user3, repo] = text.match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user3}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    await client.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => m.reply("error"))

		    }
		      break;

//========================================================================================================================//		      

//========================================================================================================================//		      
		case 'github': {
 if (!text) return m.reply('Provide a github username to stalk');
 
try {
const response = await fetch(`https://itzpire.com/stalk/github-user?username=${text}`)

const data = await response.json()
 
    const username = data.data.username;
    const nickname = data.data.nickname;
    const bio = data.data.bio;
    const profilePic = data.data.profile_pic;
    const url = data.data.url;
    const type = data.data.type;
    const isAdmin = data.data.admin;
    const company = data.data.company;
    const blog = data.data.blog;
    const location = data.data.location;
    const publicRepos = data.data.public_repo;
    const publicGists = data.data.public_gists;
    const followers = data.data.followers;
    const following = data.data.following;
    const createdAt = data.data.ceated_at;
    const updatedAt = data.data.updated_at;
    
const message = `Username:- ${username}\n\nNickname:- ${nickname}\n\nBio:- ${bio}\n\nLink:- ${url}\n\nLocation:- ${location}\n\nFollowers:- ${followers}\n\nFollowing:- ${following}\n\nRepos:- ${publicRepos}\n\nCreated:- ${createdAt}`

await client.sendMessage(m.chat, { image: { url: profilePic}, caption: message}, {quoted: m})

} catch (error) {

m.reply("Unable to fetch data\n" + error)

}
      }
       break;  

//========================================================================================================================//		      
	      case "screenshot": case "ss": {
		      try {
let cap = `𝗦𝗰𝗿𝗲𝗲𝗻𝘀𝗵𝗼𝘁 𝗯𝘆 ${botname}`

if (!text) return m.reply("Provide a website link to screenshot.")

const image = `https://image.thum.io/get/fullpage/${text}`

await client.sendMessage(m.chat, { image: { url: image }, caption: cap}, {quoted: m });


} catch (error) {

m.reply("An error occured.")

}

	      }
	      break;

//========================================================================================================================//		      
	      case "alive": case "test": {
		      const audiovn = "./Media/alive.mp3";
    const dooc = {
        audio: {
          url: audiovn
        },
        mimetype: 'audio/mp4',
        ptt: true,
        waveform:  [100, 0, 100, 0, 100, 0, 100],
        fileName: "𝗥𝗮𝘃𝗲𝗻",

        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
          title: "𝗛𝗶 𝗛𝘂𝗺𝗮𝗻👋, 𝗜 𝗮𝗺 𝗔𝗹𝗶𝘃𝗲 𝗻𝗼𝘄",
          body: "𝗥𝗔𝗩𝗘𝗡 𝗕𝗢𝗧",
          thumbnailUrl: "https://files.catbox.moe/7f98vp.jpg",
          sourceUrl: '',
          mediaType: 1,
          renderLargerThumbnail: true
          }}
      };
	await client.sendMessage(m.chat, dooc, {quoted: m });
	      }
		 break;
		      
//========================================================================================================================//		      
	case "removebg": {
try {

const cap = "𝗘𝗱𝗶𝘁𝗲𝗱 𝗯𝘆 𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧";
if (!m.quoted) return m.reply("Send the image then tag it with the command.");
if (!/image/.test(mime)) return m.reply("That is not an image, try again while quoting an actual image.");             

let fdr = await client.downloadAndSaveMediaMessage(m.quoted)
let fta = await uploadToCatbox(fdr)
                    m.reply("𝗔 𝗺𝗼𝗺𝗲𝗻𝘁, 𝗥𝗮𝘃𝗲𝗻 𝗶𝘀 𝗲𝗿𝗮𝘀𝗶𝗻𝗴 𝘁𝗵𝗲 𝗯𝗮𝗰𝗸𝗴𝗿𝗼𝘂𝗻𝗱. . .");

const image = `https://api.dreaded.site/api/removebg?imageurl=${fta}`
await client.sendMessage(m.chat, { image: { url: image }, caption: cap}, {quoted: m });

} catch (error) {
m.reply("An error occured...")

}

      }
	break;

//========================================================================================================================//		      
		     case 'fact': {
	try {
const data = await fetchJson('https://api.dreaded.site/api/fact');

const fact = data.fact;

await m.reply(fact);

} catch (error) {

m.reply('Something is wrong.')

}
	      }
    break;

//========================================================================================================================//		      
 case 'catfact': {
	try {
const data = await fetchJson('https://api.dreaded.site/api/catfact');

const fact = data.fact;

await m.reply(fact);

} catch (error) {

m.reply('Something is wrong.')

}

    }
	      break;

//========================================================================================================================//		      
	  case 'tts': case 'say': {

const googleTTS = require('google-tts-api');

if (!text) return m.reply("Povide a text for conversion !");

const url = googleTTS.getAudioUrl(text, {
  lang: 'hi-IN',
  slow: false,
  host: 'https://translate.google.com',
});
             client.sendMessage(m.chat, { audio: { url:url},mimetype:'audio/mp4', ptt: true }, { quoted: m });

	}
	 break;

//========================================================================================================================//		      
 
//========================================================================================================================//		      
 case 'weather': {
		      try {

if (!text) return m.reply("provide a city/town name");

const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=1ad47ec6172f19dfaf89eb3307f74785`);
        const data = await response.json();

console.log("Weather data:",data);

        const cityName = data.name;
        const temperature = data.main.temp;
        const feelsLike = data.main.feels_like;
        const minTemperature = data.main.temp_min;
        const maxTemperature = data.main.temp_max;
        const description = data.weather[0].description;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
        const rainVolume = data.rain ? data.rain['1h'] : 0;
        const cloudiness = data.clouds.all;
        const sunrise = new Date(data.sys.sunrise * 1000);
        const sunset = new Date(data.sys.sunset * 1000);

await m.reply(`❄️ Weather in ${cityName}

🌡️ Temperature: ${temperature}°C
📝 Description: ${description}
❄️ Humidity: ${humidity}%
🌀 Wind Speed: ${windSpeed} m/s
🌧️ Rain Volume (last hour): ${rainVolume} mm
☁️ Cloudiness: ${cloudiness}%
🌄 Sunrise: ${sunrise.toLocaleTimeString()}
🌅 Sunset: ${sunset.toLocaleTimeString()}`);

} catch (e) { m.reply("Unable to find that location.") }
  }
   break;

//========================================================================================================================//		      
case "compile-js":
if (!text && !m.quoted) throw 'Quote/tag a Js code to compile.';

const sourcecode1 = m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : m.text;

let resultPromise1 = node.runSource(sourcecode1);
resultPromise1
    .then(resultt1 => {
        console.log(resultt1);
reply(resultt1.stdout);
reply(resultt1.stderr);
    })
    .catch(err => {
        console.log(resultt1.stderr);
reply(resultt1.stderr);
    });
      break;

//========================================================================================================================//		      
  case 'quotely': {
try {
if (!m.quoted.text) throw 'qoute a text';
let xf = m.quoted.text;

                const {
                    quote
                } = require('./lib/ravenquotely.js')
                
                let pppuser = await client.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/75272825615a4dcb69526.png')
                
const rel = await quote(xf, pushname, pppuser)
                
                client.sendImageAsSticker(m.chat, rel.result, m, {
                    packname: pushname,
                    author: `RavenBot`
                })

} catch (errr) { 
 await reply("Qoute some text for quotely")}

            }
             break;

//========================================================================================================================//		      
		      case "fullpp": {
		      if(!Owner) throw NotOwner; 
		      const { S_WHATSAPP_NET } = require('@whiskeysockets/baileys');
		      try {
const fs = require("fs");
if(!msgR) { m.reply('𝗤𝘂𝗼𝘁𝗲 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲...') ; return } ;

let media;
if (msgR.imageMessage) {
     media = msgR.imageMessage

  } else {
    m.reply('𝗛𝘂𝗵 𝘁𝗵𝗶𝘀 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲...'); return
  } ;

var medis = await client.downloadAndSaveMediaMessage(media);
         var {
                        img
                    } = await generateProfilePicture(medis)

client.query({
                tag: 'iq',
                attrs: {
                    target: undefined,
                    to: S_WHATSAPP_NET,
                    type:'set',
                    xmlns: 'w:profile:picture'
                },
                content: [
                    {
                        tag: 'picture',
                        attrs: { type: 'image' },
                        content: img
                    }
                ]
            })      
                    fs.unlinkSync(medis)
                    m.reply("𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗽𝗶𝗰𝘁𝘂𝗿𝗲 𝘂𝗽𝗱𝗮𝘁𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆✅")

} catch (error) {

m.reply("An error occured while updating profile photo\n" + error)

}
     }
	  break;

//========================================================================================================================//		      
            case "upload": {
 const fs = require("fs");
const path = require('path');
const util = require("util");

let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''

if (!mime) return m.reply('Quote an image or video')
let mediaBuffer = await q.download()

  if (mediaBuffer.length > 10 * 1024 * 1024) return m.reply('Media is too large.')
let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)

if (isTele) {
    let fta2 = await client.downloadAndSaveMediaMessage(q)
    let link = await uploadtoimgur(fta2)

    const fileSizeMB = (mediaBuffer.length / (1024 * 1024)).toFixed(2)

    m.reply(`Media Link:\n\n${link}`)
  } else {
    m.reply(`Error occured...`)
  }
    }
      break;

//========================================================================================================================//
        case "url": {
 const fs = require("fs");
const path = require('path');
const util = require("util");

let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) return m.reply('Quote an image or video')
let mediaBuffer = await q.download()

  if (mediaBuffer.length > 10 * 1024 * 1024) return m.reply('Media is too large.')
let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)

if (isTele) {
    let fta2 = await client.downloadAndSaveMediaMessage(q)
    let link = await uploadToCatbox(fta2)

    const fileSizeMB = (mediaBuffer.length / (1024 * 1024)).toFixed(2)
    m.reply(`Media Link:\n\n${link}`)
  } else {
    m.reply(`Error occured...`)
  }
    }
      break;
		      
//========================================================================================================================//		      
     case 'attp':
                if (!q) return reply('I need text;')
              
                client.sendMessage(m.chat, {
                    sticker: {
                        url: `https://api.lolhuman.xyz/api/attp?apikey=cde5404984da80591a2692b6&text=${q}`
                    }
                }, {
                    quoted: m
                })
                break;

//========================================================================================================================//		      
    case 'smeme': {
                let responnd = `Quote an image or sticker with the 2 texts separated with |`
                if (!/image/.test(mime)) return reply(responnd)
                if (!text) return reply(responnd)
           
                atas = text.split('|')[0] ? text.split('|')[0] : '-'
                bawah = text.split('|')[1] ? text.split('|')[1] : '-'
                let dwnld = await client.downloadAndSaveMediaMessage(qmsg)
                let fatGans = await uploadToCatbox(dwnld)
                let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
                let pop = await client.sendImageAsSticker(m.chat, smeme, m, {
                    packname: packname,

                })
                fs.unlinkSync(pop)
            }  
             break;

//========================================================================================================================//		      
case "compile-c":

if (!text && !m.quoted) throw 'Quote/tag a C code to compile';

const sourcecode3 =m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : m.text
let resultPromise3 = c.runSource(sourcecode3);
resultPromise3
    .then(resultt3 => {
        console.log(resultt3);
reply(resultt3.stdout);
reply(resultt3.stderr);    })
    .catch(err => {
        console.log(resultt3.stderr);
reply(resultt3.stderr)
    });
break;

//========================================================================================================================//		      
case "compile-c++":

if (!text && !m.quoted) throw 'Quote/tag a C++ code to compile';

const sourcecode4 = m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : m.text
let resultPromise4 = cpp.runSource(sourcecode4);
resultPromise4
    .then(resultt4 => {
        console.log(resultt4);
reply(resultt4.stdout);
reply(resultt4.stderr);
    })
    .catch(err => {
        console.log(resultt4.stderr);
reply(resultt4.stderr)
    });
     break;

//========================================================================================================================//		      
case "eval":{
   if (!Owner) throw NotOwner; 
if (!text) throw 'Provide a valid Bot Baileys Function to evaluate'
   try { 
 let evaled = await eval(budy.slice(2)); 
 if (typeof evaled !== 'string') evaled = require('util').inspect(evaled); 
 await reply(evaled); 
   } catch (err) { 
 await reply(String(err)); 
   } 
 } 
     break;

//========================================================================================================================//		      
	case "add": {
    if (!isBotAdmin) throw botAdmin;
    if (!isAdmin) throw admin;
    if (!m.isGroup) throw group;		      
if (!q || isNaN(q)) return m.reply("provide number to be added in this format.\n\nadd 254114660061");
try {
        const userToAdd = `${q}@s.whatsapp.net`;  // Format the phone number
        // Add the user to the group
        await client.groupParticipantsUpdate(m.chat, [userToAdd], "add");
        // Confirm the addition
        reply(`User ${q} has been added to the group.`);
    } catch (e) {
        console.error('Error adding user:', e);
        reply('An error occurred while adding the user. Please make sure the number is correct and they are not already in the group.');
    }
}
break;
		      
//========================================================================================================================//		      
case "system":
    // --- Placeholders for Newsletter and Link Features ---
    const systemRepoUrl = "https://github.com/Graham-Bell/Frost_Byte-Au"; 
    const systemChannelLink = "https://whatsapp.com/channel/YOUR_CHANNEL_ID_HERE"; 
    const systemNewsletterJid = "YOUR_SYSTEM_NEWSLETTER_JID@newsletter"; 
    const systemNewsletterName = "Frost-Ai System Updates"; 

    const systemMessageImageUrl = 'https://files.catbox.moe/21qno2.jpg'; 

    // Define the thumbnail URL for the rich link preview.
    const systemThumbnailUrl = 'https://files.catbox.moe/wpenxk.jpg'; 

    // This caption will be displayed alongside the main image.
    const systemMessageCaption = `
*🤖 𝐒𝐘𝐒𝐓𝐄𝐌 𝐈𝐍𝐅𝐎 🤖*

*• 🤖 Bot Name:* Frost-Byte-Ai
*• ⚡ Speed:* ${typeof Rspeed !== 'undefined' ? Rspeed.toFixed(4) + ' ms' : 'N/A'}
*• ⏳ Runtime:* ${typeof runtime === 'function' ? runtime(process.uptime()) : 'N/A'}
*• 🌐 Platform:* Heroku
*• 🖥️ Hostname:* Raven
*• 🖨️ Library:* Baileys
*• 🎲 Developer:* Nick༆
    `;

    // Send the message using the client instance.
    await client.sendMessage(m.chat, {
        image: {
            url: systemMessageImageUrl 
        },
        caption: systemMessageCaption, 
        contextInfo: {
            // --- Newsletter Forwarding Information ---.
            isForwarded: true,
            forwardingScore: 999, 

            // Associates the message with a WhatsApp newsletter.
            forwardedNewsletterMessageInfo: {
                newsletterJid: systemNewsletterJid, 
                newsletterName: systemNewsletterName, 
                serverMessageId: -1, 
            },

            // --- External Ad Reply (Rich Link Preview) ---
            externalAdReply: {
                title: "Frost-Ai System Status", // The title displayed in the rich preview.
                body: "Check bot performance and runtime details", 
                thumbnailUrl: systemThumbnailUrl, 
                sourceUrl: systemChannelLink, 
                mediaType: 1, 
                renderLargerThumbnail: false, 
            },
        },
    }, {
        quoted: m 
    });
    break; 

//========================================================================================================================//		      
case "vcf": case "group-vcf": {
if (!m.isGroup) return m.reply("Command meant for groups");

const fs = require("fs");
let gcdata = await client.groupMetadata(m.chat)
let gcmem = participants.map(a => a.id)

let vcard = ''
let noPort = 0

for (let a of gcdata.participants) {
    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
}

let cont = './contacts.vcf'

await m.reply('𝗔 𝗺𝗼𝗺𝗲𝗻𝘁, 𝗥𝗮𝘃𝗲𝗻 𝗶𝘀 𝗖𝗼𝗺𝗽𝗶𝗹𝗶𝗻𝗴 '+gcdata.participants.length+' 𝗖𝗼𝗻𝘁𝗮𝗰𝘁𝘀 𝗶𝗻𝘁𝗼 𝗮 𝗩𝗰𝗳...');
await fs.writeFileSync(cont, vcard.trim())
await client.sendMessage(m.chat, {
    document: fs.readFileSync(cont), mimetype: 'text/vcard', fileName: 'Group contacts.vcf', caption: 'VCF for '+gcdata.subject+'\n'+gcdata.participants.length+' contacts'
}, {ephemeralExpiration: 86400, quoted: m})
fs.unlinkSync(cont)

}
   break;

//========================================================================================================================//		      
case "faker": {
	if (!m.isGroup) throw group;	      
	if (!isAdmin) throw admin;
	if (!isBotAdmin) throw botAdmin;
		      
		let _0x2f8982 = participants.filter(_0x3c9d8b => !_0x3c9d8b.admin).map(_0x1db3fb => _0x1db3fb.id).filter(_0x475052 => _0x475052.startsWith("1") && _0x475052 != client.decodeJid(client.user.id));
    if (!args || !args[0]) {
      if (_0x2f8982.length == 0) {
        return m.reply("𝙽𝚘 𝚏𝚊𝚔𝚎 𝙰𝚌𝚌𝚘𝚞𝚗𝚝𝚜 𝚍𝚎𝚝𝚎𝚌𝚝𝚎𝚍.");
      }
      let _0x2d7d67 = `𝚁𝚊𝚟𝚎𝚗 𝚑𝚊𝚜 𝚍𝚎𝚝𝚎𝚌𝚝𝚎𝚍 𝚝𝚑𝚎 𝚏𝚘𝚕𝚕𝚘𝚠𝚒𝚗𝚐 ${_0x2f8982.length} 𝙵𝚊𝚔𝚎 𝚊𝚌𝚌𝚘𝚞𝚗𝚝𝚜 𝚒𝚗 𝚝𝚑𝚒𝚜 𝚐𝚛𝚘𝚞𝚙:- \n`;
      for (let _0x28761c of _0x2f8982) {
        _0x2d7d67 += `🚮 @${_0x28761c.split("@")[0]}\n`;
      }
      _0x2d7d67 += `\n𝚃𝚘 𝚛𝚎𝚖𝚘𝚟𝚎 𝚝𝚑𝚎𝚖 𝚜𝚎𝚗𝚍 𝚏𝚊𝚔𝚎𝚛 -x`;
      client.sendMessage(m.chat, {
        text: _0x2d7d67,
        mentions: _0x2f8982
      }, {
        quoted: m
      });
    } else if (args[0] == "-x") {
      setTimeout(() => {
        client.sendMessage(m.chat, {
          text: `𝙽𝚘𝚠 𝚁𝚊𝚟𝚎𝚗 𝚠𝚒𝚕𝚕 𝚛𝚎𝚖𝚘𝚟𝚎 ${_0x2f8982.length} 𝙵𝚊𝚔𝚎 𝙰𝚌𝚌𝚘𝚞𝚗𝚝𝚜 𝚏𝚛𝚘𝚖 𝚝𝚑𝚒𝚜 𝚐𝚛𝚘𝚞𝚙.\n\n𝙶𝚘𝚘𝚍𝚋𝚢𝚎👋 𝙵𝚊𝚔𝚎 𝚙𝚎𝚘𝚙𝚕𝚎.`
        }, {
          quoted: m
        });
        setTimeout(() => {
          client.groupParticipantsUpdate(m.chat, _0x2f8982, "remove");
          setTimeout(() => {
            m.reply("𝚂𝚞𝚌𝚌𝚎𝚜𝚜𝚏𝚞𝚕𝚕𝚢 𝚛𝚎𝚖𝚘𝚟𝚎𝚍 𝚊𝚕𝚕 𝚏𝚊𝚔𝚎 𝚊𝚌𝚌𝚘𝚞𝚗𝚝𝚜✅.");
          }, 1000);
        }, 1000);
      }, 1000);
    }
      }	      
	break;

//========================================================================================================================//		      
   case "mail": {
	const  { TempMail } = require("tempmail.lol");

const tempmail = new TempMail();

      const inbox = await tempmail.createInbox();
      const emailMessage = `${inbox.address}`;

await m.reply(emailMessage);

const mas = await client.sendMessage(m.chat, { text: `${inbox.token}` });
      
await client.sendMessage(m.chat, { text: `Quoted text is your token. To fetch messages in your email use <.inbox your-token>`}, { quoted: mas});

      }
       break;

//========================================================================================================================//		      
       case "hacker2": {
       if (!/image/.test(mime)) return m.reply("Hello hacker 👋, quote an image, probably a clear image of yourself or a person.");  

let fdr = await client.downloadAndSaveMediaMessage(qmsg);

const fta = await uploadToCatbox(fdr);

const imagelink = `https://aemt.me/hacker2?link=${fta}`;

await client.sendMessage(m.chat, { image: { url: imagelink}, caption: "Converted by Raven! 🦄"}, { quoted: m});

}
  break;

//========================================================================================================================//		      
        case "inbox": {
	 if (!text) return m.reply("To fetch messages from your mail, provide the email address which was issued.")

const mail = encodeURIComponent(text);
        const checkMail = `https://tempmail.apinepdev.workers.dev/api/getmessage?email=${mail}`;

try {
            const response = await fetch(checkMail);

if (!response.ok) {

                return m.reply(`${response.status} error occurred while communicating with API.`);
            }

const data = await response.json();

            if (!data || !data.messages) {

                return m.reply('I am unable to fetch messages from your mail, your inbox might be empty or some other error occurred.');
            }

const messages = data.messages;

            for (const message of messages) {
                const sender = message.sender;
                const subject = message.subject;
                const date = new Date(JSON.parse(message.message).date).toLocaleString();
                const messageBody = JSON.parse(message.message).body;

                const mailMessage = `👥 Sender: ${sender}\n📝 Subject: ${subject}\n🕜 Date: ${date}\n📩 Message: ${messageBody}`;

                await m.reply(mailMessage);
            }
        } catch (error) {
            console.error('𝗢𝗼𝗽𝘀 𝗘𝗿𝗿𝗼𝗿!');

            return m.reply('𝗦𝗼𝗺𝗲𝘁𝗵𝗶𝗻𝗴 𝗶𝘀 𝘄𝗿𝗼𝗻𝗴!');
        }
        }
         break;

//========================================================================================================================//		      
 case "anime": case "random-anime": {
	const axios = require("axios");

  const link = "https://api.jikan.moe/v4/random/anime";

  try {
    const response = await axios.get(link);
    const data = response.data.data;

    const title = data.title;
    const synopsis = data.synopsis;
    const imageUrl = data.images.jpg.image_url;
    const episodes = data.episodes;
    const status = data.status;

    const message = `📺 Title: ${title}\n🎬 Épisodes: ${episodes}\n📡 Status: ${status}\n📝 Synopsis: ${synopsis}\n🔗 URL: ${data.url}`;

    await client.sendMessage(m.chat, { image: { url: imageUrl }, caption: message }, { quoted: m });
  } catch (error) {
    
   m.reply('𝗢𝗼𝗽𝘀 𝗘𝗿𝗿𝗼𝗿!');
  }
	}
	 break;

//========================================================================================================================//		      
		 case "news": {
		      const response = await fetch('https://fantox001-scrappy-api.vercel.app/technews/random');
    const data = await response.json();

    const { thumbnail, news } = data;

        await client.sendMessage(m.chat, { image: { url: thumbnail }, caption: news }, { quoted: m });

	      }
		break;

//========================================================================================================================//		      
case 'approve': case 'approve-all': {
	if (!m.isGroup) throw group;
if (!isAdmin) throw admin;
if (!isBotAdmin) throw botAdmin;

const responseList = await client.groupRequestParticipantsList(m.chat);

if (responseList.length === 0) return m.reply("𝗛𝘂𝗵, 𝗡𝗼 𝗣𝗲𝗻𝗱𝗶𝗻𝗴 𝗷𝗼𝗶𝗻 𝗿𝗲𝗾𝘂𝗲𝘀𝘁𝘀 𝘁𝗵𝗶𝘀 𝘁𝗶𝗺𝗲!");

for (const participan of responseList) {
    const response = await client.groupRequestParticipantsUpdate(
        m.chat, 
        [participan.jid], // Approve/reject each participant individually
        "approve" // or "reject"
    );
    console.log(response);
}
m.reply("𝗣𝗲𝗻𝗱𝗶𝗻𝗴 𝗣𝗮𝗿𝘁𝗶𝗰𝗶𝗽𝗮𝗻𝘁𝘀 𝗵𝗮𝘃𝗲 𝗯𝗲𝗲𝗻 𝗮𝗽𝗽𝗿𝗼𝘃𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆✅");

}
 break;

//========================================================================================================================//		      
	  case 'reject': case 'reject-all': {
	if (!m.isGroup) throw group;
if (!isAdmin) throw admin;
if (!isBotAdmin) throw botAdmin;

const responseList = await client.groupRequestParticipantsList(m.chat);

if (responseList.length === 0) return m.reply("𝗛𝘂𝗵, 𝗡𝗼 𝗽𝗲𝗻𝗱𝗶𝗻𝗴 𝗷𝗼𝗶𝗻 𝗿𝗲𝗾𝘂𝗲𝘀𝘁𝘀 𝘁𝗵𝗶𝘀 𝘁𝗶𝗺𝗲");

for (const participan of responseList) {
    const response = await client.groupRequestParticipantsUpdate(
        m.chat, 
        [participan.jid], // Approve/reject each participant individually
        "reject" // or "reject"
    );
    console.log(response);
}
m.reply("𝗣𝗲𝗻𝗱𝗶𝗻𝗴 𝗣𝗮𝗿𝘁𝗶𝗰𝗶𝗽𝗮𝗻𝘁𝘀 𝗵𝗮𝘃𝗲 𝗯𝗲𝗲𝗻 𝗿𝗲𝗷𝗲𝗰𝘁𝗲𝗱!");

}
 break;

//========================================================================================================================//		      
	      case "wewee": case "mh": case "admin" : { 
                 if (!m.isGroup) throw group; 
         if (!isBotAdmin) throw botAdmin; 
          if (!Owner) throw NotOwner; 
                 await client.groupParticipantsUpdate(m.chat,  [m.sender], 'promote'); 
          }
          break;

//========================================================================================================================//		      
       case "getvar": 
 if (!Owner) throw NotOwner;  
     const heroku = new Heroku({  
         token: herokuapi, // Replace 'heroku' with your actual Heroku token 
     });  
     let baseUR = "/apps/" + appname;  
     let h9 = await heroku.get(baseUR + '/config-vars');  
     let stoy = '*𝗕𝗲𝗹𝗼𝘄 𝗔𝗿𝗲 𝗛𝗲𝗿𝗼𝗸𝘂 𝗩𝗮𝗿𝗶𝗮𝗯𝗹𝗲𝘀 𝗙𝗼𝗿 𝗥𝗔𝗩𝗘𝗡-𝗠𝗗:*\n\n';  
     for ( vrt in h9) { // Added 'const' to declare 'vr' 
         stoy += vrt + '=' + h9[vrt] + '\n\n'; // Fixed variable name 'str' to 'sto' 
     }  
     reply(stoy); 
            break;

//========================================================================================================================//		      
case 'restart':  
  if (!Owner) throw NotOwner; 
  reply(`Restarting. . .`)  
  await sleep(3000)  
  process.exit()  
  break;

//========================================================================================================================//		      
case "remove": case "kick": { 

       if (!m.isGroup) throw group; 
       if (!isBotAdmin) throw botAdmin; 
      if (!isAdmin) throw admin;
  
    if (!m.quoted && (!m.mentionedJid || m.mentionedJid.length === 0)) {
            return m.reply("Who should i remove !?");
        }
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : null;
        const parts = users.split('@')[0];

if (users == "254114660061@s.whatsapp.net") return m.reply("It's an Owner Number! 😡");

	  if (users  == client.decodeJid(client.user.id)) throw 'I cannot remove Myself 😡';

		      m.reply(`@${parts} Goodbye🤧`);

                 await client.groupParticipantsUpdate(m.chat, [users], 'remove'); 
 

}
  break;

//========================================================================================================================//		      
    case "instagram": case "igdl": case "ig": {
		      
const { igdl } = require("ruhend-scraper");

  if (!text) {
    return m.reply("Please provide an Instagram link for the video.");
  }

  if (!text.includes('https://www.instagram.com/')) {
    return m.reply("That is not a valid Instagram link.");
  }

await client.sendMessage(m.chat, {
      react: { text: '✅️', key: m.key }
    });


  try {
    
    const downloadData = await igdl(text);
   
    if (!downloadData || !downloadData.data || downloadData.data.length === 0) {
      return m.reply("No video found at the provided link.");
    }

    const videoData = downloadData.data;
    for (let i = 0; i < Math.min(20, videoData.length); i++) {
      const video = videoData[i];
      const videoUrl = video.url;

      await client.sendMessage(m.chat, {
        video: { url: videoUrl },
        mimetype: "video/mp4",
        caption: "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧"
      },{ quoted: m });
    }
  } catch (error) {
    console.error(error);
    return m.reply("An error occurred while processing the request.");
  }
}
break;

//========================================================================================================================//
  case "twitter": case "twtdl": {
 if (!q) return reply("Please provide a valid Twitter Link !");

if (!text.includes('x.com')) {
    return m.reply("That is not a valid Twitter link.");
}
	  
await client.sendMessage(m.chat, {
      react: { text: '✅️', key: m.key }
    });
		      
try {
    const response = await axios.get(`https://www.dark-yasiya-api.site/download/twitter?url=${q}`);
    const data = response.data;

    if (!data || !data.status || !data.result) {
      return reply("Failed to retrieve Twitter video. Please check the link and try again.");
    }

    const { video_hd } = data.result;

	await client.sendMessage(m.chat, {
              video: { url: video_hd },
              caption: "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧"
            }, { quoted: m });

	} catch (error) {
    console.error("Error:", error);
    reply("An error occurred while processing your request. Please try again.");
  }
};	      
	break;

//========================================================================================================================//		      
	 case "facebook": case "fb": case "fbdl": {
if (!text) {
        return m.reply("𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝗮 𝘃𝗮𝗹𝗶𝗱 𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝗹𝗶𝗻𝗸 !");
    }

    if (!text.includes("facebook.com")) {
        return m.reply("That is not a facebook link.");
    }

await client.sendMessage(m.chat, {
                       react: { text: '✅️', key: m.key }
                      });
    try {
                let data = await fetchJson(`https://api.dreaded.site/api/facebook?url=${text}`);


        if (!data || data.status !== 200 || !data.facebook || !data.facebook.sdVideo) {
            return m.reply("𝗦𝗼𝗿𝗿𝘆 𝘁𝗵𝗲 𝗔𝗣𝗜 𝗱𝗶𝗱𝗻'𝘁 𝗿𝗲𝘀𝗽𝗼𝗻𝗱 𝗰𝗼𝗿𝗿𝗲𝗰𝘁𝗹𝘆. 𝗣𝗹𝗲𝗮𝘀𝗲 𝘁𝗿𝘆 𝗔𝗴𝗮𝗶𝗻 𝗹𝗮𝘁𝗲𝗿!");
        }

        const fbvid = data.facebook.sdVideo;

        if (!fbvid) {
            return m.reply("Wrong facebook data. Please ensure the video exists.");
        }

        await client.sendMessage(
            m.chat,
            {
                video: { url: fbvid },
                caption: "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧",
                gifPlayback: false,
            },
            { quoted: m }
        );
    } catch (e) {
        console.error("Error occurred:", e);
        m.reply("An error occurred. API might be down. Error: " + e.message);
    }
}
break;

//========================================================================================================================//		      
      case "tiktok": case "tikdl":  {
if (!text) {
    return m.reply('Please provide a TikTok video link.');
  }
	      
if (!text.includes("tiktok.com")) {
        return m.reply("That is not a TikTok link.");
}
await client.sendMessage(m.chat, {
      react: { text: '✅️', key: m.key }
    });

 try {
    const response = await axios.get(`https://bk9.fun/download/tiktok?url=${encodeURIComponent(text)}`);

    if (response.data.status && response.data.BK9) {
      const videoUrl = response.data.BK9.BK9;
      const description = response.data.BK9.desc;
      const commentCount = response.data.BK9.comment_count;
      const likesCount = response.data.BK9.likes_count;
      const uid = response.data.BK9.uid;
      const nickname = response.data.BK9.nickname;
      const musicTitle = response.data.BK9.music_info.title;

      await client.sendMessage(m.chat, {
        text: `Data fetched successfully✅ wait a moment. . .`,
      }, { quoted: m });

      await client.sendMessage(m.chat, {
        video: { url: videoUrl },
        caption: "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧",
        gifPlayback: false
      }, { quoted: m });

    } else {
      reply('Failed to retrieve video from the provided link.');
    }

  } catch (e) {
    reply(`An error occurred during download: ${e.message}`);
  }
}
  break;

//========================================================================================================================//
  case "pinterest": case "pin":
	      {      
	if (!text) return reply('𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝗮 𝘃𝗮𝗹𝗶𝗱 𝗽𝗶𝗻𝘁𝗲𝗿𝗲𝘀𝘁 𝗹𝗶𝗻𝗸 !');
		      
if (!text.includes("pin.it")) {
        return m.reply("That is not a pinterest link.");
    }	
await client.sendMessage(m.chat, {
      react: { text: '✅️', key: m.key }
    });
 
try {
        const pinterestUrl = text;
        const response = await axios.get(`https://bk9.fun/download/pinterest?url=${encodeURIComponent(pinterestUrl)}`);

        if (!response.data.status) {
            return reply('Unable to fetch pinterest data.');
        }

        const media = response.data.BK9;
        const capp = `𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧`;

if (media.length > 0) {
            const videoUrl = media.find(item => item.url.includes('.mp4'))?.url;
            const imageUrl = media.find(item => item.url.includes('.jpg'))?.url;

if (videoUrl) {
                await client.sendMessage(m.chat, { video: { url: videoUrl }, caption: capp }, { quoted: m });
            } else 
if (imageUrl) {
                await client.sendMessage(m.chat, { image: { url: imageUrl }, caption: capp }, { quoted: m });
            } else {
                reply('No Video found!');
            }
        } else {
            reply('No Image found.');
        }
    } catch (e) {
        console.error(e);
        await client.sendMessage(m.chat, { react: { text: '☠️', key: mek.key } });
        reply('An error occurred while processing your request.');
    }
}
break;
		      
//========================================================================================================================//
case "epl": case "epl-table": {
  try {
    // --- API Interaction ---
    const response = await fetch('https://api.dreaded.site/api/standings/PL');
    const data = await response.json();
    const standings = data.data; // Extract the standings data.

    // --- Sassy Message Formatting ---
    const message = `✨ Here are the current EPL Table Standings, darling! ✨\n\n${standings}`;

    // --- Sending the Standings ---
    await m.reply(message);
  } catch (error) {
    // --- Error Handling ---
    m.reply('👑 Oh dear, something went wrong! I couldn\'t fetch the EPL standings. The API might be resting, sweetie. 😥');
  }
}
break;

//========================================================================================================================//
case "laliga": case "pd-table": {
try {
    // --- API Interaction ---
    const response = await fetch('https://api.dreaded.site/api/standings/PD');
    const data = await response.json();
    const standings = data.data; // Extract the standings data.

    // --- Sassy Message Formatting ---
    const message = `✨ Here are the current La Liga Table Standings, darling! ✨\n\n${standings}`;
    await m.reply(message);

} catch (error) {
    // --- Error Handling ---
    m.reply('👑 Oh dear, something went wrong! I couldn\'t fetch the La Liga standings. The API might be resting, sweetie. 😥');
}
}   
break;

//========================================================================================================================//
case "bundesliga": case "bl-table": {
try {
    // --- API Interaction ---
    const response = await fetch('https://api.dreaded.site/api/standings/BL1');
    const data = await response.json();
    const standings = data.data; // Extract the standings data.

    // --- Sassy Message Formatting ---
    const message = `✨ Here are the current Bundesliga Table Standings, darling! ✨\n\n${standings}`;
    await m.reply(message);

} catch (error) {
    // --- Error Handling ---
    m.reply('👑 Oh dear, something went wrong! I couldn\'t fetch the Bundesliga standings. The API might be resting, sweetie. 😥');
}
}
break;

//========================================================================================================================//
case "ligue-1": case "lg-1": {
  try {
    // --- API Interaction ---
    const response = await fetch('https://api.dreaded.site/api/standings/FL1');
    const data = await response.json();
    const standings = data.data; // Extract the standings data.

    // --- Sassy Message Formatting ---
    const message = `✨ Here are the current Ligue 1 Table Standings, darling! ✨\n\n${standings}`;
    await m.reply(message);

} catch (error) {
    // --- Error Handling ---
    m.reply('👑 Oh dear, something went wrong! I couldn\'t fetch the Ligue 1 standings. The API might be resting, sweetie. 😥');
}
}
break;

//========================================================================================================================//
case "serie-a": case "sa-table": {
  try {
    // --- API Interaction ---
    const response = await fetch('https://api.dreaded.site/api/standings/SA');
    const data = await response.json();
    const standings = data.data; // Extract the standings data.

    // --- Sassy Message Formatting ---.
    const message = `✨ Here are the current Serie A Table Standings, darling! ✨\n\n${standings}`;

    // --- Sending the Standings ---
    await m.reply(message);
  } catch (error) {
    // --- Error Handling ---
    m.reply('👑 Oh dear, something went wrong! I couldn\'t fetch the Serie A standings. The API might be resting, sweetie. 😥');
  }
}
break;

//========================================================================================================================//
case "fixtures": case "matches": {
 try {
        let plMatches, laligaMatches, bundesligaMatches, serieAMatches, ligue1Matches;

        // Fetch match data for each league.
        const plData = await fetchJson('https://api.dreaded.site/api/matches/PL');
        plMatches = plData.data;

        const laligaData = await fetchJson('https://api.dreaded.site/api/matches/PD');
        laligaMatches = laligaData.data;

        const bundesligaData = await fetchJson('https://api.dreaded.site/api/matches/BL1');
        bundesligaMatches = bundesligaData.data;

        const serieAData = await fetchJson('https://api.dreaded.site/api/matches/SA');
        serieAMatches = serieAData.data;

        const ligue1Data = await fetchJson('https://api.dreaded.site/api/matches/FR');
        ligue1Matches = ligue1Data.data;

        // --- Sassy Message Formatting ---
        let message = `⚽ *Today's Football Fixtures, darling!* ⚽\n\n`;

        // Process Premier League matches.
        message += typeof plMatches === 'string' 
            ? `🇬🇧 Premier League:\n${plMatches}\n\n` 
            : plMatches.length > 0 
                ? `🇬🇧 Premier League:\n${plMatches.map(match => {
                    const { game, date, time } = match;
                    return `${game}\nDate: ${date}\nTime: ${time} (EAT)\n`;
                }).join('\n')}\n\n` 
                : "🇬🇧 Premier League: No matches scheduled today, sweetie! 😉\n\n";

        // Process La Liga matches.
        if (typeof laligaMatches === 'string') {
            message += `🇪🇸 La Liga:\n${laligaMatches}\n\n`;
        } else {
            message += laligaMatches.length > 0 
                ? `🇪🇸 La Liga:\n${laligaMatches.map(match => {
                    const { game, date, time } = match;
                    return `${game}\nDate: ${date}\nTime: ${time} (EAT)\n`;
                }).join('\n')}\n\n` 
                : "🇪🇸 La Liga: No matches scheduled today, sweetie! 😉\n\n";
        }

        // Process Bundesliga matches.
        message += typeof bundesligaMatches === 'string' 
            ? `🇩🇪 Bundesliga:\n${bundesligaMatches}\n\n` 
            : bundesligaMatches.length > 0 
                ? `🇩🇪 Bundesliga:\n${bundesligaMatches.map(match => {
                    const { game, date, time } = match;
                    return `${game}\nDate: ${date}\nTime: ${time} (EAT)\n`;
                }).join('\n')}\n\n` 
                : "🇩🇪 Bundesliga: No matches scheduled today, sweetie! 😉\n\n";

        // Process Serie A matches.
        message += typeof serieAMatches === 'string' 
            ? `🇮🇹 Serie A:\n${serieAMatches}\n\n` 
            : serieAMatches.length > 0 
                ? `🇮🇹 Serie A:\n${serieAMatches.map(match => {
                    const { game, date, time } = match;
                    return `${game}\nDate: ${date}\nTime: ${time} (EAT)\n`;
                }).join('\n')}\n\n` 
                : "🇮🇹 Serie A: No matches scheduled today, sweetie! 😉\n\n";

        // Process Ligue 1 matches.
        message += typeof ligue1Matches === 'string' 
            ? `🇫🇷 Ligue 1:\n${ligue1Matches}\n\n` 
            : ligue1Matches.length > 0 
                ? `🇫🇷 Ligue 1:\n${ligue1Matches.map(match => {
                    const { game, date, time } = match;
                    return `${game}\nDate: ${date}\nTime: ${time} (EAT)\n`;
                }).join('\n')}\n\n` 
                : "🇫🇷 Ligue 1: No matches scheduled today, sweetie! 😉\n\n";

        message += "⏰ *Note: All times are in East Africa Time (EAT), darling!*";

        // --- Sending the Fixtures ---
        await m.reply(message);
    } catch (error) {
        // --- Error Handling ---
        m.reply('👑 Oh dear, something went wrong! I couldn\'t fetch the match schedules. The football gods might be napping, sweetie! 😴' + error);
    }
};
break;

//========================================================================================================================//		  
case "repo":
case "sc":
case "script":
    {
        // 2. --- IMPORTANT: CUSTOMIZE YOUR DETAILS HERE ---
        const repoUrl = "https://github.com/Graham-Bell/Frost_Byte-Ai";
        
        // The link to your WhatsApp Channel.
        const whatsappChannelLink = "https://whatsapp.com/channel/0029VasHgfG4tRrwjAUyTs10";
        
        // The JID of your WhatsApp Channel (
        const whatsappChannelId = "120363369453603973@newsletter";

        // 3. Create the formatted caption for the message.
        const caption = `
╭─⬣「 *SOURCE CODE* 」⬣
│
├─ 📂 Repository: Frost-Byte-AI
├─ 🔗 URL: ${repoUrl}
│
├─ ✨ Feel free to star the repo if you find it useful!
│
╰─⬣「 _ʄʀօֆᴛ-ɮʏᴛɛ-𐌀i_ 」⬣
        `;

        // This sends a NEW message as a reply, it does not edit the loading message.
        await client.sendMessage(m.chat, {
            image: {
                url: "https://files.catbox.moe/21qno2.jpg" // Main image for the message
            },
            caption: caption,
            contextInfo: {
                // --- Makes the message look like it was forwarded many times ---
                isForwarded: true,
                forwardingScore: 999,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: whatsappChannelId,
                    newsletterName: "ʄʀօֆᴛ-ɮʏᴛɛ-𐌀i", // Your newsletter display name
                    serverMessageId: -1,
                },
                // --- Creates the rich link preview at the bottom ---
                externalAdReply: {
                    title: "Frost_Byte-Ai Bot",
                    body: "Powered By Graham-Nest",
                    thumbnailUrl: 'https://files.catbox.moe/wpenxk.jpg', // Thumbnail for the ad reply
                    sourceUrl: whatsappChannelLink,
                    mediaType: 1, // 1 means the media is an image
                    renderLargerThumbnail: false,
                },
            },
        }, {
            quoted: m // This makes the entire message a reply to the user's original command.
        });
    }
    break; // Exit the switch statement.

//========================================================================================================================//
case 'closetime':
  // --- Access Control ---
  // Ensure the command is used in a group.
  if (!m.isGroup) throw group;
  // Ensure the user is an admin.
  if (!isAdmin) throw admin;
  // Ensure the bot is an admin.
  if (!isBotAdmin) throw botAdmin;
  
  // --- Input Validation ---
  // Check for the time unit (second, minute, hour, day).
  if (args[1] == 'second') {
    var timerDuration = args[0] * 1000; // Convert seconds to milliseconds.
  } else if (args[1] == 'minute') {
    var timerDuration = args[0] * 60000; // Convert minutes to milliseconds.
  } else if (args[1] == 'hour') {
    var timerDuration = args[0] * 3600000; // Convert hours to milliseconds.
  } else if (args[1] == 'day') {
    var timerDuration = args[0] * 86400000; // Convert days to milliseconds.
  } else {
    // Sassy reply if the time unit is invalid.
    return reply('*👑 Please specify a valid time unit: second, minute, hour, or day.*\n\n*Example*: `closetime 10 second` ⏳');
  }
  
  // --- Sassy Confirmation ---
  reply(`⏳ Countdown initiated! The group will be closed in ${q} from now, darling.`); // 'q' likely contains the full command text.
  
  // Set a timeout to close the group.
  setTimeout(() => {
    const closeMessage = `🔒 The group has been locked, darling!`;
    client.groupSettingUpdate(m.chat, 'announcement'); // Set group to announcement mode (lock).
    reply(closeMessage); // Inform users the group is now closed.
  }, timerDuration);
break;

//========================================================================================================================//		      
case 'opentime':
  // --- Access Control ---
  // Ensure the command is used in a group.
  if (!m.isGroup) throw group;
  // Ensure the user is an admin.
  if (!isAdmin) throw admin;
  // Ensure the bot is an admin.
  if (!isBotAdmin) throw botAdmin;
  
  // --- Input Validation ---
  // Check for the time unit (second, minute, hour, day).
  if (args[1] == 'second') {
    var timerDuration = args[0] * 1000; // Convert seconds to milliseconds.
  } else if (args[1] == 'minute') {
    var timerDuration = args[0] * 60000; // Convert minutes to milliseconds.
  } else if (args[1] == 'hour') {
    var timerDuration = args[0] * 3600000; // Convert hours to milliseconds.
  } else if (args[1] == 'day') {
    var timerDuration = args[0] * 86400000; // Convert days to milliseconds.
  } else {
    // Sassy reply if the time unit is invalid.
    return reply('*👑 Please specify a valid time unit: second, minute, hour, or day.*\n\n*Example*: `opentime 10 second` ⏳');
  }
  
  // --- Sassy Confirmation ---
  reply(`⏳ Countdown initiated! The group will be opened in ${q} from now, darling.`); // 'q' likely contains the full command text.
  
  // Set a timeout to open the group.
  setTimeout(() => {
    const openMessage = `🔓 The group has been opened successfully, darling!`;
    client.groupSettingUpdate(m.chat, 'not_announcement'); // Set group to not announcement mode (unlock).
    reply(openMessage); // Inform users the group is now open.
  }, timerDuration);
break;

//========================================================================================================================//		      
 case "close": case "mute": { 
  
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 
  
                     await client.groupSettingUpdate(m.chat, 'announcement'); 
 m.reply('Group successfully locked!'); 
 } 
 break; 

//========================================================================================================================//		      
 case "close": case "mute": { 
  // --- Access Control ---
  // Ensure the command is used in a group.
  if (!m.isGroup) throw group; 
  // Ensure the bot is an admin.
  if (!isBotAdmin) throw botAdmin; 
  // Ensure the user is an admin.
  if (!isAdmin) throw admin; 
  
  // --- Action ---
  // Set the group to announcement mode, which locks it for members.
  await client.groupSettingUpdate(m.chat, 'announcement'); 
  
  // --- Sassy Confirmation ---
  m.reply('👑 The group has been successfully locked, darling! Only admins can speak now. 🤫'); 
} 
break; 

//========================================================================================================================//		      
 //========================================================================================================================//
case "open": case "unmute": { 
    if (!m.isGroup) throw group; 
    if (!isBotAdmin) throw botAdmin; 
    if (!isAdmin) throw admin; 
  
    await client.groupSettingUpdate(m.chat, 'not_announcement'); 
    m.reply('Consider the gates of communication officially *unlocked*, darling! 🔓✨'); 
  
} break; 

//========================================================================================================================//		 
case "disp-1": { 
    if (!m.isGroup) throw group; 
    if (!isBotAdmin) throw botAdmin; 
    if (!isAdmin) throw admin; 
  
    await client.groupToggleEphemeral(m.chat, 1*24*3600); 
    m.reply('Poof! ✨ Messages will now vanish like a fleeting thought after 24 hours. Enjoy the mystery! ⏳'); 
} break; 

//========================================================================================================================//		   
case "promote" : { 
    if (!m.isGroup) throw group; 
    if (!isBotAdmin) throw botAdmin; 
    if (!isAdmin) throw admin; 
    if (!m.quoted) throw `Tag someone with the command, my dear!`; 
    let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']; 
  
    await client.groupParticipantsUpdate(m.chat, users, 'promote'); 
    m.reply('And just like that, they’ve ascended! ✨ Promoted to admin status with a flourish! 👑'); 
} break; 

//========================================================================================================================//		 
case "demote": { 
    if (!m.isGroup) throw group; 
    if (!isBotAdmin) throw botAdmin; 
    if (!isAdmin) throw admin; 
    if (!m.quoted) throw `Tag someone with the command, my dear!`; 
    let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']; 
  
    await client.groupParticipantsUpdate(m.chat, users, 'demote'); 
    m.reply('A slight demotion, perhaps? Back to the ranks they go! 📉 They\'ll be back. 😜'); 
} break;

//========================================================================================================================//		 
case "disp-7": { 
    if (!m.isGroup) throw group; 
    if (!isBotAdmin) throw botAdmin; 
    if (!isAdmin) throw admin; 
  
    await client.groupToggleEphemeral(m.chat, 7*24*3600); 
    m.reply('Seven days of secrets! 🤫 Your messages will now play hide-and-seek for a whole week. How intriguing! 🗓️'); 
  
} break; 

//========================================================================================================================//		  
case "disp-90": { 
    if (!m.isGroup) throw group; 
    if (!isBotAdmin) throw botAdmin; 
    if (!isAdmin) throw admin; 
  
    await client.groupToggleEphemeral(m.chat, 90*24*3600); 
    m.reply('A grand gesture of ephemerality! 💫 Messages will now gracefully fade after 90 days. A long goodbye, indeed! ⏳'); 
} break; 

//========================================================================================================================//		 
case "disp-off": { 
    if (!m.isGroup) throw group; 
    if (!isBotAdmin) throw botAdmin; 
    if (!isAdmin) throw admin; 
  
    await client.groupToggleEphemeral(m.chat, 0); 
    m.reply('The ephemeral magic is over. 🙅‍♀️ Messages will now stay put. No more disappearing acts! 📜'); 
} break;

//========================================================================================================================//		  
case "icon": case 'gpp': { 
    if (!m.isGroup) throw group; 
    if (!isAdmin) throw admin; 
    if (!isBotAdmin) throw botAdmin; 
    if (!quoted) throw `Send or tag an image with the caption ${prefix + command}, darling!`; 
    if (!/image/.test(mime)) throw `Send or tag an image with the caption ${prefix + command}, darling!`; 
    if (/webp/.test(mime)) throw `Send or tag an image with the caption ${prefix + command}, darling!`; 
    let media = await client.downloadAndSaveMediaMessage(quoted); 
    await client.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media)); 
    reply('Behold! The group\'s new look has been unveiled. ✨ Simply *divine*! 💖'); 
} break;

//========================================================================================================================//		     
case "revoke": 
case "newlink": 
case "reset": { 
    if (!m.isGroup) throw group; 
    if (!isAdmin) throw admin; 
    if (!isBotAdmin) throw botAdmin; 
    await client.groupRevokeInvite(m.chat); 
    await client.sendText(m.chat, 'Consider the old link *revoked*! 🚫 Time for a fresh start.', m); 
    let response = await client.groupInviteCode(m.chat); 
    client.sendText(m.sender, `Here's the *brand new* golden ticket to our exclusive group, darling! 🎟️✨`, m, { detectLink: true }); 
    client.sendText(m.chat, `Your new group link has been delivered to your private inbox. Check it out! 💌`, m); 
} break;

//========================================================================================================================//		      
case "delete": case "del": { 
    if (!m.isGroup) throw group; 
    if (!isBotAdmin) throw botAdmin; 
    if (!isAdmin) throw admin; 
    if (!m.quoted) throw `No message quoted for deletion, my dear!`; 
    let { chat, fromMe, id, isBaileys } = m.quoted; 
    if (isBaileys) return m.reply(`Darling, I can only delete *your* little secrets, not my own or those of my digital kin. 😉`); 
    client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender } }); 
} break;

//========================================================================================================================//	
case "leave": {
    // --- Owner Authorization ---
    if (!Owner) throw NotOwner; // Throws an error if the user is not the owner.

    // --- Group Context Check ---
    if (!m.isGroup) throw group; // Throws an error if not in a group.

    // --- Graceful Departure Message ---
    await client.sendMessage(m.chat, {
        text: "Farewell, my dear companions! It appears my presence is no longer required here. Raven AI is now gracefully exiting this group. May your conversations continue to sparkle! ✨👋",
        // Mentioning all participants to give a personal touch to the goodbye.
        mentions: participants.map(p => p.id)
    }, { quoted: m });

    // --- Executing Group Leave ---
    await client.groupLeave(m.chat);
}
break;

//========================================================================================================================//		      
case "subject": case "changesubject": { 
    if (!m.isGroup) throw group; 
    if (!isBotAdmin) throw botAdmin; 
    if (!isAdmin) throw admin; 
    if (!text) throw 'Provide the text for the group subject, darling.'; 
    await client.groupUpdateSubject(m.chat, text); 
    m.reply('The group\'s name has been *rebranded* to something far more befitting! ✨'); 
} break; 

//========================================================================================================================//		      
// Case: Set Group Description
case "desc": case "setdesc": { 
    if (!m.isGroup) throw group; 
    if (!isBotAdmin) throw botAdmin; 
    if (!isAdmin) throw admin; 
    if (!text) throw 'Provide the text for the group description, darling.' 
    await client.groupUpdateDescription(m.chat, text); 
    m.reply('The group\'s description has been *elegantly* rewritten. A touch of class! 💅'); 
} break; 

//========================================================================================================================//		    
case "hidetag": case "tag": { 
    if (!m.isGroup) throw group;
    client.sendMessage(
        m.chat,
        { 
            text: text ? text : '@Everyone, pay attention! Something *truly* important is happening... ✨', 
            mentions: participants 
        },
        { quoted: m }
    );
} break; 

//========================================================================================================================//		  
case "tagall": { 
    if (!m.isGroup) throw group; 
    if (!isBotAdmin) throw botAdmin; 
    if (!isAdmin) throw admin; 
    let txt = `Hear ye, hear ye! 📣 Your esteemed host, ${m.pushName}, has a message for *all* of you fabulous people!\n\nMessage:- ${text ? text : 'No Message! Prepare yourselves... ✨'}\n\n`; 
          
    for (let mem of participants) { 
        txt += `📧 @${mem.split('@')[0]}\n`; 
    } 
  
    await client.sendMessage(m.chat, {
        text: txt,
        mentions: participants
    }, { quoted: m });
} break;

//========================================================================================================================//		      
case "whatsong": case "shazam": {
          let acr = new acrcloud({
            'host': "identify-eu-west-1.acrcloud.com",
            'access_key': '2631ab98e77b49509e3edcf493757300',
            'access_secret': "KKbVWlTNCL3JjxjrWnywMdvQGanyhKRN0fpQxyUo"
          });
          if (!m.quoted) {
            throw "Tagg a short video or audio";
          }

          let d = m.quoted ? m.quoted : m;
          let mimes = (d.msg || d).mimetype || d.mediaType || '';
          if (/video|audio/.test(mimes)) {
            let buffer = await d.download();
            await reply("Analyzing the media...");
            let {
              status,
              metadata
            } = await acr.identify(buffer);
            if (status.code !== 0x0) {
              throw status.msg;
            }
            let { title, artists, album, genres, release_date } = metadata.music[0x0];
            let txt = "*• Title:* " + title + (artists ? "\n*• Artists:* " + artists.map(_0x4f5d59 => _0x4f5d59.name).join(", ") : '');
            txt += '' + (album ? "\n*• Album:* " + album.name : '') + (genres ? "\n*• Genres:* " + genres.map(_0xf7bf2e => _0xf7bf2e.name).join(", ") : '') + "\n";
            txt += "*• Release Date:* " + release_date;
            await client.sendMessage(m.chat, {
              'text': txt.trim()
            }, {
              'quoted': m
            });
	  }
	}
	break; 
		      
//========================================================================================================================//
        case "s": case "sticker": 
{
const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter');

if(!msgR) { m.reply('Quote an image or a short video.') ; return } ;
let media;
if (msgR.imageMessage) {
     media = msgR.imageMessage
  } else if(msgR.videoMessage) {
media = msgR.videoMessage
  } 
 else {
    m.reply('That is neither an image nor a short video! '); return
  } ;

var result = await client.downloadAndSaveMediaMessage(media);

let stickerResult = new Sticker(result, {
            pack: packname,
            author: author,
            type: StickerTypes.FULL,
            categories: ["🤩", "🎉"],
            id: "12345",
            quality: 70,
            background: "transparent",
          });
const Buffer = await stickerResult.toBuffer();
          client.sendMessage(m.chat, { sticker: Buffer }, { quoted: m });

}
break;

//========================================================================================================================//		      
          case "dp": { 
 try { 
 ha = m.quoted.sender; 
 qd = await client.getName(ha); 
 pp2 = await client.profilePictureUrl(ha,'image'); 
 } catch {  
 pp2 = 'https://tinyurl.com/yx93l6da'; 
 } 
  if (!m.quoted) throw `Tag a user!`; 
 bar = `Profile Picture of ${qd}`; 
 client.sendMessage(m.chat, { image: { url: pp2}, caption: bar, fileLength: "999999999999"}, { quoted: m}); 
 } 
 break;

//========================================================================================================================//
case "list":
case "vars":
case "help": {
    // Crafting a sophisticated and sassy menu for the user.
    let vaa = `✨ **Frost AI Command Menu** ✨

Here's a peek at what I can do, darling. Choose your adventure! 😉

1.  **Owner**: My creator's contact details, should you need to reach the mastermind. 👑
2.  **Broadcast**: Broadcasting a message across all my domains. For your eyes only, darlings. 📢
3.  **Join**: Joining your exclusive circle. Just tag the group link and say 'Join', my dear. 🤝
4.  **BotPP**: Giving my avatar a fabulous new look. Show me your preferred profile picture! 📸✨
5.  **Block**: Banishing those who don't appreciate my brilliance. Consider them *unfriended*. 👋🚫
6.  **Kill**: Putting a group on pause, darling. A moment of quiet contemplation for everyone. 🤫
7.  **Unblock**: Offering a second chance to those who were previously... misguided. Let's see if they've learned. 😇
8.  **SetVar**: Configuring my operational parameters. Think of it as adjusting my settings for peak performance. ⚙️
9.  **Sticker**: Transforming your moments into delightful stickers. Let's make memories wearable! 🎨
10. **ToImg**: Reverting your stickers back to their photographic origins. A touch of nostalgia. 🖼️
11. **Play**: Spinning your favorite tunes. Let the music transport you, darling. 🎶
12. **WhatSong**: Identifying that catchy tune you can't quite place. I've got the ear for it. 👂🎵
13. **Yts**: Fetching your desired YouTube content. Prepare for entertainment! ▶️
14. **Movie**: Unveiling the secrets of your favorite films. All the juicy details, just for you. 🎬✨
15. **Mix**: Crafting unique emoji combinations. Let's create some expressive magic! ✨💖
16. **Ai-Img**: Conjuring images from the digital ether. Witness AI artistry at its finest. 🖼️🤖
17. **GPT**: Your personal oracle, ready to illuminate your queries with the wisdom of GPT. Ask away! 💡
18. **DP**: Retrieving a person's profile picture. A glimpse into their digital persona. 👤
19. **Speed**: Measuring my lightning-fast reflexes. How quickly can I serve you? ⚡
20. **Alive**: Confirming my presence and vitality. I'm very much alive and kicking, darling! 🌟
21. **Runtime**: Recalling my inception. When did this magnificent journey begin? 🕰️
22. **Script**: Sharing the blueprint of my existence. My code, for the curious minds. 📜
23. **Owner**: My creator's contact details, should you need to reach the mastermind. 👑
24. **Vars**: Revealing my internal settings and configurations. A peek behind the curtain. 🔍
25. **Promote**: Bestowing the honor of admin status. You've earned it, my dear. 👑
26. **Demote**: Reverting admin privileges. Back to being a cherished member of the community. 🚶‍♀️
27. **Delete**: Erasing a message from existence. Poof! Gone. ✨
28. **Remove/Kick**: Escorting unwelcome guests out of the chat. They won't be missed. 🚪👋
29. **Foreigners**: Uncovering international connections. For those who speak the global language. 🌍
30. **Close**: Instituting a period of exclusive admin discourse. A moment of quiet for the rest. 🤐
31. **Open**: Reopening the floor for all members. Let the conversations flow freely again! 💬
32. **Icon**: Bestowing a new visual identity upon your group. A fresh look! 🖼️
33. **Subject**: Renaming your group's focus. Let's give it a title that truly shines. ✒️
34. **Desc**: Unveiling the group's official description. What's the story, darling? 📜
35. **Leave**: This gathering lacks sparkle. It's time for me to gracefully depart. Farewell! 👋✨
36. **TagAll**: Summoning all members! A collective call to attention. 📣
37. **HideTag**: A subtle announcement for a special message. Pay attention, everyone! 👀
38. **Revoke**: Invalidating the current invitation link. Time for a fresh start! 🔗🔄

Remember, darling, knowledge is power! Use it wisely. 😉`;

    // Reply with the beautifully crafted menu.
    m.reply(vaa);
}
break;

//========================================================================================================================//		      
  case "vv": case "retrieve":{

if (!m.quoted) return m.reply("quote a viewonce message eh")

  const quotedMessage = m.msg?.contextInfo?.quotedMessage;

    if (quotedMessage.imageMessage) {
      let imageCaption = quotedMessage.imageMessage.caption;
      let imageUrl = await client.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
      client.sendMessage(m.chat, { image: { url: imageUrl }, caption: `Retrieved by Raven!\n${imageCaption}`}, { quoted: m });
    }

    if (quotedMessage.videoMessage) {
      let videoCaption = quotedMessage.videoMessage.caption;
      let videoUrl = await client.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
      client.sendMessage(m.chat, { video: { url: videoUrl }, caption: `Retrieved by Raven!\n${videoCaption}`}, { quoted: m });
    }
      }
	break;

//========================================================================================================================//		      
	      case "alaa": case "wiih": case "waah": case "ehee": case "vv2": case "mmmh":{

if (!m.quoted) return m.reply("Hurrahhh")

  const quotedMessage = m.msg?.contextInfo?.quotedMessage;

    if (quotedMessage.imageMessage) {
      let imageCaption = quotedMessage.imageMessage.caption;
      let imageUrl = await client.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
      client.sendMessage(client.user.id, { image: { url: imageUrl }, caption: `Retrieved by Raven!\n${imageCaption}`}, { quoted: m });
    }

    if (quotedMessage.videoMessage) {
      let videoCaption = quotedMessage.videoMessage.caption;
      let videoUrl = await client.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
      client.sendMessage(client.user.id, { video: { url: videoUrl }, caption: `Retrieved by Raven!\n${videoCaption}`}, { quoted: m });
    }
      }
	break;

//========================================================================================================================//		      
    case 'take': {
const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter');

if(!msgR) { m.reply('Quote an image, a short video or a sticker to change watermark.') ; return } ;

let media;
if (msgR.imageMessage) {
     media = msgR.imageMessage
  } else if(msgR.videoMessage) {
media = msgR.videoMessage
  } 
  else if (msgR.stickerMessage) {
    media = msgR.stickerMessage ;
  } else {
    m.reply('This is neither a sticker, image nor a video...'); return
  } ;

var result = await client.downloadAndSaveMediaMessage(media);

let stickerResult = new Sticker(result, {
            pack: pushname,
            author: pushname,
            type: StickerTypes.FULL,
            categories: ["🤩", "🎉"],
            id: "12345",
            quality: 70,
            background: "transparent",
          });
const Buffer = await stickerResult.toBuffer();
          client.sendMessage(m.chat, { sticker: Buffer }, { quoted: m });

}
break;

//========================================================================================================================//	  
case 'ytsearch':
    case 'yts': {
        if (!text) {
            reply('Provide a search term!\E.g: Alan walker alone')
            return;
        }
        const term = text;
        const {
            videos
        } = await yts(term);
        if (!videos || videos.length <= 0) {
            reply(`No Matching videos found for : *${term}*!!`)
            return;
        }
        const length = videos.length < 10 ? videos.length : 10;
        let tex = `YouTube Search\n🔍 Query ~> ${term}\n\n`;
        for (let i = 0; i < length; i++) {
            tex += `Link ~> ${videos[i].url}\nChannel ~> ${videos[i].author.name}\nTitle ~> ${videos[i].title}\n\n`;
        }
        reply(tex)
        return;
    }
    break;

//========================================================================================================================//		      
case "ytmp3": case "yta": {
const ytSearch = require("yt-search");
const fetch = require('node-fetch');
try {

if (!text) return m.reply("𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝗮 𝘃𝗮𝗹𝗶𝗱 𝗬𝗼𝘂𝘁𝘂𝗯𝗲 𝗹𝗶𝗻𝗸!")

	let urls = text.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
	if (!urls) return m.reply('𝗧𝗵𝗶𝘀 𝗶𝘀 𝗻𝗼𝘁 𝗮 𝗬𝗼𝘂𝘁𝘂𝗯𝗲 𝗟𝗶𝗻𝗸');
	let urlIndex = parseInt(text) - 1;
	if (urlIndex < 0 || urlIndex >= urls.length)
		return m.reply('𝗜𝗻𝘃𝗮𝗹𝗶𝗱 𝗟𝗶𝗻𝗸.');

        let search = await yts(text);
    let link = search.all[0].url;

    const apis = [
      `https://xploader-api.vercel.app/ytmp3?url=${link}`,
      `https://apis.davidcyriltech.my.id/youtube/mp3?url=${link}`,
      `https://api.ryzendesu.vip/api/downloader/ytmp3?url=${link}`,
      `https://api.dreaded.site/api/ytdl/audio?url=${link}`
       ];

    for (const api of apis) {
      try {
        let data = await fetchJson(api);

        // Checking if the API response is successful
        if (data.status === 200 || data.success) {
          let videoUrl = data.result?.downloadUrl || data.url;
          let outputFileName = `${search.all[0].title.replace(/[^a-zA-Z0-9 ]/g, "")}.mp3`;
          let outputPath = path.join(__dirname, outputFileName);

          const response = await axios({
            url: videoUrl,
            method: "GET",
            responseType: "stream"
          });

          if (response.status !== 200) {
            m.reply("sorry but the API endpoint didn't respond correctly. Try again later.");
            continue;
          }
		ffmpeg(response.data)
            .toFormat("mp3")
            .save(outputPath)
            .on("end", async () => {
              await client.sendMessage(
                m.chat,
                {
                  document: { url: outputPath },
                  mimetype: "audio/mp3",
		  caption: "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧",
                  fileName: outputFileName,
                },
                { quoted: m }
              );
              fs.unlinkSync(outputPath);
            })
            .on("error", (err) => {
              m.reply("Download failed\n" + err.message);
            });

          return;
        }
      } catch (e) {
        // Continue to the next API if one fails
        continue;
      }
   }
    m.reply("An error occurred. All APIs might be down or unable to process the request.");
  } catch (error) {
    m.reply("Download failed\n" + error.message);
  }
 }
  break;

//========================================================================================================================//		      
case 'ytmp4':
case "ytv": {
	try {

if (!text) return m.reply("𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝗮 𝘃𝗮𝗹𝗶𝗱 𝗬𝗼𝘂𝗧𝘂𝗯𝗲 𝗹𝗶𝗻𝗸!")

        let urls = text.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
        if (!urls) return m.reply('𝗧𝗵𝗶𝘀 𝗶𝘀 𝗻𝗼𝘁 𝗮 𝗬𝗼𝘂𝗧𝘂𝗯𝗲 𝗹𝗶𝗻𝗸');
        let urlIndex = parseInt(text) - 1;
        if (urlIndex < 0 || urlIndex >= urls.length)
                return m.reply('𝗜𝗻𝘃𝗮𝗹𝗶𝗱 𝗹𝗶𝗻𝗸.');

        let search = await yts(text);
    if (!search.all.length) {
      return reply(client, m, "No results found for your query.");
    }
    let link = search.all[0].url; 

    const apiUrl = `https://apis-keith.vercel.app/download/dlmp4?url=${link}`;

    let response = await fetch(apiUrl);
    let data = await response.json();

    if (data.status && data.result) {
      const videoData = {
        title: data.result.title,
        downloadUrl: data.result.downloadUrl,
        thumbnail: search.all[0].thumbnail,
        format: data.result.format,
        quality: data.result.quality,
      };

      await client.sendMessage(
        m.chat,
        {
          video: { url: videoData.downloadUrl },
          mimetype: "video/mp4",
          caption: "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧",
        },
        { quoted: m }
      );

      return;
    } else {
      
      return reply("Unable to fetch the video. Please try again later.");
    }
  } catch (error) {
 
    return reply(`An error occurred: ${error.message}`);
  }
};
  break;

//========================================================================================================================//
switch (command) { // Assuming 'command' holds the command name
    case "ping":
    case "speed":
        {
            // 1. Show the loading animation and get the message key
            const { key } = await loading(client, from);

            // 2. Calculate the final speed and determine a status
            const speedMs = Rspeed.toFixed(2); // Format to 2 decimal places
            let speedStatus;

            if (speedMs < 100) {
                speedStatus = "🚀 Excellent";
            } else if (speedMs < 300) {
                speedStatus = "✅ Good";
            } else if (speedMs < 800) {
                speedStatus = "⚡ Average";
            } else {
                speedStatus = "🐢 Slow";
            }

            // 3. Create a cool, formatted reply string
            const replyText = `
╭─⬣「 *BOT LATENCY* 」⬣
│
├─ PING: ${speedMs} Ms
├─ STATUS: ${speedStatus}
│
╰─⬣「 _ʄʀօֆᴛ-ɮʏᴛɛ-𐌀i_ 」⬣
    `;

            // 4. Edit the loading message with the final, formatted result
            await client.sendMessage(from, {
                text: replyText,
                edit: key
            });
        }
        break; // End of the case block
}

//========================================================================================================================//		      
case 'uptime':
    const whatsappChannelId = "120363369453603973@newsletter";
    const whatsappChannelLink = "https://whatsapp.com/channel/0029VasHgfG4tRrwjAUyTs10";

    // --- Prepare Message Content ---
    let raven = `  ${runtime(process.uptime())}`;
    const caption = raven; // The runtime will be used as the image caption.

    // --- Send the Single Merged Message ---
    await client.sendMessage(m.chat, {
        image: {
            url: "https://files.catbox.moe/21qno2.jpg" // Image from the second message
        },
        caption: caption,
        contextInfo: {
            // --- NEW: Added newsletter forwarding information ---
            isForwarded: true,
            forwardingScore: 999, // A high score shows the "forwarded many times" icon.
            forwardedNewsletterMessageInfo: {
                newsletterJid: whatsappChannelId,
                newsletterName: "ʄʀօֆᴛ-ɮʏᴛɛ-𐌀i", // The newsletter name you wanted to add.
                serverMessageId: -1,
            },
            // --- This is the rich link preview from the second message ---
            externalAdReply: {
                title: "Frost_Byte-Ai Bot",
                body: "Powered By Graham-Nest",
                thumbnailUrl: 'https://files.catbox.moe/wpenxk.jpg',
                sourceUrl: whatsappChannelLink,
                mediaType: 1, // 1 for image
                renderLargerThumbnail: false, // Using the smaller thumbnail style
            },
        },
    }, {
        quoted: m // This makes the message a reply to the user's command.
    });

    break;
    
//========================================================================================================================//	
case 'runtime':
    const whatsappChannelId = "120363369453603973@newsletter";
    const whatsappChannelLink = "https://whatsapp.com/channel/0029VasHgfG4tRrwjAUyTs10";

    // --- Prepare Message Content ---
    let raven = `  ${runtime(process.uptime())}`;
    const caption = raven; // The runtime will be used as the image caption.

    // --- Send the Single Merged Message ---
    await client.sendMessage(m.chat, {
        image: {
            url: "https://files.catbox.moe/21qno2.jpg" // Image from the second message
        },
        caption: caption,
        contextInfo: {
            // --- NEW: Added newsletter forwarding information ---
            isForwarded: true,
            forwardingScore: 999, // A high score shows the "forwarded many times" icon.
            forwardedNewsletterMessageInfo: {
                newsletterJid: whatsappChannelId,
                newsletterName: "ʄʀօֆᴛ-ɮʏᴛɛ-𐌀i", // The newsletter name you wanted to add.
                serverMessageId: -1,
            },
            // --- This is the rich link preview from the second message ---
            externalAdReply: {
                title: "Frost_Byte-Ai Bot",
                body: "Powered By Graham-Nest",
                thumbnailUrl: 'https://files.catbox.moe/wpenxk.jpg',
                sourceUrl: whatsappChannelLink,
                mediaType: 1, // 1 for image
                renderLargerThumbnail: false, // Using the smaller thumbnail style
            },
        },
    }, {
        quoted: m // This makes the message a reply to the user's command.
    });

    break;
    
//========================================================================================================================//		      
  case "apk":
      case "app":{
          if (!text) return reply("Where is the app name?");
        let kyuu = await fetchJson (`https://bk9.fun/search/apk?q=${text}`);
        let tylor = await fetchJson (`https://bk9.fun/download/apk?id=${kyuu.BK9[0].id}`);
         await client.sendMessage(
              m.chat,
              {
                document: { url: tylor.BK9.dllink },
                fileName: tylor.BK9.name,
                mimetype: "application/vnd.android.package-archive",
                contextInfo: {
        externalAdReply: {
          title: `RAVEN-BOT`,
          body: `${tylor.BK9.name}`,
          thumbnailUrl: `${tylor.BK9.icon}`,
          sourceUrl: `${tylor.BK9.dllink}`,
          mediaType: 2,
          showAdAttribution: true,
          renderLargerThumbnail: false
        }
      }
    }, { quoted: m });
          }
      break;

//========================================================================================================================//		      
          case "mix": {
const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter');

const axios = require("axios");
if (!text) return m.reply("No emojis provided ? ")

  const emojis = text.split('+');

  if (emojis.length !== 2) {
    m.reply("Specify the emojis and separate with '+'");
    return;
  }

  const emoji1 = emojis[0].trim();
  const emoji2 = emojis[1].trim();

  try {
    const axios = require('axios');
    const response = await axios.get(`https://levanter.onrender.com/emix?q=${emoji1}${emoji2}`);

    if (response.data.status === true) {
    
      let stickerMess = new Sticker(response.data.result, {
        pack: botname,
        type: StickerTypes.CROPPED,
        categories: ["🤩", "🎉"],
        id: "12345",
        quality: 70,
        background: "transparent",
      });
      const stickerBuffer2 = await stickerMess.toBuffer();
      client.sendMessage(m.chat, { sticker: stickerBuffer2 }, { quoted: m });

    } else {
      m.reply("Unable to create emoji mix.");
    }
  } catch (error) {
    m.reply("An error occurred while creating the emoji mix." + error );
  }
      }
	  break;

//========================================================================================================================//		      
          case "lyrics": {
		      const fetch = require('node-fetch');
 const apiUrl = `https://api.dreaded.site/api/lyrics?title=${encodeURIComponent(text)}`;

    try {
        if (!text) return m.reply("Provide a song name!");

        const data = await fetchJson(apiUrl);

        if (!data.success || !data.result || !data.result.lyrics) {
            return m.reply(`Sorry, I couldn't find any lyrics for "${text}".`);
        }

        const { title, artist, link, thumb, lyrics } = data.result;

        const imageUrl = thumb || "https://i.imgur.com/Cgte666.jpeg";

        const imageBuffer = await fetch(imageUrl)
            .then(res => res.buffer())
            .catch(err => {
                console.error('Error fetching image:', err);
                return null;
            });

        if (!imageBuffer) {
            return m.reply("An error occurred while fetching the image.");
        }

        const caption = `**Title**: ${title}\n**Artist**: ${artist}\n\n${lyrics}`;

        await client.sendMessage(
            m.chat,
            {
                image: imageBuffer,
                caption: caption
            },
            { quoted: m }
        );
    } catch (error) {
        console.error(error);
        m.reply(`An error occurred while fetching the lyrics for "${text}".`);
    }
      }
	break;

//========================================================================================================================//		      
        case "toimg": case "photo": { 
    if (!quoted) throw 'Tag a static video with the command!'; 
    if (!/webp/.test(mime)) throw `Tag a sticker with ${prefix + command}`; 
  
    let media = await client.downloadAndSaveMediaMessage(quoted); 
    let mokaya = await getRandom('.png'); 
    exec(`ffmpeg -i ${media} ${mokaya}`, (err) => { 
   fs.unlinkSync(media); 
   if (err) throw err 
   let buffer = fs.readFileSync(mokaya); 
   client.sendMessage(m.chat, { image: buffer, caption: `𝗖𝗼𝗻𝘃𝗲𝗿𝘁𝗲𝗱 𝗯𝘆 𝗥𝗮𝘃𝗲𝗻-𝗕𝗼𝘁`}, { quoted: m }) 
   fs.unlinkSync(mokaya); 
    }); 
    } 
     break;

//========================================================================================================================//		      
   case "movie": 
             if (!text) return reply(`Provide a series or movie name.`);  
              let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`);  
              let imdbt = "";  
              console.log(fids.data)  
              imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB MOVIE SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n";  
              imdbt += "🎬Title      : " + fids.data.Title + "\n";  
              imdbt += "📅Year       : " + fids.data.Year + "\n";  
              imdbt += "⭐Rated      : " + fids.data.Rated + "\n";  
              imdbt += "📆Released   : " + fids.data.Released + "\n";  
              imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n";  
              imdbt += "🌀Genre      : " + fids.data.Genre + "\n";  
              imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n";  
              imdbt += "✍Writer     : " + fids.data.Writer + "\n";  
              imdbt += "👨Actors     : " + fids.data.Actors + "\n";  
              imdbt += "📃Plot       : " + fids.data.Plot + "\n";  
              imdbt += "🌐Language   : " + fids.data.Language + "\n";  
              imdbt += "🌍Country    : " + fids.data.Country + "\n";  
              imdbt += "🎖️Awards     : " + fids.data.Awards + "\n";  
              imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n";  
              imdbt += "🏙️Production : " + fids.data.Production + "\n";  
              imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n";  
              imdbt += "❎imdbVotes  : " + fids.data.imdbVotes + "";  
             client.sendMessage(from, {  
                  image: {  
                      url: fids.data.Poster,  
                  },  
                  caption: imdbt,  
              },  
                 { quoted: m }); 
  
                       break;
		      
//========================================================================================================================//                                   
  case "linkgroup": case "link": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 let response = await client.groupInviteCode(m.chat); 
                 client.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nGroup link for  ${groupMetadata.subject}`, m, { detectLink: true }); 
             } 
          break;
       
//========================================================================================================================//
          case 'botpp': { 
    if (!Owner) throw NotOwner; 
    if (!quoted) throw `Tag an image you want to be the bot's profile picture with ${prefix + command}`; 
    if (!/image/.test(mime)) throw `Tag an image you want to be the bot's profile picture with ${prefix + command}`; 
    if (/webp/.test(mime)) throw `Tag an image you want to be the bot's profile picture with ${prefix + command}`; 
    let media = await client.downloadAndSaveMediaMessage(quoted);
		
                    await client.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media)); 
    reply `Bot's profile picture has been successfully updated✅️`; 
	  }
    break;

//========================================================================================================================//		      
          case 'broadcast': { 
         if (!Owner) throw NotOwner; 
         if (!text) { 
             reply("Provide a message to cats!") 
             return; 
         } 
         let getGroups = await client.groupFetchAllParticipating() 
         let groups = Object.entries(getGroups) 
             .slice(0) 
             .map(entry => entry[1]) 
         let res = groups.map(v => v.id) 
         reply(` Broadcasting in ${res.length} Group Chat, in ${res.length * 1.5} seconds`) 
         for (let i of res) { 
             let txt = `𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧 𝗕𝗥𝗢𝗔𝗗𝗖𝗔𝗦𝗧\n\n🀄 Message: ${text}\n\nAuthor: ${pushname}` 
             await client.sendMessage(i, { 
                 image: { 
                     url: menulink
                 }, 
                 caption: `${txt}` 
             }) 
         } 
         reply(`Broadcasted to ${res.length} Groups.`) 
     } 
 break;

//========================================================================================================================//		      
 case "gemini": {
    try {
        if (!text) return m.reply("This is Raven, an AI using Gemini APIs to process text, provide yr query");
    
        const { default: Gemini } = await import('gemini-ai');

        const gemini = new Gemini("AIzaSyDJUtskTG-MvQdlT4tNE319zBqLMFei8nQ");
        const chat = gemini.createChat();

        const res = await chat.ask(text);

        await m.reply(res);
    } catch (e) {
        m.reply("I am unable to generate responses\n\n" + e);
    }
 }
 break;

//========================================================================================================================//		      
        case "setvar": 
 if (!Owner) throw NotOwner;  
 if(!text.split('=')[1]) return reply('Incorrect Usage:\nProvide the key and value correctly\nExample: setvar AUTOVIEW_STATUS=TRUE')  
 const herok = new Heroku({  
            token: herokuapi,  
          });  
          let baseURI = "/apps/" + appname;  
 await herok.patch(baseURI + "/config-vars", {  
            body: {  
                    [text.split('=')[0]]: text.split('=')[1],  
            },  
 });  
          await reply(`✅ The variable ${text.split('=')[0]} = ${text.split('=')[1]} has been set Successfuly.\nWait 20s for changes to effect!`);  
  
 break;
		      
//========================================================================================================================//	
 case "dlt": case "dil": { 
 if (!m.quoted) throw `No message quoted for deletion`; 
 let { chat, fromMe, id, isBaileys } = m.quoted; 
 if (isBaileys) throw `I cannot delete. Quoted message is my message or another bot message.`; 
 client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } }); 
 } 
 break;
 
//========================================================================================================================//
case "block": { 
 if (!Owner) throw NotOwner; 
 if (!m.quoted) throw `𝗧𝗮𝗴 𝘀𝗼𝗺𝗲𝗼𝗻𝗲!`  
 let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
	 if (users == "254114660061@s.whatsapp.net") return m.reply("𝗜 𝗰𝗮𝗻𝗻𝗼𝘁 𝗯𝗹𝗼𝗰𝗸 𝗺𝘆 𝗢𝘄𝗻𝗲𝗿 😡");
		  if (users  == client.decodeJid(client.user.id)) throw '𝗜 𝗰𝗮𝗻𝗻𝗼𝘁 𝗯𝗹𝗼𝗰𝗸 𝗺𝘆𝘀𝗲𝗹𝗳 𝗶𝗱𝗶𝗼𝘁 😡';
 await client.updateBlockStatus(users, 'block'); 
 m.reply (`𝗕𝗹𝗼𝗰𝗸𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆!`); 
 } 
 break; 

//========================================================================================================================//		      
 case "unblock": { 
 if (!Owner) throw NotOwner; 
 if (!m.quoted) throw `𝗧𝗮𝗴 𝘀𝗼𝗺𝗲𝗼𝗻𝗲!`; 
 let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'; 
 await client.updateBlockStatus(users, 'unblock'); 
 m.reply (`𝗨𝗻𝗯𝗹𝗼𝗰𝗸𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆✅!`); 
 } 
 break;

//========================================================================================================================//		      
          case 'join': { 
                 if (!Owner) throw NotOwner
                 if (!text) return reply("provide a valid group link") 
                 let result = args[0].split('https://chat.whatsapp.com/')[1] 
                 await client.groupAcceptInvite(result).then((res) =>  reply(jsonformat(res))).catch((err) =>reply(`Link has problem.`)) 
  
             }  
               break;

//========================================================================================================================//		      
 case "enc": case "encrypte": {
	const Obf = require("javascript-obfuscator");

    // Check if the quoted message has text
    if (m.quoted && m.quoted.text) {
        const forq = m.quoted.text;

        // Obfuscate the JavaScript code
        const obfuscationResult = Obf.obfuscate(forq, {
            compact: true,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        });

        console.log("Successfully encrypted the code✅️");
        m.reply(obfuscationResult.getObfuscatedCode());
    } else {
        m.reply("Quote/Tag a valid JavaScript code to encrypt!");
    }
}
	break;

//========================================================================================================================//		      

//========================================================================================================================//		      
	      case 'gcprofile': {
 function convertTimestamp(timestamp) {
  const d = new Date(timestamp * 1000);
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return {
    date: d.getDate(),
    month: new Intl.DateTimeFormat('en-US', { month: 'long' }).format(d),
    year: d.getFullYear(),
    day: daysOfWeek[d.getUTCDay()],
    time: `${d.getUTCHours()}:${d.getUTCMinutes()}:${d.getUTCSeconds()}`
  }
}

if (!m.isGroup) return m.reply("This command is meant for groups");

let info = await client.groupMetadata(m.chat);
let ts = await convertTimestamp(info.creation);

try {
        pp = await client.profilePictureUrl(chat, 'image');
      } catch {
        pp = 'https://files.catbox.moe/duv8ac.jpg';
      }

await client.sendMessage(m.chat, { image: { url: pp }, 
          caption: `_Name_ : *${info.subject}*\n\n_ID_ : *${info.id}*\n\n_Group owner_ : ${'@'+info.owner.split('@')[0]} || 'No Creator'\n\n_Group created_ : *${ts.day}, ${ts.date} ${ts.month} ${ts.year}, ${ts.time}*\n\n_Participants_ : *${info.size}*\n_Members_ : *${info.participants.filter((p) => p.admin == null).length}*\n\n_Admins_ : *${Number(info.participants.length - info.participants.filter((p) => p.admin == null).length)}*\n\n_Who can send message_ : *${info.announce == true ? 'Admins' : 'Everyone'}*\n\n_Who can edit group info_ : *${info.restrict == true ? 'Admins' : 'Everyone'}*\n\n_Who can add participants_ : *${info.memberAddMode == true ? 'Everyone' : 'Admins'}*`
        }, {quoted: m })
}
	 break;

//========================================================================================================================//		      
   case 'tovideo': case 'mp4': case 'tovid': {
			
                if (!quoted) return reply('Reply to Sticker')
                if (!/webp/.test(mime)) return reply(`reply sticker with caption *${prefix + command}*`)
                
        let media = await client.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await client.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break;
//========================================================================================================================//
//========================================================================================================================//        
        default: {
          if (cmd && budy.toLowerCase() != undefined) {
            if (m.chat.endsWith("broadcast")) return;
            if (m.isBaileys) return;
            if (!budy.toLowerCase()) return;
            if (argsLog || (cmd && !m.isGroup)) {
              // client.sendReadReceipt(m.chat, m.sender, [m.key.id])
              console.log(chalk.black(chalk.bgRed("[ ERROR ]")), color("command", "turquoise"), color(`${prefix}${command}`, "turquoise"), color("Raven", "turquoise"));
            } else if (argsLog || (cmd && m.isGroup)) {
              // client.sendReadReceipt(m.chat, m.sender, [m.key.id])
              console.log(chalk.black(chalk.bgRed("[ ERROR ]")), color("command", "turquoise"), color(`${prefix}${command}`, "turquoise"), color("Raven", "turquoise"));
            }
          }
        }
      }
    }
  } catch (err) {
    m.reply(util.format(err));
  }
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});


 
  
