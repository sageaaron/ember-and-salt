import { Mail, Phone } from "lucide-react";
import { quickLinks, sitemapLinks, socialLinks } from "../data/data";
import Animated from "./Animated";

const Footer = () => {
  return (
    <footer className="px-auto relative mt-44 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-6 justify-between pb-8">
          <div className="flex flex-col items-start text-left">
            <Animated>
              <img src="/assets/e&slogo.svg" alt="Logo" />
            </Animated>

            <Animated delay={0.2}>
              <p className="mt-3 text-sm/5.5 text-zinc-600 max-w-81.25">
                Thoughtful food warm hospitality and a space made for bringing
                people together
              </p>
            </Animated>

            <div className="flex items-center gap-1.5 mt-6">
              {socialLinks.map((social, index) => (
                <Animated key={index} delay={index * 0.05}>
                  <a
                    href={social.href}
                    className="size-7.5 rounded-full border border-slate-300 grid place-content-center"
                  >
                    {social.icon}
                  </a>
                </Animated>
              ))}
            </div>
          </div>

          <div>
            <p className="font-medium mb-5">Quick Links</p>
            <div className="flex flex-col gap-2.5">
              {quickLinks.map((link, index) => (
                <Animated key={link.name} delay={index * 0.05}>
                  <a
                    href={link.href}
                    className="text-zinc-600 hover:text-zinc-500"
                  >
                    {link.name}
                  </a>
                </Animated>
              ))}
            </div>
          </div>

          <div>
            <p className="font-medium mb-5">Get In Touch</p>
            <div className="space-y-2">
              <Animated>
                <a
                  href="mailto:ember&salt@example.com"
                  className="flex items-center gap-1 text-zinc-600 hover:text-zinc-500"
                >
                  <Mail size={16} className="shrink-0" />
                  ember&salt@example.com
                </a>
              </Animated>

              <Animated delay={0.2}>
                <a
                  href="tel:012-345-6789"
                  className="flex items-center gap-1 text-zinc-600 hover:text-zinc-500"
                >
                  <Phone size={16} className="shrink-0" />
                  012-345-6789
                </a>
              </Animated>
            </div>
          </div>

          <div>
            <p className="font-medium mb-5">Sitemap</p>
            <div className="flex flex-col gap-2.5">
              {sitemapLinks.map((sitemap, index) => (
                <Animated key={sitemap.name} delay={index * 0.05}>
                  <a
                    href={sitemap.href}
                    className="text-zinc-600 hover:text-zinc-500"
                  >
                    {sitemap.name}
                  </a>
                </Animated>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t text-zinc-500 border-slate-200 py-4.5 flex justify-between items-center">
          <p>© 2026 Built By - Sage Aaron Padayachee</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
