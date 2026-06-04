import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, Code, Monitor, Building, Server, Wrench, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Services() {
  const services = [
    {
      id: "custom-software",
      icon: Code,
      title: "Custom Software Development",
      desc: "We design and build software solutions specifically tailored to business requirements.",
      bullets: ["Requirements Analysis", "Custom Architecture Design", "Agile Development", "Quality Assurance"]
    },
    {
      id: "web-app",
      icon: Monitor,
      title: "Web Application Development",
      desc: "Modern, secure, and scalable web applications that enhance user experiences and business operations.",
      bullets: ["Responsive Design", "Progressive Web Apps", "API Integration", "Performance Optimization"]
    },
    {
      id: "enterprise",
      icon: Building,
      title: "Enterprise Solutions",
      desc: "Business-critical systems that improve productivity, automate workflows, and support organizational growth.",
      bullets: ["ERP Systems", "Workflow Automation", "System Integration", "Business Intelligence"]
    },
    {
      id: "consulting",
      icon: Server,
      title: "IT Consulting",
      desc: "Technology strategy, architecture planning, and digital transformation consulting.",
      bullets: ["Technology Roadmap", "Architecture Planning", "Digital Strategy", "Technology Audit"]
    },
    {
      id: "maintenance",
      icon: Wrench,
      title: "Maintenance and Support",
      desc: "Continuous monitoring, optimization, and support to ensure long-term reliability.",
      bullets: ["24/7 Monitoring", "Bug Fixes", "Performance Optimization", "Security Updates"]
    }
  ];

  return (
    <div className="w-full pt-20">
      {/* Page Hero */}
      <section className="bg-[#103152] py-16 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Services</h1>
          <p className="text-xl text-white/80 max-w-2xl mb-6">End-to-end technology solutions tailored to your business needs.</p>
          <div className="flex items-center text-sm font-medium text-white/70">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white">Services</span>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
          {services.map((service, idx) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="shrink-0">
                  <div className="w-16 h-16 bg-[#103152]/5 text-[#103152] rounded-2xl flex items-center justify-center">
                    <service.icon className="w-8 h-8" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">{service.desc}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.bullets.map((bullet, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 shrink-0" />
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
      <section className="py-20 bg-white border-t border-gray-200 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Ready to start your project?</h2>
          <Link href="/contact" data-testid="services-cta-contact">
            <Button size="lg" className="bg-[#103152] hover:bg-[#103152]/90 text-white text-lg h-14 px-10 transition-transform hover:scale-105">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}