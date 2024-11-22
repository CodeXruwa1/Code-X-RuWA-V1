const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
    pattern: "menu",
    desc: "menu",
    category: "main",
    react: "📚",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let desc = `
*😈 Hello* ${pushname}
*Code-X-RuWA MENU📲*
┌────────────
😈 *📚ALL COMMANDS*└────────────
┌────────────
😈 *📥DOWNLOAD COMMANDS*
│
| ✑ _.song_
│ ✑ _.video_
└────────────
┌────────────
😈 *🔎SEARCH COMMANDS*
│
│ ✑ _.yts_
│ ✑ _.img_
│ ✑ _.pinterest_
└────────────
┌────────────
😈 *🎊CONVERTED COMMANDS*
│
│ ✑ _.sticker_
│ ✑ _.tts_
└────────────
┌────────────
😈 *🧧MAIN COMMANDS*
│
│ ✑ _.owner_
│ ✑ _.ping_
│ ✑ _.system_
│ ✑ _.src_
└────────────
┌────────────
😈 *🎯GROUP COMMANDS*
│
│ ✑ _.promote_
│ ✑ _.demote_
│ ✑ _.remove_
│ ✑ _.kick_
│ ✑ _.setwelcome_
│ ✑ _.setgoodbye_
│ ✑ _.getpic_
└────────────
┌────────────
😈 *👤OWNER COMMANDS*
│
│ ✑ _.block_
│ ✑ _.unblock_
│ ✑ _.jid_
│ ✑ _.gjid_
│ ✑ _.restart_
└────────────

> *ᴄʀᴇᴀᴛᴇᴅ ʙʏ CodeXRuWA😈*
`
return await conn.sendMessage(from,{image: {url: `https://cdn.ironman.my.id/i/g1mmt2.jpg`},caption: desc},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
