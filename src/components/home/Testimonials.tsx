import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, SetStateAction } from 'react';

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

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide every 4 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

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

  return (
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
  );
}