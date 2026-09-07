import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import {
  Code2,
  Bot,
  Network,
  BarChart3,
  ShoppingCart,
  Globe,
  Smartphone,
  Sparkles,
  Palette,
  Search,
  Megaphone,
  Rocket,
  Users,
  ShieldCheck,
  Layers,
} from "lucide-react";

// ── Stats ──────────────────────────────────────────────────────────────────────
const stats = [
  { value: "11", label: "Service Lines", sub: "End-to-end coverage from strategy to launch" },
  { value: "50+", label: "Projects Delivered", sub: "Across web, mobile, and AI-driven products" },
  { value: "100%", label: "In-House Build", sub: "No outsourcing — one team, start to finish" },
  { value: "24/7", label: "Support & Monitoring", sub: "Ongoing care after every launch" },
];

// ── Core Services (all 11 service lines) ────────────────────────────────────────
const services = [
  {
    icon: <Code2 className="w-7 h-7" />,
    title: "Custom Software & SaaS Development",
    description:
      "Bespoke software products built around your workflow, not the other way around — from MVP to scalable SaaS platforms.",
  },
  {
    icon: <Bot className="w-7 h-7" />,
    title: "AI Agents & Automation",
    description:
      "Custom AI agents and workflow automation that handle repetitive work, integrate with your tools, and scale with your business.",
  },
  {
    icon: <Network className="w-7 h-7" />,
    title: "System Architecture & IT Consulting",
    description:
      "Technical architecture design, cloud infrastructure planning, and hands-on advisory to keep your systems reliable and future-proof.",
  },
  {
    icon: <BarChart3 className="w-7 h-7" />,
    title: "Data Analytics & Dashboards",
    description:
      "Reporting pipelines and BI dashboards that turn raw data into decisions — built for the metrics that actually matter to you.",
  },
  {
    icon: <ShoppingCart className="w-7 h-7" />,
    title: "E-commerce Development",
    description:
      "Online store setup and development across Shopify, WooCommerce, or fully custom builds — tailored to how you sell.",
  },
  {
    icon: <Globe className="w-7 h-7" />,
    title: "Web Development",
    description:
      "Custom websites and web applications designed and built for performance, from marketing sites to complex platforms.",
  },
  {
    icon: <Smartphone className="w-7 h-7" />,
    title: "Mobile Application Development",
    description:
      "Native and cross-platform iOS and Android apps, built and shipped with the same care as our web products.",
  },
  {
    icon: <Palette className="w-7 h-7" />,
    title: "Branding & Positioning",
    description:
      "Brand identity, strategy, and market positioning that gives your business a clear, consistent voice across every touchpoint.",
  },
  {
    icon: <Sparkles className="w-7 h-7" />,
    title: "UI/UX & Product Design",
    description:
      "Design that supports the build, not just decorates it — wireframes, prototypes, and polished interfaces for web and app.",
  },
  {
    icon: <Search className="w-7 h-7" />,
    title: "Search Engine Optimisation (SEO)",
    description:
      "Organic search strategy focused on visibility and ranking that compounds — technical SEO, content, and on-page optimisation.",
  },
  {
    icon: <Megaphone className="w-7 h-7" />,
    title: "Digital & Social Media Marketing",
    description:
      "Paid and organic campaigns across digital channels, built to drive traffic that converts, not just impressions.",
    wide: true,
    subItems: [
      { icon: <Rocket className="w-5 h-5" />, label: "Paid Campaigns", sub: "Targeted ad strategy across search & social" },
      { icon: <Users className="w-5 h-5" />, label: "Organic Growth", sub: "Content and community-led acquisition" },
      { icon: <Layers className="w-5 h-5" />, label: "Cross-Channel", sub: "Unified strategy across every platform" },
    ],
  },
];

// ── Process Steps ──────────────────────────────────────────────────────────────
const steps = [
  {
    num: "01",
    title: "Discovery & Strategy",
    description:
      "We start by understanding your business, your users, and your goals — mapping out the right mix of services to get there.",
    bullets: [
      "Stakeholder interviews",
      "Technical & market assessment",
      "Scope and roadmap definition",
      "Success metrics established",
    ],
  },
  {
    num: "02",
    title: "Design & Architecture",
    description:
      "Product design and technical architecture come together before a single line of production code is written.",
    bullets: [
      "UI/UX wireframes & prototypes",
      "System & data architecture",
      "Brand and design system alignment",
      "Stakeholder review & sign-off",
    ],
  },
  {
    num: "03",
    title: "Build & Integrate",
    description:
      "Our team builds your software, app, store, or automation in-house — integrating AI, analytics, and third-party tools as needed.",
    bullets: [
      "Agile, milestone-based delivery",
      "Continuous testing & QA",
      "AI/automation integration",
      "Analytics & tracking setup",
    ],
  },
  {
    num: "04",
    title: "Launch & Grow",
    description:
      "We launch with you, then keep optimising — through SEO, marketing, dashboards, and ongoing support.",
    bullets: [
      "Deployment & go-live support",
      "SEO & marketing activation",
      "Performance monitoring",
      "Ongoing iteration & support",
    ],
  },
];

// ── Who We Work With ─────────────────────────────────────────────────────────────
const industries = [
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Startups & SaaS",
    desc: "MVP builds, product-market fit iteration, and scalable architecture for early-stage teams.",
    result: "Faster time-to-launch, built to scale",
  },
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "E-commerce & Retail",
    desc: "Custom storefronts, checkout optimisation, and marketing to convert traffic into sales.",
    result: "Higher conversion, streamlined operations",
  },
  {
    icon: <Network className="w-6 h-6" />,
    title: "Professional Services",
    desc: "Websites, branding, and automation that make client-facing operations run smoother.",
    result: "Stronger positioning, less manual admin",
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: "Operations-Heavy Businesses",
    desc: "AI agents and automation that take repetitive workflows off your team's plate.",
    result: "Reduced manual work, fewer errors",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Data-Driven Teams",
    desc: "Dashboards and analytics pipelines that make your data actually usable day to day.",
    result: "Faster decisions, clearer reporting",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Established Enterprises",
    desc: "System architecture, IT consulting, and cybersecurity-aware infrastructure planning.",
    result: "Reliable systems, future-proofed stack",
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
            Full-Service Technology Partner
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground">
            From custom software and AI agents to branding, marketing, and everything in between —
            one team, end-to-end, built to move your business forward.
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
              From Strategy to Launch — and Beyond
            </h2>
            <p className="text-muted-foreground text-lg">
              A consistent process across every service line, so nothing falls through the cracks.
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
                    Clear documentation, milestones, and sign-off at every stage.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who We Work With ── */}
      <section className="py-24 container mx-auto px-6">
        <motion.div {...fadeUp()} className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block mb-4 px-4 py-1.5 text-sm font-semibold rounded-full bg-primary/10 text-primary border border-primary/20 uppercase tracking-widest">
            Who We Work With
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Built for Businesses Like Yours
          </h2>
          <p className="text-muted-foreground text-lg">
            Our services flex to fit the stage and shape of your business — whether you're launching
            or scaling.
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
                  Typical Outcome
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
              Ready to Build Something?
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Tell us what you're working on — software, an app, an AI agent, or a full brand
              refresh — and we'll map out the right services to get you there.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
              >
                Start a Project
              </a>
              <a
                href="/contact"
                className="px-8 py-4 rounded-full bg-white/5 border border-white/10 font-semibold hover:bg-white/10 transition-colors"
              >
                Book a Free Consultation
              </a>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Free consultation · No obligation · Clear scope before we start
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}