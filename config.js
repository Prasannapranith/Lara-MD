uconst fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : true
;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "[![Node.js CI](https://github.com/sadiyamin/Lara-MD/actions/workflows/deploy.yml/badge.svg?event=issue_comment)](https://github.com/sadiyamin/Lara-MD/actions/workflows/deploy.yml)", //
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true", 
MODE: process.env.MODE || "public",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
AUTO_REACT: process.env.AUTO_REACT || "true",
FAKE_RECORDING: process.env.FAKE_RECORDING || "true",    
};
