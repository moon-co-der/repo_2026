import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, Mail, Phone, MapPin, CheckCircle, Clock, ArrowRight } from "lucide-react";
import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const PHONE = "+91 98401 73006";
const PHONE_HREF = "tel:+919840173006";
const EMAIL = "neesoft.support@gmail.com";
const ADDRESS_LINE1 = "Third Floor, No:3, Velachery Bypass Rd,";
const ADDRESS_LINE2 = "Shashi Nagar, Velachery,";
const ADDRESS_LINE3 = "Chennai, Tamil Nadu 600042";
const MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7775.6061808042905!2d80.22327159999999!3d12.984442699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d907b12735b%3A0x1966c9468e235573!2sNeesoft!5e0!3m2!1sen!2sin!4v1780723571221!5m2!1sen!2sin";

// EmailJS Credentials
import emailjs from '@emailjs/browser';
const EMAILJS_SERVICE_ID = "service_1t0ksob";
const EMAILJS_TEMPLATE_ID = "template_hbgzv0h";
const EMAILJS_PUBLIC_KEY = "z8Z3Luvpskx1Q5ybN";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    setIsPending(true);

    try {
      if (EMAILJS_TEMPLATE_ID === "template_id_here" || EMAILJS_PUBLIC_KEY === "public_key_here") {
        // Fallback for demonstration if credentials are not set
        console.warn("EmailJS credentials not fully set. Simulating success...");
        await new Promise(resolve => setTimeout(resolve, 800));
        setIsSubmitted(true);
      } else {
        const result = await emailjs.sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          formRef.current,
          EMAILJS_PUBLIC_KEY
        );

        if (result.text === 'OK') {
          setIsSubmitted(true);
        } else {
          throw new Error("Submission failed");
        }
      }
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Something went wrong while sending your message. Please try again later.");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="w-full pt-20">
      {/* Page Hero */}
      <section className="bg-[#103152] py-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <h1 className="text-[1.75rem] md:text-[2.25rem] font-semibold mb-2">Let's Start a Conversation</h1>
          <p className="text-base text-white/60 max-w-xl mb-4">
            Whether you're planning a new software project, modernizing existing systems, or exploring digital transformation, our team is ready to help.
          </p>
          <div className="flex items-center text-sm text-white/50">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-1.5" />
            <span className="text-white/80">Contact Us</span>
          </div>
        </div>
      </section>

      {/* Contact Info Strip */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Phone */}
            <a href={PHONE_HREF} className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-sky-50 text-sky-600 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-sky-100 transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Phone</p>
                <p className="text-sm font-semibold text-gray-800 group-hover:text-[#103152] transition-colors">{PHONE}</p>
                <p className="text-xs text-gray-400">Mon–Fri, 9 AM – 6 PM IST</p>
              </div>
            </a>

            {/* Email */}
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-emerald-100 transition-colors">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Email</p>
                <p className="text-sm font-semibold text-gray-800 group-hover:text-[#103152] transition-colors">{EMAIL}</p>
                <p className="text-xs text-gray-400">We respond within 24 hours</p>
              </div>
            </a>

            {/* Address */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-violet-50 text-violet-600 rounded-lg flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Office</p>
                <p className="text-sm font-semibold text-gray-800 leading-snug">
                  {ADDRESS_LINE1}<br />
                  {ADDRESS_LINE2}<br />
                  {ADDRESS_LINE3}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Left: Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white p-7 md:p-9 rounded-xl shadow-sm border border-gray-100 border-t-4 border-t-[#103152]"
            >
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 gap-4">
                  <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Message Sent!</h3>
                  <p className="text-sm text-gray-500 max-w-xs">
                    Thank you for reaching out. A member of our team will get back to you within 24 hours.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4 border-[#103152] text-[#103152] text-sm"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-semibold text-gray-900 mb-1">Send Us a Message</h2>
                  <p className="text-sm text-gray-500 mb-6">Fill in the form and we'll get back to you promptly.</p>
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">Full Name</Label>
                        <Input id="fullName" name="name" required placeholder="John Doe" className="h-10 text-sm" />
                      </div>
                      
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</Label>
                        <Input id="email" name="email" type="email" required placeholder="john@example.com" className="h-10 text-sm" />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</Label>
                        <Input id="phone" name="phone" type="tel" placeholder="+91 00000 00000" className="h-10 text-sm" />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="service" className="text-sm font-medium text-gray-700">Service Interest</Label>
                      <select
                        id="service"
                        name="service"
                        required
                        defaultValue=""
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-[#103152]/30 focus:ring-offset-2 text-gray-700"
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
                        name="message"
                        required
                        placeholder="Tell us about your project requirements..."
                        className="min-h-[100px] resize-y text-sm"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isPending}
                      className="w-full bg-[#103152] hover:bg-[#103152]/90 text-white h-11 text-base font-semibold"
                    >
                      {isPending ? "Sending..." : "Send Inquiry"}
                      {!isPending && <ArrowRight className="ml-2 w-4 h-4" />}
                    </Button>
                  </form>
                </>
              )}
            </motion.div>

            {/* Right: Info Cards + Office Hours */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-col gap-5"
            >
              {/* Quick contact cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href={PHONE_HREF} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-start gap-3 group">
                  <div className="w-10 h-10 bg-sky-50 text-sky-600 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-0.5">Call Us</p>
                    <p className="text-sm font-semibold text-gray-800 group-hover:text-[#103152] transition-colors">{PHONE}</p>
                    <p className="text-xs text-gray-400 mt-0.5">Mon–Fri, 9 AM – 6 PM IST</p>
                  </div>
                </a>

                <a href={`mailto:${EMAIL}`} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-start gap-3 group">
                  <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-0.5">Email Us</p>
                    <p className="text-sm font-semibold text-gray-800 group-hover:text-[#103152] transition-colors break-all">{EMAIL}</p>
                    <p className="text-xs text-gray-400 mt-0.5">We reply within 24 hours</p>
                  </div>
                </a>

                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex items-start gap-3 sm:col-span-2">
                  <div className="w-10 h-10 bg-violet-50 text-violet-600 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-0.5">Our Office</p>
                    <p className="text-sm font-semibold text-gray-800 leading-relaxed">
                      {ADDRESS_LINE1}<br />
                      {ADDRESS_LINE2}<br />
                      {ADDRESS_LINE3}
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex items-start gap-3 sm:col-span-2">
                  <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-0.5">Business Hours</p>
                    <p className="text-sm font-semibold text-gray-800">Monday – Friday, 9:00 AM – 6:00 PM IST</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 pb-0">
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-4 h-4 text-[#103152]" />
            <p className="text-sm font-semibold text-gray-700">
              {ADDRESS_LINE1} {ADDRESS_LINE2} {ADDRESS_LINE3}
            </p>
            <a
              href="https://www.google.com/maps/place/Neesoft/@12.9844427,80.2052472,15z/data=!4m10!1m2!2m1!1sThird+Floor,+No:3,+Velachery+Bypass+Rd,+Shashi+Nagar,+Velachery,+Chennai,+Tamil+Nadu+600042!3m6!1s0x3a525d907b12735b:0x1966c9468e235573!8m2!3d12.9844427!4d80.2232716!15sCltUaGlyZCBGbG9vciwgTm86MywgVmVsYWNoZXJ5IEJ5cGFzcyBSZCwgU2hhc2hpIE5hZ2FyLCBWZWxhY2hlcnksIENoZW5uYWksIFRhbWlsIE5hZHUgNjAwMDQykgEQc29mdHdhcmVfY29tcGFueeABAA!16s%2Fg%2F11j8l67y3_?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto text-xs font-medium text-[#103152] hover:underline whitespace-nowrap"
            >
              Open in Google Maps ↗
            </a>
          </div>
        </div>
        <div className="w-full h-80">
          <iframe
            title="NeeSoft Office Location"
            src={MAPS_EMBED}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
}
