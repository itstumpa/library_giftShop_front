
import { products } from '@/data/mock-data';
import { ProductCard } from '../shared/ProductCard';

export default function ProductsPage() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((products) => (
        <ProductCard key={products.id} product={products} />
      ))}
    </div>
  );
}
