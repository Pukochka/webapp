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
