/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import {MdOutlineDashboard, MdOutlineMenuBook, MdFormatListBulleted} from "react-icons/md";
import {FaUserFriends} from "react-icons/fa";

import Dashboard from "./views/Dashboard.js";
import Notifications from "./views/Notifications.js";
import Icons from "./views/Shop.js";
import Typography from "./views/Customers.js";
import TableList from "./views/Orders.js";
import Maps from "./views/Map.js";
import UserPage from "./views/User.js";
import UpgradeToPro from "./views/Upgrade.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <MdOutlineDashboard className="me-2" size={20}/>,
    component: <Dashboard/>,
    layout: "/admin",
  },
  {
    path: "/shop",
    name: "Shop",
    icon: <MdOutlineMenuBook className="me-2" size={20}/>,
    component: <Icons/>,
    layout: "/admin",
  },
  {
    path: "/orders",
    name: "Orders",
    icon: <MdFormatListBulleted className="me-2" size={20}/>,
    component: <TableList/>,
    layout: "/admin",
  },
  {
    path: "/customers",
    name: "Customers",
    icon:  <FaUserFriends className="me-2" size={20}/>,
    component: <Typography/>,
    layout: "/admin",
  }
];

export default routes;
