import {
    LayoutDashboard,
    Store,
    CookingPot,
    UsersRound,
  } from "lucide-react";
  
  export const navLinks = [
    {
      url: "/",
      icon: <LayoutDashboard />,
      label: "Dashboard",
      testId: "nav-dashboard",
    },
    {
      url: "/stores",
      icon: <Store />,
      label: "Stores",
      testId: "nav-stores",
    },
    {
      url: "/menus",
      icon: <CookingPot />,
      label: "Menus",
      testId: "nav-menus",      
    },
    {
      url: "/customers",
      icon: <UsersRound />,
      label: "Customers",
      testId: "nav-customers",
    },
  ];