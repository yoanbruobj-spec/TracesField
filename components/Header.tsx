"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const { t } = useLanguage();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setActiveLink(window.location.pathname);
    }
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/a-propos", label: t("nav.about") },
    { href: "/solutions", label: t("nav.solutions") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Background with glassmorphism */}
        <motion.div
          className="absolute inset-0 transition-all duration-500"
          animate={{
            backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.85)" : "rgba(255, 255, 255, 0)",
            backdropFilter: isScrolled ? "blur(20px) saturate(180%)" : "blur(0px)",
            boxShadow: isScrolled
              ? "0 4px 30px rgba(0, 0, 0, 0.05), 0 1px 0 rgba(255, 255, 255, 0.5) inset"
              : "none",
          }}
        />

        {/* Gradient accent line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[1px]"
          animate={{
            background: isScrolled
              ? "linear-gradient(90deg, transparent, rgba(220, 38, 38, 0.3), rgba(139, 92, 246, 0.3), transparent)"
              : "transparent",
          }}
          transition={{ duration: 0.5 }}
        />

        <nav className="container mx-auto px-4 py-4 relative">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {/* Logo glow effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-red-500/20 to-purple-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex items-center gap-2">
                  {/* Logo icon */}
                  <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center shadow-lg shadow-red-500/20 group-hover:shadow-red-500/40 transition-shadow duration-300">
                    <span className="text-white font-black text-lg font-display">T</span>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent" />
                  </div>

                  {/* Logo text */}
                  <div className="flex flex-col">
                    <span className="text-xl font-black tracking-tight text-gray-900 font-display">
                      Trace<span className="text-gradient">Field</span>
                    </span>
                    <span className="text-[10px] text-gray-500 font-medium -mt-1 tracking-wider uppercase">
                      Solutions digitales
                    </span>
                  </div>
                </div>

                {/* Animated underline */}
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    className={`relative px-4 py-2.5 rounded-xl font-medium transition-all duration-300 group ${
                      activeLink === link.href
                        ? "text-red-600"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                    onClick={() => setActiveLink(link.href)}
                  >
                    {/* Background hover effect */}
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      layoutId={activeLink === link.href ? "activeNav" : undefined}
                    />

                    {/* Active indicator */}
                    {activeLink === link.href && (
                      <motion.div
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-50 to-red-100/50"
                        layoutId="activeNav"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}

                    <span className="relative z-10 font-display">{link.label}</span>

                    {/* Underline on hover */}
                    <motion.span
                      className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-red-500 to-purple-500 rounded-full origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Right Section: Language Switcher & CTA */}
            <motion.div
              className="hidden md:flex items-center gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <LanguageSwitcher />

              {/* CTA Button */}
              <Link href="/contact" className="group relative">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-red-500 to-purple-600 rounded-xl blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                <motion.div
                  className="relative flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-xl font-semibold shadow-lg overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                  <span className="relative font-display">{t("nav.cta")}</span>
                  <motion.svg
                    className="relative w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </motion.div>
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Menu"
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-5 h-4 relative flex flex-col justify-between">
                <motion.span
                  className="absolute left-0 w-5 h-0.5 bg-gray-700 rounded-full"
                  animate={{
                    top: isMobileMenuOpen ? "50%" : "0%",
                    rotate: isMobileMenuOpen ? 45 : 0,
                    translateY: isMobileMenuOpen ? "-50%" : "0%",
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-0.5 bg-gray-700 rounded-full"
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1,
                    scaleX: isMobileMenuOpen ? 0 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="absolute left-0 w-5 h-0.5 bg-gray-700 rounded-full"
                  animate={{
                    bottom: isMobileMenuOpen ? "50%" : "0%",
                    rotate: isMobileMenuOpen ? -45 : 0,
                    translateY: isMobileMenuOpen ? "50%" : "0%",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-50 md:hidden shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              {/* Close button */}
              <div className="flex justify-end p-4">
                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors"
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>

              {/* Menu Content */}
              <div className="px-6 py-4">
                {/* Logo */}
                <div className="mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center">
                      <span className="text-white font-black text-lg font-display">T</span>
                    </div>
                    <span className="text-xl font-black text-gray-900 font-display">
                      Trace<span className="text-gradient">Field</span>
                    </span>
                  </div>
                </div>

                {/* Nav Links */}
                <nav className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setActiveLink(link.href);
                        }}
                        className={`flex items-center gap-3 px-4 py-4 rounded-xl font-medium transition-all duration-300 ${
                          activeLink === link.href
                            ? "bg-gradient-to-r from-red-50 to-red-100/50 text-red-600"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <span className="font-display text-lg">{link.label}</span>
                        {activeLink === link.href && (
                          <motion.div
                            className="ml-auto w-2 h-2 rounded-full bg-red-500"
                            layoutId="mobileActiveNav"
                          />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Divider */}
                <div className="my-6 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

                {/* Language Switcher */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mb-6"
                >
                  <p className="text-sm text-gray-500 mb-3 font-medium">Langue</p>
                  <LanguageSwitcher />
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-4 rounded-xl font-bold shadow-lg shadow-red-500/20 hover:shadow-red-500/40 transition-shadow"
                  >
                    <span className="font-display">{t("nav.cta")}</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-8 pt-6 border-t border-gray-100"
                >
                  <p className="text-sm text-gray-500 mb-4">Contact rapide</p>
                  <a
                    href="mailto:tracefield31@gmail.com"
                    className="flex items-center gap-3 text-gray-700 hover:text-red-600 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-sm">tracefield31@gmail.com</span>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
