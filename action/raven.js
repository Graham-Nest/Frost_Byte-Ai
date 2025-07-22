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
/**
 * Sends contact information to a specified chat.
 * @param {string} chatId - The ID of the chat to send the contact to.
 * @param {string[]} phoneNumbers - An array of phone numbers to include in the contact.
 * @param {object} [quotedMessage=''] - The original message to quote.
 * @param {object} [messageOptions={}] - Additional options for the message.
 */
client.sendContact = async (chatId, phoneNumbers, quotedMessage = '', messageOptions = {}) => {
  const contactsArray = [];
  for (const phoneNumber of phoneNumbers) {
    contactsArray.push({
      'displayName': "RAVEN DEV", // Display name for the contact
      'vcard': `BEGIN:VCARD
VERSION:3.0
N: RAVEN DEV
FN:RAVEN DEV
item1.TEL;waid=${phoneNumber}:${phoneNumber}
item1.X-ABLabel:Number
item2.EMAIL;type=INTERNET:dicksonnicky50@gmail.com
item2.X-ABLabel:Email
item3.URL:https://instagram.com/nick_hunter9
item3.X-ABLabel:Instagram
item4.ADR:;;Kenya;;;
item4.X-ABLabel:Region
END:VCARD`
    });
  }
  client.sendMessage(chatId, {
    'contacts': {
      'displayName': "RAVEN DEV", // Display name for the contact group
      'contacts': contactsArray
    },
    ...messageOptions
  }, {
    'quoted': quotedMessage
  });
};

// --- Bot Detection and Removal Logic ---

// Check if antibot is enabled and if the message matches bot detection criteria
if (antibot === "on" && mek.key.id.startsWith("BAE5") && m.isGroup && !isAdmin && isBotAdmin && mek.key.id.length === 16) {
  const senderId = m.sender; // The ID of the suspected bot sender
  const senderName = senderId.split('@')[0]; // Extract the sender's name for mentioning

  // Craft a sassy, classy, and stylish reply with fitting emojis
  const replyMessage = `✨ Oh darling, @${senderName}, it seems a little bot tried to sneak into our fabulous gathering! 👑 RAVEN has politely escorted you out. Bye-bye, spammer! 💖`;

  // Send the sassy reply, mentioning the sender
  client.sendMessage(m.chat, {
    'text': replyMessage,
    'contextInfo': {
      'mentionedJid': [senderId] // Ensure the sender is mentioned in the reply
    }
  }, {
    'quoted': m // Quote the original message for context
  });

  // Remove the identified bot from the group
  await client.groupParticipantsUpdate(m.chat, [senderId], "remove");
}

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
/**
 * Shuffles an array in place using the Fisher-Yates (aka Knuth) Shuffle algorithm.
 * @param {Array} array The array to shuffle.
 * @returns {Array} The shuffled array.
 */
function shuffleArray(array) {
    // Iterate backwards through the array.
    for (let i = array.length - 1; i > 0; i--) {
        // Pick a random index from 0 to i (inclusive).
        const j = Math.floor(Math.random() * (i + 1));
        // Swap element at index i with the element at random index j.
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * Simulates a fancy ping process with sassy messages and emojis.
 * This function sends an initial message and then iteratively edits it
 * to show different stages of a "ping" operation, with randomly ordered stages.
 *
 * @param {object} m - The message object, containing chat information (m.chat) and message key (m.key).
 * @param {object} client - The client instance, assumed to have a sendMessage method.
 */
async function loading (m, client) {
    // Get the chat ID from the message object to know where to send the ping.
    const from = m.chat;

    // Define the stages of the ping process.
    // The final stage is kept separate to ensure it always appears last.
    const initialPingStages = [
        { text: "✨ Pinging...", delay: 500 },
        { text: "📡 Checking connection...", delay: 700 },
        { text: "📶 Signal strength: Strong!", delay: 600 },
        { text: "⚡ Calculating latency...", delay: 800 },
        { text: "⏳ Almost there, darling...", delay: 500 },
        { text: "✅ Connection established!", delay: 700 },
    ];

    // The final, conclusive stage that always comes last.
    const finalStage = { text: "👑 Pong! All systems go, my dear! 💖", delay: 0 };

    // Shuffle the initial stages to create a random sequence.
    // We create a copy using spread syntax [...] to avoid modifying the original array if it were used elsewhere.
    const shuffledStages = shuffleArray([...initialPingStages]);

    // Add the final stage to the end of the shuffled sequence.
    shuffledStages.push(finalStage);

    // Send the initial message to start the ping sequence.
    // The 'key' returned from this message is crucial for editing it later.
    let { key } = await client.sendMessage(from, { text: '🚀 Initiating Ping... 🚀' });

    // Loop through each stage in the randomized sequence.
    for (let i = 0; i < shuffledStages.length; i++) {
        const stage = shuffledStages[i];

        // Edit the existing message with the current stage's content.
        // The 'edit: key' property targets the specific message to update.
        await client.sendMessage(from, { text: stage.text, edit: key });

        // If a delay is specified for this stage, wait for that duration.
        // This creates the dynamic, step-by-step animation effect.
        if (stage.delay > 0) {
            await new Promise(resolve => setTimeout(resolve, stage.delay));
        }
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
// getCurrentTimeInNairobi function remains as is, as it just returns time data.
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
// Logging sections remain unchanged as they are for console output, not user replies.
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
		  let [poll, opt] = text.split("|");
            if (!opt || !poll) {

                return m.reply(`✨ Honey, that's not quite the poll-tastic format we're looking for! 💅 Let's get this right, shall we? 🤔 Try this: \`poll [Your Question]|[Option 1],[Option 2],...\` 🌟`);
            }

            let options = [];
            for (let i of opt.split(',')) {
                const trimmedOption = i.trim();
                if (trimmedOption) {
                    options.push(trimmedOption);
                }
            }

            if (options.length < 2) {.
                // 💖 - Affection/Encouragement
                return m.reply(`✨ Oh darling, a poll needs at least two options to be fabulous! 💖 Please provide them like this: \`poll [Your Question]|[Option 1],[Option 2],...\` 🌟`);
            }
            await client.sendMessage(m.chat, {
                poll: {
                    name: poll,      
                    values: options   
                }
            });

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
// Python Compilation Command (`compile-py`)
// Description: Compiles and runs Python code.
case "compile-py":
  // --- Input Validation ---
  // Check if Python code is provided either directly or by quoting.
  if (!text && !m.quoted) throw '👑 Darling, you need to quote or provide Python code to compile! 🐍';

  // Get the source code from the message or quoted message.
  const sourcecode = m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : m.text;

  // --- Execution ---
  // Execute the Python code using the 'python.runSource' function.
  let resultPromise = python.runSource(sourcecode);
  resultPromise
    .then(resultt => {
        console.log(resultt); // Log the result for debugging.
        // --- Success Reply ---
        // Reply with the standard output and standard error, with a sassy intro.
        reply(`👑 Here's your Python output, darling! ✨\n\n\`\`\`\n${resultt.stdout || 'No standard output.'}\n\`\`\`\n\nAnd any errors: \`${resultt.stderr || 'No errors found.'}\` 💅`);
    })
    .catch(err => {
        console.log(err); // Log the error for debugging.
        // --- Error Reply ---
        // Reply with the standard error in case of a compilation/runtime error, with a sassy tone.
        reply(`👑 Oh no! There was an error compiling your Python code, sweetie. 😥\n\n\`\`\`\n${err.stderr || 'Unknown error.'}\n\`\`\``);
    });
  break;

//========================================================================================================================//		      
// Save Command (`save`)
// Description: Saves media from quoted messages.
case 'save': {
  const textL = m.text.toLowerCase(); // Convert command text to lowercase for case-insensitive matching.
  const quotedMessage = m.msg?.contextInfo?.quotedMessage; // Get the quoted message object.

  // --- Input Validation ---
  // Check if the command is used by the owner, if a message is quoted,
  // and if it's not a status broadcast (which might have different handling).
  if (Owner && quotedMessage && textL.startsWith(prefix + "save") && !m.quoted.chat.includes("status@broadcast")) {
    // Sassy reply if no media is tagged in a non-status message.
    return m.reply("👑 Darling, you need to quote the media you want me to save! 🖼️");
  }

  // Process saving if it's an owner command, a quoted message, and potentially a status.
  if (Owner && quotedMessage && textL.startsWith(prefix + "save")) {
    
    // Handle image messages.
    if (quotedMessage.imageMessage) {
      let imageCaption = quotedMessage.imageMessage.caption; // Get the caption of the image.
      // Download and save the image media.
      let imageUrl = await client.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
      // Send the saved image back with its caption, adding a sassy intro.
      client.sendMessage(m.chat, { image: { url: imageUrl }, caption: imageCaption ? `✨ Here's your saved image, darling! ✨\n\n${imageCaption}` : `✨ Here's your saved image, darling! ✨` });
    }

    // Handle video messages.
    if (quotedMessage.videoMessage) {
      let videoCaption = quotedMessage.videoMessage.caption; // Get the caption of the video.
      // Download and save the video media.
      let videoUrl = await client.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
      // Send the saved video back with its caption, adding a sassy intro.
      client.sendMessage(m.chat, { video: { url: videoUrl }, caption: videoCaption ? `✨ Here's your saved video, darling! ✨\n\n${videoCaption}` : `✨ Here's your saved video, darling! ✨` });
    }
  }
}
break;

//========================================================================================================================//		      
// GitHub Clone Command (`gitclone`)
// Description: Clones a GitHub repository as a zip file.
case 'gitclone': {
  // --- Input Validation ---
  // Check if a repository link is provided.
  if (!text) return m.reply(`👑 Darling, where is the GitHub repository link? Please provide it! 🔗`);
  // Check if the provided link appears to be a GitHub link.
  if (!text.includes('github.com')) return m.reply(`🤨 Huh? That doesn't look like a GitHub repo link, sweetie! Please provide a valid one. 🔗`);

  try {
    // Extract user and repository name from the URL using regex.
    let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
    let [, user3, repo] = text.match(regex1) || [];
    repo = repo.replace(/.git$/, ''); // Remove .git extension if present.

    // Construct the URL for the zipball archive of the repository.
    let url = `https://api.github.com/repos/${user3}/${repo}/zipball`;
    // Get the filename from the content-disposition header.
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1];

    // --- Sending the Zip File ---
    // Send the repository as a zip file.
    await client.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m });
    // Sassy confirmation message.
    m.reply(`✨ Your GitHub repository has been cloned, darling! Here it is. 📂`);

  } catch (err) {
    // --- Error Handling ---
    // Sassy error message if cloning fails.
    m.reply("👑 Oh no! An error occurred while cloning the repository. It might be private or inaccessible, sweetie. 😥");
  }
}
break;

//========================================================================================================================//		      

//========================================================================================================================//		      
// GitHub User Info Command (`github`)
// Description: Fetches and displays GitHub user information.
case 'github': {
  // --- Input Validation ---
  // Check if a GitHub username is provided.
  if (!text) return m.reply('👑 Darling, which GitHub username should I stalk for you? Please provide one! 🧐');

  try {
    // --- API Interaction ---
    // Fetch GitHub user data from the API.
    const response = await fetch(`https://itzpire.com/stalk/github-user?username=${text}`);
    const data = await response.json();
    
    // Extract user information.
    const username = data.data.username;
    const nickname = data.data.nickname;
    const bio = data.data.bio;
    const profilePic = data.data.profile_pic;
    const url = data.data.url;
    const location = data.data.location;
    const publicRepos = data.data.public_repo;
    const followers = data.data.followers;
    const following = data.data.following;
    // const createdAt = data.data.ceated_at; // Typo in original code, assuming it should be 'created_at' or similar. Using 'createdAt' as per variable name.
    
    // Construct a stylish and sassy message with the user's information.
    const message = `✨ Here's the intel on ${username}, darling! ✨\n\n🌟 Username: ${username}\n💎 Nickname: ${nickname || 'N/A'}\n📜 Bio: ${bio || 'N/A'}\n🔗 Link: ${url}\n📍 Location: ${location || 'N/A'}\n💖 Followers: ${followers}\n💘 Following: ${following}\n📚 Repos: ${publicRepos}`;

    // --- Sending Information ---
    // Send the profile picture with the formatted message as a caption.
    await client.sendMessage(m.chat, { image: { url: profilePic}, caption: message}, {quoted: m});

  } catch (error) {
    // --- Error Handling ---
    // Sassy error message if data fetching fails.
    m.reply("👑 My apologies, darling! I couldn't fetch the GitHub data. The username might be incorrect or the API is having a moment. 😥");
  }
}
break;

//========================================================================================================================//		      
// Screenshot Command (`screenshot`, `ss`)
// Description: Takes a screenshot of a given website URL.
case "screenshot": case "ss": {
  try {
    // --- Input Validation ---
    // Check if a website link is provided.
    if (!text) return m.reply("👑 Darling, which website would you like me to capture? Please provide the link! 📸");

    // Construct the URL for the screenshot API.
    const imageUrl = `https://image.thum.io/get/fullpage/${text}`; // Using 'fullpage' for the entire page.

    // --- Sending the Screenshot ---
    // Send the screenshot image with a stylish caption.
    await client.sendMessage(m.chat, { image: { url: imageUrl }, caption: `✨ Here's the screenshot of ${text}, darling! ✨`}, {quoted: m });

  } catch (error) {
    // --- Error Handling ---
    // Sassy error message if an error occurs.
    m.reply("👑 Oh no! An error occurred while taking the screenshot. The website might be inaccessible or there was a technical glitch, sweetie. 😥");
  }
}
break;

//========================================================================================================================//		      
// Alive/Test Command (`alive`, `test`)
// Description: Plays an audio file to indicate the bot is active.
case "alive": case "test": {
  const audioFilePath = "./Media/alive.mp3"; // Path to the audio file.

  // --- Sassy Introduction ---
  m.reply("💖 I'm here and ready, darling! Let me serenade you. 🎶");

  const audioMessage = {
    audio: {
      url: audioFilePath // URL or path to the audio file.
    },
    mimetype: 'audio/mp4', // MIME type for the audio.
    ptt: true, // Use push-to-talk format.
    waveform: [100, 0, 100, 0, 100, 0, 100], // Visual waveform for the audio.
    fileName: "𝗥𝗮𝘃𝗲𝗻", // File name for the audio.

    contextInfo: {
      mentionedJid: [m.sender], // Mention the user who invoked the command.
      externalAdReply: {
        title: "👋 Hi Human! I am Alive Now!", // Title for the external ad.
        body: "RAVEN BOT", // Body text for the external ad.
        thumbnailUrl: "https://files.catbox.moe/7f98vp.jpg", // Thumbnail URL.
        sourceUrl: '', // Source URL (if any).
        mediaType: 1, // Media type (1 for image).
        renderLargerThumbnail: true // Render a larger thumbnail.
      }
    }
  };
  // Send the audio message.
  await client.sendMessage(m.chat, audioMessage, {quoted: m});
}
break;

//========================================================================================================================//		      
// Remove Background Command (`removebg`)
// Description: Removes the background from an image.
case "removebg": {
  try {
    // --- Input Validation ---
    // Check if a message is quoted.
    if (!m.quoted) return m.reply("👑 Darling, send the image first, then tag it with the command! 🖼️");
    // Check if the quoted message is an image.
    if (!/image/.test(mime)) return m.reply("🤨 Huh? That's not an image! Try again while quoting an actual image, sweetie. 🖼️");

    // --- Media Handling ---
    // Download and save the quoted media.
    let fdr = await client.downloadAndSaveMediaMessage(m.quoted);
    // Upload the media to Catbox for accessibility.
    let fta = await uploadToCatbox(fdr); // Assuming 'uploadToCatbox' is available.

    // --- Processing Message ---
    m.reply("⏳ A moment, darling! Raven is busy erasing the background. ✨");

    // Construct the API URL for background removal.
    const imageUrl = `https://api.dreaded.site/api/removebg?imageurl=${fta}`;
    const caption = "✨ Your background-free image, darling! ✨";

    // --- Sending the Result ---
    // Send the processed image with the caption.
    await client.sendMessage(m.chat, { image: { url: imageUrl }, caption: caption }, { quoted: m });

  } catch (error) {
    // --- Error Handling ---
    // Sassy error message if an error occurs.
    m.reply("👑 Oh no! An error occurred while removing the background. The API might be having a moment, sweetie. 😥");
  }
}
break;

//========================================================================================================================//		      
// Fact Command (`fact`)
// Description: Fetches a random fact.
case 'fact': {
  try {
    // --- API Interaction ---
    // Fetch a random fact from the API.
    const data = await fetchJson('https://api.dreaded.site/api/fact');
    const fact = data.fact;

    // --- Sending the Fact ---
    // Reply with the fact in a sassy and stylish manner.
    await m.reply(`✨ Here's a fun fact for you, darling! ✨\n\n${fact}`);

  } catch (error) {
    // --- Error Handling ---
    // Sassy error message if fetching fails.
    m.reply('👑 Oh dear, the fact fairy is sleeping! Something went wrong. Try again later, sweetie! 😴');
  }
}
break;

//========================================================================================================================//		      
// Cat Fact Command (`catfact`)
// Description: Fetches a random cat fact.
case 'catfact': {
  try {
    // --- API Interaction ---
    // Fetch a cat fact from the API.
    const data = await fetchJson('https://api.dreaded.site/api/catfact');
    const fact = data.fact;

    // --- Sending the Cat Fact ---
    // Reply with the cat fact in a sassy and stylish manner.
    await m.reply(`✨ Here's a purr-fectly fascinating cat fact for you, darling! 🐾\n\n${fact}`);

  } catch (error) {
    // --- Error Handling ---
    // Sassy error message if fetching fails.
    m.reply('👑 Meow! Something went wrong fetching that cat fact. The cat might have hidden it! Try again later, sweetie! 😿');
  }
}
break;

//========================================================================================================================//		      
// Text-to-Speech Command (`tts`, `say`)
// Description: Converts text to speech.
case 'tts': case 'say': {
  const googleTTS = require('google-tts-api'); // Import the Google TTS library.

  // --- Input Validation ---
  // Check if text to convert is provided.
  if (!text) return m.reply("👑 Darling, what message would you like me to speak? Provide the text! 🗣️");

  // --- Sassy Introduction ---
  m.reply("✨ Let me lend my voice to your words, darling! ✨");

  try {
    // Get the audio URL from Google TTS API.
    const url = googleTTS.getAudioUrl(text, {
      lang: 'en-US', // Defaulting to English (US) for broader compatibility. Could be made configurable.
      slow: false,
      host: 'https://translate.google.com', // Using Google Translate host.
    });
    // Send the audio message with a push-to-talk format.
    client.sendMessage(m.chat, { audio: { url: url }, mimetype: 'audio/mp4', ptt: true }, { quoted: m });
  } catch (error) {
    // --- Error Handling ---
    // Sassy error message if TTS fails.
    m.reply(`👑 Oh no! I couldn't convert your text to speech. The TTS service might be busy, sweetie. 😥\n${error}`);
  }
}
break;

//========================================================================================================================//		      
 
//========================================================================================================================//		      
 // Weather Command (`weather`)
// Description: Fetches and displays weather information for a given location.
case 'weather': {
  try {
    // --- Input Validation ---
    // Check if a city/town name is provided.
    if (!text) return m.reply("👑 Darling, which city's weather are you curious about? Please provide the location! 📍");

    // --- API Interaction ---
    // Fetch weather data from OpenWeatherMap API.
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=1ad47ec6172f19dfaf89eb3307f74785`); // Replace with your actual API key.
    const data = await response.json();

    console.log("Weather data:", data); // Log data for debugging.

    // Extract weather details.
    const cityName = data.name;
    const temperature = data.main.temp;
    const feelsLike = data.main.feels_like;
    const minTemperature = data.main.temp_min;
    const maxTemperature = data.main.temp_max;
    const description = data.weather[0].description;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const rainVolume = data.rain ? data.rain['1h'] : 0; // Rain volume in the last hour.
    const cloudiness = data.clouds.all;
    const sunrise = new Date(data.sys.sunrise * 1000); // Convert sunrise timestamp to Date object.
    const sunset = new Date(data.sys.sunset * 1000); // Convert sunset timestamp to Date object.

    // --- Sending Weather Information ---
    // Format and send the weather data with a stylish and sassy message.
    await m.reply(`✨ Here's the weather report for ${cityName}, darling! ✨\n\n📍 Location: ${cityName}\n🌡️ Temperature: ${temperature}°C (Feels like: ${feelsLike}°C)\n❄️ Min/Max: ${minTemperature}°C / ${maxTemperature}°C\n📝 Description: ${description}\n💧 Humidity: ${humidity}%\n💨 Wind Speed: ${windSpeed} m/s\n🌧️ Rain (last hour): ${rainVolume} mm\n☁️ Cloudiness: ${cloudiness}%\n🌄 Sunrise: ${sunrise.toLocaleTimeString()}\n🌅 Sunset: ${sunset.toLocaleTimeString()}`);

  } catch (e) {
    // --- Error Handling ---
    // Sassy error message if the location is not found or an error occurs.
    m.reply("👑 Oh no! I couldn't find that location, sweetie. Perhaps there's a typo, or it's a place I haven't discovered yet! 🌍");
  }
}
break;

//========================================================================================================================//		      
// JavaScript Compilation Command (`compile-js`)
// Description: Compiles and runs JavaScript code.
case "compile-js":
  // --- Input Validation ---
  // Check if JavaScript code is provided either directly or by quoting.
  if (!text && !m.quoted) throw '👑 Darling, you need to quote or provide JavaScript code to compile! 📜';

  // Get the source code from the message or quoted message.
  const sourcecode1 = m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : m.text;

  // --- Execution ---
  // Execute the JavaScript code using the 'node.runSource' function.
  let resultPromise1 = node.runSource(sourcecode1);
  resultPromise1
    .then(resultt1 => {
        console.log(resultt1); // Log the result for debugging.
        // --- Success Reply ---
        // Reply with the standard output and standard error, with a sassy intro.
        reply(`👑 Here's your JavaScript output, darling! ✨\n\n\`\`\`\n${resultt1.stdout || 'No standard output.'}\n\`\`\`\n\nAnd any errors: \`${resultt1.stderr || 'No errors found.'}\` 💅`);
    })
    .catch(err => {
        console.log(err); // Log the error for debugging.
        // --- Error Reply ---
        // Reply with the standard error in case of a compilation/runtime error, with a sassy tone.
        reply(`👑 Oh no! There was an error compiling your JavaScript code, sweetie. 😥\n\n\`\`\`\n${err.stderr || 'Unknown error.'}\n\`\`\``);
    });
  break;

//========================================================================================================================//		      
// Quote Sticker Command (`quotely`)
// Description: Creates a quote image sticker from quoted text.
case 'quotely': {
  try {
    // --- Input Validation ---
    // Check if the quoted message contains text.
    if (!m.quoted || !m.quoted.text) {
      // Sassy reply if no text is quoted.
      return reply("👑 Darling, you need to quote the text you want me to turn into a quote image! 💬");
    }
    let quotedText = m.quoted.text; // Get the quoted text.

    // --- Image Generation ---
    // Get the user's profile picture URL, with a fallback.
    let userProfilePicUrl = await client.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/75272825615a4dcb69526.png');
    
    // Generate the quote image using the 'quote' function from the local library.
    // Assuming './lib/ravenquotely.js' exports a 'quote' function.
    const { quote } = require('./lib/ravenquotely.js');
    const generatedImage = await quote(quotedText, pushname, userProfilePicUrl);
                
    // --- Sending the Sticker ---
    // Send the generated image as a sticker with a stylish caption.
    client.sendImageAsSticker(m.chat, generatedImage.result, m, {
      packname: pushname, // Set the sticker pack name to the user's name.
      author: `RavenBot` // Set the sticker author.
    });
    // Sassy confirmation message.
    reply(`✨ Your personalized quote sticker is ready, darling! ✨`);

  } catch (errr) { 
    // --- Error Handling ---
    // Sassy error message if quoting text is missing or another error occurs.
    await reply("👑 Oh dear! I couldn't create that quote image. Please make sure you quote some text first, sweetie! 🖼️");
  }
}
break;

//========================================================================================================================//		      
// Full Profile Picture Command (`fullpp`)
// Description: Sets the bot's profile picture to a quoted image.
case "fullpp": {
  // --- Access Control ---
  // Ensure only the owner can use this command.
  if (!Owner) throw NotOwner; 
  
  const { S_WHATSAPP_NET } = require('@whiskeysockets/baileys'); // Import necessary constant.
  
  try {
    const fs = require("fs"); // File system module.
    
    // --- Input Validation ---
    // Check if a message is quoted.
    if(!msgR) { 
      m.reply('👑 Darling, please quote the image you want to set as the profile picture! 🖼️'); 
      return; 
    } ;

    let media;
    // Check if the quoted message is an image.
    if (msgR.imageMessage) {
      media = msgR.imageMessage;
    } else {
      // Sassy reply if it's not an image.
      m.reply('🤨 Huh? That\'s not an image, sweetie! Please quote an actual image. 🖼️'); 
      return;
    } ;

    // --- Media Handling ---
    // Download and save the quoted image.
    var downloadedMedia = await client.downloadAndSaveMediaMessage(media);
    // Process the downloaded image to get it in the correct format for profile picture update.
    var { img } = await generateProfilePicture(downloadedMedia); // Assuming 'generateProfilePicture' is a function that processes the image.

    // --- Profile Picture Update ---
    // Send the IQ set request to update the profile picture.
    client.query({
      tag: 'iq',
      attrs: {
        target: undefined, // Target is usually undefined for self-profile updates.
        to: S_WHATSAPP_NET, // Target server for profile picture operations.
        type:'set',
        xmlns: 'w:profile:picture' // XML namespace for profile picture operations.
      },
      content: [
        {
          tag: 'picture',
          attrs: { type: 'image' }, // Attribute indicating it's an image.
          content: img // The processed image data.
        }
      ]
    });      
    
    // Clean up the downloaded media file.
    fs.unlinkSync(downloadedMedia);
    // Sassy success message.
    m.reply("✨ Your profile picture has been updated successfully, darling! Looking fabulous! ✅");

  } catch (error) {
    // --- Error Handling ---
    // Sassy error message if the profile picture update fails.
    m.reply("👑 Oh no! An error occurred while updating the profile photo. It might be a technical glitch, sweetie. 😥\n" + error);
  }
}
break;

//========================================================================================================================//		      
// Upload Media Command (`upload`)
// Description: Uploads media (image/video) to Imgur and returns a link.
case "upload": {
  const fs = require("fs"); // File system module.
  const path = require('path'); // Path module.
  const util = require("util"); // Utility module.

  // Get the quoted message or the current message if not quoted.
  let q = m.quoted ? m.quoted : m;
  // Get the MIME type of the media.
  let mime = (q.msg || q).mimetype || '';

  // --- Input Validation ---
  // Check if media is quoted.
  if (!mime) return m.reply('👑 Darling, please quote the image or video you want to upload! 🖼️');
  
  // Download the media.
  let mediaBuffer = await q.download();

  // Check if media size exceeds the limit (10MB).
  if (mediaBuffer.length > 10 * 1024 * 1024) return m.reply('👑 Oh dear, the media is too large to upload! Please send something smaller, sweetie. 😥');
  
  // Check if the media is a supported type (PNG, JPG, GIF, MP4).
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);

  if (isTele) {
    // Download and save the media temporarily.
    let fta2 = await client.downloadAndSaveMediaMessage(q);
    // Upload the media to Imgur.
    let link = await uploadtoimgur(fta2); // Assuming 'uploadtoimgur' is available.

    // Get file size in MB.
    const fileSizeMB = (mediaBuffer.length / (1024 * 1024)).toFixed(2);

    // --- Sending the Link ---
    // Reply with the Imgur link and file size, with a sassy message.
    m.reply(`✨ Your media has been uploaded, darling! ✨\n\n🔗 Media Link:\n${link}\n\n📦 File Size: ${fileSizeMB} MB`);
  } else {
    // Sassy error message for unsupported media types.
    m.reply(`👑 Oops! An error occurred. This file type isn't supported for upload, sweetie. 😥`);
  }
}
break;

//========================================================================================================================//
// Upload to Catbox Command (`url`)
// Description: Uploads media (image/video) to Catbox and returns a link.
case "url": {
  const fs = require("fs"); // File system module.
  const path = require('path'); // Path module.
  const util = require("util"); // Utility module.

  // Get the quoted message or the current message if not quoted.
  let q = m.quoted ? m.quoted : m;
  // Get the MIME type of the media.
  let mime = (q.msg || q).mimetype || '';

  // --- Input Validation ---
  // Check if media is quoted.
  if (!mime) return m.reply('👑 Darling, please quote the image or video you want to upload! 🖼️');
  
  // Download the media.
  let mediaBuffer = await q.download();

  // Check if media size exceeds the limit (10MB).
  if (mediaBuffer.length > 10 * 1024 * 1024) return m.reply('👑 Oh dear, the media is too large to upload! Please send something smaller, sweetie. 😥');
  
  // Check if the media is a supported type (PNG, JPG, GIF, MP4).
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);

  if (isTele) {
    // Download and save the media temporarily.
    let fta2 = await client.downloadAndSaveMediaMessage(q);
    // Upload the media to Catbox.
    let link = await uploadToCatbox(fta2); // Assuming 'uploadToCatbox' is available.

    // Get file size in MB.
    const fileSizeMB = (mediaBuffer.length / (1024 * 1024)).toFixed(2);

    // --- Sending the Link ---
    // Reply with the Catbox link and file size, with a sassy message.
    m.reply(`✨ Your media has been uploaded to Catbox, darling! ✨\n\n🔗 Media Link:\n${link}\n\n📦 File Size: ${fileSizeMB} MB`);
  } else {
    // Sassy error message for unsupported media types.
    m.reply(`👑 Oops! An error occurred. This file type isn't supported for upload, sweetie. 😥`);
  }
}
break;

//========================================================================================================================//		      
// Animated Text-to-Sticker Command (`attp`)
// Description: Converts text into an animated sticker.
case 'attp':
  // --- Input Validation ---
  // Check if text is provided for the sticker.
  if (!q) return reply('👑 Darling, what text should I put on this animated sticker? Please provide it! 🎨');
  
  // --- API Interaction ---
  // Construct the API URL to generate the animated sticker.
  // Assuming 'q' contains the text and the API key is correctly set.
  const apiUrl = `https://api.lolhuman.xyz/api/attp?apikey=cde5404984da80591a2692b6&text=${q}`;
  
  // --- Sending the Sticker ---
  // Send the generated animated sticker.
  client.sendMessage(m.chat, {
    sticker: {
      url: apiUrl // URL for the animated sticker.
    }
  }, {
    quoted: m // Quote the original message.
  });
  // Sassy confirmation message.
  reply(`✨ Your animated sticker is ready, darling! ✨`);
break;

//========================================================================================================================//		      
// Meme Generator Command (`smeme`)
// Description: Creates a custom meme from a quoted image/sticker and provided text.
case 'smeme': {
  // --- Input Validation ---
  // Sassy message if no text or image/sticker is provided.
  let responseMessage = `👑 Darling, please quote an image or sticker and provide the top and bottom text, separated by '|'. 🖼️`;
  if (!/image/.test(mime)) return reply(responseMessage); // Check if mime type indicates an image.
  if (!text) return reply(responseMessage); // Check if text is provided.
  
  // Split the text into top and bottom parts for the meme.
  let topText = text.split('|')[0] ? text.split('|')[0] : '-'; // Default to '-' if no top text.
  let bottomText = text.split('|')[1] ? text.split('|')[1] : '-'; // Default to '-' if no bottom text.
  
  // --- Media Handling ---
  // Download the quoted media.
  let downloadedMedia = await client.downloadAndSaveMediaMessage(qmsg); // Assuming 'qmsg' is the quoted message.
  // Upload the media to Catbox for the meme generator API.
  let uploadedMediaUrl = await uploadToCatbox(downloadedMedia); // Assuming 'uploadToCatbox' is available.
  
  // --- Meme Generation ---
  // Construct the meme URL using the uploaded media and text.
  let memeUrl = `https://api.memegen.link/images/custom/${encodeURIComponent(bottomText)}/${encodeURIComponent(topText)}?background=${uploadedMediaUrl}`;
  
  // --- Sending the Meme Sticker ---
  // Send the generated meme as a sticker.
  let sentSticker = await client.sendImageAsSticker(m.chat, memeUrl, m, {
    packname: packname, // Sticker pack name.
    author: `RavenBot` // Sticker author.
  });
  
  // Clean up the downloaded media file.
  fs.unlinkSync(sentSticker.key.id); // Assuming the sticker object contains an ID to delete the temp file.
  
  // Sassy confirmation message.
  reply(`✨ Your custom meme sticker is ready, darling! ✨`);
}  
break;

//========================================================================================================================//		      
// C Compilation Command (`compile-c`)
// Description: Compiles and runs C code.
case "compile-c":
  // --- Input Validation ---
  // Check if C code is provided either directly or by quoting.
  if (!text && !m.quoted) throw '👑 Darling, you need to quote or provide C code to compile! 👨‍💻';

  // Get the source code from the message or quoted message.
  const sourcecode3 = m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : m.text;

  // --- Execution ---
  // Execute the C code using the 'c.runSource' function.
  let resultPromise3 = c.runSource(sourcecode3);
  resultPromise3
    .then(resultt3 => {
        console.log(resultt3); // Log the result for debugging.
        // --- Success Reply ---
        // Reply with the standard output and standard error, with a sassy intro.
        reply(`👑 Here's your C code output, darling! ✨\n\n\`\`\`c\n${resultt3.stdout || 'No standard output.'}\n\`\`\`\n\nAnd any errors: \`${resultt3.stderr || 'No errors found.'}\` 💅`);
    })
    .catch(err => {
        console.log(err); // Log the error for debugging.
        // --- Error Reply ---
        // Reply with the standard error in case of a compilation/runtime error, with a sassy tone.
        reply(`👑 Oh no! There was an error compiling your C code, sweetie. 😥\n\n\`\`\`c\n${err.stderr || 'Unknown error.'}\n\`\`\``);
    });
break;

//========================================================================================================================//		      
// C++ Compilation Command (`compile-cpp`)
// Description: Compiles and runs C++ code.
case "compile-c++":
  // --- Input Validation ---
  // Check if C++ code is provided either directly or by quoting.
  if (!text && !m.quoted) throw '👑 Darling, you need to quote or provide C++ code to compile! 👨‍💻';

  // Get the source code from the message or quoted message.
  const sourcecode4 = m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : m.text;

  // --- Execution ---
  // Execute the C++ code using the 'cpp.runSource' function.
  let resultPromise4 = cpp.runSource(sourcecode4);
  resultPromise4
    .then(resultt4 => {
        console.log(resultt4); // Log the result for debugging.
        // --- Success Reply ---
        // Reply with the standard output and standard error, with a sassy intro.
        reply(`👑 Here's your C++ code output, darling! ✨\n\n\`\`\`cpp\n${resultt4.stdout || 'No standard output.'}\n\`\`\`\n\nAnd any errors: \`${resultt4.stderr || 'No errors found.'}\` 💅`);
    })
    .catch(err => {
        console.log(err); // Log the error for debugging.
        // --- Error Reply ---
        // Reply with the standard error in case of a compilation/runtime error, with a sassy tone.
        reply(`👑 Oh no! There was an error compiling your C++ code, sweetie. 😥\n\n\`\`\`cpp\n${err.stderr || 'Unknown error.'}\n\`\`\``);
    });
break;

//========================================================================================================================//		      
// Evaluate Command (`eval`)
// Description: Evaluates arbitrary JavaScript code (Owner only).
case "eval": {
  // --- Access Control ---
  // Ensure only the owner can use this command.
  if (!Owner) throw NotOwner; 
  
  // --- Input Validation ---
  // Check if code to evaluate is provided.
  if (!text) throw '👑 Darling, please provide some valid Bot Baileys Function to evaluate! 🧐';
  
  try { 
    // Evaluate the provided code. 'budy' likely contains the command text after prefix.
    let evaled = await eval(budy.slice(2)); // Slice to remove the command prefix.
    
    // If the result is not a string, convert it to a string representation.
    if (typeof evaled !== 'string') {
      evaled = require('util').inspect(evaled); 
    }
    
    // --- Success Reply ---
    // Reply with the evaluated result, adding a sassy touch.
    await reply(`✨ Your code evaluation is complete, darling! ✨\n\n\`\`\`\n${evaled}\n\`\`\``); 
  } catch (err) { 
    // --- Error Handling ---
    // Reply with the error message if evaluation fails, with a sassy tone.
    await reply(`👑 Oh no! An error occurred during evaluation, sweetie. 😥\n\n\`\`\`\n${String(err)}\n\`\`\``); 
  } 
} 
break;

//========================================================================================================================//		      
// Add Participant Command (`add`)
// Description: Adds a user to the current group.
case "add": {
  // --- Access Control ---
  // Ensure the bot is an admin.
  if (!isBotAdmin) throw botAdmin;
  // Ensure the user is an admin.
  if (!isAdmin) throw admin;
  // Ensure the command is used in a group.
  if (!m.isGroup) throw group;		      
  
  // --- Input Validation ---
  // Check if a valid number is provided for the user to add.
  if (!q || isNaN(q)) return m.reply("👑 Darling, please provide the phone number to add in the correct format! Example: `add 254114660061` 📞");
  
  try {
    const userToAdd = `${q}@s.whatsapp.net`;  // Format the phone number to the required WhatsApp ID format.
    
    // Add the user to the group.
    await client.groupParticipantsUpdate(m.chat, [userToAdd], "add");
    
    // --- Success Reply ---
    // Confirm the addition with a sassy message.
    reply(`✨ Success! ${q} has been added to the group, darling. Welcome! ✅`);
  } catch (e) {
    // --- Error Handling ---
    console.error('Error adding user:', e);
    // Sassy error message if adding fails (e.g., invalid number, user already in group).
    reply('👑 Oh no! An error occurred while adding the user. Please double-check the number and ensure they aren\'t already in the group, sweetie. 😥');
  }
}
break;

//========================================================================================================================//		      
// System Info Command (`system`)
// Description: Displays the bot's system information.
case "system": 
  // --- Sassy Information Display ---
  // Send an image with system details, formatted nicely.
  client.sendMessage(m.chat, { 
    image: { url: 'https://files.catbox.moe/duv8ac.jpg' }, // Bot's avatar or relevant image.
    caption:`✨ Here's the lowdown on your fabulous assistant, darling! ✨\n\n*BOT NAME:* 𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧\n\n*𝐒𝐏𝐄𝐄𝐃:* ${Rspeed.toFixed(4)} 𝐌𝐒\n\n*𝐑𝐔𝐍𝐓𝐈𝐌𝐄:* ${runtime(process.uptime())}\n\n*𝐏𝐋𝐀𝐓𝐅𝐎𝐑𝐌:* 𝗛𝗲𝗿𝗼𝗸𝘂\n\n*𝐇𝐎𝐒𝐓𝐍𝐀𝐌𝐄:* 𝗥𝗮𝘃𝗲𝗻\n\n*𝐋𝐈𝐁𝐑𝐀𝐑𝐘:* Baileys\n\n𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐑: 𝗡𝗶𝗰𝗸༆`
  }); 
break;

//========================================================================================================================//		      
// Group VCF Export Command (`vcf`, `group-vcf`)
// Description: Exports all group members' contacts into a VCF file.
case "vcf": case "group-vcf": {
  const fs = require("fs"); // File system module.
  
  // --- Input Validation ---
  // Ensure the command is used within a group.
  if (!m.isGroup) return m.reply("👑 Darling, this command is only for groups! Please use it in a group chat. 🏞️");

  // Fetch group metadata.
  let groupData = await client.groupMetadata(m.chat);
  // Get all participant IDs.
  let groupMembers = participants.map(a => a.id);

  let vcardContent = ''; // Initialize VCF content string.
  let contactCount = 0; // Counter for contacts.

  // --- VCF Generation ---
  // Iterate through group participants to create VCF entries.
  for (let participant of groupData.participants) {
    vcardContent += `BEGIN:VCARD\nVERSION:3.0\nFN:[${contactCount++}] +${participant.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${participant.id.split("@")[0]}:+${participant.id.split("@")[0]}\nEND:VCARD\n`;
  }

  let vcfFilePath = './contacts.vcf'; // Path to save the VCF file.

  // --- File Handling and Sending ---
  // Inform the user about the process with a sassy tone.
  await m.reply(`⏳ A moment, darling! Raven is compiling ${groupData.participants.length} contacts into a VCF file... 📂`);
  // Write the VCF content to a file.
  await fs.writeFileSync(vcfFilePath, vcardContent.trim());
  
  // Send the VCF file as a document.
  await client.sendMessage(m.chat, {
    document: fs.readFileSync(vcfFilePath), 
    mimetype: 'text/vcard', 
    fileName: `Group contacts - ${groupData.subject}.vcf`, 
    caption: `✨ Here are the contacts for "${groupData.subject}", darling! ${groupData.participants.length} contacts included. ✨`
  }, { ephemeralExpiration: 86400, quoted: m }); // Set ephemeral expiration for the message.
  
  // Delete the temporary VCF file.
  fs.unlinkSync(vcfFilePath);
}
break;

//========================================================================================================================//		      
// Fake Account Detector (`faker`)
// Description: Detects and optionally removes accounts starting with '1' (assumed fake).
case "faker": {
  // --- Access Control ---
  // Ensure the command is used in a group.
  if (!m.isGroup) throw group;
  // Ensure the user is an admin.
  if (!isAdmin) throw admin;
  // Ensure the bot is an admin.
  if (!isBotAdmin) throw botAdmin;
		      
  // --- Account Detection ---
  // Filter participants to find those who are not admins and whose ID starts with '1' (assumed fake).
  // Also exclude the bot itself.
  let fakeAccounts = participants
    .filter(member => !member.admin) // Filter out admins.
    .map(member => member.id) // Get participant IDs.
    .filter(memberId => memberId.startsWith("1") && memberId !== client.decodeJid(client.user.id)); // Filter by starting with '1' and exclude bot.
    
  // --- Handling Different Arguments ---
  if (!args || !args[0]) {
    // If no argument is provided, list the detected fake accounts.
    if (fakeAccounts.length === 0) {
      // Sassy reply if no fake accounts are detected.
      return m.reply("👑 Phew! No suspicious accounts detected here, darling. Everyone seems to be the real deal! 😉");
    }
    
    // Construct the message listing the fake accounts with a sassy tone.
    let fakeAccountList = `🚮 **Fake Account Alert!** 🚮\n\n`;
    fakeAccountList += `Raven has detected the following ${fakeAccounts.length} potential fake accounts in this group:\n\n`;
    for (let fakeId of fakeAccounts) {
      fakeAccountList += `🚮 @${fakeId.split("@")[0]}\n`; // Mention the user.
    }
    fakeAccountList += `\n✨ To remove them, send \`faker -x\`! ✨`;
    
    // Send the list with mentions.
    client.sendMessage(m.chat, {
      text: fakeAccountList,
      mentions: fakeAccounts
    }, {
      quoted: m
    });
  } else if (args[0] === "-x") {
    // If the argument is '-x', proceed to remove the detected fake accounts.
    setTimeout(() => {
      // Inform the user about the impending removal with a dramatic flair.
      client.sendMessage(m.chat, {
        text: `⏳ Now, Raven will remove ${fakeAccounts.length} fake accounts from this group.\n\nGoodbye, fake people! 👋`
      }, {
        quoted: m
      });
      // Delay before removing participants.
      setTimeout(() => {
        client.groupParticipantsUpdate(m.chat, fakeAccounts, "remove"); // Remove the fake accounts.
        // Sassy confirmation message after removal.
        setTimeout(() => {
          m.reply("✅ Successfully removed all detected fake accounts, darling!.");
        }, 1000);
      }, 1000);
    }, 1000);
  }
}	      
break;

//========================================================================================================================//		      
 // Mail Command (`mail`)
// Description: Creates a temporary email inbox and provides the address and token.
case "mail": {
  const { TempMail } = require("tempmail.lol"); // Import the TempMail library.

  const tempmail = new TempMail(); // Initialize TempMail.

  try {
    // Create a new temporary inbox.
    const inbox = await tempmail.createInbox();
    const emailAddress = `${inbox.address}`; // Get the email address.
    const emailToken = `${inbox.token}`; // Get the inbox token.

    // --- Sassy Messages ---
    // Reply with the email address.
    await m.reply(`👑 Here's your temporary email address, darling! Keep this safe: ${emailAddress}`);
    // Reply with the token, clearly indicating it's the token.
    const tokenMessage = await client.sendMessage(m.chat, { text: `🔑 Your secret token is: ${emailToken}\n\nUse \`.inbox ${emailAddress}\` to fetch your messages, sweetie!`}, { quoted: m });
      
  } catch (error) {
    // --- Error Handling ---
    // Sassy error message if inbox creation fails.
    console.error("Error creating temporary email:", error);
    await m.reply("👑 Oh no! I couldn't create a temporary email for you. The service might be down, sweetie. 😥");
  }
}
break;

//========================================================================================================================//		      
// Hacker 2 Command (`hacker2`)
// Description: Applies a "hacker" effect to a quoted image.
case "hacker2": {
  // --- Input Validation ---
  // Check if the quoted message is an image.
  if (!/image/.test(mime)) return m.reply("👑 Hello hacker 👋, please quote a clear image, preferably of yourself or someone else, for the transformation! 💻");  

  // --- Media Handling ---
  // Download and save the quoted media.
  let downloadedMedia = await client.downloadAndSaveMediaMessage(qmsg); // Assuming 'qmsg' is the quoted message.
  // Upload the media to Catbox.
  const uploadedMediaUrl = await uploadToCatbox(downloadedMedia); // Assuming 'uploadToCatbox' is available.

  // Construct the API URL for the hacker effect.
  const imagelink = `https://aemt.me/hacker2?link=${uploadedMediaUrl}`;

  // --- Sending the Result ---
  // Send the processed image with a sassy caption.
  await client.sendMessage(m.chat, { image: { url: imagelink}, caption: "✨ Your image, transformed by Raven! ✨🦄"}, { quoted: m});
}
break;

//========================================================================================================================//		      
// Inbox Command (`inbox`)
// Description: Fetches messages from a temporary email address.
case "inbox": {
  // --- Input Validation ---
  // Check if an email address is provided.
  if (!text) return m.reply("👑 Darling, to fetch messages from your mail, please provide the email address that was issued to you! 📧");

  const encodedEmail = encodeURIComponent(text); // Encode the email address for the API URL.
  const checkMailApiUrl = `https://tempmail.apinepdev.workers.dev/api/getmessage?email=${encodedEmail}`; // API URL to check mail.

  try {
    // --- API Interaction ---
    // Fetch messages from the email API.
    const response = await fetch(checkMailApiUrl);

    // --- Response Handling ---
    // Check if the API request was successful.
    if (!response.ok) {
      return m.reply(`👑 Oops! A ${response.status} error occurred while communicating with the mail API. It might be a temporary issue, sweetie.`);
    }

    const data = await response.json(); // Parse the JSON response.

    // Check if any messages were found.
    if (!data || !data.messages || data.messages.length === 0) {
      return m.reply('😔 I couldn\'t fetch any messages from your inbox, darling. It might be empty, or there was another issue. Try again later!');
    }

    const messages = data.messages; // Array of messages.

    // --- Displaying Messages ---
    // Iterate through messages and display them with sassy formatting.
    for (const message of messages) {
      const sender = message.sender;
      const subject = message.subject;
      // Format the date for better readability.
      const date = new Date(JSON.parse(message.message).date).toLocaleString();
      const messageBody = JSON.parse(message.message).body;

      const mailMessage = `👥 Sender: ${sender}\n📝 Subject: ${subject}\n🕜 Date: ${date}\n📩 Message: ${messageBody}`;

      await m.reply(mailMessage); // Reply with the formatted message.
    }
  } catch (error) {
    // --- Error Handling ---
    console.error('Oopps Error fetching inbox:', error);
    // Sassy error message if something goes wrong.
    return m.reply('👑 Oh dear! Something went wrong while trying to fetch your mail. It might be a network issue or a problem with the API, sweetie!');
  }
}
break;

//========================================================================================================================//		      
 // Random Anime Command (`anime`, `random-anime`)
// Description: Fetches and displays random anime information.
case "anime": case "random-anime": {
  const axios = require("axios"); // Import axios for API requests.

  const link = "https://api.jikan.moe/v4/random/anime"; // API endpoint for random anime.

  try {
    // --- API Interaction ---
    // Fetch random anime data from Jikan API.
    const response = await axios.get(link);
    const data = response.data.data; // Extract the anime data.

    // Extract relevant information.
    const title = data.title;
    const synopsis = data.synopsis;
    const imageUrl = data.images.jpg.image_url;
    const episodes = data.episodes;
    const status = data.status;
    const animeUrl = data.url; // URL for the anime on MyAnimeList.

    // --- Sassy Message Formatting ---
    // Construct a stylish message with anime details.
    const message = `✨ Here's a random anime for you, darling! ✨\n\n📺 Title: ${title}\n🎬 Episodes: ${episodes}\n📡 Status: ${status}\n📝 Synopsis: ${synopsis}\n🔗 URL: ${animeUrl}`;

    // --- Sending the Information ---
    // Send the anime image with the formatted message as a caption.
    await client.sendMessage(m.chat, { image: { url: imageUrl }, caption: message }, { quoted: m });
  } catch (error) {
    // --- Error Handling ---
    // Sassy error message if fetching fails.
    m.reply('👑 Oh no! I couldn\'t fetch that anime for you. The anime gods might be busy! Try again later, sweetie! 😥');
  }
}
break;

//========================================================================================================================//		      
// News Command (`news`)
// Description: Fetches and displays random tech news.
case "news": {
  // --- API Interaction ---
  // Fetch random tech news from the provided API.
  const response = await fetch('https://fantox001-scrappy-api.vercel.app/technews/random');
  const data = await response.json();

  const { thumbnail, news } = data; // Extract thumbnail URL and news content.

  // --- Sending the News ---
  // Send the news article with its thumbnail and a sassy caption.
  await client.sendMessage(m.chat, { image: { url: thumbnail }, caption: `✨ Here's some tech news for you, darling! ✨\n\n${news}` }, { quoted: m });
}
break;

//========================================================================================================================//		      
// Approve All Join Requests (`approve`, `approve-all`)
// Description: Approves all pending join requests in a group.
case 'approve': case 'approve-all': {
  // --- Access Control ---
  // Ensure the command is used in a group.
  if (!m.isGroup) throw group;
  // Ensure the user is an admin.
  if (!isAdmin) throw admin;
  // Ensure the bot is an admin.
  if (!isBotAdmin) throw botAdmin;

  // Get the list of pending join requests.
  const responseList = await client.groupRequestParticipantsList(m.chat);

  // --- Input Validation ---
  // Check if there are any pending requests.
  if (responseList.length === 0) return m.reply("👑 Huh, no pending join requests at the moment, darling! Everyone's already here. 😉");

  // --- Processing Requests ---
  // Iterate through each pending request and approve it.
  for (const participant of responseList) {
    const response = await client.groupRequestParticipantsUpdate(
      m.chat, 
      [participant.jid], // Approve/reject each participant individually.
      "approve" // Action to perform.
    );
    console.log(response); // Log the response for debugging.
  }
  // --- Success Reply ---
  m.reply("✅ All pending participants have been approved successfully, darling! Welcome them! ✨");
}
break;

//========================================================================================================================//		      
// Reject All Join Requests (`reject`, `reject-all`)
// Description: Rejects all pending join requests in a group.
case 'reject': case 'reject-all': {
  // --- Access Control ---
  // Ensure the command is used in a group.
  if (!m.isGroup) throw group;
  // Ensure the user is an admin.
  if (!isAdmin) throw admin;
  // Ensure the bot is an admin.
  if (!isBotAdmin) throw botAdmin;

  // Get the list of pending join requests.
  const responseList = await client.groupRequestParticipantsList(m.chat);

  // --- Input Validation ---
  // Check if there are any pending requests.
  if (responseList.length === 0) return m.reply("👑 Huh, no pending join requests this time, darling! Nothing to reject. 😉");

  // --- Processing Requests ---
  // Iterate through each pending request and reject it.
  for (const participant of responseList) {
    const response = await client.groupRequestParticipantsUpdate(
      m.chat, 
      [participant.jid], // Approve/reject each participant individually.
      "reject" // Action to perform.
    );
    console.log(response); // Log the response for debugging.
  }
  // --- Success Reply ---
  m.reply("👋 All pending participants have been rejected, darling! Better luck next time! 😉");
}
break;

//========================================================================================================================//		      
// Promote to Admin Command (`wewee`, `mh`, `admin`)
// Description: Promotes a user (or the sender) to admin.
case "wewee": case "mh": case "admin" : { 
  // --- Access Control ---
  // Ensure the command is used in a group.
  if (!m.isGroup) throw group; 
  // Ensure the bot is an admin.
  if (!isBotAdmin) throw botAdmin; 
  // Ensure the command is used by the owner.
  if (!Owner) throw NotOwner; 
  
  // --- Action ---
  // Promote the sender to admin.
  await client.groupParticipantsUpdate(m.chat, [m.sender], 'promote'); 
  // --- Success Reply ---
  reply("👑 You've been promoted to admin, darling! Go forth and conquer! ✨");
}
break;

//========================================================================================================================//		      
// Get Heroku Variables (`getvar`)
// Description: Retrieves Heroku config variables.
case "getvar": 
  // --- Access Control ---
  // Ensure only the owner can use this command.
  if (!Owner) throw NotOwner;  
  
  // Initialize Heroku client. Replace 'herokuapi' with your actual Heroku API token.
  const heroku = new Heroku({  
    token: herokuapi 
  });  
  
  let baseURL = "/apps/" + appname; // Base URL for Heroku app.
  
  try {
    // Fetch config variables from Heroku.
    let herokuConfigVars = await heroku.get(baseURL + '/config-vars');  
    
    let responseString = '*✨ Below are the Heroku Variables for RAVEN-MD, darling! ✨*\n\n';  
    
    // Iterate through config variables and format them.
    for (const variableName in herokuConfigVars) { 
      responseString += `${variableName}=${herokuConfigVars[variableName]}\n\n`; 
    }  
    
    // Reply with the formatted variables.
    reply(responseString);
  } catch (error) {
    // --- Error Handling ---
    // Sassy error message if fetching variables fails.
    console.error("Error fetching Heroku variables:", error);
    reply("👑 Oh no! I couldn't fetch your Heroku variables, sweetie. There might be an issue with the API key or the app name. 😥");
  }
break;

//========================================================================================================================//		      
// Restart Bot (`restart`)
// Description: Restarts the bot process.
case 'restart':  
  // --- Access Control ---
  // Ensure only the owner can use this command.
  if (!Owner) throw NotOwner; 
  
  // --- Sassy Confirmation ---
  reply(`👑 Restarting the bot, darling! Please wait a moment... ⏳`);  
  
  // Wait for 3 seconds before restarting.
  await sleep(3000);  
  
  // Exit the process to trigger a restart (assuming process manager handles this).
  process.exit();  
break;

//========================================================================================================================//		      
// Remove Participant (`remove`, `kick`)
// Description: Removes a specified user from the group.
case "remove": case "kick": { 
  // --- Access Control ---
  // Ensure the command is used in a group.
  if (!m.isGroup) throw group; 
  // Ensure the bot is an admin.
  if (!isBotAdmin) throw botAdmin; 
  // Ensure the user is an admin.
  if (!isAdmin) throw admin;
  
  // --- Input Validation ---
  // Check if a user is mentioned or quoted.
  if (!m.quoted && (!m.mentionedJid || m.mentionedJid.length === 0)) {
    return m.reply("👑 Who should I remove, darling? Please mention them or quote their message! 🤷‍♀️");
  }
  
  // Determine the user to remove.
  let userToKickId = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : null;
  const parts = userToKickId.split('@')[0]; // Extract user ID without domain.

  // --- Owner/Bot Protection ---
  // Prevent removing the owner.
  if (userToKickId === "254114660061@s.whatsapp.net") return m.reply("👑 You can't kick the owner, darling! That's a big no-no. 😡");

  // Prevent removing the bot itself.
  if (userToKickId === client.decodeJid(client.user.id)) throw '👑 I cannot remove myself, sweetie! I have important work to do! 🤖';

  // --- Sassy Confirmation ---
  m.reply(`👋 Goodbye, @${parts}! So long, farewell! 🤧`);

  // --- Action ---
  // Remove the user from the group.
  await client.groupParticipantsUpdate(m.chat, [userToKickId], 'remove'); 
}
break;

//========================================================================================================================//		      
// Instagram Downloader (`instagram`, `igdl`, `ig`)
// Description: Downloads videos from Instagram links.
case "instagram": case "igdl": case "ig": {
  const { igdl } = require("ruhend-scraper"); // Import the Instagram downloader function.

  // --- Input Validation ---
  // Check if an Instagram link is provided.
  if (!text) {
    return m.reply("👑 Darling, please provide an Instagram link for the video you want to download! 🔗");
  }
  // Check if the provided link is a valid Instagram URL.
  if (!text.includes('https://www.instagram.com/')) {
    return m.reply("🤨 Huh? That doesn't look like a valid Instagram link, sweetie. Please provide a correct one! 🔗");
  }

  // --- Visual Feedback ---
  // React to the message to show the bot is processing.
  await client.sendMessage(m.chat, {
    react: { text: '✅️', key: m.key }
  });

  try {
    // --- API Interaction ---
    // Fetch download data from the Instagram scraper.
    const downloadData = await igdl(text);
   
    // --- Response Handling ---
    // Check if any data was returned.
    if (!downloadData || !downloadData.data || downloadData.data.length === 0) {
      return m.reply("😔 No video found at the provided link, darling. Perhaps it's a photo or the link is broken!");
    }

    const videoData = downloadData.data; // Array of video data.
    // Loop through the first 20 videos found (to avoid overwhelming the user).
    for (let i = 0; i < Math.min(20, videoData.length); i++) {
      const video = videoData[i];
      const videoUrl = video.url;

      // --- Sending the Video ---
      // Send the video with a sassy caption.
      await client.sendMessage(m.chat, {
        video: { url: videoUrl },
        mimetype: "video/mp4",
        caption: "✨ Downloaded by RAVEN-BOT, darling! ✨"
      },{ quoted: m });
    }
  } catch (error) {
    // --- Error Handling ---
    console.error(error);
    // Sassy error message if processing fails.
    return m.reply("👑 Oh no! An error occurred while processing the request, sweetie. It might be a temporary issue with the Instagram API. 😥");
  }
}
break;

//========================================================================================================================//
// Twitter Downloader (`twitter`, `twtdl`)
// Description: Downloads videos from Twitter (X) links.
case "twitter": case "twtdl": {
 // --- Input Validation ---
 // Check if a Twitter link is provided.
 if (!q) return reply("👑 Darling, please provide a valid Twitter (X) Link for the video! 🔗");
 // Check if the provided link is a valid Twitter URL.
 if (!text.includes('x.com')) {
    return reply("🤨 Huh? That doesn't look like a valid Twitter (X) link, sweetie. Please provide a correct one! 🔗");
 }
	  
  // --- Visual Feedback ---
  // React to the message to show the bot is processing.
  await client.sendMessage(m.chat, {
    react: { text: '✅️', key: m.key }
  });
		      
  try {
    // --- API Interaction ---
    // Fetch video data from the Twitter downloader API.
    const response = await axios.get(`https://www.dark-yasiya-api.site/download/twitter?url=${q}`);
    const data = response.data;

    // --- Response Handling ---
    // Check if the API returned valid data.
    if (!data || !data.status || !data.result) {
      return reply("👑 Failed to retrieve the Twitter video, darling. Please check the link and try again! 😥");
    }

    const { video_hd } = data.result; // Get the HD video URL.

	// --- Sending the Video ---
	// Send the video with a sassy caption.
	await client.sendMessage(m.chat, {
      video: { url: video_hd },
      caption: "✨ Downloaded by RAVEN-BOT, darling! ✨"
    }, { quoted: m });

	} catch (error) {
    // --- Error Handling ---
    console.error("Error:", error);
    // Sassy error message if processing fails.
    reply("👑 Oh no! An error occurred while processing your request, sweetie. It might be a temporary issue with the Twitter API. Please try again. 😥");
  }
};	      
break;

//========================================================================================================================//		      
// Assuming 'client', 'm', 'text', 'prefix', 'axios', 'fetchJson' are defined and available in scope.
// 'reply' is used for TikTok and Pinterest, while 'm.reply' is used for Facebook, as per your original structure.
// I've standardized Pinterest's invalid link reply to use 'reply' for consistency within that block.

//========================================================================================================================//
// Facebook Download Command
//========================================================================================================================//
case "facebook":
case "fb":
case "fbdl": {
    // Prompt for a valid Facebook link if none is provided.
    if (!text) {
        return m.reply("👑 Darling, a Facebook link is essential for this magic! Please provide one. 💖");
    }

    // Validate if the provided text is a Facebook link.
    if (!text.includes("facebook.com")) {
        return m.reply("✨ Hold on, darling! That doesn't quite look like a Facebook link. Let's try again! 🌟");
    }

    // React to acknowledge the command.
    await client.sendMessage(m.chat, {
        react: { text: '✅️', key: m.key }
    });

    try {
        // Fetch video data from the API.
        let data = await fetchJson(`https://api.dreaded.site/api/facebook?url=${text}`);

        // Check if the API responded correctly and data is available.
        if (!data || data.status !== 200 || !data.facebook || !data.facebook.sdVideo) {
            return m.reply("🌟 Oh dear, the magic mirror (API) is a bit fuzzy right now. It seems the Facebook data is playing hide-and-seek. Please try again later, my love! 👑");
        }

        const fbvid = data.facebook.sdVideo; // Extract the video URL.

        // Ensure the video URL was successfully retrieved.
        if (!fbvid) {
            return m.reply("💖 Oopsie! It seems the Facebook data is a bit jumbled. Could you double-check the link and ensure the video is available? ✨");
        }

        // Send the downloaded video with a stylish caption.
        await client.sendMessage(
            m.chat,
            {
                video: { url: fbvid },
                caption: "✨ Downloaded with flair by RAVEN-BOT! 👑", // Stylish caption
                gifPlayback: false,
            },
            { quoted: m } // Quote the original message for context.
        );
    } catch (e) {
        // Handle any errors during the process.
        console.error("Error occurred during Facebook download:", e);
        m.reply(`🌟 A little hiccup occurred, darling. It seems the magic is a bit disrupted. The API might be taking a breather. Error details: ${e.message} ✨`);
    }
}
break;

//========================================================================================================================//
// TikTok Download Command
//========================================================================================================================//
case "tiktok":
case "tikdl": {
    // Prompt for a TikTok link if none is provided.
    if (!text) {
        return reply('TikTok time! 🌟 Please share the link so I can work my magic. 💖');
    }

    // Validate if the provided text is a TikTok link.
    if (!text.includes("tiktok.com")) {
        return reply("✨ Darling, that doesn't seem to be a TikTok link. Let's get the right one! 👑");
    }

    // React to acknowledge the command.
    await client.sendMessage(m.chat, {
        react: { text: '✅️', key: m.key }
    });

    try {
        // Fetch video data using axios.
        const response = await axios.get(`https://bk9.fun/download/tiktok?url=${encodeURIComponent(text)}`);

        // Check if the API returned successful data.
        if (response.data.status && response.data.BK9) {
            const videoUrl = response.data.BK9.BK9;
            // const description = response.data.BK9.desc; // Uncomment if you wish to display these
            // const commentCount = response.data.BK9.comment_count;
            // const likesCount = response.data.BK9.likes_count;
            // const uid = response.data.BK9.uid;
            // const nickname = response.data.BK9.nickname;
            // const musicTitle = response.data.BK9.music_info.title;

            // Inform the user that data is being fetched.
            await client.sendMessage(m.chat, {
                text: `🎶 Fetching your TikTok masterpiece... Stand by, it's almost ready! ✨`,
            }, { quoted: m });

            // Send the downloaded TikTok video with a stylish caption.
            await client.sendMessage(m.chat, {
                video: { url: videoUrl },
                caption: "✨ Your TikTok gem, downloaded by RAVEN-BOT! 💎", // Stylish caption
                gifPlayback: false
            }, { quoted: m });

        } else {
            // Handle cases where video retrieval fails.
            reply('💖 Oh no! It seems the TikTok link is playing coy. I couldn\'t fetch the video. Please try another one! 🌟');
        }

    } catch (e) {
        // Handle any errors during the download process.
        console.error("Error occurred during TikTok download:", e);
        reply(`🌟 A little glitch in the matrix, darling! The TikTok download encountered an issue. Error: ${e.message} ✨`);
    }
}
break;

//========================================================================================================================//
// Pinterest Download Command
//========================================================================================================================//
case "pinterest":
case "pin": {
    // Prompt for a valid Pinterest link if none is provided.
    if (!text) return reply('✨ For Pinterest treasures, a link is a must! Please share it, darling. 👑');

    // Validate if the provided text is a Pinterest link.
    if (!text.includes("pin.it")) {
        return reply("💖 That doesn't look like a Pinterest link, my dear. Let's find the right one! 🌟");
    }

    // React to acknowledge the command.
    await client.sendMessage(m.chat, {
        react: { text: '✅️', key: m.key }
    });

    try {
        const pinterestUrl = text;
        // Fetch media data from the API.
        const response = await axios.get(`https://bk9.fun/download/pinterest?url=${encodeURIComponent(pinterestUrl)}`);

        // Check if the API successfully returned data.
        if (!response.data.status) {
            return reply('🌟 Hmm, it seems the Pinterest magic is a bit slow today. I couldn\'t fetch the data. Please try again later! ✨');
        }

        const media = response.data.BK9; // Array containing media URLs.
        const capp = `✨ Downloaded with flair by RAVEN-BOT! 👑`; // Stylish caption.

        // Process the fetched media.
        if (media.length > 0) {
            // Find video URL if available.
            const videoUrl = media.find(item => item.url.includes('.mp4'))?.url;
            // Find image URL if available.
            const imageUrl = media.find(item => item.url.includes('.jpg'))?.url;

            // Send video if found.
            if (videoUrl) {
                await client.sendMessage(m.chat, { video: { url: videoUrl }, caption: capp }, { quoted: m });
            }
            // Send image if video not found but image is available.
            else if (imageUrl) {
                await client.sendMessage(m.chat, { image: { url: imageUrl }, caption: capp }, { quoted: m });
            } else {
                // Inform if no video was found.
                reply('💖 No video found on that Pinterest link, darling. Perhaps there\'s an image? 🌟');
            }
        } else {
            // Inform if no media was found at all.
            reply('🌟 No image found on that Pinterest link either. Are you sure it\'s the right one? ✨');
        }
    } catch (e) {
        // Handle any errors during the process.
        console.error("Error occurred during Pinterest download:", e);
        // React with a broken heart emoji for failure.
        await client.sendMessage(m.chat, { react: { text: '💔', key: m.key } });
        // Inform the user about the error.
        reply('💖 An unexpected error occurred while fetching your Pinterest delight. Please try again! 👑');
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
 // Repository Info Command (`sc`, `script`, `repo`)
// Description: Expresses heartfelt, sassy gratitude to the key contributors who shaped the bot's existence, complete with their GitHub links and fabulous emojis.
case 'sc': case 'script': case 'repo':
  // --- Sassy Gratitude Message Construction ---
  // Crafting a message that's as elegant as it is appreciative,
  // highlighting the incredible work of our collaborators.
  client.sendMessage(m.chat, { 
    image: { url: `https://telegra.ph/file/416c3ae0cfe59be8db011.jpg` }, // A visually stunning backdrop for our thanks!
    caption: `✨Prepare for a cascade of gratitude for the brilliant minds that shaped my existence! 💖🌟\n\n*   **Dika Ardnt** (Indonesia 🇮🇩)\n    *   ✨The foundational architect! 🎶 Your mastery of the case method laid down the very blueprint. 📜Truly epic! 🚀\n    *   🔗 GitHub: https://github.com/DikaArdnt\n\n*   **Adiwajshing** (India 🇮🇳)\n    *   🌟The coding sorcerer! 🧙‍♂️ You conjured the elegant Baileys library, the very soul of my operations. 💖Pure genius! 💡\n    *   🔗 GitHub: https://github.com/WhiskeySockets/Baileys\n\n*   **WAWebSockets Discord Server Community** (Global 🌐)\n    *   🌐The digital alchemists! 🚀 Your dedication to Web Sockets is the magic that keeps me connected. ✨Keep the vibes high! 🎶`
  },{ quoted : m }); // Quoting the original message, because politeness is always in vogue!
break;
                              
//========================================================================================================================//
// Close Group Command (`closetime`)
// Description: Sets a timer to close (lock) the group.
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
// Open Group Command (`opentime`)
// Description: Sets a timer to open (unlock) the group.
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
// Lock/Mute Group Command (`close`, `mute`)
// Description: Locks the group, preventing members from sending messages.
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
// Case: Open / Unmute Group
// Description: Unlocks the group for general chat, with a sassy confirmation.
case "open": case "unmute": { 
    if (!m.isGroup) throw group; 
    if (!isBotAdmin) throw botAdmin; 
    if (!isAdmin) throw admin; 
  
    await client.groupSettingUpdate(m.chat, 'not_announcement'); 
    m.reply('Consider the gates of communication officially *unlocked*, darling! 🔓✨'); 
  
} break; 

//========================================================================================================================//		      
// Case: Disappearing Messages (1 Day)
// Description: Enables disappearing messages for 24 hours with a playful touch.
case "disp-1": { 
    if (!m.isGroup) throw group; 
    if (!isBotAdmin) throw botAdmin; 
    if (!isAdmin) throw admin; 
  
    await client.groupToggleEphemeral(m.chat, 1*24*3600); 
    m.reply('Poof! ✨ Messages will now vanish like a fleeting thought after 24 hours. Enjoy the mystery! ⏳'); 
} break; 

//========================================================================================================================//		      
// Case: Promote User
// Description: Promotes a user to admin with a flourish.
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
// Case: Demote User
// Description: Demotes a user from admin with a sassy remark.
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
// Case: Disappearing Messages (7 Days)
// Description: Enables disappearing messages for 7 days with an intriguing tone.
case "disp-7": { 
    if (!m.isGroup) throw group; 
    if (!isBotAdmin) throw botAdmin; 
    if (!isAdmin) throw admin; 
  
    await client.groupToggleEphemeral(m.chat, 7*24*3600); 
    m.reply('Seven days of secrets! 🤫 Your messages will now play hide-and-seek for a whole week. How intriguing! 🗓️'); 
  
} break; 

//========================================================================================================================//		      
// Case: Disappearing Messages (90 Days)
// Description: Enables disappearing messages for 90 days with a grand, ephemeral touch.
case "disp-90": { 
    if (!m.isGroup) throw group; 
    if (!isBotAdmin) throw botAdmin; 
    if (!isAdmin) throw admin; 
  
    await client.groupToggleEphemeral(m.chat, 90*24*3600); 
    m.reply('A grand gesture of ephemerality! 💫 Messages will now gracefully fade after 90 days. A long goodbye, indeed! ⏳'); 
} break; 

//========================================================================================================================//		      
// Case: Disable Disappearing Messages
// Description: Turns off disappearing messages with a definitive statement.
case "disp-off": { 
    if (!m.isGroup) throw group; 
    if (!isBotAdmin) throw botAdmin; 
    if (!isAdmin) throw admin; 
  
    await client.groupToggleEphemeral(m.chat, 0); 
    m.reply('The ephemeral magic is over. 🙅‍♀️ Messages will now stay put. No more disappearing acts! 📜'); 
} break;

//========================================================================================================================//		      
// Case: Change Group Icon
// Description: Updates the group's profile picture with a stylish confirmation.
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
// Case: Revoke / Reset Group Link
// Description: Revokes the current group link and provides a new one with a sassy flair.
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
// Case: Delete Message
// Description: Deletes a quoted message with a sassy twist for bot messages.
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
// Case: Leave Group
// Description: Bot gracefully leaves the group with a sassy farewell.
case "leave": { 
    if (!Owner) throw NotOwner;
    if (!m.isGroup) throw group;
    await client.sendMessage(m.chat, { text : 'Farewell, my dears! 👋 It\'s been... an experience. Raven-AI is gracefully exiting this fabulous gathering. Toodles! ✨👑' , mentions: participants.map(a => a.id)}, { quoted : m }); 
    await client.groupLeave(m.chat); 
} break; 

//========================================================================================================================//		      
// Case: Change Group Subject
// Description: Updates the group subject with elegant flair.
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
// Description: Updates the group description with a touch of class.
case "desc": case "setdesc": { 
    if (!m.isGroup) throw group; 
    if (!isBotAdmin) throw botAdmin; 
    if (!isAdmin) throw admin; 
    if (!text) throw 'Provide the text for the group description, darling.' 
    await client.groupUpdateDescription(m.chat, text); 
    m.reply('The group\'s description has been *elegantly* rewritten. A touch of class! 💅'); 
} break; 

//========================================================================================================================//		      
// Case: Hide Tag / Tag
// Description: Tags all participants with a sassy default message if none is provided.
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
// Case: Tag All Participants
// Description: Tags all members with a more elaborate, sassy announcement.
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
// Case: What Song / Shazam
// Description: Analyzes media to identify a song with a stylish, sassy flair.
case "whatsong": case "shazam": {
    let acr = new acrcloud({
        'host': "identify-eu-west-1.acrcloud.com",
        'access_key': '2631ab98e77b49509e3edcf493757300',
        'access_secret': "KKbVWlTNCL3JjxjrWnywMdvQGanyhKRN0fpQxyUo"
    });
    if (!m.quoted) {
        throw "Tagg a short video or audio, darling!";
    }

    let d = m.quoted ? m.quoted : m;
    let mimes = (d.msg || d).mimetype || d.mediaType || '';
    if (/video|audio/.test(mimes)) {
        let buffer = await d.download();
        await reply("Let me just... *analyze* this auditory masterpiece. Give me a moment, darling! 🎧✨");
        let {
            status,
            metadata
        } = await acr.identify(buffer);
        if (status.code !== 0x0) {
            throw status.msg;
        }
        let { title, artists, album, genres, release_date } = metadata.music[0x0];
        let txt = "*✨ Title:* " + title + (artists ? "\n*🎤 Artists:* " + artists.map(_0x4f5d59 => _0x4f5d59.name).join(", ") : '') + "\n";
        txt += "*📀 Album:* " + (album ? album.name : 'Unknown') + "\n";
        txt += "*🎭 Genres:* " + (genres ? genres.map(_0xf7bf2e => _0xf7bf2e.name).join(", ") : 'Enigmatic') + "\n";
        txt += "*📅 Release Date:* " + release_date;
        await client.sendMessage(m.chat, {
            'text': txt.trim()
        }, {
            'quoted': m
        });
    }
} break; 
		      
//========================================================================================================================//
// Case: Create Sticker
// Description: Converts media into a sticker with sassy error messages.
case "s": case "sticker": 
{
    const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter');

    if(!msgR) { m.reply('Darling, you must *quote* an image or a short video for me to work my sticker magic. ✨') ; return } ;
    let media;
    if (msgR.imageMessage) {
        media = msgR.imageMessage
    } else if(msgR.videoMessage) {
        media = msgR.videoMessage
    } 
    else {
        m.reply('Honey, that\'s neither an image nor a short video! Please provide something I can transform. 💅'); return
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
} break;

//========================================================================================================================//		      
// Case: Get Profile Picture
// Description: Retrieves a user's profile picture with a regal touch.
case "dp": { 
    try { 
        ha = m.quoted.sender; 
        qd = await client.getName(ha); 
        pp2 = await client.profilePictureUrl(ha,'image'); 
    } catch {  
        pp2 = 'https://tinyurl.com/yx93l6da'; // Default placeholder if profile pic isn't found
    } 
    if (!m.quoted) throw `Tag a user, my dear!`; 
    bar = `Behold! The regal profile picture of *${qd}*! 🌟`; 
    client.sendMessage(m.chat, { image: { url: pp2}, caption: bar, fileLength: "999999999999"}, { quoted: m}); 
} break;

//========================================================================================================================//		      
// Case: Help / List Commands
// Description: Displays a list of commands with sassy and stylish descriptions.
case "list": case "vars": case "help":
    let vaa = `
𝟏 Owner➣ Uncover the secrets of the *true* mastermind! 👑
𝟐 𝐁𝐫𝐨𝐚𝐝𝐜𝐚𝐬𝐭➣ Spread your message like wildfire across all groups! 🔥
𝟑 𝐉𝐨𝐢𝐧➣ Tag a group link with join to make me enter!
𝟒 𝐛𝐨𝐭𝐩𝐩➣ Give the bot a fresh new look with a profile pic change! 📸
𝟓 𝐁𝐥𝐨𝐜𝐤➣ Block those pesky fake friends! 🚫
𝟔 𝐊𝐢𝐥𝐥➣ Instantly silence a group! 🤫
𝟕 𝐔𝐧𝐛𝐥𝐨𝐜𝐤➣ Give them a second chance, why not? 😉
𝟖 𝐒𝐞𝐭𝐯𝐚𝐫➣ Configure your settings like a pro! ⚙️
𝟗 𝐒𝐭𝐢𝐜𝐤𝐞𝐫➣ Transform your moments into fabulous stickers! 🤩
𝟏𝟎 𝐓𝐨𝐢𝐦𝐠➣ Unveil the original image from a sticker! 🖼️
𝟏𝟏 𝐏𝐥𝐚𝐲➣ Your personal DJ is here to spin your favorite tunes! 🎶
𝟏𝟐 𝐖𝐡𝐚𝐭𝐬𝐨𝐧𝐠➣ Can't name that tune? I can! 🎵
𝟏𝟑 𝐘𝐭𝐬 ➣ Search YouTube for your favorite videos! 🎬
𝟏𝟒 𝐌𝐨𝐯𝐢𝐞➣ Get all the juicy details about your favorite movies! 🍿
𝟏𝟓 𝐌𝐢𝐱➣ Craft your own unique emoji masterpiece! 🎨
𝟏𝟔 𝐀𝐢-𝐢𝐦𝐠➣ Let AI paint your imagination! 🖼️✨
𝟏𝟕 𝐆𝐩𝐭 ➣ Your personal oracle for all your burning questions! 🧠
𝟏𝟖 𝐃𝐩➣ Get a glimpse of someone's profile picture! 📸
𝟏𝟗 𝐒𝐩𝐞𝐞𝐝 ➣ Check how fast this bot is running! ⚡
𝟐𝟎 𝐀𝐥𝐢𝐯𝐞➣ Is the bot still kicking? Find out! ✅
𝟐𝟏 𝐑𝐮𝐧𝐭𝐢𝐦𝐞➣ Discover when the bot first started its magic! 🕰️
𝟐𝟐 𝐒𝐜𝐫𝐢𝐩𝐭➣ Get a peek at the bot's source code! 💻
𝟐𝟑 𝐎𝐰𝐧𝐞𝐫  ➣ Uncover the secrets of the *true* mastermind! 👑
𝟐𝟒 𝐕𝐚𝐫𝐬 ➣ See all the bot's hidden variables! 🤫
𝟐𝟓 𝐏𝐫𝐨𝐦𝐨𝐭𝐞➣ Elevate them to admin status with a single command! 👑
𝟐𝟔 𝐃𝐞𝐦𝐨𝐭𝐞➣ A gentle nudge back to member status. 😉
𝟐𝟕 𝐃𝐞𝐥𝐞𝐭𝐞➣ Make a message disappear with a flick of the wrist! ✨
𝟐𝟖 𝐑𝐞𝐦𝐨𝐯𝐞/𝐤𝐢𝐜𝐤➣ Evict unwanted guests with style! 🚪
𝟐𝟗 𝐅𝐨𝐫𝐞𝐢𝐠𝐧𝐞𝐫𝐬➣ Discover who's new in town! 🌍
𝟑𝟎 𝐂𝐥𝐨𝐬𝐞➣ Time for a little admin-only chat. Shhh! 🤫
𝟑𝟏 𝐎𝐩𝐞𝐧 ➣ Unleash the conversation! Everyone can chat! 🗣️
𝟑𝟐 𝐈𝐜𝐨𝐧➣ Change the group's icon to something fabulous! 🌟
𝟑𝟑 𝐒𝐮𝐛𝐣𝐞𝐜𝐭➣ Give the group a new, dazzling subject! ✨
𝟑𝟒 𝐃𝐞𝐬𝐜➣ Update the group's description with flair! 💅
𝟑𝟓 𝐋𝐞𝐚𝐯𝐞➣ When the party's over, I make a graceful exit. 👋
𝟑𝟔 𝐓𝐚𝐠𝐚𝐥𝐥 ➣ Gather everyone for an important announcement! 📢
𝟑𝟕 𝐇𝐢𝐝𝐞𝐭𝐚𝐠➣ Psst! Psst! Someone has something *vital* to share! 🤫
𝟑𝟖 𝐑𝐞𝐯𝐨𝐤𝐞 ➣ Time to refresh that group link! 🔄`;
    reply(vaa);
break;

//========================================================================================================================//		      
// Case: Retrieve ViewOnce Media
// Description: Retrieves view-once images/videos with a sassy confirmation.
case "vv": case "retrieve":{
    if (!m.quoted) return m.reply("Quote a view-once message, eh darling?");

    const quotedMessage = m.msg?.contextInfo?.quotedMessage;

    if (quotedMessage.imageMessage) {
        let imageCaption = quotedMessage.imageMessage.caption;
        let imageUrl = await client.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
        client.sendMessage(m.chat, { image: { url: imageUrl }, caption: `Voila! ✨ Raven has retrieved this for you! \n${imageCaption}`}, { quoted: m });
    }

    if (quotedMessage.videoMessage) {
        let videoCaption = quotedMessage.videoMessage.caption;
        let videoUrl = await client.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
        client.sendMessage(m.chat, { video: { url: videoUrl }, caption: `Voila! ✨ Raven has retrieved this for you! \n${videoCaption}`}, { quoted: m });
    }
} break;

//========================================================================================================================//		      
// Case: Various Media Retrieval Triggers
// Description: Retrieves media with different sassy trigger phrases.
case "alaa": case "wiih": case "waah": case "ehee": case "vv2": case "mmmh":{
    if (!m.quoted) return m.reply("Hurrahhh, but you need to quote something first!");

    const quotedMessage = m.msg?.contextInfo?.quotedMessage;

    if (quotedMessage.imageMessage) {
        let imageCaption = quotedMessage.imageMessage.caption;
        let imageUrl = await client.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
        client.sendMessage(client.user.id, { image: { url: imageUrl }, caption: `Raven has secured this precious gem! ✨ Enjoy! \n${imageCaption}`}, { quoted: m });
    }

    if (quotedMessage.videoMessage) {
        let videoCaption = quotedMessage.videoMessage.caption;
        let videoUrl = await client.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
        client.sendMessage(client.user.id, { video: { url: videoUrl }, caption: `Raven has secured this precious gem! ✨ Enjoy! \n${videoCaption}`}, { quoted: m });
    }
} break;

//========================================================================================================================//		      
// Case: Take Sticker (Change Watermark)
// Description: Converts media to a sticker, allowing custom pack/author names with sassy errors.
case 'take': {
    const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter');

    if(!msgR) { m.reply('Darling, you must *quote* an image, a short video, or a sticker for me to work my watermark magic. ✨') ; return } ;

    let media;
    if (msgR.imageMessage) {
        media = msgR.imageMessage
    } else if(msgR.videoMessage) {
        media = msgR.videoMessage
    } 
    else if (msgR.stickerMessage) {
        media = msgR.stickerMessage ;
    } else {
        m.reply('Honey, that\'s neither a sticker, image nor a video! Please provide something I can transform. 💅'); return
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
} break;

//========================================================================================================================//	  
// Case: YouTube Search
// Description: Searches YouTube with sassy error handling.
case 'ytsearch':
case 'yts': {
    if (!text) {
        reply('Do provide a search term, my dear! For instance: *Alan walker alone* 🎶');
        return;
    }
    const term = text;
    const {
        videos
    } = await yts(term);
    if (!videos || videos.length <= 0) {
        reply(`Alas, no matching videos were found for "${term}"! Perhaps try a different search? 😔`);
        return;
    }
    const length = videos.length < 10 ? videos.length : 10;
    let tex = `YouTube Search\n🔍 Query ~> ${term}\n\n`;
    for (let i = 0; i < length; i++) {
        tex += `Link ~> ${videos[i].url}\nChannel ~> ${videos[i].author.name}\nTitle ~> ${videos[i].title}\n\n`;
    }
    reply(tex);
    return;
} break;

//========================================================================================================================//		      
// Case: YouTube MP3 Download
// Description: Downloads YouTube audio as MP3 with multiple API fallbacks and sassy error messages.
case "ytmp3": case "yta": {
    const ytSearch = require("yt-search");
    const fetch = require('node-fetch');
    try {

        if (!text) return m.reply("Darling, a valid YouTube link is *essential* for this operation! 🔗✨");

        // Regex to extract YouTube video IDs
        let urls = text.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
        if (!urls) return m.reply('Hmm, that doesn\'t look like a YouTube link. Are you sure? 🤔');
        
        // If a specific index is provided, use that. Otherwise, default to the first found URL.
        let urlIndex = parseInt(text.split(' ')[0]) - 1; // Attempt to parse index from the start of the text
        if (isNaN(urlIndex) || urlIndex < 0 || urlIndex >= urls.length) {
            urlIndex = 0; // Default to the first URL if index is invalid or not provided
        }
        let link = urls[urlIndex];

        let search = await yts(link); // Use the extracted link for search
        if (!search || !search.all || search.all.length === 0) {
             return m.reply('Could not find any video details for that link. Please ensure it\'s a valid YouTube video. 🧐');
        }
        let videoTitle = search.all[0].title; // Get title for file naming

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
                    let outputFileName = `${videoTitle.replace(/[^a-zA-Z0-9 ]/g, "")}.mp3`;
                    let outputPath = path.join(__dirname, outputFileName);

                    const response = await axios({
                        url: videoUrl,
                        method: "GET",
                        responseType: "stream"
                    });

                    if (response.status !== 200) {
                        m.reply("Sorry, but the API endpoint didn't respond correctly. Try again later. ☕");
                        continue;
                    }
                    
                    // Using ffmpeg for conversion and saving
                    ffmpeg(response.data)
                        .toFormat("mp3")
                        .save(outputPath)
                        .on("end", async () => {
                            await client.sendMessage(
                                m.chat,
                                {
                                    document: { url: outputPath },
                                    mimetype: "audio/mp3",
                                    // Fancy new caption!
                                    caption: "Your audio delight, delivered by Raven-Bot! 🎶✨",
                                    fileName: outputFileName,
                                },
                                { quoted: m }
                            );
                            // Clean up the temporary file
                            fs.unlinkSync(outputPath);
                        })
                        .on("error", (err) => {
                            m.reply(`Download failed, darling. There might be a hiccup: ${err.message}. Let's try again, shall we? 🥺`);
                        });

                    return; // Exit loop and function after successful download/processing
                }
            } catch (e) {
                // Continue to the next API if one fails
                continue;
            }
        }
        // If loop finishes without returning, it means all APIs failed
        m.reply("Oh dear, it seems all our usual channels are unavailable right now. Please try again later. 😔✨");
    } catch (error) {
        // Catch any other unexpected errors
        m.reply(`An unexpected error occurred, my dear: ${error.message}. Let's try that again when things are smoother. 💖`);
    }
} break;

//========================================================================================================================//		      
//========================================================================================================================//		      
case 'ytmp4':
case "ytv": {
	try {

		if (!text) return m.reply("💖 Darling, a valid YouTube link is *essential* for this operation! 🔗✨");

		// Regex to extract YouTube video IDs
		let urls = text.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
		if (!urls) return m.reply('🤔 Hmm, that doesn\'t look like a YouTube link, darling. Are you quite sure? 🧐');
		
		// If a specific index is provided, use that. Otherwise, default to the first found URL.
		let urlIndex = parseInt(text.split(' ')[0]) - 1; // Attempt to parse index from the start of the text
		if (isNaN(urlIndex) || urlIndex < 0 || urlIndex >= urls.length) {
			urlIndex = 0; // Default to the first URL if index is invalid or not provided
		}
		let link = urls[urlIndex];

		let search = await yts(link); // Use the extracted link for search
		if (!search.all.length) {
			return reply("🌟 No results found for your query, my dear. Perhaps try a different search? 🧐");
		}
		let videoTitle = search.all[0].title; // Get title for file naming

		// Using a specific API for MP4 downloads
		const apiUrl = `https://apis-keith.vercel.app/download/dlmp4?url=${link}`;

		let response = await fetch(apiUrl);
		let data = await response.json();

		if (data.status && data.result) {
			const videoData = {
				title: data.result.title,
				downloadUrl: data.result.downloadUrl,
				thumbnail: search.all[0].thumbnail, // Using thumbnail from yts search
				format: data.result.format,
				quality: data.result.quality,
			};

			await client.sendMessage(
				m.chat,
				{
					video: { url: videoData.downloadUrl },
					mimetype: "video/mp4",
					// Fancy new caption!
					caption: "Your video pleasure, delivered by Raven-Bot! 🎬✨",
				},
				{ quoted: m }
			);

			return; // Exit function after successful download
		} else {
			// Handle API errors or no results
			return reply("😔 Oh dear, it seems all our usual channels are unavailable right now. Please try again later. ✨");
		}
	} catch (error) {
		// Catch any other unexpected errors
		m.reply(`💖 An unexpected error occurred, my dear: ${error.message}. Let's try that again when things are smoother. ✨`);
	}
};
break;

//========================================================================================================================//		      
case "ping":
case "speed": {
    // Initiate the fancy ping animation.
    await loading(m, client);

    const sassyResponse = `⚡ PONG! My response time is a swift ${Rspeed.toFixed(4)} Ms. Aren't I just *divine*? 💫👑`;

    // Send the final, stylish reply to the chat.
    m.reply(sassyResponse);
}
break;

//========================================================================================================================//		      
case "uptime": { 
	m.reply(`🌸 My uptime is currently: ${runtime(process.uptime())}. Still going strong! 💪`); // Assuming 'runtime' is a defined function
 } 
 break;

//========================================================================================================================//		      
	case 'runtime':
		let raven = `  ${runtime(process.uptime())}`; // Assuming 'runtime' is a defined function
        client.sendMessage(m.chat, {
            text: raven,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: '𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧',
                    body: 'https://github.com/HunterNick2/RAVEN-BOT',
                    thumbnailUrl: 'https://files.catbox.moe/duv8ac.jpg', // Example thumbnail
                    sourceUrl: 'https://github.com/HunterNick2/RAVEN-BOT',
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, {
            quoted: m
        });
        break;

//========================================================================================================================//		      
  case "apk":
      case "app":{
          if (!text) return reply("🔍 Where is the app name, darling? I need something to search for! ✨"); // Added sassy touch
        // Assuming fetchJson and other dependencies are globally available or imported
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
				// Assuming Sticker, createSticker, StickerTypes are imported from 'wa-sticker-formatter'
				// Assuming axios is imported
				const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter');
				const axios = require("axios");

				if (!text) return m.reply("✨ No emojis provided? Please specify two emojis separated by '+'. 💖");

				const emojis = text.split('+');

				if (emojis.length !== 2) {
					m.reply("😉 Specify the emojis and separate them with '+' for a perfect mix! ✨");
					return;
				}

				const emoji1 = emojis[0].trim();
				const emoji2 = emojis[1].trim();

				try {
					const response = await axios.get(`https://levanter.onrender.com/emix?q=${emoji1}${emoji2}`);

					if (response.data.status === true) {
						let stickerMess = new Sticker(response.data.result, {
							pack: botname, // Assuming botname is defined
							type: StickerTypes.CROPPED,
							categories: ["🤩", "🎉"],
							id: "12345",
							quality: 70,
							background: "transparent",
						});
						const stickerBuffer2 = await stickerMess.toBuffer();
						client.sendMessage(m.chat, { sticker: stickerBuffer2 }, { quoted: m });

					} else {
						m.reply("😔 Unable to create emoji mix. The magic didn't quite work this time. ✨");
					}
				} catch (error) {
					m.reply("💖 An error occurred while creating the emoji mix. Let's try that again! " + error );
				}
			}
			break;

//========================================================================================================================//		      
          case "lyrics": {
				// Assuming fetch and other dependencies are available
				const fetch = require('node-fetch');

				if (!text) return m.reply("🎶 Provide a song name, darling! I need something to sing about. ✨");

				const apiUrl = `https://api.dreaded.site/api/lyrics?title=${encodeURIComponent(text)}`;

				try {
					const data = await fetchJson(apiUrl); // Assuming fetchJson is a helper function

					if (!data.success || !data.result || !data.result.lyrics) {
						return m.reply(`😉 Sorry, I couldn't find any lyrics for "${text}". Perhaps the song is too obscure? 🧐`);
					}

					const { title, artist, link, thumb, lyrics } = data.result;

					const imageUrl = thumb || "https://files.catbox.moe/duv8ac.jpg"; // Default thumbnail if none provided

					const imageBuffer = await fetch(imageUrl)
						.then(res => res.buffer())
						.catch(err => {
							console.error('Error fetching image:', err); // Log error for debugging
							return null; // Return null if image fetch fails
						});

					if (!imageBuffer) {
						return m.reply("😥 An error occurred while fetching the image. I can't set the mood without it! ✨");
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
					console.error(error); // Log the error for debugging
					m.reply(`🥺 An error occurred while fetching the lyrics for "${text}". My apologies! ✨`);
				}
			}
			break;

//========================================================================================================================//		      
        case "toimg": case "photo": { 
				// Assuming 'quoted' is the message being replied to, 'mime' is its mimetype
				if (!quoted) throw 'Tag a static video or sticker with the command, my dear!'; 
				if (!/webp/.test(mime)) throw `Tag a sticker with ${prefix + command}, please!`; 
				
				// Assuming client, downloadAndSaveMediaMessage, getRandom, exec, fs are available
				let media = await client.downloadAndSaveMediaMessage(quoted); // Download the sticker
				let mokaya = await getRandom('.png'); // Assuming getRandom generates a unique filename
				exec(`ffmpeg -i ${media} ${mokaya}`, (err) => { 
					fs.unlinkSync(media); // Clean up original media file
					if (err) throw err; // Throw error if ffmpeg fails
					let buffer = fs.readFileSync(mokaya); 
					client.sendMessage(m.chat, { image: buffer, caption: `✨ Converted by Raven-Bot. Quite the transformation, wouldn't you say? 💖`}, { quoted: m }); // Sassy caption
					fs.unlinkSync(mokaya); // Clean up converted file
				}); 
			} 
			break;

//========================================================================================================================//		      
   case "movie": 
			// Assuming axios is imported and 'reply' is a function to send messages
			if (!text) return reply(`🧐 Provide a series or movie name, darling. I need something to look up! ✨`);  
			let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`);  
			let imdbt = "";  
			console.log(fids.data); // Log for debugging
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
				if (!m.isGroup) throw group; // Assuming 'group' is a predefined error message
				if (!isBotAdmin) throw botAdmin; // Assuming 'botAdmin' is a predefined error message
				let response = await client.groupInviteCode(m.chat); 
				client.sendText(m.chat, `🎟️ Here's the golden ticket to our fabulous group! ✨\nhttps://chat.whatsapp.com/${response}\n\nGroup link for ${groupMetadata.subject}`, m, { detectLink: true }); // Sassy confirmation
			} 
			break;
       
//========================================================================================================================//
          case 'botpp': { 
				// Assuming Owner, NotOwner, quoted, mime, botNumber, reply are defined
				if (!Owner) throw NotOwner; 
				if (!quoted) throw `🖼️ Tag an image you want to be the bot's profile picture with ${prefix + command}, darling! ✨`; 
				if (!/image/.test(mime)) throw `🖼️ Tag an image you want to be the bot's profile picture with ${prefix + command}, please! ✨`; 
				if (/webp/.test(mime)) throw `🖼️ Tag an image you want to be the bot's profile picture with ${prefix + command}, darling! ✨`; 
				
				let media = await client.downloadAndSaveMediaMessage(quoted);
				await client.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media)); // Update profile pic and clean up temp file
				reply(`✅ Bot's profile picture has been successfully updated! Looking quite fetching, if I do say so myself. 😉💖`); // Sassy confirmation
			}
			break;

//========================================================================================================================//		      
          case 'broadcast': { 
				// Assuming Owner, NotOwner, text, reply, menulink, pushname are defined
				if (!Owner) throw NotOwner; 
				if (!text) { 
					reply("📣 Provide a message to broadcast, my dear! Don't be shy. ✨"); 
					return; 
				} 
				let getGroups = await client.groupFetchAllParticipating(); 
				let groups = Object.entries(getGroups).map(entry => entry[1]); 
				let res = groups.map(v => v.id); 
				reply(`⏳ Broadcasting to ${res.length} fabulous groups! Sit tight, it'll take just a moment. ✨`); 
				for (let i of res) { 
					let txt = `𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧 𝗕𝗥𝗢𝗔𝗗𝗖𝗔𝗦𝗧\n\n🀄 Message: ${text}\n\nFrom the desk of: ${pushname}`; 
					await client.sendMessage(i, { 
						image: { 
							url: menulink // Assuming menulink is a valid URL for an image
						}, 
						caption: `${txt}` 
					}); 
				} 
				reply(`✨ Broadcasted to ${res.length} Groups. Hope they enjoyed the message! 💖`); 
			} 
			break;

//========================================================================================================================//		      
 case "gemini": {
				// Assuming Gemini is imported and m.reply is available
				try {
					if (!text) return m.reply("🧠 This is Raven, your AI assistant powered by Gemini APIs. Please provide your query! ✨");
			
					// Dynamically import Gemini
					const { default: Gemini } = await import('gemini-ai');
			
					const gemini = new Gemini("AIzaSyDJUtskTG-MvQdlT4tNE319zBqLMFei8nQ"); // Replace with your actual API key or manage it securely
					const chat = gemini.createChat();
			
					const res = await chat.ask(text);
			
					await m.reply(res);
				} catch (e) {
					m.reply("🤖 I am unable to generate responses at the moment. There might be a glitch in the matrix. " + e);
				}
			 }
			 break;

//========================================================================================================================//		      
        case "setvar": 
				// Assuming Owner, NotOwner, text, reply, Heroku, appname, herokuapi are defined
				if (!Owner) throw NotOwner;  
				if (!text || !text.split('=')[1]) return reply('🧐 Incorrect Usage:\nProvide the key and value correctly, darling.\nExample: `setvar AUTOVIEW_STATUS=TRUE` ✨');  
				
				const herok = new Heroku({  
					token: herokuapi,  
				});  
				let baseURI = "/apps/" + appname;  
				await herok.patch(baseURI + "/config-vars", {  
					body: {  
						[text.split('=')[0]]: text.split('=')[1],  
					},  
				});  
				await reply(`✅ The variable ${text.split('=')[0]} = ${text.split('=')[1]} has been set Successfully.\nWait about 20s for the changes to take effect! 💖`);  
  
				break;
		      
//========================================================================================================================//	
 case "dlt": case "dil": { 
				// Assuming m.quoted, chat, fromMe, id, isBaileys, client.sendMessage are available
				if (!m.quoted) throw `💬 No message quoted for deletion, my dear!`; 
				let { chat, fromMe, id, isBaileys } = m.quoted; 
				if (isBaileys) throw `I cannot delete. Quoted message is my message or another bot message.`; 
				client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } }); 
			} 
			break;
 
//========================================================================================================================//
case "block": { 
				// Assuming Owner, NotOwner, m.quoted, m.mentionedJid, text, client.decodeJid, client.user.id, client.updateBlockStatus, m.reply are available
				if (!Owner) throw NotOwner; 
				if (!m.quoted) throw `🚫 Tag someone to block, darling!`;  
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net';
				if (users == "254114660061@s.whatsapp.net") return m.reply("😡 I cannot block my Owner! That's just not allowed. ✨");
				if (users  == client.decodeJid(client.user.id)) throw '😜 I cannot block myself, silly! ✨'; 
				await client.updateBlockStatus(users, 'block'); 
				m.reply (`👍 Blocked successfully! They won't be bothering you anymore. 😉`); 
			} 
			break; 

//========================================================================================================================//		      
 case "unblock": { 
				// Assuming Owner, NotOwner, m.quoted, m.mentionedJid, text, client.updateBlockStatus, m.reply are available
				if (!Owner) throw NotOwner; 
				if (!m.quoted) throw `👋 Tag someone to unblock, my dear!`; 
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'; 
				await client.updateBlockStatus(users, 'unblock'); 
				m.reply (`✅ Unblocked successfully! Welcome back. 💖`); 
			} 
			break;

//========================================================================================================================//		      
          case 'join': { 
				// Assuming Owner, NotOwner, text, reply, client.groupAcceptInvite, jsonformat are available
                 if (!Owner) throw NotOwner;
                 if (!text) return reply("🔗 Provide a valid group link, darling! I can't join without it. 😉");
                 let result = text.split('https://chat.whatsapp.com/')[1]; // Extract the invite code
                 await client.groupAcceptInvite(result).then((res) =>  reply(jsonformat(res))).catch((err) => reply(`🧐 That group link seems to have a problem, or perhaps it's expired. Let's try another one! ✨`)); 
  
             }  
               break;

//========================================================================================================================//		      
 case "enc": case "encrypte": {
				// Assuming Obf is imported from 'javascript-obfuscator' and m.quoted, m.reply are available
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
					m.reply("✨ Quote/Tag a valid JavaScript code to encrypt, my dear! I need something to work with. 💖");
				}
			}
			break;

//========================================================================================================================//		      

//========================================================================================================================//		      
	      case 'gcprofile': {
				// Assuming client, m.isGroup, m.reply, m.chat, m.isGroup, client.groupMetadata, convertTimestamp, client.profilePictureUrl are available
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

				if (!m.isGroup) return m.reply("😉 This command is meant for groups, darling! Please use it within a group chat. ✨");

				let info = await client.groupMetadata(m.chat);
				let ts = await convertTimestamp(info.creation); // Convert creation timestamp

				try {
					pp = await client.profilePictureUrl(chat, 'image'); // Get profile picture URL
				} catch {
					pp = 'https://files.catbox.moe/duv8ac.jpg'; // Default placeholder if no profile pic
				}

				await client.sendMessage(m.chat, { 
					image: { url: pp }, 
					caption: `_Name_ : *${info.subject}*\n\n_ID_ : *${info.id}*\n\n_Group owner_ : ${'@'+info.owner.split('@')[0]} || 'No Creator'\n\n_Group created_ : *${ts.day}, ${ts.date} ${ts.month} ${ts.year}, ${ts.time}*\n\n_Participants_ : *${info.size}*\n_Members_ : *${info.participants.filter((p) => p.admin == null).length}*\n\n_Admins_ : *${Number(info.participants.length - info.participants.filter((p) => p.admin == null).length)}*\n\n_Who can send message_ : *${info.announce == true ? 'Admins' : 'Everyone'}*\n\n_Who can edit group info_ : *${info.restrict == true ? 'Admins' : 'Everyone'}*\n\n_Who can add participants_ : *${info.memberAddMode == true ? 'Everyone' : 'Admins'}*`
				}, {quoted: m });
			}
			break;

//========================================================================================================================//		      
   case 'tovideo': case 'mp4': case 'tovid': {
				// Assuming quoted, mime, reply, client.downloadAndSaveMediaMessage, webp2mp4File, fs.unlinkSync are available
				if (!quoted) return reply('💖 Reply to a sticker with the command, my dear!'); 
				if (!/webp/.test(mime)) return reply(`✨ Reply to a sticker with the caption *${prefix + command}*, please! 😉`); 
				
				let media = await client.downloadAndSaveMediaMessage(quoted); // Download the sticker
				let webpToMp4 = await webp2mp4File(media); // Convert webp to mp4
				await client.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: '✨ Converted from sticker to video! A little magic for you. 💖' } }, { quoted: m }); // Sassy confirmation
				await fs.unlinkSync(media); // Clean up the downloaded sticker file
			}
			break;
//========================================================================================================================//
//========================================================================================================================//        
        default: {
          if (cmd && budy.toLowerCase() != undefined) { // Check if command exists and message is not empty
            if (m.chat.endsWith("broadcast")) return; // Ignore if it's a broadcast chat
            if (m.isBaileys) return; // Ignore if message is from Baileys itself
            if (!budy.toLowerCase()) return; // Ignore if message is empty after trimming
            
            // Log errors for unknown commands (optional, for debugging)
            if (argsLog || (cmd && !m.isGroup)) {
              console.log(chalk.black(chalk.bgRed("[ ERROR ]")), color("command", "turquoise"), color(`${prefix}${command}`, "turquoise"), color("Raven", "turquoise"));
            } else if (argsLog || (cmd && m.isGroup)) {
              console.log(chalk.black(chalk.bgRed("[ ERROR ]")), color("command", "turquoise"), color(`${prefix}${command}`, "turquoise"), color("Raven", "turquoise"));
            }
          }
        }
      }
    }
  } catch (err) {
    // Generic error handler for any uncaught exceptions
    m.reply(`💖 An unexpected error occurred, my dear: ${util.format(err)}. Let's try that again when things are smoother. ✨`); // Use util.format for better error logging
  }
};

// File watcher for hot-reloading (if applicable in the environment)
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});
