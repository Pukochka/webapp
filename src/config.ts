declare global {
  interface Window {
    Telegram: any;
  }
}

window.Telegram = window.Telegram || {};

export const config = {
  HOST: 'https://m.bot-t.com',
  INIT_DATA:
    'query_id=AAF5WlE9AAAAAHlaUT2Hf26M&user=%7B%22id%22%3A1028741753%2C%22first_name%22%3A%22Artemi%22%2C%22last_name%22%3A%22Puka%22%2C%22username%22%3A%22melart1%22%2C%22language_code%22%3A%22ru%22%7D&auth_date=1670793010&hash=76f4b24976e0bad4b5eb2ae38f5a851153b4e3792a1b8f4eb57b8e299fb899e4',
};
interface Config {
  HOST: string;
  INIT_DATA: string;
}
