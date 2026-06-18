import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ChevronRight, Target, Lightbulb, Award, Users2, TrendingUp, Shield, CheckCircle } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const values = [
  { icon: Lightbulb, title: "Innovation", desc: "Continuously exploring better ways to solve complex challenges." },
  { icon: Shield, title: "Integrity", desc: "Honest, ethical, and fully transparent in every engagement." },
  { icon: Award, title: "Excellence", desc: "Highest delivery standards maintained on every project." },
  { icon: Users2, title: "Customer Success", desc: "Our success is entirely measured by our clients' outcomes." },
];

const techStack = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
      { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
      { name: "CodeIgniter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/codeigniter/codeigniter-plain.svg" },
      { name: ".NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" },
    ],
  },
  {
    category: "Mobile",
    items: [
      { name: "Swift", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg" },
      { name: "Objective-C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/objectivec/objectivec-plain.svg" },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
      { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" },
      { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
      { name: "MariaDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mariadb/mariadb-original.svg" },
    ],
  },
  {
    category: "Other",
    items: [
      { name: "Apache", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apache/apache-original.svg" },
      { name: "Adobe PS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" },
    ],
  },
];

export default function About() {
  const allTech = techStack.flatMap((g) => g.items);

  return (
    <div className="w-full pt-16">

      {/* ── Page Header ── */}
      <section className="bg-[#103152] py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center text-[0.72rem] text-white/40 mb-4 gap-1.5">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/70">About Us</span>
          </div>
          <h1 className="text-[1.625rem] md:text-[2.125rem] font-bold text-white mb-2">About NeeSoft</h1>
          <p className="text-[0.9rem] text-white/55 max-w-lg leading-relaxed">
            A trusted technology solutions company delivering enterprise software and digital transformation services since 2008.
          </p>
        </div>
      </section>

      {/* ── Company Introduction ── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} className="lg:col-span-3">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#2563EB] mb-3">Our Story</p>
              <h2 className="text-[1.25rem] md:text-[1.625rem] font-bold text-[#0f172a] mb-5">
                Driving Innovation Through Technology
              </h2>
              <div className="space-y-4 text-[0.9rem] text-[#475569] leading-relaxed">
                <p>
                  NeeSoft is a technology solutions company focused on delivering innovative software products, enterprise applications, mobile solutions, and digital transformation services for businesses across industries.
                </p>
                <p>
                  Founded in 2008, we have grown into a team of seasoned professionals serving clients across automotive, financial services, manufacturing, retail, and technology sectors — building long-term partnerships grounded in trust and results.
                </p>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/services">
                  <span className="inline-flex items-center gap-1.5 h-10 px-5 rounded border border-[#103152] text-[#103152] hover:bg-[#103152] hover:text-white text-sm font-semibold transition-colors">
                    Our Services <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
                <Link href="/contact">
                  <span className="inline-flex items-center h-10 px-5 rounded border border-gray-200 text-[#475569] hover:border-gray-300 hover:text-[#0f172a] text-sm font-medium transition-colors">
                    Get In Touch
                  </span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2 space-y-2.5"
            >
              {[
                "15+ years of software industry experience",
                "100+ enterprise projects delivered",
                "50+ long-term business clients",
                "Serving 8+ industry verticals",
                "Full development lifecycle coverage",
                "Post-deployment support & maintenance",
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3 bg-[#F8FAFC] border border-gray-100 rounded-lg px-4 py-3">
                  <CheckCircle className="w-4 h-4 text-[#2563EB] mt-0.5 shrink-0" />
                  <span className="text-[0.875rem] text-[#334155]">{point}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-12 bg-[#103152]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { target: 15, suffix: "+", label: "Years Experience", sub: "Since 2008" },
              { target: 100, suffix: "+", label: "Projects Delivered", sub: "Across all sectors" },
              { target: 50, suffix: "+", label: "Enterprise Clients", sub: "Active partnerships" },
              { target: 98, suffix: "%", label: "Client Satisfaction", sub: "Consistently tracked" },
            ].map((s, i) => (
              <div key={i} className="bg-white/6 border border-white/10 rounded-xl py-5 px-5">
                <div className="text-[1.75rem] font-bold text-white mb-0.5">
                  <AnimatedCounter target={s.target} suffix={s.suffix} />
                </div>
                <div className="text-[0.8125rem] font-semibold text-white/80 mb-0.5">{s.label}</div>
                <div className="text-[0.72rem] text-white/40">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="py-16 bg-[#F8FAFC] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#2563EB] mb-2">Our Direction</p>
            <h2 className="text-[1.25rem] md:text-[1.5rem] font-bold text-[#0f172a]">Mission &amp; Vision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white p-7 rounded-xl border border-gray-100 border-t-[3px] border-t-[#2563EB] shadow-sm">
              <div className="w-9 h-9 bg-blue-50 text-[#2563EB] rounded-lg flex items-center justify-center mb-4">
                <Target className="w-4.5 h-4.5" />
              </div>
              <h3 className="text-[0.9375rem] font-bold text-[#0f172a] mb-3">Our Mission</h3>
              <p className="text-[0.875rem] text-[#64748b] leading-relaxed">
                To empower organizations through reliable and scalable technology solutions that drive measurable business outcomes.
              </p>
            </div>
            <div className="bg-[#103152] p-7 rounded-xl border-t-[3px] border-t-[#60a5fa] shadow-sm">
              <div className="w-9 h-9 bg-blue-400/20 text-blue-300 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="w-4.5 h-4.5" />
              </div>
              <h3 className="text-[0.9375rem] font-bold text-white mb-3">Our Vision</h3>
              <p className="text-[0.875rem] text-white/65 leading-relaxed">
                To become a trusted global technology partner delivering meaningful digital transformation for enterprises worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#2563EB] mb-2">What We Stand For</p>
            <h2 className="text-[1.25rem] md:text-[1.5rem] font-bold text-[#0f172a] mb-1">Company Values</h2>
            <p className="text-[0.8125rem] text-[#64748b]">The principles that guide every client partnership and decision.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-[#F8FAFC] border border-gray-100 rounded-xl p-6 hover:bg-white hover:shadow-md hover:border-gray-200 transition-all duration-200 text-center"
              >
                <div className="w-10 h-10 mx-auto bg-[#103152]/8 text-[#103152] rounded-lg flex items-center justify-center mb-4">
                  <v.icon className="w-5 h-5" />
                </div>
                <h4 className="text-[0.9rem] font-bold text-[#0f172a] mb-2">{v.title}</h4>
                <p className="text-[0.8rem] text-[#64748b] leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technology Stack ── */}
      <section className="py-16 bg-[#F8FAFC] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#2563EB] mb-2">Technology Expertise</p>
            <h2 className="text-[1.25rem] md:text-[1.75rem] font-bold text-[#0f172a] mb-2">Our Technology Stack</h2>
            <p className="text-[0.875rem] text-[#64748b] max-w-lg mx-auto">
              We work with industry-leading technologies to deliver robust, scalable, and future-proof solutions.
            </p>
          </div>

          {/* Category sections */}
          <div className="space-y-10">
            {techStack.map((group) => (
              <div key={group.category}>
                <h3 className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[#94a3b8] mb-4">{group.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {group.items.map((tech) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -2, boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}
                      className="flex items-center gap-2.5 bg-white border border-gray-100 rounded-lg px-4 py-3 cursor-default transition-colors hover:border-gray-200"
                    >
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-6 h-6 object-contain"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                      />
                      <span className="text-[0.8125rem] font-semibold text-[#334155]">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Full logo grid */}
          <div className="mt-14 pt-10 border-t border-gray-200">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#94a3b8] text-center mb-8">All Technologies</p>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4">
              {allTech.map((tech) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -3 }}
                  className="flex flex-col items-center gap-1.5 p-3 bg-white rounded-lg border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all cursor-default"
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-8 h-8 object-contain"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                  <span className="text-[0.6rem] font-medium text-[#64748b] text-center leading-tight">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Clients Trust Us ── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#2563EB] mb-2">Track Record</p>
            <h2 className="text-[1.25rem] md:text-[1.5rem] font-bold text-[#0f172a]">Why Clients Trust Us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { value: "100+", label: "Successful Projects", desc: "Delivered across diverse industries and technology stacks." },
              { value: "15+", label: "Industry Experience", desc: "Years of proven expertise in enterprise software delivery." },
              { value: "98%", label: "Client Satisfaction", desc: "Consistently high satisfaction scores from long-term clients." },
              { value: "50+", label: "Long-Term Partnerships", desc: "Clients who rely on NeeSoft as their ongoing technology partner." },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-[#F8FAFC] border border-gray-100 rounded-xl p-6 text-center hover:shadow-sm transition-shadow"
              >
                <div className="text-[2rem] font-bold text-[#103152] mb-1">{stat.value}</div>
                <div className="text-[0.875rem] font-bold text-[#0f172a] mb-2">{stat.label}</div>
                <p className="text-[0.8rem] text-[#64748b] leading-relaxed">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-[#103152]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-[1.25rem] md:text-[1.75rem] font-bold text-white mb-3">
            Ready to Build Your Next Digital Solution?
          </h2>
          <p className="text-[0.875rem] text-white/55 mb-7 leading-relaxed">
            Talk to our team about your technology requirements and how we can help.
          </p>
          <Link href="/contact">
            <span className="inline-flex items-center gap-2 h-11 px-8 rounded bg-white text-[#103152] hover:bg-gray-100 text-sm font-bold transition-colors">
              Contact Our Team <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
