import axios from 'axios';
import { config } from 'src/config';

export default async function (auth_str: string) {
  try {
    return await axios.post(
      `https://api.bot-t.com/v1/module/bot/check-hash?${auth_str}`,
      {
        bot_id: config.BOT_ID,
      }
    );
  } catch (e) {}
}
