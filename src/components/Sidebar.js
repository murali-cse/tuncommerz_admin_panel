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
        path: "/employees",
        title: "Employees",
        component: <Icons.User />,
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

];