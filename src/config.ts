declare global {
  interface Window {
    Telegram: any;
  }
}

window.Telegram = window.Telegram || {};

let bot_id = '';
let secret = '';
let init = '';
const test = {};

for (const item of new URLSearchParams(window.location.search)) {
  if (item[0] === 'bot_id') bot_id = item[1];
  if (item[0] === 'secretKey') secret = item[1];
  if (item[0] === '#tgWebAppData') init = item[1];
}

for (const [key, value] of new URLSearchParams(
  window.Telegram.WebApp.initData
)) {
  test[key] = value;
}
const user = JSON.parse(test.user);
test.user = user;

export const config = {
  HOST: 'https://m.bot-t.com',
  INIT_DATA:
    // 'id=1028741753&first_name=Artemi&last_name=Puka&username=melart1&auth_date=1670798383&hash=733bd5e98b1aaafb95cba8c8697979ead69adb43a22ca25a8a55845568af8c34&id=1028741753&first_name=Artemi&last_name=Puka&username=melart1&auth_date=1670802314&hash=e52e106b00ace43fe37fe28096439e201035d67de86b835bcd7cfa877148814c&id=1028741753&first_name=Artemi&last_name=Puka&username=melart1&auth_date=1670804754&hash=9c88ef22397f0de5772e665b90d49ccad5f81e5826e6d5fb2af6006474c27f58',
    // window.Telegram.WebApp.initData.length
    //   ? window.Telegram.WebApp.initData
    //   : init,
    JSON.stringify(test),
  BOT_ID: bot_id,
  SECRET: secret,
};

interface Config {
  HOST: string;
  INIT_DATA: string;
}
