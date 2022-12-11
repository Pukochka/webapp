import axios from 'axios';
import { config } from 'src/config';

export default async function (METHOD: UserMethods, PARAMS?: Params) {
  let param = '';
  if (PARAMS?.id) {
    param = `?id=${PARAMS.id}`;
  }
  if (PARAMS?.region) {
    param += `&region=${PARAMS.region}`;
  }
  try {
    return await axios.get(config.HOST + '/user/' + METHOD + param);
  } catch (e) {}
}

type UserMethods = 'get' | 'create' | 'update';

interface Params {
  id?: number | string;
  region?: string;
}
