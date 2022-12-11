import axios from 'axios';
import { config } from 'src/config';
import { useAuthStore } from 'stores/Auth/auth';

export default async function (METHOD: RegionsMethods) {
  const error = useAuthStore();
  try {
    return await axios.get(config.HOST + '/region/' + METHOD);
  } catch (e) {
    error.createError({
      state: true,
      message: 'Проблемы с интернетом. Попробуйте перезагрузить страницу.',
      reload: true,
    });
  }
}

type RegionsMethods = 'index';
