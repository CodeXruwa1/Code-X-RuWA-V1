const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=m2JBSQaI#eoRt-8kU1dnSsT7gabchK8dKQRi2AnHkrtxQHaqwNkU",
ALIVE_IMG: process.env.ALIVE_IMG || "https://cdn.ironman.my.id/i/g1mmt2.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "😈 𝐇𝐞𝐥𝐥𝐨, 𝐈 𝐀𝐦 𝘾𝙤𝙙𝙚-𝙓-𝙍𝙪𝙬𝙖-𝙑1\n☣️ 𝐈 𝐀𝐦 𝐀𝐥𝐢𝐯𝐞 𝐍𝐨𝐰!\n💠 Oᴡɴᴇʀ - 𝗜𝘀𝗵𝗮𝗿𝗮 𝗥𝘂𝘄𝗮𝗻\n💠 Oᴡɴᴇʀ W/A - +94725337377\n💠 Gɪᴛʜᴜʙ Rᴇᴘᴏ - 𝒄𝒐𝒎𝒊𝒏𝒈 𝒔𝒐𝒐𝒏…\n💠 Mᴀɪɴ Bᴏᴛ W/A Gʀᴏᴜᴘ - https://chat.whatsapp.com/CViytr0TGpM4gLedmxnFi5\n> Powered By Code X Ruwa V1",
};
