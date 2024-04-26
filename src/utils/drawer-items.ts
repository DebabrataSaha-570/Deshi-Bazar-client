import { FaListUl } from "react-icons/fa6";
import { FaPlus, FaUsers, FaClipboardList, FaHome } from "react-icons/fa";
import { USER_ROLE } from "@/constants/role";
import { DrawerItems, UserRole } from "@/types";

export const drawerItems = (role: UserRole): DrawerItems[] => {
  const roleMenus: DrawerItems[] = [];

  switch (role) {
    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `/Dashboard`,
          //   path: `/dashboard/products/${role}`,
          icon: FaHome,
        },
        {
          title: "All Products",
          path: `/Dashboard/products`,
          //   path: `/dashboard/products/${role}`,
          icon: FaListUl,
        },
        {
          title: "All Orders",
          path: `/Dashboard/orders`,
          //   path: `/dashboard/orders/${role}`,
          icon: FaClipboardList,
        },
        {
          title: "Add Product",
          path: `/Dashboard/add-product`,
          //   path: `/dashboard/add-product/${role}`,
          icon: FaPlus,
        },
        {
          title: "All Users",
          path: `/Dashboard/users`,
          //   path: `/dashboard/orders/${role}`,
          icon: FaUsers,
        }
      );
      break;

    case USER_ROLE.USER:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `/Dashboard`,
          //   path: `/dashboard/products/${role}`,
          icon: FaHome,
        },
        {
          title: "My Orders",
          path: `/Dashboard/my-orders`,
          //   path: `/dashboard/products/${role}`,
          icon: FaClipboardList,
        }
      );
      break;

    default:
      break;
  }
  return [...roleMenus];
};
