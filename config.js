const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=6zYT3S4D#nHw4oDTjHYz-z3XzszQoD2GCRjZgxuFiDZciRMq7gzM",
MONGODB: process.env.MONGODB || "mongodb://mongo:qXQxdAbpntDdvsSpaIgIeyNVCyRdLZid@autorack.proxy.rlwy.net:22892",
};

