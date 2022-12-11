import axios from 'axios';
import { config } from 'src/config';

export default async function (METHOD: RegionsMethods) {
  try {
    return await axios.get(config.HOST + '/region/' + METHOD);
  } catch (e) {}
}

type RegionsMethods = 'index';
