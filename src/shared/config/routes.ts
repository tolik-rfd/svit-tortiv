/**
 * Application route paths configuration
 * Centralized location for all route definitions
 */

export enum AppRoutes {
  // Main pages
  HOME = "/",
  CUSTOMERS = "/customers",
  CATALOG = "/catalog",

  // User-related pages
  PROFILE = "/profile",
  FAVORITES = "/favorites",
  ORDERS = "/orders",
  CHAT = "/chat",

  // Auth pages (if needed in future)
  LOGIN = "/login",
  REGISTER = "/register",
}

export enum RouteNames {
  HOME = "Кондитерам",
  CUSTOMERS = "Замовникам",
  CATALOG = "Каталог",
  PROFILE = "Профіль",
  FAVORITES = "Обране",
  ORDERS = "Кошик",
  CHAT = "Чат",
}

// Navigation items configuration
export interface NavItem {
  value: string;
  label: string;
  href: AppRoutes;
  icon?: React.ReactNode;
}

// Main navigation items
export const MAIN_NAV_ITEMS: NavItem[] = [
  {
    value: AppRoutes.HOME,
    label: RouteNames.HOME,
    href: AppRoutes.HOME,
  },
  {
    value: AppRoutes.CUSTOMERS,
    label: RouteNames.CUSTOMERS,
    href: AppRoutes.CUSTOMERS,
  },
];

// Mobile navigation items
export const MOBILE_NAV_ITEMS: NavItem[] = [
  {
    value: "catalog",
    label: RouteNames.CATALOG,
    href: AppRoutes.CATALOG,
  },
  {
    value: "favorites",
    label: RouteNames.FAVORITES,
    href: AppRoutes.FAVORITES,
  },
  {
    value: "chat",
    label: RouteNames.CHAT,
    href: AppRoutes.CHAT,
  },
  {
    value: "profile",
    label: RouteNames.PROFILE,
    href: AppRoutes.PROFILE,
  },
  {
    value: "orders",
    label: RouteNames.ORDERS,
    href: AppRoutes.ORDERS,
  },
];

// Helper function to check if a route is active
export const isActiveRoute = (
  currentPath: string,
  route: AppRoutes,
): boolean => {
  if (route === AppRoutes.HOME) {
    return currentPath === route;
  }
  return currentPath.startsWith(route);
};

// Helper function to get route by name
export const getRouteByName = (name: string): AppRoutes | undefined => {
  return Object.values(AppRoutes).find((route) => route === name);
};
