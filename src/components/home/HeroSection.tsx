// import { Link } from 'react-router-dom';
"use client"
import { CategoryCard } from "@/app/(customer)/shared/CategoryCard";
import { ProductCard } from "@/app/(customer)/shared/ProductCard";
import { CustomerLayout } from "@/components/layout/CustomerLayout";
import { Button } from "@/components/ui/button";
import { useProductStore } from "@/store/product-store";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Pencil, Shield, Truck } from "lucide-react";
import Link from "next/link";
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, SetStateAction } from 'react';
  
import { Mail, Sparkles,  Check } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders over $50",
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "100% protected transactions",
  },
  {
    icon: BookOpen,
    title: "Quality Selection",
    description: "Curated collection of books",
  },
  {
    icon: Pencil,
    title: "Premium Stationery",
    description: "Finest writing instruments",
  },
];

export default function HeroSection() {
  const { getFeaturedProducts, getBestsellers, categories } = useProductStore();
  const featuredProducts = getFeaturedProducts().slice(0, 4);
  const bestsellers = getBestsellers().slice(0, 4);

  


const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Book Enthusiast',
    content: 'Library has become my go-to destination for discovering new books. The curated selection is outstanding, and the quality of their products is unmatched.',
    rating: 5,
    image: 'SJ',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Professional Writer',
    content: 'As a writer, I need quality stationery. Library delivers every time. Their notebooks are perfect, and the customer service is exceptional.',
    rating: 5,
    image: 'MC',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Teacher',
    content: 'I order classroom supplies from Library regularly. Fast shipping, great prices, and the selection is perfect for educators. Highly recommend!',
    rating: 5,
    image: 'ER',
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'College Student',
    content: 'Best place to get textbooks and study materials. The prices are reasonable and shipping is incredibly fast. Saved me so much money this semester!',
    rating: 5,
    image: 'DT',
  },
  {
    id: 5,
    name: 'Lisa Martinez',
    role: 'Graphic Designer',
    content: 'The art supplies section is amazing! High-quality products at competitive prices. Their customer support helped me find exactly what I needed.',
    rating: 5,
    image: 'LM',
  },
  {
    id: 6,
    name: 'James Wilson',
    role: 'Business Owner',
    content: 'I furnish our entire office with supplies from Library. Bulk ordering is easy, and the quality consistency is impressive. Highly professional service!',
    rating: 5,
    image: 'JW',
  },
  {
    id: 7,
    name: 'Rachel Green',
    role: 'Parent & Homeschooler',
    content: 'Perfect for homeschooling materials! Wide variety of educational books and supplies. My kids love the selection, and I love the convenience.',
    rating: 5,
    image: 'RG',
  },
  {
    id: 8,
    name: 'Alex Kumar',
    role: 'Software Engineer',
    content: 'Great selection of tech books and coding references. Fast delivery and excellent packaging. Been a loyal customer for over 2 years now!',
    rating: 5,
    image: 'AK',
  },
];


  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide every 4 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: SetStateAction<number>) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 3000);
  };


  return (
    <CustomerLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1920')] bg-cover bg-center opacity-10" />
        <div className="page-container relative max-w-7xl mx-auto ">
          <div className="py-20 md:py-32 lg:py-40 max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Discover Stories That <span className="text-accent-foreground!">Inspire</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed"
            >
              Explore our curated collection of books and premium stationery.
              From bestselling novels to artisan journals, find everything you
              need to feed your imagination.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" variant="secondary" asChild>
                <Link href="/products">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
                asChild
              >
                <Link href="/products?category=fiction">Browse Books</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-b bg-secondary/50">
        <div className="page-container py-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <feature.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-medium text-sm">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding">
        <div className="page-container max-w-7xl mx-auto py-20">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="font-display text-3xl font-bold mb-2">
                Shop by Category
              </h2>
              <p className="text-muted-foreground">
                Find exactly what you&apos;re looking for
              </p>
            </div>
            <Button variant="ghost" asChild className="hidden sm:inline-flex">
              <Link href="/products">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.slice(0, 6).map((category, index) => (
              <CategoryCard
                key={category.id}
                category={category}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-secondary/30">
        <div className="page-container max-w-7xl mx-auto py-10">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="font-display text-3xl font-bold mb-2">
                Featured Products
              </h2>
              <p className="text-muted-foreground">
                Hand-picked selections for you
              </p>
            </div>
            <Button variant="ghost" asChild className="hidden sm:inline-flex">
              <Link href="/products">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="section-padding">
        <div className="page-container max-w-7xl mx-auto py-20">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="font-display text-3xl font-bold mb-2">
                Bestsellers
              </h2>
              <p className="text-muted-foreground">Our most loved products</p>
            </div>
            <Button variant="ghost" asChild className="hidden sm:inline-flex">
              <Link href="/products">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {bestsellers.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

    <section className="relative overflow-hidden bg-linear-to-br from-slate-50 via-blue-50/30 to-amber-50/20 py-16">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-blue-300 blur-3xl"></div>
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-amber-300 blur-3xl"></div>
      </div>

      <div className="container relative mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700">
            <Star className="h-4 w-4 fill-blue-600" />
            Testimonials
          </div>
          <h2 className="font-serif text-3xl font-bold text-slate-900 md:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-3 text-slate-600">
            Trusted by thousands of readers and creators worldwide
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 z-10 -translate-x-4 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg ring-1 ring-slate-900/10 transition-all hover:scale-110 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 md:-translate-x-12"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 text-slate-700" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-4 rounded-full bg-white p-3 shadow-lg ring-1 ring-slate-900/10 transition-all hover:scale-110 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 md:translate-x-12"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 text-slate-700" />
          </button>

          {/* Testimonial Cards */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full shrink-0 px-2"
                >
                  <div className="group relative mx-auto max-w-2xl">
                    <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-xl ring-1 ring-slate-900/5 transition-all duration-300 hover:shadow-2xl md:p-10">
                      {/* Quote Icon */}
                      <div className="absolute -right-4 -top-4 opacity-5">
                        <Quote className="h-32 w-32 text-slate-900" />
                      </div>

                      {/* Stars */}
                      <div className="mb-6 flex justify-center gap-1">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>

                      {/* Content */}
                      <blockquote className="relative mb-8 text-center text-lg leading-relaxed text-slate-700 md:text-xl">
                        <span className="font-serif text-3xl text-slate-400"></span>
                        {testimonial.content}
                        <span className="font-serif text-3xl text-slate-400"></span>
                      </blockquote>

                      {/* Author */}
                      <div className="flex items-center justify-center gap-4 border-t border-slate-100 pt-6">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-blue-600 to-blue-700 text-lg font-semibold text-white shadow-lg">
                          {testimonial.image}
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-slate-900">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-slate-500">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>

                      {/* Accent line */}
                      <div className="absolute bottom-0 left-0 h-1 w-full bg-linear-to-r from-blue-600 via-blue-400 to-amber-400"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-blue-600'
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Auto-play indicator */}
        <div className="mt-6 text-center">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-sm text-slate-500 hover:text-slate-700 transition-colors"
          >
            {isAutoPlaying ? '⏸ Pause auto-play' : '▶ Resume auto-play'}
          </button>
        </div>
      </div>
    </section>

    {/* cta  */}


    <section className="relative overflow-hidden pt-20 pb-10">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[#193366]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -left-40 top-0 h-96 w-96 animate-pulse rounded-full bg-pink-500 blur-3xl"></div>
          <div className="absolute -right-40 bottom-0 h-96 w-96 animate-pulse rounded-full bg-cyan-500 blur-3xl" style={{ animationDelay: '1s' }}></div>
          <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-amber-500 blur-3xl" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[10%] top-[20%] h-20 w-20 animate-float rounded-lg bg-white/10 backdrop-blur-sm" style={{ animationDelay: '0s' }}></div>
        <div className="absolute right-[15%] top-[60%] h-16 w-16 animate-float rounded-full bg-white/10 backdrop-blur-sm" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute left-[70%] top-[30%] h-12 w-12 animate-float rounded-lg bg-white/10 backdrop-blur-sm" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          {/* Main Content */}
          <div className="text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-md ring-1 ring-white/30">
              <Sparkles className="h-4 w-4 animate-pulse fill-amber-300 text-amber-300" />
              Join Our Community
            </div>

            {/* Heading */}
            <h2 className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Get Exclusive Book Deals
              <span className="block mt-2 bg-linear-to-r from-amber-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                Delivered to Your Inbox
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mb-10 max-w-2xl text-lg text-white/90 md:text-xl">
              Join 10,000+ readers and get early access to new arrivals, exclusive discounts, and personalized book recommendations every week.
            </p>

            {/* Newsletter Form */}
            <div className="mx-auto mb-8 max-w-md">
              <div className="group relative">
                <div className="absolute -inset-1 rounded-2xl bg-linear-to-r from-pink-400 via-purple-400 to-cyan-400 opacity-75 blur-lg transition-all duration-500 group-hover:opacity-100 group-focus-within:opacity-100"></div>
                
                <div className="relative flex flex-col gap-3 rounded-2xl bg-white p-2 sm:flex-row">
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="h-12 w-full rounded-xl border-0 bg-slate-50 pl-12 pr-4 text-slate-900 placeholder-slate-400 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitted}
                    className="group/btn relative h-12 overflow-hidden rounded-xl bg-linear-to-r from-blue-600 to-purple-600 px-8 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitted ? (
                        <>
                          <Check className="h-5 w-5" />
                          Subscribed!
                        </>
                      ) : (
                        <>
                          Subscribe
                          <ArrowRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 -z-10 bg-linear-to-r from-purple-600 to-pink-600 opacity-0 transition-opacity group-hover/btn:opacity-100"></div>
                  </button>
                </div>
              </div>

              <p className="mt-4 text-sm text-white/70">
                🔒 No spam, ever. Unsubscribe with one click.
              </p>
            </div>                
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) rotate(5deg);
          }
          50% {
            transform: translateY(-40px) rotate(-5deg);
          }
          75% {
            transform: translateY(-20px) rotate(3deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  
    </CustomerLayout>
  );
}
