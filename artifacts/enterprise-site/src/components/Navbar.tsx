import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-200 ${isScrolled ? "shadow-sm" : ""} bg-white border-b border-gray-100`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center h-16">
        <Link href="/" className="flex items-center gap-2">
          <img src="/neesoft-logo.png" alt="NeeSoft" className="h-9 w-auto object-contain" />
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-[0.8125rem] font-medium transition-colors ${
                location === link.path ? "text-[#103152]" : "text-gray-500 hover:text-[#103152]"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact">
            <span className="inline-flex items-center h-9 px-5 rounded bg-[#103152] hover:bg-[#0d2740] text-white text-[0.8125rem] font-semibold transition-colors">
              Contact Us
            </span>
          </Link>
        </div>

        <button className="md:hidden p-1.5 text-gray-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-6 py-3.5 text-sm border-b border-gray-50 font-medium ${
                location === link.path ? "text-[#103152]" : "text-gray-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="px-6 py-4">
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="block w-full text-center h-10 leading-10 rounded bg-[#103152] text-white text-sm font-semibold">
                Contact Us
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
