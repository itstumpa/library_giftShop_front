import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent-foreground">
              <BookOpen className="mr-2 h-4 w-4" />
              New Arrivals Available Now
            </div>
            
            <h1 className="font-serif text-5xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl">
              Discover Your Next
              <span className="block text-primary">Great Read</span>
            </h1>
            
            <p className="text-lg text-muted-foreground md:text-xl">
              Explore our curated collection of premium books and stationery.
              From timeless classics to contemporary bestsellers, find everything
              you need to fuel your passion for learning.
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="group">
                <Link href="/products">
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/products?filter=new">Browse New Arrivals</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 border-t pt-8">
              <div>
                <div className="font-serif text-3xl font-bold text-primary">10k+</div>
                <div className="text-sm text-muted-foreground">Books Available</div>
              </div>
              <div>
                <div className="font-serif text-3xl font-bold text-primary">50k+</div>
                <div className="text-sm text-muted-foreground">Happy Readers</div>
              </div>
              <div>
                <div className="font-serif text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Authors</div>
              </div>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-elevated">
              <div className="flex h-full items-center justify-center">
                <BookOpen className="h-48 w-48 text-white/20" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-accent/20 blur-2xl" />
              <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-secondary/20 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}