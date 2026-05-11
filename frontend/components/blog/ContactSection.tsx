"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Mail, Phone, MapPin } from "lucide-react";
import SectionReveal from "@/components/ui/SectionReveal";
import { servicesData } from "@/lib/services-data";
import { contactData } from "@/lib/contact-data";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Invalid email address"),
  service: z.string().min(1, "Please select a service"),
  eventDate: z.string().optional(),
  message: z.string().optional(),
  referral: z.string().min(1, "Please select an option")
});

type FormData = z.infer<typeof formSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError("");
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      const result = await res.json();
      
      if (!res.ok) throw new Error(result.error || "Failed to send message");
      
      setIsSuccess(true);
    } catch (err: any) {
      setSubmitError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="bg-deep-navy py-24 px-6 md:px-12 border-t border-cinematic-blue/10">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left Col - Form */}
        <SectionReveal>
          <div className="bg-charcoal-night rounded-2xl border border-cinematic-blue/10 p-8 md:p-12 relative overflow-hidden">
            <h2 className="font-heading text-4xl text-cinematic-blue mb-4">Let's Create Together</h2>
            <p className="font-body text-ice-blue/80 mb-10">
              Fill out the form below to inquire about our cinematography services.
            </p>

            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <motion.div
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <CheckCircle className="text-cinematic-blue w-20 h-20 mb-6" />
                  </motion.div>
                  <h3 className="font-heading text-3xl text-ice-blue mb-4">Thank you!</h3>
                  <p className="font-body text-ice-blue/70 max-w-sm">
                    Your inquiry has been received. Our team will be in touch within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleSubmit(onSubmit)} 
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <input 
                        {...register("fullName")}
                        type="text" 
                        placeholder="Full Name *"
                        className="w-full bg-deep-navy border border-cinematic-blue/20 text-ice-blue placeholder-ice-blue/40 px-5 py-4 rounded-lg focus:outline-none focus:border-cinematic-blue focus:ring-1 focus:ring-cinematic-blue transition-all font-body text-sm"
                      />
                      {errors.fullName && <span className="text-[#FF6B6B] text-xs mt-2 block">{errors.fullName.message}</span>}
                    </div>
                    <div>
                      <input 
                        {...register("phone")}
                        type="tel" 
                        placeholder="Phone Number *"
                        className="w-full bg-deep-navy border border-cinematic-blue/20 text-ice-blue placeholder-ice-blue/40 px-5 py-4 rounded-lg focus:outline-none focus:border-cinematic-blue focus:ring-1 focus:ring-cinematic-blue transition-all font-body text-sm"
                      />
                      {errors.phone && <span className="text-[#FF6B6B] text-xs mt-2 block">{errors.phone.message}</span>}
                    </div>
                  </div>

                  <div>
                    <input 
                      {...register("email")}
                      type="email" 
                      placeholder="Email Address *"
                      className="w-full bg-deep-navy border border-cinematic-blue/20 text-ice-blue placeholder-ice-blue/40 px-5 py-4 rounded-lg focus:outline-none focus:border-cinematic-blue focus:ring-1 focus:ring-cinematic-blue transition-all font-body text-sm"
                    />
                    {errors.email && <span className="text-[#FF6B6B] text-xs mt-2 block">{errors.email.message}</span>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <select 
                        {...register("service")}
                        className="w-full bg-deep-navy border border-cinematic-blue/20 text-ice-blue px-5 py-4 rounded-lg focus:outline-none focus:border-cinematic-blue focus:ring-1 focus:ring-cinematic-blue transition-all font-body text-sm appearance-none"
                      >
                        <option value="">Select a Service *</option>
                        {servicesData.map(s => <option key={s.id} value={s.name}>{s.name}</option>)}
                      </select>
                      {errors.service && <span className="text-[#FF6B6B] text-xs mt-2 block">{errors.service.message}</span>}
                    </div>
                    <div>
                      <input 
                        {...register("eventDate")}
                        type="date" 
                        className="w-full bg-deep-navy border border-cinematic-blue/20 text-ice-blue px-5 py-4 rounded-lg focus:outline-none focus:border-cinematic-blue focus:ring-1 focus:ring-cinematic-blue transition-all font-body text-sm"
                        style={{ colorScheme: "dark" }}
                      />
                    </div>
                  </div>

                  <div>
                    <select 
                      {...register("referral")}
                      className="w-full bg-deep-navy border border-cinematic-blue/20 text-ice-blue px-5 py-4 rounded-lg focus:outline-none focus:border-cinematic-blue focus:ring-1 focus:ring-cinematic-blue transition-all font-body text-sm appearance-none"
                    >
                      <option value="">How did you hear about us? *</option>
                      <option value="Instagram">Instagram</option>
                      <option value="Google">Google Search</option>
                      <option value="Referral">Word of Mouth / Referral</option>
                      <option value="WhatsApp">WhatsApp</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.referral && <span className="text-[#FF6B6B] text-xs mt-2 block">{errors.referral.message}</span>}
                  </div>

                  <div>
                    <textarea 
                      {...register("message")}
                      rows={5}
                      placeholder="Tell us about your vision..."
                      className="w-full bg-deep-navy border border-cinematic-blue/20 text-ice-blue placeholder-ice-blue/40 px-5 py-4 rounded-lg focus:outline-none focus:border-cinematic-blue focus:ring-1 focus:ring-cinematic-blue transition-all font-body text-sm resize-none"
                    />
                  </div>

                  {submitError && (
                    <div className="p-4 bg-[#FF6B6B]/10 border border-[#FF6B6B]/30 rounded-lg text-[#FF6B6B] text-sm">
                      {submitError}
                    </div>
                  )}

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-lg font-accent uppercase tracking-wider font-semibold text-charcoal-night bg-gradient-to-r from-cinematic-blue to-rose-blush hover:brightness-110 transition-all hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0"
                  >
                    {isSubmitting ? "Sending..." : "Submit Inquiry"}
                  </button>
                  
                  <p className="text-center text-xs text-ice-blue/40 mt-4">
                    This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </SectionReveal>

        {/* Right Col - Info */}
        <SectionReveal delay={0.2} className="flex flex-col justify-center">
          <div className="space-y-12 lg:pl-12">
            <div>
              <h2 className="font-heading text-3xl text-cinematic-blue mb-6">Contact Information</h2>
              <p className="font-body text-ice-blue/80 leading-relaxed max-w-md">
                Whether you're planning a grand wedding or a commercial production, we'd love to hear from you. Reach out directly using the information below.
              </p>
            </div>

            <div className="space-y-8">
              <a href={`mailto:${contactData.email}`} className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-full border border-cinematic-blue/30 flex items-center justify-center text-cinematic-blue group-hover:bg-cinematic-blue group-hover:text-charcoal-night transition-colors shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-accent uppercase text-sm tracking-wider text-ice-blue mb-1">Email</h4>
                  <p className="font-body text-ice-blue/70 group-hover:text-cinematic-blue transition-colors">{contactData.email}</p>
                </div>
              </a>

              <a href={`tel:${contactData.phones[0].replace(/\\s/g, '')}`} className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-full border border-cinematic-blue/30 flex items-center justify-center text-cinematic-blue group-hover:bg-cinematic-blue group-hover:text-charcoal-night transition-colors shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-accent uppercase text-sm tracking-wider text-ice-blue mb-1">Phone</h4>
                  <div className="flex flex-col">
                    {contactData.phones.map((phone, idx) => (
                      <p key={idx} className="font-body text-ice-blue/70 group-hover:text-cinematic-blue transition-colors">{phone}</p>
                    ))}
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-5 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full border border-cinematic-blue/30 flex items-center justify-center text-cinematic-blue group-hover:bg-cinematic-blue group-hover:text-charcoal-night transition-colors shrink-0">
                    <MapPin size={20} />
                  </div>

                  <div>
                    <h4 className="font-accent uppercase text-sm tracking-wider text-ice-blue mb-1">
                      Location
                    </h4>

                    <p className="font-body text-ice-blue/70 leading-relaxed group-hover:text-cinematic-blue transition-colors">
                      {contactData.location}
                    </p>
                  </div>
                </div>
            </div>
          </div>
        </SectionReveal>

      </div>
    </div>
  );
}
