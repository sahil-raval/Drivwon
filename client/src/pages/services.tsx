import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Code, Palette, Smartphone, Globe, Rocket, BarChart, Server, ShoppingCart } from "lucide-react";

const services = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Branding & Design",
    description: "Complete visual identity systems, logo design, brand guidelines, and UI/UX design that captures your brand's essence."
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Web Development",
    description: "High-performance websites built with React, Next.js, or Webflow. We focus on speed, SEO, and user experience."
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile Applications",
    description: "Native iOS and Android apps tailored to your business needs, offering seamless mobile experiences."
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "E-Commerce",
    description: "Shopify and custom e-commerce solutions that convert visitors into loyal customers."
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Digital Marketing",
    description: "SEO, SEM, Social Media Marketing, and Content Strategy to grow your audience and revenue."
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: "Backend & API",
    description: "Robust server-side solutions, API integrations, and database management for complex applications."
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <div className="pt-32 pb-20 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground">
            We offer a full suite of digital services to help your business thrive in the modern world.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="mb-6 p-4 rounded-full bg-primary/10 w-fit text-primary">
                {service.icon}
              </div>
              <h3 className="text-2xl font-display font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
