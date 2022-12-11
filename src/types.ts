export interface UserRegionProducts {
  key: Products;
}

export interface Products {
  range: Array<number>;
  items: Items[];
}

export interface Items {
  range: Array<number>;
  amount: number | null;
  price: number;
}

export interface Regions {
  rcode: number;
  code: number;
  desc: string;
  new_code: string;
}

export interface User {
  id: number;
  region: string;
}

export interface TelegramUser {
  balance: string;
  created_at: string;
  currency: string;
  first_name: string;
  id: number;
  last_name: string;
  ref_id: number;
  secret_user_key: string;
  source: null;
  system_user_id: number;
  telegram_id: string;
  updated_at: string;
  username: string;
}
