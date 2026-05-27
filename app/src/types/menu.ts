export type Category =
  | 'hot-drinks'
  | 'acai'
  | 'iced-coffee'
  | 'snacks-cakes'
  | 'mojito'
  | 'milkshake'
  | 'matcha'
  | 'tea'
  | 'non-coffee'
  | 'extra';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
}

export interface CategoryConfig {
  id: Category;
  label: string;
  icon: string;
}
