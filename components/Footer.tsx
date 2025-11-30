"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-100px" });

  const footerLinks = [
    {
      title: t("footer.navigation"),
      links: [
        { href: "/", label: t("nav.home") },
        { href: "/a-propos", label: t("nav.about") },
        { href: "/solutions", label: t("nav.solutions") },
        { href: "/contact", label: t("nav.contact") },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      content: "tracefield31@gmail.com",
      href: "mailto:tracefield31@gmail.com",
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer ref={footerRef} className="relative bg-gray-950 text-white overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0aDR2NEgzNnpNMjAgMjBoNHY0SDIweiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />

      {/* Main content */}
      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 group mb-6">
              {/* Logo icon */}
              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center shadow-lg shadow-red-500/20 group-hover:shadow-red-500/40 transition-all duration-300">
                <span className="text-white font-black text-xl font-display">T</span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight font-display">
                  Trace<span className="text-gradient">Field</span>
                </span>
                <span className="text-xs text-gray-500 font-medium tracking-wider uppercase">
                  Solutions digitales
                </span>
              </div>
            </Link>

            <p className="text-gray-400 leading-relaxed mb-8 max-w-md">
              {t("footer.description")}
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="group relative w-11 h-11 rounded-xl bg-gray-800/50 hover:bg-gray-800 flex items-center justify-center transition-all duration-300 overflow-hidden"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  aria-label={social.name}
                >
                  {/* Hover gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Icon */}
                  <span className="relative text-gray-400 group-hover:text-white transition-colors duration-300">
                    {social.icon}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-6 text-white font-display flex items-center gap-2">
              <span className="w-8 h-px bg-gradient-to-r from-red-500 to-transparent" />
              {t("footer.navigation")}
            </h4>
            <ul className="space-y-4">
              {footerLinks[0].links.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="group inline-flex items-center text-gray-400 hover:text-white transition-all duration-300"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-red-500 to-purple-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-3 rounded-full" />
                    <span className="font-medium">{link.label}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-6 text-white font-display flex items-center gap-2">
              <span className="w-8 h-px bg-gradient-to-r from-red-500 to-transparent" />
              {t("footer.contact")}
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      className="group flex items-start gap-3 text-gray-400 hover:text-white transition-all duration-300"
                    >
                      <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-gray-800/50 group-hover:bg-gradient-to-br group-hover:from-red-500/20 group-hover:to-purple-500/20 flex items-center justify-center transition-all duration-300">
                        <span className="text-red-500 group-hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </span>
                      </span>
                      <span className="pt-2.5 font-medium">{item.content}</span>
                    </a>
                  ) : (
                    <div className="flex items-start gap-3 text-gray-400">
                      <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-gray-800/50 flex items-center justify-center">
                        <span className="text-red-500">{item.icon}</span>
                      </span>
                      <span className="pt-2.5 font-medium">{item.content}</span>
                    </div>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6 }}
          className="relative p-8 rounded-2xl bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-800 mb-12 overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white font-display mb-2">
                Restons en contact
              </h3>
              <p className="text-gray-400">
                Recevez nos dernières actualités et offres exclusives.
              </p>
            </div>

            <form className="flex gap-3 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300"
                />
              </div>
              <motion.button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-xl font-semibold shadow-lg shadow-red-500/20 hover:shadow-red-500/40 transition-all duration-300 font-display"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                S&apos;inscrire
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} TraceField. {t("footer.copyright")}
            </p>

            <div className="flex items-center gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-500 hover:text-white transition-colors duration-300 font-medium"
              >
                Confidentialité
              </Link>
              <span className="w-1 h-1 bg-gray-700 rounded-full" />
              <Link
                href="/terms"
                className="text-gray-500 hover:text-white transition-colors duration-300 font-medium"
              >
                Conditions
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
    </footer>
  );
}
