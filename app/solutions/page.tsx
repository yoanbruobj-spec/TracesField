"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { AnimatedGridBackground, MeshGradientBackground } from "@/components/AnimatedBackground";

// Composant pour chaque module - version moderne
function ModuleCard({
  title,
  problem,
  solution,
  benefits,
  index,
  problemLabel,
  solutionLabel,
  benefitsLabel,
  color,
}: {
  title: string;
  problem: string;
  solution: string;
  benefits: string;
  index: number;
  problemLabel: string;
  solutionLabel: string;
  benefitsLabel: string;
  color: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const colorClasses = {
    red: {
      bg: "from-red-500/10",
      border: "border-red-500/20",
      iconBg: "bg-red-50",
      iconDot: "bg-red-500",
      accent: "bg-red-500",
    },
    purple: {
      bg: "from-purple-500/10",
      border: "border-purple-500/20",
      iconBg: "bg-purple-50",
      iconDot: "bg-purple-500",
      accent: "bg-purple-500",
    },
    blue: {
      bg: "from-blue-500/10",
      border: "border-blue-500/20",
      iconBg: "bg-blue-50",
      iconDot: "bg-blue-500",
      accent: "bg-blue-500",
    },
  }[color] || {
    bg: "from-red-500/10",
    border: "border-red-500/20",
    iconBg: "bg-red-50",
    iconDot: "bg-red-500",
    accent: "bg-red-500",
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="group relative"
    >
      {/* Card container */}
      <div className="relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-all duration-500">
        {/* Gradient background on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses.bg} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

        {/* Header avec forme géométrique et titre */}
        <div className="relative p-8 border-b border-gray-100">
          <div className="flex items-start gap-6">
            {/* Forme géométrique personnalisée - pas d'icône générique */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
              className={`flex-shrink-0 w-16 h-16 rounded-2xl ${colorClasses.iconBg} flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300`}
            >
              {/* Forme géométrique simple */}
              <div className="relative w-8 h-8">
                <div className={`absolute inset-0 ${colorClasses.iconDot} rounded-lg`} />
                <div className={`absolute top-1 left-1 w-6 h-6 ${colorClasses.iconDot} opacity-40 rounded-lg`} />
              </div>
            </motion.div>

            {/* Titre et numéro */}
            <div className="flex-1 pt-2">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                  {title}
                </h3>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full ${colorClasses.accent} text-white text-sm font-bold flex items-center justify-center`}>
                  {index + 1}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Contenu - Aperçu compact */}
        <div className="relative p-8 space-y-6">
          {/* Problème */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1 h-6 bg-red-500 rounded-full" />
              <h4 className="font-bold text-sm uppercase tracking-wider text-red-600">
                {problemLabel}
              </h4>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {problem}
            </p>
          </div>

          {/* Solution */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className={`w-1 h-6 ${colorClasses.accent} rounded-full`} />
              <h4 className="font-bold text-sm uppercase tracking-wider text-gray-900">
                {solutionLabel}
              </h4>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {solution}
            </p>
          </div>

          {/* Bénéfices */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1 h-6 bg-green-500 rounded-full" />
              <h4 className="font-bold text-sm uppercase tracking-wider text-green-600">
                {benefitsLabel}
              </h4>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {benefits}
            </p>
          </div>
        </div>

        {/* Hover overlay subtle */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent" />
        </div>
      </div>

      {/* Accent bar animé en bas */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100 rounded-b-2xl overflow-hidden">
        <motion.div
          className={`h-full ${colorClasses.accent}`}
          initial={{ width: "0%" }}
          animate={isInView ? { width: "100%" } : { width: "0%" }}
          transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
        />
      </div>
    </motion.div>
  );
}

export default function SolutionsPage() {
  const { t } = useLanguage();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const modules = [
    {
      title: t("solutions.modules.module1.title"),
      problem: t("solutions.modules.module1.problem"),
      solution: t("solutions.modules.module1.solution"),
      benefits: t("solutions.modules.module1.benefits"),
      color: "red",
    },
    {
      title: t("solutions.modules.module2.title"),
      problem: t("solutions.modules.module2.problem"),
      solution: t("solutions.modules.module2.solution"),
      benefits: t("solutions.modules.module2.benefits"),
      color: "purple",
    },
    {
      title: t("solutions.modules.module3.title"),
      problem: t("solutions.modules.module3.problem"),
      solution: t("solutions.modules.module3.solution"),
      benefits: t("solutions.modules.module3.benefits"),
      color: "blue",
    },
    {
      title: t("solutions.modules.module4.title"),
      problem: t("solutions.modules.module4.problem"),
      solution: t("solutions.modules.module4.solution"),
      benefits: t("solutions.modules.module4.benefits"),
      color: "red",
    },
    {
      title: t("solutions.modules.module5.title"),
      problem: t("solutions.modules.module5.problem"),
      solution: t("solutions.modules.module5.solution"),
      benefits: t("solutions.modules.module5.benefits"),
      color: "purple",
    },
    {
      title: t("solutions.modules.module6.title"),
      problem: t("solutions.modules.module6.problem"),
      solution: t("solutions.modules.module6.solution"),
      benefits: t("solutions.modules.module6.benefits"),
      color: "blue",
    },
  ];

  return (
    <>
      {/* Hero Section - Style moderne */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Backgrounds animés */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
        <AnimatedGridBackground />
        <MeshGradientBackground />

        <motion.div
          className="container mx-auto px-4 relative z-10"
          style={{ opacity: heroOpacity, scale: heroScale }}
        >
          <div className="text-center max-w-5xl mx-auto pt-24">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-purple-200/50 mb-8 shadow-lg"
            >
              <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-700">
                6 modules personnalisables
              </span>
            </motion.div>

            {/* Titre principal */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight"
            >
              {t("solutions.hero.title")}{" "}
              <span className="text-gradient-animated inline-block">
                {t("solutions.hero.titleHighlight")}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-light mb-12"
            >
              {t("solutions.hero.subtitle")}
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex justify-center gap-8 text-sm text-gray-500"
            >
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
                <span className="font-medium">Modulaire</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
                <span className="font-medium">Évolutif</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
                <span className="font-medium">Sur-mesure</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Modules Grid */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-gray-900">
              Nos <span className="text-gradient">modules</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Chaque module répond à un besoin spécifique. Choisissez ceux qui correspondent à votre activité.
            </p>
          </motion.div>

          {/* Modules grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {modules.map((module, index) => (
              <ModuleCard
                key={index}
                {...module}
                index={index}
                problemLabel={t("solutions.modules.problemLabel")}
                solutionLabel={t("solutions.modules.solutionLabel")}
                benefitsLabel={t("solutions.modules.benefitsLabel")}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Approche modulaire */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Card avec effet glassmorphism */}
            <div className="relative bg-white/80 backdrop-blur-sm p-12 md:p-16 rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
              {/* Gradient accent bar */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500" />

              {/* Decorative elements */}
              <div className="absolute top-8 right-8 w-32 h-32 bg-gradient-to-br from-red-500/10 to-purple-500/10 rounded-full blur-2xl" />
              <div className="absolute bottom-8 left-8 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl" />

              <div className="relative">
                <h2 className="text-4xl md:text-5xl font-black mb-8 text-gray-900">
                  {t("solutions.modular.title")}
                </h2>
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-light">
                  {t("solutions.modular.p1")}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {t("solutions.modular.p2")}
                </p>

                {/* Points clés */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { color: "red", text: "Seulement ce dont vous avez besoin" },
                    { color: "purple", text: "Évolutif selon votre croissance" },
                    { color: "blue", text: "Optimisez votre investissement" }
                  ].map((item, i) => {
                    const dotColors = {
                      red: "bg-red-500",
                      purple: "bg-purple-500",
                      blue: "bg-blue-500"
                    }[item.color];

                    const bgColors = {
                      red: "bg-red-50",
                      purple: "bg-purple-50",
                      blue: "bg-blue-50"
                    }[item.color];

                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        className="flex items-center gap-3 p-4 bg-white/50 rounded-xl border border-gray-100"
                      >
                        <div className={`flex-shrink-0 w-10 h-10 rounded-xl ${bgColors} flex items-center justify-center`}>
                          <div className={`w-4 h-4 rounded ${dotColors}`} />
                        </div>
                        <span className="text-sm font-medium text-gray-700">{item.text}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tarification */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-semibold text-sm border border-blue-100 mb-6">
              Tarification transparente
            </span>
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-gray-900">
              {t("solutions.pricing.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              {t("solutions.pricing.subtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Pricing Card 1 - Développement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-red-600 via-red-500 to-red-600 text-white p-10 rounded-3xl shadow-2xl overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-800/30 rounded-full blur-3xl" />

                <div className="relative">
                  <h3 className="text-3xl font-black mb-4">{t("solutions.pricing.dev.title")}</h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-6xl font-black">{t("solutions.pricing.dev.price")}</span>
                  </div>
                  <p className="text-red-100 mb-8 text-lg">{t("solutions.pricing.dev.subtitle")}</p>

                  <ul className="space-y-4">
                    {[
                      t("solutions.pricing.dev.item1"),
                      t("solutions.pricing.dev.item2"),
                      t("solutions.pricing.dev.item3"),
                      t("solutions.pricing.dev.item4")
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center mt-0.5">
                          <div className="w-3 h-3 rounded bg-white" />
                        </div>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Pricing Card 2 - Maintenance */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-10 rounded-3xl shadow-2xl overflow-hidden border border-gray-700">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

                <div className="relative">
                  <h3 className="text-3xl font-black mb-4">{t("solutions.pricing.maintenance.title")}</h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-6xl font-black">{t("solutions.pricing.maintenance.price")}</span>
                  </div>
                  <p className="text-gray-400 mb-8 text-lg">{t("solutions.pricing.maintenance.subtitle")}</p>

                  <ul className="space-y-4">
                    {[
                      t("solutions.pricing.maintenance.item1"),
                      t("solutions.pricing.maintenance.item2"),
                      t("solutions.pricing.maintenance.item3"),
                      t("solutions.pricing.maintenance.item4"),
                      t("solutions.pricing.maintenance.item5")
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-red-500/20 flex items-center justify-center mt-0.5">
                          <div className="w-3 h-3 rounded bg-red-500" />
                        </div>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Note personnalisée */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-100 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200/30 rounded-full blur-2xl" />
            <div className="relative flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <div className="w-5 h-5 rounded bg-white" />
              </div>
              <p className="text-gray-700 font-medium text-lg">
                {t("solutions.pricing.custom")}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-500 to-purple-600" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(139,92,246,0.3),transparent_50%)]" />
        </div>

        <div className="container mx-auto text-center max-w-4xl relative z-10">
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
              {t("solutions.cta.title")}
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-white/90 font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t("solutions.cta.subtitle")}
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
                <span>{t("solutions.cta.button")}</span>
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
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      </section>
    </>
  );
}
