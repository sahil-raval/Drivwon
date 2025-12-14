import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutScene from "@/components/3d/AboutScene";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, Award, Users, Lightbulb, Target } from "lucide-react";
import TextReveal from "@/components/ui/TextReveal";
import { useRef } from "react";

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="min-h-screen bg-black text-foreground overflow-hidden" ref={containerRef}>
      <Navbar />
      
      {/* 3D Background Layer - Fixed */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <AboutScene />
      </div>
      
      {/* Content Layer */}
      <div className="relative z-10 pt-32 pb-20">
        
        {/* Hero Section */}
        <div className="container mx-auto px-6 mb-32 min-h-[60vh] flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <h1 className="text-6xl md:text-9xl font-display font-bold mb-8 leading-none tracking-tighter mix-blend-difference">
              <TextReveal text="We Shape Reality" />
            </h1>
            <p className="text-2xl md:text-3xl text-white/80 font-light max-w-2xl leading-relaxed backdrop-blur-sm">
              Transcending the boundaries between the physical and digital worlds.
            </p>
          </motion.div>
        </div>

        {/* Stats / Features Grid */}
        <div className="container mx-auto px-6 mb-32">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Users className="w-8 h-8" />, label: "World Class Team", desc: "Designers & Engineers from top tier firms" },
              { icon: <Award className="w-8 h-8" />, label: "Award Winning", desc: "Recognized by Awwwards, CSSDA, and FWA" },
              { icon: <Target className="w-8 h-8" />, label: "Result Driven", desc: "We focus on metrics that actually matter" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors"
              >
                <div className="mb-6 text-primary">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-2 font-display">{item.label}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Big Text Section */}
        <div className="container mx-auto px-6 py-20">
           <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="border-l-2 border-primary pl-8 md:pl-16"
           >
             <p className="text-3xl md:text-5xl font-light leading-tight">
               "We believe that a website is not just a page on the internet. It is an <span className="text-primary font-bold">extension of your consciousness</span>. It should breathe, react, and inspire."
             </p>
           </motion.div>
        </div>

        {/* Why Choose Us - Horizontal Scroll Style List */}
        <div className="container mx-auto px-6 py-20">
          <h2 className="text-4xl font-display font-bold mb-16">The Methodology</h2>
          <div className="space-y-4">
             {[
               "01. Discovery & Strategy",
               "02. Art Direction & Design",
               "03. Creative Development",
               "04. Quality Assurance",
               "05. Launch & Evolution"
             ].map((step, i) => (
               <motion.div
                 key={i}
                 initial={{ x: -50, opacity: 0 }}
                 whileInView={{ x: 0, opacity: 1 }}
                 transition={{ delay: i * 0.1 }}
                 viewport={{ once: true }}
                 className="group flex items-center justify-between p-8 border-b border-white/10 hover:border-primary transition-colors cursor-pointer bg-black/20 hover:bg-white/5"
               >
                 <span className="text-2xl md:text-4xl font-display font-bold group-hover:text-primary transition-colors">{step}</span>
                 <Lightbulb className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
               </motion.div>
             ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
