"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import {
  AnimatedGridBackground,
  MeshGradientBackground,
  FloatingParticles,
  Card3D,
} from "@/components/AnimatedBackground";
import {
  ReportIcon,
  CalendarIcon,
  BoxIcon,
  UsersIcon,
  ToolIcon,
  AutomationIcon,
} from "@/components/icons/Icons";

// Module Card Component - Premium Design
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
  icon,
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
  icon: React.ReactNode;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isExpanded, setIsExpanded] = useState(false);

  const colorConfig: { [key: string]: { gradient: string; light: string; text: string; border: string; glow: string } } = {
    red: {
      gradient: "from-red-500 to-red-600",
      light: "bg-red-50",
      text: "text-red-600",
      border: "border-red-200 hover:border-red-400",
      glow: "group-hover:shadow-red-500/20",
    },
    purple: {
      gradient: "from-purple-500 to-purple-600",
      light: "bg-purple-50",
      text: "text-purple-600",
      border: "border-purple-200 hover:border-purple-400",
      glow: "group-hover:shadow-purple-500/20",
    },
    blue: {
      gradient: "from-blue-500 to-blue-600",
      light: "bg-blue-50",
      text: "text-blue-600",
      border: "border-blue-200 hover:border-blue-400",
      glow: "group-hover:shadow-blue-500/20",
    },
  };

  const colors = colorConfig[color] || colorConfig.red;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, rotateX: -5 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 60, rotateX: -5 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group"
    >
      <Card3D className="h-full">
        <div
          className={`relative h-full bg-white rounded-3xl overflow-hidden border-2 ${colors.border} shadow-lg hover:shadow-2xl ${colors.glow} transition-all duration-500`}
        >
          {/* Top gradient bar */}
          <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${colors.gradient}`} />

          {/* Gradient overlay on hover */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${colors.light} opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
          />

          {/* Number badge */}
          <div className="absolute top-6 right-6 z-10">
            <motion.div
              className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${colors.gradient} text-white font-black text-lg flex items-center justify-center shadow-lg`}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              {index + 1}
            </motion.div>
          </div>

          {/* Header */}
          <div className="relative p-8 pb-6">
            <div className="flex items-start gap-5">
              <motion.div
                className={`flex-shrink-0 w-16 h-16 rounded-2xl ${colors.light} flex items-center justify-center shadow-md`}
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {icon}
              </motion.div>
              <div className="flex-1 pt-1">
                <h3 className="text-2xl font-black text-gray-900 leading-tight font-display pr-16">
                  {title}
                </h3>
              </div>
            </div>
          </div>

          {/* Content sections */}
          <div className="relative px-8 pb-8 space-y-5">
            {/* Problem */}
            <div className="relative pl-5 border-l-4 border-red-400/50">
              <h4 className="text-xs font-bold uppercase tracking-widest text-red-600 mb-2 font-display">
                {problemLabel}
              </h4>
              <p className="text-gray-600 leading-relaxed text-sm">{problem}</p>
            </div>

            {/* Solution */}
            <div className={`relative pl-5 border-l-4 ${color === "red" ? "border-red-500" : color === "purple" ? "border-purple-500" : "border-blue-500"}`}>
              <h4 className={`text-xs font-bold uppercase tracking-widest ${colors.text} mb-2 font-display`}>
                {solutionLabel}
              </h4>
              <p className="text-gray-700 leading-relaxed text-sm font-medium">{solution}</p>
            </div>

            {/* Benefits */}
            <div className="relative pl-5 border-l-4 border-emerald-500">
              <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2 font-display">
                {benefitsLabel}
              </h4>
              <p className="text-gray-600 leading-relaxed text-sm">{benefits}</p>
            </div>
          </div>

          {/* Bottom progress bar animation */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100 overflow-hidden">
            <motion.div
              className={`h-full bg-gradient-to-r ${colors.gradient}`}
              initial={{ width: "0%" }}
              animate={isInView ? { width: "100%" } : { width: "0%" }}
              transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
            />
          </div>
        </div>
      </Card3D>
    </motion.div>
  );
}

// Pricing Card Component
function PricingCard({
  title,
  price,
  subtitle,
  items,
  isPrimary,
  index,
}: {
  title: string;
  price: string;
  subtitle: string;
  items: string[];
  isPrimary: boolean;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      <Card3D className="h-full">
        <div
          className={`relative h-full rounded-3xl overflow-hidden ${
            isPrimary
              ? "bg-gradient-to-br from-red-600 via-red-500 to-red-600 text-white"
              : "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white border border-gray-700"
          } shadow-2xl`}
        >
          {/* Decorative orbs */}
          <div className={`absolute top-0 right-0 w-64 h-64 ${isPrimary ? "bg-white/10" : "bg-red-500/10"} rounded-full blur-3xl`} />
          <div className={`absolute bottom-0 left-0 w-64 h-64 ${isPrimary ? "bg-red-800/30" : "bg-purple-500/10"} rounded-full blur-3xl`} />

          {/* Content */}
          <div className="relative p-10">
            {isPrimary && (
              <motion.div
                className="absolute top-6 right-6"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className="px-4 py-1.5 bg-white/20 rounded-full text-xs font-bold uppercase tracking-wider">
                  Populaire
                </span>
              </motion.div>
            )}

            <h3 className="text-3xl font-black mb-4 font-display">{title}</h3>
            <div className="flex items-baseline gap-2 mb-2">
              <motion.span
                className="text-6xl font-black font-display"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
              >
                {price}
              </motion.span>
            </div>
            <p className={`${isPrimary ? "text-red-100" : "text-gray-400"} mb-8 text-lg`}>
              {subtitle}
            </p>

            <ul className="space-y-4">
              {items.map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + i * 0.1 + 0.4 }}
                >
                  <div className={`flex-shrink-0 w-6 h-6 rounded-lg ${isPrimary ? "bg-white/20" : "bg-red-500/20"} flex items-center justify-center mt-0.5`}>
                    <svg className={`w-4 h-4 ${isPrimary ? "text-white" : "text-red-500"}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </Card3D>
    </motion.div>
  );
}

export default function SolutionsPage() {
  const { t } = useLanguage();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.9]);
  const heroY = useTransform(scrollYProgress, [0, 0.8], [0, 100]);

  const moduleIcons = [
    <ReportIcon key="report" className="text-red-600" size={32} />,
    <CalendarIcon key="calendar" className="text-purple-600" size={32} />,
    <BoxIcon key="box" className="text-blue-600" size={32} />,
    <UsersIcon key="users" className="text-red-600" size={32} />,
    <ToolIcon key="tool" className="text-purple-600" size={32} />,
    <AutomationIcon key="automation" className="text-blue-600" size={32} />,
  ];

  const modules = [
    { ...getModuleData(t, 1), color: "red", icon: moduleIcons[0] },
    { ...getModuleData(t, 2), color: "purple", icon: moduleIcons[1] },
    { ...getModuleData(t, 3), color: "blue", icon: moduleIcons[2] },
    { ...getModuleData(t, 4), color: "red", icon: moduleIcons[3] },
    { ...getModuleData(t, 5), color: "purple", icon: moduleIcons[4] },
    { ...getModuleData(t, 6), color: "blue", icon: moduleIcons[5] },
  ];

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Multi-layer background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-purple-50/30" />
        <AnimatedGridBackground />
        <MeshGradientBackground />
        <FloatingParticles count={40} color="139, 92, 246" />

        {/* Gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

        <motion.div
          className="container mx-auto px-4 relative z-10"
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        >
          <div className="text-center max-w-5xl mx-auto pt-20">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-purple-200/50 mb-8 shadow-lg shadow-purple-500/5"
            >
              <motion.span
                className="w-2.5 h-2.5 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm font-semibold text-gray-700 font-display">
                6 modules personnalisables
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.95] tracking-tight font-display"
            >
              <span className="text-gray-900">{t("solutions.hero.title")}</span>
              <br />
              <span className="text-gradient-animated">{t("solutions.hero.titleHighlight")}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto font-light"
            >
              {t("solutions.hero.subtitle")}
            </motion.p>

            {/* Feature pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {["Modulaire", "Évolutif", "Sur-mesure"].map((feature, i) => (
                <motion.div
                  key={feature}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/60 backdrop-blur-sm border border-gray-200/50"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <span className="font-semibold text-gray-700">{feature}</span>
                </motion.div>
              ))}
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
          <motion.div
            className="flex flex-col items-center gap-2 text-gray-400"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-xs uppercase tracking-widest font-display">Découvrir</span>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Modules Grid Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-50 to-blue-50 text-purple-600 font-semibold text-sm border border-purple-100 mb-6"
            >
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse" />
              Nos modules
            </motion.span>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-gray-900 font-display">
              Choisissez vos <span className="text-gradient">modules</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Chaque module répond à un besoin spécifique. Sélectionnez ceux qui correspondent à votre activité.
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

      {/* Modular Approach Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50" />
        <MeshGradientBackground />

        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card3D>
              <div className="relative bg-white/90 backdrop-blur-xl p-12 md:p-16 rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
                {/* Top gradient bar */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500" />

                {/* Decorative elements */}
                <div className="absolute top-8 right-8 w-40 h-40 bg-gradient-to-br from-red-500/10 to-purple-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-8 left-8 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />

                <div className="relative">
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-purple-50 text-red-600 font-semibold text-sm border border-red-100 mb-6"
                  >
                    Approche modulaire
                  </motion.span>

                  <h2 className="text-4xl md:text-5xl font-black mb-8 text-gray-900 font-display">
                    {t("solutions.modular.title")}
                  </h2>
                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-light">
                    {t("solutions.modular.p1")}
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed mb-12">
                    {t("solutions.modular.p2")}
                  </p>

                  {/* Key points */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { color: "red", text: "Seulement ce dont vous avez besoin" },
                      { color: "purple", text: "Évolutif selon votre croissance" },
                      { color: "blue", text: "Optimisez votre investissement" },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        whileHover={{ scale: 1.02, y: -4 }}
                        className="flex items-center gap-3 p-5 bg-white/80 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <div
                          className={`flex-shrink-0 w-12 h-12 rounded-xl ${
                            item.color === "red" ? "bg-red-50" : item.color === "purple" ? "bg-purple-50" : "bg-blue-50"
                          } flex items-center justify-center`}
                        >
                          <div
                            className={`w-5 h-5 rounded-lg ${
                              item.color === "red" ? "bg-red-500" : item.color === "purple" ? "bg-purple-500" : "bg-blue-500"
                            }`}
                          />
                        </div>
                        <span className="text-sm font-bold text-gray-700">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </Card3D>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />
        <AnimatedGridBackground />

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 font-semibold text-sm border border-blue-100 mb-6"
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse" />
              Tarification transparente
            </motion.span>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-gray-900 font-display">
              {t("solutions.pricing.title")}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-light">
              {t("solutions.pricing.subtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <PricingCard
              title={t("solutions.pricing.dev.title")}
              price={t("solutions.pricing.dev.price")}
              subtitle={t("solutions.pricing.dev.subtitle")}
              items={[
                t("solutions.pricing.dev.item1"),
                t("solutions.pricing.dev.item2"),
                t("solutions.pricing.dev.item3"),
                t("solutions.pricing.dev.item4"),
              ]}
              isPrimary={true}
              index={0}
            />
            <PricingCard
              title={t("solutions.pricing.maintenance.title")}
              price={t("solutions.pricing.maintenance.price")}
              subtitle={t("solutions.pricing.maintenance.subtitle")}
              items={[
                t("solutions.pricing.maintenance.item1"),
                t("solutions.pricing.maintenance.item2"),
                t("solutions.pricing.maintenance.item3"),
                t("solutions.pricing.maintenance.item4"),
                t("solutions.pricing.maintenance.item5"),
              ]}
              isPrimary={false}
              index={1}
            />
          </div>

          {/* Custom pricing note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card3D>
              <div className="relative p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-100 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200/30 rounded-full blur-2xl" />
                <div className="relative flex items-center gap-4">
                  <motion.div
                    className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </motion.div>
                  <p className="text-gray-700 font-medium text-lg">{t("solutions.pricing.custom")}</p>
                </div>
              </div>
            </Card3D>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-500 to-purple-600" />
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 0% 0%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 100% 100%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 0% 100%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 100% 0%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 0% 0%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <FloatingParticles count={30} color="255, 255, 255" />

        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-white font-display"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {t("solutions.cta.title")}
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto text-white/90 font-light leading-relaxed"
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
              <Link href="/contact" className="group inline-block">
                <motion.div
                  className="relative flex items-center gap-3 bg-white text-red-600 px-10 py-5 rounded-2xl text-lg font-bold shadow-2xl hover:shadow-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="font-display">{t("solutions.cta.button")}</span>
                  <motion.svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      </section>
    </>
  );
}

function getModuleData(t: (key: string) => string, index: number) {
  return {
    title: t(`solutions.modules.module${index}.title`),
    problem: t(`solutions.modules.module${index}.problem`),
    solution: t(`solutions.modules.module${index}.solution`),
    benefits: t(`solutions.modules.module${index}.benefits`),
  };
}
