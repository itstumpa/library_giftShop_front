import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Book Enthusiast',
    content:
      'Library has become my go-to destination for discovering new books. The curated selection is outstanding, and the quality of their products is unmatched.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Professional Writer',
    content:
      'As a writer, I need quality stationery. Library delivers every time. Their notebooks are perfect, and the customer service is exceptional.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Teacher',
    content:
      'I order classroom supplies from Library regularly. Fast shipping, great prices, and the selection is perfect for educators. Highly recommend!',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-3 text-muted-foreground">
            Trusted by thousands of readers and creators
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-card">
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-accent text-accent"
                    />
                  ))}
                </div>

                 {/* Content */}
               <div
  dangerouslySetInnerHTML={{
    __html: `&quot;${testimonial.content}&quot;`
  }}
/>


                {/* Author */}
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}