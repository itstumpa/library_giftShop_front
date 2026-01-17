// App Configuration
export const APP_NAME = "Library";
export const APP_DESCRIPTION = "Premium books and stationery for knowledge seekers";

// Tax & Shipping
export const TAX_RATE = 0.1; // 10%
export const SHIPPING_COST = 5.99;
export const FREE_SHIPPING_THRESHOLD = 50;

// Pagination
export const PRODUCTS_PER_PAGE = 12;
export const ORDERS_PER_PAGE = 10;

// API Endpoints (Future use)
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

export const API_ENDPOINTS = {
  PRODUCTS: `${API_BASE_URL}/products`,
  CATEGORIES: `${API_BASE_URL}/categories`,
  ORDERS: `${API_BASE_URL}/orders`,
  AUTH: `${API_BASE_URL}/auth`,
};

// Social Links
export const SOCIAL_LINKS = {
  facebook: "https://facebook.com",
  twitter: "https://twitter.com",
  instagram: "https://instagram.com",
  linkedin: "https://linkedin.com",
};

// Contact
export const CONTACT_EMAIL = "hello@library.com";
export const CONTACT_PHONE = "+1 (555) 123-4567";