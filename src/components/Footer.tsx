import React from "react";
import Link from "next/link";

export const Footer = () => {
  const footerLinks = {
    Navigation: [
      { name: "Pricing", href: "/pricing" },
      { name: "Changelog", href: "/changelog" },
      { name: "404", href: "/404" },
    ],
    Company: [
      { name: "Privacy policy", href: "#" },
      { name: "Terms & conditions", href: "#" },
      { name: "Press", href: "#" },
    ],
    Social: [
      { name: "X (Twitter)", href: "#" },
      { name: "Instagram", href: "#" },
      { name: "LinkedIn", href: "#" },
      { name: "Telegram", href: "#" },
    ],
  };

  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-20">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-black font-bold">
                D
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Dayconn</span>
            </Link>
            <p className="text-white/50 max-w-xs mb-8">
              Start the day with confidence. Stay organized and stress-free.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-6">{category}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/50 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-white/5 gap-4">
          <p className="text-white/30 text-xs">
            © 2025 Dayconn, Inc. Crafted by Hamuform.
          </p>
          <div className="flex items-center gap-6">
             <span className="text-white/30 text-xs hover:text-white transition-colors cursor-pointer">Status</span>
             <span className="text-white/30 text-xs hover:text-white transition-colors cursor-pointer">Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
