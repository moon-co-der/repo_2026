import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Code, Monitor, Building, Server, CheckCircle2, Clock, Users, Shield, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/AnimatedCounter";

export default function Home() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      desc: "Tailored software solutions designed specifically for your unique business requirements.",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
      accent: "border-t-blue-500"
    },
    {
      icon: Monitor,
      title: "Web Application Development",
      desc: "Modern, secure, and scalable web applications that enhance user experiences.",
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
      accent: "border-t-emerald-500"
    },
    {
      icon: Building,
      title: "Enterprise Solutions",
      desc: "Business-critical systems that improve productivity and automate workflows.",
      iconBg: "bg-violet-50",
      iconColor: "text-violet-600",
      accent: "border-t-violet-500"
    },
    {
      icon: Server,
      title: "IT Consulting",
      desc: "Technology strategy, architecture planning, and digital transformation consulting.",
      iconBg: "bg-amber-50",
      iconColor: "text-amber-600",
      accent: "border-t-amber-500"
    }
  ];

  const reasons = [
    { icon: Users, title: "Experienced Team", desc: "Seasoned professionals with deep domain expertise across various technology stacks.", iconBg: "bg-blue-50", iconColor: "text-blue-600" },
    { icon: Zap, title: "Scalable Solutions", desc: "Architectures designed to grow seamlessly alongside your business operations.", iconBg: "bg-emerald-50", iconColor: "text-emerald-600" },
    { icon: CheckCircle2, title: "Transparent Communication", desc: "Clear, consistent updates and collaborative approaches throughout the project lifecycle.", iconBg: "bg-violet-50", iconColor: "text-violet-600" },
    { icon: Clock, title: "On-Time Delivery", desc: "Rigorous project management ensuring milestones and deadlines are consistently met.", iconBg: "bg-amber-50", iconColor: "text-amber-600" },
    { icon: Shield, title: "Long-Term Support", desc: "Dedicated maintenance and reliable support post-deployment for continuous optimization.", iconBg: "bg-rose-50", iconColor: "text-rose-600" },
    { icon: Target, title: "Business-Focused Approach", desc: "Aligning every technical decision with your strategic business objectives.", iconBg: "bg-cyan-50", iconColor: "text-cyan-600" }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden bg-[#103152] text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#103152]/75 mix-blend-multiply z-10" />
          <img
            src="/hero.png"
            alt="Enterprise Technology"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 z-10 opacity-5 bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUpVariant}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-[3.5rem] font-semibold tracking-tight mb-6 leading-tight">
              Building Reliable Software Solutions for Modern Businesses
            </h1>

            <p className="text-base md:text-lg text-white/75 mb-10 leading-relaxed max-w-xl">
              NeeSoft helps organizations transform ideas into scalable digital products — through custom software development, enterprise applications, web platforms, and technology consulting.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-3">
              <Link href="/contact" data-testid="hero-btn-contact">
                <Button size="lg" className="w-full sm:w-auto text-base h-12 px-7 bg-white text-[#103152] hover:bg-gray-100 font-semibold transition-colors">
                  Get In Touch
                </Button>
              </Link>
              <Link href="/services" data-testid="hero-btn-services">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-12 px-7 border-white/40 text-white hover:bg-white/10 transition-colors bg-transparent">
                  Our Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Clients Strip */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">Trusted By Leading Organizations</p>
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 mb-6">
            {[
              { name: "Renault Nissan", color: "hover:border-yellow-400 hover:text-yellow-700" },
              { name: "Tata Sky", color: "hover:border-blue-400 hover:text-blue-700" },
              { name: "Aviva", color: "hover:border-emerald-400 hover:text-emerald-700" },
              { name: "VFS Global", color: "hover:border-violet-400 hover:text-violet-700" }
            ].map((client) => (
              <div
                key={client.name}
                className={`px-6 py-3 border border-gray-200 rounded-lg bg-white transition-all duration-200 hover:shadow-sm cursor-default ${client.color}`}
              >
                <span className="text-sm font-semibold text-gray-600">{client.name}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            Serving organizations across automotive, financial services, customer services, and technology sectors.
          </p>
        </div>
      </section>

      {/* About Preview / Stats */}
      <section className="py-20 bg-[#103152] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUpVariant}
            className="max-w-2xl mb-12"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-3">Our Track Record</p>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Technology Expertise. Business Focus.</h2>
            <p className="text-base text-white/65 leading-relaxed">
              For over 15 years, NeeSoft has partnered with businesses to build software solutions that improve efficiency, streamline operations, and support long-term growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { target: 15, suffix: "+", label: "Years Experience", color: "text-sky-400", bg: "bg-sky-400/10 border-sky-400/20" },
              { target: 100, suffix: "+", label: "Projects Delivered", color: "text-emerald-400", bg: "bg-emerald-400/10 border-emerald-400/20" },
              { target: 50, suffix: "+", label: "Business Clients", color: "text-violet-400", bg: "bg-violet-400/10 border-violet-400/20" },
              { target: 98, suffix: "%", label: "Client Satisfaction", color: "text-amber-400", bg: "bg-amber-400/10 border-amber-400/20" }
            ].map((stat) => (
              <div key={stat.label} className={`rounded-xl border p-5 ${stat.bg}`}>
                <div className={`text-3xl md:text-4xl font-bold mb-1 ${stat.color}`}>
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </div>
                <div className="text-xs font-medium text-white/55 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>

          <Link href="/about" data-testid="about-preview-link">
            <span className="inline-flex items-center gap-2 text-sm text-sky-400 font-medium hover:text-sky-300 transition-colors cursor-pointer group">
              Learn More About Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="max-w-xl mb-4 md:mb-0">
              <p className="text-xs font-semibold uppercase tracking-widest text-sky-600 mb-2">What We Do</p>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Comprehensive Technology Solutions</h2>
            </motion.div>
            <Link href="/services" data-testid="services-preview-link" className="hidden md:flex">
              <span className="inline-flex items-center gap-2 text-sm text-[#103152] font-medium hover:text-sky-600 transition-colors cursor-pointer group">
                View All Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className={`p-6 rounded-lg bg-white border-t-4 ${service.accent} shadow-sm hover:shadow-md transition-shadow duration-200`}
              >
                <div className={`w-10 h-10 ${service.iconBg} rounded-md flex items-center justify-center mb-5`}>
                  <service.icon className={`w-5 h-5 ${service.iconColor}`} />
                </div>
                <h4 className="text-[0.9375rem] font-semibold mb-2 text-gray-900">{service.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/services" data-testid="services-preview-link-mobile">
              <Button variant="outline" className="border-[#103152] text-[#103152] text-sm">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why NeeSoft */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-2">Why NeeSoft</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">Built on Trust. Driven by Results.</h2>
            <p className="text-sm text-gray-500">We combine technical excellence with business acumen to deliver measurable results.</p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {reasons.map((reason, idx) => (
              <motion.div
                key={idx}
                variants={fadeUpVariant}
                className="flex gap-4 p-5 rounded-lg border border-gray-100 hover:border-gray-200 hover:bg-gray-50/50 transition-all duration-200 bg-white"
              >
                <div className="shrink-0">
                  <div className={`w-9 h-9 ${reason.iconBg} rounded-md flex items-center justify-center`}>
                    <reason.icon className={`w-4 h-4 ${reason.iconColor}`} />
                  </div>
                </div>
                <div>
                  <h4 className="text-[0.9375rem] font-semibold text-gray-900 mb-1">{reason.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{reason.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-[#103152] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">Ready to Start Your Next Project?</h2>
          <p className="text-base text-white/60 mb-8 max-w-xl mx-auto">Tell us about your requirements and our team will get back to you within 24 hours.</p>
          <Link href="/contact" data-testid="cta-banner-btn">
            <Button size="lg" className="bg-white text-[#103152] hover:bg-gray-100 text-base h-12 px-8 font-semibold">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
