import { create } from 'zustand';
import { Product, Category } from '@/data/types';
import { products as initialProducts, categories as initialCategories } from '@/data/mock-data';

interface ProductState {
  products: Product[];
  categories: Category[];
  addProduct: (product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateProduct: (id: string, updates: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  addCategory: (category: Omit<Category, 'id' | 'productCount'>) => void;
  updateCategory: (id: string, updates: Partial<Category>) => void;
  deleteCategory: (id: string) => void;
  getProductById: (id: string) => Product | undefined;
  getProductBySlug: (slug: string) => Product | undefined;
  getProductsByCategory: (categoryId: string) => Product[];
  getCategoryById: (id: string) => Category | undefined;
  getCategoryBySlug: (slug: string) => Category | undefined;
  getFeaturedProducts: () => Product[];
  getBestsellers: () => Product[];
}

const generateId = () => `id-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
// const generateSlug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export const useProductStore = create<ProductState>((set, get) => ({
  products: initialProducts,
  categories: initialCategories,

  addProduct: (productData) => {
    const now = new Date().toISOString();
    const newProduct: Product = {
      ...productData,
      id: generateId(),
      createdAt: now,
      updatedAt: now,
    };
    set((state) => ({ products: [...state.products, newProduct] }));
  },

  updateProduct: (id, updates) => {
    set((state) => ({
      products: state.products.map((product) =>
        product.id === id
          ? { ...product, ...updates, updatedAt: new Date().toISOString() }
          : product
      ),
    }));
  },

  deleteProduct: (id) => {
    set((state) => ({
      products: state.products.filter((product) => product.id !== id),
    }));
  },

  addCategory: (categoryData) => {
    const newCategory: Category = {
      ...categoryData,
      id: generateId(),
      productCount: 0,
    };
    set((state) => ({ categories: [...state.categories, newCategory] }));
  },

  updateCategory: (id, updates) => {
    set((state) => ({
      categories: state.categories.map((category) =>
        category.id === id ? { ...category, ...updates } : category
      ),
    }));
  },

  deleteCategory: (id) => {
    set((state) => ({
      categories: state.categories.filter((category) => category.id !== id),
    }));
  },

  getProductById: (id) => get().products.find((p) => p.id === id),
  getProductBySlug: (slug) => get().products.find((p) => p.slug === slug),
  getProductsByCategory: (categoryId) =>
    get().products.filter((p) => p.categoryId === categoryId),
  getCategoryById: (id) => get().categories.find((c) => c.id === id),
  getCategoryBySlug: (slug) => get().categories.find((c) => c.slug === slug),
  getFeaturedProducts: () => get().products.filter((p) => p.featured),
  getBestsellers: () => get().products.filter((p) => p.bestseller),
}));
