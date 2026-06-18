import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Clients", path: "/clients" },
  { name: "Contact Us", path: "/contact" },
];

const serviceLinks = [
  "Custom Software Development",
  "Enterprise Applications",
  "Mobile App Development",
  "Cloud Solutions",
  "AI & Automation",
  "Technology Consulting",
];

export function Footer() {
  return (
    <footer className="bg-[#0c1f33] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <img src="/neesoft-logo.png" alt="NeeSoft" className="h-9 w-auto mb-4 brightness-0 invert" />
            <p className="text-[0.8125rem] text-white/45 leading-relaxed mb-5 max-w-xs">
              NeeSoft is a software development and IT services company delivering enterprise technology solutions since 2008.
            </p>
            <div className="flex flex-col gap-2.5">
              <a href="tel:+919840173006" className="flex items-center gap-2 text-[0.8rem] text-white/45 hover:text-white/80 transition-colors">
                <Phone className="w-3.5 h-3.5 shrink-0" />
                +91 98401 73006
              </a>
              <a href="mailto:neesoft.support@gmail.com" className="flex items-center gap-2 text-[0.8rem] text-white/45 hover:text-white/80 transition-colors">
                <Mail className="w-3.5 h-3.5 shrink-0" />
                neesoft.support@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-white/35 mb-5">Company</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="text-[0.8125rem] text-white/55 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-white/35 mb-5">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s} className="text-[0.8125rem] text-white/55">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-white/35 mb-5">Contact</h4>
            <ul className="space-y-4">
              <li>
                <p className="text-[0.7rem] text-white/30 uppercase tracking-wide mb-0.5">Phone</p>
                <a href="tel:+919840173006" className="text-[0.8125rem] text-white/60 hover:text-white transition-colors">
                  +91 98401 73006
                </a>
              </li>
              <li>
                <p className="text-[0.7rem] text-white/30 uppercase tracking-wide mb-0.5">Email</p>
                <a href="mailto:neesoft.support@gmail.com" className="text-[0.8125rem] text-white/60 hover:text-white transition-colors break-all">
                  neesoft.support@gmail.com
                </a>
              </li>
              <li>
                <p className="text-[0.7rem] text-white/30 uppercase tracking-wide mb-1">Office</p>
                <a
                  href="https://www.google.com/maps/place/Neesoft/@12.9844427,80.2052472,15z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.8125rem] text-white/60 hover:text-white transition-colors leading-relaxed flex items-start gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                  <span>
                    Third Floor, No:3, Velachery Bypass Rd,<br />
                    Shashi Nagar, Velachery,<br />
                    Chennai, Tamil Nadu 600042
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[0.75rem] text-white/30">© 2026 NeeSoft Private Limited. All Rights Reserved.</p>
          <p className="text-[0.75rem] text-white/30">Chennai, Tamil Nadu, India</p>
        </div>
      </div>
    </footer>
  );
}
