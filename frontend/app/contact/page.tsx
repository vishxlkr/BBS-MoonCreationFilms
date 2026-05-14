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
   referral: z.string().min(1, "Please select an option"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactPage() {
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
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
         });

         const result = await res.json();

         if (!res.ok) {
            throw new Error(result.error || "Failed to send message");
         }

         setIsSuccess(true);
      } catch (err) {
         setSubmitError(
            err instanceof Error ? err.message : "Failed to send message",
         );
      } finally {
         setIsSubmitting(false);
      }
   };

   return (
      <main className="min-h-screen bg-white">
         {/* Hero Section */}
         {/* <section className="section-dark pt-[142px] pb-24">
            <div className="container-brand">
               <h1 className="headline-lg max-w-4xl">
                  Let's Create Something <br />{" "}
                  <span className="text-gradient">Extraordinary</span>
               </h1>
               <p className="mt-5 max-w-xl text-lg font-semibold text-white/70">
                  Whether it's weddings, cinematic films, commercial shoots or
                  creative storytelling — our team would love to bring your
                  vision to life.
               </p>
            </div>
         </section> */}

         {/* Contact Form Section */}
         <section className="mt-10 scroll-mt-32 bg-gradient-to-b from-gray-50 to-white px-3 py-14 sm:px-6 sm:py-18">
            <div className="max-w-7xl mx-auto">
               <div className="grid items-start gap-6 lg:grid-cols-[1.45fr_0.75fr] lg:gap-8">
                  {/* Contact Form */}
                  <SectionReveal>
                     <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-xl transition-all duration-500 hover:shadow-2xl sm:p-8 md:rounded-[32px] md:p-10">
                        <AnimatePresence mode="wait">
                           {isSuccess ? (
                              <motion.div
                                 key="success"
                                 initial={{ opacity: 0, scale: 0.95 }}
                                 animate={{ opacity: 1, scale: 1 }}
                                 className="flex flex-col items-center justify-center text-center py-16"
                              >
                                 <CheckCircle className="w-20 h-20 text-blue-600 mb-6" />

                                 <h3 className="text-3xl font-bold text-gray-900 mb-3">
                                    Thank You!
                                 </h3>

                                 <p className="text-gray-600 max-w-md">
                                    Your inquiry has been submitted
                                    successfully. Our team will contact you
                                    within 24 hours.
                                 </p>
                              </motion.div>
                           ) : (
                              <motion.form
                                 key="form"
                                 onSubmit={handleSubmit(onSubmit)}
                                 className="space-y-6"
                              >
                                 <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                       Tell us about your project
                                    </h3>
                                    <p className="text-gray-500">
                                       Fill in the details and we&apos;ll get back
                                       to you shortly.
                                    </p>
                                 </div>

                                 <div className="grid gap-5 md:grid-cols-2">
                                    <div>
                                       <input
                                          {...register("fullName")}
                                          type="text"
                                          placeholder="Full Name *"
                                          className="w-full px-5 py-4 rounded-2xl border border-gray-300 bg-gray-50 focus:bg-white focus:border-blue-500 outline-none transition"
                                       />
                                       {errors.fullName && (
                                          <p className="text-red-500 text-sm mt-2">
                                             {errors.fullName.message}
                                          </p>
                                       )}
                                    </div>

                                    <div>
                                       <input
                                          {...register("phone")}
                                          type="tel"
                                          placeholder="Phone Number *"
                                          className="w-full px-5 py-4 rounded-2xl border border-gray-300 bg-gray-50 focus:bg-white focus:border-blue-500 outline-none transition"
                                       />
                                       {errors.phone && (
                                          <p className="text-red-500 text-sm mt-2">
                                             {errors.phone.message}
                                          </p>
                                       )}
                                    </div>
                                 </div>

                                 <input
                                    {...register("email")}
                                    type="email"
                                    placeholder="Email Address *"
                                    className="w-full px-5 py-4 rounded-2xl border border-gray-300 bg-gray-50 focus:bg-white focus:border-blue-500 outline-none transition"
                                 />

                                 <div className="grid gap-5 md:grid-cols-2">
                                    <select
                                       {...register("service")}
                                       className="w-full px-5 py-4 rounded-2xl border border-gray-300 bg-gray-50 focus:bg-white focus:border-blue-500 outline-none transition"
                                    >
                                       <option value="">
                                          Select a Service *
                                       </option>

                                       {servicesData.map((service) => (
                                          <option
                                             key={service.id}
                                             value={service.name}
                                          >
                                             {service.name}
                                          </option>
                                       ))}
                                    </select>

                                    <input
                                       {...register("eventDate")}
                                       type="date"
                                       className="w-full px-5 py-4 rounded-2xl border border-gray-300 bg-gray-50 focus:bg-white focus:border-blue-500 outline-none transition"
                                    />
                                 </div>

                                 <select
                                    {...register("referral")}
                                    className="w-full px-5 py-4 rounded-2xl border border-gray-300 bg-gray-50 focus:bg-white focus:border-blue-500 outline-none transition"
                                 >
                                    <option value="">
                                       How did you hear about us? *
                                    </option>
                                    <option value="Instagram">Instagram</option>
                                    <option value="Google">
                                       Google Search
                                    </option>
                                    <option value="Referral">Referral</option>
                                    <option value="WhatsApp">WhatsApp</option>
                                    <option value="Other">Other</option>
                                 </select>

                                 <textarea
                                    {...register("message")}
                                    rows={5}
                                    placeholder="Tell us about your vision..."
                                    className="w-full px-5 py-4 rounded-2xl border border-gray-300 bg-gray-50 focus:bg-white focus:border-blue-500 outline-none resize-none transition"
                                 />

                                 {submitError && (
                                    <div className="bg-red-50 border border-red-200 text-red-500 p-4 rounded-2xl">
                                       {submitError}
                                    </div>
                                 )}

                                 <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
                                 >
                                    {isSubmitting
                                       ? "Sending..."
                                       : "Submit Inquiry"}
                                 </button>
                              </motion.form>
                           )}
                        </AnimatePresence>
                     </div>
                  </SectionReveal>

                  {/* Contact Info */}
                  <SectionReveal delay={0.2}>
                     <div className="space-y-6">
                        {[
                           {
                              icon: <Mail size={24} />,
                              title: "Email Us",
                              value: contactData.email,
                           },
                           {
                              icon: <Phone size={24} />,
                              title: "Call Us",
                              value: contactData.phones.join(", "),
                           },
                           {
                              icon: <MapPin size={24} />,
                              title: "Location",
                              value: contactData.location,
                           },
                        ].map((item, idx) => (
                           <div
                              key={idx}
                              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-6 md:rounded-[28px]"
                           >
                              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                                 {item.icon}
                              </div>

                              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                                 {item.title}
                              </h4>

                              <p className="text-gray-600 leading-relaxed">
                                 {item.value}
                              </p>
                           </div>
                        ))}
                     </div>
                  </SectionReveal>
               </div>
            </div>
         </section>
      </main>
   );
}
