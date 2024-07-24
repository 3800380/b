//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Earth";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "923072380380";
global.owner = process.env.OWNER_NUMBER || "923072380380";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.waPresence = process.env.WAPRESENCE || "unavailable";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.scan = "https://byte-session.vercel.app/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE02dXV0NHl1amFOTlNPYVM2NE01K0dlOEpyY3hyc0loQkV2RlJhZGZYUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVHJLajFxK1R5OVhGNGY1VGdibFFuSmtJdWNDc3UyUFM2UFJiQ09sVmZpbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlRmFOV05GajJ6dG9FblkrVElCRVVUcm9tUWY5alRZOEQvRS9LNWtwd244PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNTXdCa0xLdGc2RUZMYldVdjBTMnZER2RGNnlQWGYxdEtTQ0xYNXZoQmdFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9MV0s0L3AyZWRrYVJQaHNLVHBnc2YrcTZTTDlwNFc2YnBsU2dnTWpTbUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InAwd1RrRTF5ZTBSYk9aMzFRL3lPODA4NWlESTBvZGNXUDFHL2xvcE50R3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUgwV2lBcHgzNlc2eXU2NnFYOFA3SDUxT2YvRjcvSFVDVG9NVmxiK1JIYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQXg3Z0dKR1R0QnNBOE9CTmpzN284VEVrQzViMjI1b2Q5TzFyamc2L0owST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkV6OWdJZThHUERiZXZpN1dRUkRnSy9VSmkrbWx3cyswT1p0Z3V0bnQvaG16QzZ2SjJqM1h3bmhRTks3Ti9nUC83b2hxb0lGRG9PZUR3MloySDhwekJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTksImFkdlNlY3JldEtleSI6IkVneFJiKzJHNWh5NEgvS2dtdXRaZUFXdVpwUFBIY1RBSkVZL0l4eVBlcnc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMTUyMzgwMzgwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjM4NzVGM0FGOTY2NjVGM0IyRkI2QzFCRDY2Q0RCMzZGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjE4MTU0MDV9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzE1MjM4MDM4MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIxNUUxODI4N0RBNzFBMThCMUZCMDVEQjc4QjVFNUZBRCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIxODE1NDA2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMxNTIzODAzODBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNEU3NDY3NUMzOUE5N0Y5N0VBNDI4OTdCOTRCOUFGNjEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMTgxNTQwOH0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMTUyMzgwMzgwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkI3QUM0NzZBREJDRUNEQTM1QzM3OEU4NzkxQTUwNTlCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjE4MTU0MDh9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImhxTlF0QzBoUnFlMFZXcV9LUERiVWciLCJwaG9uZUlkIjoiOTJiM2VkNDItNjdmYS00NDIwLWE3MDYtNTZlNzhkOTRmNmZkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im52L1ZQREp6d2tBUStwSUVsUzJ2U2xYRW14ND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtc0lSMmJPNUY2OTZwMTBUbkJDRGR4TEg0VUE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiV1c5QlRMMjUiLCJtZSI6eyJpZCI6IjkyMzE1MjM4MDM4MDoxOUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJDXG5cblxuXG5cblxuXG5ZXG5cblxuXG5cblxuXG5CXG5cblxuXG5cblxuRVxuXG5cblxuXG5cblxuXG5SIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPMmd1ZFVDRU4raWc3VUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI5dDlVU0NaeVkyam1vNmJZczF6VktCNytrVVVKLzdtVDBiVm1obnRRTXpVPSIsImFjY291bnRTaWduYXR1cmUiOiJES3MyRUkrTEV4bUdHM2swRklkSjRqakFRV1VoVmdoamNaeWk4Z21aMnptTlMrQitZYUxtNDhUK1B1VjNHek0zNlBFMlcvNStkYWh2d2lNVTVncVpCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiOGlUcGMxOGVjaFdyMEJia3I5d1hQN2lNY1N5M0RicUNzYjd1ZFZ1dGs0Nkh6UkhNS3ZqMnJvRjdLU3dVRk9oTmZqUlplV0IzL3dOdWNmQytBMTA0Q0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMxNTIzODAzODA6MTlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZmJmVkVnbWNtTm81cU9tMkxOYzFTZ2UvcEZGQ2YrNWs5RzFab1o3VURNMSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTgxNTQwNCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFKbFgifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered by TalkDrove*",
  author: process.env.PACK_AUTHER || "TalkDrove",
  packname: process.env.PACK_NAME || "BYTE",
  botname: process.env.BOT_NAME || "BYTE-MD",
  ownername: process.env.OWNER_NAME || "Hamza",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
