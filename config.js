const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=H6BkDK7K#rL9YFv-AZABXBdkU4VMk86g7MyubBdlW8oHcCZ59wnw",
ALIVE_IMG: process.env.ALIVE_IMG || "https://cdn.ironman.my.id/i/g1mmt2.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "😈 𝐇𝐞𝐥𝐥𝐨, 𝐈 𝐀𝐦 𝘾𝙤𝙙𝙚-𝙓-𝙍𝙪𝙬𝙖-𝙑1\n☣️ 𝐈 𝐀𝐦 𝐀𝐥𝐢𝐯𝐞 𝐍𝐨𝐰!\n\n💠 Oᴡɴᴇʀ - 𝗜𝘀𝗵𝗮𝗿𝗮 𝗥𝘂𝘄𝗮𝗻\n\n💠 Oᴡɴᴇʀ W/A - +94725337377\n\n💠 Gɪᴛʜᴜʙ Rᴇᴘᴏ - 𝒄𝒐𝒎𝒊𝒏𝒈 𝒔𝒐𝒐𝒏…\n\n💠 Mᴀɪɴ Bᴏᴛ W/A Gʀᴏᴜᴘ - https://chat.whatsapp.com/CViytr0TGpM4gLedmxnFi5\n\n> Powered By Code X Ruwa V1",
AUTO_REPLY: process.env.AUTO_REPLY || "true",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
};
