const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
    pattern: "env",
    desc: "menu",
    category: "owner",
    react: "⚙️",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let desc = `
*😈codeX env* ${pushname}

*𝐂𝐨𝐝𝐞𝐗 ENV⚙️*
┌────────────
😈 *⚙️ALL ENV SETTINGS*└────────────
┌────────────
😈 *💾 ENV CONTROL*
│
│ ✑ _.env ALIVE_IMG
│ ✑ _.env
│ ✑ _.env 
│ ✑ _.env
│ ✑ _.env AUTO_VOICE:true_
│ ✑ _.env AUTO_VOICE:false_
│ ✑ _.env AUTO_REPLY:true_
│ ✑ _.env AUTO_REPLY:false_
│ ✑ _.env AUTO_STICKER:true_
│ ✑ _.env AUTO_STICKER:false_
└────────────

> *𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐂𝐨𝐝𝐞𝐗😈*
`
return await conn.sendMessage(from,{image: {url: `https://cdn.ironman.my.id/i/g1mmt2.jpg`},caption: desc},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
