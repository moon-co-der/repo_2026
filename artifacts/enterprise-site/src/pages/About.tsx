import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ChevronRight, Target, Lightbulb, Users, Award, TrendingUp, Shield } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";

export default function About() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const values = [
    { icon: Shield, title: "Integrity", desc: "Honest, ethical, and transparent in everything we do.", iconBg: "bg-blue-100", iconColor: "text-blue-600", accent: "border-t-blue-500" },
    { icon: Lightbulb, title: "Innovation", desc: "Continuously exploring better ways to solve complex problems.", iconBg: "bg-amber-100", iconColor: "text-amber-600", accent: "border-t-amber-500" },
    { icon: Users, title: "Customer Commitment", desc: "Putting client success at the heart of every decision.", iconBg: "bg-emerald-100", iconColor: "text-emerald-600", accent: "border-t-emerald-500" },
    { icon: Award, title: "Quality Delivery", desc: "Maintaining the highest standards in every project we deliver.", iconBg: "bg-violet-100", iconColor: "text-violet-600", accent: "border-t-violet-500" },
    { icon: TrendingUp, title: "Continuous Improvement", desc: "Always growing, learning, and refining our craft.", iconBg: "bg-rose-100", iconColor: "text-rose-600", accent: "border-t-rose-500" }
  ];

  return (
    <div className="w-full pt-20">
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-[#103152] to-[#1a4a7a] py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-emerald-400 to-violet-400" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-sky-400/20 border border-sky-400/30 text-sky-300 text-sm font-semibold uppercase tracking-widest mb-6">Who We Are</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">About NeeSoft</h1>
          <div className="flex items-center text-sm font-medium text-white/60">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white">About Us</span>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeUpVariant}>
              <span className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-3 block">Our Story</span>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Driving Innovation Through Technology</h2>
              <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
                <p>
                  NeeSoft is a software development and IT services company dedicated to helping businesses leverage technology to solve complex challenges and accelerate growth.
                </p>
                <p>
                  We specialize in custom software development, enterprise solutions, web applications, and technology consulting. Our team combines technical expertise with business understanding to deliver solutions that create measurable value.
                </p>
              </div>
              <div className="mt-8 flex gap-4">
                <Link href="/services">
                  <span className="inline-flex items-center gap-2 text-[#103152] font-semibold hover:text-sky-600 transition-colors cursor-pointer group">
                    Our Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } } }}
              className="rounded-2xl overflow-hidden shadow-2xl ring-4 ring-sky-100"
            >
              <img src="/about.png" alt="NeeSoft Office and Team" className="w-full h-auto object-cover aspect-[4/3]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-3 block">Our Direction</span>
            <h2 className="text-3xl font-heading font-bold text-gray-900">Mission & Vision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-sm border-t-4 border-t-sky-500 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To empower businesses through innovative software solutions that improve efficiency, drive growth, and create lasting value.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#103152] to-[#1a4a7a] p-10 rounded-2xl shadow-sm hover:shadow-lg transition-shadow text-white border-t-4 border-t-emerald-400">
              <div className="w-14 h-14 bg-emerald-400/20 text-emerald-400 rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">Our Vision</h3>
              <p className="text-white/80 text-lg leading-relaxed">
                To become a trusted technology partner recognized for excellence, innovation, and customer success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-violet-600 mb-3 block">What We Stand For</span>
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">Core Values</h2>
            <p className="text-gray-500">The principles that guide our work and partnerships.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className={`p-6 text-center border-t-4 ${value.accent} rounded-xl bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300`}
              >
                <div className={`w-12 h-12 mx-auto ${value.iconBg} ${value.iconColor} rounded-full flex items-center justify-center mb-4`}>
                  <value.icon className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey & Stats */}
      <section className="py-20 bg-gradient-to-br from-[#103152] to-[#0d2a45] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="rounded-2xl overflow-hidden shadow-2xl ring-2 ring-white/10">
              <img src="/tech.png" alt="Technology Journey" className="w-full h-auto rounded-xl object-cover aspect-video" />
            </div>
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-sky-400/20 border border-sky-400/30 text-sky-300 text-sm font-semibold uppercase tracking-widest mb-6">15+ Years Strong</span>
              <h2 className="text-3xl font-heading font-bold mb-6">Our Journey</h2>
              <p className="text-xl text-white/70 leading-relaxed">
                Fifteen-plus years of industry experience serving clients across multiple sectors and helping organizations achieve their technology goals. From startups to global enterprises, we've been the trusted technology partner behind transformative digital solutions.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/10">
            {[
              { target: 15, suffix: "+", label: "Years", color: "text-sky-400", bg: "bg-sky-400/10 border-sky-400/20" },
              { target: 100, suffix: "+", label: "Projects", color: "text-emerald-400", bg: "bg-emerald-400/10 border-emerald-400/20" },
              { target: 50, suffix: "+", label: "Clients", color: "text-violet-400", bg: "bg-violet-400/10 border-violet-400/20" },
              { target: 98, suffix: "%", label: "Satisfaction", color: "text-amber-400", bg: "bg-amber-400/10 border-amber-400/20" }
            ].map((stat) => (
              <div key={stat.label} className={`rounded-2xl border p-6 text-center ${stat.bg}`}>
                <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}>
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-medium text-white/60 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
