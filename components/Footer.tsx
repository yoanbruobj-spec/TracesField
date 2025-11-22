"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      content: "tracefield31@gmail.com",
      href: "mailto:tracefield31@gmail.com",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      content: "07 69 80 63 34",
      href: "tel:0769806334",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      content: "France entière",
      href: null,
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="inline-block mb-6 group">
              <h3 className="text-3xl font-black tracking-tight bg-gradient-to-r from-red-500 via-red-400 to-red-500 bg-clip-text text-transparent group-hover:from-purple-500 group-hover:via-red-500 group-hover:to-blue-500 transition-all duration-500">
                TraceField
              </h3>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6">
              {t("footer.description")}
            </p>
            {/* Social links placeholder */}
            <div className="flex gap-3">
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gradient-to-br hover:from-red-500 hover:to-purple-500 flex items-center justify-center transition-all duration-300 cursor-pointer"
                >
                  <div className="w-5 h-5 bg-gray-600 rounded-full" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-6 text-white">
              {t("footer.navigation")}
            </h4>
            <ul className="space-y-3">
              {footerLinks[0].links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center text-gray-400 hover:text-red-500 transition-colors duration-300"
                  >
                    <span className="w-0 h-0.5 bg-red-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-6 text-white">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index}>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="group flex items-start gap-3 text-gray-400 hover:text-red-500 transition-colors duration-300"
                    >
                      <span className="text-red-500 group-hover:scale-110 transition-transform mt-0.5">
                        {item.icon}
                      </span>
                      <span className="flex-1">{item.content}</span>
                    </a>
                  ) : (
                    <div className="flex items-start gap-3 text-gray-400">
                      <span className="text-red-500 mt-0.5">{item.icon}</span>
                      <span className="flex-1">{item.content}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} TraceField. {t("footer.copyright")}
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-500 hover:text-red-500 transition-colors duration-300"
              >
                Confidentialité
              </Link>
              <Link
                href="/terms"
                className="text-gray-500 hover:text-red-500 transition-colors duration-300"
              >
                Conditions
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
    </footer>
  );
}
