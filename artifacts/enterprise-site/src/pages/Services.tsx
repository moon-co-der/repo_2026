import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ChevronRight, Code2, Layers, Smartphone, Cloud, Bot, LineChart, Wrench, CheckCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const services = [
  {
    id: "custom-software",
    icon: Code2,
    title: "Custom Software Development",
    tag: "Core Service",
    desc: "We design and build software solutions specifically engineered for your business requirements, processes, and long-term objectives.",
    bullets: ["Requirements Analysis & Planning", "Custom Architecture Design", "Agile Iterative Development", "Quality Assurance & Testing"],
    accentColor: "border-l-[#2563EB]",
    tagColor: "bg-blue-50 text-blue-700",
  },
  {
    id: "enterprise",
    icon: Layers,
    title: "Enterprise Applications",
    tag: "Enterprise Grade",
    desc: "Business-critical systems that improve productivity, automate workflows, and support organizational growth at scale.",
    bullets: ["ERP & CRM Systems", "Workflow Automation", "System Integration", "Business Intelligence"],
    accentColor: "border-l-violet-500",
    tagColor: "bg-violet-50 text-violet-700",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile App Development",
    tag: "Digital Products",
    desc: "Native and cross-platform mobile applications for iOS and Android that deliver seamless, engaging user experiences.",
    bullets: ["iOS (Swift / Objective-C)", "Android Development", "Cross-Platform Apps", "App Store Publishing"],
    accentColor: "border-l-emerald-500",
    tagColor: "bg-emerald-50 text-emerald-700",
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud Solutions",
    tag: "Cloud & Infrastructure",
    desc: "Cloud migration, architecture planning, and managed services across AWS, Azure, and Google Cloud Platform.",
    bullets: ["Cloud Migration Strategy", "Infrastructure Architecture", "Managed Cloud Services", "Cost Optimization"],
    accentColor: "border-l-sky-500",
    tagColor: "bg-sky-50 text-sky-700",
  },
  {
    id: "ai",
    icon: Bot,
    title: "AI & Automation",
    tag: "Emerging Technology",
    desc: "Intelligent automation and AI-powered tools that reduce manual effort, improve decision-making, and drive efficiency.",
    bullets: ["Process Automation (RPA)", "AI Model Integration", "Chatbot Development", "Data-Driven Insights"],
    accentColor: "border-l-amber-500",
    tagColor: "bg-amber-50 text-amber-700",
  },
  {
    id: "consulting",
    icon: LineChart,
    title: "Technology Consulting",
    tag: "Strategic Advisory",
    desc: "Technology strategy, architecture planning, and digital transformation roadmaps for modern enterprises.",
    bullets: ["Technology Roadmap", "Architecture Planning", "Digital Strategy", "Technology Audit"],
    accentColor: "border-l-rose-500",
    tagColor: "bg-rose-50 text-rose-700",
  },
  {
    id: "maintenance",
    icon: Wrench,
    title: "Maintenance & Support",
    tag: "Long-Term Partnership",
    desc: "Continuous monitoring, optimization, and proactive support to ensure your systems perform reliably over the long term.",
    bullets: ["Proactive Monitoring", "Bug Fixes & Patches", "Performance Tuning", "Security Updates"],
    accentColor: "border-l-teal-500",
    tagColor: "bg-teal-50 text-teal-700",
  },
];

export default function Services() {
  return (
    <div className="w-full pt-16">

      {/* ── Page Header ── */}
      <section className="bg-[#103152] py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center text-[0.72rem] text-white/40 mb-4 gap-1.5">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/70">Services</span>
          </div>
          <h1 className="text-[1.625rem] md:text-[2.125rem] font-bold text-white mb-2">Our Services</h1>
          <p className="text-[0.9rem] text-white/55 max-w-lg leading-relaxed">
            End-to-end technology solutions designed to meet the needs of modern businesses and enterprise organizations.
          </p>
        </div>
      </section>

      {/* ── Services List ── */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-4">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35 }}
              className={`bg-white rounded-xl border border-gray-100 border-l-4 ${service.accentColor} p-6 md:p-8 hover:shadow-md transition-shadow duration-200`}
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-11 h-11 bg-[#F8FAFC] border border-gray-100 rounded-lg flex items-center justify-center shrink-0">
                  <service.icon className="w-5 h-5 text-[#334155]" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2.5 mb-2">
                    <h2 className="text-[1rem] md:text-[1.0625rem] font-bold text-[#0f172a]">{service.title}</h2>
                    <span className={`px-2.5 py-0.5 text-[0.68rem] font-semibold uppercase tracking-wide rounded-full ${service.tagColor}`}>
                      {service.tag}
                    </span>
                  </div>
                  <p className="text-[0.875rem] text-[#64748b] mb-5 leading-relaxed">{service.desc}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {service.bullets.map((bullet, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                        <span className="text-[0.8125rem] text-[#475569]">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-[#103152] text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-[1.25rem] md:text-[1.75rem] font-bold text-white mb-3">Ready to Start Your Project?</h2>
          <p className="text-[0.9rem] text-white/55 mb-7 leading-relaxed">
            Tell us about your requirements and our team will respond within 24 business hours.
          </p>
          <Link href="/contact">
            <span className="inline-flex items-center gap-2 h-11 px-8 rounded bg-white text-[#103152] hover:bg-gray-100 text-sm font-bold transition-colors">
              Contact Us Today <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
