const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "3iwXSaQD#k7A0I0JiXDZPlhTQio3bYFhgWxeaL4zcr-xcaZZkryU",
ALIVE IMG: process.env.ALIVE_IMG || "https://github.com/CodeXRuWA/Code-X-RuWA-V1-Alive-img/blob/main/Code-X-RuWA-V1%20Alive%20Logo.jpg",
ALIVE MSG: process.env.ALIVE_MSG || "Hello, I am Code-X-RuWA-V1 I am Alive Now!",
};
