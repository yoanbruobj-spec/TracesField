"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();
  const { scrollY } = useScroll();

  // Transform scroll to opacity and blur
  const headerOpacity = useTransform(scrollY, [0, 100], [0.8, 0.95]);
  const headerBlur = useTransform(scrollY, [0, 100], [8, 16]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/a-propos", label: t("nav.about") },
    { href: "/solutions", label: t("nav.solutions") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        opacity: headerOpacity,
      }}
    >
      {/* Glassmorphism background */}
      <motion.div
        className="absolute inset-0 bg-white/80 border-b border-white/20"
        style={{
          backdropFilter: useTransform(headerBlur, (value) => `blur(${value}px)`),
          WebkitBackdropFilter: useTransform(headerBlur, (value) => `blur(${value}px)`),
        }}
      />

      {/* Gradient accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />

      <nav className="container mx-auto px-4 py-4 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-red-600 via-red-500 to-red-600 bg-clip-text text-transparent">
                TraceField
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-purple-600 group-hover:w-full transition-all duration-300" />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <Link
                  href={link.href}
                  className="relative px-4 py-2 text-gray-700 hover:text-red-600 transition-colors font-medium group"
                >
                  <span className="relative z-10">{link.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-purple-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Right Section: Language Switcher & CTA */}
          <motion.div
            className="hidden md:flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <LanguageSwitcher />
            <Link
              href="/contact"
              className="relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-red-600 rounded-lg" />
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-purple-500 to-red-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative block px-6 py-2.5 text-white font-semibold">
                {t("nav.cta")}
              </span>
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 shimmer" />
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-red-600 relative group"
            aria-label="Menu"
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gray-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            <svg
              className="w-6 h-6 relative z-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden mt-4 pb-4 pt-4 glass rounded-xl overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col space-y-2 px-2">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all font-medium"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                className="pt-4 border-t border-gray-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="px-4">
                  <LanguageSwitcher />
                </div>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block mx-2 bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-red-500/30 transition-all font-semibold text-center"
                >
                  {t("nav.cta")}
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
