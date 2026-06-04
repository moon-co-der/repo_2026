import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 500);
  };

  return (
    <div className="w-full pt-20">
      {/* Page Hero */}
      <section className="bg-[#103152] py-16 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Let's Start a Conversation</h1>
          <p className="text-xl text-white/80 max-w-2xl mb-6">
            Whether you're planning a new software project, modernizing existing systems, or exploring digital transformation opportunities, our team is ready to help.
          </p>
          <div className="flex items-center text-sm font-medium text-white/70">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white">Contact Us</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left: Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100"
            >
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-4">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-gray-900">Message Sent!</h3>
                  <p className="text-gray-600 text-lg">Thank you for reaching out. A member of our team will get back to you shortly.</p>
                  <Button 
                    variant="outline" 
                    className="mt-8"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input id="fullName" required placeholder="John Doe" className="h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company Name</Label>
                      <Input id="companyName" required placeholder="Acme Inc." className="h-12" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" required placeholder="john@example.com" className="h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+91 00000 00000" className="h-12" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interest</Label>
                    <select 
                      id="service" 
                      required
                      className="flex h-12 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      data-testid="select-contact-service"
                    >
                      <option value="" disabled selected>Select a service</option>
                      <option value="custom">Custom Software Development</option>
                      <option value="webapp">Web Application Development</option>
                      <option value="enterprise">Enterprise Solutions</option>
                      <option value="consulting">IT Consulting</option>
                      <option value="maintenance">Maintenance and Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="details">Project Details</Label>
                    <Textarea 
                      id="details" 
                      required 
                      placeholder="Please tell us a bit about your project requirements..." 
                      className="min-h-[120px] resize-y"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-[#103152] hover:bg-[#103152]/90 text-white h-14 text-lg">
                    Send Inquiry
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Right: Contact Info & Image */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col h-full"
            >
              <div className="mb-10 space-y-8 flex-1">
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-[#103152] rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600 text-lg">info@neesoft.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-[#103152] rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600 text-lg">+91 XXXXX XXXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-[#103152] rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-gray-900 mb-1">Location & Hours</h4>
                    <p className="text-gray-600">Chennai, Tamil Nadu, India</p>
                    <p className="text-gray-500 text-sm mt-1">Monday to Friday, 9:00 AM to 6:00 PM IST</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <img src="/contact.png" alt="NeeSoft Office" className="w-full h-64 object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-100 border-t border-gray-200">
        <div className="w-full h-96 flex flex-col items-center justify-center text-center p-6 text-gray-500 bg-gray-200/50 backdrop-blur-sm relative">
          <MapPin className="w-12 h-12 text-[#103152]/40 mb-4" />
          <h3 className="text-2xl font-heading font-bold text-gray-700 mb-2">Chennai, Tamil Nadu, India</h3>
          <p className="mb-4">Visit our global delivery center</p>
          <a 
            href="https://maps.google.com/?q=Chennai,+Tamil+Nadu,+India" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#103152] font-semibold rounded-lg shadow-sm border border-gray-300 hover:shadow-md transition-all hover:bg-gray-50"
          >
            Open in Google Maps
          </a>
        </div>
      </section>
    </div>
  );
}