System({
    pattern: "antidelete",
    fromMe: true,
    type: "manage",
    desc: "Manage anti-delete settings",
}, async (message, match) => {
    if(!match) return await message.reply("*Example:*\n\n_*antidelete on/off*_\n_*antidelete jid/chat/pm*_\n");
    const { antidelete } = await getData(message.user.id);
    if (match === "off") {
         const jid = antidelete && antidelete.message ? antidelete.message : "chat";
        await setData(message.user.id, jid, "false", "antidelete");
        await message.reply("_*antidelete disabled*_");
    } else if (match === "on") {
        const jid = antidelete && antidelete.message ? antidelete.message : "chat";
        await setData(message.user.id, jid, "true", "antidelete");
        await message.reply("_*antidelete enabled*_");
    } else {
        const [jid] = await parsedJid(match);
        if (!jid && match !== "chat" && match !== "pm") return await message.reply("*Example:*\n\n_*antidelete on/off*_\n_*antidelete jid/chat/pm*_");
        const status = antidelete?.status || "false";
        await setData(message.user.id, jid || match, status, "antidelete");
        await message.reply(`_*antidelete set to ${jid || match}*_`);
    }
});
