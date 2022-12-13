import axios from 'axios';
import { config } from 'src/config';
import { useAuthStore } from 'stores/Auth/auth';
export default async function (METHOD: BotMethods, PARAMS?: Params) {
  const error = useAuthStore();
  let param = '';
  if (PARAMS?.id) {
    param = `?id=${PARAMS.id}`;
  }
  if (PARAMS?.public_key) {
    param += `&public_key=${PARAMS.public_key}`;
  }
  if (PARAMS?.secret_user_key) {
    param += `&secret_user_key=${PARAMS.secret_user_key}`;
  }
  if (PARAMS?.range) {
    param += `&range=${PARAMS.range}`;
  }
  if (PARAMS?.count) {
    param += `&count=${PARAMS.count}`;
  }
  try {
    return await axios.post(config.HOST + '/bot/' + METHOD + param, {
      public_key: config.SECRET,
    });
  } catch (e) {
    error.createError({
      state: true,
      message: 'Проблемы с интернетом. Попробуйте перезагрузить страницу.',
      reload: true,
    });
  }
}

type BotMethods = 'products' | 'create-order';

interface Params {
  id?: number | string;
  public_key?: string;
  secret_user_key?: string;
  range?: number;
  count?: number;
}
