import { USER_ROLE } from "@/constants/role";
import { IconType } from "react-icons";

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

export type TProductId = {
  params: {
    productId: string;
  };
};

export type UserRole = keyof typeof USER_ROLE;

export type DrawerItems = {
  title: string;
  path: string;
  parentPath?: string;
  icon?: IconType;
  child?: DrawerItems[];
};
