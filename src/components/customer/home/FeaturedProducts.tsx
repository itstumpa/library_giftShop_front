'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/customer/products/ProductCard';
import { useAppSelector } from '@/store/hooks';
import { ArrowRight } from 'lucide-react';

export function FeaturedProducts() {
  const products = useAppSelector((state) => state.products.products);

  // Get featured products
  const featuredProducts = products
    .filter((p) => p.isFeatured && p.isActive)
    .slice(0, 8);

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Featured Products
          </h2>
          <p className="mt-3 text-muted-foreground">
            Hand-picked favorites from our collection
          </p>
        </div>
        <Button asChild variant="ghost" className="hidden md:inline-flex">
          <Link href="/products">
            View All
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-8 text-center md:hidden">
        <Button asChild>
          <Link href="/products">
            View All Products
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}