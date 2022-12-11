import axios from 'axios';
import { config } from 'src/config';
import { useAuthStore } from 'stores/Auth/auth';

export default async function (METHOD: UserMethods, PARAMS?: Params) {
  const error = useAuthStore();
  let param = '';
  if (PARAMS?.id) {
    param = `?id=${PARAMS.id}`;
  }
  if (PARAMS?.region) {
    param += `&region=${PARAMS.region}`;
  }
  try {
    return await axios.get(config.HOST + '/user/' + METHOD + param);
  } catch (e) {
    error.createError({
      state: true,
      message: 'Проблемы с интернетом. Попробуйте перезагрузить страницу.',
      reload: true,
    });
  }
}

type UserMethods = 'get' | 'create' | 'update';

interface Params {
  id?: number | string;
  region?: string;
}
