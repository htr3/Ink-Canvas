import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star } from "lucide-react";

export function Testimonials() {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  const reviews = [
    {
      name: "Michael R.",
      text: "Absolutely the best shop in the city. The hygiene standards are hospital-grade, and the artistry is unmatched. Alex took my vague idea and turned it into a masterpiece.",
      rating: 5,
    },
    {
      name: "Jessica T.",
      text: "Got my first tattoo here and felt so comfortable. The vibe is edgy but welcoming. Sarah's line work is incredibly clean. Highly recommend!",
      rating: 5,
    },
    {
      name: "David K.",
      text: "Professional, clean, and talented. I've been to shops all over the world, and Ink & Iron stands out for their attention to detail and customer service.",
      rating: 5,
    },
  ];

  return (
    <div className="bg-secondary py-20 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">Client Stories</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {reviews.map((review, index) => (
              <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 pl-6">
                <div className="bg-background p-8 border border-white/5 h-full flex flex-col justify-between hover:border-primary/30 transition-colors duration-300">
                  <div className="flex gap-1 mb-4 text-primary">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic mb-6 leading-relaxed">"{review.text}"</p>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-wider text-sm">{review.name}</h4>
                    <span className="text-gray-500 text-xs uppercase">Verified Client</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
