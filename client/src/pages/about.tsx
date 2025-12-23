import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useScroll } from "framer-motion";
import chandraImg from "@/assets/team/chandra.jpeg";
import sahilImg from "@/assets/team/sahil.jpeg";


export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({});

  const handleImageError = (memberName: string) => {
    setImageErrors(prev => ({ ...prev, [memberName]: true }));
    console.error(`Failed to load image for ${memberName}`);
  };

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
          className="text-center max-w-7xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-sm md:text-base font-mono text-white/50 mb-6 tracking-widest uppercase"
          >
            (about aiwebsphere.)
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50"
          >
            Technology That <br />
            <span className="text-primary">Empowers</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-white/70 font-light mb-12"
          >
            Building intelligent, scalable, and impact-driven digital solutions that help businesses evolve and lead.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Our Vision Section */}
{/* Our Vision Section */}
<motion.section
  className="relative py-32 md:py-48 px-6 md:px-12 border-t border-white/10"
  initial={{ opacity: 1 }} // force visible on mobile
  animate={{ opacity: 1 }}
>
  <div className="max-w-5xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }} // mobile-safe trigger
    >
      <p className="text-sm font-mono text-white/50 uppercase tracking-widest mb-6">
        OUR VISION
      </p>

      <h2 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-8">
        Technology should empower people, simplify{" "}
        <span className="text-primary">complexity</span>, and create measurable value.
      </h2>

      <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed">
        By combining AI innovation with industry insight, we aim to help businesses
        evolve, adapt, and lead in a rapidly changing digital world. We believe
        advanced technology should be practical, secure, and human-centric.
      </p>
    </motion.div>
  </div>
</motion.section>

      {/* About AIWebSphere Section */}
      {/* About AIWebSphere Section */}
<motion.section
  className="relative py-32 md:py-48 px-6 md:px-12 border-t border-white/10"
  initial={{ opacity: 1 }} // ensure visible on mobile
  animate={{ opacity: 1 }}
>
  <div className="max-w-5xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }} // safe on mobile
      className="space-y-8"
    >
      <div>
        <p className="text-sm font-mono text-white/50 uppercase tracking-widest mb-6">
          ABOUT AIWEBSPHERE
        </p>

        <h2 className="text-5xl md:text-6xl font-display font-bold leading-tight mb-8">
          Next-Generation <span className="text-primary">Technology</span> Solutions
        </h2>
      </div>

      <div className="space-y-6">
        <p className="text-lg text-white/80 font-light leading-relaxed">
          AIWebSphere is a next-generation technology company focused on building
          intelligent, scalable, and impact-driven digital solutions. We specialize
          in Artificial Intelligence, automation, web platforms, and smart business
          systems that help organizations streamline operations, enhance
          decision-making, and unlock new growth opportunities.
        </p>

        <p className="text-lg text-white/80 font-light leading-relaxed">
          Our philosophy is simple: advanced technology should be practical, secure,
          and <span className="text-primary">human-centric</span>. By combining
          cutting-edge AI research with real-world industry experience, AIWebSphere
          delivers solutions that are innovative yet grounded, powerful yet easy to
          adopt.
        </p>
      </div>
    </motion.div>
  </div>
</motion.section>


      {/* Team Members Section */}
{/* Team Members Section */}
<motion.section
  className="relative py-32 md:py-48 px-6 md:px-12 border-t border-white/10"
  initial={{ opacity: 1 }} // ensure visible on mobile
  animate={{ opacity: 1 }}
>
  <div className="max-w-6xl mx-auto">
    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }} // safer threshold
      className="mb-20"
    >
      <p className="text-sm font-mono text-white/50 uppercase tracking-widest mb-4">
        LEADERSHIP
      </p>
      <h2 className="text-5xl md:text-7xl font-display font-bold">
        Bridging <span className="text-primary">Innovation</span> and Execution
      </h2>
    </motion.div>

    {/* Team Members */}
    <div className="space-y-32">
      {[
        {
          name: "Chandra Bhatt",
          role: "Director | Strategy, Operations & Industry Integration",
          image: chandraImg,
          bio: "Chandrakant (Chandra) Bhatt brings over a decade of experience spanning technology, real estate, construction, design, and business leadership. With a background in web design, IT systems, and digital platforms, Chandra offers a rare combination of technical insight and real-world industry expertise. As the Founder of Canvas Real Estate and Director of Daytodaydeals.com.au, Chandra has successfully led businesses across property, e-commerce, and digital operations. His experience includes overseeing large product ecosystems, managing technology infrastructure, and guiding clients through complex decision-making processes with clarity and confidence. Chandra’s strong understanding of design functionality, system usability, and client-centric solutions plays a vital role at AIWebSphere—ensuring that advanced technology is always aligned with real business needs. Alongside his professional achievements, he is actively involved with BAPS Swaminarayan Sanstha, contributing to cultural and community initiatives. His balanced approach—combining strategy, technology, and human connection—strengthens AIWebSphere’s ability to deliver solutions that are not only innovative, but practical and sustainable.",
        },
        {
          name: "Sahil Raval",
          role: "Director | Technology & AI Innovation",
          image: sahilImg,
          bio: " Sahil Raval is a technology-driven leader with a strong foundation in Artificial Intelligence, software engineering, and digital transformation. Currently pursuing a Master’s in Applied Artificial Intelligence (Professional) with a specialization in Blockchain and Software Development, Sahil brings a research-oriented yet highly practical mindset to AIWebSphere. With hands-on experience across AI development, full-stack web technologies, automation, and cloud platforms, Sahil has worked on diverse projects ranging from AI-powered workflow solutions and humanoid robotics research to enterprise-level web platforms and digital systems. His technical expertise spans Python, JavaScript, React, Node.js, AI/ML frameworks, cloud architecture, and modern development tools. Beyond engineering, Sahil has played key roles in AI strategy, product design, digital branding, and marketing technology, helping businesses integrate intelligent systems that enhance efficiency and user experience. His ability to blend innovation with execution makes him a driving force behind AIWebSphere’s mission to deliver smart, scalable, and impactful AI solutions.",
        },
      ].map((member, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: i * 0.1 }}
          viewport={{ once: true, amount: 0.15 }} // MOBILE SAFE
        >
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div>
              <div className="relative w-full aspect-square overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover md:grayscale md:hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Text */}
            <div>
              <h3 className="text-4xl md:text-5xl font-display font-bold mb-3">
                {member.name}
              </h3>
              <p className="text-primary font-semibold text-lg mb-8">
                {member.role}
              </p>
              <p className="text-white/70 text-lg font-light leading-relaxed">
                {member.bio}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</motion.section>


      {/* Our Approach Section */}
      <motion.section className="relative py-32 md:py-48 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold">
              How We <span className="text-primary">Work</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "AI-Powered Innovation",
                desc: "Leveraging cutting-edge AI research and machine learning to build intelligent systems that adapt and improve.",
              },
              {
                title: "Industry Expertise",
                desc: "Deep understanding of real-world challenges across multiple industries—from tech to real estate to e-commerce.",
              },
              {
                title: "Practical Solutions",
                desc: "Advanced technology that solves real problems. We balance innovation with usability and adoption.",
              },
              {
                title: "Strategic Partnership",
                desc: "We're not just vendors. We're partners invested in your success and long-term growth.",
              },
            ].map((approach, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="border-l-2 border-primary/30 pl-8 py-4 hover:border-primary transition-colors duration-300"
              >
                <h3 className="text-2xl font-display font-bold mb-4">
                  {approach.title}
                </h3>
                <p className="text-white/70 text-lg font-light leading-relaxed">
                  {approach.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
