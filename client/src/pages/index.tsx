import { Navbar, Footer } from "@/components/layout";
import { Hero } from "@/components/Hero";
import { ArtistCard, GalleryGrid } from "@/components/ui-blocks";
import { Testimonials } from "@/components/Testimonials";
import { BookingForm } from "@/components/BookingForm";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Palette, PenTool, ShieldCheck, Clock } from "lucide-react";
import { Link } from "wouter";

// Import real tattoo images from the uploaded assets
import tattoo1 from "@assets/generated_images/tattoo pics/WhatsApp Image 2026-01-04 at 13.58.58.jpeg";
import tattoo2 from "@assets/generated_images/tattoo pics/WhatsApp Image 2026-01-04 at 13.58.59.jpeg";
import tattoo3 from "@assets/generated_images/tattoo pics/WhatsApp Image 2026-01-04 at 14.02.13.jpeg";
import tattoo4 from "@assets/generated_images/tattoo pics/WhatsApp Image 2026-01-04 at 14.02.34.jpeg";
import tattoo5 from "@assets/generated_images/tattoo pics/WhatsApp Image 2026-01-04 at 14.02.49.jpeg";
import tattoo6 from "@assets/generated_images/tattoo pics/WhatsApp Image 2026-01-04 at 14.02.59.jpeg";
import tattoo7 from "@assets/generated_images/tattoo pics/WhatsApp Image 2026-01-04 at 14.03.30.jpeg";
import tattoo8 from "@assets/generated_images/tattoo pics/WhatsApp Image 2026-01-04 at 14.04.41.jpeg";
import tattoo9 from "@assets/generated_images/tattoo pics/WhatsApp Image 2026-01-04 at 14.05.25.jpeg";
import tattoo10 from "@assets/generated_images/tattoo pics/WhatsApp Image 2026-01-04 at 14.05.48.jpeg";
import tattoo11 from "@assets/generated_images/tattoo pics/WhatsApp Image 2026-01-04 at 14.09.07 (1).jpeg";
import tattoo12 from "@assets/generated_images/tattoo pics/WhatsApp Image 2026-01-04 at 14.09.08.jpeg";

// Import artist images
import artist1 from "@assets/generated_images/tattoo pics/tattoo_artist_portrait.jpeg";
import artist2 from "@assets/generated_images/tattoo pics/tattoo_artist_portrait1.jpeg";

export function Home() {
  const featuredWorks = [
    { id: "1", image: tattoo1, category: "Realism" },
    { id: "2", image: tattoo2, category: "Black & Grey" },
    { id: "3", image: tattoo3, category: "Custom" },
    { id: "4", image: tattoo4, category: "Realism" },
    { id: "5", image: tattoo5, category: "Portrait" },
    { id: "6", image: tattoo6, category: "Fine Line" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      {/* Intro Section */}
      <section className="py-24 px-6 container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-primary uppercase tracking-widest text-sm font-bold mb-4">The Studio</h2>
          <h3 className="text-3xl md:text-5xl font-heading font-black text-white mb-8">
            WHERE TRADITION MEETS <br /> MODERN ARTISTRY
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            Founded in 2015, Ink & Iron has established itself as the premier destination for custom tattoo art. 
            We reject the assembly-line mentality. Every piece is a collaboration, every session a ritual. 
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: ShieldCheck, label: "Sterile Env" },
              { icon: Palette, label: "Custom Art" },
              { icon: PenTool, label: "Top Equipment" },
              { icon: Clock, label: "By Appt Only" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary border border-white/5">
                  <item.icon size={24} />
                </div>
                <span className="text-white text-xs font-bold uppercase tracking-wider">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Featured Works */}
      <section className="py-24 bg-secondary/30 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">Recent Masterpieces</h2>
              <p className="text-gray-400 text-sm">A glimpse into our recent portfolio</p>
            </div>
            <Link 
              href="/gallery"
              className="hidden md:flex items-center gap-2 text-primary hover:text-white transition-colors text-sm uppercase font-bold tracking-wider"
            >
              View Full Gallery <ArrowRight size={16} />
            </Link>
          </div>
          <GalleryGrid items={featuredWorks} />
        </div>
      </section>

      {/* Artists Teaser */}
      <section className="py-24 container mx-auto px-6">
         <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Meet the Artists</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Selected for their unique vision and technical mastery.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <ArtistCard 
            name="Harpal Singh Thakur" 
            role="Lead Artist / Owner" 
            image={artist1} 
            specialties={["Realism", "Black & Grey", "Portrait"]} 
          />
          <ArtistCard 
            name="Harpal Singh Thakur" 
            role="Senior Artist" 
            image={artist2} 
            specialties={["Neo-Traditional", "Color", "Fine Line"]} 
          />
        </div>
      </section>

      <Testimonials />
      <Footer />
    </div>
  );
}

export function About() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <Navbar />
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-8">The Philosophy</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Ink & Iron was born from a desire to elevate the tattoo experience. We believe that getting tattooed is a transformative process, and the environment should reflect that gravity.
            </p>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Our studio is designed to be a sanctuary for art. From the lighting to the music, every detail is curated to provide a comfortable, inspiring atmosphere for both client and artist.
            </p>
          </div>
          <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden border border-white/10">
             <img src={tattoo7} alt="Studio Work" className="w-full h-full object-cover opacity-80" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export function Contact() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <Navbar />
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-6">Booking</h1>
            <p className="text-gray-400 text-lg mb-12">
              Ready to start your project? Fill out the form below to request a consultation. 
            </p>
            
            <div className="space-y-8 mb-12">
              <div>
                <h3 className="text-white font-bold uppercase tracking-wider mb-2">Deposit Policy</h3>
                <p className="text-gray-500 text-sm">A non-refundable deposit is required to secure all appointments. This will be deducted from the final cost of your tattoo.</p>
              </div>
              <div>
                <h3 className="text-white font-bold uppercase tracking-wider mb-2">Walk-ins</h3>
                <p className="text-gray-500 text-sm">We operate primarily by appointment, but walk-ins are welcome on Saturdays on a first-come, first-served basis for smaller pieces.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-secondary/30 p-8 border border-white/5 backdrop-blur-sm">
            <BookingForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export function Gallery() {
  const allWorks = [
    { id: "1", image: tattoo1, category: "Realism" },
    { id: "2", image: tattoo2, category: "Black & Grey" },
    { id: "3", image: tattoo3, category: "Custom" },
    { id: "4", image: tattoo4, category: "Realism" },
    { id: "5", image: tattoo5, category: "Portrait" },
    { id: "6", image: tattoo6, category: "Fine Line" },
    { id: "7", image: tattoo7, category: "Custom" },
    { id: "8", image: tattoo8, category: "Realism" },
    { id: "9", image: tattoo9, category: "Portrait" },
    { id: "10", image: tattoo10, category: "Black & Grey" },
    { id: "11", image: tattoo11, category: "Color" },
    { id: "12", image: tattoo12, category: "Neo Traditional" },
  ];

  return (
    <div className="min-h-screen bg-background pt-24">
      <Navbar />
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-12 text-center">Portfolio</h1>
        <GalleryGrid items={allWorks} />
      </div>
      <Footer />
    </div>
  );
}

export function Services() {
  const services = [
    { title: "Custom Design", price: "150/hr", desc: "Unique pieces designed specifically for you. Includes consultation and revisions." },
    { title: "Flash Tattoo", price: "From 100", desc: "Pre-drawn designs available for walk-ins or quick appointments. Classic styling." },
    { title: "Cover-ups", price: "180/hr", desc: "Expert concealment of unwanted tattoos. Requires in-person consultation." },
    { title: "Touch-ups", price: "Free*", desc: "First touch-up is free within 3 months of your appointment for our work." },
  ];

  return (
    <div className="min-h-screen bg-background pt-24">
      <Navbar />
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-16 text-center">Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((s, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              key={i} 
              className="p-8 border border-white/10 hover:border-primary/50 transition-colors bg-secondary/20 group"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-heading font-bold text-white group-hover:text-primary transition-colors">{s.title}</h3>
                <span className="text-primary font-bold text-lg">{s.price}</span>
              </div>
              <p className="text-gray-400 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
