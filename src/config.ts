declare global {
  interface Window {
    Telegram: any;
  }
}

window.Telegram = window.Telegram || {};

export const config = {
  HOST: 'https://m.bot-t.com',
  INIT_DATA:
    'query_id=AAF5WlE9AAAAAHlaUT0j1jLe&user=%7B%22id%22%3A1028741753%2C%22first_name%22%3A%22Artemi%22%2C%22last_name%22%3A%22Puka%22%2C%22username%22%3A%22melart1%22%2C%22language_code%22%3A%22ru%22%7D&auth_date=1670769024&hash=aa47920f7047706248977913829ccb3c670bee1b96884bbe0eef33293c16709b',
};
interface Config {
  HOST: string;
  INIT_DATA: string;
}
