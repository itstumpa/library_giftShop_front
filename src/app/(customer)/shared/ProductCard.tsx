"use client"

import { motion } from 'framer-motion';
import { Plus, Star } from 'lucide-react';
import { Product } from '@/data/types';
import { useCartStore } from '@/store/cart-store';
import { useProductStore } from '@/store/product-store';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

import Link from 'next/link';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addItem } = useCartStore();
  const { getCategoryById } = useProductStore();
  const category = getCategoryById(product.categoryId);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link
        href={`/products/${product.slug}`}
        className="group block bg-card rounded-lg overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 hover-lift"
      >
        <div className="relative aspect-3/4 overflow-hidden bg-secondary">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.bestseller && (
              <Badge className="bg-accent text-accent-foreground">
                <Star className="h-3 w-3 mr-1" />
                Bestseller
              </Badge>
            )}
            {discount > 0 && (
              <Badge variant="destructive">
                -{discount}%
              </Badge>
            )}
          </div>

          {/* Quick Add Button */}
          <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              size="icon"
              variant="secondary"
              onClick={handleAddToCart}
              className="rounded-full shadow-elevated h-10 w-10"
            >
              <Plus className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="p-4">
          {category && (
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
              {category.name}
            </p>
          )}
          <h3 className="font-display font-semibold text-foreground line-clamp-2 mb-1 group-hover:text-accent transition-colors">
            {product.name}
          </h3>
          {product.author && (
            <p className="text-sm text-muted-foreground mb-2">
              by {product.author}
            </p>
          )}
          {product.brand && (
            <p className="text-sm text-muted-foreground mb-2">
              {product.brand}
            </p>
          )}
          <div className="flex items-center gap-2">
            <span className="font-semibold text-foreground">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

