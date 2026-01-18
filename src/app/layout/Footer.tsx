import {
  Facebook,
  Heart,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { Logo } from "../../components/shared/Logo";

const APP_NAME = "Library";
const CONTACT_EMAIL = "hello@library.com";
const CONTACT_PHONE = "+1 (555) 123-4567";

const footerLinks = {
  shop: [
    { name: "All Products", href: "/products" },
    { name: "Books", href: "/products?category=books" },
    { name: "Stationery", href: "/products?category=stationery" },
    { name: "New Arrivals", href: "/products?filter=new" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
  ],
  support: [
    { name: "Help Center", href: "/help" },
    { name: "Shipping Info", href: "/shipping" },
    { name: "Returns", href: "/returns" },
    { name: "FAQ", href: "/faq" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
};

export function Footer() {
  return (
    <footer className="relative bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500"></div>

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container relative mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand Section - Larger on desktop */}
          <div className="lg:col-span-4">
            <Link href="/" className="group inline-flex items-center space-x-3">
              <div className="">
                <Logo variant="white" />
              </div>
            </Link>

            <p className="mt-6 text-slate-400 leading-relaxed max-w-sm">
              Your trusted destination for quality books and premium stationery.
              Cultivating knowledge and creativity since 2024.
            </p>

            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-300">
                Stay Updated
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 rounded-lg bg-slate-800 px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none ring-1 ring-slate-700 transition-all focus:ring-2 focus:ring-blue-500"
                />
                <button className="rounded-lg bg-linear-to-r from-blue-500 to-purple-600 p-2.5 text-white transition-transform hover:scale-105">
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-3">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="group relative flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-slate-400 transition-all hover:bg-linear-to-br hover:from-blue-500 hover:to-purple-600 hover:text-white"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {/* Shop */}
            <div>
              <h3 className="mb-4 font-semibold text-white">Shop</h3>
              <ul className="space-y-3">
                {footerLinks.shop.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      <span className="h-px w-0 bg-linear-to-r from-blue-500 to-purple-500 transition-all group-hover:w-4 group-hover:mr-2"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="mb-4 font-semibold text-white">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      <span className="h-px w-0 bg-linear-to-r from-blue-500 to-purple-500 transition-all group-hover:w-4 group-hover:mr-2"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="mb-4 font-semibold text-white">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      <span className="h-px w-0 bg-linear-to-r from-blue-500 to-purple-500 transition-all group-hover:w-4 group-hover:mr-2"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-4 font-semibold text-white">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-slate-400">
                  <Mail className="h-5 w-5 shrink-0 text-blue-400" />
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="hover:text-white transition-colors"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-400">
                  <Phone className="h-5 w-5 shrink-0 text-purple-400" />
                  <a
                    href={`tel:${CONTACT_PHONE}`}
                    className="hover:text-white transition-colors"
                  >
                    {CONTACT_PHONE}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-400">
                  <MapPin className="h-5 w-5 shrink-0 text-pink-400" />
                  <span>
                    123 Book Street
                    <br />
                    New York, NY 10001
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-slate-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            {/* Copyright */}
            <p className="flex items-center gap-2 text-sm text-slate-400">
              © {new Date().getFullYear()} {APP_NAME}. Made with
              <Heart className="h-4 w-4 fill-red-500 text-red-500 animate-pulse" />
              <span>All rights reserved.</span>
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 opacity-50">
            <div className="text-xs text-slate-500">🔒 Secure Payment</div>
            <div className="text-xs text-slate-500">✓ SSL Encrypted</div>
            <div className="text-xs text-slate-500">📦 Free Shipping</div>
            <div className="text-xs text-slate-500">↩️ Easy Returns</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
