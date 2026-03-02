import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Copyright,
  ExternalLink,
  Phone,
} from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t border-white/10 pt-20 pb-10 overflow-hidden w-full">
      <div className="max-w-7xl w-full mx-auto px-5 sm:px-10 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="space-y-6">
            <a href="#home" className="text-2xl font-bold text-white block">
              Manas Sisodia
            </a>
            <p className="text-white-200 max-w-xs leading-relaxed text-sm">
              Full-stack developer building scalable applications and digital experiences.
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/Manas2412"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white-200 hover:bg-white hover:text-black hover:scale-110 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={17} />
              </a>
              <a
                href="https://www.linkedin.com/in/manas-sisodia/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white-200 hover:bg-white hover:text-black hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={17} />
              </a>
              <a
                href="mailto:manassisodia3@gmail.com"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white-200 hover:bg-white hover:text-black hover:scale-110 transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={17} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-base">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-white-200 hover:text-white transition-colors flex items-center gap-2 group text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-white/20 rounded-full group-hover:bg-purple transition-colors" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 text-base">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white-200 text-sm">
                <MapPin className="w-4 h-4 text-white/40 mt-0.5 flex-shrink-0" />
                <span>New Delhi, India</span>
              </li>
              <li className="flex items-start gap-3 text-white-200 text-sm">
                <Mail className="w-4 h-4 text-white/40 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:manassisodia3@gmail.com"
                  className="hover:text-white transition-colors break-all"
                >
                  manassisodia3@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-white-200 text-sm">
                <Phone className="w-4 h-4 text-white/40 mt-0.5 flex-shrink-0" />
                <a href="tel:+919810904048" className="hover:text-white transition-colors">
                  +91-9810904048
                </a>
              </li>
            </ul>
          </div>

          {/* CTA Column */}
          <div>
            <h4 className="text-white font-bold mb-6 text-base">Looking for a dev?</h4>
            <p className="text-white-200 mb-6 text-sm leading-relaxed">
              Detail-oriented professional ready to deliver production-grade solutions.
            </p>
            <a
              href="mailto:manassisodia3@gmail.com"
              className="inline-flex items-center gap-2 text-white border-b border-white/60 pb-1 hover:opacity-70 transition-opacity italic text-sm"
            >
              Start a conversation <ExternalLink size={13} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white-200 opacity-60">
          <div className="flex items-center gap-2">
            <Copyright size={13} />
            <span>{currentYear} Manas Sisodia. All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
