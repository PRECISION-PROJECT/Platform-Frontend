import { NavItem } from "@/types";

export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: "layoutDashboard",
    isActive: false,
    shortcut: ["d", "d"],
    items: [],
  },
  {
    title: "E-commerce",
    url: "#",
    icon: "shoppingBag",
    isActive: true,
    items: [
      {
        title: "Products",
        url: "/product-list",
        icon: "listOrderedIcon",
        shortcut: ["p", "p"],
      },
      {
        title: "Categories",
        shortcut: ["c", "c"],
        url: "/category-list",
        icon: "listOrderedIcon",
      },
    ],
  },
  {
    title: "Accounts",
    url: "#",
    icon: "users",
    isActive: true,
    items: [
      {
        title: "User Accounts",
        url: "/user-accounts",
        icon: "userPenIcon",
        shortcut: ["u", "a"],
      },
    ],
  },
  {
    title: "Me",
    url: "#",
    icon: "userCircle",
    isActive: true,
    items: [
      {
        title: "Profile",
        url: "/dashboard/profile",
        icon: "userPenIcon",
        shortcut: ["m", "m"],
      },
      {
        title: "Login",
        shortcut: ["l", "l"],
        url: "/",
        icon: "logOutIcon",
      },
    ],
  },
];
