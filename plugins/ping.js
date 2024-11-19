const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
    pattern: "ping",
    desc: "Check bot ping.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

    const startTime = Date.now()
  
        const response = await conn.sendMessage(from, { text: '*_Pinging CodeXRuWA wa bot..._*' }, {quoted : mek})
  
        const endTime = Date.now()
        const ping = endTime - startTime
    
        await conn.sendMessage(from, { text: `*CodeXRuWA Speed Is :* _${ping} ms_`, edit: response.key, })

    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})
