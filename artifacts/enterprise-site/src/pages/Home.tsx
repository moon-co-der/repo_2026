import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Code, Monitor, Building, Server, CheckCircle2, Clock, Users, Shield, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/AnimatedCounter";

export default function Home() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      desc: "Tailored software solutions designed specifically for your unique business requirements.",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      accent: "border-t-blue-500"
    },
    {
      icon: Monitor,
      title: "Web Application Development",
      desc: "Modern, secure, and scalable web applications that enhance user experiences.",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      accent: "border-t-emerald-500"
    },
    {
      icon: Building,
      title: "Enterprise Solutions",
      desc: "Business-critical systems that improve productivity and automate workflows.",
      iconBg: "bg-violet-100",
      iconColor: "text-violet-600",
      accent: "border-t-violet-500"
    },
    {
      icon: Server,
      title: "IT Consulting",
      desc: "Technology strategy, architecture planning, and digital transformation consulting.",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
      accent: "border-t-amber-500"
    }
  ];

  const reasons = [
    { icon: Users, title: "Experienced Team", desc: "Seasoned professionals with deep domain expertise across various technology stacks.", iconBg: "bg-blue-100", iconColor: "text-blue-600" },
    { icon: Zap, title: "Scalable Solutions", desc: "Architectures designed to grow seamlessly alongside your business operations.", iconBg: "bg-emerald-100", iconColor: "text-emerald-600" },
    { icon: CheckCircle2, title: "Transparent Communication", desc: "Clear, consistent updates and collaborative approaches throughout the project lifecycle.", iconBg: "bg-violet-100", iconColor: "text-violet-600" },
    { icon: Clock, title: "On-Time Delivery", desc: "Rigorous project management ensuring milestones and deadlines are consistently met.", iconBg: "bg-amber-100", iconColor: "text-amber-600" },
    { icon: Shield, title: "Long-Term Support", desc: "Dedicated maintenance and reliable support post-deployment for continuous optimization.", iconBg: "bg-rose-100", iconColor: "text-rose-600" },
    { icon: Target, title: "Business-Focused Approach", desc: "Aligning every technical decision with your strategic business objectives.", iconBg: "bg-cyan-100", iconColor: "text-cyan-600" }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden bg-[#103152] text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#103152]/90 via-[#103152]/75 to-[#1a4a7a]/80 z-10" />
          <img
            src="/hero.png"
            alt="Enterprise Technology"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 z-10 opacity-5 bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUpVariant}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-400/20 border border-sky-400/40 backdrop-blur-md mb-8">
              <span className="flex h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-sm font-medium tracking-wide text-sky-200">Enterprise Software Solutions</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight mb-6 leading-[1.1]">
              Building Reliable Software Solutions for{" "}
              <span className="text-sky-400">Modern Businesses</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 mb-10 font-light leading-relaxed">
              NeeSoft helps organizations transform ideas into scalable digital products through custom software development, enterprise applications, web platforms, and technology consulting services.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link href="/contact" data-testid="hero-btn-contact">
                <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-8 bg-sky-500 hover:bg-sky-400 text-white transition-transform hover:scale-105 shadow-lg shadow-sky-500/30">
                  Get In Touch <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/services" data-testid="hero-btn-services">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg h-14 px-8 border-white/50 text-white hover:bg-white/10 transition-transform hover:scale-105 bg-transparent">
                  Explore Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating stat badges */}
        <div className="absolute bottom-12 right-8 z-20 hidden lg:flex flex-col gap-3">
          {[
            { value: "15+", label: "Years", color: "bg-sky-500" },
            { value: "100+", label: "Projects", color: "bg-emerald-500" },
            { value: "98%", label: "Satisfaction", color: "bg-violet-500" }
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3">
              <div className={`w-2 h-8 rounded-full ${s.color}`} />
              <div>
                <div className="text-xl font-bold text-white">{s.value}</div>
                <div className="text-xs text-white/60 uppercase tracking-wide">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Trusted By Industry Leaders</p>

          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-8">
            {[
              { name: "Renault Nissan", color: "hover:border-yellow-400 hover:text-yellow-700" },
              { name: "Tata Sky", color: "hover:border-blue-400 hover:text-blue-700" },
              { name: "Aviva", color: "hover:border-emerald-400 hover:text-emerald-700" },
              { name: "VFS Global", color: "hover:border-violet-400 hover:text-violet-700" }
            ].map((client) => (
              <div
                key={client.name}
                className={`px-8 py-4 border-2 border-gray-200 rounded-xl bg-white shadow-sm grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-default ${client.color}`}
              >
                <span className="text-lg font-heading font-black text-gray-700 tracking-tight">{client.name}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-500 max-w-3xl mx-auto">
            Organizations across automotive, financial services, customer services, and technology sectors trust NeeSoft as their technology partner.
          </p>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-[#103152] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-sky-400/20 border border-sky-400/30 text-sky-300 text-sm font-semibold uppercase tracking-widest mb-4">Our Track Record</span>
            <h2 className="text-4xl font-heading font-bold mb-6">Technology Expertise. Business Focus.</h2>
            <p className="text-lg text-white/70 leading-relaxed">
              For over 15 years, NeeSoft has partnered with businesses to build software solutions that improve efficiency, streamline operations, and support long-term growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { target: 15, suffix: "+", label: "Years Experience", color: "text-sky-400", bg: "bg-sky-400/10 border-sky-400/20" },
              { target: 100, suffix: "+", label: "Projects Delivered", color: "text-emerald-400", bg: "bg-emerald-400/10 border-emerald-400/20" },
              { target: 50, suffix: "+", label: "Business Clients", color: "text-violet-400", bg: "bg-violet-400/10 border-violet-400/20" },
              { target: 98, suffix: "%", label: "Client Satisfaction", color: "text-amber-400", bg: "bg-amber-400/10 border-amber-400/20" }
            ].map((stat) => (
              <div key={stat.label} className={`rounded-2xl border p-6 text-center ${stat.bg}`}>
                <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}>
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-medium text-white/60 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/about" data-testid="about-preview-link">
              <span className="inline-flex items-center gap-2 text-sky-400 font-medium hover:text-sky-300 transition-colors cursor-pointer group">
                Learn More About Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-3 block">What We Do</span>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Comprehensive Technology Solutions</h3>
            </motion.div>
            <Link href="/services" data-testid="services-preview-link" className="hidden md:flex">
              <span className="inline-flex items-center gap-2 text-[#103152] font-medium hover:text-sky-600 transition-colors cursor-pointer group">
                View All Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`group p-8 rounded-xl bg-white border-t-4 ${service.accent} shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300`}
              >
                <div className={`w-12 h-12 ${service.iconBg} rounded-lg flex items-center justify-center mb-6`}>
                  <service.icon className={`w-6 h-6 ${service.iconColor}`} />
                </div>
                <h4 className="text-xl font-heading font-bold mb-3 text-gray-900">{service.title}</h4>
                <p className="text-gray-600 line-clamp-3">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link href="/services" data-testid="services-preview-link-mobile">
              <Button variant="outline" className="border-[#103152] text-[#103152]">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why NeeSoft Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-3 block">Why NeeSoft</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">Built on Trust. Driven by Results.</h2>
            <p className="text-gray-500 text-lg">We combine technical excellence with business acumen to deliver measurable results.</p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {reasons.map((reason, idx) => (
              <motion.div
                key={idx}
                variants={fadeUpVariant}
                className="flex gap-4 p-6 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300 bg-white"
              >
                <div className="shrink-0 mt-1">
                  <div className={`w-10 h-10 ${reason.iconBg} rounded-full flex items-center justify-center`}>
                    <reason.icon className={`w-5 h-5 ${reason.iconColor}`} />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-heading font-bold text-gray-900 mb-2">{reason.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{reason.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-br from-[#103152] via-[#0d2a45] to-[#1a4a7a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-sky-400 via-emerald-400 to-violet-400" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">Let's Build Something</h2>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-sky-400 mb-10">Exceptional Together</h2>
          <Link href="/contact" data-testid="cta-banner-btn">
            <Button size="lg" className="bg-white text-[#103152] hover:bg-sky-50 text-lg h-14 px-10 transition-transform hover:scale-105 shadow-xl font-bold">
              Contact Us Today <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
