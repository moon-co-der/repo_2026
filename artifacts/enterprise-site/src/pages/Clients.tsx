import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Clients() {
  const clients = [
    { name: "Renault Nissan", industry: "Automotive", abbr: "RN", color: "#c8102e" },
    { name: "Tata Sky", industry: "Media & Entertainment", abbr: "TS", color: "#004f9f" },
    { name: "Aviva", industry: "Financial Services", abbr: "AV", color: "#009758" },
    { name: "VFS Global", industry: "Customer Services", abbr: "VG", color: "#d4002a" },
    { name: "Sundaram Finance", industry: "NBFC & Finance", abbr: "SF", color: "#003399" },
    { name: "TVS Group", industry: "Automotive", abbr: "TVS", color: "#e30613" },
    { name: "Murugappa Group", industry: "Conglomerate", abbr: "MG", color: "#0067b1" },
    { name: "RANE Group", industry: "Auto Components", abbr: "RG", color: "#cc0000" },
    { name: "Amalgamations", industry: "Industrial", abbr: "AM", color: "#1a5276" },
    { name: "EID Parry", industry: "Agri-Business", abbr: "EP", color: "#2e7d32" },
    { name: "Carborundum Universal", industry: "Manufacturing", abbr: "CU", color: "#bf360c" },
    { name: "Cholamandalam", industry: "Financial Services", abbr: "CH", color: "#1565c0" },
  ];

  const sectors = [
    "Automotive", "Financial Services", "Media & Entertainment",
    "Manufacturing", "Retail & Distribution", "Healthcare",
    "Logistics & Supply Chain", "Technology"
  ];

  return (
    <div className="w-full pt-20">

      {/* Page Header */}
      <section className="bg-[#103152] py-14 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex items-center text-[0.75rem] text-white/40 mb-4 gap-1.5">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Clients</span>
          </div>
          <h1 className="text-[1.625rem] md:text-[2rem] font-bold mb-2">Our Clients</h1>
          <p className="text-[0.875rem] text-white/55 max-w-xl">
            Long-term partnerships built on trust, expertise, and consistent delivery of technology solutions that create real business value.
          </p>
        </div>
      </section>

      {/* Client Logo Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[1.5rem] md:text-[1.75rem] font-bold text-gray-900 mb-2">Our Clients</h2>
            <p className="text-[0.875rem] text-gray-400">Organizations that trust NeeSoft to deliver technology solutions</p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-0 border-l border-t border-gray-100">
            {clients.map((client, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.035 }}
                className="border-r border-b border-gray-100 p-6 flex flex-col items-center justify-center gap-2 hover:bg-gray-50 transition-colors duration-150 cursor-default group min-h-[110px]"
              >
                {/* Logo mark */}
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-[0.75rem] font-bold shrink-0"
                  style={{ backgroundColor: client.color }}
                >
                  {client.abbr}
                </div>
                <div className="text-center">
                  <div className="text-[0.8rem] font-semibold text-gray-800 leading-tight">{client.name}</div>
                  <div className="text-[0.68rem] text-gray-400 mt-0.5">{client.industry}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors We Serve */}
      <section className="py-14 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-[1.25rem] md:text-[1.5rem] font-bold text-gray-900 mb-1">Industries We Serve</h2>
            <p className="text-[0.8125rem] text-gray-400">Deep domain experience across multiple sectors</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {sectors.map((sector, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white border border-gray-100 rounded-lg px-4 py-3 text-center hover:border-[#103152]/20 hover:shadow-sm transition-all duration-150"
              >
                <span className="text-[0.8125rem] font-medium text-gray-700">{sector}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[#103152] text-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: "15+", label: "Years of Experience" },
              { value: "100+", label: "Projects Delivered" },
              { value: "50+", label: "Business Clients" },
              { value: "98%", label: "Client Satisfaction" }
            ].map((s) => (
              <div key={s.label} className="bg-white/5 rounded-lg py-5 px-4 border border-white/10">
                <div className="text-2xl font-bold text-white mb-1">{s.value}</div>
                <div className="text-[0.75rem] text-white/50 uppercase tracking-wide font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-white border-t border-gray-100">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Become Our Next Success Story</h2>
          <p className="text-[0.875rem] text-gray-500 mb-6">Let's discuss how NeeSoft can help your business achieve its technology goals.</p>
          <Link href="/contact">
            <Button size="lg" className="bg-[#103152] hover:bg-[#103152]/90 text-white h-11 px-8 text-sm font-semibold">
              Get In Touch <ArrowRight className="ml-2 w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
