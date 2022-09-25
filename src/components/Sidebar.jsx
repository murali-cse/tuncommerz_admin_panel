import React from "react";
import Icons from "./Icons";

export const navTitle = [
  {
    path: "/",
    title: "Dashboard",
    component: <Icons.Grid />,
  },
  {
    title: "Products",
    component: <Icons.Box />,
    subcat: [
      {
        path: "/category",
        title: "Category",
      },
      {
        path: "/addproduct",
        title: "Add Product",
      },
      {
        path: "/product",
        title: "Products",
      },
    ],
  },
  {
    path: "/account",
    title: "Account",
    component: <Icons.Settings />,
  },
  {
    path: "/employees",
    title: "Employees",
    component: <Icons.User />,
  },
  {
    path: "/customers",
    title: "Customers",
    component: <Icons.Users />,
  },
  {
    path: "/orders",
    title: "Orders",
    component: <Icons.TrendingUp />,
  },
  {
    path: "/reports",
    title: "Return Reports",
    component: <Icons.Return />,
  },
  {
    path: "/faq",
    title: "FAQ",
    component: <Icons.Help />,
  },
];
