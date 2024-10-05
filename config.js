const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "5qER2IAb#FYHHGpaZ7ntug7W_jv1js5dvtUCAQWIZrXjziFZUiSA",
ALIVE_IMG: process.env.ALIVE_IMG || "https://8030.us.kg/file/zOm4HoO6YnQR.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "Hello 👋 🇱🇰 *I AM ONLINE NOW ! Queen Chooty Nelumi Md* 🇱🇰",
SUDO_NB: process.env.SUDO_NB || "94757286833",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public"
};

