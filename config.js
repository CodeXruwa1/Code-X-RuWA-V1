const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "27w10SwA#cjp0s8lEhDpOYRV8SjW0R1AnqPDMI0aQVp8LuIl-6cE",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/Sadarulk/QueenMatheeDB/blob/main/botlogos/botlogo.jpg?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "Hello, I am Code-X-RuWA-V1 I am Alive Now!",
};
