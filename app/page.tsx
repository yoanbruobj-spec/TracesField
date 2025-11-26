"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import {
  LightningIcon,
  BadgeCheckIcon,
  TargetIcon,
  DeviceConnectIcon,
  ReportIcon,
  CalendarIcon,
  BoxIcon,
  UsersIcon,
  ToolIcon,
  AutomationIcon,
} from "@/components/icons/Icons";
import { AnimatedGridBackground, MeshGradientBackground, SpotlightEffect } from "@/components/AnimatedBackground";

// Composant pour les cartes de bénéfices amélioré
function BenefitCard({ icon, title, description, index }: { icon: React.ReactNode; title: string; description: string; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3 }
      }}
      className="group relative bg-white p-8 rounded-2xl overflow-hidden"
    >
      {/* Gradient border effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-[1px] rounded-2xl bg-white" />

      {/* Content */}
      <div className="relative z-10">
        <motion.div
          className="text-red-600 mb-6 inline-block"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          {icon}
        </motion.div>
        <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-gradient transition-all duration-300">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Shine effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>
    </motion.div>
  );
}

export default function Home() {
  const { t } = useLanguage();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const benefits = [
    {
      icon: <LightningIcon size={56} />,
      title: t("home.benefits.benefit1.title"),
      description: t("home.benefits.benefit1.description"),
    },
    {
      icon: <BadgeCheckIcon size={56} />,
      title: t("home.benefits.benefit2.title"),
      description: t("home.benefits.benefit2.description"),
    },
    {
      icon: <TargetIcon size={56} />,
      title: t("home.benefits.benefit3.title"),
      description: t("home.benefits.benefit3.description"),
    },
    {
      icon: <DeviceConnectIcon size={56} />,
      title: t("home.benefits.benefit4.title"),
      description: t("home.benefits.benefit4.description"),
    },
  ];

  return (
    <>
      {/* Spotlight effect */}
      <SpotlightEffect />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated backgrounds */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
        <AnimatedGridBackground />
        <MeshGradientBackground />

        <motion.div
          className="container mx-auto px-4 relative z-10"
          style={{ opacity: heroOpacity, scale: heroScale }}
        >
          <div className="text-center max-w-5xl mx-auto">
            {/* Animated badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-red-200/50 mb-8 shadow-lg"
            >
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-700">
                Solutions digitales innovantes
              </span>
            </motion.div>

            {/* Main heading with gradient animation */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight"
            >
              {t("home.hero.title")}{" "}
              <span className="text-gradient-animated inline-block">
                {t("home.hero.titleHighlight")}
              </span>
              <br />
              {t("home.hero.titleEnd")}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto font-light"
            >
              {t("home.hero.subtitle")}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                href="/contact"
                className="group relative overflow-hidden px-8 py-4 rounded-xl text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-red-600 group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-red-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative text-white flex items-center gap-2">
                  {t("home.hero.ctaPrimary")}
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>

              <Link
                href="/solutions"
                className="group relative px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white border-2 border-gray-200 group-hover:border-red-500 rounded-xl transition-all duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative text-gray-900 group-hover:text-red-600 flex items-center gap-2">
                  {t("home.hero.ctaSecondary")}
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </motion.div>

            {/* Floating indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="mt-16 flex justify-center gap-8 text-sm text-gray-500"
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">100% Sur-mesure</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Support inclus</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">ROI rapide</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Bénéfices Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-red-50 text-red-600 font-semibold text-sm border border-red-100">
                Avantages
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-gray-900">
              {t("home.benefits.title")}{" "}
              <span className="text-gradient inline-block">
                {t("home.benefits.titleHighlight")}
              </span>{" "}
              ?
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              {t("home.benefits.subtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} {...benefit} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-500 to-purple-600" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(139,92,246,0.3),transparent_50%)]" />
        </div>

        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-white"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {t("home.cta.title")}
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-white/90 font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t("home.cta.subtitle")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-3 bg-white text-red-600 px-10 py-5 rounded-xl text-lg font-bold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-white/20"
              >
                <span>{t("home.cta.button")}</span>
                <svg
                  className="w-6 h-6 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      </section>

      {/* Aperçu Solutions */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />
        <AnimatedGridBackground />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-purple-50 text-purple-600 font-semibold text-sm border border-purple-100">
                Nos Solutions
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-gray-900">
              {t("home.modules.title")}
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              {t("home.modules.subtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              { icon: <ReportIcon className="text-red-600" size={40} />, title: t("home.modules.module1"), color: "red" },
              { icon: <CalendarIcon className="text-purple-600" size={40} />, title: t("home.modules.module2"), color: "purple" },
              { icon: <BoxIcon className="text-blue-600" size={40} />, title: t("home.modules.module3"), color: "blue" },
              { icon: <UsersIcon className="text-red-600" size={40} />, title: t("home.modules.module4"), color: "red" },
              { icon: <ToolIcon className="text-purple-600" size={40} />, title: t("home.modules.module5"), color: "purple" },
              { icon: <AutomationIcon className="text-blue-600" size={40} />, title: t("home.modules.module6"), color: "blue" },
            ].map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.2 }
                }}
                className="group relative bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                {/* Hover gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${module.color}-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Content */}
                <div className="relative z-10 flex items-start gap-4">
                  <motion.div
                    className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-gray-50 to-white group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {module.icon}
                  </motion.div>
                  <div className="flex-1 pt-2">
                    <h3 className="font-bold text-gray-900 group-hover:text-red-600 transition-colors leading-snug">
                      {module.title}
                    </h3>
                  </div>
                </div>

                {/* Border gradient on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className={`absolute inset-0 rounded-2xl border-2 border-${module.color}-200`} />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Link
              href="/solutions"
              className="group relative inline-flex items-center gap-3 overflow-hidden px-10 py-5 rounded-xl text-lg font-bold transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-red-600" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-red-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative text-white">{t("home.modules.cta")}</span>
              <svg
                className="relative w-5 h-5 text-white group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
