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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/cad7038fe82e47f79c609.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233241139503";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "image" // "https://telegra.ph/file/cad7038fe82e47f79c609.jpg" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_58_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA3NixcbiAgICAgICAgMTUsXG4gICAgICAgIDIyLFxuICAgICAgICA5MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDY5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDY1LFxuICAgICAgICA1OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2MixcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDY5LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDksXG4gICAgICAgIDc1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTUwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODcsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDksXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgODAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA5LFxuICAgICAgICA3NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDYwLFxuICAgICAgICAxOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDM0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjA3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTEyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTA5LFxuICAgICAgICA4OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDk1LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDMyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTU2LFxuICAgICAgICA2NSxcbiAgICAgICAgMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxODEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTksXG4gICAgICAgIDUyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQyLFxuICAgICAgICA3NixcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTM3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTA0LFxuICAgICAgICA4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODIsXG4gICAgICAgIDE4LFxuICAgICAgICA5MixcbiAgICAgICAgNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTksXG4gICAgICAgIDkzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgODUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA1MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDUxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDM4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAzMixcbiAgICAgICAgMTk0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODYsXG4gICAgICAgIDU2LFxuICAgICAgICA3MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzksXG4gICAgICAgIDg1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDQwLFxuICAgICAgICAxOSxcbiAgICAgICAgMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzksXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDg1LFxuICAgICAgICA1MixcbiAgICAgICAgNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTIzLFxuICAgICAgICA5OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI0dDNwa3hzeEErTUpaTG9WWGJEN1hLS2VHZys1a2t2RUN1Q1k0Yzd3SmJvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIyOFZQX1dPdlMtbUNFdlA1V3dReHpnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjI5ZGQ1MGMwLWRiNzUtNDQxZi05ZTIyLTY0NWE5NjU1MjIxNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDUsXG4gICAgICAzMyxcbiAgICAgIDEwMCxcbiAgICAgIDkwLFxuICAgICAgNzcsXG4gICAgICAxNixcbiAgICAgIDU4LFxuICAgICAgMjAwLFxuICAgICAgMTgwLFxuICAgICAgMjksXG4gICAgICAxOTgsXG4gICAgICAxODQsXG4gICAgICAxMzMsXG4gICAgICA2LFxuICAgICAgOTYsXG4gICAgICA0NSxcbiAgICAgIDQ1LFxuICAgICAgMzUsXG4gICAgICA2LFxuICAgICAgNjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTExLFxuICAgICAgNDksXG4gICAgICAzMixcbiAgICAgIDI1NSxcbiAgICAgIDE2MCxcbiAgICAgIDIyOSxcbiAgICAgIDQ0LFxuICAgICAgMTEyLFxuICAgICAgMTU3LFxuICAgICAgMjM0LFxuICAgICAgMTczLFxuICAgICAgNSxcbiAgICAgIDQ2LFxuICAgICAgMjksXG4gICAgICA5NCxcbiAgICAgIDEyOSxcbiAgICAgIDEwNixcbiAgICAgIDIyNixcbiAgICAgIDExNSxcbiAgICAgIDEyOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQRkhKWlJKUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzMjQxMTM5NTAzOjU3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2agfCdmb7wnZmzIPCdmbHwnZm+8J2ZvvCdmoLwnZqD8J2ZuPCdmb3wnZm2XCIsXG4gICAgXCJsaWRcIjogXCIyNjYwMzA2NjAxOTAyNTg6NTdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnJDdWFzSEVKL1hxN1VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJWVmxtYWp6QWp1VStmTWxlTjJvc2RGTlJaQzVPM3Q3bjhwOVVMRTJ5U2w4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInRla3NMWVhoYkxsWDVGL2k5MjRWaEplajZxb2p0SEk0bi9FZmYzY2pBUVN4L095d3FYRktzKzNKU0d1NHpZMXkzSCtXRzU4ZXZaaG82M1JVMHBWaENBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlNDaUdNcjVYcU9WUnl4NWRBMldUQ0JmUnpWNzltRUd3NDQ2bmIvelpvcFZkU1dhUWt5WEVpTjZDTzlMMm1pbmg4RGV1cENVRldmUFZYWVFOc3FzOWhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzI0MTEzOTUwMzo1N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNDc3NDc5XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "MR D",
  packname: process.env.PACK_NAME || "MR ROD",
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
  LANG: ( process.env.THEME ||  "MR ROD"  ).toUpperCase(),



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
