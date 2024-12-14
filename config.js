const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "u7RBmKqY#NtgInP2cmt-0LFtcgTdJo6KEFplqX5QeBLfpG95OdXs", //paste your session_id
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true", 
MODE: process.env.MODE || "public",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_STICKER: process.env.AUTO_STICKER || "true",
AUTO_REPLY: process.env.AUTO_REPLY || "true
",
AUTO_REACT: process.env.AUTO_REACT || "true",
FAKE_RECORDING: process.env.FAKE_RECORDING || "true",    
};
