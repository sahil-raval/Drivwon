import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import {
  Brain,
  MapPin,
  Workflow,
  Code2,
  BarChart3,
  Users,
  HeadphonesIcon,
  Globe,
  Smartphone,
  Blocks,
  TrendingUp,
  Trash2,
  Zap,
  ShieldCheck,
  Car,
  Plane,
  UtensilsCrossed,
  Cpu,
  FlaskConical,
  Factory,
} from "lucide-react";

// ── Stats ──────────────────────────────────────────────────────────────────────
const stats = [
  { value: "25–50%", label: "Efficiency Gains", sub: "Measurable improvements within 3 months" },
  { value: "30%", label: "Waste Reduction", sub: "Average reduction in material & resource waste" },
  { value: "40%", label: "Faster Processing", sub: "Reduction in processing time through optimised workflows" },
  { value: "~0", label: "Error Elimination", sub: "Significant reduction in costly operational errors" },
];

// ── Core Services ──────────────────────────────────────────────────────────────
const services = [
  {
    icon: <Brain className="w-7 h-7" />,
    title: "AI-Powered Analysis",
    description:
      "Our AI analyses your current processes to identify bottlenecks and optimisation opportunities with pinpoint precision.",
  },
  {
    icon: <MapPin className="w-7 h-7" />,
    title: "On-Site Assessments",
    description:
      "We visit your facilities to understand your unique operational challenges and requirements first-hand.",
  },
  {
    icon: <Workflow className="w-7 h-7" />,
    title: "Custom Workflow Design",
    description:
      "Tailored workflow solutions designed specifically for your industry and operational needs — no cookie-cutter templates.",
  },
  {
    icon: <Code2 className="w-7 h-7" />,
    title: "Custom AI Solutions",
    description:
      "Full-stack AI development from web applications to mobile apps and Web3 platforms — we build it all.",
  },
  {
    icon: <BarChart3 className="w-7 h-7" />,
    title: "Efficiency Tracking",
    description:
      "Real-time monitoring and analytics to measure productivity improvements and ROI at every stage.",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Team Integration",
    description:
      "Seamless integration with your existing teams and comprehensive training programmes for optimal adoption.",
  },
  {
    icon: <HeadphonesIcon className="w-7 h-7" />,
    title: "Ongoing Support",
    description:
      "Continuous optimisation and dedicated support to ensure sustained efficiency improvements long after go-live.",
  },
  {
    icon: <Blocks className="w-7 h-7" />,
    title: "Beyond Workflows: Complete AI Development",
    description:
      "We don't just optimise existing processes — we build custom AI solutions from the ground up across every platform.",
    wide: true,
    subItems: [
      { icon: <Globe className="w-5 h-5" />, label: "Web Applications", sub: "Full-stack web solutions with AI integration" },
      { icon: <Smartphone className="w-5 h-5" />, label: "Mobile Apps", sub: "Native and cross-platform mobile solutions" },
      { icon: <Blocks className="w-5 h-5" />, label: "Web3 Platforms", sub: "Blockchain and decentralised applications" },
    ],
  },
];

// ── Process Steps ──────────────────────────────────────────────────────────────
const steps = [
  {
    num: "01",
    title: "Comprehensive Assessment",
    description:
      "Our team conducts a thorough 3–5 day on-site evaluation of your current workflows, identifying bottlenecks, inefficiencies, and optimisation opportunities.",
    bullets: [
      "Process mapping and documentation",
      "Data collection and analysis",
      "Stakeholder interviews",
      "Performance baseline establishment",
    ],
  },
  {
    num: "02",
    title: "AI-Powered Analysis",
    description:
      "Advanced machine-learning algorithms analyse your operational data to identify patterns, predict outcomes, and design optimal workflow configurations.",
    bullets: [
      "Predictive modelling",
      "Bottleneck identification",
      "Resource optimisation",
      "Performance forecasting",
    ],
  },
  {
    num: "03",
    title: "Custom Solution Design",
    description:
      "We create tailored workflow solutions specifically designed for your industry, facility layout, and operational requirements.",
    bullets: [
      "Workflow redesign",
      "Technology integration",
      "Process automation",
      "Quality control systems",
    ],
  },
  {
    num: "04",
    title: "Implementation & Training",
    description:
      "Seamless deployment of new workflows with comprehensive team training and change-management support.",
    bullets: [
      "Phased implementation",
      "Staff training programmes",
      "Change management",
      "Performance monitoring",
    ],
  },
];

// ── Industries ─────────────────────────────────────────────────────────────────
const industries = [
  {
    icon: <Car className="w-6 h-6" />,
    title: "Automotive Manufacturing",
    desc: "Assembly line optimisation, quality control, and supply chain efficiency.",
    result: "35% efficiency gain, 25% waste reduction",
  },
  {
    icon: <Plane className="w-6 h-6" />,
    title: "Aerospace & Defence",
    desc: "Precision manufacturing, compliance workflows, and safety protocols.",
    result: "40% faster processing, 50% error reduction",
  },
  {
    icon: <UtensilsCrossed className="w-6 h-6" />,
    title: "Food & Beverage",
    desc: "Production line optimisation, quality assurance, and inventory management.",
    result: "30% throughput increase, 20% cost savings",
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Electronics Manufacturing",
    desc: "Component assembly, testing workflows, and quality control.",
    result: "45% efficiency gain, 35% defect reduction",
  },
  {
    icon: <FlaskConical className="w-6 h-6" />,
    title: "Pharmaceuticals",
    desc: "Compliance workflows, batch processing, and quality validation.",
    result: "25% faster production, 99.9% compliance",
  },
  {
    icon: <Factory className="w-6 h-6" />,
    title: "Heavy Industry",
    desc: "Equipment optimisation, maintenance workflows, and safety procedures.",
    result: "30% uptime improvement, 40% maintenance cost reduction",
  },
];

// ── Helpers ────────────────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

// ── Page ───────────────────────────────────────────────────────────────────────
export default function Services() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ── Hero ── */}
      <section className="pt-32 pb-20 container mx-auto px-6">
        <motion.div {...fadeUp()} className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block mb-4 px-4 py-1.5 text-sm font-semibold rounded-full bg-primary/10 text-primary border border-primary/20 uppercase tracking-widest">
            Complete Workflow Transformation
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground">
            From AI-powered workflow optimisation to custom development across web, mobile, and Web3
            platforms — end-to-end solutions that deliver measurable results.
          </p>
        </motion.div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.08)}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center"
            >
              <p className="text-4xl font-display font-bold text-primary mb-1">{s.value}</p>
              <p className="font-semibold mb-1">{s.label}</p>
              <p className="text-sm text-muted-foreground">{s.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* ── Services Grid ── */}
        <motion.h2 {...fadeUp(0.1)} className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
          What We Offer
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              {...fadeUp(index * 0.07)}
              className={`p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 group ${
                service.wide ? "lg:col-span-3" : ""
              }`}
            >
              <div className="mb-5 p-3.5 rounded-xl bg-primary/10 w-fit text-primary group-hover:bg-primary/20 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>

              {service.subItems && (
                <div className="grid sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/10">
                  {service.subItems.map((sub, si) => (
                    <div
                      key={si}
                      className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
                    >
                      <span className="text-primary mt-0.5">{sub.icon}</span>
                      <div>
                        <p className="font-semibold text-sm">{sub.label}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{sub.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Our Process ── */}
      <section className="py-24 bg-white/[0.02] border-y border-white/10">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp()} className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block mb-4 px-4 py-1.5 text-sm font-semibold rounded-full bg-primary/10 text-primary border border-primary/20 uppercase tracking-widest">
              Our Process
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              From Assessment to Optimisation
            </h2>
            <p className="text-muted-foreground text-lg">
              A systematic approach that has delivered results for 500+ facilities worldwide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-5xl font-display font-black text-primary/20 group-hover:text-primary/40 transition-colors leading-none">
                    {step.num}
                  </span>
                  <h3 className="text-xl font-display font-bold">{step.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-5">{step.description}</p>
                <ul className="space-y-2">
                  {step.bullets.map((b, bi) => (
                    <li key={bi} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-5 border-t border-white/10">
                  <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-1">
                    Step {step.num} Deliverables
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Detailed documentation, analysis reports, and actionable recommendations.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries ── */}
      <section className="py-24 container mx-auto px-6">
        <motion.div {...fadeUp()} className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block mb-4 px-4 py-1.5 text-sm font-semibold rounded-full bg-primary/10 text-primary border border-primary/20 uppercase tracking-widest">
            Industries We Serve
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Tailored for Your Industry
          </h2>
          <p className="text-muted-foreground text-lg">
            Our workflow optimisation solutions are adapted to the unique challenges and requirements
            of each sector.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.07)}
              className="p-7 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="mb-4 p-3 rounded-xl bg-primary/10 w-fit text-primary group-hover:bg-primary/20 transition-colors">
                {ind.icon}
              </div>
              <h3 className="text-lg font-display font-bold mb-2">{ind.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{ind.desc}</p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-xs font-semibold text-primary/70 uppercase tracking-widest mb-1">
                  Typical Results
                </p>
                <p className="text-sm font-medium text-primary">{ind.result}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-white/[0.02] border-t border-white/10">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp()} className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Schedule a free on-site assessment and discover how AI-powered workflow optimisation
              can revolutionise your efficiency and output.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
              >
                Schedule Free Assessment
              </a>
              <a
                href="/workflow-optimization"
                className="px-8 py-4 rounded-full bg-white/5 border border-white/10 font-semibold hover:bg-white/10 transition-colors"
              >
                View Full Services
              </a>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Free assessment · No obligation · Results guaranteed
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}