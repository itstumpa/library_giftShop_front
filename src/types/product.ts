export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  compareAtPrice?: number; // Original price for discounts
  categoryId: string;
  categoryName: string;
  images: string[];
  stock: number;
  sku: string;
  isActive: boolean;
  isFeatured: boolean;
  isNew: boolean;
  tags: string[];
  rating: number;
  reviewCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface ProductFormData {
  name: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  categoryId: string;
  images: string[];
  stock: number;
  sku: string;
  isActive: boolean;
  isFeatured: boolean;
  isNew: boolean;
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  productCount: number;
  isActive: boolean;
  createdAt: string;
}

export interface ProductFilters {
  categoryId?: string;
  minPrice?: number;
  maxPrice?: number;
  search?: string;
  tags?: string[];
  sortBy?: 'price-asc' | 'price-desc' | 'name' | 'newest' | 'popular';
}

export interface PaginationParams {
  page: number;
  limit: number;
  total: number;
}