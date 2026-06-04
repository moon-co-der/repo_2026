import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, Star, ChevronLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Button } from "@/components/ui/button";

export default function Clients() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "NeeSoft delivered our enterprise platform on time and within budget. Their technical expertise and communication throughout the project was outstanding.",
      author: "Rajesh Kumar",
      role: "CTO",
      company: "Manufacturing Corp",
      color: "from-sky-500 to-blue-600"
    },
    {
      quote: "Working with NeeSoft transformed our digital operations. They understood our business challenges and delivered a solution that exceeded our expectations.",
      author: "Priya Mehta",
      role: "VP Technology",
      company: "Financial Services Ltd",
      color: "from-emerald-500 to-teal-600"
    },
    {
      quote: "The NeeSoft team brought deep technical knowledge and a collaborative approach that made our digital transformation successful.",
      author: "Arun Sharma",
      role: "Director IT",
      company: "Global Logistics Corp",
      color: "from-violet-500 to-purple-600"
    }
  ];

  const featuredClients = [
    { name: "Renault Nissan", industry: "Automotive", desc: "Supporting technology initiatives for a leading global automotive organization.", letter: "RN", iconBg: "bg-yellow-100", iconColor: "text-yellow-700", monogramHover: "group-hover:bg-yellow-500", tagBg: "bg-yellow-50 text-yellow-700" },
    { name: "Tata Sky", industry: "Media & Entertainment", desc: "Delivering software solutions that support digital service operations.", letter: "TS", iconBg: "bg-blue-100", iconColor: "text-blue-700", monogramHover: "group-hover:bg-blue-600", tagBg: "bg-blue-50 text-blue-700" },
    { name: "Aviva", industry: "Financial Services", desc: "Providing technology expertise within the financial and insurance sector.", letter: "A", iconBg: "bg-emerald-100", iconColor: "text-emerald-700", monogramHover: "group-hover:bg-emerald-600", tagBg: "bg-emerald-50 text-emerald-700" },
    { name: "VFS Global", industry: "Customer Services", desc: "Supporting technology-driven services for a global customer services organization.", letter: "VG", iconBg: "bg-violet-100", iconColor: "text-violet-700", monogramHover: "group-hover:bg-violet-600", tagBg: "bg-violet-50 text-violet-700" }
  ];

  const nextTestimonial = () => setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const accentColors = ["border-t-sky-500", "border-t-blue-500", "border-t-emerald-500", "border-t-violet-500"];

  return (
    <div className="w-full pt-20">
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-[#103152] to-[#1a4a7a] py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-blue-400 to-violet-400" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/30 text-amber-300 text-sm font-semibold uppercase tracking-widest mb-6">Our Partners</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Trusted By Businesses</h1>
          <p className="text-xl text-white/70 max-w-2xl mb-6">
            Our success is built on long-term partnerships and a commitment to delivering technology solutions that solve real business challenges.
          </p>
          <div className="flex items-center text-sm font-medium text-white/60">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white">Clients</span>
          </div>
        </div>
      </section>

      {/* Featured Clients */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-3 block">Featured Partnerships</span>
            <h2 className="text-3xl font-heading font-bold text-gray-900">Organizations We've Served</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredClients.map((client, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`bg-white p-8 rounded-2xl shadow-sm border border-gray-100 border-t-4 ${accentColors[idx]} hover:shadow-xl transition-all duration-300 group flex flex-col sm:flex-row gap-6 items-start`}
              >
                <div className={`w-20 h-20 ${client.iconBg} rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${client.monogramHover}`}>
                  <span className={`text-2xl font-heading font-black ${client.iconColor} group-hover:text-white transition-colors`}>{client.letter}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-1">{client.name}</h3>
                  <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full mb-4 uppercase tracking-wide ${client.tagBg}`}>
                    {client.industry}
                  </span>
                  <p className="text-gray-600 leading-relaxed">{client.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="py-20 bg-gradient-to-br from-[#103152] to-[#0d2a45] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-heading font-bold text-white/80">Numbers That Speak</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { target: 15, suffix: "+", label: "Years Experience", color: "text-sky-400", bg: "bg-sky-400/10 border-sky-400/20" },
              { target: 100, suffix: "+", label: "Successful Projects", color: "text-emerald-400", bg: "bg-emerald-400/10 border-emerald-400/20" },
              { target: 50, suffix: "+", label: "Business Clients", color: "text-violet-400", bg: "bg-violet-400/10 border-violet-400/20" },
              { target: 98, suffix: "%", label: "Client Satisfaction", color: "text-amber-400", bg: "bg-amber-400/10 border-amber-400/20" }
            ].map((stat) => (
              <div key={stat.label} className={`rounded-2xl border p-6 ${stat.bg}`}>
                <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}>
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-medium text-white/60 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-violet-600 mb-3 block">Client Stories</span>
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12">What Our Clients Say</h2>

          <div className="relative">
            {/* Testimonial Card */}
            <div className="bg-gray-50 rounded-2xl border border-gray-100 shadow-sm overflow-hidden min-h-[300px] flex items-center justify-center">
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${testimonials[activeTestimonial].color}`} />
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full p-8 md:p-12"
              >
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-xl md:text-2xl text-gray-800 italic font-medium leading-relaxed mb-8">
                  "{testimonials[activeTestimonial].quote}"
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonials[activeTestimonial].color} flex items-center justify-center text-white font-bold text-lg`}>
                    {testimonials[activeTestimonial].author[0]}
                  </div>
                  <div className="text-left">
                    <h4 className="font-heading font-bold text-gray-900">{testimonials[activeTestimonial].author}</h4>
                    <p className="text-gray-500 text-sm">{testimonials[activeTestimonial].role}, {testimonials[activeTestimonial].company}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Navigation */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-5 md:-left-7">
              <Button variant="outline" size="icon" className="rounded-full bg-white shadow-md hover:bg-gray-50 border-gray-200 w-10 h-10" onClick={prevTestimonial} data-testid="testim-prev">
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </Button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-5 md:-right-7">
              <Button variant="outline" size="icon" className="rounded-full bg-white shadow-md hover:bg-gray-50 border-gray-200 w-10 h-10" onClick={nextTestimonial} data-testid="testim-next">
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </Button>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((t, i) => (
              <button
                key={i}
                className={`transition-all duration-300 rounded-full ${activeTestimonial === i ? `w-8 h-3 bg-gradient-to-r ${t.color}` : "w-3 h-3 bg-gray-300 hover:bg-gray-400"}`}
                onClick={() => setActiveTestimonial(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-sky-50 to-violet-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">Ready to Become Our Next Success Story?</h2>
          <Link href="/contact" data-testid="clients-cta-btn">
            <Button size="lg" className="bg-[#103152] hover:bg-[#103152]/90 text-white h-12 px-8">
              Let's Talk <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
