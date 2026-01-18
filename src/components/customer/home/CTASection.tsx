import { Mail, Sparkles, ArrowRight, Check } from 'lucide-react';
import { useState } from 'react';

export function CTASection() {
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
    <section className="relative overflow-hidden py-20">
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

            {/* Features */}
            <div className="mb-12 grid gap-4 text-left sm:grid-cols-3">
              {[
                { icon: '📚', title: 'Weekly Picks', desc: 'Curated book recommendations' },
                { icon: '🎁', title: 'Exclusive Deals', desc: 'Up to 40% off for subscribers' },
                { icon: '⚡', title: 'Early Access', desc: 'First to know about new arrivals' },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="group rounded-xl bg-white/10 p-4 backdrop-blur-md ring-1 ring-white/20 transition-all hover:bg-white/20 hover:scale-105"
                >
                  <div className="mb-2 text-3xl">{feature.icon}</div>
                  <h3 className="mb-1 font-semibold text-white">{feature.title}</h3>
                  <p className="text-sm text-white/70">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* Secondary CTA */}
            <div className="flex flex-col items-center gap-4 border-t border-white/20 pt-8 sm:flex-row sm:justify-center">
              <p className="text-lg text-white/90">Ready to start shopping?</p>
              <a
                href="/products"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-blue-700 shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
              >
                Browse All Products
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
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
  );
}