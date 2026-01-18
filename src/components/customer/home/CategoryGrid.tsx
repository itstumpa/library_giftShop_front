'use client';

import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { useAppSelector } from '@/store/hooks';
import { BookOpen, Pencil, Palette, Sparkles } from 'lucide-react';

const categoryIcons = {
  books: BookOpen,
  stationery: Pencil,
  art: Palette,
  gifts: Sparkles,
};

export function CategoryGrid() {
  const categories = useAppSelector((state) => state.products.categories);

  // Take first 4 active categories
  const displayCategories = categories.filter((c) => c.isActive).slice(0, 4);

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
          Shop by Category
        </h2>
        <p className="mt-3 text-muted-foreground">
          Explore our carefully curated collections
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {displayCategories.map((category) => {
          const Icon =
            categoryIcons[category.slug as keyof typeof categoryIcons] ||
            BookOpen;

          return (
            <Link
              key={category.id}
              href={`/categories/${category.slug}`}
              className="group"
            >
              <Card className="overflow-hidden transition-all hover:shadow-card">
                <CardContent className="p-0">
                  {/* Icon/Image Area */}
                  <div className="relative aspect-square overflow-hidden bg-linear-to-br from-primary/5 to-accent/5">
                    <div className="flex h-full items-center justify-center">
                      <Icon className="h-24 w-24 text-primary/40 transition-transform group-hover:scale-110" />
                    </div>
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-primary/0 transition-colors group-hover:bg-primary/10" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-semibold text-foreground group-hover:text-primary">
                      {category.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {category.productCount} products
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
}