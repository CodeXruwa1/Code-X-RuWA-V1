const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "n252RBYI#vA0w58pwTZbr2Du9baHD6ALX-Ldk79R03OxrD3UyttY",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/CodeXRuWA/Code-X-RuWA-V1-Alive-img/blob/main/Code-X-RuWA-V1%20Alive%20Logo.jpg?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "😈 𝐇𝐞𝐥𝐥𝐨, 𝐈 𝐀𝐦 𝘾𝙤𝙙𝙚-𝙓-𝙍𝙪𝙬𝙖-𝙑1         ━╬٨﹏ـﮩﮩ`ᵐᵈ ʷʰᵃᵗˢᵃᵖᵖ ᵇᵒᵗ´﹏٨ـﮩﮩـ╬━ 

☣️ 𝐈 𝐀𝐦 𝐀𝐥𝐢𝐯𝐞 𝐍𝐨𝐰!

💠 Oᴡɴᴇʀ - 𝗜𝘀𝗵𝗮𝗿𝗮 𝗥𝘂𝘄𝗮𝗻 

💠 Oᴡɴᴇʀ W/A - +94725337377

💠 Gɪᴛʜᴜʙ Rᴇᴘᴏ - 𝒄𝒐𝒎𝒊𝒏𝒈 𝒔𝒐𝒐𝒏… 

💠 Mᴀɪɴ Bᴏᴛ W/A Gʀᴏᴜᴘ - https://chat.whatsapp.com/CViytr0TGpM4gLedmxnFi5

█▃▃▃▃▃▃▃▃        ▃▃▃▃▃▃▃▃█",
};
