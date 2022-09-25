import React from "react";
import { useLocation } from "react-router-dom";
import Icons from '../components/Icons'

// const pathname = useLocation().pathname;

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
                path: "/product",
                title: "Products",
            },
        ],
    },
    {
        path: "/account",
        title: "Account",
        component: <Icons.settings />,
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
        component: <Icons.trendingUp />,
    },
    {
        path: "/reports",
        title: "Return Reports",
        component: <Icons.return />,
    },
    {
        path: "/faq",
        title: "FAQ",
        component: <Icons.help />,
    },


];