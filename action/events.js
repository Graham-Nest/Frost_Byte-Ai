const botname = require('../set');
const fetchSettings = require('../Database/fetchSettings');

const Events = async (client, Nick) => {
  try {
    const welcomegoodbye = await fetchSettings();
    let metadata = await client.groupMetadata(Nick.id);
    let participants = Nick.participants;
    let desc = metadata.desc || "No Description";
    let groupMembersCount = metadata.participants.length;

    const now = new Date();

    for (let num of participants) {
      let dpuser;
      try {
        dpuser = await client.profilePictureUrl(num, "image");
      } catch {
        dpuser = "https://files.catbox.moe/jl104w.jpeg"; // default sci-fi avatar
      }

      const usernameTag = `@${num.split("@")[0]}`;

      // ---------------- WELCOME ----------------
      if (Nick.action === "add") {
        const joinTime = now.toLocaleString("en-GB", { timeZone: "UTC" });

        const WelcomeMessage = `
🚀 [INCOMING NODE] 🚀
${usernameTag} has joined the grid.

📡 Group: ${metadata.subject}
👥 Members: ${groupMembersCount}

📝 Description: ${desc || "No Description"}
🕒 Joined: ${joinTime} UTC

☺️ Enjoy your stay in the grid.
- ${botname} I 2025 🌌
`;

        if (welcomegoodbye === 'on') {
          await client.sendMessage(Nick.id, {
            image: { url: dpuser },
            caption: WelcomeMessage,
            mentions: [num],
          });
        }

      // ---------------- GOODBYE ----------------
      } else if (Nick.action === "remove") {
        const leaveTime = now.toLocaleString("en-GB", { timeZone: "UTC" });

        const timeSpent = "Unknown"; 

        const GoodbyeMessage = `
${usernameTag} has exited the grid.

📡 Group: ${metadata.subject}
👥 Members: ${groupMembersCount}

🕒 Left: ${leaveTime} UTC
⏳ Time spent: ${timeSpent}

✌️ Farewell , Dear Hustler
- ${botname} I 2025 ⚙️
`;

        if (welcomegoodbye === 'on') {
          await client.sendMessage(Nick.id, {
            image: { url: dpuser },
            caption: GoodbyeMessage,
            mentions: [num],
          });
        }
      }
    }

  } catch (err) {
    console.log("💥 Event Error:", err);
  }
};

module.exports = Events;