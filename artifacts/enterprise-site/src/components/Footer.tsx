import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-[#103152] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div>
          <h3 className="font-heading font-bold text-2xl mb-4">NeeSoft Private Limited</h3>
          <p className="text-white/80 max-w-sm">
            Engineering Software Solutions That Drive Business Growth.
          </p>
        </div>
        
        <div>
          <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="text-white/80 hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/about" className="text-white/80 hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/services" className="text-white/80 hover:text-white transition-colors">Services</Link></li>
            <li><Link href="/clients" className="text-white/80 hover:text-white transition-colors">Clients</Link></li>
            <li><Link href="/contact" className="text-white/80 hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-heading font-semibold text-lg mb-4">Contact Info</h4>
          <ul className="space-y-2 text-white/80">
            <li>info@neesoft.com</li>
            <li>+91 XXXXX XXXXX</li>
            <li>Chennai, Tamil Nadu, India</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/20 text-center text-white/60 text-sm">
        <p>© 2026 NeeSoft Private Limited. All Rights Reserved.</p>
      </div>
    </footer>
  );
}