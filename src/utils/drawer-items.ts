import { FaListUl } from "react-icons/fa6";
import { USER_ROLE } from "@/constants/role";
import { DrawerItems, UserRole } from "@/types";

export const drawerItems = (role: UserRole): DrawerItems[] => {
  const roleMenus: DrawerItems[] = [];

  switch (role) {
    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
          title: "All Products",
          path: `/Dashboard`,
          //   path: `/dashboard/products/${role}`,
          icon: FaListUl,
        },
        {
          title: "All Orders",
          path: `/Dashboard/orders`,
          //   path: `/dashboard/orders/${role}`,
          icon: FaListUl,
        },
        {
          title: "Add Product",
          path: `/Dashboard/add-product`,
          //   path: `/dashboard/add-product/${role}`,
          icon: FaListUl,
        }
      );
      break;

    case USER_ROLE.USER:
      roleMenus.push({
        title: "My Orders",
        path: `/Dashboard/my-orders`,
        //   path: `/dashboard/products/${role}`,
        icon: FaListUl,
      });
      break;

    default:
      break;
  }
  return [...roleMenus];
};
