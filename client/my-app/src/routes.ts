import React from 'react';
import {
    MdHome,
    MdLogout,
    MdNotifications,
    MdSettings,
    MdEmail,
    MdLogin
    

} from 'react-icons/md'
import { Home, Logout, Notifications} from './pages';
import { RoutePath } from './constant';
import Login from './pages/Login';

export interface SidebarNavItem {           ///// описание самого элемента на боковой панеле
    name: string;
    path: string;
    icon: React.ComponentType;
}
export interface Route {                   ///// определение самого маршрута
    name: string;
    path: RoutePath;
    sidebarNavItems?: SidebarNavItem[];
    component:React.ComponentType;
    
}


export const defaultSidebarNavItems: SidebarNavItem[] = [
    {
        name: "Home",
        path: RoutePath.HOME,
        icon: MdHome,
    },
    {
        name: "Notifications",
        path: RoutePath.NOTIFICATIONS,
        icon: MdNotifications,
    },
    {
        name: "Setting",
        path: RoutePath.SETTINGS,
        icon: MdSettings,
    },
    {
        name:"inbox",
        path:RoutePath.MESSAGES,
        icon:MdEmail
    },
    {
        name: "Login",
        path: RoutePath.LOG_IN,
        icon: MdLogin,
    }
]

export const routes: Route[] = [
    {
        name: "home",
        path: RoutePath.HOME,
        component: Home,
        sidebarNavItems: defaultSidebarNavItems
    },
    {
        name: "logout",
        path: RoutePath.LOG_OUT,
        component: Logout
    },
    {
        name: "notifications",
        path: RoutePath.NOTIFICATIONS,
        component: Notifications,
        sidebarNavItems: defaultSidebarNavItems
    },
    {
        name: "login",
        path: RoutePath.LOG_IN,
        component: Login
    },
   
];

