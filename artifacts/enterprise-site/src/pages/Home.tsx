import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Building2, 
  ChevronRight, 
  Cloud, 
  Code2, 
  Cpu, 
  LineChart, 
  Lock, 
  Menu, 
  Server, 
  ShieldCheck, 
  Smartphone, 
  Users2, 
  X,
  Globe2,
  Briefcase
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SiGooglecloud, SiReact, SiPython, SiDocker, SiKubernetes, SiTensorflow, SiTerraform, SiTypescript } from "react-icons/si";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <BoxIcon className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl tracking-tight text-primary">TechCorp Solutions</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['Services', 'About', 'Technology', 'Trust', 'Stats'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6"
                data-testid="button-nav-contact"
              >
                Contact Us
              </Button>
            </div>

            <button 
              className="md:hidden text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden">
          <div className="flex flex-col space-y-6">
            {['Services', 'About', 'Technology', 'Trust', 'Stats', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-2xl font-bold text-left text-foreground hover:text-primary transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply z-10" />
          <img 
            src="/hero.png" 
            alt="Enterprise Technology Team" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 z-10 opacity-10 bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeUpVariant}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8">
              <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-sm font-medium tracking-wide">Enterprise Digital Transformation</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
              Architecting the Future of Enterprise Technology
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
              We partner with Fortune 500 companies to build scalable, secure, and resilient software infrastructure that drives business transformation.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="w-full sm:w-auto text-lg h-14 px-8 bg-white text-primary hover:bg-gray-100 transition-colors"
                onClick={() => scrollToSection('services')}
                data-testid="button-hero-explore"
              >
                Explore Services
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto text-lg h-14 px-8 border-white/30 text-white hover:bg-white/10 transition-colors backdrop-blur-sm bg-transparent"
                onClick={() => scrollToSection('contact')}
                data-testid="button-hero-consultation"
              >
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="mb-16 md:mb-24"
          >
            <h2 className="text-primary font-semibold tracking-wide uppercase mb-3">Our Expertise</h2>
            <p className="text-3xl md:text-5xl font-bold text-foreground max-w-3xl leading-tight">
              Comprehensive capabilities for complex technological challenges.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { icon: Code2, title: "Enterprise Software", desc: "Custom software development with rigorous architectural standards for high availability and scalability." },
              { icon: Cloud, title: "Cloud Infrastructure", desc: "Cloud-native modernization, migration strategies, and serverless architectures on AWS, Azure, and GCP." },
              { icon: ShieldCheck, title: "Cybersecurity", desc: "Enterprise-grade security implementations, compliance audits, and zero-trust network architectures." },
              { icon: Cpu, title: "AI & Machine Learning", desc: "Predictive analytics, natural language processing, and intelligent automation integrated into core systems." },
              { icon: LineChart, title: "Digital Transformation", desc: "End-to-end strategic consulting to modernize legacy systems and optimize business processes." },
              { icon: Server, title: "Data Engineering", desc: "Robust data pipelines, warehousing solutions, and business intelligence platforms for actionable insights." },
            ].map((service, index) => (
              <motion.div 
                key={index}
                variants={fadeUpVariant}
                className="group p-8 border border-border bg-card hover:bg-muted/50 rounded-xl transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 md:py-32 bg-muted relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
            >
              <h2 className="text-primary font-semibold tracking-wide uppercase mb-3">About TechCorp</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
                Engineering excellence at a global scale.
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded on the principles of architectural rigor and business-aligned technology, TechCorp Solutions has spent over a decade guiding the world's most demanding organizations through complex digital transformations.
              </p>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Our teams consist of elite engineers, architects, and strategists who approach every initiative not just as a technology project, but as a critical business imperative.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Globe2 className="w-5 h-5 text-primary" />
                    <h4 className="font-bold text-foreground">Global Presence</h4>
                  </div>
                  <p className="text-muted-foreground text-sm">Operating in 12 countries across North America, Europe, and Asia.</p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Users2 className="w-5 h-5 text-primary" />
                    <h4 className="font-bold text-foreground">Elite Talent</h4>
                  </div>
                  <p className="text-muted-foreground text-sm">Top 1% of engineering talent with enterprise-scale experience.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10" />
                <img 
                  src="/about.png" 
                  alt="TechCorp Engineering Team" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-background p-8 rounded-xl shadow-xl border border-border hidden md:block">
                <div className="text-4xl font-extrabold text-primary mb-1">15+</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section id="technology" className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Abstract tech background overlay */}
        <div className="absolute inset-0 z-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-blue-300 font-semibold tracking-wide uppercase mb-3">Technology Partners & Stack</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">
              Built on enterprise-grade foundations.
            </h3>
            <p className="text-lg text-primary-foreground/80">
              We leverage industry-leading platforms and modern frameworks to ensure security, scalability, and performance.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center opacity-80">
            <div className="flex flex-col items-center gap-4 hover:opacity-100 transition-opacity">
              <SiTerraform className="w-16 h-16" />
              <span className="font-medium tracking-wide">Terraform</span>
            </div>
            <div className="flex flex-col items-center gap-4 hover:opacity-100 transition-opacity">
              <SiTypescript className="w-16 h-16" />
              <span className="font-medium tracking-wide">TypeScript</span>
            </div>
            <div className="flex flex-col items-center gap-4 hover:opacity-100 transition-opacity">
              <SiGooglecloud className="w-16 h-16" />
              <span className="font-medium tracking-wide">Google Cloud</span>
            </div>
            <div className="flex flex-col items-center gap-4 hover:opacity-100 transition-opacity">
              <SiKubernetes className="w-16 h-16" />
              <span className="font-medium tracking-wide">Kubernetes</span>
            </div>
            <div className="flex flex-col items-center gap-4 hover:opacity-100 transition-opacity">
              <SiDocker className="w-16 h-16" />
              <span className="font-medium tracking-wide">Docker</span>
            </div>
            <div className="flex flex-col items-center gap-4 hover:opacity-100 transition-opacity">
              <SiReact className="w-16 h-16" />
              <span className="font-medium tracking-wide">React</span>
            </div>
            <div className="flex flex-col items-center gap-4 hover:opacity-100 transition-opacity">
              <SiPython className="w-16 h-16" />
              <span className="font-medium tracking-wide">Python</span>
            </div>
            <div className="flex flex-col items-center gap-4 hover:opacity-100 transition-opacity">
              <SiTensorflow className="w-16 h-16" />
              <span className="font-medium tracking-wide">TensorFlow</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-24 bg-background border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
              <div className="text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Enterprise Projects</div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} transition={{ delay: 0.1 }}>
              <div className="text-5xl font-bold text-primary mb-2">$2B+</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Value Delivered</div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} transition={{ delay: 0.2 }}>
              <div className="text-5xl font-bold text-primary mb-2">99%</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Client Retention</div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} transition={{ delay: 0.3 }}>
              <div className="text-5xl font-bold text-primary mb-2">12</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Global Offices</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Trust Section */}
      <section id="trust" className="py-24 md:py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-primary font-semibold tracking-wide uppercase mb-12">Trusted By Industry Leaders</h2>
          
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Using text representations as generic enterprise placeholders since we can't use real logos easily without specific SVG assets */}
            <div className="text-2xl font-black font-serif tracking-tighter text-foreground">AEROSPACE<span className="text-primary">CORP</span></div>
            <div className="text-2xl font-bold tracking-widest text-foreground">GLOBAL<span className="font-light">FINANCE</span></div>
            <div className="text-2xl font-extrabold text-foreground italic">MedHealth Systems</div>
            <div className="text-2xl font-bold uppercase tracking-tight text-foreground flex items-center gap-2">
              <BoxIcon className="w-6 h-6" /> NEXUS MFG
            </div>
            <div className="text-2xl font-semibold text-foreground">OmniRetail Groups</div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 bg-background relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
            >
              <h2 className="text-primary font-semibold tracking-wide uppercase mb-3">Get in Touch</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Initiate your transformation.
              </h3>
              <p className="text-lg text-muted-foreground mb-12">
                Speak with our executive strategy team to discuss how TechCorp can architect solutions for your most critical business challenges.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center shrink-0">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg">Global Headquarters</h4>
                    <p className="text-muted-foreground">100 Technology Drive, Suite 4000<br/>San Francisco, CA 94105</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center shrink-0">
                    <Smartphone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg">Contact Details</h4>
                    <p className="text-muted-foreground">enterprise@techcorp.solutions<br/>+1 (800) 555-0199</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              className="bg-card p-8 md:p-10 rounded-2xl shadow-xl border border-border"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">First Name</label>
                    <Input placeholder="John" className="h-12 bg-background" data-testid="input-contact-first-name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Last Name</label>
                    <Input placeholder="Doe" className="h-12 bg-background" data-testid="input-contact-last-name" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Work Email</label>
                  <Input type="email" placeholder="john.doe@company.com" className="h-12 bg-background" data-testid="input-contact-email" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Company Name</label>
                  <Input placeholder="Acme Corporation" className="h-12 bg-background" data-testid="input-contact-company" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Service of Interest</label>
                  <select className="flex h-12 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" data-testid="select-contact-service">
                    <option value="" disabled selected>Select an option</option>
                    <option value="software">Enterprise Software</option>
                    <option value="cloud">Cloud Infrastructure</option>
                    <option value="ai">AI & Machine Learning</option>
                    <option value="consulting">Digital Transformation</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Project Details</label>
                  <Textarea placeholder="Briefly describe your business challenge..." className="min-h-[120px] bg-background resize-none" data-testid="input-contact-message" />
                </div>
                
                <Button className="w-full h-12 text-lg bg-primary hover:bg-primary/90 text-primary-foreground" data-testid="button-contact-submit">
                  Request Consultation
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 md:py-16 border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <BoxIcon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-bold text-xl tracking-tight text-white">TechCorp Solutions</span>
              </div>
              <p className="text-primary-foreground/70 max-w-md leading-relaxed">
                Architecting the future of enterprise technology. We build scalable, secure, and resilient software infrastructure for Fortune 500 companies worldwide.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6">Capabilities</h4>
              <ul className="space-y-4 text-primary-foreground/70">
                <li><a href="#" className="hover:text-white transition-colors">Software Engineering</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cloud Infrastructure</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Data & Analytics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cybersecurity</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6">Company</h4>
              <ul className="space-y-4 text-primary-foreground/70">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
            <p>&copy; {new Date().getFullYear()} TechCorp Solutions. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

function BoxIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
}
