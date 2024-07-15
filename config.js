const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "my_contact";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_16_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDY3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODIsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDQ2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgODQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjAxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxODMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDExLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODAsXG4gICAgICAgIDY2LFxuICAgICAgICA5MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDQsXG4gICAgICAgIDAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDksXG4gICAgICAgIDkwLFxuICAgICAgICA1NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjM2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTAwLFxuICAgICAgICA3NSxcbiAgICAgICAgODIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTc2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTIwLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzUsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjUsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzksXG4gICAgICAgIDcsXG4gICAgICAgIDgsXG4gICAgICAgIDc1LFxuICAgICAgICA1NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTksXG4gICAgICAgIDEzMixcbiAgICAgICAgNzAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDExLFxuICAgICAgICA2NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDk0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyOCxcbiAgICAgICAgMjQwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA4LFxuICAgICAgICA3MyxcbiAgICAgICAgMjIzLFxuICAgICAgICA0NCxcbiAgICAgICAgNCxcbiAgICAgICAgODcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDgxLFxuICAgICAgICA4NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg2LFxuICAgICAgICA0MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDU2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicXpHYkQwcmxXOGJEa3RzakFzNkQ0OFpNWVFxNTRpZjVVWC9idU5xRWVHVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiM29uZHBpZ0ZSMG1tZGduaHJ0Uml6UVwiLFxuICBcInBob25lSWRcIjogXCI5YzVjMjJjZC1lMjI3LTRhZjktOTBhZi1lZWRhMTQ0ZjZmM2RcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc1LFxuICAgICAgNzMsXG4gICAgICAyMzQsXG4gICAgICAxNjQsXG4gICAgICAyNDYsXG4gICAgICA4NixcbiAgICAgIDEzMSxcbiAgICAgIDI1NCxcbiAgICAgIDE2NyxcbiAgICAgIDc4LFxuICAgICAgMTcsXG4gICAgICAxMzAsXG4gICAgICAxOTcsXG4gICAgICAyMTIsXG4gICAgICAxMTcsXG4gICAgICAxNDksXG4gICAgICAxOSxcbiAgICAgIDcsXG4gICAgICAxMTMsXG4gICAgICAxOTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTEsXG4gICAgICAyMTcsXG4gICAgICAxMTYsXG4gICAgICAxODEsXG4gICAgICAxOTcsXG4gICAgICAxMzMsXG4gICAgICAxNjQsXG4gICAgICAxNzMsXG4gICAgICA3MyxcbiAgICAgIDEwMCxcbiAgICAgIDE0LFxuICAgICAgMjQwLFxuICAgICAgNTksXG4gICAgICAxODMsXG4gICAgICAxNDcsXG4gICAgICA4NSxcbiAgICAgIDM0LFxuICAgICAgMjI5LFxuICAgICAgOTMsXG4gICAgICA0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyQUQ4V1hOWVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzMjQxMTM5NTAzOjM3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2agfCdmb7wnZmzIPCdmbHwnZm+8J2ZvvCdmoLwnZqD8J2ZuPCdmb3wnZm2XCIsXG4gICAgXCJsaWRcIjogXCIyNjYwMzA2NjAxOTAyNTg6MzdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSWZDdWFzSEVPanQwN1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJWVmxtYWp6QWp1VStmTWxlTjJvc2RGTlJaQzVPM3Q3bjhwOVVMRTJ5U2w4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkM0ajc2RVZtMHNROFdOcjFBemRTeU5Uc3RDa1NkZHRRenFXTktXc3Q2VEt0U2E3eDN2Q2xqNTdPeXlacnBTRzRVdjVHVzY0MXBqUGhqODZHWHlGTUJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm9UNkZzbnpQZFFhcW1SQ2pnMm5XVGZOQ3Z6M0NWMzRBbVQ2NnpPUnJDR2EzZkFaUk5veFJIb3FTUkNEY3lneU9LZXNwT3EwM1BlZnZUU0pDRFRBdURBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzI0MTEzOTUwMzozN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMDM4NTcyXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "MR ROD",
  ownername:process.env.OWNER_NAME|| "MR ROD",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
