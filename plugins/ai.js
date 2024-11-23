const {cmd , commands} = require('../command')
const { fetchJson } = require('../lib/functions')

cmd({
    pattern: "ai",
    desc: "AI chat feature",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let data = await fetchJson(`https://chatgptforprabath-md.vercel.app/api/gptv1?q=${q}`)

reply(`${data.data}\n\n> ᴄᴏᴅᴇXʀᴜᴡᴀ ᴠ1😈`}

catch(e){
console.log(e)
reply(`${e}`)

}
})
