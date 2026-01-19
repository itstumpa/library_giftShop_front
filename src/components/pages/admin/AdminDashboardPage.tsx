import { motion } from 'framer-motion';
import { 
  Package, 
  ShoppingCart, 
  DollarSign, 
  Clock, 
  FolderOpen,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
} from 'lucide-react';
import { AdminLayout } from '@/components/layout/AdminLayout';
import { useProductStore } from '@/store/product-store';
import { useOrderStore } from '@/store/order-store';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ElementType;
  change?: number;
  index: number;
}

function StatCard({ title, value, icon: Icon, change, index }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card>
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">{title}</p>
              <p className="text-3xl font-bold font-display">{value}</p>
              {change !== undefined && (
                <div className="flex items-center gap-1 mt-2">
                  {change >= 0 ? (
                    <TrendingUp className="h-4 w-4 text-success" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-destructive" />
                  )}
                  <span
                    className={`text-sm font-medium ${
                      change >= 0 ? 'text-success' : 'text-destructive'
                    }`}
                  >
                    {change >= 0 ? '+' : ''}
                    {change}%
                  </span>
                  <span className="text-sm text-muted-foreground">vs last month</span>
                </div>
              )}
            </div>
            <div className="p-3 rounded-lg bg-accent/10">
              <Icon className="h-6 w-6 text-accent" />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function AdminDashboardPage() {
  const { products, categories } = useProductStore();
  const { orders, getTotalRevenue, getPendingOrdersCount } = useOrderStore();

  const totalRevenue = getTotalRevenue();
  const pendingOrders = getPendingOrdersCount();
  const lowStockProducts = products.filter((p) => p.stock < 10).length;

  const stats = [
    {
      title: 'Total Products',
      value: products.length,
      icon: Package,
      change: 12,
    },
    {
      title: 'Total Orders',
      value: orders.length,
      icon: ShoppingCart,
      change: 8,
    },
    {
      title: 'Total Revenue',
      value: `$${totalRevenue.toFixed(2)}`,
      icon: DollarSign,
      change: 15,
    },
    {
      title: 'Pending Orders',
      value: pendingOrders,
      icon: Clock,
    },
    {
      title: 'Categories',
      value: categories.length,
      icon: FolderOpen,
    },
    {
      title: 'Low Stock',
      value: lowStockProducts,
      icon: AlertTriangle,
    },
  ];

  const recentOrders = orders.slice(0, 5);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'bg-success/10 text-success';
      case 'shipped':
        return 'bg-accent/10 text-accent';
      case 'processing':
        return 'bg-warning/10 text-warning';
      case 'pending':
        return 'bg-muted text-muted-foreground';
      case 'cancelled':
        return 'bg-destructive/10 text-destructive';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Page Header */}
        <div>
          <h1 className="font-display text-3xl font-bold mb-2">Dashboard Overview</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's what's happening with your store.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={stat.title} {...stat} index={index} />
          ))}
        </div>

        {/* Recent Orders & Top Products */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Recent Orders */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div
                      key={order.id}
                      className="flex items-center justify-between p-3 rounded-lg bg-secondary/50"
                    >
                      <div>
                        <p className="font-medium text-sm">{order.orderNumber}</p>
                        <p className="text-xs text-muted-foreground">
                          {order.customerName}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-sm">
                          ${order.total.toFixed(2)}
                        </p>
                        <Badge className={getStatusColor(order.status)} variant="secondary">
                          {order.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Top Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Top Selling Products</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {products
                    .filter((p) => p.bestseller)
                    .slice(0, 5)
                    .map((product, index) => (
                      <div
                        key={product.id}
                        className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50"
                      >
                        <span className="text-lg font-bold text-muted-foreground w-6">
                          {index + 1}
                        </span>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-12 h-12 rounded object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm truncate">
                            {product.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            ${product.price.toFixed(2)}
                          </p>
                        </div>
                        <Badge variant="outline">{product.stock} in stock</Badge>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </AdminLayout>
  );
}
