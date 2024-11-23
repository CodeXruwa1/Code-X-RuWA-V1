const {cmd , commands} = require('../command')
const { fetchJson } = require('../lib/functions')

cmd({
    pattern: "ai",
    desc: "ai",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let data = await fetchJson(`https://chatgptforprabath-md.vercel.app/api/gptv1?q=${q}`)
reply(`${data.data}`)
}catch(e){
console.log(e)
reply(`${e}`)
}
})


const {cmd , commands} = require('../command')
const { fetchJson } = require('../lib/functions')

cmd({
    pattern: "openai",
    desc: "openai",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let data = await fetchJson(`https://api.ibeng.tech/api/info/gpt4?q=${q}`)
reply(`${data.data}`)
}catch(e){
console.log(e)
reply(`${e}`)
}
})





import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {

  if (!text) throw `Mau Nanya Apa?`
    let res = await fetch(`https://api.ibeng.tech/api/info/gpt4?text=${text}&apikey=${global.ibeng}`)
    let komcol = await res.json()
   m.reply(komcol.data.data)
}
handler.help = ['openai']
handler.tags = ['stalker']
handler.command = /^(openai|lia)$/i
handler.limit = true
export default handler
