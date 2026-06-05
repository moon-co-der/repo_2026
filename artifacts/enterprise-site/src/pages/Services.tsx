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
      iconBg: "bg-blue-50",
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
      iconBg: "bg-emerald-50",
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
      iconBg: "bg-violet-50",
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
      iconBg: "bg-amber-50",
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
      iconBg: "bg-rose-50",
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
      <section className="bg-[#103152] py-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <h1 className="text-[1.75rem] md:text-[2.25rem] font-semibold mb-2">Our Services</h1>
          <p className="text-base text-white/60 max-w-xl mb-4">End-to-end technology solutions tailored to your business needs.</p>
          <div className="flex items-center text-sm text-white/50">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-1.5" />
            <span className="text-white/80">Services</span>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-5">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4 }}
              className={`bg-white rounded-xl border border-gray-100 border-l-4 ${service.borderColor} p-6 md:p-8 hover:shadow-md transition-shadow duration-200`}
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="shrink-0">
                  <div className={`w-12 h-12 ${service.iconBg} ${service.iconColor} rounded-lg flex items-center justify-center`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h2 className="text-lg md:text-xl font-semibold text-gray-900">{service.title}</h2>
                    <span className={`px-2.5 py-0.5 text-xs font-medium uppercase tracking-wide rounded-full ${service.tagBg}`}>{service.tag}</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-6 leading-relaxed">{service.desc}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.bullets.map((bullet, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <CheckCircle className={`w-4 h-4 ${bulletColors[idx]} shrink-0`} />
                        <span className="text-sm text-gray-700">{bullet}</span>
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
      <section className="py-16 bg-[#103152] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="max-w-2xl mx-auto px-6 relative z-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">Ready to Start Your Project?</h2>
          <p className="text-base text-white/60 mb-8">Tell us about your requirements and we'll get back to you within 24 hours.</p>
          <Link href="/contact" data-testid="services-cta-contact">
            <Button size="lg" className="bg-white text-[#103152] hover:bg-gray-100 text-base h-12 px-8 font-semibold">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
