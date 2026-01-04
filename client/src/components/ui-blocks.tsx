import { motion } from "framer-motion";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface ArtistCardProps {
  name: string;
  role: string;
  image: string;
  specialties: string[];
}

export function ArtistCard({ name, role, image, specialties }: ArtistCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative"
    >
      <div className="aspect-[3/4] overflow-hidden bg-gray-900 relative">
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
        />
        
        {/* Overlay Content */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100">
          <h3 className="text-2xl font-heading font-bold text-white mb-1">{name}</h3>
          <p className="text-primary text-xs uppercase tracking-widest font-bold mb-4">{role}</p>
          <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            {specialties.map((spec) => (
              <span key={spec} className="px-2 py-1 bg-white/10 backdrop-blur-sm text-[10px] uppercase text-gray-300 border border-white/10">
                {spec}
              </span>
            ))}
          </div>
          <Link 
            href="/contact"
            className="inline-block w-full py-3 bg-white text-black text-center text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100 hover:bg-primary"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

interface GalleryItem {
  id: string;
  image: string;
  category: string;
}

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [filter, setFilter] = useState("all");
  // Fix: Use Array.from to avoid iteration issues with Set in some TS configs
  const categories = ["all", ...Array.from(new Set(items.map(i => i.category)))];

  const filteredItems = filter === "all" ? items : items.filter(i => i.category === filter);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={cn(
              "px-6 py-2 text-xs uppercase tracking-widest border transition-all duration-300",
              filter === cat 
                ? "bg-primary border-primary text-black font-bold" 
                : "border-white/20 text-gray-400 hover:border-white hover:text-white"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredItems.map((item) => (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={item.id}
            className="aspect-square relative group overflow-hidden bg-secondary cursor-pointer"
          >
            <img 
              src={item.image} 
              alt={item.category} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-primary text-sm uppercase tracking-widest font-bold border-b border-primary pb-1">View Detail</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
