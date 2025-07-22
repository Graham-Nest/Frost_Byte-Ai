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
    if (!Owner) return reply('✨ Only the esteemed owner may wield the power of code evaluation! ✨');
    try {
        let evaled = await eval(budy.slice(2));
        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
        await reply(`📜 Behold the magnificent output: ${evaled} 📜`);
    } catch (err) {
        await reply(`💥 Oh dear, an error has occurred, darling! ${String(err)} 💥`);
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
async function loading () {
var lod = [
"🖤",
"🤬",
"❤",	
	"✅",
"𝗣𝗶𝗻𝗴𝗶𝗻𝗴 𝗖𝗼𝗺𝗽𝗹𝗲𝘁𝗲!"	
]
let { key } = await client.sendMessage(from, {text: '𝗣𝗼𝗻𝗴'})

for (let i = 0; i < lod.length; i++) {
await client.sendMessage(from, {text: lod[i], edit: key });
}
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
│ ⬡ 🎬 ${prefix}video     
│ ⬡ 🎬 ${prefix}ytmp4
│ ⬡ 📱 ${prefix}fbdl      
│ ⬡ 🎬 ${prefix}movie
│ ⬡ 🎵 ${prefix}ytmp3    
│ ⬡ 🎥 ${prefix}tiktok
│ ⬡ 🎵 ${prefix}song    
│ ⬡ 🎧 ${prefix}play
│ ⬡ 🎵 ${prefix}shazam
│ ⬡ 🎵 ${prefix}whatsong
│ ⬡ 📹 ${prefix}yts      
│ ⬡ 🐦 ${prefix}twitter
│ ⬡ 📌 ${prefix}pinterest 
│ ⬡ 🎶 ${prefix}song2
│ ⬡ 🎤 ${prefix}play2      
│ ⬡ 🎼 ${prefix}lyrics
│ ⬡ 📸 ${prefix}insta
╰───────────────⭓
════════════════════
> 📦 *𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗘𝗥 𝗣𝗔𝗚𝗘* 📦
════════════════════
╭───────────────⭓
│ ⬡ 🖼 ${prefix}sticker     
│ ⬡ 📷 ${prefix}photo
│ ⬡ 🔄 ${prefix}retrieve    
│ ⬡ 🎬 ${prefix}vv2
│ ⬡ 🎚 ${prefix}mix         
│ ⬡ 🐦 ${prefix}tweet
│ ⬡ 🎭 ${prefix}smeme       
│ ⬡ 🎥 ${prefix}mp4
│ ⬡ 🎬 ${prefix}vv          
│ ⬡ 📸 ${prefix}screenshot
│ ⬡ ✂ ${prefix}take         
│ ⬡ ✍ ${prefix}quotely
╰───────────────⭓
════════════════════
> 👤 *𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨* 👤
════════════════════
╭───────────────⭓
│ ⬡ ✅ ${prefix}approve     
│ ⬡ 🟢 ${prefix}promote
│ ⬡ 🗑 ${prefix}delete      
│ ⬡ 🤡 ${prefix}faker
│ ⬡ 🔒 ${prefix}close       
│ ⬡ ⏰ ${prefix}closetime
│ ⬡ 🔕 ${prefix}disp-off    
│ ⬡ 🔔 ${prefix}disp-7
│ ⬡ 🖼 ${prefix}icon        
│ ⬡ ✏ ${prefix}subject
│ ⬡ 🚪 ${prefix}leave       
│ ⬡  @ ${prefix}tagall
│ ⬡ 🔄 ${prefix}revoke      
│ ⬡ 🔊 ${prefix}unmute
│ ⬡ ❌ ${prefix}reject      
│ ⬡ 🌐 ${prefix}demote
│ ⬡ 🚪 ${prefix}remove      
│ ⬡ 🌍 ${prefix}foreigners
│ ⬡ 🔓 ${prefix}open        
│ ⬡ ⏳ ${prefix}opentime
│ ⬡ 🔔 ${prefix}disp-1      
│ ⬡ 🔔 ${prefix}disp-90
│ ⬡ 📋 ${prefix}gcprofile   
│ ⬡ 📝 ${prefix}desc
│ ⬡ ➕ ${prefix}add         
│ ⬡ 👻 ${prefix}hidetag
│ ⬡ 🔇 ${prefix}mute
╰───────────────⭓
════════════════════
> 🤖 *𝗚𝗣𝗧 𝗠𝗘𝗡𝗨* 🤖
════════════════════
╭───────────────⭓
│ ⬡ 🤖 ${prefix}ai         
│ ⬡ 👁 ${prefix}vision
│ ⬡ 💎 ${prefix}gemini    
│ ⬡ 🗣 ${prefix}gpt
│ ⬡ 🗣 ${prefix}gpt3       
│ ⬡ 🧠 ${prefix}ai2
│ ⬡ 📖 ${prefix}define     
│ ⬡ 🔍 ${prefix}google
│ ⬡ 🗣 ${prefix}gpt2       
│ ⬡ 🗣 ${prefix}gpt4
╰───────────────⭓
════════════════════
> 👑 *𝗢𝗪𝗡𝗘𝗥 𝗣𝗔𝗚𝗘* 👑
════════════════════
╭───────────────⭓
│ ⬡ 🔄 ${prefix}restart     
│ ⬡ 📢 ${prefix}cast
│ ⬡ 🗑️ ${prefix}antidelete
│ ⬡ 🚮 ${prefix}antilink 
│ ⬡ 🏷️ ${prefix}antitag  
│ ⬡ 🙌 ${prefix}antilinkall
│ ⬡ 🧩 ${prefix}gpt_inbox
│ ⬡ ❌ ${prefix}antibadword
│ ⬡ ➕ ${prefix}join        
│ ⬡ ♻ ${prefix}redeploy
│ ⬡ ⚙ ${prefix}setvar      
│ ⬡ 🖼 ${prefix}fullpp
│ ⬡ ✅ ${prefix}unblock     
│ ⬡ ☠ ${prefix}kill2
│ ⬡ 👑 ${prefix}admin       
│ ⬡ 📢 ${prefix}broadcast
│ ⬡ 📊 ${prefix}getvar      
│ ⬡ 🔄 ${prefix}update
│ ⬡ 🤖 ${prefix}botpp       
│ ⬡ ⛔ ${prefix}block
│ ⬡ ☠ ${prefix}kill         
│ ⬡ 💾 ${prefix}save
╰───────────────⭓
════════════════════
> 🏟 *𝗙𝗢𝗢𝗧𝗕𝗔𝗟𝗟 𝗣𝗔𝗚𝗘* 🏟
════════════════════
╭───────────────⭓
│ ⬡ ⚽ ${prefix}epl         
│ ⬡ 🇮🇹 ${prefix}serie-a
│ ⬡ 🇫🇷 ${prefix}ligue-1    
│ ⬡ 🇪🇸 ${prefix}laliga
│ ⬡ 🇩🇪 ${prefix}bundesliga 
│ ⬡ 📅 ${prefix}fixtures
╰───────────────⭓
════════════════════
>🛠  *𝗨𝗧𝗜𝗟𝗦 & 𝗧𝗢𝗢𝗟* 🛠
════════════════════
╭───────────────⭓
│ ⬡ 💻 ${prefix}carbon      
│ ⬡ 🖥 ${prefix}compile-c
│ ⬡ 🖥 ${prefix}c++         
│ ⬡ 🖥 ${prefix}python
│ ⬡ 🔒 ${prefix}encrypt     
│ ⬡ 🌦 ${prefix}weather
│ ⬡ 📥 ${prefix}gitclone    
│ ⬡ 🖼 ${prefix}removebg
│ ⬡ 🔊 ${prefix}tts         
│ ⬡ 📆 ${prefix}fact
│ ⬡ 💬 ${prefix}quotes      
│ ⬡ 🖥 ${prefix}js
│ ⬡ 🔍 ${prefix}inspect     
│ ⬡ 📜 ${prefix}eval
│ ⬡ 📊 ${prefix}github      
│ ⬡ 💡 ${prefix}advice
│ ⬡ 🎨 ${prefix}remini     
│ ⬡ 🌐 ${prefix}trt
│ ⬡ 😺 ${prefix}catfact    
│ ⬡ 💘 ${prefix}pickupline
╰───────────────⭓
════════════════════
> 🧩 *𝗟𝗢𝗚𝗢 𝗚𝗘𝗡𝗘𝗥𝗔𝗧𝗢𝗥* 🧩
════════════════════
╭───────────────⭓
│ ⬡ 💻 ${prefix}hacker      
│ ⬡ 🖥 ${prefix}hacker2
│ ⬡ 🎨 ${prefix}graffiti    
│ ⬡ 😺 ${prefix}cat
│ ⬡ 🏖 ${prefix}sand        
│ ⬡ 🏆 ${prefix}gold
│ ⬡ ⚔ ${prefix}arena        
│ ⬡ 🐉 ${prefix}dragonball
│ ⬡ 🍥 ${prefix}naruto      
│ ⬡ 👶 ${prefix}child
│ ⬡ 🍃 ${prefix}leaves      
│ ⬡ 🎖 ${prefix}1917
│ ⬡ ✒ ${prefix}typography   
│ ⬡ 🟣 ${prefix}purple
│ ⬡ 🌈 ${prefix}neon        
│ ⬡ 🎄 ${prefix}noel
│ ⬡ 🔩 ${prefix}metallic    
│ ⬡ 😈 ${prefix}devil
│ ⬡ ✨ ${prefix}impressive  
│ ⬡ ❄ ${prefix}snow
│ ⬡ 💧 ${prefix}water       
│ ⬡ ⚡ ${prefix}thunder
│ ⬡ 🧊 ${prefix}ice         
│ ⬡ 📟 ${prefix}matrix
│ ⬡ ⚪ ${prefix}silver       
│ ⬡ 💡 ${prefix}light
╰───────────────⭓
════════════════════
> 📁 *𝗢𝗧𝗛𝗘𝗥 𝗠𝗘𝗡𝗨* 📁
════════════════════
╭───────────────⭓
│ ⬡ 📜 ${prefix}bible       
│ ⬡ 📖 ${prefix}quran
│ ⬡ 👫 ${prefix}pair        
│ ⬡ 💳 ${prefix}credits
│ ⬡ 📤 ${prefix}upload      
│ ⬡ 📎 ${prefix}attp
│ ⬡ 🔗 ${prefix}url         
│ ⬡ 🖼 ${prefix}image
│ ⬡ 💻 ${prefix}system      
│ ⬡ 🤖 ${prefix}blacks
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
                                thumbnail: fs.readFileSync('./Media/Raven.jpg'),
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
  if (!text) return reply("👑 Oh, darling, you can't expect me to conjure magic without a proper request! Do enlighten me with the song title you desire. 💋✨");
  const searches = await Client.songs.search(text);
  const firstSong = searches[0];
  //await client.sendMessage(from, {text: firstSong});
  const lyrics = await firstSong.lyrics();
  await client.sendMessage(from, { text: lyrics}, { quoted: m });
 } catch (error) {
  reply(`💔 My dear, it seems the universe has misplaced the lyrics for '${text}'. Perhaps a different tune would grace my archives? 🎶🤷‍♀️`);
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
    // Prompt the user for the song name if none is provided.
    if (!text) {
        m.reply("✨Darling, you can't just ask for *a* song without telling me *which* one! Spill the musical tea! 👑🎶✨");
        return; 
    }

    try {
        // Search for the song using the provided text.
        let search = await yts(text);

        // Handle cases where no results are found for the query.
        if (!search.all.length) {
            m.reply("💖Oh, honey, I searched the entire sonic universe, but your requested track is playing hide-and-seek. No luck! 🤷‍♀️✨💖");
            return; 
        }

        // Get the URL of the first search result.
        let link = search.all[0].url;
        const apiUrl = `https://keith-api.vercel.app/download/dlmp3?url=${link}`;

        // Fetch the song data from the external API.
        let response = await fetch(apiUrl);
        let data = await response.json();

        if (data.status && data.result) {
            // Prepare the audio data for sending.
            const audioData = {
                title: data.result.title,
                downloadUrl: data.result.downloadUrl,
                thumbnail: search.all[0].thumbnail, 
                format: data.result.format,
                quality: data.result.quality,
            };

            // Send the audio file to the chat.
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
            // Handle cases where the API failed to fetch the song.
            m.reply("🌟Ugh, the music gods are being difficult today, darling. I can't seem to fetch that track right now. Try again when the vibes are better! ⏳💔🌟");
            return; 
        }
    } catch (error) {
        // Log the error for debugging purposes.
        console.error("Error processing song download:", error);
        // Provide a sassy response for any unexpected errors.
        m.reply("💫Well, this is *not* the encore we wanted. A mysterious glitch has occurred. 🤯💥 Please try again, or I might need a new conductor!💫");
        return; // Exit the case early.
    }
}
break;

//========================================================================================================================//	      		      
case "song": {		      
 if (!text) {
      // Modified for stylish, sassy, and emoji-rich reply
      return client.sendMessage(from, { text: "✨ darling, you forgot to tell me *which* melody to fetch. Spill the tea! 🎶" }, { quoted: m });
    }

try {
     const search = await yts(text);
     const video = search.videos[0];

        if (!video) {
          // Modified for stylish, sassy, and emoji-rich reply
          return client.sendMessage(from, {
            text: '💖 Hmm, it seems the music gods are playing coy. No luck with that one, sweetie. Try again! 🤷‍♀️'
          }, { quoted: m });
        }

        // Converted to client.sendMessage with quoting and modified for stylish reply
        await client.sendMessage(from, { text: "⏳ Hold your horses, gorgeous! Your sonic delight is being whipped up right now. 🌟" }, { quoted: m });
	
        const safeTitle = video.title.replace(/[\\/:*?"<>|]/g, '');
        const fileName = `${safeTitle}.mp3`;
        const apiURL = `${BASE_URL}/dipto/ytDl3?link=${encodeURIComponent(video.videoId)}&format=mp3`;

        const response = await axios.get(apiURL);
        const data = response.data;

        if (!data.downloadLink) {
          // Modified for stylish, sassy, and emoji-rich reply
          return client.sendMessage(from, {
            text: '🔗 Oopsie! The magic portal to your MP3 seems to have closed. Lets try that again, shall we? ❌'
          }, { quoted: m });
	} 
	
        // Sending the audio file with a stylish filename
	await client.sendMessage(from, {
          audio: { url: data.downloadLink },
          mimetype: 'audio/mpeg',
          fileName
        }, { quoted: m });

      } catch (err) {
        console.error('[PLAY] Error:', err);
        // Original: 'An error occurred while processing your request.'
        // Modified for stylish, sassy, and emoji-rich reply
        await client.sendMessage(from, {
          text: '💥 Well, isnt this a pickle! Something went a bit haywire. Blame the tech gremlins! 🤖'
        }, { quoted: m });
}
}
break;
	      
//========================================================================================================================//
case "video": {
    if (!text) {
        // Stylish and sassy reply for missing song name
        return client.sendMessage(from, { text: '✨🎶 Oh darling, did you forget to whisper the song name? My ears are waiting! 💖🎤' }, { quoted: m });
    }

    try {
        const search = await yts(text);
        const video = search.videos[0];

        if (!video) {
            // Stylish and sassy reply when no results are found
            return client.sendMessage(from, { text: '🌟🔮 My magic wand couldn\'t find that tune, sweetie! Perhaps a different vibe? ✨🎶' }, { quoted: m });
        }

        // Stylish and sassy reply for download progress
        m.reply("⏳💖 Hold tight, gorgeous! Your sonic treat is being prepared with extra sparkle. ✨👑");

        const safeTitle = video.title.replace(/[\\/:*?"<>|]/g, '');
        const fileName = `${safeTitle}.mp4`;
        const apiURL = `${BASE_URL}/dipto/ytDl3?link=${encodeURIComponent(video.videoId)}&format=mp4`;

        const response = await axios.get(apiURL);
        const data = response.data;

        if (!data.downloadLink) {
            // Stylish and sassy reply for failed download link retrieval
            return client.sendMessage(from, { text: '💔💫 Oh no! The download link seems to have played a shy game of peek-a-boo. 🙈 Let\'s try that again, shall we? 💖✨' }, { quoted: m });
        }

        await client.sendMessage(from, {
            video: { url: data.downloadLink },
            mimetype: 'video/mp4',
            fileName
        }, { quoted: m });

    } catch (err) {
        console.error('[PLAY] Error:', err);
        // Stylish and sassy reply for general errors
        await client.sendMessage(from, { text: '⚡️😳 Oopsie! My circuits are feeling a bit fluttery. 🦋 An unexpected hiccup! Try again, my dear? 😘🌟' }, { quoted: m });
    }
}
break;

//========================================================================================================================//		      
   
case 'video2': {
    // If no text is provided, prompt the user in a sassy manner.
    if (!text) {
        reply("✨👑 Don't keep me waiting, darling! Which video are we fetching? Spill the tea! 👑✨");
        return; 
    }

    try {
        // Attempt to search for the video using the yts library.
        let search = await yts(text);

        // If no results are found, inform the user with a sassy reply.
        if (!search.all.length) {
            reply("🚫✨ Oops! It seems your query vanished into thin air. Try again, perhaps with a touch more flair? ✨🚫");
            return; 
        }

        // Get the URL of the first search result.
        let link = search.all[0].url;
        // Construct the API URL for downloading the video.
        const apiUrl = `https://apis-keith.vercel.app/download/dlmp4?url=${link}`;
        
        // Fetch the video download data from the API.
        let response = await fetch(apiUrl);
        let data = await response.json();

        // Check if the API call was successful and returned data.
        if (data.status && data.result) {
            const videoData = {
                title: data.result.title,
                downloadUrl: data.result.downloadUrl,
                thumbnail: search.all[0].thumbnail,
                format: data.result.format,
                quality: data.result.quality,
            };

            // Send the downloaded video with a stylish caption.
            await client.sendMessage(
                m.chat,
                {
                    video: { url: videoData.downloadUrl },
                    mimetype: "video/mp4",
                    caption: `𝑫𝒐𝒘𝒏𝒍𝒐𝒂𝒅𝒆𝒅 𝑩𝒚 𝑭𝒓𝒐𝒔𝒕_𝑩𝒚𝒕𝒆-𝑨𝒊`,
                },
                { quoted: m }
            );
            return; 
        } else {
            // If the API fails to fetch the video, provide a sassy error message.
            return reply("🙄💖 Ugh, the digital realm is being *so* dramatic right now. Give it a moment to collect itself, and try again, darling. 💖🙄");
        }
    } catch (error) {
        // If any other error occurs during the process, inform the user sassily.
        return reply(`💥💅 Oopsie daisy! A wild error appeared. Wilder than your taste in videos, perhaps? 💅💥 Error: ${error.message}`);
    }
};
break;

//========================================================================================================================//		      
case "update":
case "redeploy": {
    const axios = require('axios');
    if (!Owner) throw NotOwner; // If the user is not the owner, an error is thrown.

    // Check if necessary Heroku environment variables are set.
    if (!appname || !herokuapi) {
        // Sassy and stylish reply for missing environment variables.
        await m.reply("Oh honey, looks like your Heroku setup is missing a little sparkle. ✨ Make sure `APP_NAME` and `HEROKU_API` are dialed in, or this bot's upgrade is on pause! 💅💖");
        return; 
    }

    async function redeployApp() {
        try {
            // Making a POST request to Heroku API to start a new build.
            const response = await axios.post(
                `https://api.heroku.com/apps/${appname}/builds`,
                {
                    // Specifies the source code location for the build.
                    source_blob: {
                        url: "https://github.com/Tappy-Black/Frost-Byte-Ai/tarball/main",
                    },
                },
                {
                    // Headers required for Heroku API authentication and versioning.
                    headers: {
                        Authorization: `Bearer ${herokuapi}`, 
                        Accept: "application/vnd.heroku+json; version=3", 
                    },
                }
            );

            // Stylish and sassy reply indicating the redeploy process has started.
            await m.reply("Get ready for a fierce upgrade, darling! 🔥 FROST-BYTE-AI is diving into a fabulous metamorphosis. Give it about 2 minutes for this queen's redeploy to complete. You'll be *obsessed*! 💅💋");
            console.log("Build details:", response.data); 
        } catch (error) {
            // Extracts error message from the response or uses a generic message.
            const errorMessage = error.response?.data || error.message;
            // Stylish and sassy reply for a failed redeploy attempt.
            await m.reply("Oh, darling, it seems our diva moment hit a snag! 💔 The redeploy failed. Double-check those Heroku keys – they need to be *perfect* for this queen to shine. 👑💋");
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

*   **Graham-Bell** (Kenya 🇰🇪)
    *   🛠️The code whisperer! 👂 Your debugging prowess and compilation skills are second to none. 💯You keep me running smooth! ⚙️
    *   🔗 GitHub: https://github.com/Graham-Bell
    
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
case 'play': {
    if (!text) return m.reply("🎶 What song do you want to download? 🎶");

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
                        m.reply("😢 Oops! The API endpoint didn't respond correctly. Try again later. 😢");
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
                                    caption: "🎧 𝑫𝒐𝒘𝒏𝒍𝒐𝒂𝒅𝒆𝒅 𝑩𝒚 𝑭𝒓𝒐𝒔𝒕_𝑩𝒚𝒕𝒆-𝑨𝒊` 🎵",
                                    fileName: outputFileName,
                                },
                                { quoted: m }
                            );
                            fs.unlinkSync(outputPath);
                        })
                        .on("error", (err) => {
                            m.reply("❌ Download failed. 😞\n" + err.message);
                        });
                    return;
                }
            } catch (e) {
                continue;
            }
        }
        m.reply("💔 Oopsie! Looks like we hit a snag fetching that download URL from the API. Lets try that again,
");
    } catch (error) {
        m.reply("⚠️ Download failed. 😔\n" + error.message);
    }
}
break;

//========================================================================================================================//		      
case "play2": {
    // Check if a song title was provided by the user
    if (!text) {
        return reply("✨👑 Darling, don't leave me hanging! Which sonic masterpiece shall we procure today? 🎶✨");
    }

    try {
        // First, attempt to find and download the song from YouTube.
        let result = await searchYouTube(text);
        let downloadResult = result ? await downloadYouTube(result.url) : null;
        let platform = 'YouTube'; 

        // If the song wasn't found or downloadable on YouTube, try Spotify.
        if (!downloadResult) {
            result = await searchSpotify(text);
            downloadResult = result ? await downloadSpotify(result.url) : null;
            platform = 'Spotify'; 
        }

        // If still not found, attempt to find and download from SoundCloud.
        if (!downloadResult) {
            result = await searchSoundCloud(text);
            downloadResult = result ? await downloadSoundCloud(result.url) : null;
            platform = 'SoundCloud'; 
        }
        
        // inform the user with a classy and sassy error message.
        if (!result || !downloadResult) {
            return reply("💎💔 Oh dear, it seems my sources have gone mysteriously quiet. 🤫 Perhaps another gem awaits discovery? 💔💎");
        }

        // Send the downloaded audio as a document with a caption.
        await client.sendMessage(m.chat, {
            document: { url: downloadResult.downloadUrl },
            mimetype: "audio/mp3",
            caption: "𝑫𝒐𝒘𝒏𝒍𝒐𝒂𝒅𝒆𝒅 𝑩𝒚 𝑭𝒓𝒐𝒔𝒕_𝑩𝒚𝒕𝒆-𝑨𝒊",
            fileName: `${result.title.replace(/[^a-zA-Z0-9 ]/g, "")}.mp3`,
        }, { quoted: m });

        // Additionally, send the audio directly.
        await client.sendMessage(m.chat, {
            audio: { url: downloadResult.downloadUrl },
            mimetype: "audio/mp4", 
        }, { quoted: m });

    } catch (error) {
        // Log any errors encountered during the process for debugging purposes.
        console.error('Error:', error);
        return reply(`🎭💥 Well, isn't this a dramatic plot twist! A little hiccup in the symphony, darling. 🎻💥 Error: ${error.message}`);
    }
}
break;
		      
//========================================================================================================================//	      	      
case "inspect": {
    if (!text) {
        return m.reply("✨ Darling, you've forgotten to give me a *divine* web link! 💖 Spill the tea and provide a URL, and I'll meticulously fetch its HTML, CSS, JavaScript, and any juicy media. 💅");
    }
    if (!/^https?:\/\//i.test(text)) {
        return m.reply("✨ Oh honey, that URL is giving major side-eye! 😒 Please grace me with a link that *actually* starts with `http://` or `https://`. 💋");
    }

    try {
        const response = await fetch(text);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const html = await response.text();
        const $ = cheerio.load(html);

        const mediaFiles = [];
        $('img[src], video[src], audio[src]').each((i, element) => {
            let src = $(element).attr('src');
            if (src) {
                // Resolve relative URLs
                mediaFiles.push(new URL(src, text).toString());
            }
        });

        const cssFiles = [];
        $('link[rel="stylesheet"]').each((i, element) => {
            let href = $(element).attr('href');
            if (href) {
                // Resolve relative URLs
                cssFiles.push(new URL(href, text).toString());
            }
        });

        const jsFiles = [];
        $('script[src]').each((i, element) => {
            let src = $(element).attr('src');
            if (src) {
                // Resolve relative URLs
                jsFiles.push(new URL(src, text).toString());
            }
        });

        await m.reply(`✨ Here's the *entire* HTML masterpiece you asked for, darling! 📜 Feast your eyes on this digital tapestry. 💖\n\n${html} 🌟`);

        if (cssFiles.length > 0) {
            for (const cssFile of cssFiles) {
                try {
                    const cssResponse = await fetch(cssFile);
                    if (!cssResponse.ok) {
                        console.warn(`Failed to fetch CSS ${cssFile}: ${cssResponse.status}`);
                        await m.reply(`✨ Couldn't fetch CSS from ${cssFile}. It seems to be unavailable or protected. 💔`);
                        continue;
                    }
                    const cssContent = await cssResponse.text();
                    await m.reply(`✨ Serving you the *chic* CSS styles from ${cssFile}, as requested! 💅 Get ready for some visual poetry. 💖\n\n${cssContent} 🌟`);
                } catch (cssError) {
                    console.error(`Error fetching CSS ${cssFile}:`, cssError);
                    await m.reply(`✨ Oops! An error occurred while fetching CSS from ${cssFile}. 😥`);
                }
            }
        } else {
            await m.reply("✨ Curses! 😭 It seems this website is serving *bare* HTML with no external CSS flair. How... minimalist. 💅");
        }

        if (jsFiles.length > 0) {
            for (const jsFile of jsFiles) {
                try {
                    const jsResponse = await fetch(jsFile);
                    if (!jsResponse.ok) {
                        console.warn(`Failed to fetch JS ${jsFile}: ${jsResponse.status}`);
                        await m.reply(`✨ Couldn't fetch JavaScript from ${jsFile}. It seems to be unavailable or protected. 💔`);
                        continue;
                    }
                    const jsContent = await jsResponse.text();
                    await m.reply(`✨ Here's the brainy JavaScript code from ${jsFile}, straight from the source! 🧠 Watch it work its magic. 💖\n\n${jsContent} 🌟`);
                } catch (jsError) {
                    console.error(`Error fetching JS ${jsFile}:`, jsError);
                    await m.reply(`✨ Oops! An error occurred while fetching JavaScript from ${jsFile}. 😥`);
                }
            }
        } else {
            await m.reply("✨ Shocking! 😱 No JavaScript to be found here, darling. This site is running on pure, unadulterated HTML and CSS. How quaint! 💁‍♀️");
        }

        if (mediaFiles.length > 0) {
            await m.reply(`✨ Behold! The visual treasures of this site! 📸 I've unearthed all the media gems for you. 💎\n\n${mediaFiles.join('\n')} 👑`);
        } else {
            await m.reply("✨ Well, this is awkward... 🤷‍♀️ It seems this website is a digital desert when it comes to media. No images, videos, or audios to be found! 🌵");
        }

    } catch (error) {
        console.error("General fetch error:", error);
        await m.reply(`✨ Oh no, a glitch in the matrix! 💥 Something went terribly wrong while fetching the website. My apologies, darling! 💔`);
    }
}
break;

//========================================================================================================================//		      
case 'metallic': {
    if (!text || text === "") {
        m.reply("✨👑 My dear, you've forgotten the most essential ingredient – the text itself! What shall I adorn with this magnificent metallic sheen? Do enlighten me! 👑✨");
        return; 
    }

    try {
        m.reply("⏳🌟 Just a *moment*, my dear. This divine transformation is being meticulously crafted for you. 🌟⏳");
        var imageUrl = await mumaker.ephoto("https://en.ephoto360.com/impressive-decorative-3d-metal-text-effect-798.html", text);

        await client.sendMessage(m.chat, {
            image: {
                url: imageUrl.image 
            },
            caption: `𝑮𝒆𝒏𝒆𝒓𝒂𝒕𝒆𝒅 𝑩𝒚 𝑭𝒓𝒐𝒔𝒕-𝑩𝒚𝒕𝒆-𝑨𝒊` 
        });
    } catch (error) {
        m.reply(`⚠️ My apologies, darling, but an unexpected error occurred. Let's try that again, shall we? 🧐: ${error} ⚠️`);
    }
}
break; 

//========================================================================================================================//		      
case 'ice': {
  // --- Input Validation ---
  if (!text || text === "") {
    m.reply(`🌟❄️ Darling, you forgot to give me a name to freeze! Try something like: \`${prefix}Ice Frost\` ✨❄️ 🧊🌬️`);
    return; 
  }

  try {
    // --- Effect Generation ---
    const effectData = await mumaker.ephoto("https://en.ephoto360.com/ice-text-effect-online-101.html", text);

    // Fancy emojis are added at the start and end.
    m.reply(`🌟❄️ Hold your horses, darling! I'm crafting something frosty just for you. ⏳🥶 ✨💎`);

    // --- Sending the Result ---
    // Sends the generated image to the chat.
    await client.sendMessage(m.chat, {
      image: {
        url: effectData.image
      },
      caption: `𝑮𝒆𝒏𝒆𝒓𝒂𝒕𝒆𝒅 𝑩𝒚 𝑭𝒓𝒐𝒔𝒕-𝑩𝒚𝒕𝒆-𝑨𝒊`
    });
  } catch (error) {
    m.reply(`🚨❄️ Oh dear, a little chill in the system! 🥶 It seems something went wrong: \`${error}\` 🧊🌬️`);
  }
}
break;

//========================================================================================================================//		      
case 'snow': {
  // Check if the user provided text for the effect.
  if (!text || text.trim() === "") {
    // Reply with a sassy and informative message if text is missing.
    m.reply(`✨ Oh, darling, did you forget to tell me what frosty words to conjure? ❄️ Please provide your text like this: \`${prefix}Snow Frost-Byte-Ai [Your Text]\` 💎`);
    return; // Exit the function if no text is provided.
  }

  try {
    // Inform the user that the process is starting with a stylish message.
    m.reply(`⏳ Just a moment, my dear! We're crafting a dazzling winter wonderland for your text... 🌨️✨`);

    // Call the external service to generate the snow text effect.
    const effectResult = await mumaker.ephoto("https://en.ephoto360.com/create-a-snow-3d-text-effect-free-online-621.html", text);

    // Send the generated image back to the user with a custom caption.
    await client.sendMessage(m.chat, {
      image: {
        url: effectResult.image 
      },
      caption: `𝑮𝒆𝒏𝒆𝒓𝒂𝒕𝒆𝒅 𝑩𝒚 𝑭𝒓𝒐𝒔𝒕-𝑩𝒚𝒕𝒆-𝑨𝒊 ❄️` 
    });

  } catch (error) {
    // Handle any errors that occur during the process with a sassy reply.
    m.reply(`😱 Oops! It seems we encountered a little frostbite. The error was: \`${error}\`. Let's give it another whirl, shall we? ❄️💎`);
  }
}
break; 

//========================================================================================================================//		      
case 'impressive': {
    if (!text || text.trim() === "") {
        // Sassy reply for missing text, with fancy emojis at the start and end.
        m.reply(`✨ Honey, you forgot the text! Try this: ${prefix}impressive Frost-Byte-Ai 💅`);
        return; 
    }

    try {
        // accompanied by relevant emojis for flair.
        m.reply(`👑 Hold your horses, this is gonna be epic! 🎨💫`);

        const effectResult = await mumaker.ephoto("https://en.ephoto360.com/create-3d-colorful-paint-text-effect-online-801.html", text);

        // with fancy emojis at the beginning and end.
        await client.sendMessage(m.chat, {
            image: {
                url: effectResult.image
            },
            // A stylish and engaging caption for the generated artwork.
            caption: `💖🎨 Behold your stunning 3D Colorful Paint Text Effect! 🎨💖`
        });
    } catch (error) {
        m.reply(`💖 Oopsie! Something went wrong, but don't worry, I'm still fabulous. Try again! 💥`);
        console.error("Error creating 3D colorful paint text effect:", error);
    }
}
break;

//========================================================================================================================//		      
case 'noel': {
  if (!text || text.trim() === "") {
    // Sassy reply for missing text, with fancy emojis at the start and end.
    m.reply(`✨ Darling, you forgot to tell me what to write! Use it like this: ${prefix}noel [Your Name] 🎄`);
    return; 
  }

  // --- Effect Generation ---
  try {
    m.reply(`👑 Crafting your festive masterpiece! Just a sec... 🎅✨`);
    const effectResult = await mumaker.ephoto("https://en.ephoto360.com/noel-text-effect-online-99.html", text);

    // --- Sending the Generated Image ---
    await client.sendMessage(m.chat, {
      image: {
        // 'effectResult.image' is assumed to hold the URL of the generated image.
        url: effectResult.image
      },
      // A classy and sassy caption for the generated artwork, with festive emojis.
      caption: `🌟 Behold your dazzling Noel text effect! Crafted with holiday magic by Frost_Byte-Ai! 🎁`
    }, {
      // 'quoted: m' ensures the bot's reply is associated with the user's original message.
      quoted: m
    });
  } catch (error) {
    // --- Error Handling ---
    m.reply(`💖 Oh no! It seems the holiday spirits are a bit mischievous today. Try again, darling! ❄️ Error: ${error}`);
    // It's also good practice to log the error to the console for server-side monitoring.
    console.error("Error creating Noel text effect:", error);
  }
}
break;

//========================================================================================================================//		      
case 'water': {
  // --- Input Validation ---
  if (!text || text.trim() === "") {
    // Sassy reply for missing text, with fancy emojis at the start and end.
    m.reply(`💧✨ Oopsie, darling! You forgot to tell me what to write. Try this: ${prefix}Water [Your Name] 🌊`);
    return; .
  }

  // --- Effect Generation ---
  try {
    // Inform the user that the water effect is being generated.
    m.reply(`🌊 Creating your splashy masterpiece! Just a moment... 💦✨`);

    // Call the mumaker.ephoto function to generate the water text effect.
    const effectResult = await mumaker.ephoto("https://en.ephoto360.com/create-water-effect-text-online-295.html", text);

    // --- Sending the Generated Image ---
    await client.sendMessage(m.chat, {
      image: {
        // 'effectResult.image' is assumed to hold the URL of the generated image.
        url: effectResult.image
      },
      // A classy and sassy caption for the generated artwork, with water-themed emojis.
      caption: `✨ Your text, now with a stunning water effect! 🌊 Crafted by Frost_Byte-Ai! 💧`
    }, {
      // 'quoted: m' ensures the bot's reply is associated with the user's original message.
      quoted: m
    });
  } catch (error) {
    // --- Error Handling ---
    m.reply(`💦 Oh no! Something went wrong with the water magic. Try again, sweetie! 💧 Error: ${error}`);
    // It's also good practice to log the error to the console for server-side monitoring.
    console.error("Error creating Water Effect Text:", error);
  }
}
break;

//========================================================================================================================//		
case 'matrix': {
  // Check if text input is provided.
  if (!text || text.trim() === "") {
    // Sassy reply for missing text, with fancy emojis at the start and end.
    m.reply(`👑 Darling, you forgot the Matrix code! Use it like: ${prefix}Matrix [Your Name] 👾`);
    return; // Exit if no text is provided.
  }
  try {
    // Inform user about the process with a stylish, sassy message and emojis.
    m.reply(`💻 Decoding the Matrix... one moment, please! ⏳✨`);

    // Call the mumaker.ephoto function with the Matrix effect URL and user's text.
    const effectResult = await mumaker.ephoto("https://en.ephoto360.com/matrix-text-effect-154.html", text);

    // Send the generated image with a classy and engaging caption.
    await client.sendMessage(m.chat, {
      image: {
        url: effectResult.image 
      },
      caption: `👾 Your epic Matrix Text Effect! Downloaded by Frost_Byte-Ai. 💻`
    }, {
      quoted: m 
    });
  } catch (error) {
    // Handle any errors with a sassy, apologetic message and emojis.
    m.reply(`💻 Oh no! The system crashed. Try again, darling! 👾 Error: ${error}`);
    console.error("Error creating Matrix Text Effect:", error); // Log error for debugging.
  }
}
break;

//========================================================================================================================//		
case 'light': {
  // Check if text input is provided.
  if (!text || text.trim() === "") {
    // Sassy reply for missing text, with fancy emojis at the start and end.
    m.reply(`💡 Darling, you forgot the futuristic text! Use it like: ${prefix}Light [Your Name] 🚀`);
    return; 
  }
  try {
    // Inform user about the process with a stylish, sassy message and emojis.
    m.reply(`🚀 Activating futuristic light sequence... stand by! ✨💫`);

    // Call the mumaker.ephoto function with the Futuristic Light effect URL and user's text.
    const effectResult = await mumaker.ephoto("https://en.ephoto360.com/light-text-effect-futuristic-technology-style-648.html", text);

    // Send the generated image with a classy and engaging caption.
    await client.sendMessage(m.chat, {
      image: {
        url: effectResult.image 
      },
      caption: `🚀 Your futuristic Light Text Effect! Powered by Frost_Byte-Ai. ✨`
    }, {
      quoted: m 
    });
  } catch (error) {
    // Handle any errors with a sassy, apologetic message and emojis.
    m.reply(`💡 Oh no! The future is glitchy. Try again, darling! 🚀 Error: ${error}`);
    console.error("Error creating Light Text Effect Futuristic Technology Style:", error); 
  }
}
break;

//========================================================================================================================//	
case 'neon': {
  // Check if text input is provided.
  if (!text || text.trim() === "") {
    // Sassy reply for missing text, with fancy emojis at the start and end.
    m.reply(`💡 Darling, you forgot the neon glow! Try: ${prefix}Neon [Your Name] ✨`);
    return; // Exit if no text is provided.
  }
  try {
    // Inform user about the process with a stylish, sassy message and emojis.
    m.reply(`🌟 Illuminating your text with vibrant neon... hold on! 💡✨`);

    // Call the mumaker.ephoto function with the Neon Light effect URL and user's text.
    const effectResult = await mumaker.ephoto("https://en.ephoto360.com/create-colorful-neon-light-text-effects-online-797.html", text);

    // Send the generated image with a classy and engaging caption.
    await client.sendMessage(m.chat, {
      image: {
        url: effectResult.image // Assuming effectResult.image contains the image URL.
      },
      caption: `💖 Your dazzling Colorful Neon Light Text Effect! Created by Frost_Byte-Ai. ✨`
    });
  } catch (error) {
    // Handle any errors with a sassy, apologetic message and emojis.
    m.reply(`💡 Oh no! The neon flickered out. Try again, darling! ⚡ Error: ${error}`);
    console.error("Error creating Colorful Neon Light Text Effect:", error); // Log error for debugging.
  }
}
break;

//========================================================================================================================//	
case 'silver':
case 'silva': { // Supports both 'silver' and 'silva' commands.
  // Check if text input is provided.
  if (!text || text.trim() === "") {
    // Sassy reply for missing text, with fancy emojis at the start and end.
    m.reply(`✨ Darling, you forgot the shiny text! Try: ${prefix}Silva [Your Name] 💎`);
    return; // Exit if no text is provided.
  }
  try {
    // Inform user about the process with a stylish, sassy message and emojis.
    m.reply(`🌟 Polishing your text to a brilliant silver shine... stand by! 💎✨`);

    // Call the mumaker.ephoto function with the Silver 3D effect URL and user's text.
    const effectResult = await mumaker.ephoto("https://en.ephoto360.com/create-glossy-silver-3d-text-effect-online-802.html", text);

    // Send the generated image with a classy and engaging caption.
    await client.sendMessage(m.chat, {
      image: {
        url: effectResult.image // Assuming effectResult.image contains the image URL.
      },
      caption: `💎 Your dazzling Glossy Silver 3D Text Effect! Gleaming from Frost_Byte-Ai. ✨`
    });
  } catch (error) {
    // Handle any errors with a sassy, apologetic message and emojis.
    m.reply(`✨ Oh no! The silver tarnished. Try again, darling! 💎 Error: ${error}`);
    console.error("Error creating Glossy Silver 3D Text Effect:", error); // Log error for debugging.
  }
}
break;

//========================================================================================================================//	
case 'devil': {
  // Check if text input is provided.
  if (!text || text.trim() === "") {
    // Sassy reply for missing text, with fancy emojis at the start and end.
    m.reply(`😈 Oops, missing the devilish text! Try this: ${prefix}Devil [Your Name] 🖤`);
    return; // Exit if no text is provided.
  }
  try {
    // Inform user about the process with a stylish, sassy message and emojis.
    m.reply(`🔥 Unleashing infernal neon power... stand by! 😈✨`);

    // Call the mumaker.ephoto function with the Neon Devil Wings effect URL and user's text.
    const effectResult = await mumaker.ephoto("https://en.ephoto360.com/neon-devil-wings-text-effect-online-683.html", text);

    // Send the generated image with a classy and engaging caption.
    await client.sendMessage(m.chat, {
      image: {
        url: effectResult.image // Assuming effectResult.image contains the image URL.
      },
      caption: `😈 Your fierce Neon Devil Wings text effect! Conjured by Frost_Byte-Ai. 🔥`
    });
  } catch (error) {
    // Handle any errors with a sassy, apologetic message and emojis.
    m.reply(`🖤 Oh no! The inferno fizzled out. Try again, darling! 😈 Error: ${error}`);
    console.error("Error creating Neon Devil Wings Text Effect:", error); // Log error for debugging.
  }
}
break;

//========================================================================================================================//		      
case 'typography': {
  // Check if text input is provided.
  if (!text || text.trim() === "") {
    // Sassy reply for missing text, with fancy emojis at the start and end.
    m.reply(`🖋️ Feeling poetic? You forgot the text! Try: ${prefix}Typography [Your Status] 🚶‍♀️`);
    return; // Exit if no text is provided.
  }
  try {
    // Inform user about the process with a stylish, sassy message and emojis.
    m.reply(`🚶‍♀️ Crafting your heartfelt pavement message... just a moment! ✍️✨`);

    // Call the mumaker.ephoto function with the Pavement Typography effect URL and user's text.
    const effectResult = await mumaker.ephoto("https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html", text);

    // Send the generated image with a classy and engaging caption.
    await client.sendMessage(m.chat, {
      image: {
        url: effectResult.image // Assuming effectResult.image contains the image URL.
      },
      caption: `💖 Your touching Typography on Pavement effect! Shared by Frost_Byte-Ai. 🚶‍♀️`
    });
  } catch (error) {
    // Handle any errors with a sassy, apologetic message and emojis.
    m.reply(`🚶‍♀️ Oh no, the pavement is smudged. Try again, darling! 💔 Error: ${error}`);
    console.error("Error creating Typography Text Effect on Pavement:", error); // Log error for debugging.
  }
}
break;

//========================================================================================================================//	
case 'purple': {
  // Check if text input is provided.
  if (!text || text.trim() === "") {
    // Sassy reply for missing text, with fancy emojis at the start and end.
    m.reply(`👑 Darling, you forgot the royal purple! Try: ${prefix}Purple [Your Name] 💜`);
    return; // Exit if no text is provided.
  }
  try {
    // Inform user about the process with a stylish, sassy message and emojis.
    m.reply(`💜 Infusing your text with regal purple magic... stand by! 👑✨`);

    // Call the mumaker.ephoto function with the Purple effect URL and user's text.
    const effectResult = await mumaker.ephoto("https://en.ephoto360.com/purple-text-effect-online-100.html", text);

    // Send the generated image with a classy and engaging caption.
    await client.sendMessage(m.chat, {
      image: {
        url: effectResult.image // Assuming effectResult.image contains the image URL.
      },
      caption: `👑 Your stunning Purple Text Effect! Fit for royalty from Frost_Byte-Ai. 💜`
    });
  } catch (error) {
    // Handle any errors with a sassy, apologetic message and emojis.
    m.reply(`💜 Oh no! The royal dye ran. Try again, darling! 👑 Error: ${error}`);
    console.error("Error creating Purple Text Effect:", error); // Log error for debugging.
  }
}
break;

//========================================================================================================================//		 
case 'thunder': {
  // Check if text input is provided.
  if (!text || text.trim() === "") {
    // Sassy reply for missing text, with fancy emojis at the start and end.
    m.reply(`⚡ Oops, you forgot the thunderous text! Use it like: ${prefix}Thunder [Your Name] ⚡`);
    return; // Exit if no text is provided.
  }
  try {
    // Inform user about the process with a stylish, sassy message and emojis.
    m.reply(`⚡ Conjuring your electrifying thunder effect... just a sec! ⚡✨`);

    // Call the mumaker.ephoto function with the Thunder effect URL and user's text.
    const effectResult = await mumaker.ephoto("https://en.ephoto360.com/thunder-text-effect-online-97.html", text);

    // Send the generated image with a classy and engaging caption.
    await client.sendMessage(m.chat, {
      image: {
        url: effectResult.image // Assuming effectResult.image contains the image URL.
      },
      caption: `✨ Your electrifying Thunder Text Effect! Crafted by Frost_Byte-Ai. ⚡`
    });
  } catch (error) {
    // Handle any errors with a sassy, apologetic message and emojis.
    m.reply(`⚡ Oh snap! A storm of errors occurred. Please try again, gorgeous! ⛈️ Error: ${error}`);
    console.error("Error creating Thunder text effect:", error); // Log error for debugging.
  }
}
break;

//========================================================================================================================//		      
case 'leaves': {
  // Check if text input is provided.
  if (!text || text.trim() === "") {
    // Sassy reply for missing text, with fancy emojis at the start and end.
    m.reply(`🍃 Oops, you forgot the text! Let's make some leafy art: ${prefix}Leaves [Your Name] 🌿`);
    return; // Exit if no text is provided.
  }
  try {
    // Inform user about the process with a stylish, sassy message and emojis.
    m.reply(`🌿 Painting your text with nature's finest green brush... just a sec! 🍃✨`);

    // Call the mumaker.ephoto function with the Green Brush effect URL and user's text.
    const effectResult = await mumaker.ephoto("https://en.ephoto360.com/green-brush-text-effect-typography-maker-online-153.html", text);

    // Send the generated image with a classy and engaging caption.
    await client.sendMessage(m.chat, {
      image: {
        url: effectResult.image // Assuming effectResult.image contains the image URL.
      },
      caption: `🌿 Your stunning Green Brush Typography! Freshly made by Frost_Byte-Ai. 🍃`
    }, {
      quoted: m // Ensure the reply is quoted to the original message.
    });
  } catch (error) {
    // Handle any errors with a sassy, apologetic message and emojis.
    m.reply(`🍃 Oh dear, the leaves are a bit tangled. Try again, darling! 🍂 Error: ${error}`);
    console.error("Error creating Green Brush Text Effect:", error); // Log error for debugging.
  }
}
break;

//========================================================================================================================//
case '1917': {
  // Check if text input is provided.
  if (!text || text.trim() === "") {
    // Sassy reply for missing text, with fancy emojis at the start and end.
    m.reply(`🎬 Darling, you forgot the vintage flair! Use it like: ${prefix}1917 [Your Name/Quote] 🎞️`);
    return; // Exit if no text is provided.
  }
  try {
    // Inform user about the process with a stylish, sassy message and emojis.
    m.reply(`🕰️ Transporting you to 1917... one moment, please! 🎞️✨`);

    // Call the mumaker.ephoto function with the 1917 effect URL and user's text.
    const effectResult = await mumaker.ephoto("https://en.ephoto360.com/1917-style-text-effect-523.html", text);

    // Send the generated image with a classy and engaging caption.
    await client.sendMessage(m.chat, {
      image: {
        url: effectResult.image // Assuming effectResult.image contains the image URL.
      },
      caption: `🌟 Your cinematic 1917 Style Text Effect, ready for the big screen! By Frost_Byte-Ai. 🎬`
    }, {
      quoted: m // Ensure the reply is quoted to the original message.
    });
  } catch (error) {
    // Handle any errors with a sassy, apologetic message and emojis.
    m.reply(`🎞️ Oh no! The time machine sputtered. Try again, darling! ⏳ Error: ${error}`);
    console.error("Error creating 1917 Style Text Effect:", error); // Log error for debugging.
  }
}
break;

//========================================================================================================================//
case 'arena': {
  // Check if text input is provided.
  if (!text || text.trim() === "") {
    // Sassy reply for missing text, with fancy emojis at the start and end.
    m.reply(`⚔️ Darling, your Arena title is missing! Use it like: ${prefix}arena [Your Title] 🏆`);
    return; // Exit if no text is provided.
  }
  try {
    // Inform user about the process with a stylish, sassy message and emojis.
    m.reply(`🏆 Forging your Arena cover... just a moment! ⚔️✨`);

    // Call the mumaker.ephoto function with the Arena Cover effect URL and user's text.
    const effectResult = await mumaker.ephoto("https://en.ephoto360.com/create-cover-arena-of-valor-by-mastering-360.html", text);

    // Send the generated image with a classy and engaging caption.
    await client.sendMessage(m.chat, {
      image: {
        url: effectResult.image // Assuming effectResult.image contains the image URL.
      },
      caption: `🏆 Your epic Arena Cover Art! Dominate with Frost_Byte-Ai. ⚔️`
    }, {
      quoted: m // Ensure the reply is quoted to the original message.
    });
  } catch (error) {
    // Handle any errors with a sassy, apologetic message and emojis.
    m.reply(`⚔️ Oh no! The battlefield is empty. Try again, darling! 🏆 Error: ${error}`);
    console.error("Error creating Arena Cover Effect:", error); // Log error for debugging.
  }
}
break;

//========================================================================================================================//		
case 'hacker': {
  // Check if text input is provided.
  if (!text || text.trim() === "") {
    // Sassy reply for missing text, with fancy emojis at the start and end.
    m.reply(`💻 Darling, your hacker alias is missing! Use it like: ${prefix}hacker [Your Alias] 🕶️`);
    return; // Exit if no text is provided.
  }
  try {
    // Inform user about the process with a stylish, sassy message and emojis.
    m.reply(`🕶️ Accessing the network... creating your anonymous avatar! 💻✨`);

    // Call the mumaker.ephoto function with the Hacker Avatar effect URL and user's text.
    const effectResult = await mumaker.ephoto("https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html", text);

    // Send the generated image with a classy and engaging caption.
    await client.sendMessage(m.chat, {
      image: {
        url: effectResult.image // Assuming effectResult.image contains the image URL.
      },
      caption: `🕶️ Your mysterious Anonymous Hacker Avatar! Crafted by Frost_Byte-Ai 💻`
    }, {
      quoted: m // Ensure the reply is quoted to the original message.
    });
  } catch (error) {
    // Handle any errors with a sassy, apologetic message and emojis.
    m.reply(`💻 Oh no! The firewall is up. Try again, darling! 🕶️ Error: ${error}`);
    console.error("Error creating Anonymous Hacker Avatar:", error); // Log error for debugging.
  }
}
break;

//========================================================================================================================//	
case 'sand': {
  // Check if text input is provided.
  if (!text || text.trim() === "") {
    // Sassy reply for missing text, with fancy emojis at the start and end.
    m.reply(`🏖️ Darling, the beach is waiting for your message! Use it like: ${prefix}sand [Your Message] 🌊`);
    return; // Exit if no text is provided.
  }
  try {
    // Inform user about the process with a stylish, sassy message and emojis.
    m.reply(`✍️ Carving your message into the sand... just a moment! 🏖️✨`);

    // Call the mumaker.ephoto function with the Sand effect URL and user's text.
    const effectResult = await mumaker.ephoto("https://en.ephoto360.com/write-names-and-messages-on-the-sand-online-582.html", text);

    // Send the generated image with a classy and engaging caption.
    await client.sendMessage(m.chat, {
      image: {
        url: effectResult.image // Assuming effectResult.image contains the image URL.
      },
      caption: `🌊 Your beautiful message written on the sand! Crafted by Frost_Byte-Ai. 🏖️`
    }, {
      quoted: m // Ensure the reply is quoted to the original message.
    });
  } catch (error) {
    // Handle any errors with a sassy, apologetic message and emojis.
    m.reply(`🏖️ Oh no! The tide washed it away. Try again, darling! 🌊 Error: ${error}`);
    console.error("Error creating Sand Text Effect:", error); // Log error for debugging.
  }
}
break;

//========================================================================================================================//		
case 'dragonball': {
  // Check if text input is provided.
  if (!text || text.trim() === "") {
    // Sassy reply for missing text, with fancy emojis at the start and end.
    m.reply(`💥 Darling, you forgot the Saiyan power-up text! Use it like: ${prefix}dragonball [Your Name] 💥`);
    return; // Exit if no text is provided.
  }
  try {
    // Inform user about the process with a stylish, sassy message and emojis.
    m.reply(`✨ Channeling the energy of the Dragon Balls... just a moment! 💥💫`);

    // Call the mumaker.ephoto function with the Dragon Ball effect URL and user's text.
    const effectResult = await mumaker.ephoto("https://en.ephoto360.com/create-dragon-ball-style-text-effects-online-809.html", text);

    // Send the generated image with a classy and engaging caption.
    await client.sendMessage(m.chat, {
      image: {
        url: effectResult.image // Assuming effectResult.image contains the image URL.
      },
      caption: `🌟 Your epic Dragon Ball Style Text Effect! Unleashed by Frost_Byte-Ai. 💥`
    }, {
      quoted: m // Ensure the reply is quoted to the original message.
    });
  } catch (error) {
    // Handle any errors with a sassy, apologetic message and emojis.
    m.reply(`💥 Oh no! The Dragon Balls are scattered. Try again, darling! ⚡ Error: ${error}`);
    console.error("Error creating Dragon Ball Style Text Effect:", error); // Log error for debugging.
  }
}
break;

//========================================================================================================================//		
case 'naruto': {
  // Check if text input is provided.
  if (!text || text.trim() === "") {
    // Sassy reply for missing text, with fancy emojis at the start and end.
    m.reply(`🍥 Darling, you forgot the ninja way text! Use it like: ${prefix}naruto [Your Name] 🍥`);
    return; // Exit if no text is provided.
  }
  try {
    // Inform user about the process with a stylish, sassy message and emojis.
    m.reply(`🍥 Channeling the spirit of Naruto... generating your logo style! 🍥✨`);

    // Call the mumaker.ephoto function with the Naruto effect URL and user's text.
    const effectResult = await mumaker.ephoto("https://en.ephoto360.com/naruto-shippuden-logo-style-text-effect-online-808.html", text);

    // Send the generated image with a classy and engaging caption.
    await client.sendMessage(m.chat, {
      image: {
        url: effectResult.image // Assuming effectResult.image contains the image URL.
      },
      caption: `🍥 Your epic Naruto Shippuden Logo Style Text Effect! Believe it! - Frost_Byte-Ai. 🍥`
    }, {
      quoted: m // Ensure the reply is quoted to the original message.
    });
  } catch (error) {
    // Handle any errors with a sassy, apologetic message and emojis.
    m.reply(`🍥 Oh no! The jutsu failed. Try again, darling! 🍥 Error: ${error}`);
    console.error("Error creating Naruto Shippuden Logo Style Text Effect:", error); // Log error for debugging.
  }
}
break;

//========================================================================================================================//		 
case 'graffiti': {
  // Check if text input is provided.
  if (!text || text.trim() === "") {
    // Sassy reply for missing text, with fancy emojis at the start and end.
    m.reply(`🎨 Darling, unleash your inner artist! Use: ${prefix}graffiti [Your Tag] 🖌️`);
    return; // Exit if no text is provided.
  }
  try {
    // Inform user about the process with a stylish, sassy message and emojis.
    m.reply(`🖌️ Spraying some cartoon graffiti magic... stand by! 🎨✨`);

    // Call the mumaker.ephoto function with the Graffiti effect URL and user's text.
    const effectResult = await mumaker.ephoto("https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html", text);

    // Send the generated image with a classy and engaging caption.
    await client.sendMessage(m.chat, {
      image: {
        url: effectResult.image // Assuming effectResult.image contains the image URL.
      },
      caption: `🎨 Your vibrant Cartoon Graffiti Text Effect! Tagged by Frost_Byte-Ai. 🖌️`
    }, {
      quoted: m // Ensure the reply is quoted to the original message.
    });
  } catch (error) {
    // Handle any errors with a sassy, apologetic message and emojis.
    m.reply(`🎨 Oh no! The spray can is empty. Try again, darling! 🖌️ Error: ${error}`);
    console.error("Error creating Cartoon Style Graffiti Text Effect:", error); // Log error for debugging.
  }
}
break;

//========================================================================================================================//
case 'cat': {
  // Check if text input is provided.
  if (!text || text.trim() === "") {
    // Sassy reply for missing text, with fancy emojis at the start and end.
    m.reply(`🐈 Darling, the glass is fogged without your text! Try: ${prefix}cat [Your Name] 🌫️`);
    return; // Exit if no text is provided.
  }
  try {
    // Inform user about the process with a stylish, sassy message and emojis.
    m.reply(`🌫️ Writing your message on the foggy glass... just a sec! 🐈✨`);

    // Call the mumaker.ephoto function with the Foggy Glass effect URL and user's text.
    const effectResult = await mumaker.ephoto("https://en.ephoto360.com/handwritten-text-on-foggy-glass-online-680.html", text);

    // Send the generated image with a classy and engaging caption.
    await client.sendMessage(m.chat, {
      image: {
        url: effectResult.image // Assuming effectResult.image contains the image URL.
      },
      caption: `🌫️ Your charming Handwritten Text on Foggy Glass! Created by Frost_Byte-Ai. 🐈`
    }, {
      quoted: m // Ensure the reply is quoted to the original message.
    });
  } catch (error) {
    // Handle any errors with a sassy, apologetic message and emojis.
    m.reply(`🐈 Oh no! The glass cleared too soon. Try again, darling! 🌫️ Error: ${error}`);
    console.error("Error creating Handwritten Text on Foggy Glass:", error); // Log error for debugging.
  }
}
break;

//========================================================================================================================//
case 'gold': {
  // Check if text input is provided.
  if (!text || text.trim() === "") {
    // Sassy reply for missing text, with fancy emojis at the start and end.
    m.reply(`🌟 Darling, you forgot the golden touch! Try: ${prefix}Gold [Your Name] 👑`);
    return; // Exit if no text is provided.
  }
  try {
    // Inform user about the process with a stylish, sassy message and emojis.
    m.reply(`👑 Infusing your text with modern gold glamour... stand by! 🌟✨`);

    // Call the mumaker.ephoto function with the Modern Gold effect URL and user's text.
    // Deobfuscated 'hunter' to 'effectResult'.
    const effectResult = await mumaker.ephoto("https://en.ephoto360.com/modern-gold-4-213.html", text);

    // Send the generated image with a classy and engaging caption.
    await client.sendMessage(m.chat, {
      image: {
        url: effectResult.image // Assuming effectResult.image contains the image URL.
      },
      caption: `👑 XD e Your dazzling Modern Gold Text Effect! Gleaming from Frost_Byte-Ai. 🌟`
    }, {
      quoted: m // Ensure the reply is quoted to the original message.
    });
  } catch (error) {
    // Handle any errors with a sassy, apologetic message and emojis.
    m.reply(`🌟 Oh no! The gold is a bit dull. Try again, darling! 👑 Error: ${error}`);
    console.error("Error creating Modern Gold Text Effect:", error); // Log error for debugging.
  }
}
break;

//========================================================================================================================//		      
case 'child': {
  // --- Input Validation ---
  if (!text || text.trim() === "") {
    // Sassy and instructive reply with fancy emojis at the start and end.
    m.reply(`👑 Darling, the glass is waiting for your touch! Use it like: ${prefix}child [Your Name] 🌧️`);
    return; // Exit the function if no text is provided.
  }

  // --- Effect Generation ---
  try {
    // Informs the user that the effect is being generated with a stylish and thematic message.
    m.reply(`🌧️ Writing your message on the wet glass... just a moment! 💧✨`);

    // Calls the mumaker.ephoto function to generate the text effect.
    const effectResult = await mumaker.ephoto("https://en.ephoto360.com/write-text-on-wet-glass-online-589.html", text);

    // --- Sending the Generated Image ---
    await client.sendMessage(m.chat, {
      image: {
        // 'effectResult.image' is assumed to contain the URL of the generated image.
        url: effectResult.image
      },
      // A classy caption that describes the effect and credits the bot.
      caption: `💧 Your moody Text on Wet Glass! Expressive art by Frost_Byte-Ai. 🌧️`
    }, {
      // 'quoted: m' ensures the bot's reply is associated with the user's original message.
      quoted: m
    });
  } catch (error) {
    // --- Error Handling ---
    m.reply(`💧 Oh no! The condensation is too much. Try again, darling! 🌧️ Error: ${error}`);
    // Logs the error to the console for debugging purposes.
    console.error("Error creating Write Text on Wet Glass effect:", error);
  }
}
break;

//========================================================================================================================//		      
// Case for fetching a random joke
case 'joke': {
  try {
    // Fetching a joke from the official joke API.
    const url = 'https://official-joke-api.appspot.com/random_joke';
    const response = await axios.get(url);
    const joke = response.data;

    // Crafting a stylish and engaging joke message.
    const jokeMessage = `
✨ *Prepare for a chuckle, darling!* ✨\n\n
😂 **${joke.setup}** 😂\n\n
${joke.punchline} 😜
`;
    // Reply with the formatted joke.
    return reply(jokeMessage);
  } catch (e) {
    // Sassy error message if a joke couldn't be fetched.
    console.log(e);
    return reply("👑 Oh no! The punchline is missing. Couldn't fetch a joke right now, my dear. Try again later! 😅");
  }
}
break;

//========================================================================================================================//		
case "gpass": case 'genpassword': {
  try {
    // Determine password length, defaulting to 12 if not specified or invalid.
    const length = args[0] ? parseInt(args[0]) : 12;

    // Validate the requested password length.
    if (isNaN(length) || length < 8) {
      // Sassy reply for invalid length input.
      return reply("💖 Sweetie, passwords need a minimum of 8 characters! Please provide a valid length. 💅");
    }

    // Function to generate a random password.
    const generatePassword = (len) => {
      // Character set including lowercase, uppercase, numbers, and symbols.
      const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?';
      let password = '';
      for (let i = 0; i < len; i++) {
        // Select a random character from the charset.
        const randomIndex = crypto.randomInt(0, charset.length);
        password += charset[randomIndex];
      }
      return password;
    };

    // Generate the password.
    const password = generatePassword(length);
    // Initial stylish message before revealing the password.
    const message = `🌟 Your fabulous new password is ready, darling! 🔥`;

    // Send the initial notification message.
    await client.sendMessage(from, { text: message }, { quoted: m });

    // Send the generated password in a separate, secure message.
    await client.sendMessage(from, { text: password }, { quoted: m });
  } catch (e) {
    // Sassy error message if password generation fails.
    console.log(e);
    reply(`👑 Oops! Something went wrong while creating your password. 🤕 Error: ${e.message}`);
  }
}
break;

//========================================================================================================================//	
// Case for fetching a fun fact
case "funfact": {
  try {
    // Fetching a random fact from the Useless Facts API.
    const url = 'https://uselessfacts.jsph.pl/random.json?language=en';
    const response = await axios.get(url);
    const fact = response.data.text;

    // Crafting a sassy and informative fun fact message.
    const funFact = `
✨ *Prepare to be amazed, darling! Here's a little nugget of trivia for you:* ✨\n\n
💡 ${fact}\n\n
Fascinating, isn't it? 😉
`;
    // Reply with the formatted fun fact.
    return reply(funFact);
  } catch (e) {
    // Sassy error message if a fun fact couldn't be fetched.
    console.log(e);
    return reply("👑 Oh dear, the trivia gods are silent! Couldn't fetch a fun fact right now. Try again later, sweetie! 😅");
  }
}
break;

//========================================================================================================================//		      
// Case for fetching an anime girl image
case 'animegirl': {
  try {
    // Fetching a SFW anime girl image from the API.
    const apiUrl = `https://api.waifu.pics/sfw/waifu`;
    const response = await axios.get(apiUrl);
    const data = response.data;

    // Sending the image with a stylish caption.
    await client.sendMessage(from, { image: { url: data.url }, caption: '*✨ Your requested Anime Girl image, served with style by Raven-MD! ✨*' }, { quoted: m });
  } catch (e) {
    // Sassy error message if the image fetch fails.
    console.log(e);
    reply(`👑 Oops! Couldn't fetch that anime charm for you. 😥 Error: ${e.message}`);
  }
}
break;

//========================================================================================================================//
// Case for pairing users in a group
case 'rship': {
  // Helper function to format user IDs.
  const toM = (a) => '@' + a.split('@')[0];
  try {
    // Ensure the command is used within a group chat.
    if (!m.isGroup) {
      return reply("💖 Darling, this command is exclusively for group chats! Find your match there. 👑");
    }

    // Get all participant IDs from the group metadata.
    const participants = groupMetadata.participants.map(p => p.id);

    // Check if there are enough members to form a pair.
    if (participants.length < 2) {
      return reply("💋 Not enough members in this group to play matchmaker, sweetie!");
    }

    // The sender of the command.
    const sender = m.sender;

    // Randomly select another participant, ensuring it's not the sender themselves.
    let randomParticipant;
    do {
      randomParticipant = participants[Math.floor(Math.random() * participants.length)];
    } while (randomParticipant === sender);

    // Craft a sassy and celebratory pairing message.
    const message = `${toM(sender)} your destined match is ${toM(randomParticipant)}!\n\n💖 Congratulations, you two! 💖`;
    // Send the message with mentions for the paired users.
    await client.sendMessage(from, { text: message, mentions: [sender, randomParticipant] });
  } catch (e) {
    // Sassy error message for any issues during the pairing process.
    console.error("Error in ship command:", e);
    reply("👑 Oh no! The matchmaking magic failed. Please try again later, darling. 💔");
  }
}
break;

//========================================================================================================================//
// Case for calculator functionality
case 'calculate': case 'calc': {
  try {
    // Check if text input (the expression) is provided.
    if (!text) {
      // Sassy usage example if no expression is given.
      return m.reply("*Hello there! Ready to crunch some numbers?* 🤓\n\n*Example usage:* `.calculate 5+72`");
    }

    // Validate the input to prevent unsafe operations.
    // Allows only numbers, basic arithmetic operators, parentheses, and whitespace.
    if (!/^[0-9+\-*/().\s]+$/.test(text)) {
      // Sassy error for invalid input format.
      return m.reply("💅 Darling, I only understand numbers and basic math symbols (+, -, *, /, parentheses). Please format your expression correctly! 💋");
    }

    // Evaluate the mathematical expression using eval().
    // Use with caution, as eval() can be a security risk if input is not properly sanitized.
    let result = eval(text);

    // Reply with the calculated result.
    m.reply(`✨ Your calculation is complete, gorgeous! ✨\n\n${text} = ${result}`);
  } catch (e) {
    // Sassy error message for calculation errors.
    console.error("Error in .calculate command:", e);
    m.reply(`👑 Oops! Couldn't quite solve that. 🤔 Please double-check your expression, sweetie!`);
  }
}
break;

//========================================================================================================================//
// Case for Raven AI Chatbot
case "raven": {
  // Check if a question is provided.
  if (!text) return reply(`👑 Hello there, darling! What's on your mind today? 💖`);
  try {
    // Fetching response from the Llama AI API.
    let d = await fetchJson(`https://bk9.fun/ai/llama?q=${text}`);
    // Check if the API returned a valid response.
    if (!d.BK9) {
      // Sassy error message for API failure.
      return reply("👑 Oh no! The AI seems to be napping. Couldn't fetch a response. Try again later, my dear! 😴");
    } else {
      // Reply with the AI's response.
      reply(d.BK9);
    }
  } catch (e) {
    // Sassy error message for general fetch errors.
    console.log(e);
    reply("👑 My apologies, darling! An error occurred while fetching the AI chatbot response. Please try again later. 😥");
  }
}
break;

//========================================================================================================================//

// Case for GPT-4 AI Chatbot
case "gpt4": {
  // Check if a question is provided.
  if (!text) return reply(`👑 Hello there, darling! What's on your mind today? 💖`);
  try {
    // Fetching response from the Aoyo AI API.
    let d = await fetchJson(`https://bk9.fun/ai/Aoyo?q=${text}`);
    // Check if the API returned a valid response.
    if (!d.BK9) {
      // Sassy error message for API failure.
      return reply("👑 Oh no! The AI seems to be napping. Couldn't fetch a response. Try again later, my dear! 😴");
    } else {
      // Reply with the AI's response.
      reply(d.BK9);
    }
  } catch (e) {
    // Sassy error message for general fetch errors.
    console.log(e);
    reply("👑 My apologies, darling! An error occurred while fetching the AI chatbot response. Please try again later. 😥");
  }
}
break;

//========================================================================================================================//

// Case for GPT-3 AI Chatbot
case 'gpt3': {
  // Check if a question (q) is provided.
  if (!q) return reply("👑 Holla, darling! I'm all ears. What's your question? 💖");
  try {
    // Fetching response from the OpenAI API.
    const apiUrl = `https://vapis.my.id/api/openai?q=${encodeURIComponent(q)}`;
    const { data } = await axios.get(apiUrl);

    // Check if the API returned a valid response.
    if (!data || !data.result) {
      // Sassy error message for API failure.
      return reply("👑 Oh no! OpenAI is being a bit shy today. Couldn't get a response. Try again later, sweetie! 😥");
    }
    // Reply with the AI's response.
    await reply(`${data.result}`);

  } catch (e) {
    // Sassy error message for communication errors.
    console.error("Error in OpenAI command:", e);
    reply("👑 My apologies, darling! An error occurred while communicating with the API. 💔");
  }
};
break;

//========================================================================================================================//

// Case for GPT-2 AI Chatbot
case "gpt2": {
  // Check if a question (q) is provided.
  if (!q) return reply("👑 Hello there, darling! What's on your mind? 💖");
  try {
    // Fetching response from the Lance-Frank-Asta AI API.
    const apiUrl = `https://lance-frank-asta.onrender.com/api/gpt?q=${encodeURIComponent(q)}`;
    const { data } = await axios.get(apiUrl);

    // Check if the API returned a valid response.
    if (!data || !data.message) {
      // Sassy error message for API failure.
      return reply("👑 Oops! The AI seems to have lost its words. Couldn't fetch a response. Try again later, sweetie! 😥");
    }
    // Reply with the AI's response.
    await reply(`${data.message}`);
  } catch (e) {
    // Sassy error message for communication errors.
    console.error("Error in AI command:", e);
    reply("👑 My apologies, darling! An error occurred while communicating with the API. 💔");
  }
};
break;

//========================================================================================================================//

// Case for Generic AI Chatbot
case 'gpt': {
  // Check if text input is provided.
  if (!text) return m.reply("👑 Hello there, darling! What's going on? Tell me all about it! 💖");
  try {
    // Fetching response from the Dreaded.site AI API.
    const data = await fetchJson(`https://api.dreaded.site/api/aichat?query=${text}`);

    // Check if the API returned a valid response.
    if (data && data.result) {
      const res = data.result;
      // Reply with the AI's response.
      await m.reply(res);
    } else {
      // Sassy error message for API failure.
      m.reply("👑 Oh no! The AI is being a bit mysterious. Couldn't fetch a response. Try again later, sweetie! 😥");
    }
  } catch (error) {
    // Sassy error message for general fetch errors.
    reply('👑 My apologies, darling! An error occurred while communicating with the APIs. 💔\n' + error);
  }
}
break;

//========================================================================================================================//	      		      
// Case for translation command
case 'trt': case 'translate': {
  try {
    // --- Input Validation ---
    // Check if a message is quoted, as translation is applied to the quoted message.
    if (!m.quoted) {
      // Sassy reply if no message is quoted.
      return m.reply("👑 Darling, you need to quote the message you want me to translate! 💬");
    }

    // Extract the language code from the provided text.
    // Ensure text is not null/undefined before trim and call the trim function.
    const langCode = text ? text.trim() : '';

    // Check if a valid language code is provided.
    if (!langCode) {
      // Sassy reply if no language code is given.
      return m.reply("💖 Please specify the target language, sweetie! Example: `.translate en` for English. 🌍");
    }

    // Get the text from the quoted message.
    const quotedMessage = m.quoted.text;

    // --- Translation Process ---
    // Translate the quoted message to the specified language.
    // Assuming 'translatte' is an imported function available in the scope.
    const translation = await translatte(quotedMessage, { to: langCode });

    // --- Sending the Translated Message ---
    // Reply with the translated text in a stylish manner.
    m.reply(`✨ Voilà! Your translated message, darling: ✨\n\n${translation.text}`);

  } catch (e) {
    // --- Error Handling ---
    // Sassy error message if translation fails.
    console.error("Error in .translate command:", e);
    m.reply(`👑 Oh no! I couldn't translate that for you. Perhaps the language code is incorrect, or the API is having a moment. 😥 Please try again later!`);
  }
}
break;

//========================================================================================================================//		      
 // Case for casting a message to group members (Owner only)
case 'cast': {
  // --- Access Control ---
  // Checks if the command is being used by the owner. (Assuming 'Owner' is a boolean flag)
  if (!Owner) return m.reply("👑 Darling, only the owner can initiate the 'cast' command! 💅");
  // Checks if the command is used in a group. (Assuming 'm.isGroup' is a boolean)
  if (!m.isGroup) return m.reply("💖 This command is exclusively for group chats, sweetie! 👑");
  // Checks if text content is provided for the cast.
  if (!text) return m.reply(`📣 Darling, what message shall I cast to everyone? Please provide the text! 📣`);

  try {
    // Filter participants to get their IDs.
    // Assuming 'participants' is an array of participant objects with an 'id' property.
    // Assuming 'mycode' is a country code constant.
    let membersToCast = participants
      .filter(member => member.id.endsWith('.net')) // Assuming a filter for valid IDs.
      .map(member => member.id); // Extracting the ID.

    // Inform the user about the casting process with a sassy tone.
    m.reply(`✨ Casting your message to ${membersToCast.length} contacts... Stand by, darling! ✨\n\n*Please note: Frequent use of this command might attract unwanted attention from WhatsApp. Use wisely!* 😉`);

    // Loop through each member and send the message.
    for (let memberId of membersToCast) {
      // Send the message to each member.
      // Assuming 'q' holds the message content and 'client' is the WhatsApp client instance.
      client.sendMessage(memberId, { text: q });
    }

    // Final confirmation message with a sassy touch.
    m.reply(`💖 Casting completed successfully, my dear! Your message has been delivered. 😁`);

  } catch (e) {
    // --- Error Handling ---
    // Sassy error message if casting fails.
    console.error("Error in .cast command:", e);
    m.reply(`👑 Oh no! An error occurred while casting the message. Please try again later, sweetie! 😥`);
  }
}
break;

//========================================================================================================================//		      
// Case for searching images using GIS
case "img": case "ai-img": case "image": case "images": {
  // Require the GIS library for image searching.
  var gis = require('g-i-s');

  // --- Input Validation ---
  // Check if a search query is provided.
  if (!text) return m.reply("👑 Darling, what image are you looking for? Please provide a search term! 🖼️");

  try {
    // Use the 'text' as the search term for images.
    // The gis function takes the search term and a callback function.
    gis(text, async (error, results) => {
      // --- Error Handling for GIS Search ---
      if (error) {
        // Sassy error message if the search fails.
        return m.reply(`👑 Oh no! An error occurred while searching for images. 😥 Error: ${error}`);
      }

      // --- Result Processing ---
      // Check if any results were found.
      if (results.length === 0) {
        // Sassy message if no images are found.
        return m.reply(`😔 I couldn't find any images matching "${text}", darling. Perhaps try a different search term?`);
      }

      // Limit the number of images to send (e.g., 5) to avoid overwhelming the user or chat.
      const numberOfImages = Math.min(results.length, 5);
      // Extract the URLs of the found images.
      const imageUrls = results.slice(0, numberOfImages).map(result => result.url);

      // --- Sending Images ---
      // Prepare messages for each image with a stylish caption.
      const messages = imageUrls.map(url => ({
        image: { url },
        caption: `✨ Here are some images for "${text}", found by Raven-Bot! ✨`
      }));

      // Send each image message sequentially.
      // Assuming 'client' is the WhatsApp client instance.
      for (const message of messages) {
        await client.sendMessage(m.chat, message, { quoted: m });
      }
    });
  } catch (e) {
    // --- General Error Handling ---
    // Sassy error message for any unexpected errors.
    m.reply(`👑 My apologies, darling! An unexpected error occurred. 😥 Error: ${e}`);
  }
}
break;

//========================================================================================================================//		      
// Case for managing "foreigners" (members not from the bot's country code)
case "foreigners": {
  // --- Access Control ---
  // Ensure the command is used in a group. (Assuming 'm.isGroup' is a boolean)
  if (!m.isGroup) return m.reply("👑 Only group admins can manage foreigners, darling! 💅");
  // Ensure the user is an admin. (Assuming 'isAdmin' is a boolean flag)
  if (!isAdmin) return m.reply("💖 Only group admins can manage foreigners, sweetie! 💅");
  // Ensure the bot is an admin. (Assuming 'isBotAdmin' is a boolean flag)
  if (!isBotAdmin) return m.reply("✨ I need admin privileges to manage members, darling! Please promote me. 👑");

  // --- Logic for Identifying Foreigners ---
  // Filter participants to find those who are not admins and whose country code doesn't match 'mycode'.
  // Also exclude the bot itself.
  // Assuming 'participants' is an array of participant objects with 'id' and 'admin' properties.
  // Assuming 'mycode' is a country code constant.
  // Assuming 'client.decodeJid' is a function to get the bot's JID.
  let nonAdminForeigners = participants
    .filter(member => !member.admin) // Filter out admins.
    .map(member => member.id) // Get participant IDs.
    .filter(memberId => !memberId.startsWith(mycode) && memberId !== client.decodeJid(client.user.id)); // Filter by country code and exclude bot.

  // --- Handling Different Arguments ---
  if (!args || !args[0]) {
    // If no argument is provided, list the foreigners.
    if (nonAdminForeigners.length === 0) {
      // Sassy reply if no foreigners are detected.
      return m.reply("👑 All members here are locals, darling! No foreigners detected. 😉");
    }

    // Construct the message listing the foreigners with a sassy tone.
    let foreignerListMessage = `🌍 **Foreigner Alert!** 🌍\n\n`;
    foreignerListMessage += `These members' country codes do not match ${mycode}. We've detected ${nonAdminForeigners.length} of them:\n\n`;
    for (let foreignerId of nonAdminForeigners) {
      // Format ID to mention the user.
      foreignerListMessage += `𓅂 @${foreignerId.split("@")[0]}\n`;
    }
    foreignerListMessage += `\n✨ To remove them, send \`${prefix}foreigners -x\`! ✨`;

    // Send the list with mentions.
    client.sendMessage(m.chat, {
      text: foreignerListMessage,
      mentions: nonAdminForeigners
    }, {
      quoted: m
    });

  } else if (args[0] === "-x") {
    // If the argument is '-x', proceed to remove foreigners.
    // Use setTimeout to allow the initial message to be sent first.
    setTimeout(() => {
      // Inform the user about the impending removal with a dramatic flair.
      client.sendMessage(m.chat, {
        text: `⏳ Preparing to remove all ${nonAdminForeigners.length} foreigners from this group in the next second.\n\nGoodbye, dear foreigners! This process cannot be terminated. ⚠️`
      }, {
        quoted: m
      });

      // Perform the removal after a short delay.
      setTimeout(() => {
        // Remove participants from the group using the client instance.
        client.groupParticipantsUpdate(m.chat, nonAdminForeigners, "remove");
        // Send a follow-up message after removal.
        setTimeout(() => {
          m.reply("🧐 Are there any remaining foreigners? Let me know! 🌚");
        }, 1000); // Delay before the final check message.
      }, 1000); // Delay before removing members.
    }, 1000); // Delay before sending the initial removal notice.
  }
}
break;

//========================================================================================================================//
 // Case for AI Image Analysis using Gemini Vision (via different APIs)

// --- AI Command (using bk9.fun/ai/geminiimg) ---
case "ai": {
  // Import necessary modules (assuming they are available in the environment).
  const { GoogleGenerativeAI: _0x817910 } = require("@google/generative-ai");
  const _0xc0423b = require("axios");

  try {
    // --- Input Validation ---
    // Check if a message is quoted (expected to be an image).
    if (!m.quoted) {
      return m.reply("👑 Darling, please quote an image and provide instructions! I'm RAVEN AI, using Gemini-Pro-Vision to analyze images. 🖼️");
    }
    // Check if text instructions are provided.
    if (!text) {
      return m.reply("👑 Please provide some instructions, sweetie! This is RAVEN AI, using Gemini-Pro-Vision to analyze images. 🧐");
    }
    // Check if the quoted message is an image or PDF. (Assuming 'mime' is available)
    if (!/image|pdf/.test(mime)) {
      return m.reply("🤨 Huh? That's not an image! Please tag an image with your instructions, darling! 🖼️");
    }

    // --- Media Handling ---
    // Download and save the quoted media.
    let localMediaPath = await client.downloadAndSaveMediaMessage(m.quoted);
    // Upload the media to Catbox for accessibility. (Assuming 'uploadToCatbox' is available)
    let uploadedUrl = await uploadToCatbox(localMediaPath);

    // Inform the user about the analysis process with a sassy tone.
    m.reply(`⏳ A moment, darling! Let me analyze the contents of the ${mime.includes("pdf") ? "PDF" : "image"}... 🧐`);

    // --- Gemini API Interaction ---
    // Initialize Google Generative AI with an API key. (Consider secure key management)
    const genAI = new _0x817910("AIzaSyDJUtskTG-MvQdlT4tNE319zBqLMFei8nQ"); // Replace with actual key management if needed.

    // Helper function to prepare image data for Gemini API.
    async function prepareImageForGemini(imageUrl, mimeType) {
      const options = { responseType: "arraybuffer" };
      const imageResponse = await _0xc0423b.get(imageUrl, options);
      const base64Image = Buffer.from(imageResponse.data).toString("base64");
      const imageData = { data: base64Image, mimeType: mimeType };
      const imagePart = { inlineData: imageData };
      return imagePart;
    }

    // Configure the Gemini model.
    const modelConfig = { model: "gemini-1.5-flash" };
    const generativeModel = genAI.getGenerativeModel(modelConfig);

    // Prepare the image part for the content.
    const imagePart = await prepareImageForGemini(uploadedUrl, "image/jpeg"); // Assuming JPEG for simplicity.

    // Generate content using the text instructions and the image.
    const result = await generativeModel.generateContent([text, imagePart]);
    const response = await result.response;
    const analyzedText = response.text();

    // --- Sending the Analysis Result ---
    await m.reply(analyzedText);

  } catch (_0x4b3921) {
    // --- Error Handling ---
    m.reply(`👑 My apologies, darling! I am unable to analyze images at the moment. 😥\n${_0x4b3921}`);
  }
}
break;

//========================================================================================================================//

// --- AI2 Command (using api.dreaded.site/api/gemini-vision) ---
case "ai2": {
  const axios = require("axios");

  try {
    // --- Input Validation ---
    // Check if a message is quoted. (Assuming 'm.quoted' is available)
    if (!m.quoted) return m.reply("👑 Darling, send the image first, then tag it with instructions! 💬");
    // Check if text instructions are provided.
    if (!text) return m.reply("👑 Please provide some instructions, sweetie! This Raven AI uses Gemini-Pro-Vision to analyze images. 🧐");
    // Check if the quoted message is an image or PDF. (Assuming 'mime' is available)
    if (!/image|pdf/.test(mime)) return m.reply("🤨 Huh? That's not an image! Try again while quoting an actual image, darling! 🖼️");

    // --- Media Handling ---
    // Download and save the quoted media.
    let fdr = await client.downloadAndSaveMediaMessage(m.quoted);
    // Upload the media to Catbox. (Assuming 'uploadToCatbox' is available)
    let fta = await uploadToCatbox(fdr);

    // Inform the user about the analysis process with a sassy tone.
    m.reply(`⏳ A moment, darling! RAVEN[RAVEN-AI] is analyzing the contents of the ${mime.includes("pdf") ? "PDF" : "image"}... 🧐`);

    // --- API Interaction ---
    // Fetch analysis results from the dreaded.site API.
    const data = await fetchJson(`https://api.dreaded.site/api/gemini-vision?url=${fta}&instruction=${text}`);
    let res = data.result;

    // --- Sending the Analysis Result ---
    await m.reply(res);

  } catch (e) {
    // --- Error Handling ---
    m.reply(`👑 My apologies, darling! I am unable to analyze images at the moment. 😥\n${e}`);
  }
}
break;

//========================================================================================================================//

// --- Vision Command (using bk9.fun/ai/geminiimg) ---
case "vision": {
  // Check if message is quoted and text instructions are provided.
  // Assuming 'msgR' is the quoted message object and 'text' is the instruction.
  if (!msgR || !text) {
    return m.reply("👑 Darling, quote an image and give some instructions! I'm RAVEN AI, I use Bard to analyze images. 🖼️");
  }
  
  let imageMessageData; // Variable to hold image message data.
  if (msgR.imageMessage) {
    imageMessageData = msgR.imageMessage;
  } else {
    // Sassy reply if the quoted message is not an image.
    m.reply("🤨 Huh? That's not an image! Send an image then tag it with the instructions, darling! 🖼️");
    return;
  };

  try {
    // --- Media Handling ---
    // Download and save the image.
    let localMediaPath = await client.downloadAndSaveMediaMessage(imageMessageData);
    // Upload to Catbox. (Assuming 'uploadToCatbox' is available)
    let uploadedUrl = await uploadToCatbox(localMediaPath);

    // Inform the user about the analysis process with a sassy tone.
    m.reply("⏳ A moment, darling! Let me analyze the contents of the image... 🧐");

    // --- API Interaction ---
    // Fetch analysis results from the bk9.fun API.
    let analysisResult = await (await fetch("https://bk9.fun/ai/geminiimg?url=" + uploadedUrl + "&q=" + text)).json();
    const responseData = { // Prepare the response object.
      text: analysisResult.BK9 // Assuming BK9 contains the analysis result.
    };

    // --- Sending the Analysis Result ---
    await client.sendMessage(m.chat, responseData, {
      quoted: m
    });
  } catch (_0x1be711) {
    // --- Error Handling ---
    m.reply(`👑 My apologies, darling! An error occurred. 😥\n${_0x1be711}`);
  }
}
break;

//========================================================================================================================//		      
// Case for enhancing images using Remini AI
case 'remini': {
  // --- Input Validation ---
  // Check if a message is quoted. (Assuming 'quoted' is the quoted message object)
  if (!quoted) return reply(`👑 Darling, where is the image you want me to enhance? 🖼️`);
  // Check if the quoted message is an image. (Assuming 'mime' is available)
  if (!/image/.test(mime)) return reply(`🤨 Huh? That's not an image! Please quote an image with captions, sweetie. ${prefix + command}`);

  try {
    // Import the remini function from the local library.
    // Assuming the path '../lib/remini' is correct and exports a 'remini' function.
    const { remini } = require('../lib/remini');

    // Download the quoted image media.
    let media = await quoted.download();
    // Process the image using the remini function for enhancement.
    let proses = await remini(media, "enhance"); // Assuming "enhance" is a valid operation.

    // --- Sending the Enhanced Image ---
    // Send the enhanced image back to the chat with a stylish caption.
    // Assuming 'client' is the WhatsApp client instance.
    client.sendMessage(m.chat, { image: proses, caption: '✨ Your image, enhanced to perfection by Raven-Bot! ✨'}, { quoted: m });

  } catch (e) {
    // --- Error Handling ---
    // Sassy error message if enhancement fails.
    reply(`👑 Oh no! I couldn't enhance that image for you. 😥 Error: ${e}`);
  }
}
break;

//========================================================================================================================//	    
// Case for removing all participants from the current group (Owner only)
case "kill": case "kickall": {
  // --- Access Control ---
  // Ensure the command is used by the owner.
  if (!Owner) throw NotOwner;
  // Ensure the command is used in a group.
  if (!m.isGroup) throw group;
  // Ensure the bot is an admin.
  if (!isBotAdmin) throw botAdmin;

  // Get all participant IDs except the bot's own ID.
  let participantsToKick = participants.filter(_0x5202af => _0x5202af.id != client.decodeJid(client.user.id)).map(_0x3c0c18 => _0x3c0c18.id);
		      
  // --- Initialization and Preparation ---
  m.reply("💀 Initializing Kill command... Prepare for impact, darling! 💥");
  await client.groupSettingUpdate(m.chat, "announcement"); // Set group to announcement mode.
  await client.removeProfilePicture(m.chat); // Remove the group's profile picture.
  await client.groupUpdateSubject(m.chat, "𝗧𝗵𝗶𝘀 𝗴𝗿𝗼𝘂𝗽 𝗶𝘀 𝗻𝗼 𝗹𝗼𝗻𝗴𝗲𝗿 𝗮𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲 🚫"); // Change group subject.
  await client.groupUpdateDescription(m.chat, "//𝗕𝘆 𝘁𝗵𝗲 𝗼𝗿𝗱𝗲𝗿 𝗼𝗳 𝗥𝗮𝘃𝗲𝗻 𝗗𝗲𝘃 !"); // Update group description.
  await client.groupRevokeInvite(m.chat); // Revoke the group's invite link.
	
  // --- Execution Sequence ---
  setTimeout(() => {
    // Send a confirmation message before kicking participants.
    client.sendMessage(m.chat, {
      'text': `✅ All parameters configured! Kill command initialized and confirmed. Removing all ${participantsToKick.length} participants in the next second.\n\nGoodbye Everyone! 👋\n\n⚠️ THIS PROCESS IS IRREVERSIBLE ⚠️`
    }, {
      'quoted': m
    });
    // Delay before actually removing participants.
    setTimeout(() => {
      client.groupParticipantsUpdate(m.chat, participantsToKick, "remove"); // Remove all participants.
      // Delay before sending the final message and leaving.
      setTimeout(() => {
        m.reply("💖 Successfully removed all group participants, my dear! Goodbye! 🥶");
        client.groupLeave(m.chat); // Bot leaves the group.
      }, 1000);
    }, 1000);
  }, 1000);
};	      
break;
		      
//========================================================================================================================//		      
// Case for removing all participants from a specified group via link (Owner only)
case "kill2": case "kickall2": {
    // --- Access Control ---
    // Ensure the command is used by the owner.
    if (!Owner) throw NotOwner;
    // Check if a group link is provided.
    if (!text) {
      return m.reply("👑 Darling, please provide a valid group link. Ensure I'm in that group and have admin privileges! 🔗");
    }

    let groupId;
    let groupName;
    try {
      // Extract invite code from the link.
      let inviteCode = args[0].split("https://chat.whatsapp.com/")[1];
      // Get group information using the invite code.
      const groupInfo = await client.groupGetInviteInfo(inviteCode);
      ({ id: groupId, subject: groupName } = groupInfo); // Destructure group ID and subject.
    } catch (error) {
      // Sassy error if the provided link is invalid.
      m.reply("🤨 Huh? That seems like an invalid group link, sweetie! Please try again. 🔗");
      return;
    }

    try {
      // Fetch metadata for the target group.
      const groupMetadata = await client.groupMetadata(groupId);
      const participants = await groupMetadata.participants;
      // Get participant IDs, excluding the bot.
      let participantIds = participants
        .filter(participant => participant.id !== client.decodeJid(client.user.id))
        .map(participant => participant.id);

      // --- Initialization and Preparation ---
      await m.reply(`💀 Initializing and preparing to kill "${groupName}"... Prepare for impact, darling! 💥`);
      await client.groupSettingUpdate(groupId, "announcement"); // Set group to announcement mode.
      await client.removeProfilePicture(groupId); // Remove the group's profile picture.
      await client.groupUpdateSubject(groupId, "𝗧𝗵𝗶𝘀 𝗴𝗿𝗼𝘂𝗽 𝗶𝘀 𝗻𝗼 𝗹𝗼𝗻𝗴𝗲𝗿 𝗮𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲 🚫"); // Change group subject.
      await client.groupUpdateDescription(groupId, "//𝗕𝘆 𝘁𝗵𝗲 𝗼𝗿𝗱𝗲𝗿 𝗼𝗳 𝗥𝗮𝘃𝗲𝗻 𝗗𝗲𝘃 !"); // Update group description.
      await client.groupRevokeInvite(groupId); // Revoke the group's invite link.

      // --- Execution Sequence ---
      // Send a message to the target group about the impending action.
      await client.sendMessage(
        groupId,
        {
          text: `✅ My owner has initiated the kill command remotely! Removing all ${participantIds.length} participants from "${groupName}" in the next second.\n\nGoodbye Everyone! 👋\n\n⚠️ THIS PROCESS CANNOT BE TERMINATED ⚠️`,
          mentions: participants.map(participant => participant.id) // Mention all participants.
        });

      // Remove all participants from the target group.
      await client.groupParticipantsUpdate(groupId, participantIds, "remove");

      // Send a final goodbye message to the target group.
      const goodbyeMessage = {
        text: "💖 Goodbye Group owner! It's too cold in here now. 🥶"
      };
      await client.sendMessage(groupId, goodbyeMessage);

      // Bot leaves the target group.
      await client.groupLeave(groupId);
      // Reply to the original sender confirming success.
      await m.reply("```💖 Successfully executed the kill command! 💀```");
    } catch (error) {
      // Sassy error message if the command fails (e.g., bot not in group or not admin).
      m.reply("```👑 Kill command failed. Ensure I'm in the group and have admin rights, darling.```");
    }
  }
break;
		      
//========================================================================================================================//		      
// Carbon Command (`carbon`)
// Description: Converts code snippets into image cards using the Carbonara API.
		      case 'carbon': {
		      const fetch = require('node-fetch'); // Import node-fetch for API requests.

  let caption = `✨ Converted by ${botname}, darling! ✨`; // Stylish caption for the generated image.

  // --- Input Validation ---
  // Check if a message is quoted and contains text (the code snippet).
  if (m.quoted && m.quoted.text) {
    const codeSnippet = m.quoted.text; // Get the quoted code.

    try {
      // --- API Interaction ---
      // Send a POST request to the Carbonara API to convert code to an image.
      let response = await fetch('https://carbonara.solopov.dev/api/cook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Specify content type as JSON.
        },
        body: JSON.stringify({ // Stringify the request body.
          code: codeSnippet, // The code snippet to convert.
          backgroundColor: '#1F816D', // A stylish background color.
        }),
      });

      // --- Response Handling ---
      // Check if the API response was successful (status code 2xx).
      if (!response.ok) return m.reply('👑 Oh no! The API failed to fetch a valid response. It might be having a moment, sweetie!');

      // Get the image buffer from the response.
      let imageBuffer = await response.buffer();

      // --- Sending the Image ---
      // Send the generated image with the caption.
      await client.sendMessage(m.chat, { image: imageBuffer, caption: caption }, { quoted: m });
    } catch (error) {
      // --- Error Handling ---
      // Sassy error message if any error occurs during the process.
      m.reply(`👑 My apologies, darling! An error occurred. 😥\n${error}`);
    }
  } else {
    // Sassy reply if no code message is quoted.
    m.reply('👑 Darling, please quote the code message you want me to convert! 💬');
  }
}
	 break;

//========================================================================================================================//		      
// Define Command (`define`)
// Description: Fetches definitions for words from an online dictionary API.
		case 'define': {
		      try {
        // --- Input Validation ---
        // Check if a word is provided in the command text.
        if (!text) {
            return m.reply('👑 Darling, please provide the word you want me to define! 🧐');
        }

        // Encode the word for safe URL inclusion.
        const word = encodeURIComponent(text);

        // --- API Interaction ---
        // Fetch definitions from the dictionary API.
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

        // --- Response Handling ---
        // Check if the API response was successful.
        if (!response.ok) {
            return m.reply('👑 Oh no! I failed to fetch the definition. The dictionary might be offline, sweetie. Please try again later. 😥');
        }

        // Parse the JSON response.
        const data = await response.json();

        // Check if definitions were found.
        if (!data || !data[0] || !data[0].meanings || data[0].meanings.length === 0) {
            return m.reply(`😔 I couldn't find any definitions for "${text}", darling. Perhaps try a different word?`);
        }

        // Extract the first definition.
        const definitionData = data[0];
        const definition = definitionData.meanings[0].definitions[0].definition;
        
        // Prepare the message with the definition.
        const message = `${definition}`;

        // --- Sending the Definition ---
        // Send the definition back to the chat with a stylish message.
        await client.sendMessage(m.chat, { text: `✨ Here is the definition you requested, darling: ✨\n\n${message}` }, { quoted: m });

    } catch (error) {
        // --- Error Handling ---
        // Log the error and provide a sassy reply.
        console.error("Error occurred:", error);
        m.reply(`👑 My apologies, darling! An error occurred while fetching the data. Please try again later. 😥\n${error}`);
    }
}
	break;

//========================================================================================================================//		      
// Tweet Command (`tweet`)
// Description: Creates a tweet-like image from user input.
	         case "tweet": {
		      // --- Input Validation ---
		      // Check if text for the tweet is provided.
		      if (!text) return m.reply("👑 Darling, what message shall I put on this tweet? Please provide the text! 🐦");

		      // --- Data Preparation ---
		      // Get user's display name, username, and profile picture URL.
		      const displayName = pushname; // User's display name.
		      const username = m.sender.split('@')[0]; // User's username (from sender ID).
		      // Get profile picture URL, with a fallback if it fails.
		      const avatar = await client.profilePictureUrl(m.sender, 'image').catch(_ => 'https://i.imgur.com/vuxJCTB.jpeg');
		      // Define tweet-like parameters.
		      const replies = "246"; // Example replies count.
		      const retweets = "125"; // Example retweets count.
		      const theme = "dark"; // Example theme.

		      // Construct the API URL for generating the tweet image.
		      const imageUrl = `https://some-random-api.com/canvas/misc/tweet?displayname=${encodeURIComponent(displayName)}&username=${encodeURIComponent(username)}&avatar=${encodeURIComponent(avatar)}&comment=${encodeURIComponent(text)}&replies=${encodeURIComponent(replies)}&retweets=${encodeURIComponent(retweets)}&theme=${encodeURIComponent(theme)}`;

		      // --- Sending the Tweet Image ---
		      // Send the generated tweet image with a stylish caption.
		      await client.sendMessage(m.chat, { image: { url: imageUrl}, caption: `✨ Here's your tweet, crafted with style by Raven-Bot! ✨`}, { quoted: m});
	}
	 break;

//========================================================================================================================//		      
// Pickup Line Command (`pickupline`)
// Description: Fetches a random pickup line from an API.
		      case "pickupline": {
		      const API_URL = 'https://api.popcat.xyz/pickuplines'; // API endpoint for pickup lines.

		    try {
		        // --- API Interaction ---
		        // Fetch data from the pickup line API.
		        const response = await fetch(API_URL);
		        // Check if the response was successful.
		        if (!response.ok) throw new Error('Failed to fetch data');

		        // Parse the JSON response.
		        const { pickupline } = await response.json();
		        // Format the pickup line message.
		        const lineMessage = `${pickupline}`;

		        // --- Sending the Pickup Line ---
		        // Send the pickup line to the chat with a sassy message.
		        await client.sendMessage(m.chat, { text: lineMessage }, { quoted: m });
		    } catch (error) {
		        // --- Error Handling ---
		        // Sassy error message if fetching fails.
		        console.error('Error fetching data:', error);
		        await client.sendMessage(m.chat, { text: '👑 Oh no! I couldn\'t fetch a pickup line for you. The pickup line API might be resting. Try again later, sweetie! 😉' }, { quoted: m });
		    }
		}
	break;

//========================================================================================================================//		      
// Quotes Command (`quotes`)
// Description: Fetches a random quote of the day from an API.
		      case "quotes": {
		      const API_URL = 'https://favqs.com/api/qotd'; // API endpoint for quote of the day.

		    try {
		        // --- API Interaction ---
		        // Fetch data from the quote API.
		        const response = await fetch(API_URL);
		        // Check if the response was successful.
		        if (!response.ok) throw new Error('Failed to fetch data');

		        // Parse the JSON response.
		        const { quote } = await response.json();
		        // Format the quote message with author.
		        const quoteMessage = `${quote.body} \n\n✨ Quoted by ${quote.author}, darling! ✨`;

		        // --- Sending the Quote ---
		        // Send the quote to the chat with a stylish message.
		        await client.sendMessage(m.chat, { text: quoteMessage }, { quoted: m });
		    } catch (error) {
		        // --- Error Handling ---
		        // Sassy error message if fetching fails.
		        console.error('Error fetching data:', error);
		        await client.sendMessage(m.chat, { text: '👑 Oh no! I couldn\'t fetch a quote for you. The quote API might be taking a break. Try again later, darling! ✨' }, { quoted: m });
		    }
		}
	break;

//========================================================================================================================//		      
// Google Search Command (`google`)
// Description: Performs a Google search and returns results.
		      case "google": {
		      const axios = require("axios"); // Import axios for API requests.
		      // --- Input Validation ---
		      // Check if a search term is provided.
		        if (!text) {
		            m.reply('👑 Darling, please provide a search term! 🧐\nEg: `.Google What is treason`');
		            return;
		        }
		        // --- API Interaction ---
		        // Fetch search results from Google Custom Search API.
		        let { data } = await axios.get(`https://www.googleapis.com/customsearch/v1?q=${text}&key=AIzaSyDMbI3nvmQUrfjoCJYLS69Lej1hSXQjnWI&cx=baf9bdb0c631236e5`); // Replace with your actual API key and CX.
		        // --- Response Handling ---
		        // Check if any search results were found.
		        if (data.items.length == 0) {
		            m.reply("😔 I couldn't find any results for that search, darling. Perhaps try a different term? 🔍");
		            return;
		        }
		        // --- Formatting Results ---
		        // Prepare a formatted string for the search results.
		        let tex = `✨ Here are the Google search results for "${text}", darling: ✨\n\n`;
		        for (let i = 0; i < data.items.length; i++) {
		            tex += `🪧 Title:- ${data.items[i].title}\n🖥 Description:- ${data.items[i].snippet}\n🌐 Link:- ${data.items[i].link}\n\n`;
		        }
		        // --- Sending Results ---
		        m.reply(tex);
		    }
		      break;

//========================================================================================================================//		      
// Hack Command (`hack`)
// Description: Simulates a hacking process with a series of messages.
		      case "hack": {
		      // --- Access Control ---
		      // Ensure the command is run by the owner.
		if(!Owner) return m.reply("👑 Darling, only the owner can initiate the 'hack' command! 💅"); 
		      try {
			      // Define the steps of the simulated hacking process.
			    const steps = [
			      '⚠️ *Initiating Hacking Tools...*',
			      '🐛 Injecting Malware...\n⚠️ Loading Device Gallery Files...',
			      '```██ 10%``` ⏳',
			      '```████ 20%``` ⏳',
			      '```██████ 30%``` ⏳',
			      '```████████ 40%``` ⏳',
			      '```██████████ 50%``` ⏳',
			      '```████████████ 60%``` ⏳',
			      '```██████████████ 70%``` ⏳',
			      '```████████████████ 80%``` ⏳',
			      '```██████████████████ 90%``` ⏳',
			      '```████████████████████ 100%``` ✅',
			      "```System Hijacking in process...\nConnecting to the Server to Find Error 404```",
			      "```Successfully Connected to Device...\nReceiving Data/Secret Passwords...```",
			      "```Data Transferred from device 100% Completed\nErasing all Evidence, Killing all Malwares🐛...```",
			      "```SENDING LOG DOCUMENTS...```",
			      "```Successfully Sent Data And Connection Successfully Disconnected```",
			      "```All Backlogs Cleared Successfully💣\nYour System Will Be Down In The Next Minute⚠️```"
			    ];
			      
			    // Send each step of the simulation with a delay.
			    for (const line of steps) {
			      await client.sendMessage(m.chat, { text: line }, { quoted: m });
			      await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second between messages.
			    }

		  } catch (error) {
		    // --- Error Handling ---
		    // Sassy error message if the simulation fails.
		    console.error('Error during prank:', error);
		    client.sendMessage(m.chat, {
		      text: `👑 My apologies, darling! An error occurred during the 'hack' simulation. Reason: ${error.message}. Please try again later. 😥`
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
// Premier League Standings (`epl`, `epl-table`)
// Description: Fetches and displays the current English Premier League table.
case "epl": case "epl-table": {
  try {
    // --- API Interaction ---
    // Fetch Premier League standings from the API.
    const response = await fetch('https://api.dreaded.site/api/standings/PL');
    const data = await response.json();
    const standings = data.data; // Extract the standings data.

    // --- Sassy Message Formatting ---
    // Construct a stylish message with the league standings.
    const message = `✨ Here are the current EPL Table Standings, darling! ✨\n\n${standings}`;

    // --- Sending the Standings ---
    await m.reply(message);
  } catch (error) {
    // --- Error Handling ---
    // Sassy error message if fetching fails.
    m.reply('👑 Oh dear, something went wrong! I couldn\'t fetch the EPL standings. The API might be resting, sweetie. 😥');
  }
}
break;

//========================================================================================================================//
// La Liga Standings (`laliga`, `pd-table`)
// Description: Fetches and displays the current La Liga table.
case "laliga": case "pd-table": {
try {
    // --- API Interaction ---
    // Fetch La Liga standings from the API.
    const response = await fetch('https://api.dreaded.site/api/standings/PD');
    const data = await response.json();
    const standings = data.data; // Extract the standings data.

    // --- Sassy Message Formatting ---
    // Construct a stylish message with the league standings.
    const message = `✨ Here are the current La Liga Table Standings, darling! ✨\n\n${standings}`;
    await m.reply(message);

} catch (error) {
    // --- Error Handling ---
    // Sassy error message if fetching fails.
    m.reply('👑 Oh dear, something went wrong! I couldn\'t fetch the La Liga standings. The API might be resting, sweetie. 😥');
}
}   
break;

//========================================================================================================================//
// Bundesliga Standings (`bundesliga`, `bl-table`)
// Description: Fetches and displays the current Bundesliga table.
case "bundesliga": case "bl-table": {
try {
    // --- API Interaction ---
    // Fetch Bundesliga standings from the API.
    const response = await fetch('https://api.dreaded.site/api/standings/BL1');
    const data = await response.json();
    const standings = data.data; // Extract the standings data.

    // --- Sassy Message Formatting ---
    // Construct a stylish message with the league standings.
    const message = `✨ Here are the current Bundesliga Table Standings, darling! ✨\n\n${standings}`;
    await m.reply(message);

} catch (error) {
    // --- Error Handling ---
    // Sassy error message if fetching fails.
    m.reply('👑 Oh dear, something went wrong! I couldn\'t fetch the Bundesliga standings. The API might be resting, sweetie. 😥');
}
}
break;

//========================================================================================================================//
// Ligue 1 Standings (`ligue-1`, `lg-1`)
// Description: Fetches and displays the current Ligue 1 table.
case "ligue-1": case "lg-1": {
  try {
    // --- API Interaction ---
    // Fetch Ligue 1 standings from the API.
    const response = await fetch('https://api.dreaded.site/api/standings/FL1');
    const data = await response.json();
    const standings = data.data; // Extract the standings data.

    // --- Sassy Message Formatting ---
    // Construct a stylish message with the league standings.
    const message = `✨ Here are the current Ligue 1 Table Standings, darling! ✨\n\n${standings}`;
    await m.reply(message);

} catch (error) {
    // --- Error Handling ---
    // Sassy error message if fetching fails.
    m.reply('👑 Oh dear, something went wrong! I couldn\'t fetch the Ligue 1 standings. The API might be resting, sweetie. 😥');
}
}
break;

//========================================================================================================================//
// Serie A Standings Command (`serie-a`, `sa-table`)
// Description: Fetches and displays the current Serie A table.
case "serie-a": case "sa-table": {
  try {
    // --- API Interaction ---
    // Fetch Serie A standings from the API.
    const response = await fetch('https://api.dreaded.site/api/standings/SA');
    const data = await response.json();
    const standings = data.data; // Extract the standings data.

    // --- Sassy Message Formatting ---
    // Construct a stylish message with the league standings.
    const message = `✨ Here are the current Serie A Table Standings, darling! ✨\n\n${standings}`;

    // --- Sending the Standings ---
    await m.reply(message);
  } catch (error) {
    // --- Error Handling ---
    // Sassy error message if fetching fails.
    m.reply('👑 Oh dear, something went wrong! I couldn\'t fetch the Serie A standings. The API might be resting, sweetie. 😥');
  }
}
break;

//========================================================================================================================//
// Football Fixtures Command (`fixtures`, `matches`)
// Description: Fetches and displays today's football matches from various leagues.
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
        // Start building the message with a stylish header.
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
        // Sassy error message if fetching fails.
        m.reply('👑 Oh dear, something went wrong! I couldn\'t fetch the match schedules. The football gods might be napping, sweetie! 😴' + error);
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
case "list": case "vars": case "help":
let vaa = `𝟏 Owner➣ 𝐆𝐞𝐭 𝗼𝘄𝗻𝗲𝗿  𝐜𝐨𝐧𝐭𝐚𝐜𝐭\n\n𝟐 𝐁𝐫𝐨𝐚𝐝𝐜𝐚𝐬𝐭➣ 𝐒𝐞𝐧𝐝𝐬 𝐦𝐞𝐬𝐬𝐚𝐠𝐞 𝐭𝐨 𝐚𝐥𝐥 𝐠𝐫𝐨𝐮𝐩𝐬\n\n𝟑 𝐉𝐨𝐢𝐧➣ 𝐭𝐚𝐠 𝐠𝐫𝐨𝐮𝐩 𝐥𝐢𝐧𝐤 𝐰𝐢𝐭𝐡 𝐣𝐨𝐢𝐧\n\n𝟒 𝐛𝐨𝐭𝐩𝐩➣ 𝐂𝐡𝐚𝐧𝐠𝐞 𝐛𝐨𝐭𝐬 𝐚𝐜𝐜𝐨𝐮𝐧𝐭 𝐝𝐩\n\n𝟓 𝐁𝐥𝐨𝐜𝐤➣ 𝐁𝐥𝐨𝐜𝐤 𝐭𝐡𝐞𝐦 𝐟𝐚𝐤𝐞 𝐟𝐫𝐢𝐞𝐧𝐝𝐬\n\n𝟔 𝐊𝐢𝐥𝐥➣ 𝐊𝐢𝐥𝐥𝐬 𝐠𝐫𝐨𝐮𝐩 𝐢𝐧 𝐬𝐞𝐜𝐨𝐧𝐝𝐬\n\n𝟕 𝐔𝐧𝐛𝐥𝐨𝐜𝐤➣ 𝐆𝐢𝐯𝐞 𝐭𝐡𝐞𝐦 𝐟𝐚𝐤𝐞 𝐟𝐫𝐢𝐞𝐧𝐝𝐬 𝐚 𝐬𝐞𝐜𝐨𝐧𝐝 𝐜𝐡𝐚𝐧𝐜𝐞\n\n𝟖 𝐒𝐞𝐭𝐯𝐚𝐫➣ 𝐒𝐞𝐭 𝐯𝐚𝐫𝐬 𝐢𝐧 𝐡𝐞𝐫𝐨𝐤𝐮\n\n𝟗 𝐒𝐭𝐢𝐜𝐤𝐞𝐫➣ 𝐂𝐨𝐧𝐯𝐞𝐫𝐭𝐬 𝐚 𝐩𝐡𝐨𝐭𝐨 𝐨𝐫 𝐚 𝐬𝐡𝐨𝐫𝐭 𝐯𝐢𝐝𝐞𝐨 𝐭𝐨 𝐚 𝐬𝐭𝐢𝐜𝐤𝐞𝐫\n\n𝟏𝟎 𝐓𝐨𝐢𝐦𝐠➣ 𝐂𝐨𝐧𝐯𝐞𝐫𝐭𝐬 𝐚 𝐬𝐭𝐢𝐜𝐤𝐞𝐫 𝐭𝐨 𝐚 𝐩𝐡𝐨𝐭𝐨\n\n𝟏𝟏 𝐏𝐥𝐚𝐲➣ 𝐆𝐞𝐭 𝐲𝐨𝐮𝐫 𝐟𝐚𝐯𝐨𝐫𝐢𝐭𝐞 𝐬𝐨𝐧𝐠\n\n𝟏𝟐 𝐖𝐡𝐚𝐭𝐬𝐨𝐧𝐠➣ 𝐠𝐞𝐭 𝐭𝐡𝐞 𝐭𝐢𝐭𝐥𝐞 𝐨𝐟 𝐭𝐡𝐞 𝐬𝐨𝐧𝐠\n\n𝟏𝟑 𝐘𝐭𝐬 ➣ 𝐆𝐞𝐭 𝐘𝐨𝐮𝐓𝐮𝐛𝐞 𝐯𝐢𝐝𝐞𝐨𝐬\n\n𝟏𝟒 𝐌𝐨𝐯𝐢𝐞➣ 𝐆𝐞𝐭 𝐲𝐨𝐮𝐫 𝐟𝐚𝐯𝐨𝐫𝐢𝐭𝐞 𝐦𝐨𝐯𝐢𝐞 𝐝𝐞𝐭𝐚𝐢𝐥𝐬\n\n𝟏𝟓 𝐌𝐢𝐱➣ 𝐂𝐨𝐦𝐛𝐢𝐧𝐞𝐬 +𝟐𝐞𝐦𝐨𝐣𝐢𝐬\n\n𝟏𝟔 𝐀𝐢-𝐢𝐦𝐠➣ 𝐆𝐞𝐭 𝐚𝐧 𝐀𝐢 𝐩𝐡𝐨𝐭𝐨\n\n𝟏𝟕 𝐆𝐩𝐭 ➣ 𝐇𝐞𝐫𝐞 𝐭𝐨 𝐚𝐧𝐬𝐰𝐞𝐫 𝐲𝐨𝐮𝐫 𝐪𝐮𝐞𝐬𝐭𝐢𝐨𝐧𝐬\n\n𝟏𝟖 𝐃𝐩➣ 𝐆𝐞𝐭𝐬 𝐚 𝐩𝐞𝐫𝐬𝐨𝐧 𝐝𝐩\n\n𝟏𝟗 𝐒𝐩𝐞𝐞𝐝 ➣ 𝐂𝐡𝐞𝐜𝐤𝐬 𝐛𝐨𝐭𝐬 𝐬𝐩𝐞𝐞𝐝\n\n𝟐𝟎 𝐀𝐥𝐢𝐯𝐞➣ 𝐂𝐡𝐞𝐜𝐤 𝐰𝐡𝐞𝐭𝐡𝐞𝐫 𝐭𝐡𝐞 𝐛𝐨𝐭 𝐢𝐬 𝐬𝐭𝐢𝐥𝐥 𝐤𝐢𝐜𝐤𝐢𝐧𝐠\n\n𝟐𝟏 𝐑𝐮𝐧𝐭𝐢𝐦𝐞➣ 𝐖𝐡𝐞𝐧 𝐝𝐢𝐝 𝐛𝐨𝐭 𝐬𝐭𝐚𝐫𝐭𝐞𝐝 𝐨𝐩𝐞𝐫𝐚𝐭𝐢𝐧𝐠\n\n𝟐𝟐 𝐒𝐜𝐫𝐢𝐩𝐭➣ 𝐆𝐞𝐭 𝐛𝐨𝐭 𝐬𝐜𝐫𝐢𝐩𝐭\n\n𝟐𝟑 𝐎𝐰𝐧𝐞𝐫  ➣ 𝐆𝐞𝐭 𝐨𝐰𝐧𝐞𝐫(𝐬) 𝐜𝐨𝐧𝐭𝐚𝐜𝐭\n\n𝟐𝟒 𝐕𝐚𝐫𝐬 ➣ 𝐒𝐞𝐞 𝐚𝐥𝐥 𝐯𝐚𝐫𝐢𝐚𝐛𝐥𝐞𝐬\n\n𝟐𝟓 𝐏𝐫𝐨𝐦𝐨𝐭𝐞➣ 𝐆𝐢𝐯𝐞𝐬 𝐨𝐧𝐞 𝐚𝐝𝐦𝐢𝐧 𝐫𝐨𝐥𝐞\n\n𝟐𝟔 𝐃𝐞𝐦𝐨𝐭𝐞➣ 𝐃𝐞𝐦𝐨𝐭𝐞𝐬 𝐟𝐫𝐨𝐦 𝐠𝐫𝐨𝐮𝐩 𝐚𝐝𝐦𝐢𝐧 𝐭𝐨 𝐚 𝐦𝐞𝐦𝐛𝐞𝐫\n\n𝟐𝟕 𝐃𝐞𝐥𝐞𝐭𝐞➣ 𝐃𝐞𝐥𝐞𝐭𝐞 𝐚 𝐦𝐞𝐬𝐬𝐚𝐠𝐞\n\n𝟐𝟖 𝐑𝐞𝐦𝐨𝐯𝐞/𝐤𝐢𝐜𝐤➣ 𝐊𝐢𝐜𝐤 𝐭𝐡𝐚𝐭 𝐭𝐞𝐫𝐫𝐨𝐫𝐢𝐬𝐭 𝐟𝐫𝐨𝐦 𝐚 𝐠𝐫𝐨𝐮𝐩\n\n𝟐𝟗 𝐅𝐨𝐫𝐞𝐢𝐠𝐧𝐞𝐫𝐬➣ 𝐆𝐞𝐭 𝐟𝐨𝐫𝐞𝐢𝐠𝐧 𝐧𝐮𝐦𝐛𝐞𝐫𝐬\n\n𝟑𝟎 𝐂𝐥𝐨𝐬𝐞➣ 𝐓𝐢𝐦𝐞 𝐟𝐨𝐫 𝐠𝐫𝐨𝐮𝐩 𝐦𝐞𝐦𝐛𝐞𝐫𝐬 𝐭𝐨 𝐭𝐚𝐤𝐞 𝐚 𝐛𝐫𝐞𝐚𝐤 𝐨𝐧𝐥𝐲 𝐚𝐝𝐦𝐢𝐧𝐬 𝐜𝐚𝐧 𝐜𝐡𝐚𝐭\n\n𝟑𝟏 𝐎𝐩𝐞𝐧 ➣ 𝐄𝐯𝐞𝐫𝐲𝐨𝐧𝐞 𝐜𝐚𝐧 𝐜𝐡𝐚𝐭 𝐢𝐧 𝐚 𝐠𝐫𝐨𝐮𝐩\n\n𝟑𝟐 𝐈𝐜𝐨𝐧➣ 𝐂𝐡𝐚𝐧𝐠𝐞 𝐠𝐫𝐨𝐮𝐩 𝐢𝐜𝐨𝐧\n\n𝟑𝟑 𝐒𝐮𝐛𝐣𝐞𝐜𝐭➣ 𝐂𝐡𝐚𝐧𝐠𝐞 𝐠𝐫𝐨𝐮𝐩 𝐬𝐮𝐛𝐣𝐞𝐜𝐭\n\n𝟑𝟒 𝐃𝐞𝐬𝐜➣ 𝐆𝐞𝐭 𝐠𝐫𝐨𝐮𝐩 𝐝𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧\n\n𝟑𝟓 𝐋𝐞𝐚𝐯𝐞➣ 𝐓𝐡𝐞 𝐠𝐫𝐨𝐮𝐩 𝐢𝐬 𝐛𝐨𝐫𝐢𝐧𝐠 ,𝐭𝐢𝐦𝐞 𝐟𝐨𝐫 𝐛𝐨𝐭 𝐭𝐨 𝐥𝐞𝐚𝐯𝐞\n\n𝟑𝟔 𝐓𝐚𝐠𝐚𝐥𝐥 ➣ 𝐓𝐚𝐠 𝐞𝐯𝐞𝐫𝐲𝐨𝐧𝐞 𝐢𝐧 𝐚 𝐠𝐫𝐨𝐮𝐩 𝐜𝐡𝐚𝐭\n\n𝟑𝟕 𝐇𝐢𝐝𝐞𝐭𝐚𝐠➣ 𝐀𝐭𝐭𝐞𝐧𝐭𝐢𝐨𝐧! 𝐀𝐭𝐭𝐞𝐧𝐭𝐢𝐨𝐧! 𝐬𝐨𝐦𝐞𝐨𝐧𝐞 𝐡𝐚𝐬 𝐬𝐨𝐦𝐞𝐭𝐡𝐢𝐧𝐠 𝐭𝐨 𝐬𝐚𝐲\n\n𝟑𝟖 𝐑𝐞𝐯𝐨𝐤𝐞 ➣ 𝐑𝐞𝐬𝐞𝐭 𝐠𝐫𝐨𝐮𝐩 𝐥𝐢𝐧𝐤`
reply(vaa)
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
    case "ping": case "speed": {
                 
	    await loading ()
	     m.reply (`𝗣𝗼𝗻𝗴\n ${Rspeed.toFixed(4)} 𝗠𝘀`); 
         } 
 break; 

//========================================================================================================================//		      
  case "uptime": { 
                 m.reply (`${runtime(process.uptime())}`) 
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
                            title: '𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧',
                            body: 'https://github.com/HunterNick2/RAVEN-BOT',
                            thumbnailUrl: 'https://files.catbox.moe/duv8ac.jpg',
                            sourceUrl: 'https://github.com/HunterNick2/RAVEN-BOT',
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


 
  
