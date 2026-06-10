import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#103152] text-white pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <img src="/neesoft-logo.png" alt="NeeSoft" className="h-10 w-auto mb-4" />
          <p className="text-white/55 text-sm leading-relaxed max-w-xs">
            Engineering software solutions that drive business growth and digital transformation.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Company</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/" className="text-white/65 hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/about" className="text-white/65 hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/services" className="text-white/65 hover:text-white transition-colors">Services</Link></li>
            <li><Link href="/clients" className="text-white/65 hover:text-white transition-colors">Clients</Link></li>
            <li><Link href="/contact" className="text-white/65 hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Services</h4>
          <ul className="space-y-2.5 text-sm text-white/65">
            <li>Custom Software Development</li>
            <li>Web Application Development</li>
            <li>Enterprise Solutions</li>
            <li>IT Consulting</li>
            <li>Maintenance &amp; Support</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="tel:+919840173006" className="flex items-start gap-2.5 text-white/65 hover:text-white transition-colors">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                <span>+91 98401 73006</span>
              </a>
            </li>
            <li>
              <a href="mailto:neesoft.support@gmail.com" className="flex items-start gap-2.5 text-white/65 hover:text-white transition-colors">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                <span>neesoft.support@gmail.com</span>
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-white/65">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <a
                href="https://www.google.com/maps/place/Neesoft/@12.9844427,80.2052472,15z/data=!4m10!1m2!2m1!1sThird+Floor,+No:3,+Velachery+Bypass+Rd,+Shashi+Nagar,+Velachery,+Chennai,+Tamil+Nadu+600042!3m6!1s0x3a525d907b12735b:0x1966c9468e235573!8m2!3d12.9844427!4d80.2232716!15sCltUaGlyZCBGbG9vciwgTm86MywgVmVsYWNoZXJ5IEJ5cGFzcyBSZCwgU2hhc2hpIE5hZ2FyLCBWZWxhY2hlcnksIENoZW5uYWksIFRhbWlsIE5hZHUgNjAwMDQykgEQc29mdHdhcmVfY29tcGFueeABAA!16s%2Fg%2F11j8l67y3_?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors leading-relaxed"
              >
                Third Floor, No:3, Velachery Bypass Rd,<br />
                Shashi Nagar, Velachery,<br />
                Chennai, Tamil Nadu 600042
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">
        <p>© 2026 NeeSoft Private Limited. All Rights Reserved.</p>
        <p>Chennai, Tamil Nadu, India</p>
      </div>
    </footer>
  );
}
