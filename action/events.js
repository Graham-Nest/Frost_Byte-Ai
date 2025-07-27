const botname = require('../set');
const fetchSettings = require('../Database/fetchSettings');

const Events = async (client, Nick) => {
  try {
    const welcomegoodbye = await fetchSettings();
    const metadata = await client.groupMetadata(Nick.id);
    const participants = Nick.participants;
    const desc = metadata.desc || "📌 No bio set. Just vibes and frequency.";
    const groupName = metadata.subject;
    const totalMembers = metadata.participants.length;

    for (let num of participants) {
      let dpuser;
      try {
        dpuser = await client.profilePictureUrl(num, "image");
      } catch {
        dpuser = "https://files.catbox.moe/3l3qgq.jpg";
      }

      const tag = `@${num.split("@")[0]}`;
      const now = new Date();
      const localeTime = now.toLocaleString("en-GB", { timeZone: "Africa/Nairobi" });

      // 🌟 Fancy Modern Welcome Texts
      const welcomeMessages = [
        `
🧬 *[  NEW ENTITY SYNCED ]* 🧬

✨ Welcome ${tag} to *${groupName}*  
👥 Members: *${totalMembers}*  
🕰️ Joined: *${localeTime}*  
⚡ You’ve entered a high-frequency zone of legends & byte-sized chaos.

🔍 *Group Protocol:*  
"${desc}"

🛠 Pro Tips:  
◽ Drop vibes, not viruses  
◽ Stream thoughts, not drama  
◽ Be coded in chill

🤖 Powered by *${botname} v2025*  
🛰 Let’s disrupt the silence.
        `,
        `
🌐 *ACCESS GRANTED* 🌐  
Welcome, ${tag}. You’ve unlocked *${groupName}*.

👥 Total Members: *${totalMembers}*  
🕓 Joined: *${localeTime}*

💾 Group Version: LIVE  
📂 Description File:  
"${desc}"

🧠 Mood: Casual intelligence  
🎭 Role: Creator, not spectator

📡 You’re in. Make it iconic.  
🤖 *${botname} 2025 — whispering in binaries.*
        `,
        `
💡 *ENERGY SPIKE DETECTED* 💡

${tag} just linked into *${groupName}* 🚀  
👥 Group Population: *${totalMembers}*  
🕰️ Arrival Timestamp: *${localeTime}*

🧾 Group Essence:  
"${desc}"

🪩 Style. Signal. Substance.  
Stay bold, speak bright, stay unplugged from basic.

🤖 *${botname} 2025* — digitally enchanted.
        `
      ];

      // 💔 Fancy Modern Goodbye Texts
      const goodbyeMessages = [
        `
🚷 *USER LOGGED OUT* 🚷

${tag} just left *${groupName}* — no mic drop, just pixels fading.  
🕛 Exit Time: *${localeTime}*  
👥 Remaining Members: *${totalMembers - 1}*

📁 Status: Inactive  
📂 Memories: Auto-archived  
🎞 Vibe trail: Still glowing

Farewell, digital dreamer.  
🤖 ${botname} — memory stable, farewell encrypted.
        `,
        `
📡 *DISCONNECTED FROM GRID* 📡

${tag} has exited *${groupName}*.  
⏳ Logged Out At: *${localeTime}*  
🧑‍🚀 Active Agents Remaining: *${totalMembers - 1}*

Cause: Unknown. Energy loss? Enlightenment? We'll never know.

🗂 Legacy stored  
⛓ Connections released  
✨ Offline aura: Eternal

See you across frequencies, traveler.  
🤖 ${botname} — logging emotional echo.
        `,
        `
🚪 *EXIT SEQUENCE INITIATED* 🚪

${tag} has walked out of *${groupName}* with class.  
🕰️ Departure Logged: *${localeTime}*  
👥 Network Strength: *${totalMembers - 1}*

Sometimes silence hits harder than a rant.

🧠 Thoughts remain  
🖤 Impact made  
🧾 Chapter closed

🔚 Until our code syncs again...  
🤖 ${botname} — keeping style in logout.
        `
      ];

      const welcomeText = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)].trim();
      const goodbyeText = goodbyeMessages[Math.floor(Math.random() * goodbyeMessages.length)].trim();

      if (Nick.action === "add" && welcomegoodbye === 'on') {
        await client.sendMessage(Nick.id, {
          image: { url: dpuser },
          caption: welcomeText,
          mentions: [num],
        });
      } else if (Nick.action === "remove" && welcomegoodbye === 'on') {
        await client.sendMessage(Nick.id, {
          image: { url: dpuser },
          caption: goodbyeText,
          mentions: [num],
        });
      }
    }
  } catch (err) {
    console.log("⚠️ Event Handler Error:", err);
  }
};

module.exports = Events;