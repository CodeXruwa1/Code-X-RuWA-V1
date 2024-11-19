const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let aliveImg = `https://github.com/CodeXRuWA/Code-X-RuWA-V1-Alive-img/blob/main/Code-X-RuWA-V1%20Alive%20Logo.jpg?raw=true`

let aliveMsg = `😈 𝐇𝐞𝐥𝐥𝐨, 𝐈 𝐀𝐦 𝘾𝙤𝙙𝙚-𝙓-𝙍𝙪𝙬𝙖-𝙑1         ━╬٨﹏ـﮩﮩ`ᵐᵈ ʷʰᵃᵗˢᵃᵖᵖ ᵇᵒᵗ´﹏٨ـﮩﮩـ╬━ 

☣️ 𝐈 𝐀𝐦 𝐀𝐥𝐢𝐯𝐞 𝐍𝐨𝐰!

💠 Oᴡɴᴇʀ - 𝗜𝘀𝗵𝗮𝗿𝗮 𝗥𝘂𝘄𝗮𝗻 

💠 Oᴡɴᴇʀ W/A - +94725337377

💠 Gɪᴛʜᴜʙ Rᴇᴘᴏ - 𝒄𝒐𝒎𝒊𝒏𝒈 𝒔𝒐𝒐𝒏… 

💠 Mᴀɪɴ Bᴏᴛ W/A Gʀᴏᴜᴘ - https://chat.whatsapp.com/CViytr0TGpM4gLedmxnFi5

█▃▃▃▃▃▃▃▃        ▃▃▃▃▃▃▃▃█`
    
return await conn.sendMessage(from,{image: {url: aliveImg },caption: aliveMsg },{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
