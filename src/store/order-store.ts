import { create } from 'zustand';
import { Order, OrderStatus } from '@/data/types';
import { orders as initialOrders } from '@/data/mock-data';

interface OrderState {
  orders: Order[];
  updateOrderStatus: (orderId: string, status: OrderStatus) => void;
  getOrderById: (id: string) => Order | undefined;
  getOrderByNumber: (orderNumber: string) => Order | undefined;
  getOrdersByStatus: (status: OrderStatus) => Order[];
  getTotalRevenue: () => number;
  getPendingOrdersCount: () => number;
}

export const useOrderStore = create<OrderState>((set, get) => ({
  orders: initialOrders,

  updateOrderStatus: (orderId, status) => {
    set((state) => ({
      orders: state.orders.map((order) =>
        order.id === orderId
          ? { ...order, status, updatedAt: new Date().toISOString() }
          : order
      ),
    }));
  },

  getOrderById: (id) => get().orders.find((o) => o.id === id),
  getOrderByNumber: (orderNumber) =>
    get().orders.find((o) => o.orderNumber === orderNumber),
  getOrdersByStatus: (status) =>
    get().orders.filter((o) => o.status === status),
  getTotalRevenue: () =>
    get().orders.reduce((total, order) => total + order.total, 0),
  getPendingOrdersCount: () =>
    get().orders.filter((o) => o.status === 'pending').length,
}));
