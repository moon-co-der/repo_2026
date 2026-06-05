import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ChevronRight, Target, Lightbulb, Users, Award, TrendingUp, Shield } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";

export default function About() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const values = [
    { icon: Shield, title: "Integrity", desc: "Honest, ethical, and transparent in everything we do.", iconBg: "bg-blue-50", iconColor: "text-blue-600", accent: "border-t-blue-500" },
    { icon: Lightbulb, title: "Innovation", desc: "Continuously exploring better ways to solve complex problems.", iconBg: "bg-amber-50", iconColor: "text-amber-600", accent: "border-t-amber-500" },
    { icon: Users, title: "Customer Commitment", desc: "Putting client success at the heart of every decision.", iconBg: "bg-emerald-50", iconColor: "text-emerald-600", accent: "border-t-emerald-500" },
    { icon: Award, title: "Quality Delivery", desc: "Maintaining the highest standards in every project we deliver.", iconBg: "bg-violet-50", iconColor: "text-violet-600", accent: "border-t-violet-500" },
    { icon: TrendingUp, title: "Continuous Improvement", desc: "Always growing, learning, and refining our craft.", iconBg: "bg-rose-50", iconColor: "text-rose-600", accent: "border-t-rose-500" }
  ];

  return (
    <div className="w-full pt-20">
      {/* Page Hero */}
      <section className="bg-[#103152] py-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <h1 className="text-[1.75rem] md:text-[2.25rem] font-semibold mb-3">About NeeSoft</h1>
          <div className="flex items-center text-sm text-white/50">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-1.5" />
            <span className="text-white/80">About Us</span>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeUpVariant}>
              <p className="text-xs font-semibold uppercase tracking-widest text-sky-600 mb-3">Our Story</p>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-5">Driving Innovation Through Technology</h2>
              <div className="space-y-4 text-base text-gray-600 leading-relaxed">
                <p>
                  NeeSoft is a software development and IT services company dedicated to helping businesses leverage technology to solve complex challenges and accelerate growth.
                </p>
                <p>
                  We specialize in custom software development, enterprise solutions, web applications, and technology consulting. Our team combines technical expertise with business understanding to deliver solutions that create measurable value.
                </p>
              </div>
              <div className="mt-7">
                <Link href="/services">
                  <span className="inline-flex items-center gap-2 text-sm text-[#103152] font-medium hover:text-sky-600 transition-colors cursor-pointer group">
                    Our Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl overflow-hidden shadow-lg border border-gray-100"
            >
              <img src="/about.png" alt="NeeSoft Office and Team" className="w-full h-auto object-cover aspect-[4/3]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-2">Our Direction</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Mission &amp; Vision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-xl border border-gray-100 border-t-4 border-t-sky-500 shadow-sm">
              <div className="w-11 h-11 bg-sky-50 text-sky-600 rounded-lg flex items-center justify-center mb-5">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-base text-gray-500 leading-relaxed">
                To empower businesses through innovative software solutions that improve efficiency, drive growth, and create lasting value.
              </p>
            </div>
            <div className="bg-[#103152] p-8 rounded-xl border-t-4 border-t-emerald-400 shadow-sm text-white">
              <div className="w-11 h-11 bg-emerald-400/20 text-emerald-400 rounded-lg flex items-center justify-center mb-5">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Our Vision</h3>
              <p className="text-base text-white/75 leading-relaxed">
                To become a trusted technology partner recognized for excellence, innovation, and customer success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 mb-2">What We Stand For</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">Core Values</h2>
            <p className="text-sm text-gray-500">The principles that guide our work and partnerships.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07 }}
                className={`p-6 border-t-4 ${value.accent} rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-200`}
              >
                <div className={`w-10 h-10 mx-auto ${value.iconBg} ${value.iconColor} rounded-md flex items-center justify-center mb-4`}>
                  <value.icon className="w-5 h-5" />
                </div>
                <h4 className="text-[0.9375rem] font-semibold text-gray-900 mb-2 text-center">{value.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed text-center">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey & Stats */}
      <section className="py-20 bg-[#103152] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="rounded-xl overflow-hidden shadow-lg ring-1 ring-white/10">
              <img src="/tech.png" alt="Technology Journey" className="w-full h-auto rounded-xl object-cover aspect-video" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-3">15+ Years Strong</p>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Journey</h2>
              <p className="text-base text-white/65 leading-relaxed">
                Fifteen-plus years of industry experience serving clients across multiple sectors and helping organizations achieve their technology goals. From startups to global enterprises, we've been the trusted technology partner behind transformative digital solutions.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-white/10">
            {[
              { target: 15, suffix: "+", label: "Years", color: "text-sky-400", bg: "bg-sky-400/10 border-sky-400/20" },
              { target: 100, suffix: "+", label: "Projects", color: "text-emerald-400", bg: "bg-emerald-400/10 border-emerald-400/20" },
              { target: 50, suffix: "+", label: "Clients", color: "text-violet-400", bg: "bg-violet-400/10 border-violet-400/20" },
              { target: 98, suffix: "%", label: "Satisfaction", color: "text-amber-400", bg: "bg-amber-400/10 border-amber-400/20" }
            ].map((stat) => (
              <div key={stat.label} className={`rounded-xl border p-5 ${stat.bg}`}>
                <div className={`text-3xl md:text-4xl font-bold mb-1 ${stat.color}`}>
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </div>
                <div className="text-xs font-medium text-white/55 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
