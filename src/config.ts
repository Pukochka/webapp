declare global {
  interface Window {
    Telegram: any;
  }
}

window.Telegram = window.Telegram || {};

export const config = {
  HOST: 'https://m.bot-t.com',
  INIT_DATA: window.Telegram.WebApp.initData,
};
interface Config {
  HOST: string;
  INIT_DATA: string;
}
