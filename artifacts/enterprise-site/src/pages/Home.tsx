import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Code2, Layers, Smartphone, Cloud, Bot, LineChart, CheckCircle2, Users2, Award, Headphones, Rocket } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const services = [
  { icon: Code2, title: "Custom Software Development", desc: "Tailored software engineered to meet your specific business requirements and workflows." },
  { icon: Layers, title: "Enterprise Applications", desc: "Robust, scalable enterprise systems that streamline operations and improve productivity." },
  { icon: Smartphone, title: "Mobile App Development", desc: "Native and cross-platform mobile applications for iOS and Android platforms." },
  { icon: Cloud, title: "Cloud Solutions", desc: "Cloud migration, architecture design, and managed services on AWS, Azure, and GCP." },
  { icon: Bot, title: "AI & Automation", desc: "Intelligent automation and AI-powered tools that reduce manual effort and improve outcomes." },
  { icon: LineChart, title: "Technology Consulting", desc: "Strategic technology advisory and digital transformation guidance for modern businesses." },
];

const whyUs = [
  { icon: Award, title: "15+ Years of Experience", desc: "Over a decade of delivering enterprise-grade software solutions across multiple industries." },
  { icon: Layers, title: "Enterprise-Grade Solutions", desc: "Built for scale, reliability, and security — meeting the highest enterprise standards." },
  { icon: Headphones, title: "Dedicated Support", desc: "Long-term maintenance and post-delivery support to keep your systems performing at their best." },
  { icon: Rocket, title: "Agile Development", desc: "Iterative, transparent development process ensuring on-time delivery and stakeholder alignment." },
];

const clients = ["Renault Nissan", "Tata Sky", "Aviva", "VFS Global", "Sundaram Finance", "TVS Group", "Murugappa Group", "RANE Group"];

export default function Home() {
  return (
    <div className="w-full">

      {/* ── Hero ── */}
      <section className="relative pt-16 pb-14 overflow-hidden" style={{ background: "linear-gradient(135deg, #0B1220 0%, #103152 55%, #1E293B 100%)" }}>

        {/* Floating blur orbs */}
        <div className="absolute top-[-80px] left-[-80px] w-[380px] h-[380px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(37,99,235,0.13) 0%, transparent 70%)", filter: "blur(40px)" }} />
        <div className="absolute bottom-[-60px] right-[-60px] w-[320px] h-[320px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(16,49,82,0.35) 0%, transparent 70%)", filter: "blur(50px)" }} />
        <div className="absolute top-[40%] left-[55%] w-[260px] h-[260px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)", filter: "blur(35px)" }} />

        {/* Subtle dot grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.035]" style={{ backgroundImage: "radial-gradient(rgba(148,163,184,1) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(37,99,235,0.6) 30%, rgba(56,189,248,0.8) 50%, rgba(37,99,235,0.6) 70%, transparent 100%)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>

              {/* Badge */}
              <span className="inline-flex items-center gap-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#60a5fa] border border-[#60a5fa]/25 bg-[#60a5fa]/8 px-3 py-1 rounded mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#60a5fa] animate-pulse" />
                Software &amp; IT Services Company
              </span>

              <h1 className="text-[1.625rem] md:text-[2.25rem] font-bold text-white leading-[1.18] tracking-tight mb-4">
                Digital Solutions for<br className="hidden md:block" /> Modern Businesses
              </h1>

              {/* Accent underline */}
              <div className="w-14 h-[2px] rounded mb-5" style={{ background: "linear-gradient(90deg, #2563EB, #38bdf8)" }} />

              <p className="text-[0.9rem] text-white/55 leading-relaxed mb-8 max-w-lg">
                NeeSoft helps organizations transform ideas into scalable digital products through custom software development, enterprise applications, cloud solutions, and technology consulting.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link href="/contact">
                  <span
                    className="inline-flex items-center gap-2 h-11 px-7 rounded text-white text-sm font-semibold transition-all duration-200"
                    style={{
                      background: "linear-gradient(135deg, #1d4ed8, #2563EB)",
                      boxShadow: "0 0 0 1px rgba(37,99,235,0.5), 0 4px 20px rgba(37,99,235,0.35)"
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLSpanElement).style.boxShadow = "0 0 0 1px rgba(37,99,235,0.7), 0 4px 28px rgba(37,99,235,0.55)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLSpanElement).style.boxShadow = "0 0 0 1px rgba(37,99,235,0.5), 0 4px 20px rgba(37,99,235,0.35)"; }}
                  >
                    Get In Touch <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
                <Link href="/services">
                  <span className="inline-flex items-center h-11 px-7 rounded border border-white/20 text-white/80 hover:border-white/40 hover:text-white text-sm font-medium transition-all duration-200">
                    Explore Services
                  </span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="grid grid-cols-2 gap-3"
            >
              {[
                { target: 15, suffix: "+", label: "Years of Experience", sub: "Since 2008" },
                { target: 100, suffix: "+", label: "Projects Delivered", sub: "End-to-end delivery" },
                { target: 50, suffix: "+", label: "Enterprise Clients", sub: "Long-term partnerships" },
                { target: 98, suffix: "%", label: "Client Satisfaction", sub: "Consistently measured" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="rounded-xl p-5 transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.09)",
                    backdropFilter: "blur(8px)"
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(37,99,235,0.4)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.09)"; }}
                >
                  <div className="text-[1.75rem] font-bold text-white mb-0.5">
                    <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                  </div>
                  <div className="text-[0.8rem] font-semibold text-white/70 mb-0.5">{stat.label}</div>
                  <div className="text-[0.7rem] text-white/35">{stat.sub}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Trusted By ── */}
      <section className="py-10 bg-[#F8FAFC] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-[#94a3b8] text-center mb-6">
            Trusted By Leading Organizations
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {clients.map((name) => (
              <div key={name} className="px-5 py-2.5 bg-white border border-gray-200 rounded text-[0.8125rem] font-medium text-[#475569] hover:border-[#103152]/30 hover:text-[#103152] transition-colors">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-xl">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#2563EB] mb-2">Our Services</p>
              <h2 className="text-[1.375rem] md:text-[1.75rem] font-bold text-[#0f172a]">
                End-to-End Technology Solutions
              </h2>
            </motion.div>
            <Link href="/services" className="hidden md:inline-flex">
              <span className="inline-flex items-center gap-1.5 text-sm text-[#2563EB] font-medium hover:text-[#1d4ed8] transition-colors group">
                View All Services <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {services.map((s, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="group p-6 bg-[#F8FAFC] border border-gray-100 rounded-xl hover:bg-white hover:shadow-md hover:border-gray-200 transition-all duration-200"
              >
                <div className="w-10 h-10 bg-[#103152]/8 rounded-lg flex items-center justify-center mb-4">
                  <s.icon className="w-5 h-5 text-[#103152]" />
                </div>
                <h3 className="text-[0.9rem] font-bold text-[#0f172a] mb-2">{s.title}</h3>
                <p className="text-[0.8125rem] text-[#64748b] leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Why NeeSoft ── */}
      <section className="py-20 bg-[#F8FAFC] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-xl mb-12">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#2563EB] mb-2">Why Choose NeeSoft</p>
            <h2 className="text-[1.375rem] md:text-[1.75rem] font-bold text-[#0f172a] mb-3">
              Built for Enterprise. Focused on Results.
            </h2>
            <p className="text-[0.875rem] text-[#64748b] leading-relaxed">
              We combine deep technical expertise with business acumen to deliver software that creates real, measurable value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyUs.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-sm transition-shadow"
              >
                <div className="w-10 h-10 bg-[#103152]/8 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-[#103152]" />
                </div>
                <h3 className="text-[0.875rem] font-bold text-[#0f172a] mb-2">{item.title}</h3>
                <p className="text-[0.8rem] text-[#64748b] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Strip ── */}
      <section className="py-16 bg-[#103152]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#60a5fa] mb-2">About NeeSoft</p>
              <h2 className="text-[1.25rem] md:text-[1.5rem] font-bold text-white mb-2">
                15+ Years of Technology Excellence
              </h2>
              <p className="text-[0.875rem] text-white/60 leading-relaxed">
                Since 2008, NeeSoft has partnered with businesses across India to build software that improves efficiency, reduces cost, and accelerates growth.
              </p>
            </div>
            <Link href="/about">
              <span className="inline-flex items-center gap-2 h-10 px-6 rounded border border-white/25 text-white hover:bg-white/8 text-sm font-medium transition-colors whitespace-nowrap">
                Learn About Us <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-[1.375rem] md:text-[1.875rem] font-bold text-[#0f172a] mb-3">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-[0.9rem] text-[#64748b] mb-8 leading-relaxed">
              Share your requirements with us and our team will respond within 24 business hours.
            </p>
            <Link href="/contact">
              <span className="inline-flex items-center gap-2 h-11 px-8 rounded bg-[#103152] hover:bg-[#0d2740] text-white text-sm font-semibold transition-colors">
                Contact Us Today <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
