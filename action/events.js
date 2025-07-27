const botname = require('../set');
const fetchSettings = require('../Database/fetchSettings');
const moment = require('moment-timezone');

const whatsappChannelId = '120363369453603973@newsletter';
const whatsappChannelLink = 'https://whatsapp.com/channel/0029VasHgfG4tRrwjAUyTs10';

const welcomeMessages = [
    "🎉 Welcome aboard, @{user}! 🛸\nHope you brought memes 📸 and good vibes 🎧!",
    "👋 Holla @{user}!\nYou've just entered the legend zone a.k.a *{group}*! 🦾",
    "⚡️ Boom! @{user} just teleported into *{group}*!\nFasten your seatbelt! 🛫",
    "💫 Welcome @{user} to *{group}*.\nLet’s make memories! 💭",
    "🎈 A warm welcome to @{user}!\nEnjoy your stay in *{group}*! 🌍"
];

const goodbyeMessages = [
    "💨 @{user} has vanished from *{group}*... Just like that.",
    "🚪 @{user} left the chat.\nWe’ll keep your seat warm. 🪑",
    "😢 @{user} ran out of bundles.\nPray for their return. 🙏",
    "👻 @{user} said goodbye to us...\nFly high, digital soul! 🕊️",
    "🕳️ @{user} disappeared like a magician... 🎩✨"
];

const welcomeQuotes = [
    "🌈 “Welcome to the madness — snacks and memes are mandatory!” 😜",
    "🧠 “You’ve officially joined the smartest (and sassiest) group in town!” 😎",
    "🎊 “Brace yourself @{user}, greatness and chaos await you!” 🧨",
    "👑 “You didn’t choose the group life — the group life chose you.” 💥",
    "🚀 “Welcome aboard the vibe shuttle! Buckle up, laughs ahead!” 🌠",
    "🎩 “May your stay be meme-tastic and drama-free!” 🍿",
    "📱 “New phone, who dis? Oh wait, it's @{user} joining the squad!” 🔥",
    "💌 “Welcome to the group! Now you’re part of the daily notifications club.” 🔔",
    "🦄 “You're not just a member — you're *the* main character now!” 🎬",
    "🍕 “Welcome! Pizza in the front, chaos in the back.” 🤪"
];

const goodbyeQuotes = [
    "👻 “@{user} has ghosted us... again. Typical.” 🧂",
    "💀 “One less notification. @{user} just rage-quit the group!” 🔕",
    "🚽 “@{user} left mid-conversation... probably nature called.” 🧻",
    "📡 “@{user} disconnected from the Matrix. Send snacks and signal.” 📶",
    "🐸 “So long, @{user}. May your bundles last longer on the other side.” 💸",
    "📉 “Group vibe levels dropped by 0.5% — @{user} has left the building.” 🏃",
    "📦 “@{user} has packed their memes and vanished like rent money.” 🧳",
    "🛌 “Left the group to finally sleep in peace. We respect that energy.” 😴",
    "🪄 “Poof! @{user} turned into a ‘left the group’ message. Magic!” ✨",
    "🧠 “@{user} escaped our group IQ drop rate. Farewell, legend!” 🧬"
];

const Events = async (client, Nick) => {
    try {
        const welcomegoodbye = await fetchSettings();
        if (welcomegoodbye !== 'on') return;

        const metadata = await client.groupMetadata(Nick.id);
        const participants = Nick.participants;
        const groupName = metadata.subject;
        const groupDesc = metadata.desc || "No Description";
        const groupMembersCount = metadata.participants.length;

        for (const num of participants) {
            let dpuser;
            try {
                dpuser = await client.profilePictureUrl(num, 'image');
                if (!dpuser) throw new Error("No profile pic");
            } catch {
                dpuser = "https://files.catbox.moe/3l3qgq.jpg";
            }

            const userTag = num.split('@')[0];
            const currentTime = moment().tz("Africa/Nairobi").format("dddd, MMMM Do YYYY | hh:mm A");

            let message = "";

            if (Nick.action === "add") {
                const welcomeMsg = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
                const quote = welcomeQuotes[Math.floor(Math.random() * welcomeQuotes.length)];

                message = `${welcomeMsg.replace('{user}', userTag).replace('{group}', groupName)}\n\n📌 *Group Description:* ${groupDesc}\n📅 *Joined on:* ${currentTime}\n💬 *Members:* ${groupMembersCount}\n\n💡 *Quote:* _${quote}_\n\n— ${botname} 🤖`;

                await client.sendMessage(Nick.id, {
                    image: { url: dpuser },
                    caption: message,
                    mentions: [num],
                });

            } else if (Nick.action === "remove") {
                const goodbyeMsg = goodbyeMessages[Math.floor(Math.random() * goodbyeMessages.length)];
                const quote = goodbyeQuotes[Math.floor(Math.random() * goodbyeQuotes.length)];

                message = `${goodbyeMsg.replace('{user}', userTag).replace('{group}', groupName)}\n\n📅 *Left on:* ${currentTime}\n💬 *Remaining Members:* ${groupMembersCount - 1}\n\n💡 *Quote:* _${quote}_\n\n— ${botname} 🤖`;

                await client.sendMessage(Nick.id, {
                    image: { url: dpuser },
                    caption: message,
                    mentions: [num],
                });
            }

            // ✅ Log to bot owner's inbox
            await client.sendMessage(client.user.id, {
                image: { url: 'https://files.catbox.moe/3l3qgq.jpg' },
                caption: message,
                contextInfo: {
                    isForwarded: true,
                    forwardingScore: 999,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: whatsappChannelId,
                        newsletterName: "ʄʀօֆᴛ-ɮʏᴛɛ-𐌀i",
                        serverMessageId: -1,
                    },
                    externalAdReply: {
                        title: "Frost-Byte Bot",
                        body: "Powered By Graham-Nest",
                        thumbnailUrl: 'https://files.catbox.moe/wpenxk.jpg',
                        sourceUrl: whatsappChannelLink,
                        mediaType: 1,
                        renderLargerThumbnail: false,
                    },
                }
            });
        }
    } catch (err) {
        console.error("❌ Event Error:", err);
    }
};

module.exports = Events;