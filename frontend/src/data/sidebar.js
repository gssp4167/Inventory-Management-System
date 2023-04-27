import { FaTh, FaRegChartBar, FaCommentAlt } from "react-icons/fa";
import { BiImageAdd } from "react-icons/bi";

const menu = [
  {
    title: "Dashboard",
    path: "/dashboard",
  },
  {
    title: "Add Product",
    path: "/add-product",
  },
  {
    title: "Shipment",
    childrens: [
      {
        title: "Add",
        path: "/add-shipment",
      },
      {
        title: "Manage",
        path: "/manage-shipment",
      },
    ],
  },
  {
    title: "Account",
    childrens: [
      {
        title: "Profile",
        path: "/profile",
      },
      {
        title: "Edit Profile",
        path: "/edit-profile",
      },
    ],
  },
];

export default menu;
