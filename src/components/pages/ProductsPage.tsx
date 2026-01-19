"use client"

import { useState, useMemo, ReactNode } from 'react';
// import { motion } from 'framer-motion';
import { SlidersHorizontal, Grid3X3, Grid2X2, X } from 'lucide-react';
import { CustomerLayout } from '@/components/layout/CustomerLayout';
import { useProductStore } from '@/store/product-store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useSearchParams, useRouter } from 'next/navigation';
import { ProductCard } from '../(customer)/shared/ProductCard';

type SortOption = 'newest' | 'price-asc' | 'price-desc' | 'name';

type Category = {
  productCount: ReactNode;
  id: string;
  name: string;
  slug: string;
  // Add other properties your category has
};
// FilterContent component moved OUTSIDE - defined at top level
const FilterContent = ({ 
  categories, 
  selectedCategories, 
  handleCategoryToggle, 
  priceRange, 
  setPriceRange, 
  hasActiveFilters, 
  clearFilters 
}: {
  categories: Category[];
  selectedCategories: string[];
  handleCategoryToggle: (slug: string) => void;
  priceRange: { min: string; max: string };
  setPriceRange: React.Dispatch<React.SetStateAction<{ min: string; max: string }>>;
  hasActiveFilters: boolean
  
  clearFilters: () => void;
}) => (
  <div className="space-y-6">
    {/* Categories */}
    <div>
      <Label className="text-sm font-semibold mb-3 block">Categories</Label>
      <div className="space-y-2">
        {categories.map((category) => (
          <div key={category.id} className="flex items-center space-x-2">
            <Checkbox
              id={category.slug}
              checked={selectedCategories.includes(category.slug)}
              onCheckedChange={() => handleCategoryToggle(category.slug)}
            />
            <label
              htmlFor={category.slug}
              className="text-sm cursor-pointer flex-1"
            >
              {category.name}
              <span className="text-muted-foreground ml-1">
                ({category.productCount})
              </span>
            </label>
          </div>
        ))}
      </div>
    </div>

    {/* Price Range */}
    <div>
      <Label className="text-sm font-semibold mb-3 block">Price Range</Label>
      <div className="flex items-center gap-2">
        <Input
          type="number"
          placeholder="Min"
          value={priceRange.min}
          onChange={(e) =>
            setPriceRange((prev) => ({ ...prev, min: e.target.value }))
          }
          className="w-full"
        />
        <span className="text-muted-foreground">-</span>
        <Input
          type="number"
          placeholder="Max"
          value={priceRange.max}
          onChange={(e) =>
            setPriceRange((prev) => ({ ...prev, max: e.target.value }))
          }
          className="w-full"
        />
      </div>
    </div>

    {hasActiveFilters && (
      <Button variant="outline" onClick={clearFilters} className="w-full">
        Clear All Filters
      </Button>
    )}
  </div>
);

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { products, categories } = useProductStore();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [gridCols, setGridCols] = useState<3 | 4>(4);

  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    searchParams.get('category') ? [searchParams.get('category')!] : []
  );
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.author?.toLowerCase().includes(query) ||
          p.brand?.toLowerCase().includes(query)
      );
    }

    // Filter by categories
    if (selectedCategories.length > 0) {
      const categoryIds = categories
        .filter((c) => selectedCategories.includes(c.slug))
        .map((c) => c.id);
      result = result.filter((p) => categoryIds.includes(p.categoryId));
    }

    // Filter by price range
    if (priceRange.min) {
      result = result.filter((p) => p.price >= Number(priceRange.min));
    }
    if (priceRange.max) {
      result = result.filter((p) => p.price <= Number(priceRange.max));
    }

    // Sort
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'newest':
      default:
        result.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
    }

    return result;
  }, [products, searchQuery, selectedCategories, priceRange, sortBy, categories]);

  const handleCategoryToggle = (slug: string) => {
    setSelectedCategories((prev) =>
      prev.includes(slug)
        ? prev.filter((s) => s !== slug)
        : [...prev, slug]
    );
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategories([]);
    setPriceRange({ min: '', max: '' });
    router.push(window.location.pathname);
  };
const hasActiveFilters = 
  searchQuery.length > 0 || 
  selectedCategories.length > 0 
  // sortBy !== 'priceRange.min || priceRange.max';
  // const hasActiveFilters =
  //   searchQuery || selectedCategories.length > 0 || priceRange.min || priceRange.max;

  return (
    <CustomerLayout>
      <div className="page-container section-padding">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-display text-4xl font-bold mb-2">Shop All</h1>
          <p className="text-muted-foreground">
            Explore our collection of {products.length} products
          </p>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24">
              <h2 className="font-display text-lg font-semibold mb-4">Filters</h2>
              <FilterContent 
                categories={categories}
                selectedCategories={selectedCategories}
                handleCategoryToggle={handleCategoryToggle}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                hasActiveFilters={hasActiveFilters}
                clearFilters={clearFilters}
              />
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b">
              <div className="flex items-center gap-4">
                {/* Mobile Filter Button */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="lg:hidden">
                      <SlidersHorizontal className="h-4 w-4 mr-2" />
                      Filters
                      {hasActiveFilters && (
                        <Badge variant="secondary" className="ml-2">
                          Active
                        </Badge>
                      )}
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left">
                    <SheetHeader>
                      <SheetTitle>Filters</SheetTitle>
                    </SheetHeader>
                    <div className="mt-6">
                      <FilterContent 
                        categories={categories}
                        selectedCategories={selectedCategories}
                        handleCategoryToggle={handleCategoryToggle}
                        priceRange={priceRange}
                        setPriceRange={setPriceRange}
                        hasActiveFilters={hasActiveFilters}
                        clearFilters={clearFilters}
                      />
                    </div>
                  </SheetContent>
                </Sheet>

                {/* Search */}
                <Input
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-48 sm:w-64"
                />
              </div>

              <div className="flex items-center gap-3">
                {/* Sort */}
                <Select
                  value={sortBy}
                  onValueChange={(value) => setSortBy(value as SortOption)}
                >
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-asc">Price: Low to High</SelectItem>
                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                    <SelectItem value="name">Name</SelectItem>
                  </SelectContent>
                </Select>

                {/* Grid Toggle */}
                <div className="hidden md:flex items-center border rounded-lg">
                  <Button
                    variant={gridCols === 3 ? 'secondary' : 'ghost'}
                    size="icon"
                    className="rounded-r-none"
                    onClick={() => setGridCols(3)}
                  >
                    <Grid2X2 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={gridCols === 4 ? 'secondary' : 'ghost'}
                    size="icon"
                    className="rounded-l-none"
                    onClick={() => setGridCols(4)}
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Active Filters */}
            {hasActiveFilters && (
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="text-sm text-muted-foreground">Active filters:</span>
                {selectedCategories.map((slug) => {
                  const category = categories.find((c) => c.slug === slug);
                  return (
                    <Badge
                      key={slug}
                      variant="secondary"
                      className="cursor-pointer"
                      onClick={() => handleCategoryToggle(slug)}
                    >
                      {category?.name}
                      <X className="h-3 w-3 ml-1" />
                    </Badge>
                  );
                })}
                {(priceRange.min || priceRange.max) && (
                  <Badge
                    variant="secondary"
                    className="cursor-pointer"
                    onClick={() => setPriceRange({ min: '', max: '' })}
                  >
                    ${priceRange.min || '0'} - ${priceRange.max || '∞'}
                    <X className="h-3 w-3 ml-1" />
                  </Badge>
                )}
              </div>
            )}

            {/* Results count */}
            <p className="text-sm text-muted-foreground mb-6">
              Showing {filteredProducts.length} of {products.length} products
            </p>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div
                className={`grid gap-6 ${
                  gridCols === 3
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                    : 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                }`}
              >
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground mb-4">
                  No products found matching your criteria.
                </p>
                <Button variant="outline" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </CustomerLayout>
  );
}