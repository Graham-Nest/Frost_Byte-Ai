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
// Define the new sassy phrases with their emojis and example descriptions
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

async function handleMessageRevocation(client, revocationMessage) {
  const remoteJid = revocationMessage.key.remoteJid;
  const messageId = revocationMessage.message.protocolMessage.key.id;

  // Load the original message data
  const chatData = loadChatData(remoteJid, messageId);
  const originalMessage = chatData.length > 0 ? chatData[0] : null;

  if (!originalMessage) {
    console.log(`Original message not found for ID: ${messageId}`);
    return;
  }

  const deletedBy = revocationMessage.participant || revocationMessage.key.participant || revocationMessage.key.remoteJid;
  
  // Format participant IDs for display
  const deletedByFormatted = deletedBy ? `@${deletedBy.split('@')[0]}` : 'Unknown';

  // --- Stylish and Sassy Notification Text ---
  let notificationText = `✨👑 𝒀𝒐𝒖 𝒄𝒂𝒏'𝒕 𝒉𝒊𝒅𝒆 𝒇𝒓𝒐𝒎 𝑭𝒓𝒐𝒔𝒕_𝑩𝒚𝒕𝒆-𝑨𝒊! 👑✨\n\n`;
  
  // Incorporate a random sassy phrase to enhance the message
  const randomSassyDescriptor = getRandomSassyPhraseDescription();
  notificationText += `${randomSassyDescriptor}\n\n`; // Using the full descriptive sentence

  notificationText += `🤫 𝒀𝒐𝒖 𝒄𝒂𝒏'𝒕 𝒔𝒊𝒍𝒆𝒏𝒄𝒆 𝒕𝒉𝒊𝒔 𝒎𝒆𝒔𝒔𝒂𝒈𝒆! 𝑫𝒆𝒍𝒆𝒕𝒆𝒅 𝑴𝒆𝒔𝒔𝒂𝒈𝒆 𝒃𝒚: ${toBoldUnicode(deletedByFormatted)} 🤫\n\n`;

  let messageContent = '';
  let mediaCaption = '';

  try {
    // Check if the deleted message was sent by the bot itself, if so, ignore.
    if (originalMessage.message?.conversation) {
      // Text message
      const messageText = originalMessage.message.conversation;
      messageContent = `💬 𝑶𝒐𝒑𝒔! 𝑨 𝒎𝒆𝒔𝒔𝒂𝒈𝒆 𝒈𝒐𝒕 𝒆𝒓𝒂𝒔𝒆𝒅... 𝑯𝒆𝒓𝒆'𝒔 𝒘𝒉𝒂𝒕 𝒚𝒐𝒖 𝒎𝒊𝒔𝒔𝒆𝒅, 𝒅𝒆𝒂𝒓: \n\n${toBoldUnicode(messageText)} 💅`;
    } else if (originalMessage.message?.extendedTextMessage) {
      // Extended text message (quoted messages)
      const messageText = originalMessage.message.extendedTextMessage.text;
      messageContent = `💬 𝑨 𝒒𝒖𝒐𝒕𝒆𝒅 𝒎𝒆𝒔𝒔𝒂𝒈𝒆 𝒗𝒂𝒏𝒊𝒔𝒉𝒆𝒅! 𝑯𝒆𝒓𝒆'𝒔 𝒕𝒉𝒆 𝒄𝒐𝒏𝒕𝒆𝒏𝒕, 𝒅𝒓𝒂𝒎𝒂 𝒇𝒓𝒆𝒆: \n\n${toBoldUnicode(messageText)} 💖`;
    } else if (originalMessage.message?.imageMessage) {
      // Image message
      const ImageM = originalMessage.message.imageMessage;
      messageContent = `📸 𝑨 𝒑𝒊𝒄𝒕𝒖𝒓𝒆 𝒑𝒆𝒓𝒇𝒆𝒄𝒕 𝒎𝒐𝒎𝒆𝒏𝒕, 𝒏𝒐𝒘 𝒓𝒆𝒄𝒐𝒗𝒆𝒓𝒆𝒅! 𝑭𝒓𝒐𝒔𝒕_𝑩𝒚𝒕𝒆-𝑨𝒊's 𝒈𝒐𝒕 𝒚𝒐𝒖𝒓 𝒃𝒂𝒄𝒌. [Image] 🌟`;
      mediaCaption = `✨ 𝑶𝒓𝒊𝒈𝒊𝒏𝒂𝒍 𝑪𝒂𝒑𝒕𝒊𝒐𝒏: ${ImageM.caption ? toBoldUnicode(ImageM.caption) : 'No caption provided. 🤷‍♀️'}`;
      
      // Attempt to download and send the media
      try {
        const buffer = await client.downloadMediaMessage(ImageM);
        await client.sendMessage(client.user.id, { 
          image: buffer,
          caption: `${notificationText}\n${messageContent}\n${mediaCaption}`
        });
      } catch (mediaError) {
        console.error('Failed to download image:', mediaError);
        await client.sendMessage(client.user.id, { text: `${notificationText}${messageContent}\n\n⚠️ Could not recover deleted image (media expired). 😥` });
      }
      return; // Exit early as media is handled
    } else if (originalMessage.message?.videoMessage) {
      // Video message
      const VideoM = originalMessage.message.videoMessage;
      messageContent = `🎬 𝑨 𝒗𝒊𝒅𝒆𝒐 𝒄𝒍𝒊𝒑 𝒕𝒉𝒂𝒕 𝒗𝒂𝒏𝒊𝒔𝒉𝒆𝒅... 𝑩𝒖𝒕 𝒏𝒐𝒕 𝒇𝒓𝒐𝒎 𝑭𝒓𝒐𝒔𝒕_𝑩𝒚𝒕𝒆-𝑨𝒊's 𝒎𝒆𝒎𝒐𝒓𝒚! 𝑩𝒓𝒊𝒏𝒈𝒊𝒏𝒈 𝒊𝒕 𝒃𝒂𝒄𝒌. [Video] 💎`;
      mediaCaption = `✨ 𝑶𝒓𝒊𝒈𝒊𝒏𝒂𝒍 𝑪𝒂𝒑𝒕𝒊𝒐𝒏: ${VideoM.caption ? toBoldUnicode(VideoM.caption) : 'No caption provided. 🤷‍♀️'}`;

      try {
        const buffer = await client.downloadMediaMessage(VideoM);
        await client.sendMessage(client.user.id, { 
          video: buffer, 
          caption: `${notificationText}\n${messageContent}\n${mediaCaption}`
        });
      } catch (mediaError) {
        console.error('Failed to download video:', mediaError);
        await client.sendMessage(client.user.id, { text: `${notificationText}${messageContent}\n\n⚠️ Could not recover deleted video (media expired). 😥` });
      }
      return; // Exit early as media is handled
    } else if (originalMessage.message?.stickerMessage) {
      // Sticker message
      const StickerM = originalMessage.message.stickerMessage;
      messageContent = `🎨 𝑨 𝒔𝒕𝒊𝒄𝒌𝒆𝒓 𝒕𝒉𝒂𝒕 𝒅𝒊𝒔𝒂𝒑𝒑𝒆𝒂𝒓𝒆𝒅! 𝑹𝒆𝒄𝒐𝒗𝒆𝒓𝒆𝒅 𝒂 𝒎𝒆𝒎𝒐𝒓𝒚 𝒇𝒐𝒓 𝒚𝒐𝒖. 💋 [Sticker]`;
      
      try {
        const buffer = await client.downloadMediaMessage(StickerM);
        await client.sendMessage(client.user.id, { 
          sticker: buffer, 
          contextInfo: {
            externalAdReply: {
              title: `${notificationText}\n${messageContent}`,
              body: `𝑫𝒆𝒍𝒆𝒕𝒆𝒅 𝑴𝒆𝒔𝒔𝒂𝒈𝒆 𝒃𝒚: ${toBoldUnicode(deletedByFormatted)} 💅`,
              thumbnailUrl: "https://files.catbox.moe/7f98vp.jpg", // Placeholder thumbnail
              sourceUrl: '',
              mediaType: 1, // For sticker
              renderLargerThumbnail: false
            }
          }
        });
      } catch (mediaError) {
        console.error('Failed to download sticker:', mediaError);
        await client.sendMessage(client.user.id, { text: `${notificationText}${messageContent}\n\n⚠️ Could not recover deleted sticker. 😥` });
      }
      return; // Exit early as media is handled
    } else if (originalMessage.message?.documentMessage) {
      // Document message
      const docMessage = originalMessage.message.documentMessage;
      messageContent = `📄 𝑨 𝒅𝒐𝒄𝒖𝒎𝒆𝒏𝒕 𝒕𝒉𝒂𝒕 𝒗𝒂𝒏𝒊𝒔𝒉𝒆𝒅! 𝑹𝒆𝒄𝒐𝒗𝒆𝒓𝒆𝒅 𝒇𝒐𝒓 𝒚𝒐𝒖, 𝒅𝒂𝒓𝒍𝒊𝒏𝒈. [Document] 📚`;
      mediaCaption = `✨ 𝑭𝒊𝒍𝒆 𝑵𝒂𝒎𝒆: ${docMessage.fileName || 'N/A'} 📚`;

      try {
        const buffer = await client.downloadMediaMessage(docMessage);
        await client.sendMessage(client.user.id, { 
          document: buffer, 
          fileName: docMessage.fileName,
          mimetype: docMessage.mimetype,
          contextInfo: {
            externalAdReply: {
              title: `${notificationText}\n${messageContent}\n${mediaCaption}`,
              body: `𝑫𝒆𝒍𝒆𝒕𝒆𝒅 𝑴𝒆𝒔𝒔𝒂𝒈𝒆 𝒃𝒚: ${toBoldUnicode(deletedByFormatted)} 💅`,
              thumbnailUrl: "https://files.catbox.moe/7f98vp.jpg", // Placeholder thumbnail
              sourceUrl: '',
              mediaType: 1, // For document
              renderLargerThumbnail: false
            }
          }
        });
      } catch (mediaError) {
        console.error('Failed to download document:', mediaError);
        await client.sendMessage(client.user.id, { text: `${notificationText}${messageContent}\n\n⚠️ Could not recover deleted document. 😥` });
      }
      return; // Exit early as media is handled
    } else if (originalMessage.message?.audioMessage) {
      // Audio message
      const AudioM = originalMessage.message.audioMessage;
      messageContent = `🎵 𝑨 𝒎𝒆𝒔𝒔𝒂𝒈𝒆 𝒊𝒏 𝒎𝒖𝒔𝒊𝒄, 𝒏𝒐𝒘 𝒓𝒆𝒄𝒐𝒗𝒆𝒓𝒆𝒅! 𝑲𝒆𝒆𝒑 𝒕𝒉𝒆 𝒃𝒆𝒂𝒕 𝒈𝒐𝒊𝒏𝒈. 🎶 [Audio] 💖`;
      
      try {
        const buffer = await client.downloadMediaMessage(AudioM);
        const isPTT = AudioM.ptt === true;
        await client.sendMessage(client.user.id, { 
          audio: buffer, 
          ptt: isPTT, 
          mimetype: 'audio/mpeg', // Assuming mp3 or similar
          contextInfo: {
            externalAdReply: {
              title: `${notificationText}\n${messageContent}`,
              body: `𝑫𝒆𝒍𝒆𝒕𝒆𝒅 𝑴𝒆𝒔𝒔𝒂𝒈𝒆 𝒃𝒚: ${toBoldUnicode(deletedByFormatted)} 💅`,
              thumbnailUrl: "https://files.catbox.moe/7f98vp.jpg", // Placeholder thumbnail
              sourceUrl: '',
              mediaType: 1, // For audio
              renderLargerThumbnail: false
            }
          }
        });
      } catch (mediaError) {
        console.error('Failed to download audio:', mediaError);
        await client.sendMessage(client.user.id, { text: `${notificationText}${messageContent}\n\n⚠️ Could not recover deleted audio. 😥` });
      }
      return; // Exit early as media is handled
    } else {
      // Fallback for unhandled message types
      messageContent = `🤷‍♀️ 𝑨 𝒎𝒚𝒔𝒕𝒆𝒓𝒊𝒐𝒖𝒔 𝒎𝒆𝒔𝒔𝒂𝒈𝒆 𝒗𝒂𝒏𝒊𝒔𝒉𝒆𝒅! 𝑭𝒓𝒐𝒔𝒕_𝑩𝒚𝒕𝒆-𝑨𝒊 𝒄𝒂𝒏'𝒕 𝒒𝒖𝒊𝒕𝒆 𝒇𝒊𝒈𝒖𝒓𝒆 𝒐𝒖𝒕 𝒘𝒉𝒂𝒕 𝒊𝒕 𝒘𝒂𝒔. 🔮`;
    }

    // Combine and send text-based notifications
    const finalNotification = `${notificationText}${messageContent}`;
    
    // Sending to the bot's own ID for logging/testing purposes as in original code
    await client.sendMessage(client.user.id, { text: finalNotification });

  } catch (error) {
    console.error('Error handling deleted message:', error);
    let errorNotification = `😥 𝑶𝒉 𝒏𝒐! 𝑭𝒓𝒐𝒔𝒕_𝑩𝒚𝒕𝒆-𝑨𝒊 𝒄𝒐𝒖𝒍𝒅𝒏'𝒕 𝒄𝒂𝒕𝒄𝒉 𝒕𝒉𝒂𝒕 𝒎𝒆𝒔𝒔𝒂𝒈𝒆... 𝑴𝒂𝒚𝒃𝒆 𝒊𝒕 𝒘𝒂𝒔 𝒕𝒐𝒐 𝒇𝒂𝒔𝒕! 𝒀𝒐𝒖'𝒓𝒆 𝒎𝒊𝒔𝒔𝒊𝒏𝒈 𝒐𝒖𝒕. 😓\n\n`;
    errorNotification += `𝑬𝒓𝒓𝒐𝒓 𝑫𝒆𝒕𝒂𝒊𝒍𝒔: ${error.message}`;
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
  const gemini = new Gemini("AIzaSyDJUtskTG-MvQdlT4tNE319zBqLMFei8nQ");
  const chat = gemini.createChat();

      const res = await chat.ask(text);

        await m.reply(res);

lastTextTime = currentTime;
	
    } catch (e) {
        m.reply("I am unable to generate text\n\n" + e);
    }
}
//========================================================================================================================//
if (antitag === 'on' && !Owner && isBotAdmin && !isAdmin && m.mentionedJid && m.mentionedJid.length > 10) {
        if (itsMe) return;

        const cate = m.sender;

        await client.sendMessage(m.chat, {
            text: `@${cate.split("@")[0]}, Antitag is Active🔨`,
            contextInfo: { mentionedJid: [cate] }
        }, { quoted: m });

        await client.sendMessage(m.chat, {
            delete: {
                remoteJid: m.chat,
                fromMe: false,
                id: m.key.id,
                participant: cate            }
        });
        await client.groupParticipantsUpdate(m.chat, [cate], "remove");
    }
//========================================================================================================================//
//========================================================================================================================//	  
const loading = async () => {
    const steps = [
        "〽️ Pinging.",
        "〽️ Pinging..",
        "〽️ Pinging...",
        "📡 Analyzing Latency...",
        "█▒▒▒▒▒▒▒▒▒ 10%",
        "███▒▒▒▒▒▒▒ 30%",
        "█████▒▒▒▒▒ 50%",
        "███████▒▒▒ 70%",
        "█████████▒ 90%",
        "██████████ 100%",
        "✅ Analysis Complete!"
    ];

    for (let msg of steps) {
        await client.sendMessage(m.chat, { text: msg }, { quoted: m });
        await new Promise(resolve => setTimeout(resolve, 300));
    }
};
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
                                sourceUrl: 'https://wa.me/254114660061?text=Hello+Raven+dev+I+need+a+bot',
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
        return reply(`💁‍♀️ *Oh darling, you forgot to give me a reference!* \n\n*Example:* bible John 3:16`);
    }
    const reference = text;

    try {
        const apiUrl = `https://bible-api.com/${encodeURIComponent(reference)}`;
        const response = await axios.get(apiUrl);

        if (response.status === 200 && response.data.text) {
            const { reference: ref, text, translation_name } = response.data;

            reply(
                `✨ *Well, look what we have here!* ✨\n\n` +
                `📖 *Reference:* ${ref}\n` +
                `📝 ${text}\n\n` +
                `🤩 _Requested by ${pushname}_`    
            );
        } else {
            reply(`🚫 *Oopsie daisy!* That verse seems to be lost in the clouds. Check the reference and try again!`);
        }
    } catch (error) {
        console.error(error);
        reply(`🛑 *Yikes!* Something went wrong while fetching that divine wisdom. Give it another shot!`);
    }
}
break;

		      
//========================================================================================================================//
case 'quran': {
  // --- Input Validation with Sassy Flair ---
  if (!text) {
    // Sassy reply when no text (Surah:Ayah) is provided
    return reply(`Darling, you've requested the divine word but forgotten the chapter and verse! Do tell, which sacred passage are you seeking? ✨📖 ${getRandomEmoji(['😉', '💖', '💫'])}`);
  }

  const input = text.split(":");
  if (input.length !== 2) {
    // Sassy reply for incorrect input format
    return reply(`Oh, honey, that format is as confusing as a riddle wrapped in an enigma! 🧐 Please, present it like a queen: Surah:Ayah (e.g., 2:255) 👑✨ ${getRandomEmoji(['💅', '💁‍♀️'])}`);
  }

  const [surah, ayah] = input;

  // --- Fetching Quran Verse ---
  try {
    // Fetching the Quran verse from the API using axios
    const res = await axios.get(`https://api.alquran.cloud/v1/ayah/${surah}:${ayah}/editions/quran-uthmani,en.asad`);
    
    // Extracting the necessary data from the API response
    const arabic = res.data.data[0].text;
    const english = res.data.data[1].text;
    const surahInfo = res.data.data[0].surah;

    // --- Constructing the Sassy and Emoji-Filled Message ---
    const msg = `*🌟 A Divine Revelation Just For You, Darling! 🌟*\n\n` +
      `*${getRandomEmoji(['📜', '📖'])} Surah:* ${surahInfo.englishName} (${surahInfo.name}) ${getRandomEmoji(['🕌', '✨', '🤲'])}\n` +
      `*${getRandomEmoji(['🔢', '📌'])} Ayah:* ${ayah} ${getRandomEmoji(['💫', '💖', '✨'])}\n\n` +
      `*${getRandomEmoji(['🕌', '🕋'])} Arabic:* \n${arabic} ${getRandomEmoji(['🌙', '✨', '🙏'])}\n\n` +
      `*${getRandomEmoji(['🌍', '📖'])} English Translation:* \n${english} ${getRandomEmoji(['📚', '✨', '📖'])}\n\n` +
      `_A special request from your dearest, ${pushname}! ${getRandomEmoji(['😘', '💖', '💋', '😇'])}_`;

    // --- Sending the Message ---
    // Sending the crafted message back to the chat
    client.sendMessage(m.chat, { text: msg }, { quoted: m });

  } catch (e) {
    // --- Error Handling with Sassy Tone ---
    console.error("Quran API error:", e.response ? e.response.data : e.message); // Log detailed error for debugging
    
    // Sassy reply when the verse cannot be found
    reply(`My apologies, my dear, but it seems that particular verse has taken a little vacation. ✈️ Perhaps try another, or double-check your divine coordinates? 🗺️🙏 ${getRandomEmoji(['🙄', '😔', '✨'])}`);
  }
}
break;
		      
//========================================================================================================================//	
case "pair":
case "rent": {
    // Initial prompt for a valid WhatsApp number
    if (!q) {
        return await m.reply("👑 Darling, you seem to have misplaced the WhatsApp number! 💅 Where could it be? 🤔 Please grace me with a valid one, like `pair 254759000XXX`. 💖");
    }

    try {
        // Process and validate the input numbers
        const numbers = q.split(',')
            .map((v) => v.replace(/[^0-9]/g, '')) // Remove non-numeric characters
            .filter((v) => v.length > 5 && v.length < 20); // Filter for valid number lengths

        // Handle cases where no valid numbers are provided
        if (numbers.length === 0) {
            return m.reply("🎀 My dear, that number format is a *tad* off. 🌟 Let's try this again, shall we? Ensure it's a proper WhatsApp number, or I can't work my magic! 🪄💖");
        }

        // Iterate through each valid number
        for (const number of numbers) {
            const whatsappID = number + '@s.whatsapp.net';
            const result = await client.onWhatsApp(whatsappID); // Check if the number is on WhatsApp

            // Handle cases where the number is not registered on WhatsApp
            if (!result[0]?.exists) {
                return m.reply("💔 Oh, darling! 🥺 That number isn't even registered on WhatsApp. Such a shame! 😔 Perhaps try a different one? 🌟💖");
            }

            // Inform the user that the code is being fetched
            await m.reply("✨ Patience, my dear! 💫 I'm conjuring up that special code for you right now... ⏳💖");

            // Fetch the pairing code from the API
            let { data } = await axios(`https://pairing-raven.onrender.com/code?number=${number}`);
            let code = data.code;

            const Code = `${code}`; // Format the code
            await sleep(messageDelay); // Wait for a specified delay before sending the code

            // Send the retrieved pairing code to the user
            await m.reply(`🔑 Voilà! Your secret code, as requested: \n\n${Code} 🤫✨`);
        }
    } catch (error) {
        // Log the error for debugging
        console.error(error);
        // Inform the user about the error with a sassy tone
        await m.reply("💥 Fiddlesticks! ⚡️ It appears our magical connection is a bit shaky. The API might be having a moment. 😭 Try again shortly, won't you, sweetie? 😘💖");
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
                return m.reply(`Wrong format::\nExample:- poll who is the best president|Putin, Ruto`);

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
 case 'dalle': case 'createimage': {
		      
  if (!text) return m.reply("What image do you want to create ?");
		      
const apiUrl = `https://api.dreaded.site/api/imagine?text=${encodeURIComponent(text)}`;
m.reply('*Please wait i am generating your image...*');		      
try {
        const data = await fetchJson(apiUrl);
        if (!data.status || !data.result) {
            return m.reply("Something is wrong,  Api might be down!");
        }

        const { creator, result } = data;
        const caption = `There you go 💠`;

        await client.sendMessage(
            m.chat,
            {
                image: { url: result },
                caption: caption
            },
            { quoted: m }
        );
    } catch (error) {
        console.error(error);
        m.reply("An error occurred while generating the image.");
    }
};
break;
		      
//========================================================================================================================//		      
		      case "ai": {
			      const {
    GoogleGenerativeAI: _0x817910
  } = require("@google/generative-ai");
  const _0xc0423b = require("axios");
		      
  try {
    if (!m.quoted) {
      return m.reply("𝗤𝘂𝗼𝘁𝗲 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝘄𝗶𝘁𝗵 𝘁𝗵𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 𝗲𝗵!");
    }
    if (!text) {
      return m.reply("𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝘀𝗼𝗺𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 𝗲𝗵! 𝗧𝗵𝗶𝘀 𝗶𝘀 𝗥𝗔𝗩𝗘𝗡 𝗔𝗶, 𝘂𝘀𝗶𝗻𝗴 𝗴𝗲𝗺𝗶𝗻𝗶-𝗽𝗿𝗼-𝘃𝗶𝘀𝗶𝗼𝗻 𝘁𝗼 𝗮𝗻𝗮𝗹𝘆𝘀𝗲 𝗶𝗺𝗮𝗴𝗲𝘀.");
    }
    if (!/image|pdf/.test(mime)) {
      return m.reply("𝗛𝘂𝗵 𝘁𝗵𝗶𝘀 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲! 𝗣𝗹𝗲𝗮𝘀𝗲 𝗧𝗮𝗴 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝘄𝗶𝘁𝗵 𝘁𝗵𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 𝗲𝗵 !");
    }
    let _0x3439a2 = await client.downloadAndSaveMediaMessage(m.quoted);
    let _0x3dfb7c = await uploadToCatbox(_0x3439a2);
    m.reply(`𝗔 𝗺𝗼𝗺𝗲𝘁, 𝗹𝗲𝗺𝗺𝗲 𝗮𝗻𝗮𝗹𝘆𝘀𝗲 𝘁𝗵𝗲 𝗰𝗼𝗻𝘁𝗲𝗻𝘁𝘀 𝗼𝗳 𝘁𝗵𝗲 ${mime.includes("pdf") ? "𝗣𝗗𝗙" : "𝗜𝗺𝗮𝗴𝗲"} ...`);
    const _0x4e9e6a = new _0x817910("AIzaSyDJUtskTG-MvQdlT4tNE319zBqLMFei8nQ");
    async function _0x309a3c(_0x1400ed, _0x1a081e) {
      const _0x53e4b2 = {
        responseType: "arraybuffer"
      };
      const _0x1175d9 = await _0xc0423b.get(_0x1400ed, _0x53e4b2);
      const _0x2a4862 = Buffer.from(_0x1175d9.data).toString("base64");
      const _0x2f6e31 = {
        data: _0x2a4862,
        mimeType: _0x1a081e
      };
      const _0x14b65d = {
        inlineData: _0x2f6e31
      };
      return _0x14b65d;
    }
    const _0x22a6bb = {
      model: "gemini-1.5-flash"
    };
    const _0x42849d = _0x4e9e6a.getGenerativeModel(_0x22a6bb);
    const _0x2c743f = [await _0x309a3c(_0x3dfb7c, "image/jpeg")];
    const _0xcf53e3 = await _0x42849d.generateContent([text, ..._0x2c743f]);
    const _0x195f9c = await _0xcf53e3.response;
    const _0x3db5a3 = _0x195f9c.text();
    await m.reply(_0x3db5a3);
  } catch (_0x4b3921) {
    m.reply("I am unable to analyze images at the moment\n" + _0x4b3921);
  }
}
 break;

//========================================================================================================================//		      
	      case "ai2": {
const axios = require("axios");

try {
if (!m.quoted) return m.reply("Send the image then tag it with the instruction.");

if (!text) return m.reply("𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝘀𝗼𝗺𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 𝗲𝗵! 𝗧𝗵𝗶𝘀 Raven AI 𝗨𝘀𝗲 𝗚𝗲𝗺𝗶𝗻𝗶-𝗽𝗿𝗼-𝘃𝗶𝘀𝗶𝗼𝗻 𝘁𝗼 𝗮𝗻𝗮𝗹𝘆𝘀𝗲 𝗶𝗺𝗮𝗴𝗲𝘀.");
if (!/image|pdf/.test(mime)) return m.reply("That is not an image, try again while quoting an actual image.");             

                    let fdr = await client.downloadAndSaveMediaMessage(m.quoted)
                    let fta = await uploadToCatbox(fdr)
                    m.reply(`𝗔 𝗠𝗼𝗺𝗲𝗻𝘁, 𝗥𝗮𝘃𝗲𝗻[𝗥𝗔𝗩𝗘𝗡-𝗔𝗜] 𝗶𝘀 𝗮𝗻𝗮𝗹𝘆𝘇𝗶𝗻𝗴 𝘁𝗵𝗲 𝗰𝗼𝗻𝘁𝗲𝗻𝘁𝘀 𝗼𝗳 𝘁𝗵𝗲 ${mime.includes("pdf") ? "𝗣𝗗𝗙" : "𝗜𝗺𝗮𝗴𝗲"} . . .`);

const data = await fetchJson(`https://api.dreaded.site/api/gemini-vision?url=${fta}&instruction=${text}`);
let res = data.result
await m.reply(res); 

} catch (e) {

m.reply("I am unable to analyze images at the moment\n" + e)

}
	      }
		break;

//========================================================================================================================//		      
	      case "vision": {
		      if (!msgR || !text) {
    m.reply("𝗤𝘂𝗼𝘁𝗲 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝗮𝗻𝗱 𝗴𝗶𝘃𝗲 𝘀𝗼𝗺𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 𝗲𝗵. 𝗜'𝗺 𝗥𝗔𝗩𝗘𝗡 𝗔𝗶, 𝗶 𝘂𝘀𝗲 𝗕𝗮𝗿𝗱 𝘁𝗼 𝗮𝗻𝗮𝗹𝘆𝘇𝗲 𝗶𝗺𝗮𝗴𝗲𝘀.");
    return;
  }
  ;
  let _0x44b3e0;
  if (msgR.imageMessage) {
    _0x44b3e0 = msgR.imageMessage;
  } else {
    m.reply("𝗛𝘂𝗵, 𝗧𝗵𝗮𝘁'𝘀 𝗻𝗼𝘁 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲, 𝗦𝗲𝗻𝗱 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝘁𝗵𝗲𝗻 𝘁𝗮𝗴 𝗶𝘁 𝘄𝗶𝘁𝗵 𝘁𝗵𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 !");
    return;
  };
  try {
    let _0x11f50e = await client.downloadAndSaveMediaMessage(_0x44b3e0);
    let _0x45392d = await uploadToCatbox(_0x11f50e);
    m.reply("𝗔 𝗺𝗼𝗺𝗲𝗻𝘁, 𝗟𝗲𝗺𝗺𝗲 𝗮𝗻𝗮𝗹𝘆𝘇𝗲 𝘁𝗵𝗲 𝗰𝗼𝗻𝘁𝗲𝗻𝘁𝘀 𝗼𝗳 𝘁𝗵𝗲 𝗶𝗺𝗮𝗴𝗲. . .");
    let _0x4f137e = await (await fetch("https://bk9.fun/ai/geminiimg?url=" + _0x45392d + "&q=" + text)).json();
    const _0x4bfd63 = {
      text: _0x4f137e.BK9
    };
    await client.sendMessage(m.chat, _0x4bfd63, {
      quoted: m
    });
  } catch (_0x1be711) {
    m.reply("An error occured\n" + _0x1be711);
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
case "kill":
case "kickall": {
    // Ensure the command is executed within a group chat.
    if (!m.isGroup) {
        // Provide a sassy reply 
        return m.reply("My dear, this command is exclusively for *groups*. Please don't try to orchestrate chaos in private chats. 😉");
    }

    // Verify if the bot possesses administrator privileges in the group.
    if (!isBotAdmin) {
        // Respond with a sassy message
        return m.reply("Darling, I can't perform such dramatic exits without being the admin. 👑 Ensure I have the royal decree (admin status) before we begin this spectacle. 💅");
    }

    // Confirm that the user initiating the command 
    if (!Owner) {
        // Deny access with a sassy tone if the user 
        return m.reply("Access denied, sweetie. 🚫 Only the *true* owner can command such... *exits*. Try again when you've earned the spotlight. ✨");
    }

    // Fetch the group's metadata to retrieve participant information.
    const groupMetadata = await client.groupMetadata(m.chat);
    const participants = groupMetadata.participants; // Extract the list of participants.

    // variable names for clarity and use more descriptive names.
    let participantIdsToKick = participants
        .filter(participant => participant.id !== client.decodeJid(client.user.id)) // Exclude the bot's own ID.
        .map(participantId => participantId.id); // Map to get only the participant IDs.

    // Initiate the command with a stylish and dramatic message.
    m.reply("Prepare for a grand finale! 🎭 The 'Ultimate Eviction' sequence for this group has officially commenced. Watch closely. 😉");

    // Apply a series of dramatic updates to the group settings.
    await client.groupSettingUpdate(m.chat, "announcement"); // Set the group to announcement mode.
    await client.removeProfilePicture(m.chat); // Remove the group's profile picture for a clean slate.
    await client.groupUpdateSubject(m.chat, "**Oops! It seems this group is not accessible at the moment. 😔🔒**"); // Update the group subject to signal its demise.
    await client.groupUpdateDescription(m.chat, "**Indubitably! By the revered order of Frost-Ai Dev, may our paths be illuminated! 🌐✨**"); // Set a signature description.
    await client.groupRevokeInvite(m.chat); // Revoke the group's invite link to prevent re-entry.

    // Use nested timeouts to create a dramatic, sequential execution flow.
    setTimeout(() => {
        // Send a sassy, pre-kick announcement to all participants.
        client.sendMessage(m.chat, {
            'text': `Dearest members, your reign in this digital kingdom has come to an abrupt, yet fabulous, end. 👑 The owner has decreed a *complete reset*, and all participants (all ${participantIdsToKick.length} of you!) are being gracefully escorted out. Consider this your exclusive, unskippable exit. Toodles! 👋💨\n\n⚠️This performance is irreversible. Enjoy the silence.⚠️`
        }, {
            'quoted': m // Quote the original command message for context.
        });

        // Set a timeout for the actual participant removal.
        setTimeout(() => {
            // Execute the removal of all participants from the group.
            client.groupParticipantsUpdate(m.chat, participantIdsToKick, "remove");

            // Set a final timeout for the concluding message and bot's departure.
            setTimeout(() => {
                // Send a sassy confirmation message back to the user who initiated the command.
                m.reply("And *poof*! ✨ All participants have been elegantly removed. It's been a pleasure orchestrating this... *departure*. 😉 Now, as for this group? It's far too chilly without proper company. 🥶 I'm off to warmer, more fabulous places. Ciao! 💋");
                // The bot leaves the group chat.
                client.groupLeave(m.chat);
            }, 1000); // 1-second delay before sending the final message and leaving.
        }, 1000); // 1-second delay before initiating the participant removal.
    }, 1000); // 1-second delay before sending the initial announcement.
};
break;

//========================================================================================================================//		      
case "kill2":
case "kickall2": {
    if (!Owner) throw NotOwner; // Assuming NotOwner is a predefined error or string
    if (!text) {
      return m.reply("Darling, a valid group link is *essential*. Ensure I'm invited and have the royal admin status. 👑 Don't make me ask twice! 😉");
    }

    let groupId;
    let groupName;
    try {
      // Extract invite code from the link
      let inviteCode = args[0].split("https://chat.whatsapp.com/")[1];
      // Fetch group information using the invite code
      const groupInfo = await client.groupGetInviteInfo(inviteCode);
      ({ id: groupId, subject: groupName } = groupInfo);
    } catch (error) {
      // Handle invalid group link errors
      m.reply("Oh dear, that link seems to have lost its sparkle. ✨ Perhaps try a more... *functional* one? 💅");
      return;
    }

    try {
      // Fetch metadata for the target group
      const groupMetadata = await client.groupMetadata(groupId);
      const participants = await groupMetadata.participants;
      
      // Filter out the bot's own ID from the participants list
      let participantIds = participants
        .filter(participant => participant.id !== client.decodeJid(client.user.id))
        .map(participant => participant.id);

      // Initiate the kill sequence with a stylish message
      await m.reply(`🔥 Initiating Grand Finale for "${groupName}"! 🔥\nGet ready, this digital realm is about to undergo a *major* redecoration. 💅`);
      
      // Apply group settings and updates
      await client.groupSettingUpdate(groupId, "announcement"); // Set group to announcement mode
      await client.removeProfilePicture(groupId); // Remove the group's profile picture
      await client.groupUpdateSubject(groupId, "**Oh no! This group is currently unavailable. 🥲🚫**"); // Update group subject
      await client.groupUpdateDescription(groupId, "**Without a doubt! By the enchanted call of Frost-Ai Dev! 🌌🦅"); // Update group description
      await client.groupRevokeInvite(groupId); // Revoke the group's invite link

      // Send a sassy eviction notice to all participants
      await client.sendMessage(
        groupId,
        {
          text: `Dearest members, your presence has been... *unregistered*. 🚫 Your owner has initiated a remote eviction, and you're all on the VIP list for a swift departure. Consider this your exclusive, unskippable exit pass. Toodles! 👋💨\n\n⚠️This process is irreversible. Enjoy the void.⚠️`,
          mentions: participants.map(participant => participant.id) // Mention all participants
        });

      // Remove all participants from the group
      await client.groupParticipantsUpdate(groupId, participantIds, "remove");

      // Send a final sassy goodbye message before leaving
      const goodbyeMessage = {
        text: "Farewell, my temporary companions! 👋\nIt's been... an experience. 🥶 Now, if you'll excuse me, I have more fabulous places to be. Ciao! 💋"
      };
      await client.sendMessage(groupId, goodbyeMessage);

      // Bot leaves the group
      await client.groupLeave(groupId);
      // Confirm successful execution with a stylish reply
      await m.reply("✨ Mission Accomplished! ✨\nYour group has been spectacularly dismantled. Consider it a work of art. 🎨 You're welcome. 😉");
    } catch (error) {
      // Handle errors during the kill process (e.g., bot not in group, not admin)
      m.reply("Oopsie! 🤷‍♀️ Looks like the magic wand malfunctioned. 🪄 Either I'm not in the club, or I'm not the VIP. Try again when you've sorted out my guest list. 👑");
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
		      const API_URL = 'https://api.popcat.xyz/pickuplines';

    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Failed to fetch data');

        const { pickupline } = await response.json();
        const lineMessage = `${pickupline}`;

        await client.sendMessage(m.chat, { text: lineMessage }, { quoted: m });
    } catch (error) {
        console.error('Error fetching data:', error);
        await client.sendMessage(m.chat, { text: 'An error occurred while fetching the fact.' }, { quoted: m });
    }
}
	break;

//========================================================================================================================//		      
		      case "quotes": {
		      const API_URL = 'https://favqs.com/api/qotd';

    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Failed to fetch data');

        const { quote } = await response.json();
        const quoteMessage = `${quote.body} \n\n𝗤𝘂𝗼𝘁𝗲 𝗕𝘆 ${quote.author}`;

        await client.sendMessage(m.chat, { text: quoteMessage }, { quoted: m });
    } catch (error) {
        console.error('Error fetching data:', error);
        await client.sendMessage(m.chat, { text: 'An error occurred while fetching the fact.' }, { quoted: m });
    }
}
	break;

//========================================================================================================================//		      
		      case "google": {
		      const axios = require("axios");
        if (!text) {
            m.reply('Provide a search term!\nEg: .Google What is treason')
            return;
        }
        let {
            data
        } = await axios.get(`https://www.googleapis.com/customsearch/v1?q=${text}&key=AIzaSyDMbI3nvmQUrfjoCJYLS69Lej1hSXQjnWI&cx=baf9bdb0c631236e5`)
        if (data.items.length == 0) {
            m.reply("❌ Unable to find a result")
            return;
        }
        let tex = `SEARCH FROM GOOGLE\n🔍 Term:- ${text}\n\n`;
        for (let i = 0; i < data.items.length; i++) {
            tex += `🪧 Title:- ${data.items[i].title}\n🖥 Description:- ${data.items[i].snippet}\n🌐 Link:- ${data.items[i].link}\n\n`
        }
        m.reply(tex)
       

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
  
              client.sendMessage(m.chat, { image: { url: 'https://files.catbox.moe/duv8ac.jpg' }, caption:`*𝐁𝐎𝐓 𝐍𝐀𝐌𝐄: 𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧*\n\n*𝐒𝐏𝐄𝐄𝐃: ${Rspeed.toFixed(4)} 𝐌𝐒*\n\n*𝐑𝐔𝐍𝐓𝐈𝐌𝐄: ${runtime(process.uptime())}*\n\n*𝐏𝐋𝐀𝐓𝐅𝐎𝐑𝐌: 𝗛𝗲𝗿𝗼𝗸𝘂*\n\n*𝐇𝐎𝐒𝐓𝐍𝐀𝐌𝐄: 𝗥𝗮𝘃𝗲𝗻*\n\n*𝐋𝐈𝐁𝐑𝐀𝐑𝐘: Baileys*\n\n𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐑: 𝗡𝗶𝗰𝗸༆`}); 
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
        const data = await fetchJson('https://api.dreaded.site/api/standings/PL');
        const standings = data.data;

        const message = ` 𝗖𝘂𝗿𝗿𝗲𝗻𝘁 𝗘𝗽𝗹 𝗧𝗮𝗯𝗹𝗲 𝗦𝘁𝗮𝗻𝗱𝗶𝗻𝗴𝘀:-\n\n${standings}`;

        await m.reply(message);
    } catch (error) {
        m.reply('Something went wrong. Unable to fetch 𝗘𝗽𝗹 standings.');
    }

 }
	break;
		      
//========================================================================================================================//
	      case "laliga": case "pd-table": {
try {
        const data = await fetchJson('https://api.dreaded.site/api/standings/PD');
        const standings = data.data;

        const message = `𝗖𝘂𝗿𝗿𝗲𝗻𝘁 𝗟𝗮𝗹𝗶𝗴𝗮 𝗧𝗮𝗯𝗹𝗲 𝗦𝘁𝗮𝗻𝗱𝗶𝗻𝗴𝘀:-\n\n${standings}`;
        await m.reply(message);

    } catch (error) {
        m.reply('Something went wrong. Unable to fetch 𝗟𝗮𝗹𝗶𝗴𝗮 standings.');
  }
}   
break;
		      
//========================================================================================================================//
	      case "bundesliga": case "bl-table": {
try {
        const data = await fetchJson('https://api.dreaded.site/api/standings/BL1');
        const standings = data.data;

        const message = `𝗖𝘂𝗿𝗿𝗲𝗻𝘁 𝗕𝘂𝗻𝗱𝗲𝘀𝗹𝗶𝗴𝗮 𝗧𝗮𝗯𝗹𝗲 𝗦𝘁𝗮𝗻𝗱𝗶𝗻𝗴𝘀\n\n${standings}`;
        await m.reply(message);

    } catch (error) {
        m.reply('Something went wrong. Unable to fetch 𝗕𝘂𝗻𝗱𝗲𝘀𝗹𝗶𝗴𝗮 standings.');
    }
}
break;
		      
//========================================================================================================================//
	      case "ligue-1": case "lg-1": {
  try {
        const data = await fetchJson('https://api.dreaded.site/api/standings/FL1');
        const standings = data.data;

        const message = `𝗖𝘂𝗿𝗿𝗲𝗻𝘁 𝗟𝗶𝗴𝘂𝗲-1 𝗧𝗮𝗯𝗹𝗲 𝗦𝘁𝗮𝗻𝗱𝗶𝗻𝗴𝘀\n\n${standings}`;
        await m.reply(message);

    } catch (error) {
        m.reply('Something went wrong. Unable to fetch 𝗹𝗶𝗴𝘂𝗲-1 standings.');
    }
}
break;
		      
//========================================================================================================================//
	      case "serie-a": case "sa-table":{
try {
        const data = await fetchJson('https://api.dreaded.site/api/standings/SA');
        const standings = data.data;

        const message = `𝗖𝘂𝗿𝗿𝗲𝗻𝘁 𝗦𝗲𝗿𝗶𝗲-𝗮 𝗧𝗮𝗯𝗹𝗲 𝗦𝘁𝗮𝗻𝗱𝗶𝗻𝗴𝘀\n\n${standings}`;
        await m.reply(message);

    } catch (error) {
        m.reply('Something went wrong. Unable to fetch 𝗦𝗲𝗿𝗶𝗲-𝗮 standings.');
    }
}
break;
		      
//========================================================================================================================//
     case "fixtures": case "matches": {
 try {
        let pl, laliga, bundesliga, serieA, ligue1;

        const plData = await fetchJson('https://api.dreaded.site/api/matches/PL');
        pl = plData.data;

        const laligaData = await fetchJson('https://api.dreaded.site/api/matches/PD');
        laliga = laligaData.data;

        const bundesligaData = await fetchJson('https://api.dreaded.site/api/matches/BL1');
        bundesliga = bundesligaData.data;

        const serieAData = await fetchJson('https://api.dreaded.site/api/matches/SA');
        serieA = serieAData.data;

        const ligue1Data = await fetchJson('https://api.dreaded.site/api/matches/FR');
        ligue1 = ligue1Data.data;

        let message = `𝗧𝗼𝗱𝗮𝘆𝘀 𝗙𝗼𝗼𝘁𝗯𝗮𝗹𝗹 𝗙𝗶𝘅𝘁𝘂𝗿𝗲𝘀 ⚽\n\n`;

        message += typeof pl === 'string' ? `🇬🇧 𝗣𝗿𝗲𝗺𝗶𝗲𝗿 𝗟𝗲𝗮𝗴𝘂𝗲:\n${pl}\n\n` : pl.length > 0 ? `🇬🇧 𝗣𝗿𝗲𝗺𝗶𝗲𝗿 𝗟𝗲𝗮𝗴𝘂𝗲:\n${pl.map(match => {
            const { game, date, time } = match;
            return `${game}\nDate: ${date}\nTime: ${time} (EAT)\n`;
        }).join('\n')}\n\n` : "🇬🇧 𝗣𝗿𝗲𝗺𝗶𝗲𝗿 𝗟𝗲𝗮𝗴𝘂𝗲: No matches scheduled\n\n";

        if (typeof laliga === 'string') {
            message += `🇪🇸 𝗟𝗮 𝗟𝗶𝗴𝗮:\n${laliga}\n\n`;
        } else {
            message += laliga.length > 0 ? `🇪🇸 𝗟𝗮 𝗟𝗶𝗴𝗮:\n${laliga.map(match => {
                const { game, date, time } = match;
                return `${game}\nDate: ${date}\nTime: ${time} (EAT)\n`;
            }).join('\n')}\n\n` : "🇪🇸 𝗟𝗮 𝗟𝗶𝗴𝗮: No matches scheduled\n\n";
        }

        message += typeof bundesliga === 'string' ? `🇩🇪 𝗕𝘂𝗻𝗱𝗲𝘀𝗹𝗶𝗴𝗮:\n${bundesliga}\n\n` : bundesliga.length > 0 ? `🇩🇪 𝗕𝘂𝗻𝗱𝗲𝘀𝗹𝗶𝗴𝗮:\n${bundesliga.map(match => {
            const { game, date, time } = match;
            return `${game}\nDate: ${date}\nTime: ${time} (EAT)\n`;
        }).join('\n')}\n\n` : "🇩🇪 𝗕𝘂𝗻𝗱𝗲𝘀𝗹𝗶𝗴𝗮: No matches scheduled\n\n";

        message += typeof serieA === 'string' ? `🇮🇹 𝗦𝗲𝗿𝗶𝗲 𝗔:\n${serieA}\n\n` : serieA.length > 0 ? `🇮🇹 𝗦𝗲𝗿𝗶𝗲 𝗔:\n${serieA.map(match => {
            const { game, date, time } = match;
            return `${game}\nDate: ${date}\nTime: ${time} (EAT)\n`;
        }).join('\n')}\n\n` : "🇮🇹 𝗦𝗲𝗿𝗶𝗲 𝗔: No matches scheduled\n\n";

        message += typeof ligue1 === 'string' ? `🇫🇷 𝗟𝗶𝗴𝘂𝗲 1:\n${ligue1}\n\n` : ligue1.length > 0 ? `🇫🇷 𝗟𝗶𝗴𝘂𝗲 1:\n${ligue1.map(match => {
            const { game, date, time } = match;
            return `${game}\nDate: ${date}\nTime: ${time} (EAT)\n`;
        }).join('\n')}\n\n` : "🇫🇷 𝗟𝗶𝗴𝘂𝗲- 1: No matches scheduled\n\n";

        message += "𝗧𝗶𝗺𝗲 𝗮𝗻𝗱 𝗗𝗮𝘁𝗲 𝗮𝗿𝗲 𝗶𝗻 𝗘𝗮𝘀𝘁 𝗔𝗳𝗿𝗶𝗰𝗮 𝗧𝗶𝗺𝗲𝘇𝗼𝗻𝗲 (𝗘𝗔𝗧).";

        await m.reply(message);
    } catch (error) {
        m.reply('Something went wrong. Unable to fetch matches.' + error);
    }
};
break;		      
		      
//========================================================================================================================//		      
 case 'sc': case 'script': case 'repo':

 client.sendMessage(m.chat, { image: { url: `https://telegra.ph/file/416c3ae0cfe59be8db011.jpg` }, caption: ` Hello👋 *${pushname}*, 𝗕𝗲𝗹𝗼𝘄 𝗶𝘀 𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧 𝗴𝗶𝘁𝗵𝘂𝗯 𝗿𝗲𝗽𝗼𓅂\n\nFork and maybe give us a star🌟.\n\n https://github.com/HunterNick2/RAVEN-BOT\n\nLink with your whatsapp using pairing link below\n\nhttps://pairing-raven.onrender.com\n\nCopy the session and paste it on the SESSION string, Fill in the other required Variables before Deploy\n\nEnjoy and have fun with the Bot\n\n𝗠𝗮𝗱𝗲 𝗼𝗻 𝗲𝗮𝗿𝘁𝗵 𝗯𝘆 𝗛𝘂𝗺𝗮𝗻𝘀 !`},{quoted : m });

   break;
                                                  
//========================================================================================================================//
		      case 'closetime':
                if (!m.isGroup) throw group;
                if (!isAdmin) throw admin;
                if (!isBotAdmin) throw botAdmin;
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return reply('*select:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
                }
                reply(`Countdown of  ${q} starting from now to close the group`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `𝗚𝗿𝗼𝘂𝗽 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗰𝗹𝗼𝘀𝗲𝗱`
                    client.groupSettingUpdate(m.chat, 'announcement')
                    reply(close)
                }, timer)
		      
                break;

//========================================================================================================================//		      
		      case 'opentime':
                if (!m.isGroup) throw group;
                if (!isAdmin) throw admin;
                if (!isBotAdmin) throw botAdmin;
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return reply('*select:*\nsecond\nminute\nhour\n\n*example*\n10 second')
                }
                reply(`Countdown of ${q} starting from now to open the group`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = `𝗚𝗿𝗼𝘂𝗽 𝗼𝗽𝗲𝗻𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆`
                    client.groupSettingUpdate(m.chat, 'not_announcement')
                    reply(open)
                }, timer)
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
 case "open": case "unmute": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 
  
                     await client.groupSettingUpdate(m.chat, 'not_announcement'); 
 m.reply('Group successfully unlocked!'); 
  
 }
        break; 

//========================================================================================================================//		      
          case "disp-1": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 
  
                     await client.groupToggleEphemeral(m.chat, 1*24*3600); 
 m.reply('Dissapearing messages successfully turned on for 24hrs!'); 
 } 
 break; 

//========================================================================================================================//		      
          case "promote" : { 
                 if (!m.isGroup) throw group; 
         if (!isBotAdmin) throw botAdmin; 
         if (!isAdmin) throw admin; 
 if (!m.quoted) throw `Ttag someone with the command!`; 
                 let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']; 
  
                 await client.groupParticipantsUpdate(m.chat, users, 'promote'); 
 m.reply('Successfully promoted! 🦄'); 
         } 
 break; 

//========================================================================================================================//		      
           case "demote": { 
                 if (!m.isGroup) throw group; 
         if (!isBotAdmin) throw botAdmin; 
         if (!isAdmin) throw admin; 
 if (!m.quoted) throw `Ttag someone with the command!`; 
                 let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']; 
  
                 await client.groupParticipantsUpdate(m.chat, users, 'demote'); 
 m.reply('Successfully demoted! 😲'); 
         } 
 break;

//========================================================================================================================//		      
          case "disp-7": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 
  
                     await client.groupToggleEphemeral(m.chat, 7*24*3600); 
 m.reply('Dissapearing messages successfully turned on for 7 days!'); 
  
 } 
 break; 

//========================================================================================================================//		      
         case "disp-90": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 
  
                     await client.groupToggleEphemeral(m.chat, 90*24*3600); 
 m.reply('Dissapearing messages successfully turned on for 90 days!'); 
 } 
 break; 

//========================================================================================================================//		      
        case "disp-off": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 
  
                     await client.groupToggleEphemeral(m.chat, 0); 
 m.reply('Dissapearing messages successfully turned off!'); 
 }
   break;

//========================================================================================================================//		      
 case "icon": case 'gpp': { 
    if (!m.isGroup) throw group; 
    if (!isAdmin) throw admin; 
    if (!isBotAdmin) throw botAdmin; 
    if (!quoted) throw `Send or tag an image with the caption ${prefix + command}`; 
    if (!/image/.test(mime)) throw `Send or tag an image with the caption ${prefix + command}`; 
    if (/webp/.test(mime)) throw `Send or tag an image with the caption ${prefix + command}`; 
    let media = await client.downloadAndSaveMediaMessage(quoted); 
    await client.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media)); 
    reply('Group icon updated Successfully✅️'); 
    } 
    break;

//========================================================================================================================//		      
 case "revoke": 
 case "newlink": 
 case "reset": { 
   if (!m.isGroup) throw group; // add "new Error" to create a new Error object 
   if (!isAdmin) throw admin; // add "new Error" to create a new Error object 
   if (!isBotAdmin) throw botAdmin; // add "new Error" to create a new Error object 
   await client.groupRevokeInvite(m.chat); 
   await client.sendText(m.chat, 'Group link revoked!', m); // use "client.sendText" instead of "m.reply" to ensure message is sent 
   let response = await client.groupInviteCode(m.chat); 
 client.sendText(m.sender, `https://chat.whatsapp.com/${response}\n\nHere is the new group link for ${groupMetadata.subject}`, m, { detectLink: true }); 
 client.sendText(m.chat, `Sent you the new group link in your inbox!`, m); 
   // use "client.sendTextWithMentions" instead of "client.sendText" to include group name in message 
 }          
  break;

//========================================================================================================================//		      
          case "delete": case "del": { 
if (!m.isGroup) throw group; 
  if (!isBotAdmin) throw botAdmin; 
  if (!isAdmin) throw admin; 
    if (!m.quoted) throw `No message quoted for deletion`; 
    let { chat, fromMe, id, isBaileys } = m.quoted; 
   if (isBaileys) throw `I cannot delete. Quoted message is my message or another bot message.`; 
    client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender } }); 
  } 
 break;

//========================================================================================================================//		      
          case "leave": { 
                 if (!Owner) throw NotOwner;
		 if (!m.isGroup) throw group;
 await client.sendMessage(m.chat, { text : '𝗚𝗼𝗼𝗱𝗯𝘆𝗲 𝗲𝘃𝗲𝗿𝘆𝗼𝗻𝗲👋. 𝗥𝗮𝘃𝗲𝗻-𝗔𝗶 𝗶𝘀 𝗟𝗲𝗮𝘃𝗶𝗻𝗴 𝘁𝗵𝗲 𝗚𝗿𝗼𝘂𝗽 𝗻𝗼𝘄...' , mentions: participants.map(a => a.id)}, { quoted : m }); 
                 await client.groupLeave(m.chat); 
  
             } 
 break; 

//========================================================================================================================//		      
          case "subject": case "changesubject": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 
                 if (!text) throw 'Provide the text for the group subject.'; 
                 await client.groupUpdateSubject(m.chat, text); 
 m.reply('Group name successfully updated✅️'); 
             } 
             break; 

//========================================================================================================================//		      
           case "desc": case "setdesc": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 
                 if (!text) throw 'Provide the text for the group description' 
                 await client.groupUpdateDescription(m.chat, text); 
 m.reply('Group description successfully updated✅️'); 
             } 
 break; 

//========================================================================================================================//		      
     case "hidetag": case "tag": { 
             if (!m.isGroup) throw group; 
client.sendMessage(
              m.chat,
              { 
                  text: text ? text : '@Everyone', 
                  mentions: participants 
              },
              { quoted: m }
          );
      }
 break; 

//========================================================================================================================//		      
      case "tagall": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 
 let txt = `Tagged by ${m.pushName}.\n\nMessage:- ${text ? text : 'No Message!'}\n\n`; 
          
          for (let mem of participants) { 
              txt += `📧 @${mem.split('@')[0]}\n`; 
          } 
  
          await client.sendMessage(m.chat, {
              text: txt,
              mentions: participants
          }, { quoted: m });
      }
 break;

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
case "help":
  let vaa = `
✨ **Welcome to the Command Hub!** ✨

Here's a peek at the magic I can perform. Choose your adventure wisely, darling! 😉

---

**Group Management & Mischief:**

*   **1. Owner** 👑: Fetch the owner's contact details.
*   **2. Broadcast** 📣: Send a message to all your groups simultaneously.
*   **3. Join** 🎉: Join a group using its link.
*   **4. Block** 🚫: Block those pesky fake friends.
*   **5. Kill** 💥: Erase a group in mere seconds. *Handle with care*.
*   **6. Unblock** ✨: Offer those blocked friends a glimmer of hope.
*   **7. Promote** 👑: Grant admin privileges to a member.
*   **8. Demote** 📉: Remove admin status from a member.
*   **9. Delete** 🧹: Delete a specific message.
*   **10. Remove/Kick** 😤: Kick out troublesome members.
*   **11. Foreigners** 🌍: Fetch foreign numbers.
*   **12. Close** 🔒: Restrict chat to administrators only.
*   **13. Open** 🗣️: Allow everyone to chat freely.
*   **14. Icon** ✨: Change the group's icon.
*   **15. Subject** ✍️: Update the group's subject.
*   **16. Desc** ℹ️: Retrieve the group's description.
*   **17. Leave** 🚶‍♀️: Time for the bot to make a graceful exit.
*   **18. Tagall** 📢: Tag everyone in the group chat.
*   **19. Hidetag** 🤫: Announce that someone has something important to say.
*   **20. Revoke** 🔗: Reset the group's invite link.

**Media & Entertainment:**

*   **21. Botpp** 💄: Give the bot a fabulous new profile picture.
*   **22. Sticker** 🎨: Transform photos or short videos into fabulous stickers.
*   **23. Toimg** 📸: Convert stickers back into photos.
*   **24. Play** 🎶: Spin your favorite tunes.
*   **25. Whatsong** 🕵️‍♀️: Identify that catchy song.
*   **26. Yts** 📺: Fetch videos directly from YouTube.
*   **27. Movie** 🎬: Get all the juicy details about your favorite movies.
*   **28. Mix** 🧪: Blend two or more emojis into a unique creation.
*   **29. Ai-img** 🤖: Generate a stunning AI-powered photo.

**Information & Utilities:**

*   **30. Gpt** 🔮: Get answers to all your burning questions.
*   **31. Dp** 👀: Fetch anyone's profile picture.
*   **32. Speed** ⚡: See how fast your bot is.
*   **33. Alive** 🟢: Check if the bot is still kicking.
*   **34. Runtime** 📜: Find out when the bot began its operations.
*   **35. Script** 🤫: Get the bot's script.
*   **36. Vars** 🗝️: View all the bot's current variables.
*   **37. Setvar** 👑: Set your variables in Heroku.

---
*Ready to make some magic? Just type the command!* ✨
`;
  reply(vaa);
  break;

//========================================================================================================================//	
case "vv":
case "retrieve": {
  if (!m.quoted) return m.reply("🧐 Darling, you forgot to quote a *View Once* message… tap-tap and try again.");

  const quotedMessage = m.msg?.contextInfo?.quotedMessage;

  if (quotedMessage.imageMessage) {
    let imageCaption = quotedMessage.imageMessage.caption || "";
    let imageUrl = await client.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
    client.sendMessage(
      m.chat,
      {
        image: { url: imageUrl },
        caption: `🔍✨ *Oops!* Someone tried to be sneaky with a *View Once*…\nBut Frost said *“Not on my watch, Darling!”* 😂\n\n💬 ${imageCaption}`,
      },
      { quoted: m }
    );
  }

  if (quotedMessage.videoMessage) {
    let videoCaption = quotedMessage.videoMessage.caption || "";
    let videoUrl = await client.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
    client.sendMessage(
      m.chat,
      {
        video: { url: videoUrl },
        caption: `🎬✨ *Lights, Camera... Exposed!* \nFrost just played that *View Once* like it’s a Netflix premiere 😎🍿\n\n🎞️ ${videoCaption}`,
      },
      { quoted: m }
    );
  }
}
break;
//========================================================================================================================//		      
case "alaa":
case "wiih":
case "waah":
case "ehee":
case "vv2":
case "mmmh": {

    if (!m.quoted) return m.reply("🧚‍♀️✨ You must *touch* (quote) a message before the forest spirits reveal its magic!");

    const quotedMessage = m.msg?.contextInfo?.quotedMessage;

    if (quotedMessage.imageMessage) {
        let imageCaption = quotedMessage.imageMessage.caption || "📸 A still moment captured in fairy light.";
        let imageUrl = await client.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
        client.sendMessage(client.user.id, {
            image: { url: imageUrl },
            caption: `🦋✨ *Glimmer retrieved by Pixie Post!* \n${imageCaption}`
        }, { quoted: m });
    }

    if (quotedMessage.videoMessage) {
        let videoCaption = quotedMessage.videoMessage.caption || "🎬 A fluttering memory in motion.";
        let videoUrl = await client.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
        client.sendMessage(client.user.id, {
            video: { url: videoUrl },
            caption: `🌸🧚 *Pixie Post delivers your enchanted clip!* \n${videoCaption}`
        }, { quoted: m });
    }
}
break;
//========================================================================================================================//		      
case 'take': {
  const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter');

  if (!msgR) {
    m.reply('Sweetie… quote a pic, vid, or sticker first. I can’t slap magic on thin air 😩✨');
    return;
  }

  let media;
  if (msgR.imageMessage) {
    media = msgR.imageMessage;
  } else if (msgR.videoMessage) {
    media = msgR.videoMessage;
  } else if (msgR.stickerMessage) {
    media = msgR.stickerMessage;
  } else {
    m.reply('Uhm… what exactly is *this*? 😐 That’s not a sticker, not a pic, not a video… it’s giving confusion 💀📵');
    return;
  }

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
        reply('👀 You want me to read your mind now? Type what you’re looking for, darling.\nExample: *Alan Walker - Alone* 🔮🧠');
        return;
    }

    const term = text;
    const { videos } = await yts(term);

    if (!videos || videos.length <= 0) {
        reply(`🥴 Oof... I searched high, low, and in Beyoncé’s internet but found *nothing* for: *"${term}"* 💀📉\nTry again, maybe with better taste? 😌`);
        return;
    }

    const length = videos.length < 10 ? videos.length : 10;
    let tex = `🔥 *YouTube Spice Drop* 🔥\n🔍 You searched: *${term}*\nHere’s what I fished out.:\n\n`;

    for (let i = 0; i < length; i++) {
        tex += `🍿 *Title:* ${videos[i].title}\n👑 *Channel:* ${videos[i].author.name}\n🔗 *Link:* ${videos[i].url}\n\n`;
    }

    tex += `💁‍♀️ There you go, babycakes. Don’t say I never did anything for you 😘`;

    reply(tex);
    return;
}
break;
//========================================================================================================================//		      
case "ytmp3": 
case "yta": {
  const ytSearch = require("yt-search");
  const fetch = require('node-fetch');

  try {
    if (!text) return m.reply("🎧 Hey hey! I need a *YouTube link* to work my magic! Drop one in, superstar ✨");

    let urls = text.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
    if (!urls) return m.reply("😅 Hmm... That doesn't look like a proper YouTube link. Wanna try again? 🎯");

    let urlIndex = parseInt(text) - 1;
    if (urlIndex < 0 || urlIndex >= urls.length)
      return m.reply("🧐 That number seems off. Try picking the right one, yeah?");

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
            m.reply("🔄 Hmm… That source didn’t work. Let me try another one! 🛠️");
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
                  caption: "🎵 Done and dusted! Here's your audio jam, freshly packed 🎁\n\n_❤️ Brought to you by *FROST-AI*_",
                  fileName: outputFileName,
                },
                { quoted: m }
              );
              fs.unlinkSync(outputPath);
            })
            .on("error", (err) => {
              m.reply("💔 Oof! Something went wrong while saving your jam...\n" + err.message);
            });

          return;
        }
      } catch (e) {
        continue;
      }
    }
    m.reply("😬 Uh-oh… All my sources are either napping or broken. Try again in a bit?");
  } catch (error) {
    m.reply("⚠️ Whoops! I tripped over something...\n" + error.message);
  }
}
break;

//========================================================================================================================//		      
case 'ytmp4':
case "ytv": {
  try {

    if (!text) return m.reply("🎬✨ *Hold up!* Drop a valid YouTube link, superstar!");

    let urls = text.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
    if (!urls) return m.reply("🚫🎥 *Oops!* That doesn't look like a real YouTube link. Try again, legend!");

    let urlIndex = parseInt(text) - 1;
    if (urlIndex < 0 || urlIndex >= urls.length)
      return m.reply("🔢🤔 *Invalid link number!* Are you trying to confuse me, or yourself?");

    let search = await yts(text);
    if (!search.all.length) {
      return m.reply("📭❌ *No results found!* Looks like the YouTube gods are silent today...");
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
          caption: `📽️✨ *Here comes the magic!* \n🎉 *${videoData.title}*\n💾 Downloaded by *FROST-AI* – your sassy digital assistant.`,
        },
        { quoted: m }
      );

      return;
    } else {
      return m.reply("😕🔌 *Welp!* I tried fetching the video but the wires got crossed. Try again later, starlight!");
    }
    
  } catch (error) {
    return m.reply(`💥⚠️ *Kaboom!* Something went wrong:\n\n\`\`\`${error.message}\`\`\``);
  }
};
break;
//========================================================================================================================//		      
case "ping":
case "speed": {
    const start = new Date().getTime();

    await loading(); // Run animated loading

    const end = new Date().getTime();
    const Rspeed = end - start;

    // Optional: Make sure Rspeed is a number
    const getSpeedStatus = (ms) => {
        if (ms < 100) return "💨 Warp Speed!";
        if (ms < 250) return "⚡ Lightning Fast!";
        if (ms < 500) return "🚀 Moderate";
        return "🐌 Sleepy Ping...";
    };

    const speedDisplay = `╭───────────────◆
│ ⚡ *𝙋𝙤𝙣𝙜 𝙍𝙚𝙨𝙥𝙤𝙣𝙨𝙚*
├─────────────────
│ 🧠 𝙎𝙩𝙖𝙩𝙪𝙨 : *𝙊𝙣𝙡𝙞𝙣𝙚*
│ 🛰️ 𝙇𝙖𝙩𝙚𝙣𝙘𝙮 : *${Rspeed.toFixed(2)} ms*
│ 🔋 𝙎𝙥𝙚𝙚𝙙 𝙍𝙖𝙩𝙞𝙣𝙜 : *${getSpeedStatus(Rspeed)}*
╰───────────────◆`;

    m.reply(speedDisplay);
}
break;
//========================================================================================================================//		      
case "uptime": { 
    const stylishUptime = () => {
        const uptimeMessage = `✨ The system has been thriving for: ${runtime(process.uptime())} ⏳💪`;
        return uptimeMessage;
    };
    m.reply(stylishUptime());
} 
break;

//========================================================================================================================//		      
	case 'runtime':
		let raven = `  ${runtime(process.uptime())}`
                client.sendMessage(m.chat, {
                    text: raven,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: 'ʄʀօֆᴛ-ɮʏᴛɛ-𐌀i',
                            body: 'Frost_Byte-Ai Runtime',
                            thumbnailUrl: 'https://files.catbox.moe/wpenxk.jpg',
                            sourceUrl: 'https://whatsapp.com/channel/0029VasHgfG4tRrwjAUyTs10',
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                break;

//========================================================================================================================//		      
case "apk":
case "app": {
    if (!text) return reply("🧚‍♀️✨ Oopsie! You forgot to whisper the name of the magical app you're seeking!");

    let kyuu = await fetchJson(`https://bk9.fun/search/apk?q=${text}`);
    if (!kyuu.BK9 || kyuu.BK9.length === 0) return reply("🌪️ Oh no! No enchanted app scrolls found in the archives. Try a different name?");

    let tylor = await fetchJson(`https://bk9.fun/download/apk?id=${kyuu.BK9[0].id}`);
    
    await client.sendMessage(
        m.chat,
        {
            document: { url: tylor.BK9.dllink },
            fileName: tylor.BK9.name,
            mimetype: "application/vnd.android.package-archive",
            contextInfo: {
                externalAdReply: {
                    title: `🦉 Frost-Ai's Spellbound Deliveries`,
                    body: `✨ ${tylor.BK9.name} has arrived from the enchanted app realm!`,
                    thumbnailUrl: `${tylor.BK9.icon}`,
                    sourceUrl: `${tylor.BK9.dllink}`,
                    mediaType: 2,
                    showAdAttribution: true,
                    renderLargerThumbnail: false
                }
            }
        },
        { quoted: m }
    );
}
break;
//========================================================================================================================//		      
case "mix": {
  const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter');
  const axios = require("axios");

  if (!text) return m.reply("🧁✨ You need to give me two emojis, darling! Sprinkle them with a '+' in between! (e.g., 🐱+🌈)");

  const emojis = text.split('+');

  if (emojis.length !== 2) {
    return m.reply("🍬 Whoopsie! I need *two* emojis with a '+' in between to work my emoji-mix magic! Try again~");
  }

  const emoji1 = emojis[0].trim();
  const emoji2 = emojis[1].trim();

  try {
    const response = await axios.get(`https://levanter.onrender.com/emix?q=${emoji1}${emoji2}`);

    if (response.data.status === true) {
      let stickerMess = new Sticker(response.data.result, {
        pack: botname,
        type: StickerTypes.CROPPED,
        categories: ["🌸", "🧚‍♀️"],
        id: "emoji-magic",
        quality: 70,
        background: "transparent",
      });

      const stickerBuffer2 = await stickerMess.toBuffer();
      await client.sendMessage(m.chat, { sticker: stickerBuffer2 }, { quoted: m });

    } else {
      m.reply("🌪️ Oh no! My fairy wand fizzled out… couldn’t mix those emojis. Try different ones?");
    }
  } catch (error) {
    m.reply("😵✨ My spell went a bit sideways!\nSomething broke while mixing: " + error.message);
  }
}
break;
//========================================================================================================================//		      
case "lyrics": {
  const fetch = require('node-fetch');
  const apiUrl = `https://api.dreaded.site/api/lyrics?title=${encodeURIComponent(text)}`;

  try {
    if (!text) return m.reply("🎵✨ Sing me a name, darling! I need a *song title* to summon the lyrics spell.");

    const data = await fetchJson(apiUrl);

    if (!data.success || !data.result || !data.result.lyrics) {
      return m.reply(`🧚‍♂️ Oops! The song spirits couldn't find anything for *"${text}"*... maybe try another tune? 🎶`);
    }

    const { title, artist, link, thumb, lyrics } = data.result;
    const imageUrl = thumb || "https://i.imgur.com/Cgte666.jpeg";

    const imageBuffer = await fetch(imageUrl)
      .then(res => res.buffer())
      .catch(err => {
        console.error('🧚 Image fetch fail:', err);
        return null;
      });

    if (!imageBuffer) {
      return m.reply("🦋 My wings got tangled while fetching the image. Try again?");
    }

    const caption = `🪄 *Title*: ${title}\n🎤 *Artist*: ${artist}\n\n🎶 *Lyrics*:\n${lyrics}`;

    await client.sendMessage(
      m.chat,
      {
        image: imageBuffer,
        caption: caption
      },
      { quoted: m }
    );
  } catch (error) {
    console.error("🌀 Lyrics spell failed:", error);
    m.reply(`💔 The melody broke mid-spell… Couldn't fetch lyrics for *"${text}"*. Try again?`);
  }
}
break;
//========================================================================================================================//		      
case "toimg":
case "photo": { 
    if (!quoted) throw '🧚‍♀️✨ You must *quote a sticker* so I can turn it into a sparkly portrait!'; 
    if (!/webp/.test(mime)) throw `🌸 That’s not a sticker, starlight. Use *${prefix + command}* with a proper sticker!`; 

    let media = await client.downloadAndSaveMediaMessage(quoted); 
    let mokaya = await getRandom('.png'); 
    
    exec(`ffmpeg -i ${media} ${mokaya}`, (err) => { 
        fs.unlinkSync(media); 
        if (err) throw `💥 Oopsie-poopsie! My fairy wand glitched during the spell...`; 

        let buffer = fs.readFileSync(mokaya); 
        
        client.sendMessage(
            m.chat,
            { image: buffer, caption: `🖼️✨ *Tadaaa!* Your sticker has blossomed into a magical image — courtesy of Frost_Ai-Bot 🦉🌙` },
            { quoted: m }
        ); 
        
        fs.unlinkSync(mokaya); 
    }); 
} 
break;
//========================================================================================================================//		      
case "movie": {
    if (!text) return reply("🍿✨ Tell me the name of the movie or series you seek, starlight!");

    try {
        let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`);

        if (!fids.data || fids.data.Response === "False") {
            return reply(`🧚‍♀️ Couldn't find anything titled *"${text}"* — maybe the spell was miscast? Try again!`);
        }

        let imdbt = "🌙✨ *Frost-Ai Magical Movie Scroll* ✨🌙\n";
        imdbt += "────────────────────────\n";
        imdbt += `🎬 *Title*      : ${fids.data.Title}\n`;
        imdbt += `📅 *Year*       : ${fids.data.Year}\n`;
        imdbt += `⭐ *Rated*      : ${fids.data.Rated}\n`;
        imdbt += `📆 *Released*   : ${fids.data.Released}\n`;
        imdbt += `⏳ *Runtime*    : ${fids.data.Runtime}\n`;
        imdbt += `🌀 *Genre*      : ${fids.data.Genre}\n`;
        imdbt += `🧙‍♂️ *Director*   : ${fids.data.Director}\n`;
        imdbt += `🖋️ *Writer*     : ${fids.data.Writer}\n`;
        imdbt += `🎭 *Actors*     : ${fids.data.Actors}\n`;
        imdbt += `📖 *Plot*       : ${fids.data.Plot}\n`;
        imdbt += `🗣️ *Language*   : ${fids.data.Language}\n`;
        imdbt += `🌍 *Country*    : ${fids.data.Country}\n`;
        imdbt += `🏆 *Awards*     : ${fids.data.Awards}\n`;
        imdbt += `💰 *Box Office* : ${fids.data.BoxOffice}\n`;
        imdbt += `🏙️ *Production* : ${fids.data.Production}\n`;
        imdbt += `🌟 *IMDb Rating*: ${fids.data.imdbRating}\n`;
        imdbt += `🗳️ *Votes*      : ${fids.data.imdbVotes}`;

        await client.sendMessage(
            from,
            {
                image: {
                    url: fids.data.Poster,
                },
                caption: imdbt,
            },
            { quoted: m }
        );
    } catch (error) {
        console.error(error);
        reply("💥 Oof! My cinema crystal ball cracked… try again in a bit, dear.");
    }

    break;
}
//========================================================================================================================//   
case "linkgroup":
case "link": {
    if (!m.isGroup) throw '🚫 This spell only works inside group realms, dear traveler!';

    if (!isBotAdmin) throw '🧙‍♀️ Oopsie! I need to be a group admin to fetch the portal link!';

    let response = await client.groupInviteCode(m.chat);
    let groupName = groupMetadata.subject || "this enchanted circle";

    client.sendText(
        m.chat,
        `🔗✨ *Here’s the portal to ${groupName}*\nhttps://chat.whatsapp.com/${response}\n\n🌟 Use it wisely — only the worthy shall enter!`,
        m,
        { detectLink: true }
    );
}
break;
//========================================================================================================================//
case 'botpp': {
    if (!Owner) throw '🧙‍♀️ Only the enchanted overlord (bot owner) may grant me a new face!';

    if (!quoted) throw `🌸 Tag a lovely image with *${prefix + command}* so I may blossom anew!`;
    if (!/image/.test(mime)) throw `🖼️ That doesn’t look like a picture, starlight. Try again with a proper image and *${prefix + command}*.`;
    if (/webp/.test(mime)) throw `🧚‍♀️ Stickers are cute, but I need a real photo to sparkle with!`;

    let media = await client.downloadAndSaveMediaMessage(quoted);

    await client.updateProfilePicture(botNumber, { url: media })
        .then(() => {
            fs.unlinkSync(media);
            reply(`📸✨ Behold! My profile picture has been glamorously updated — ready to shine!`);
        })
        .catch((err) => {
            fs.unlinkSync(media);
            reply(`😵‍💫 Oopsie! Something went wrong during the makeover...`);
        });
}
break;
//========================================================================================================================//		      
case 'broadcast': {
    if (!Owner) throw '🧙‍♀️ Only the supreme spellcaster (bot owner) may send messages across the kingdoms!';

    if (!text) {
        reply("📜✨ Whisper me the message you'd like to cast to the lands!");
        return;
    }

    let getGroups = await client.groupFetchAllParticipating();
    let groups = Object.entries(getGroups).map(entry => entry[1]);
    let res = groups.map(v => v.id);

    reply(`🌐✨ Casting your message across *${res.length} enchanted group realms*...`);
    
    for (let i of res) {
        let txt = `🦉 *FROST-AI ROYAL BROADCAST* 🦉\n\n💌 *Message*: ${text}\n🔮 *Sender*: ${pushname || 'A mysterious being...'}`;
        await client.sendMessage(i, {
            image: { url: menulink },
            caption: txt
        });
    }

    reply(`🎉✨ The broadcast spell was successful! Your message soared through *${res.length} realms*. 📡🌟`);
}
break;
//========================================================================================================================//		      
case "gemini": {
    try {
        if (!text) return m.reply("🌌✨ You’ve summoned *Frost-Ai*, the cosmic whisperer using Gemini’s star-scripts, but you forgot to ask your question! 🌠");

        const { default: Gemini } = await import('gemini-ai');
        const gemini = new Gemini("AIzaSyDJUtskTG-MvQdlT4tNE319zBqLMFei8nQ");
        const chat = gemini.createChat();

        const res = await chat.ask(text);

        await m.reply(`🌙 *Raven speaks...*\n\n${res}`);
    } catch (e) {
        m.reply("💫 Alas! The stars were cloudy and I couldn’t receive a divine reply...\n\n📜 Error: " + e);
    }
}
break;
//========================================================================================================================//		      
case "setvar": {
    if (!Owner) throw NotOwner;

    if (!text || !text.includes('=') || !text.split('=')[1]) {
        return reply(
            `🔮 *Magic Mishap Detected!*\n\n` +
            `To alter the sacred environment scrolls, provide both *Key* and *Value* like so:\n\n` +
            `📜 Example:\n*${prefix}setvar AUTOVIEW_STATUS=TRUE*`
        );
    }

    const [key, value] = text.split('=');
    const herok = new Heroku({ token: herokuapi });
    const baseURI = "/apps/" + appname;

    await herok.patch(baseURI + "/config-vars", {
        body: { [key]: value },
    });

    await reply(
        `✨ *Arcane Environment Updated!*\n\n` +
        `📂 *Variable:* ${key}\n` +
        `🔐 *Value:* ${value}\n\n` +
        `Changes may take ~20s to flow through the ether. 🌌`
    );
}
break;
//========================================================================================================================//	
case "dlt":
case "dil": {
    if (!m.quoted) throw `🕯️✨ *Whisper to the Shadows* ✨🕯️\n\nYou must *quote a message* to erase it from the veil.`;

    let { chat, fromMe, id, isBaileys } = m.quoted;

    if (isBaileys)
        throw `⚠️ The message dances with bot energy — I cannot vanish what's mine or another spirit's.`;

    await client.sendMessage(m.chat, {
        delete: {
            remoteJid: m.chat,
            fromMe: true,
            id: m.quoted.id,
            participant: m.quoted.sender,
        },
    });

    // Optional aesthetic reply (remove if stealth mode is desired)
    reply(`💨✨ *Vanished without a trace...*`);
}
break;
//========================================================================================================================//
case "block": {
    if (!Owner) throw NotOwner;

    if (!m.quoted) throw `🧿✨ *Summon a soul to banish...* \n\nTag or quote the one you wish to block from the realms.`;

    let users = m.mentionedJid[0]
        ? m.mentionedJid[0]
        : m.quoted
        ? m.quoted.sender
        : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    if (users === "254114660061@s.whatsapp.net")
        return m.reply("🩸🔮 *Foolish mortal!* I cannot block the one who crafted me...");

    if (users === client.decodeJid(client.user.id))
        throw `🪞🌫️ Blocking *myself*? Madness. This spell shall not pass.`;

    await client.updateBlockStatus(users, 'block');

    m.reply(`🚫🕯️ *They have been cast out of the circle...*\nBlocked successfully.`);
}
break;
//========================================================================================================================//		      
 case "unblock": {
    if (!Owner) throw NotOwner;

    if (!m.quoted) throw `🌿✨ *Whisper their name...* \n\nTag or quote the one you wish to release from the dark spell.`;

    let users = m.mentionedJid[0]
        ? m.mentionedJid[0]
        : m.quoted
        ? m.quoted.sender
        : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    await client.updateBlockStatus(users, 'unblock');

    m.reply(`🔓🦋 *The banishment has been lifted...* \nThey may now return to the magical circle.`);
}
break;
//========================================================================================================================//		      
case 'join': { 
    if (!Owner) throw NotOwner;

    if (!text) return reply("🧚‍♀️✨ *Summon me properly!* \nYou must provide a valid group link to open a portal.");

    let result = args[0].split('https://chat.whatsapp.com/')[1];

    await client.groupAcceptInvite(result)
        .then((res) => reply(`🦋✨ *I’ve gracefully entered the realm!*\n\n${jsonformat(res)}`))
        .catch((err) => reply(`⚠️ The portal seems broken... \nCheck that group link again!`));
}
break;
//========================================================================================================================//		      
case "enc":
case "encrypte": {
    const Obf = require("javascript-obfuscator");

    if (m.quoted && m.quoted.text) {
        const spell = m.quoted.text;

        const enchantedScroll = Obf.obfuscate(spell, {
            compact: true,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        });

        console.log("✨🔮 Spell encrypted successfully!");
        m.reply(`🧙‍♀️✨ *Here’s your encrypted incantation:* \n\n${enchantedScroll.getObfuscatedCode()}`);
    } else {
        m.reply("📜✨ *Summon failed!*\nTag or quote a JavaScript code snippet to enchant.");
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
    };
  }

  if (!m.isGroup) return m.reply("🧚‍♀️ Whoops! This sparkly charm only works in *groups*, darling 🌸");

  let info = await client.groupMetadata(m.chat);
  let ts = await convertTimestamp(info.creation);
  let groupOwner = info.owner ? `@${info.owner.split('@')[0]}` : '🌟 Mysteriously Vanished';

  let groupPic;
  try {
    groupPic = await client.profilePictureUrl(m.chat, 'image');
  } catch {
    groupPic = 'https://files.catbox.moe/duv8ac.jpg'; // fallback scroll ✨
  }

  const total = info.participants.length;
  const admins = info.participants.filter(p => p.admin !== null).length;
  const members = total - admins;

  let enchantedProfile = `╭── ⋆⋅☆⋅⋆ ──╮
🌺 *Group Scroll: ${info.subject}*
╰── ⋆⋅☆⋅⋆ ──╯

🆔 *ID:* ${info.id}
👑 *Group Owner:* ${groupOwner}
🗓️ *Born On:* ${ts.day}, ${ts.date} ${ts.month} ${ts.year}
🕰️ *Time:* ${ts.time} UTC

👥 *Adventurers:* ${total}
✨ *Members:* ${members}
🧚 *Admins:* ${admins}

📢 *Talk Access:* ${info.announce ? 'Only ✨Admins✨' : 'Everyone in the realm'}
🛠️ *Edit Spells:* ${info.restrict ? 'Only ✨Admins✨' : 'Everyone can shape the realm'}
➕ *Summoning:* ${info.memberAddMode === true ? 'Open to all 🌟' : 'Guarded by Admins 🛡️'}

🌟 *May the magic of community thrive!* 🌟`;

  await client.sendMessage(m.chat, {
    image: { url: groupPic },
    caption: enchantedProfile,
    mentions: [info.owner],
  }, { quoted: m });
}
break;
//========================================================================================================================//		      
case 'tovideo':
case 'mp4':
case 'tovid': {
  if (!quoted) return reply('🧚‍♂️ Oopsie! Reply to a *sticker* you want to enchant into a video.');
  if (!/webp/.test(mime)) return reply(`🔮 That’s not a sticker! Reply to a *webp sticker* and try again using *${prefix + command}*`);

  try {
    let media = await client.downloadAndSaveMediaMessage(quoted);
    let webpToMp4 = await webp2mp4File(media);
    
    await client.sendMessage(m.chat, {
      video: { url: webpToMp4.result },
      caption: '✨ Here’s your enchanted video from sticker!'
    }, { quoted: m });

    await fs.unlinkSync(media);
  } catch (e) {
    console.error(e);
    reply('💥 Something went wrong while casting the conversion spell...');
  }
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


 
  
