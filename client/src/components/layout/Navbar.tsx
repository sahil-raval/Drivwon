import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useAudio } from "@/lib/audio";
import logo from "@/assets/logo.png";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/quotation", label: "Get Quote" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const { playHover, playClick } = useAudio();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-background/80 backdrop-blur-md border-white/10" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link
  href="/"
  className="flex items-center text-2xl font-display font-bold tracking-tighter text-white hover:text-primary transition-colors cursor-pointer"
  onMouseEnter={playHover}
  onClick={playClick}
>
<img
  src={logo}
  alt="Drivwon Logo"
  className="inline-block h-8 w-auto mr-2 flex-shrink-0"
/>
</Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={cn(
                  "text-sm font-medium tracking-wide transition-all hover:text-primary relative group cursor-pointer",
                  location === link.href ? "text-primary" : "text-muted-foreground"
                )}
                onMouseEnter={playHover}
                onClick={playClick}
              >
                {link.label}
                <span className={cn(
                  "absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300",
                  location === link.href ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </a>
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => {
            setIsOpen(!isOpen);
            playClick();
          }}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-white/10 p-6 flex flex-col gap-4"
        >
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={cn(
                  "text-lg font-display font-medium cursor-pointer",
                  location === link.href ? "text-primary" : "text-white"
                )}
                onClick={() => {
                  setIsOpen(false);
                  playClick();
                }}
              >
                {link.label}
              </a>
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
