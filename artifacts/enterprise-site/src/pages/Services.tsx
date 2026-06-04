import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ChevronRight, Code, Monitor, Building, Server, Wrench, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Services() {
  const services = [
    {
      id: "custom-software",
      icon: Code,
      title: "Custom Software Development",
      desc: "We design and build software solutions specifically tailored to business requirements.",
      bullets: ["Requirements Analysis", "Custom Architecture Design", "Agile Development", "Quality Assurance"],
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      borderColor: "border-l-blue-500",
      tagBg: "bg-blue-50 text-blue-700",
      tag: "Core Service"
    },
    {
      id: "web-app",
      icon: Monitor,
      title: "Web Application Development",
      desc: "Modern, secure, and scalable web applications that enhance user experiences and business operations.",
      bullets: ["Responsive Design", "Progressive Web Apps", "API Integration", "Performance Optimization"],
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      borderColor: "border-l-emerald-500",
      tagBg: "bg-emerald-50 text-emerald-700",
      tag: "Digital Products"
    },
    {
      id: "enterprise",
      icon: Building,
      title: "Enterprise Solutions",
      desc: "Business-critical systems that improve productivity, automate workflows, and support organizational growth.",
      bullets: ["ERP Systems", "Workflow Automation", "System Integration", "Business Intelligence"],
      iconBg: "bg-violet-100",
      iconColor: "text-violet-600",
      borderColor: "border-l-violet-500",
      tagBg: "bg-violet-50 text-violet-700",
      tag: "Enterprise Grade"
    },
    {
      id: "consulting",
      icon: Server,
      title: "IT Consulting",
      desc: "Technology strategy, architecture planning, and digital transformation consulting.",
      bullets: ["Technology Roadmap", "Architecture Planning", "Digital Strategy", "Technology Audit"],
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
      borderColor: "border-l-amber-500",
      tagBg: "bg-amber-50 text-amber-700",
      tag: "Strategic Advisory"
    },
    {
      id: "maintenance",
      icon: Wrench,
      title: "Maintenance & Support",
      desc: "Continuous monitoring, optimization, and support to ensure long-term reliability.",
      bullets: ["24/7 Monitoring", "Bug Fixes", "Performance Optimization", "Security Updates"],
      iconBg: "bg-rose-100",
      iconColor: "text-rose-600",
      borderColor: "border-l-rose-500",
      tagBg: "bg-rose-50 text-rose-700",
      tag: "Long-Term Partnership"
    }
  ];

  const bulletColors = ["text-blue-500", "text-emerald-500", "text-violet-500", "text-amber-500", "text-rose-500"];

  return (
    <div className="w-full pt-20">
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-[#103152] to-[#1a4a7a] py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-emerald-400 to-violet-400" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-400/20 border border-emerald-400/30 text-emerald-300 text-sm font-semibold uppercase tracking-widest mb-6">What We Offer</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Services</h1>
          <p className="text-xl text-white/70 max-w-2xl mb-6">End-to-end technology solutions tailored to your business needs.</p>
          <div className="flex items-center text-sm font-medium text-white/60">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white">Services</span>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className={`bg-white rounded-2xl shadow-sm border border-gray-100 border-l-4 ${service.borderColor} p-8 md:p-12 hover:-translate-y-1 hover:shadow-xl transition-all duration-300`}
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="shrink-0">
                  <div className={`w-16 h-16 ${service.iconBg} ${service.iconColor} rounded-2xl flex items-center justify-center`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900">{service.title}</h2>
                    <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wide rounded-full ${service.tagBg}`}>{service.tag}</span>
                  </div>
                  <p className="text-lg text-gray-500 mb-8 leading-relaxed">{service.desc}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.bullets.map((bullet, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle className={`w-5 h-5 ${bulletColors[idx]} shrink-0`} />
                        <span className="text-gray-700 font-medium">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-gradient-to-br from-[#103152] to-[#1a4a7a] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-sky-400 to-emerald-400" />
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl font-heading font-bold text-white mb-3">Ready to Start Your Project?</h2>
          <p className="text-white/60 text-lg mb-8">Tell us about your requirements and we'll get back to you within 24 hours.</p>
          <Link href="/contact" data-testid="services-cta-contact">
            <Button size="lg" className="bg-sky-500 hover:bg-sky-400 text-white text-lg h-14 px-10 transition-transform hover:scale-105 shadow-lg shadow-sky-500/30 font-semibold">
              Contact Us Today <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
