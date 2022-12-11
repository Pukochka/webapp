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
  INIT_DATA: window.Telegram.WebApp.initData.length
    ? window.Telegram.WebApp.initData
    : init,
  BOT_ID: bot_id,
  SECRET: secret,
};

interface Config {
  HOST: string;
  INIT_DATA: string;
}
