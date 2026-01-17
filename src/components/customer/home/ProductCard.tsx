'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/types/product';
import { formatPrice } from '@/lib/utils';
import { useAppDispatch } from '@/store/hooks';
import { addToCart } from '@/store/features/cart/cartSlice';
import { ShoppingCart, Star } from 'lucide-react';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const dispatch = useAppDispatch();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(
      addToCart({
        productId: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        quantity: 1,
        stock: product.stock,
        slug: product.slug,
      })
    );

    // Note: Install sonner for toast notifications
    // npm install sonner
    // Then add <Toaster /> to root layout
    console.log('Added to cart:', product.name);
  };

  const discountPercentage = product.compareAtPrice
    ? Math.round(
        ((product.compareAtPrice - product.price) / product.compareAtPrice) * 100
      )
    : 0;

  return (
    <Link href={`/products/${product.slug}`}>
      <Card className="group overflow-hidden transition-all hover:shadow-card">
        <CardContent className="p-0">
          {/* Image */}
          <div className="relative aspect-3/4 overflow-hidden bg-linear-to-br from-primary/5 to-accent/5">
            {/* Placeholder - Replace with actual Image component when you have images */}
            <div className="flex h-full items-center justify-center">
              <span className="text-6xl text-muted-foreground/20">📚</span>
            </div>

            {/* Badges */}
            <div className="absolute left-3 top-3 flex flex-col gap-2">
              {product.isNew && (
                <Badge className="bg-accent text-accent-foreground">New</Badge>
              )}
              {discountPercentage > 0 && (
                <Badge variant="destructive">-{discountPercentage}%</Badge>
              )}
            </div>

            {/* Quick Add Button */}
            <div className="absolute inset-x-0 bottom-0 translate-y-full p-3 transition-transform group-hover:translate-y-0">
              <Button
                onClick={handleAddToCart}
                className="w-full"
                size="sm"
                disabled={product.stock === 0}
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            <p className="text-xs text-muted-foreground">{product.categoryName}</p>
            <h3 className="mt-1 line-clamp-2 font-semibold text-foreground group-hover:text-primary">
              {product.name}
            </h3>

            {/* Rating */}
            <div className="mt-2 flex items-center gap-1">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <span className="text-sm font-medium">{product.rating}</span>
              <span className="text-xs text-muted-foreground">
                ({product.reviewCount})
              </span>
            </div>

            {/* Price */}
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-lg font-bold text-foreground">
                {formatPrice(product.price)}
              </span>
              {product.compareAtPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  {formatPrice(product.compareAtPrice)}
                </span>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}