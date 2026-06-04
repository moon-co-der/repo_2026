import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Box } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Clients", path: "/clients" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Box className={`w-6 h-6 ${isScrolled ? "text-primary" : "text-primary md:text-white"}`} />
          <span className={`font-heading font-bold text-2xl tracking-tight ${isScrolled ? "text-primary" : "text-primary md:text-white"}`}>
            NeeSoft
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                location === link.path 
                  ? "text-blue-500" 
                  : isScrolled 
                    ? "text-foreground" 
                    : "text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact" data-testid="nav-contact-btn">
            <Button className="bg-[#103152] hover:bg-[#103152]/90 text-white transition-transform hover:scale-105">
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-testid="mobile-menu-btn"
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-primary" : "text-primary"} />
          ) : (
            <Menu className={isScrolled ? "text-primary" : "text-primary md:text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl flex flex-col py-4 px-6 md:hidden slide-down">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`py-3 text-lg font-medium border-b border-gray-100 ${
                location === link.path ? "text-blue-500" : "text-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4">
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full bg-[#103152] hover:bg-[#103152]/90 text-white">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}