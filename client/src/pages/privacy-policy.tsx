import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function PrivacyPolicy() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-black text-white selection:bg-primary selection:text-white"
    >
      <Navbar />

      {/* Hero Section */}
      <motion.section className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-4xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-sm md:text-base font-mono text-white/50 mb-6 tracking-widest uppercase"
          >
            (privacy policy.)
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.9] mb-8 tracking-tighter gradient-text"
          >
            Your Privacy <br />
            Matters
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-white/70 font-light mb-12"
          >
            Last updated: December 2025
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Content Sections */}
      <div className="relative z-10">
        {/* Introduction */}
        <motion.section className="py-32 md:py-48 px-6 md:px-12 border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-200px" }}
            >
              <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
                At AIWebSphere, we are committed to protecting your privacy and ensuring you have a positive experience on our website and when using our services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and interact with our services.
              </p>
              <p className="text-lg text-white/80 font-light leading-relaxed">
                Please read this Privacy Policy carefully. By accessing and using AIWebSphere's website and services, you acknowledge that you have read, understood, and agree to be bound by all the provisions of this Privacy Policy.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Information We Collect */}
        <motion.section className="py-32 md:py-48 px-6 md:px-12 border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-200px" }}
              className="space-y-8"
            >
              <h2 className="text-5xl md:text-6xl font-display font-bold gradient-text">
                Information We Collect
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-display font-bold mb-4">Personal Information</h3>
                  <p className="text-white/70 text-lg font-light leading-relaxed">
                    We collect information you voluntarily provide when you contact us, request a quote, subscribe to our newsletter, or use our services. This may include your name, email address, phone number, company information, and project details.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-display font-bold mb-4">Technical Information</h3>
                  <p className="text-white/70 text-lg font-light leading-relaxed">
                    We automatically collect certain information about your device when you visit our website, including IP address, browser type, operating system, referral source, and pages visited. This information helps us understand how our website is used and improve your experience.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-display font-bold mb-4">Cookies and Tracking</h3>
                  <p className="text-white/70 text-lg font-light leading-relaxed">
                    We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences. Some cookies are essential for website functionality, while others help us analyze usage patterns.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* How We Use Your Information */}
        <motion.section className="py-32 md:py-48 px-6 md:px-12 border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-200px" }}
              className="space-y-8"
            >
              <h2 className="text-5xl md:text-6xl font-display font-bold gradient-text">
                How We Use Your Information
              </h2>

              <ul className="space-y-4 text-white/70 text-lg font-light">
                <li className="flex gap-4">
                  <span className="text-primary">▸</span>
                  <span>To provide and improve our services</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary">▸</span>
                  <span>To communicate with you about inquiries and projects</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary">▸</span>
                  <span>To send you newsletters and marketing communications (with your consent)</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary">▸</span>
                  <span>To analyze website usage and improve user experience</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary">▸</span>
                  <span>To comply with legal obligations and protect our rights</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary">▸</span>
                  <span>To develop new products and services</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {/* Data Protection */}
        <motion.section className="py-32 md:py-48 px-6 md:px-12 border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-200px" }}
              className="space-y-8"
            >
              <h2 className="text-5xl md:text-6xl font-display font-bold gradient-text">
                Data Protection & Security
              </h2>

              <p className="text-white/70 text-lg font-light leading-relaxed">
                We implement comprehensive security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, access controls, and regular security audits.
              </p>

              <p className="text-white/70 text-lg font-light leading-relaxed">
                However, no method of transmission over the internet or electronic storage is completely secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee absolute security.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Third-Party Services */}
        <motion.section className="py-32 md:py-48 px-6 md:px-12 border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-200px" }}
              className="space-y-8"
            >
              <h2 className="text-5xl md:text-6xl font-display font-bold gradient-text">
                Third-Party Services
              </h2>

              <p className="text-white/70 text-lg font-light leading-relaxed">
                Our website may contain links to third-party websites and services that are not operated by AIWebSphere. This Privacy Policy does not apply to third-party websites, and we are not responsible for their privacy practices. We encourage you to review the privacy policies of any third-party services before providing your information.
              </p>

              <p className="text-white/70 text-lg font-light leading-relaxed">
                We may use third-party service providers to assist us in operating our website and conducting our business. These providers are contractually obligated to maintain the confidentiality of your information.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Your Rights */}
        <motion.section className="py-32 md:py-48 px-6 md:px-12 border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-200px" }}
              className="space-y-8"
            >
              <h2 className="text-5xl md:text-6xl font-display font-bold gradient-text">
                Your Privacy Rights
              </h2>

              <p className="text-white/70 text-lg font-light leading-relaxed">
                Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, delete, or port your data. You may also have the right to opt-out of certain processing activities.
              </p>

              <p className="text-white/70 text-lg font-light leading-relaxed">
                To exercise any of these rights, please contact us at hello@aiwebsphere.com. We will respond to your request within 30 days in accordance with applicable laws.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Us */}
        <motion.section className="py-32 md:py-48 px-6 md:px-12 border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-200px" }}
              className="space-y-8"
            >
              <h2 className="text-5xl md:text-6xl font-display font-bold gradient-text">
                Questions About Privacy?
              </h2>

              <p className="text-white/70 text-lg font-light leading-relaxed">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
              </p>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-4">
                <p className="text-white font-light">
                  <span className="text-primary font-semibold">Email:</span> hello@aiwebsphere.com
                </p>
                <p className="text-white font-light">
                  <span className="text-primary font-semibold">Location:</span> Sydney, Australia
                </p>
                <p className="text-white font-light">
                  <span className="text-primary font-semibold">Response Time:</span> We aim to respond to all privacy requests within 30 days.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Policy Updates */}
        <motion.section className="py-32 md:py-48 px-6 md:px-12 border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-200px" }}
            >
              <h2 className="text-5xl md:text-6xl font-display font-bold gradient-text mb-8">
                Policy Updates
              </h2>

              <p className="text-white/70 text-lg font-light leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of material changes by updating the "Last Updated" date at the top of this policy. Your continued use of our services after any modifications constitutes your acceptance of the updated Privacy Policy.
              </p>
            </motion.div>
          </div>
        </motion.section>
      </div>

      <Footer />
    </div>
  );
}
