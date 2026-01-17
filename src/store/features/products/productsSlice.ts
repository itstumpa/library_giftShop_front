import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product, ProductFormData, Category } from '@/types/product';
import productsData from '@/data/products.json';
import categoriesData from '@/data/categories.json';

interface ProductsState {
  products: Product[];
  categories: Category[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: productsData as Product[],
  categories: categoriesData as Category[],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // Product CRUD
    addProduct: (state, action: PayloadAction<ProductFormData>) => {
      const newProduct: Product = {
        id: `prod_${Date.now()}`,
        slug: action.payload.name.toLowerCase().replace(/\s+/g, '-'),
        rating: 0,
        reviewCount: 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        categoryName: state.categories.find(c => c.id === action.payload.categoryId)?.name || '',
        ...action.payload,
      };
      state.products.unshift(newProduct);
    },

    updateProduct: (
      state,
      action: PayloadAction<{ id: string; data: Partial<ProductFormData> }>
    ) => {
      const index = state.products.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = {
          ...state.products[index],
          ...action.payload.data,
          updatedAt: new Date().toISOString(),
        };
      }
    },

    deleteProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter((p) => p.id !== action.payload);
    },

    // Category CRUD
    addCategory: (state, action: PayloadAction<Omit<Category, 'id' | 'createdAt'>>) => {
      const newCategory: Category = {
        id: `cat_${Date.now()}`,
        createdAt: new Date().toISOString(),
        ...action.payload,
      };
      state.categories.push(newCategory);
    },

    updateCategory: (
      state,
      action: PayloadAction<{ id: string; data: Partial<Category> }>
    ) => {
      const index = state.categories.findIndex((c) => c.id === action.payload.id);
      if (index !== -1) {
        state.categories[index] = {
          ...state.categories[index],
          ...action.payload.data,
        };
      }
    },

    deleteCategory: (state, action: PayloadAction<string>) => {
      state.categories = state.categories.filter((c) => c.id !== action.payload);
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  addProduct,
  updateProduct,
  deleteProduct,
  addCategory,
  updateCategory,
  deleteCategory,
  setLoading,
  setError,
} = productsSlice.actions;

export default productsSlice.reducer;