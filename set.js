
// if you're using pannel carefully edit this part.

const sessionName = 'session';
const session = process.env.SESSION || '';
const appname = process.env.APP_NAME || '';
const herokuapi = process.env.HEROKU_API;
const botname = process.env.BOTNAME || 'ʄʀօֆᴛ-ɮʏᴛɛ-𐌀i';
const author = process.env.STICKER_AUTHOR || 'ʄʀօֆᴛ-𝐁ʏᴛɛ-𐌀i';
const packname = process.env.STICKER_PACKNAME || 'ʄʀօֆᴛ-ɮʏᴛɛ-𐌀i';
const dev = process.env.DEV || '254756360306';
const owner = dev.split(",");
const menulink = process.env.MENU_LINK || 'https://files.catbox.moe/6g5aq0.jpg';
const menu = process.env.MENU_TYPE || 'VIDEO';
const bad = process.env.BAD_WORD || 'fuck';
const admin = process.env.ADMIN_MSG || 'Ꮳօოო𐌀ռɖֆ ʀɛֆɛʀʋɛɖ ʄօʀ 𐌀ɖოɨռֆ օռʟʏ!';
const group = process.env.GROUP_ONLY_MSG || 'Ꮳօოო𐌀ռɖֆ ʀɛֆɛʀʋɛɖ ʄօʀ ɢʀօʊքֆ օռʟʏ!';
const botAdmin = process.env.BOT_ADMIN_MSG || 'ɨ ռɛɛɖ 𐌀ɖʍɨռ քʀɨʋɨʟɛɢɛֆ 𐌕օ ɛxɛƈʊ𐌕ɛ ƈօოო𐌀ռɖֆ!';
const NotOwner = process.env.NOT_OWNER_MSG || 'Ꮳօოო𐌀ռɖֆ ʀɛֆɛʀʋɛɖ ʄօʀ ₮ཏɛ օཡռɛʀ!';
const mycode = process.env.CODE || '254';
const port = process.env.PORT || 8080;
const databaseUrl = process.env.DATABASE_URL || '';

module.exports = {
  session,
  sessionName,
  author,
  packname,
  dev,
  owner,
  bad,
  group,
  NotOwner,
  botname,
  botAdmin, 
  menu,
  menulink,
  admin,
  mycode,
  herokuapi,
  port,
  appname,
  databaseUrl
};
