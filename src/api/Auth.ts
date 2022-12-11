import axios from 'axios';

export default async function (auth_str: string) {
  try {
    return await axios.post(
      `https://api.bot-t.com/v1/module/bot/check-hash?${auth_str}`,
      {
        bot_id: 12845,
      }
    );
  } catch (e) {}
}
