// import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Category } from '@/data/types';
import Link from 'next/link';
import Image from 'next/image';

interface CategoryCardProps {
  category: Category;
  index?: number;
}

export function CategoryCard({ category, index = 0 }: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link
        href={`/products?category=${category.slug}`}
        className="group block relative overflow-hidden rounded-lg aspect-square"
      >
        <Image
          src={category.image}
          fill
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <h3 className="font-display text-xl font-bold text-primary-foreground mb-1">
            {category.name}
          </h3>
          <p className="text-sm text-primary-foreground/80">
            {category.productCount} products
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
