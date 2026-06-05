import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Box } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isHome = location === "/";
  const isTransparent = isHome && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
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
        isTransparent ? "bg-transparent py-6" : "bg-white shadow-md py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Box className={`w-6 h-6 ${isTransparent ? "text-white" : "text-primary"}`} />
          <span className={`font-semibold text-lg tracking-tight ${isTransparent ? "text-white" : "text-primary"}`}>
            NeeSoft
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                location === link.path
                  ? isTransparent ? "text-blue-300" : "text-blue-600"
                  : isTransparent ? "text-white/90" : "text-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact" data-testid="nav-contact-btn">
            <Button className="bg-[#103152] hover:bg-[#103152]/90 text-white text-sm">
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
            <X className={isTransparent ? "text-white" : "text-primary"} />
          ) : (
            <Menu className={isTransparent ? "text-white" : "text-primary"} />
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
              className={`py-3 text-base font-medium border-b border-gray-100 ${
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