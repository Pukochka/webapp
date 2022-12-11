declare global {
  interface Window {
    Telegram: any;
  }
}

window.Telegram = window.Telegram || {};

let bot_id = '';
let secret = '';
let init = '';

for (const item of new URLSearchParams(window.location.search)) {
  if (item[0] === 'bot_id') bot_id = item[1];
  if (item[0] === 'secretKey') secret = item[1];
  if (item[0] === '#tgWebAppData') init = item[1];
}

export const config = {
  HOST: 'https://m.bot-t.com',
  INIT_DATA:
    // 'id=1028741753&first_name=Artemi&last_name=Puka&username=melart1&auth_date=1670798383&hash=733bd5e98b1aaafb95cba8c8697979ead69adb43a22ca25a8a55845568af8c34',
    window.Telegram.WebApp.initData.length
      ? window.Telegram.WebApp.initData
      : init,
  BOT_ID: bot_id,
  SECRET: init,
};

interface Config {
  HOST: string;
  INIT_DATA: string;
}