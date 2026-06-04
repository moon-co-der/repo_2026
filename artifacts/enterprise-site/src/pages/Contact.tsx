import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, Mail, Phone, MapPin, CheckCircle, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
    }, 500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "info@neesoft.com",
      sub: "We respond within 24 hours",
      iconBg: "bg-sky-100",
      iconColor: "text-sky-600"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 XXXXX XXXXX",
      sub: "Mon–Fri, 9 AM – 6 PM IST",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, Tamil Nadu, India",
      sub: "Global delivery center",
      iconBg: "bg-violet-100",
      iconColor: "text-violet-600"
    },
    {
      icon: Clock,
      label: "Office Hours",
      value: "Mon – Fri",
      sub: "9:00 AM – 6:00 PM IST",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600"
    }
  ];

  return (
    <div className="w-full pt-20">
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-[#103152] to-[#1a4a7a] py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-emerald-400 to-violet-400" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-sky-400/20 border border-sky-400/30 text-sky-300 text-sm font-semibold uppercase tracking-widest mb-6">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Let's Start a Conversation</h1>
          <p className="text-xl text-white/70 max-w-2xl mb-6">
            Whether you're planning a new software project, modernizing existing systems, or exploring digital transformation opportunities, our team is ready to help.
          </p>
          <div className="flex items-center text-sm font-medium text-white/60">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white">Contact Us</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Left: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 border-t-4 border-t-sky-500"
            >
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-500 mb-4">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-gray-900">Message Sent!</h3>
                  <p className="text-gray-600 text-lg">Thank you for reaching out. A member of our team will get back to you within 24 hours.</p>
                  <Button
                    variant="outline"
                    className="mt-8 border-[#103152] text-[#103152]"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mb-2">Send Us a Message</h2>
                  <p className="text-gray-500 mb-8">Fill in the form below and we'll get back to you promptly.</p>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="fullName" className="font-semibold text-gray-700">Full Name</Label>
                        <Input id="fullName" required placeholder="John Doe" className="h-12 focus:border-sky-400 focus:ring-sky-400" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="companyName" className="font-semibold text-gray-700">Company Name</Label>
                        <Input id="companyName" required placeholder="Acme Inc." className="h-12 focus:border-sky-400" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="font-semibold text-gray-700">Email Address</Label>
                        <Input id="email" type="email" required placeholder="john@example.com" className="h-12" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="font-semibold text-gray-700">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="+91 00000 00000" className="h-12" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service" className="font-semibold text-gray-700">Service Interest</Label>
                      <select
                        id="service"
                        required
                        className="flex h-12 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
                        data-testid="select-contact-service"
                      >
                        <option value="" disabled>Select a service</option>
                        <option value="custom">Custom Software Development</option>
                        <option value="webapp">Web Application Development</option>
                        <option value="enterprise">Enterprise Solutions</option>
                        <option value="consulting">IT Consulting</option>
                        <option value="maintenance">Maintenance and Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="details" className="font-semibold text-gray-700">Project Details</Label>
                      <Textarea
                        id="details"
                        required
                        placeholder="Please tell us a bit about your project requirements..."
                        className="min-h-[120px] resize-y"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-[#103152] hover:bg-sky-600 text-white h-14 text-lg font-semibold transition-all hover:scale-[1.01]">
                      Send Inquiry <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                </>
              )}
            </motion.div>

            {/* Right: Contact Info & Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col gap-8"
            >
              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                    <div className={`w-11 h-11 ${info.iconBg} ${info.iconColor} rounded-lg flex items-center justify-center shrink-0`}>
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-gray-800 text-sm mb-0.5">{info.label}</h4>
                      <p className="text-gray-700 font-medium text-sm">{info.value}</p>
                      <p className="text-gray-400 text-xs mt-0.5">{info.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Image */}
              <div className="rounded-2xl overflow-hidden shadow-xl ring-4 ring-gray-100 flex-1">
                <img src="/contact.png" alt="NeeSoft Office" className="w-full h-full object-cover min-h-[220px]" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white border-t border-gray-100">
        <div className="w-full h-80 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-sky-50 to-violet-50 relative">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,rgba(16,49,82,0.08)_0%,transparent_70%)] pointer-events-none" />
          <div className="w-16 h-16 bg-[#103152]/10 rounded-full flex items-center justify-center mb-4">
            <MapPin className="w-8 h-8 text-[#103152]" />
          </div>
          <h3 className="text-2xl font-heading font-bold text-gray-800 mb-2">Chennai, Tamil Nadu, India</h3>
          <p className="text-gray-500 mb-6">Visit our global delivery center</p>
          <a
            href="https://maps.google.com/?q=Chennai,+Tamil+Nadu,+India"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#103152] text-white font-semibold rounded-lg shadow-md hover:bg-sky-600 transition-all hover:scale-105"
          >
            Open in Google Maps <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
