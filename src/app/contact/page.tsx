"use client"

import { Mail, Phone, MapPin, Clock, Send, MessageSquare, HelpCircle } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -left-40 top-0 h-96 w-96 animate-pulse rounded-full bg-white blur-3xl"></div>
          <div className="absolute -right-40 bottom-0 h-96 w-96 animate-pulse rounded-full bg-white blur-3xl" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container relative mx-auto px-4 max-w-7xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
            <MessageSquare className="h-4 w-4" />
            Get in Touch
          </div>
          <h1 className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            We'd Love to Hear From You
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/90 md:text-xl">
            Have a question about our products? Need help with an order? Our team is here to assist you.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="container mx-auto px-4 max-w-7xl -mt-10">
        <div className="grid gap-6 md:grid-cols-3 mb-16">
          {[
            {
              icon: Mail,
              title: 'Email Us',
              content: 'hello@library.com',
              subtext: 'We reply within 24 hours',
              color: 'from-blue-500 to-blue-600',
            },
            {
              icon: Phone,
              title: 'Call Us',
              content: '+1 (555) 123-4567',
              subtext: 'Mon-Fri, 9am-6pm EST',
              color: 'from-purple-500 to-purple-600',
            },
            {
              icon: MapPin,
              title: 'Visit Us',
              content: '123 Book Street',
              subtext: 'New York, NY 10001',
              color: 'from-pink-500 to-pink-600',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-200 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} shadow-lg`}>
                <item.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mb-1 text-lg font-medium text-slate-700">{item.content}</p>
              <p className="text-sm text-slate-500">{item.subtext}</p>
              <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r opacity-0 transition-opacity group-hover:opacity-100" style={{ backgroundImage: `linear-gradient(to right, ${item.color.split(' ')[1]}, ${item.color.split(' ')[2]})` }}></div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="container mx-auto px-4 max-w-7xl pb-20">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-200 md:p-10">
              <h2 className="mb-2 text-3xl font-bold text-slate-900">Send us a Message</h2>
              <p className="mb-8 text-slate-600">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              {isSubmitted && (
                <div className="mb-6 rounded-lg bg-green-50 p-4 ring-1 ring-green-200">
                  <p className="flex items-center gap-2 text-green-800">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-200 text-sm">✓</span>
                    Thank you! Your message has been sent successfully.
                  </p>
                </div>
              )}

              <div className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  >
                    <option value="">Select a subject</option>
                    <option value="order">Order Inquiry</option>
                    <option value="product">Product Question</option>
                    <option value="shipping">Shipping & Delivery</option>
                    <option value="return">Returns & Refunds</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="group flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Business Hours */}
            <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Business Hours</h3>
              </div>
              <div className="space-y-3 text-sm">
                {[
                  { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM' },
                  { day: 'Saturday', time: '10:00 AM - 4:00 PM' },
                  { day: 'Sunday', time: 'Closed' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between border-b border-slate-100 pb-3 last:border-0">
                    <span className="font-medium text-slate-700">{item.day}</span>
                    <span className="text-slate-600">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Link */}
            <div className="rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 p-6 text-white shadow-lg">
              <div className="mb-4 flex items-center gap-3">
                <HelpCircle className="h-8 w-8" />
                <h3 className="text-xl font-semibold">Need Quick Help?</h3>
              </div>
              <p className="mb-4 text-white/90">
                Check out our FAQ section for instant answers to common questions.
              </p>
              <a
                href="/faq"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-purple-600 transition-transform hover:scale-105"
              >
                Visit FAQ
                <span>→</span>
              </a>
            </div>

            {/* Map Placeholder */}
            <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200">
              <div className="h-64 bg-gradient-to-br from-slate-200 to-slate-300">
                <div className="flex h-full items-center justify-center text-slate-500">
                  <MapPin className="h-12 w-12" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}