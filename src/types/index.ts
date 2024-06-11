import { USER_ROLE } from "@/constants/role";
import { IconType } from "react-icons";

export type Review = {
  name: string;
  email: string;
  rating: number;
  review: string;
};

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
  first_image: string;
  second_image: string;
  third_image: string;
  fourth_image: string;
  availability: string;
  description: string[];
  reviews: Review[];
};

export type TProductId = {
  params: {
    productId: string;
  };
};
export type TUser = {
  _id: string;
  name: string;
  email: string;
  role: string;
};

export type UserRole = keyof typeof USER_ROLE;

export type DrawerItems = {
  title: string;
  path: string;
  parentPath?: string;
  icon?: IconType;
  child?: DrawerItems[];
};
