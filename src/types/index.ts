export type TProduct = {
  _id: string;
  title: string;
  price: number;
  quantity: number;
  quantity_unit: string;
  previous_price: number;
  ratings: number;
  total_reviews: number;
  categories: string;
  flash_sale: boolean;
  remaining_time: number | null;
  image_url: string;
  availability: string;
  description: string[];
};
