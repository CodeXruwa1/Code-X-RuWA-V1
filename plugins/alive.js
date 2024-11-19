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

let  aliveImg = "https://github.com/CodeXRuWA/Code-X-RuWA-V1-Alive-img/blob/main/Code-X-RuWA-V1%20Alive%20Logo.jpg?raw=true",

let  aliveMsg = "Hello' i am code-X-RuWA-V1 I am Alive",
    
return await conn.sendMessage(from,{image: {url: aliveImg },caption: aliveMsg },{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
