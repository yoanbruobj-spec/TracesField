"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { AnimatedGridBackground, MeshGradientBackground } from "@/components/AnimatedBackground";

function Section({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

// Composant pour les cartes d'approche - design sur-mesure
function ApproachCard({
  title,
  description,
  index,
  color
}: {
  title: string;
  description: string;
  index: number;
  color: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const gradientClasses = {
    red: "from-red-500/20 via-red-500/10 to-transparent",
    purple: "from-purple-500/20 via-purple-500/10 to-transparent",
    blue: "from-blue-500/20 via-blue-500/10 to-transparent",
    emerald: "from-emerald-500/20 via-emerald-500/10 to-transparent",
  }[color];

  const borderClasses = {
    red: "border-red-500/20 group-hover:border-red-500/40",
    purple: "border-purple-500/20 group-hover:border-purple-500/40",
    blue: "border-blue-500/20 group-hover:border-blue-500/40",
    emerald: "border-emerald-500/20 group-hover:border-emerald-500/40",
  }[color];

  const accentClasses = {
    red: "bg-red-500",
    purple: "bg-purple-500",
    blue: "bg-blue-500",
    emerald: "bg-emerald-500",
  }[color];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="group relative"
    >
      {/* Card principale */}
      <div className={`relative bg-white p-8 rounded-2xl border ${borderClasses} transition-all duration-500 overflow-hidden`}>
        {/* Gradient de fond au hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradientClasses} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

        {/* Numéro décoratif */}
        <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
          <span className="text-8xl font-black text-gray-900">
            {(index + 1).toString().padStart(2, '0')}
          </span>
        </div>

        <div className="relative z-10">
          {/* Barre d'accent */}
          <div className={`w-16 h-1 ${accentClasses} rounded-full mb-6`} />

          {/* Contenu */}
          <h3 className="text-2xl font-bold mb-4 text-gray-900 leading-tight">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Barre de progression animée */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100 overflow-hidden">
          <motion.div
            className={`h-full ${accentClasses}`}
            initial={{ width: "0%" }}
            animate={isInView ? { width: "100%" } : { width: "0%" }}
            transition={{ duration: 1.2, delay: index * 0.15 + 0.3 }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function AboutPage() {
  const { t } = useLanguage();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const approaches = [
    {
      title: t("about.approach.item1.title"),
      description: t("about.approach.item1.description"),
      color: "red",
    },
    {
      title: t("about.approach.item2.title"),
      description: t("about.approach.item2.description"),
      color: "purple",
    },
    {
      title: t("about.approach.item3.title"),
      description: t("about.approach.item3.description"),
      color: "blue",
    },
    {
      title: t("about.approach.item4.title"),
      description: t("about.approach.item4.description"),
      color: "emerald",
    },
  ];

  return (
    <>
      {/* Hero Section */}
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-emerald-200/50 mb-8 shadow-lg"
            >
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-700">
                Notre histoire
              </span>
            </motion.div>

            {/* Titre principal */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight"
            >
              {t("about.hero.title")}{" "}
              <span className="text-gradient-animated inline-block">
                {t("about.hero.titleHighlight")}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-light"
            >
              {t("about.hero.subtitle")}
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Qui sommes-nous */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-white" />
        <div className="container mx-auto max-w-5xl relative z-10">
          <Section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Colonne gauche - Titre */}
              <div>
                <span className="inline-block px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-semibold mb-6">
                  Qui sommes-nous
                </span>
                <h2 className="text-4xl md:text-5xl font-black mb-8 text-gray-900">
                  {t("about.who.title")}
                </h2>
              </div>

              {/* Colonne droite - Contenu */}
              <div className="space-y-6">
                <p className="text-xl text-gray-700 leading-relaxed font-light">
                  {t("about.who.p1")}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {t("about.who.p2")}
                </p>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* Notre mission */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-purple-50" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto max-w-5xl relative z-10">
          <Section delay={0.2}>
            <div className="relative bg-white/80 backdrop-blur-sm p-12 md:p-16 rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
              {/* Gradient accent bar */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500" />

              {/* Decorative circles */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br from-red-500/20 to-purple-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl" />

              <div className="relative">
                <h2 className="text-4xl md:text-5xl font-black mb-8 text-gray-900">
                  {t("about.mission.title")}
                </h2>
                <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed font-light">
                  {t("about.mission.text")}
                </p>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* Notre approche */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />

        <div className="container mx-auto max-w-7xl relative z-10">
          <Section delay={0.3}>
            <div className="text-center mb-20">
              <span className="inline-block px-4 py-2 bg-purple-50 text-purple-600 rounded-full text-sm font-semibold mb-6">
                Notre approche
              </span>
              <h2 className="text-5xl md:text-6xl font-black mb-6 text-gray-900">
                {t("about.approach.title")}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {approaches.map((approach, index) => (
                <ApproachCard
                  key={index}
                  {...approach}
                  index={index}
                />
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* Pourquoi nous faire confiance */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto max-w-5xl relative z-10">
          <Section delay={0.4}>
            <div className="relative bg-white/80 backdrop-blur-sm p-12 md:p-16 rounded-3xl shadow-2xl border border-white/20">
              <span className="inline-block px-4 py-2 bg-emerald-50 text-emerald-600 rounded-full text-sm font-semibold mb-6">
                Notre engagement
              </span>
              <h2 className="text-4xl md:text-5xl font-black mb-8 text-gray-900">
                {t("about.trust.title")}
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-light">
                {t("about.trust.p1")}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t("about.trust.p2")}
              </p>
            </div>
          </Section>
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
          <Section delay={0.5}>
            <motion.h2
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-white"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {t("about.cta.title")}
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-white/90 font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t("about.cta.subtitle")}
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-3 bg-white text-red-600 px-10 py-5 rounded-xl text-lg font-bold hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                <span>{t("about.cta.ctaPrimary")}</span>
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
              <Link
                href="/solutions"
                className="group relative px-10 py-5 rounded-xl text-lg font-bold transition-all duration-300 overflow-hidden border-2 border-white text-white hover:bg-white hover:text-red-600"
              >
                {t("about.cta.ctaSecondary")}
              </Link>
            </div>
          </Section>
        </div>

        {/* Decorative bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      </section>
    </>
  );
}
