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
*😈 Hi* ${pushname}
┌────────────────
│❖ *ᴜᴘᴛɪᴍᴇ :* _${runtime(process.uptime())}_
│❖ *ʀᴀᴍ ᴜꜱɢ :* _${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB_
│              _${Math.round(require('os').totalmem / 1024 / 1024)}MB_
|❖ *ʜᴏꜱᴛ ɴᴀᴍᴇ :* _${os.hostname()}_
│❖ *ᴏᴡɴᴇʀ :* _Code-X-RuWA_
└────────────────
*Code-X-RuWA is Here😈*
┌────────────
😈 *📚ALL COMMANDS*└────────────
┌────────────
😈 *📥DOWNLOAD COMMANDS*
│
│ ✑ _.song_
│ ✑ _.play_
│ ✑ _.yta_
│ ✑ _.video_
│ ✑ _.fb_
│ ✑ _.facebook_
│ ✑ _.tt_
│ ✑ _.tiktok_
│ ✑ _.ig_
│ ✑ _.apk_
│ ✑ _.mediafire_
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
│ ✑ _.restart_
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
│ ✑ _.clearchats_
│ ✑ _.fullpp_
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
