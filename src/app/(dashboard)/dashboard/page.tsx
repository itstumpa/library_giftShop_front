'use client';

// import { StatsCard } from '@/components/dashboard/overview/StatsCard';
// import { RecentOrders } from '@/components/dashboard/overview/RecentOrders';
import { Package, ShoppingCart, DollarSign, TrendingUp } from 'lucide-react';

export default function DashboardPage() {
  // Mock statistics
  const stats = [
    {
      title: 'Total Products',
      value: '1,234',
      change: '+12%',
      trend: 'up' as const,
      icon: Package,
    },
    {
      title: 'Total Orders',
      value: '856',
      change: '+8%',
      trend: 'up' as const,
      icon: ShoppingCart,
    },
    {
      title: 'Revenue',
      value: '$45,231',
      change: '+23%',
      trend: 'up' as const,
      icon: DollarSign,
    },
    {
      title: 'Conversion Rate',
      value: '3.2%',
      change: '-2%',
      trend: 'down' as const,
      icon: TrendingUp,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Dashboard
        </h1>
        <p className="text-foreground-muted">
          Welcome back! Here&apos;s what&apos;s happening with your store.
        </p>
      </div>

      {/* Stats Grid */}
      {/* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </div> */}

      {/* Recent Orders */}
      {/* <RecentOrders /> */}
    </div>
  );
}