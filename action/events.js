// Import necessary modules
const botname = require('../set'); // Assuming 'set.js' exports the bot's name or configuration
const fetchSettings = require('../Database/fetchSettings'); // Assuming this fetches your bot's settings, like welcome/goodbye status

/**
 * Handles group events such as members joining or leaving.
 * It sends stylish and sassy welcome/goodbye messages with profile pictures.
 *
 * @param {object} client - The WhatsApp client instance.
 * @param {object} Nick - The event object containing details about the participant action.
 *   - Nick.id: The group ID.
 *   - Nick.action: The action performed ('add' or 'remove').
 *   - Nick.participants: An array of participant JIDs involved in the action.
 */
const Events = async (client, Nick) => {
    try {
        // Fetch settings to determine if welcome/goodbye messages should be sent.
        const welcomegoodbye = await fetchSettings();

        // If welcome/goodbye messages are turned off, exit the function early.
        if (welcomegoodbye !== 'on') {
            return;
        }

        // Get group metadata and participant count.
        let metadata = await client.groupMetadata(Nick.id);
        let participants = Nick.participants;
        // let desc = metadata.desc || "No Description"; // Description is not used in current messages but kept for context
        // let groupMembersCount = metadata.participants.length; // Member count not used in current messages

        // Iterate through each participant involved in the event.
        for (let num of participants) {
            let dpuser; // Variable to store the user's profile picture URL.

            try {
                // Attempt to get the user's profile picture.
                dpuser = await client.profilePictureUrl(num, "image");
            } catch (error) {
                // If fetching the picture fails, use a default placeholder image.
                console.log(`Failed to fetch profile picture for ${num}: ${error.message}`);
                dpuser = "https://files.catbox.moe/xmlidu.jpg"; // Default placeholder image URL
            }

            // Handle 'add' action (member joining).
            if (Nick.action === "add") {
                let userName = num; // Participant's JID (e.g., '1234567890@s.whatsapp.net')

                // Craft a stylish, sassy, and welcoming message.
                const welcomeMessage = `✨ A radiant welcome to you, darling, as you step into the enchanting realm of *${metadata.subject}*! 👑\n\nWe're absolutely delighted to have you join our fabulous circle. Do take a moment to peek at the group description and rules – it's all part of the magic! 😉💖\n\n~ ${botname} 2025`;

                // Send the welcome message with the user's profile picture.
                await client.sendMessage(Nick.id, {
                    image: { url: dpuser }, // User's profile picture
                    caption: welcomeMessage, // The sassy welcome text
                    mentions: [num], // Mention the user in the message
                });

            }
            // Handle 'remove' action (member leaving).
            else if (Nick.action === "remove") {
                let userName2 = num; // Participant's JID

                // Craft a sassy and dramatic goodbye message.
                const goodbyeMessage = `Oh, *farewell*, my dear! 👋💨 It seems your journey with us in *${metadata.subject}* has reached its conclusion. May your future endeavors be as swift and memorable as your departure! We'll miss your presence, but life, as they say, must go on! 😢👑`;

                // Send the goodbye message with the user's profile picture.
                await client.sendMessage(Nick.id, {
                    image: { url: dpuser }, // User's profile picture
                    caption: goodbyeMessage, // The sassy goodbye text
                    mentions: [num], // Mention the user in the message
                });
            }
        }
    } catch (err) {
        // Log any errors that occur during event processing.
        console.error(`Error in Events handler: ${err.message}`);
        // Optionally, you could send an error message to a specific admin or log channel.
    }
};

// Export the Events handler function.
module.exports = Events;
