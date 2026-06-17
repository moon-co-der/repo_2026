import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Code, Monitor, Building, Server, CheckCircle2, Clock, Users, Shield, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/AnimatedCounter";

export default function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.215, 0.61, 0.355, 1] as const } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.07 } }
  };

  const services = [
    { icon: Code, title: "Custom Software Development", desc: "Tailored software solutions designed specifically for your unique business requirements.", accent: "border-t-blue-500" },
    { icon: Monitor, title: "Web Application Development", desc: "Modern, secure, and scalable web applications that enhance user experiences.", accent: "border-t-emerald-500" },
    { icon: Building, title: "Enterprise Solutions", desc: "Business-critical systems that improve productivity and automate workflows.", accent: "border-t-violet-500" },
    { icon: Server, title: "IT Consulting", desc: "Technology strategy, architecture planning, and digital transformation consulting.", accent: "border-t-amber-500" }
  ];

  const reasons = [
    { icon: Users, title: "Experienced Team", desc: "Seasoned professionals with deep domain expertise across various technology stacks." },
    { icon: Zap, title: "Scalable Solutions", desc: "Architectures designed to grow seamlessly alongside your business operations." },
    { icon: CheckCircle2, title: "Transparent Communication", desc: "Clear, consistent updates and collaborative approaches throughout every project." },
    { icon: Clock, title: "On-Time Delivery", desc: "Rigorous project management ensuring milestones and deadlines are consistently met." },
    { icon: Shield, title: "Long-Term Support", desc: "Dedicated maintenance and reliable support post-deployment for continuous optimization." },
    { icon: Target, title: "Business-Focused Approach", desc: "Aligning every technical decision with your strategic business objectives." }
  ];

  return (
    <div className="w-full">

      {/* Hero — clean, no background image */}
      <section className="pt-28 pb-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <span className="inline-block text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-[#103152] border border-[#103152]/20 bg-[#103152]/5 px-3 py-1 rounded mb-5">
                Software &amp; IT Services
              </span>
              <h1 className="text-[1.875rem] md:text-[2.5rem] font-bold text-gray-900 leading-tight tracking-tight mb-5">
                Building Reliable Software Solutions for Modern Businesses
              </h1>
              <p className="text-[0.9375rem] text-gray-500 leading-relaxed mb-8 max-w-lg">
                NeeSoft helps organizations transform ideas into scalable digital products — through custom software development, enterprise applications, web platforms, and technology consulting.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact">
                  <Button size="lg" className="bg-[#103152] hover:bg-[#103152]/90 text-white h-11 px-7 text-sm font-semibold">
                    Get In Touch
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 h-11 px-7 text-sm">
                    Our Services
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Stats panel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { target: 15, suffix: "+", label: "Years of Experience", color: "text-[#103152]", sub: "Industry-tested expertise" },
                { target: 100, suffix: "+", label: "Projects Delivered", color: "text-emerald-600", sub: "Across multiple sectors" },
                { target: 50, suffix: "+", label: "Business Clients", color: "text-violet-600", sub: "Long-term partnerships" },
                { target: 98, suffix: "%", label: "Client Satisfaction", color: "text-amber-600", sub: "Consistently maintained" }
              ].map((stat) => (
                <div key={stat.label} className="bg-gray-50 border border-gray-100 rounded-lg p-5 hover:border-gray-200 transition-colors">
                  <div className={`text-2xl md:text-3xl font-bold mb-1 ${stat.color}`}>
                    <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                  </div>
                  <div className="text-[0.8125rem] font-semibold text-gray-800 mb-0.5">{stat.label}</div>
                  <div className="text-[0.72rem] text-gray-400">{stat.sub}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-10 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <p className="text-[0.7rem] font-semibold uppercase tracking-widest text-gray-400 whitespace-nowrap">Trusted By</p>
            <div className="w-px h-5 bg-gray-200 hidden sm:block" />
            <div className="flex flex-wrap items-center gap-2 md:gap-4">
              {["Renault Nissan", "Tata Sky", "Aviva", "VFS Global", "Sundaram Finance", "TVS Group"].map((name) => (
                <span key={name} className="text-[0.8125rem] font-medium text-gray-500 px-3 py-1.5 bg-white border border-gray-200 rounded hover:text-gray-800 transition-colors">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-xl mb-4 md:mb-0">
              <p className="text-[0.7rem] font-semibold uppercase tracking-widest text-sky-600 mb-2">What We Do</p>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">Comprehensive Technology Solutions</h2>
            </motion.div>
            <Link href="/services" className="hidden md:inline-flex">
              <span className="inline-flex items-center gap-1.5 text-sm text-[#103152] font-medium hover:text-sky-600 transition-colors cursor-pointer group">
                View All Services <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07 }}
                className={`p-6 bg-white border border-gray-100 border-t-[3px] ${s.accent} rounded-lg hover:shadow-md transition-shadow duration-200`}
              >
                <div className="w-9 h-9 bg-gray-50 rounded-md flex items-center justify-center mb-4">
                  <s.icon className="w-4.5 h-4.5 text-gray-600" />
                </div>
                <h4 className="text-[0.9rem] font-semibold mb-2 text-gray-900">{s.title}</h4>
                <p className="text-[0.8125rem] text-gray-500 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why NeeSoft */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-xl mb-10">
            <p className="text-[0.7rem] font-semibold uppercase tracking-widest text-emerald-600 mb-2">Why NeeSoft</p>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Built on Trust. Driven by Results.</h2>
            <p className="text-[0.8125rem] text-gray-500">We combine technical excellence with business acumen to deliver measurable outcomes.</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {reasons.map((r, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="flex gap-4 p-5 rounded-lg border border-gray-100 bg-white hover:border-gray-200 hover:shadow-sm transition-all duration-200"
              >
                <div className="shrink-0 w-8 h-8 bg-[#103152]/8 rounded-md flex items-center justify-center">
                  <r.icon className="w-4 h-4 text-[#103152]" />
                </div>
                <div>
                  <h4 className="text-[0.875rem] font-semibold text-gray-900 mb-1">{r.title}</h4>
                  <p className="text-[0.8125rem] text-gray-500 leading-relaxed">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About strip */}
      <section className="py-16 bg-[#103152]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-widest text-sky-400 mb-2">About NeeSoft</p>
              <h2 className="text-lg md:text-xl font-bold text-white mb-2">15+ Years of Technology Expertise</h2>
              <p className="text-[0.875rem] text-white/60 max-w-xl">
                For over 15 years, NeeSoft has partnered with businesses to build software solutions that improve efficiency, streamline operations, and support long-term growth.
              </p>
            </div>
            <Link href="/about">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent h-10 px-6 text-sm whitespace-nowrap">
                Learn More <ArrowRight className="ml-2 w-3.5 h-3.5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Ready to Start Your Next Project?</h2>
          <p className="text-[0.875rem] text-gray-500 mb-7 max-w-lg mx-auto">Tell us about your requirements and our team will get back to you within 24 hours.</p>
          <Link href="/contact">
            <Button size="lg" className="bg-[#103152] hover:bg-[#103152]/90 text-white h-11 px-8 text-sm font-semibold">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
