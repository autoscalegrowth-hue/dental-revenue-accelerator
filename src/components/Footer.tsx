import { Mail, Phone, Facebook, Instagram, Twitter } from "lucide-react";
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
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Solutions</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="#solution" className="hover:text-white">AI Receptionist</a></li>
              <li><a href="#solution" className="hover:text-white">Lead Response</a></li>
              <li><a href="#solution" className="hover:text-white">Treatment Follow-Up</a></li>
              <li><a href="#solution" className="hover:text-white">SMS Sequences</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Company</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="#how" className="hover:text-white">How it works</a></li>
              <li><a href="#results" className="hover:text-white">Case studies</a></li>
              <li><a href="#audit" className="hover:text-white">Free Audit</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Contact</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-secondary" />
                <a href="mailto:orthoautomate@gmail.com" className="hover:text-white">orthoautomate@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary" />
                <a href="tel:+966552190206" className="hover:text-white">+966 55 219 0206</a>
              </li>
              <li className="text-white/50">Mon–Fri · 9am–6pm EST</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row">
          <div>© {new Date().getFullYear()} OrthoAutomate. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
