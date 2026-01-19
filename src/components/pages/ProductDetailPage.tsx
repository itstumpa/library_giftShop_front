import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Minus, 
  Plus, 
  ShoppingCart, 
  Heart, 
  Share2, 
  ChevronRight,
  Star,
  Truck,
  RotateCcw,
  Shield
} from 'lucide-react';
import { CustomerLayout } from '@/components/layout/CustomerLayout';
import { ProductCard } from '@/components/shared/ProductCard';
import { useProductStore } from '@/store/product-store';
import { useCartStore } from '@/store/cart-store';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { getProductBySlug, getCategoryById, getProductsByCategory } = useProductStore();
  const { addItem } = useCartStore();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = getProductBySlug(slug || '');

  if (!product) {
    return (
      <CustomerLayout>
        <div className="page-container section-padding text-center">
          <h1 className="font-display text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The product you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link to="/products">Back to Shop</Link>
          </Button>
        </div>
      </CustomerLayout>
    );
  }

  const category = getCategoryById(product.categoryId);
  const relatedProducts = getProductsByCategory(product.categoryId)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, quantity);
    setQuantity(1);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <CustomerLayout>
      {/* Breadcrumb */}
      <div className="border-b">
        <div className="page-container py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <Link to="/products" className="text-muted-foreground hover:text-foreground">
              Shop
            </Link>
            {category && (
              <>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                <Link
                  to={`/products?category=${category.slug}`}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {category.name}
                </Link>
              </>
            )}
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <span className="text-foreground font-medium truncate max-w-48">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      <div className="page-container section-padding">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-[3/4] rounded-lg overflow-hidden bg-secondary mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-24 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index
                        ? 'border-accent'
                        : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Badges */}
            <div className="flex items-center gap-2 mb-3">
              {product.bestseller && (
                <Badge className="bg-accent text-accent-foreground">
                  <Star className="h-3 w-3 mr-1" />
                  Bestseller
                </Badge>
              )}
              {discount > 0 && (
                <Badge variant="destructive">-{discount}% OFF</Badge>
              )}
              {product.stock < 10 && product.stock > 0 && (
                <Badge variant="outline">Only {product.stock} left</Badge>
              )}
            </div>

            {/* Title & Author */}
            <h1 className="font-display text-3xl lg:text-4xl font-bold mb-2">
              {product.name}
            </h1>
            {product.author && (
              <p className="text-lg text-muted-foreground mb-4">
                by {product.author}
              </p>
            )}
            {product.brand && (
              <p className="text-lg text-muted-foreground mb-4">
                {product.brand}
              </p>
            )}

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-bold text-accent">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            <Separator className="my-6" />

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Add to Cart */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border rounded-lg">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="rounded-r-none"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                  className="rounded-l-none"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <Button
                size="lg"
                className="flex-1"
                onClick={handleAddToCart}
                disabled={product.stock === 0}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
              </Button>
              <Button variant="outline" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 p-4 bg-secondary/50 rounded-lg mb-6">
              <div className="flex flex-col items-center text-center gap-1">
                <Truck className="h-5 w-5 text-accent" />
                <span className="text-xs">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center gap-1">
                <RotateCcw className="h-5 w-5 text-accent" />
                <span className="text-xs">30-Day Returns</span>
              </div>
              <div className="flex flex-col items-center text-center gap-1">
                <Shield className="h-5 w-5 text-accent" />
                <span className="text-xs">Secure Payment</span>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="details" className="mt-8">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="mt-4">
                <div className="space-y-3 text-sm">
                  {product.isbn && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">ISBN</span>
                      <span>{product.isbn}</span>
                    </div>
                  )}
                  {product.publisher && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Publisher</span>
                      <span>{product.publisher}</span>
                    </div>
                  )}
                  {product.publishedYear && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Published</span>
                      <span>{product.publishedYear}</span>
                    </div>
                  )}
                  {product.pages && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Pages</span>
                      <span>{product.pages}</span>
                    </div>
                  )}
                  {category && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Category</span>
                      <span>{category.name}</span>
                    </div>
                  )}
                </div>
              </TabsContent>
              <TabsContent value="specifications" className="mt-4">
                {product.specifications ? (
                  <div className="space-y-3 text-sm">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-muted-foreground">{key}</span>
                        <span>{value}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground text-sm">
                    No specifications available for this product.
                  </p>
                )}
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="font-display text-2xl font-bold mb-6">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </CustomerLayout>
  );
}
