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

        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeUpVariant}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8">
              <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-sm font-medium tracking-wide">Enterprise Software Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight mb-6 leading-[1.1]">
              Building Reliable Software Solutions for Modern Businesses
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-10 font-light leading-relaxed">
              NeeSoft helps organizations transform ideas into scalable digital products through custom software development, enterprise applications, web platforms, and technology consulting services.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link href="/contact" data-testid="hero-btn-contact">
                <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-8 bg-[#103152] hover:bg-[#103152]/90 text-white transition-transform hover:scale-105 border border-white/20">
                  Get In Touch
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
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-[#f8f9fb] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-[#103152] font-heading font-semibold tracking-wide uppercase mb-8">Trusted By Industry Leaders</h2>
          
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 mb-8">
            {["Renault Nissan", "Tata Sky", "Aviva", "VFS Global"].map((client) => (
              <div 
                key={client} 
                className="px-6 py-4 border border-gray-300 rounded-lg bg-white shadow-sm grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105 hover:shadow-md hover:border-[#103152]/30 cursor-default"
              >
                <span className="text-xl font-heading font-bold text-gray-800 tracking-tight">{client}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Organizations across automotive, financial services, customer services, and technology sectors trust NeeSoft as their technology partner.
          </p>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-[#103152] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-heading font-bold mb-6">Technology Expertise. Business Focus.</h2>
            <p className="text-lg text-white/80 leading-relaxed">
              For over 15 years, NeeSoft has partnered with businesses to build software solutions that improve efficiency, streamline operations, and support long-term growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2"><AnimatedCounter target={15} suffix="+" /></div>
              <div className="text-sm font-medium text-white/70 uppercase tracking-wider">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2"><AnimatedCounter target={100} suffix="+" /></div>
              <div className="text-sm font-medium text-white/70 uppercase tracking-wider">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2"><AnimatedCounter target={50} suffix="+" /></div>
              <div className="text-sm font-medium text-white/70 uppercase tracking-wider">Business Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 flex justify-center"><ArrowRight className="w-10 h-10 md:w-12 md:h-12" /></div>
              <div className="text-sm font-medium text-white/70 uppercase tracking-wider">Long-Term Support</div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/about" data-testid="about-preview-link">
              <span className="inline-flex items-center gap-2 text-white font-medium hover:text-blue-300 transition-colors cursor-pointer group">
                Learn More About Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="max-w-2xl">
              <h2 className="text-[#103152] font-heading font-semibold tracking-wide uppercase mb-3">Our Services</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Comprehensive Solutions</h3>
            </motion.div>
            <Link href="/services" data-testid="services-preview-link" className="hidden md:flex">
              <span className="inline-flex items-center gap-2 text-[#103152] font-medium hover:text-blue-600 transition-colors cursor-pointer group">
                View All Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Code, title: "Custom Software Development", desc: "Tailored software solutions designed specifically for your unique business requirements." },
              { icon: Monitor, title: "Web Application Development", desc: "Modern, secure, and scalable web applications that enhance user experiences." },
              { icon: Building, title: "Enterprise Solutions", desc: "Business-critical systems that improve productivity and automate workflows." },
              { icon: Server, title: "IT Consulting", desc: "Technology strategy, architecture planning, and digital transformation consulting." }
            ].map((service, idx) => (
              <div 
                key={idx} 
                className="group p-8 rounded-xl bg-white border border-gray-100 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#103152]/10 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-[#103152]" />
                </div>
                <h4 className="text-xl font-heading font-bold mb-3 text-gray-900">{service.title}</h4>
                <p className="text-gray-600 line-clamp-3">{service.desc}</p>
              </div>
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
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">Why Choose NeeSoft?</h2>
            <p className="text-gray-600 text-lg">We combine technical excellence with business acumen to deliver measurable results.</p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { icon: Users, title: "Experienced Team", desc: "Seasoned professionals with deep domain expertise across various technology stacks." },
              { icon: Zap, title: "Scalable Solutions", desc: "Architectures designed to grow seamlessly alongside your business operations." },
              { icon: CheckCircle2, title: "Transparent Communication", desc: "Clear, consistent updates and collaborative approaches throughout the project lifecycle." },
              { icon: Clock, title: "On-Time Delivery", desc: "Rigorous project management ensuring milestones and deadlines are consistently met." },
              { icon: Shield, title: "Long-Term Support", desc: "Dedicated maintenance and reliable support post-deployment for continuous optimization." },
              { icon: Target, title: "Business-Focused Approach", desc: "Aligning every technical decision with your strategic business objectives." }
            ].map((reason, idx) => (
              <motion.div key={idx} variants={fadeUpVariant} className="flex gap-4 p-6">
                <div className="shrink-0 mt-1">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-[#103152]">
                    <reason.icon className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-heading font-bold text-gray-900 mb-2">{reason.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{reason.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-[#103152] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-8">Let's Build Something Exceptional Together</h2>
          <Link href="/contact" data-testid="cta-banner-btn">
            <Button size="lg" className="bg-white text-[#103152] hover:bg-gray-100 text-lg h-14 px-10 transition-transform hover:scale-105">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}