// import { Link } from 'react-router-dom';

import { BookOpen, Mail, Phone, MapPin } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="page-container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <BookOpen className="h-8 w-8" />
              <span className="font-display text-2xl font-bold">Library</span>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Your destination for books and quality stationery. Discover stories that inspire
              and tools that help you create.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Shop All', 'Fiction', 'Non-Fiction', 'Stationery', 'Gift Cards'].map(
                (link) => (
                  <li key={link}>
                    <Link
                      href="/products"
                      className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              {['Track Order', 'Shipping Info', 'Returns', 'FAQ', 'Contact Us'].map(
                (link) => (
                  <li key={link}>
                    <Link
                      href="/"
                      className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>123 Book Street, Reading City, RC 12345</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Mail className="h-4 w-4 shrink-0" />
                <span>hello@library.com</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>© 2024 Library. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-primary-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
