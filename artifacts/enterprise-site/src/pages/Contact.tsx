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
      iconBg: "bg-sky-50",
      iconColor: "text-sky-600"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 XXXXX XXXXX",
      sub: "Mon–Fri, 9 AM – 6 PM IST",
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, Tamil Nadu, India",
      sub: "Global delivery center",
      iconBg: "bg-violet-50",
      iconColor: "text-violet-600"
    },
    {
      icon: Clock,
      label: "Office Hours",
      value: "Mon – Fri",
      sub: "9:00 AM – 6:00 PM IST",
      iconBg: "bg-amber-50",
      iconColor: "text-amber-600"
    }
  ];

  return (
    <div className="w-full pt-20">
      {/* Page Hero */}
      <section className="bg-[#103152] py-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <h1 className="text-[1.75rem] md:text-[2.25rem] font-semibold mb-2">Let's Start a Conversation</h1>
          <p className="text-base text-white/60 max-w-xl mb-4">
            Whether you're planning a new software project, modernizing existing systems, or exploring digital transformation opportunities, our team is ready to help.
          </p>
          <div className="flex items-center text-sm text-white/50">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-1.5" />
            <span className="text-white/80">Contact Us</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Left: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white p-7 md:p-9 rounded-xl shadow-sm border border-gray-100 border-t-4 border-t-[#103152]"
            >
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 mb-3">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Message Sent!</h3>
                  <p className="text-sm text-gray-500 max-w-xs">Thank you for reaching out. A member of our team will get back to you within 24 hours.</p>
                  <Button
                    variant="outline"
                    className="mt-6 border-[#103152] text-[#103152] text-sm"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-semibold text-gray-900 mb-1">Send Us a Message</h2>
                  <p className="text-sm text-gray-500 mb-7">Fill in the form below and we'll get back to you promptly.</p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">Full Name</Label>
                        <Input id="fullName" required placeholder="John Doe" className="h-10" />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="companyName" className="text-sm font-medium text-gray-700">Company Name</Label>
                        <Input id="companyName" required placeholder="Acme Inc." className="h-10" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</Label>
                        <Input id="email" type="email" required placeholder="john@example.com" className="h-10" />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="+91 00000 00000" className="h-10" />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="service" className="text-sm font-medium text-gray-700">Service Interest</Label>
                      <select
                        id="service"
                        required
                        className="flex h-10 w-full items-center rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-[#103152]/40 focus:ring-offset-2"
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

                    <div className="space-y-1.5">
                      <Label htmlFor="details" className="text-sm font-medium text-gray-700">Project Details</Label>
                      <Textarea
                        id="details"
                        required
                        placeholder="Please tell us a bit about your project requirements..."
                        className="min-h-[110px] resize-y text-sm"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-[#103152] hover:bg-[#103152]/90 text-white h-11 text-base font-semibold">
                      Send Inquiry <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                </>
              )}
            </motion.div>

            {/* Right: Contact Info & Image */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-col gap-6"
            >
              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-start gap-3">
                    <div className={`w-10 h-10 ${info.iconBg} ${info.iconColor} rounded-lg flex items-center justify-center shrink-0`}>
                      <info.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">{info.label}</h4>
                      <p className="text-sm font-medium text-gray-800">{info.value}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{info.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Image */}
              <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100 flex-1">
                <img src="/contact.png" alt="NeeSoft Office" className="w-full h-full object-cover min-h-[200px]" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="bg-white border-t border-gray-100">
        <div className="w-full h-72 flex flex-col items-center justify-center text-center p-6 bg-gray-50">
          <div className="w-12 h-12 bg-[#103152]/8 rounded-full flex items-center justify-center mb-4">
            <MapPin className="w-6 h-6 text-[#103152]" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">Chennai, Tamil Nadu, India</h3>
          <p className="text-sm text-gray-500 mb-5">Visit our global delivery center</p>
          <a
            href="https://maps.google.com/?q=Chennai,+Tamil+Nadu,+India"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#103152] text-white text-sm font-semibold rounded-lg hover:bg-[#103152]/90 transition-colors"
          >
            Open in Google Maps <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
