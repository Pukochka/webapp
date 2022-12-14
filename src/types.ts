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
  created_at: string;
  money: {
    balance: string;
    currency: {
      code: string;
      id: number;
      letter: string;
    };
  };
  user: {
    first_name: string;
    id: number;
    last_name: string;
    link: string;
    telegram_id: string;
    type: {
      id: number;
      title: string;
    };
    username: string;
  };
  secret_user_key: string;
  system_user_id: number;

  updated_at: string;
}
