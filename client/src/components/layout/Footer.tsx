import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-20">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-10">
        <div className="space-y-4">
          <h3 className="text-2xl font-display font-bold text-white">
            <img src="/AIWEBSPHERE.png" alt="AI Web Sphere Logo" className="inline-block w-8 h-8 mr-2 -mt-1" />
            AI WEB <span className="text-primary">SPHERE</span>
          </h3>
          <p className="text-muted-foreground text-sm">
            Crafting digital experiences that transcend the ordinary. Based in Australia, serving the globe.
          </p>
        </div>

        <div>
          <h4 className="font-display font-bold text-white mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Branding & Design</li>
            <li>Web Development</li>
            <li>Mobile Applications</li>
            <li>Digital Marketing</li>
            <li>SEO Optimization</li>
            <li>AI Agents</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-white mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            <li><Link href="/quotation" className="hover:text-primary transition-colors">Get a Quote</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-white mb-4">Connect</h4>
          <p className="text-sm text-muted-foreground mb-4">
            Geelong, Australia<br />
            info@aiwebsphere.com.au
          </p>
          <div className="flex gap-4">
            {/* Social Icons would go here */}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-10 pt-10 border-t border-white/5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} AI WEB SPHERE. All rights reserved.
      </div>
    </footer>
  );
}
