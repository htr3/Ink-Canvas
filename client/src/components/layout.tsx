import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Instagram, Facebook, Twitter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md py-4 shadow-lg border-b border-white/5" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link 
          href="/"
          className="text-2xl font-heading font-bold tracking-widest text-white hover:text-primary transition-colors"
        >
          INK & IRON
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors relative group ${
                location === link.href ? "text-primary" : "text-gray-300 hover:text-white"
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${location === link.href ? "w-full" : "w-0 group-hover:w-full"}`}></span>
            </Link>
          ))}
          <Link href="/contact">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black uppercase tracking-wider font-bold text-xs px-6">
              Book Now
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-heading tracking-wide ${
                    location === link.href ? "text-primary" : "text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/contact">
                <Button className="w-full bg-primary text-black hover:bg-primary/90 mt-4">
                  Book Appointment
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-secondary pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-heading font-bold text-white tracking-widest">INK & IRON</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium tattoo artistry in a modern, sterile environment. We transform your stories into permanent masterpieces.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider">Explore</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/about" className="hover:text-primary transition-colors">Our Artists</Link></li>
              <li><Link href="/gallery" className="hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services & Pricing</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>123 Ink Street, Art District</li>
              <li>New York, NY 10012</li>
              <li>+1 (555) 123-4567</li>
              <li>studio@inkandiron.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider">Hours</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex justify-between"><span>Mon - Fri</span> <span>11am - 8pm</span></li>
              <li className="flex justify-between"><span>Saturday</span> <span>10am - 9pm</span></li>
              <li className="flex justify-between"><span>Sunday</span> <span>Closed</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
          <p>&copy; {new Date().getFullYear()} Ink & Iron Tattoo Studio. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors"><Instagram size={18} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Facebook size={18} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Twitter size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
