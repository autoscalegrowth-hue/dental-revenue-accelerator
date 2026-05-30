import { Mail, Phone, Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-surface-darker text-white/70">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="OrthoAutomate logo" width="176" height="44" loading="lazy" decoding="async" className="h-11 w-auto object-contain" />
              <span className="font-display text-lg font-bold text-white">
                Ortho<span className="text-gradient">Automate</span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              AI revenue recovery systems built exclusively for private dental clinics. We turn missed
              calls and stuck treatments into booked revenue.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Facebook, href: "https://www.facebook.com/orthoautomate" },
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white">
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Use cases</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/missed-call-recovery-for-dental-clinics" className="hover:text-white">Missed call recovery</Link></li>
              <li><Link to="/treatment-plan-follow-up-ai" className="hover:text-white">Treatment plan follow-up</Link></li>
              <li><Link to="/dental-lead-conversion-ai" className="hover:text-white">Dental lead conversion</Link></li>
              <li><Link to="/no-show-recovery-automation" className="hover:text-white">No-show recovery</Link></li>
              <li><Link to="/dormant-patient-reactivation" className="hover:text-white">Dormant patient reactivation</Link></li>
              <li><Link to="/roi-calculator" className="hover:text-white">ROI calculator</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Integrations</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/dentrix-ai-revenue-recovery" className="hover:text-white">Dentrix</Link></li>
              <li><Link to="/open-dental-ai-revenue-recovery" className="hover:text-white">Open Dental</Link></li>
              <li><Link to="/eaglesoft-ai-revenue-recovery" className="hover:text-white">Eaglesoft</Link></li>
              <li><Link to="/curve-dental-ai-revenue-recovery" className="hover:text-white">Curve Dental</Link></li>
              <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
              <li><Link to="/compare/manual-follow-up-vs-ai" className="hover:text-white">Manual vs AI</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Company</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/case-studies" className="hover:text-white">Case studies</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link to="/security-and-privacy" className="hover:text-white">Security &amp; privacy</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-secondary" />
                <a href="mailto:orthoautomate@gmail.com" className="hover:text-white">orthoautomate@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary" />
                <a href="tel:+966552190206" className="hover:text-white">+966 55 219 0206</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row">
          <div>© {new Date().getFullYear()} OrthoAutomate. All rights reserved.</div>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="hover:text-white">Privacy</Link>
            <Link to="/terms" className="hover:text-white">Terms</Link>
            <Link to="/security-and-privacy" className="hover:text-white">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
