import axios from 'axios';
import { config } from 'src/config';

export default async function (METHOD: BotMethods, PARAMS?: Params) {
  let param = '';
  if (PARAMS?.id) {
    param = `?id=${PARAMS.id}`;
  }
  try {
    return await axios.get(config.HOST + '/bot/' + METHOD + param);
  } catch (e) {}
}

type BotMethods = 'products' | 'create-order';

interface Params {
  id?: number | string;
  public_key?: string;
  secret_user_key?: string;
  range?: number;
  count?: number;
}
