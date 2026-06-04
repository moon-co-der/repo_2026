import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, Target, Lightbulb, Users, Award, TrendingUp, Shield } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";

export default function About() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="w-full pt-20">
      {/* Page Hero */}
      <section className="bg-[#103152] py-16 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">About NeeSoft</h1>
          <div className="flex items-center text-sm font-medium text-white/70">
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
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Driving Innovation Through Technology</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  NeeSoft is a software development and IT services company dedicated to helping businesses leverage technology to solve complex challenges and accelerate growth.
                </p>
                <p>
                  We specialize in custom software development, enterprise solutions, web applications, and technology consulting. Our team combines technical expertise with business understanding to deliver solutions that create measurable value.
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } } }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <img src="/about.png" alt="NeeSoft Office and Team" className="w-full h-auto object-cover aspect-[4/3]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-50 text-[#103152] rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To empower businesses through innovative software solutions that improve efficiency, drive growth, and create lasting value.
              </p>
            </div>
            <div className="bg-[#103152] p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-white">
              <div className="w-14 h-14 bg-white/10 text-white rounded-xl flex items-center justify-center mb-6">
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
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">Core Values</h2>
            <p className="text-gray-600">The principles that guide our work and partnerships.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: Shield, title: "Integrity" },
              { icon: Lightbulb, title: "Innovation" },
              { icon: Users, title: "Customer Commitment" },
              { icon: Award, title: "Quality Delivery" },
              { icon: TrendingUp, title: "Continuous Improvement" }
            ].map((value, idx) => (
              <div key={idx} className="p-6 text-center border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 mx-auto bg-[#103152]/5 text-[#103152] rounded-full flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-gray-900">{value.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey & Stats */}
      <section className="py-20 bg-[#103152] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-white/5 p-2">
              <img src="/tech.png" alt="Technology Journey" className="w-full h-auto rounded-xl object-cover aspect-video" />
            </div>
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">Our Journey</h2>
              <p className="text-xl text-white/80 leading-relaxed">
                15+ years of industry experience serving clients across multiple sectors and helping organizations achieve their technology goals.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center pt-10 border-t border-white/20">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-blue-400"><AnimatedCounter target={15} suffix="+" /></div>
              <div className="text-sm font-medium text-white/70 uppercase tracking-wider">Years</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-blue-400"><AnimatedCounter target={100} suffix="+" /></div>
              <div className="text-sm font-medium text-white/70 uppercase tracking-wider">Projects</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-blue-400"><AnimatedCounter target={50} suffix="+" /></div>
              <div className="text-sm font-medium text-white/70 uppercase tracking-wider">Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-blue-400"><AnimatedCounter target={98} suffix="%" /></div>
              <div className="text-sm font-medium text-white/70 uppercase tracking-wider">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}