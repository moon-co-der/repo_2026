import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
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
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isTransparent ? "bg-transparent py-4" : "bg-white shadow-sm border-b border-gray-100 py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center"
          onClick={() => {
            if (window.location.pathname === "/") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <img
            src="/neesoft-logo.png"
            alt="NeeSoft"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-sm font-medium transition-colors ${
                location === link.path
                  ? isTransparent ? "text-white" : "text-[#103152]"
                  : isTransparent ? "text-white/80 hover:text-white" : "text-gray-600 hover:text-[#103152]"
              }`}
              onClick={() => {
                if (window.location.pathname === link.path) {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact" data-testid="nav-contact-btn">
            <Button className="bg-[#103152] hover:bg-[#103152]/90 text-white text-sm h-9 px-5">
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-testid="mobile-menu-btn"
        >
          {isMobileMenuOpen ? (
            <X className={`w-5 h-5 ${isTransparent ? "text-white" : "text-[#103152]"}`} />
          ) : (
            <Menu className={`w-5 h-5 ${isTransparent ? "text-white" : "text-[#103152]"}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg flex flex-col py-3 px-6 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => {
                setIsMobileMenuOpen(false);
                if (window.location.pathname === link.path) {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className={`py-3 text-sm font-medium border-b border-gray-50 ${
                location === link.path ? "text-[#103152]" : "text-gray-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 pb-2">
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full bg-[#103152] hover:bg-[#103152]/90 text-white text-sm">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
