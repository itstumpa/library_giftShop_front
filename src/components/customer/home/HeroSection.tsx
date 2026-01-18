// import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Pencil, Truck, Shield } from 'lucide-react';
import { CustomerLayout } from '@/components/layout/CustomerLayout';
import { ProductCard } from '@/components/shared/ProductCard';
import { CategoryCard } from '@/components/shared/CategoryCard';
import { Button } from '@/components/ui/button';
import { useProductStore } from '@/store/product-store';
import Link from 'next/link';

const features = [
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'On orders over $50',
  },
  {
    icon: Shield,
    title: 'Secure Payment',
    description: '100% protected transactions',
  },
  {
    icon: BookOpen,
    title: 'Quality Selection',
    description: 'Curated collection of books',
  },
  {
    icon: Pencil,
    title: 'Premium Stationery',
    description: 'Finest writing instruments',
  },
];

export default function HeroSection() {
  const { getFeaturedProducts, getBestsellers, categories } = useProductStore();
  const featuredProducts = getFeaturedProducts().slice(0, 4);
  const bestsellers = getBestsellers().slice(0, 4);

  return (
    <CustomerLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1920')] bg-cover bg-center opacity-10" />
        <div className="page-container relative max-w-7xl mx-auto ">
          <div className="py-20 md:py-32 lg:py-40 max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Discover Stories That{' '}
              <span className="text-accent">Inspire</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed"
            >
              Explore our curated collection of books and premium stationery. 
              From bestselling novels to artisan journals, find everything you need 
              to feed your imagination.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" variant="secondary" asChild>
                <Link href="/products">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20" asChild>
                <Link href="/products?category=fiction">Browse Books</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-b bg-secondary/50">
        <div className="page-container py-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <feature.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-medium text-sm">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding">
        <div className="page-container max-w-7xl mx-auto py-20">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="font-display text-3xl font-bold mb-2">Shop by Category</h2>
              <p className="text-muted-foreground">
                Find exactly what you&apos;re looking for
              </p>
            </div>
            <Button variant="ghost" asChild className="hidden sm:inline-flex">
              <Link href="/products">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.slice(0, 6).map((category, index) => (
              <CategoryCard key={category.id} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-secondary/30">
        <div className="page-container max-w-7xl mx-auto py-10">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="font-display text-3xl font-bold mb-2">Featured Products</h2>
              <p className="text-muted-foreground">
                Hand-picked selections for you
              </p>
            </div>
            <Button variant="ghost" asChild className="hidden sm:inline-flex">
              <Link href="/products">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="section-padding">
        <div className="page-container max-w-7xl mx-auto py-20">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="font-display text-3xl font-bold mb-2">Bestsellers</h2>
              <p className="text-muted-foreground">
                Our most loved products
              </p>
            </div>
            <Button variant="ghost" asChild className="hidden sm:inline-flex">
              <Link href="/products">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {bestsellers.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

     
    </CustomerLayout>
  );
}
