import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <div className="pt-32 pb-20 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">
            We are <span className="text-primary">Builders</span> of the Future.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-12 max-w-2xl">
            AI WEB SPHERE is a premier digital agency based in Australia. We combine aesthetic excellence with technical precision to create digital products that stand out in a crowded marketplace.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 mt-20">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-white/5 border border-white/10 relative">
               {/* Placeholder for team image or office abstract */}
               <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
               <div className="absolute bottom-8 left-8">
                 <h3 className="text-3xl font-display font-bold"> Innovation First</h3>
               </div>
            </div>
          </div>
          
          <div className="space-y-8 flex flex-col justify-center">
            <h2 className="text-3xl font-display font-bold">Why Choose Us?</h2>
            <div className="space-y-4">
              {[
                "100% Australian Owned & Operated",
                "Expert Team of Designers & Developers",
                "Latest Tech Stack (React, Next.js, Three.js)",
                "Focus on ROI and Business Growth",
                "24/7 Support & Maintenance"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-6 h-6" />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
