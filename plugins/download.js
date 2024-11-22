const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')

//====your bot name=======
let cap = '> ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ Code-X-RuWA-V1'
let fb = '*_Code-X-RuWA-V1 FACEBOOK DOWNLOADER 📥_*\n\nYour facebook video is downloading...\n\n> Code-X-RuWA-V1'
let tt = '*_Code-X-RuWA-V1 TIKTOK DOWNLOADER 📥_*\n\nYour tiktok video is downloading...\n\n> Code-X-RuWA-V1'

// <========FETCH API URL========>
let baseUrl;
(async () => {
    let baseUrlGet = await fetchJson("https://raw.githubusercontent.com/prabathLK/PUBLIC-URL-HOST-DB/main/public/url.json")
    baseUrl = baseUrlGet.api
})();

//fb downloader
cmd({
    pattern: "fb",
    alias: ["facebook"],
    desc: "download fb videos",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q && !q.startsWith("https://")) return reply("*_Please give me a facebook url._*")
        //fetch data from api  
        let data = await fetchJson(`${baseUrl}/api/fdown?url=${q}`)
        await conn.sendMessage(from,{image:{url:"https://github.com/Sadarulk/QueenMatheeDB/blob/main/botlogos/facebook.jpg?raw=true"},caption:fb},{quoted:mek})
        //send video (hd,sd)
        await conn.sendMessage(from,{video: {url:data.data.hd},mimetype:"video/mp4",caption: `*HD QUALITY*\n\n${cap}` },{quoted: mek})
        await conn.sendMessage(from,{video: {url:data.data.sd},mimetype:"video/mp4",caption: `*SD QUALITY*\n\n${cap}` },{quoted: mek})  
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})

//tiktok dl
cmd({
    pattern: "tt",
    alias: ["tiktok"],
    desc: "download tt videos",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q && !q.startsWith("https://")) return reply("*_Please give me a tiktok url._*")
        //fetch data from api  
        let data = await fetchJson(`${baseUrl}/api/tiktokdl?url=${q}`)
        await conn.sendMessage(from,{image:{url:"https://github.com/Sadarulk/QueenMatheeDB/blob/main/botlogos/tiktok.jpg?raw=true"},caption:tt},{quoted:mek})
        await conn.sendMessage(from, { video: { url: data.data.no_wm }, mimetype: "video/mp4", caption: `*without WaterMark*\n\n${cap}` }, { quoted: mek })
        await conn.sendMessage(from, { video: { url: data.data.wm }, mimetype: "video/mp4", caption: `*with WaterMark*\n\n${cap}` }, { quoted: mek }) 
        

} catch (e) {
console.log(e);
reply(`${e}`);
}
})
