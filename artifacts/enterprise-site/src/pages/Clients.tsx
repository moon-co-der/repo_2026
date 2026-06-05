import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, ArrowRight } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Button } from "@/components/ui/button";

export default function Clients() {
  const clients = [
    { name: "Renault Nissan", industry: "Automotive", abbr: "RN" },
    { name: "Tata Sky", industry: "Media & Entertainment", abbr: "TS" },
    { name: "Aviva", industry: "Financial Services", abbr: "AV" },
    { name: "VFS Global", industry: "Customer Services", abbr: "VG" },
    { name: "Sundaram Finance", industry: "NBFC & Finance", abbr: "SF" },
    { name: "TVS Group", industry: "Automotive", abbr: "TVS" },
    { name: "Murugappa Group", industry: "Conglomerate", abbr: "MG" },
    { name: "RANE Group", industry: "Auto Components", abbr: "RG" },
    { name: "Amalgamations", industry: "Industrial", abbr: "AM" },
    { name: "EID Parry", industry: "Agri-Business", abbr: "EP" },
    { name: "Carborundum Universal", industry: "Manufacturing", abbr: "CU" },
    { name: "Cholamandalam", industry: "Financial Services", abbr: "CH" },
  ];

  const accentColors = [
    "border-l-blue-400",
    "border-l-orange-400",
    "border-l-emerald-400",
    "border-l-violet-400",
    "border-l-amber-400",
    "border-l-sky-400",
    "border-l-rose-400",
    "border-l-teal-400",
    "border-l-indigo-400",
    "border-l-lime-400",
    "border-l-cyan-400",
    "border-l-fuchsia-400",
  ];

  return (
    <div className="w-full pt-20">
      {/* Page Hero */}
      <section className="bg-[#103152] py-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <h1 className="text-[1.75rem] md:text-[2.25rem] font-semibold mb-2">Our Clients</h1>
          <p className="text-base text-white/60 max-w-xl mb-4">
            Long-term partnerships built on trust, expertise, and the consistent delivery of technology solutions that create real business value.
          </p>
          <div className="flex items-center text-sm text-white/50">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-1.5" />
            <span className="text-white/80">Clients</span>
          </div>
        </div>
      </section>

      {/* Trusted By Section — Logo Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-sky-600 mb-2">Trusted By Leading Organizations</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">Organizations We've Served</h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              We are proud to partner with businesses across industries, delivering reliable software solutions that drive growth, efficiency, and innovation.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {clients.map((client, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04 }}
                className={`bg-white border border-gray-100 border-l-4 ${accentColors[idx]} rounded-lg p-4 hover:shadow-md hover:border-gray-200 transition-all duration-200 cursor-default flex flex-col justify-between min-h-[90px]`}
              >
                <div className="text-[0.8rem] font-bold text-gray-900 leading-snug">{client.name}</div>
                <div className="text-[0.65rem] font-medium text-gray-400 uppercase tracking-wide mt-2">{client.industry}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="py-16 bg-[#103152] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-white/70">Our Track Record</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { target: 15, suffix: "+", label: "Years Experience", color: "text-sky-400", bg: "bg-sky-400/10 border-sky-400/20" },
              { target: 100, suffix: "+", label: "Successful Projects", color: "text-emerald-400", bg: "bg-emerald-400/10 border-emerald-400/20" },
              { target: 50, suffix: "+", label: "Business Clients", color: "text-violet-400", bg: "bg-violet-400/10 border-violet-400/20" },
              { target: 98, suffix: "%", label: "Client Satisfaction", color: "text-amber-400", bg: "bg-amber-400/10 border-amber-400/20" }
            ].map((stat) => (
              <div key={stat.label} className={`rounded-xl border p-5 ${stat.bg}`}>
                <div className={`text-3xl md:text-4xl font-bold mb-1 ${stat.color}`}>
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </div>
                <div className="text-xs font-medium text-white/55 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-xl mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-2">Industry Expertise</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Sectors We Serve</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { label: "Automotive", icon: "🚗" },
              { label: "Financial Services", icon: "🏦" },
              { label: "Media & Entertainment", icon: "📺" },
              { label: "Manufacturing", icon: "🏭" },
              { label: "Retail & Distribution", icon: "🛒" },
              { label: "Healthcare", icon: "🏥" },
              { label: "Logistics & Supply Chain", icon: "🚢" },
              { label: "Technology", icon: "💻" },
            ].map((sector, idx) => (
              <div key={idx} className="bg-white border border-gray-100 rounded-lg p-4 flex items-center gap-3 hover:shadow-sm transition-shadow duration-200">
                <span className="text-xl">{sector.icon}</span>
                <span className="text-sm font-medium text-gray-700">{sector.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-white border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">Ready to Become Our Next Success Story?</h2>
          <p className="text-sm text-gray-500 mb-6">Let's discuss how NeeSoft can help your business achieve its technology goals.</p>
          <Link href="/contact" data-testid="clients-cta-btn">
            <Button size="lg" className="bg-[#103152] hover:bg-[#103152]/90 text-white text-base h-12 px-8 font-semibold">
              Get In Touch <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
