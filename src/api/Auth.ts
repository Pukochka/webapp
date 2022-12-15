import axios from 'axios';
import { config } from 'src/config';
import { useAuthStore } from 'stores/Auth/auth';

export default async function userAuth() {
  const error = useAuthStore();
  try {
    return await axios.post(
      'https://api.bot-t.com/v1/module/bot/check-hash-post',
      {
        bot_id: config.BOT_ID,
        userData: config.INIT_DATA,
      }
    );
  } catch (e) {
    error.createError({
      state: true,
      message: 'Проблемы с интернетом. Попробуйте перезагрузить страницу.',
      reload: true,
    });
  }
}

export async function userAuthPeply() {
  const error = useAuthStore();
  try {
    return await axios.post(
      `https://api.bot-t.com/v1/module/bot/check-hash${config.INIT_DATA}`,
      {
        bot_id: config.BOT_ID,
      }
    );
  } catch (e) {
    error.createError({
      state: true,
      message: 'Проблемы с интернетом. Попробуйте перезагрузить страницу.',
      reload: true,
    });
  }
}
