import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail } from 'lucide-react';

export function CTASection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="overflow-hidden rounded-2xl bg-linear-to-br from-primary to-secondary p-12 text-center shadow-elevated md:p-16">
        <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
          Join Our Reading Community
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
          Subscribe to our newsletter and get exclusive deals, book recommendations,
          and early access to new arrivals.
        </p>

        {/* Newsletter Form */}
        <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="email"
              placeholder="Enter your email"
              className="pl-10"
              required
            />
          </div>
          <Button
            type="submit"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            Subscribe
          </Button>
        </form>

        <p className="mt-4 text-sm text-white/70">
          Join 10,000+ subscribers. Unsubscribe anytime.
        </p>

        {/* Secondary CTA */}
        <div className="mt-12 flex flex-col items-center gap-4 border-t border-white/20 pt-8 sm:flex-row sm:justify-center">
          <p className="text-white">Ready to start shopping?</p>
          <Button
            asChild
            variant="secondary"
            size="lg"
            className="bg-white text-primary hover:bg-white/90"
          >
            <Link href="/products">Browse All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}