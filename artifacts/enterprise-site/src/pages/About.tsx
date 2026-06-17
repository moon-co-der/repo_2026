import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ChevronRight, Target, Lightbulb, Users, Award, TrendingUp, Shield, CheckCircle } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } }
  };

  const values = [
    { icon: Shield, title: "Integrity", desc: "Honest, ethical, and transparent in everything we do." },
    { icon: Lightbulb, title: "Innovation", desc: "Continuously exploring better ways to solve complex problems." },
    { icon: Users, title: "Client First", desc: "Putting client success at the heart of every decision." },
    { icon: Award, title: "Quality", desc: "Maintaining the highest standards in every project we deliver." },
    { icon: TrendingUp, title: "Improvement", desc: "Always growing, learning, and refining our craft." }
  ];

  const milestones = [
    { year: "2008", title: "Company Founded", desc: "NeeSoft established with a focus on enterprise software solutions." },
    { year: "2012", title: "50+ Clients", desc: "Expanded client base across automotive and financial sectors." },
    { year: "2016", title: "100+ Projects", desc: "Milestone of 100 delivered projects across multiple industries." },
    { year: "2023", title: "15 Years Strong", desc: "A decade and a half of trusted technology partnerships." }
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
            <span className="text-white/70">About Us</span>
          </div>
          <h1 className="text-[1.625rem] md:text-[2rem] font-bold mb-2">About NeeSoft</h1>
          <p className="text-[0.875rem] text-white/55 max-w-xl">
            A trusted technology partner helping organizations build software solutions that drive real business value.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} className="lg:col-span-3">
              <p className="text-[0.7rem] font-semibold uppercase tracking-widest text-sky-600 mb-3">Our Story</p>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-5">Driving Innovation Through Technology</h2>
              <div className="space-y-4 text-[0.9rem] text-gray-600 leading-relaxed">
                <p>
                  NeeSoft is a software development and IT services company dedicated to helping businesses leverage technology to solve complex challenges and accelerate growth.
                </p>
                <p>
                  We specialize in custom software development, enterprise solutions, web applications, and technology consulting. Our team combines technical expertise with business understanding to deliver solutions that create measurable value.
                </p>
                <p>
                  Founded in 2008, we have grown into a team of seasoned professionals serving clients across automotive, financial services, manufacturing, retail, and technology sectors.
                </p>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/services">
                  <span className="inline-flex items-center gap-1.5 text-sm text-[#103152] font-semibold hover:text-sky-600 transition-colors cursor-pointer group border border-[#103152]/20 px-4 py-2 rounded hover:border-sky-400">
                    Our Services <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
                <Link href="/contact">
                  <span className="inline-flex items-center gap-1.5 text-sm text-gray-600 font-medium hover:text-gray-900 transition-colors cursor-pointer border border-gray-200 px-4 py-2 rounded hover:border-gray-300">
                    Get In Touch
                  </span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2 space-y-3"
            >
              {[
                "15+ years of industry experience",
                "100+ projects delivered successfully",
                "50+ long-term business clients",
                "Serving clients across 8+ industry sectors",
                "Full-cycle software development & support",
                "Strong focus on business outcomes"
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 bg-gray-50 border border-gray-100 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span className="text-[0.875rem] text-gray-700">{point}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="py-12 bg-[#103152] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { target: 15, suffix: "+", label: "Years Experience", sub: "Since 2008", color: "text-sky-400", border: "border-sky-400/20" },
              { target: 100, suffix: "+", label: "Projects Delivered", sub: "Across all sectors", color: "text-emerald-400", border: "border-emerald-400/20" },
              { target: 50, suffix: "+", label: "Business Clients", sub: "Long-term relationships", color: "text-violet-400", border: "border-violet-400/20" },
              { target: 98, suffix: "%", label: "Client Satisfaction", sub: "Consistently maintained", color: "text-amber-400", border: "border-amber-400/20" }
            ].map((stat) => (
              <div key={stat.label} className={`bg-white/5 border ${stat.border} rounded-lg p-5`}>
                <div className={`text-2xl md:text-3xl font-bold mb-1 ${stat.color}`}>
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </div>
                <div className="text-[0.8125rem] font-semibold text-white/80 mb-0.5">{stat.label}</div>
                <div className="text-[0.72rem] text-white/40">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-[0.7rem] font-semibold uppercase tracking-widest text-emerald-600 mb-2">Our Direction</p>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">Mission &amp; Vision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white p-7 rounded-lg border border-gray-100 border-t-[3px] border-t-sky-500 shadow-sm">
              <div className="w-9 h-9 bg-sky-50 text-sky-600 rounded-md flex items-center justify-center mb-4">
                <Target className="w-4.5 h-4.5" />
              </div>
              <h3 className="text-[0.9375rem] font-bold text-gray-900 mb-2">Our Mission</h3>
              <p className="text-[0.875rem] text-gray-500 leading-relaxed">
                To empower businesses through innovative software solutions that improve efficiency, drive growth, and create lasting value through technology.
              </p>
            </div>
            <div className="bg-[#103152] p-7 rounded-lg border-t-[3px] border-t-emerald-400 shadow-sm text-white">
              <div className="w-9 h-9 bg-emerald-400/20 text-emerald-400 rounded-md flex items-center justify-center mb-4">
                <Lightbulb className="w-4.5 h-4.5" />
              </div>
              <h3 className="text-[0.9375rem] font-bold mb-2">Our Vision</h3>
              <p className="text-[0.875rem] text-white/70 leading-relaxed">
                To become a trusted technology partner recognized globally for excellence, innovation, and consistent delivery of client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-[0.7rem] font-semibold uppercase tracking-widest text-violet-600 mb-2">What We Stand For</p>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">Core Values</h2>
            <p className="text-[0.8125rem] text-gray-500">The principles that guide our work and every client partnership.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {values.map((v, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07 }}
                className="p-5 border border-gray-100 rounded-lg bg-white hover:shadow-md hover:border-gray-200 transition-all duration-200 text-center"
              >
                <div className="w-9 h-9 mx-auto bg-[#103152]/8 text-[#103152] rounded-md flex items-center justify-center mb-3">
                  <v.icon className="w-4 h-4" />
                </div>
                <h4 className="text-[0.875rem] font-bold text-gray-900 mb-1.5">{v.title}</h4>
                <p className="text-[0.8rem] text-gray-500 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-[0.7rem] font-semibold uppercase tracking-widest text-sky-600 mb-2">Our Growth</p>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">Our Journey</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {milestones.map((m, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="relative bg-white border border-gray-100 rounded-lg p-6 hover:shadow-sm transition-shadow"
              >
                <div className="text-[0.7rem] font-bold text-[#103152] bg-[#103152]/8 inline-block px-2.5 py-1 rounded mb-3 tracking-wide">
                  {m.year}
                </div>
                <h4 className="text-[0.875rem] font-bold text-gray-900 mb-1.5">{m.title}</h4>
                <p className="text-[0.8rem] text-gray-500 leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
