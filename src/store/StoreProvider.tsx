'use client';

import { Provider } from 'react-redux';
import { store } from './index';
import { Toaster } from 'sonner';

export function StoreProvider({ children }: { children: React.ReactNode }) {
  return  <Provider  store={store}>
       <Toaster />{children}</Provider>;
}