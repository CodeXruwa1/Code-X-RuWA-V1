const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
    pattern: "bugmenu",
    desc: "menu",
    category: "main",
    react: "⚠️️",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let desc = `
*😈welcome dangerous zone⚠️️* ${pushname}

*𝐂𝐨𝐝𝐞𝐗 BUG MENU📲*
┌────────────
😈 *📥ALL BUG COMMANDS*└────────────
┌────────────
😈 *☠️COMMANDS*
│
│ ✑ _.soon_
└────────────

> *𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐂𝐨𝐝𝐞𝐗😈*
`
return await conn.sendMessage(from,{image: {url: `https://cdn.ironman.my.id/i/g1mmt2.jpg`},caption: desc},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})


