import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, Star, ChevronLeft } from "lucide-react";
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
      company: "Manufacturing Corp"
    },
    {
      quote: "Working with NeeSoft transformed our digital operations. They understood our business challenges and delivered a solution that exceeded our expectations.",
      author: "Priya Mehta",
      role: "VP Technology",
      company: "Financial Services Ltd"
    },
    {
      quote: "The NeeSoft team brought deep technical knowledge and a collaborative approach that made our digital transformation successful.",
      author: "Arun Sharma",
      role: "Director IT",
      company: "Global Logistics Corp"
    }
  ];

  const featuredClients = [
    { name: "Renault Nissan", industry: "Automotive", desc: "Supporting technology initiatives for a leading global automotive organization.", letter: "RN" },
    { name: "Tata Sky", industry: "Media and Entertainment", desc: "Delivering software solutions that support digital service operations.", letter: "TS" },
    { name: "Aviva", industry: "Financial Services", desc: "Providing technology expertise within the financial and insurance sector.", letter: "A" },
    { name: "VFS Global", industry: "Customer Services", desc: "Supporting technology-driven services for a global customer services organization.", letter: "VG" }
  ];

  const nextTestimonial = () => setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="w-full pt-20">
      {/* Page Hero */}
      <section className="bg-[#103152] py-16 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Trusted By Businesses</h1>
          <p className="text-xl text-white/80 max-w-2xl mb-6">
            Our success is built on long-term partnerships and a commitment to delivering technology solutions that solve real business challenges.
          </p>
          <div className="flex items-center text-sm font-medium text-white/70">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white">Clients</span>
          </div>
        </div>
      </section>

      {/* Featured Clients */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredClients.map((client, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:border-[#103152]/30 hover:shadow-lg transition-all duration-300 group flex flex-col sm:flex-row gap-6 items-start"
              >
                <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#103152] transition-colors">
                  <span className="text-2xl font-heading font-black text-gray-400 group-hover:text-white transition-colors">{client.letter}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-1">{client.name}</h3>
                  <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full mb-4 uppercase tracking-wide">
                    {client.industry}
                  </span>
                  <p className="text-gray-600">{client.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="py-20 bg-[#103152] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2"><AnimatedCounter target={15} suffix="+" /></div>
              <div className="text-sm font-medium text-white/70 uppercase tracking-wider">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2"><AnimatedCounter target={100} suffix="+" /></div>
              <div className="text-sm font-medium text-white/70 uppercase tracking-wider">Successful Projects</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2"><AnimatedCounter target={50} suffix="+" /></div>
              <div className="text-sm font-medium text-white/70 uppercase tracking-wider">Business Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2"><AnimatedCounter target={98} suffix="%" /></div>
              <div className="text-sm font-medium text-white/70 uppercase tracking-wider">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12">What Our Clients Say</h2>
          
          <div className="relative bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-100 shadow-sm min-h-[300px] flex items-center justify-center">
            <motion.div 
              key={activeTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-xl md:text-2xl text-gray-800 italic font-medium leading-relaxed mb-8">
                "{testimonials[activeTestimonial].quote}"
              </p>
              <div>
                <h4 className="font-heading font-bold text-gray-900 text-lg">{testimonials[activeTestimonial].author}</h4>
                <p className="text-gray-500">{testimonials[activeTestimonial].role}, {testimonials[activeTestimonial].company}</p>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6">
              <Button variant="outline" size="icon" className="rounded-full bg-white shadow-md hover:bg-gray-50 border-gray-200" onClick={prevTestimonial} data-testid="testim-prev">
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </Button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6">
              <Button variant="outline" size="icon" className="rounded-full bg-white shadow-md hover:bg-gray-50 border-gray-200" onClick={nextTestimonial} data-testid="testim-next">
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button 
                key={i} 
                className={`w-3 h-3 rounded-full transition-colors ${activeTestimonial === i ? "bg-[#103152]" : "bg-gray-300 hover:bg-gray-400"}`}
                onClick={() => setActiveTestimonial(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}