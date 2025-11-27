"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
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
import {
  AnimatedGridBackground,
  MeshGradientBackground,
  SpotlightEffect,
  FloatingParticles,
  GeometricShapes,
  Card3D,
  ScrollProgress,
} from "@/components/AnimatedBackground";

// ========== PREMIUM BENEFIT CARD ==========
function BenefitCard({
  icon,
  title,
  description,
  index,
  gradient,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
  gradient: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, rotateX: -10 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 60, rotateX: -10 }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative"
    >
      <Card3D className="h-full">
        <div className="relative h-full bg-white rounded-3xl p-8 overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500">
          {/* Gradient overlay on hover */}
          <div
            className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${gradient}`}
          />

          {/* Animated border gradient */}
          <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-r from-red-500 via-purple-500 to-blue-500">
              <div className="absolute inset-[2px] rounded-3xl bg-white" />
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            {/* Icon container with glow */}
            <motion.div
              className="relative inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-red-50 to-red-100 text-red-600"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="absolute inset-0 rounded-2xl bg-red-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">{icon}</div>
            </motion.div>

            <h3 className="text-xl font-bold mb-3 text-gray-900 font-display group-hover:text-gradient transition-all duration-300">
              {title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>

          {/* Shine effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
          </div>
        </div>
      </Card3D>
    </motion.div>
  );
}

// ========== PREMIUM MODULE CARD ==========
function ModuleCard({
  icon,
  title,
  index,
  accentColor,
}: {
  icon: React.ReactNode;
  title: string;
  index: number;
  accentColor: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const colorClasses: { [key: string]: { bg: string; border: string; glow: string } } = {
    red: {
      bg: "from-red-50 to-red-100/50",
      border: "group-hover:border-red-300",
      glow: "bg-red-500/10",
    },
    purple: {
      bg: "from-purple-50 to-purple-100/50",
      border: "group-hover:border-purple-300",
      glow: "bg-purple-500/10",
    },
    blue: {
      bg: "from-blue-50 to-blue-100/50",
      border: "group-hover:border-blue-300",
      glow: "bg-blue-500/10",
    },
  };

  const colors = colorClasses[accentColor] || colorClasses.red;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group"
    >
      <div
        className={`relative h-full bg-white p-6 rounded-2xl border border-gray-100 ${colors.border} hover:shadow-xl transition-all duration-500 overflow-hidden`}
      >
        {/* Background gradient on hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />

        {/* Glow effect */}
        <div
          className={`absolute -inset-1 ${colors.glow} blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
        />

        {/* Content */}
        <div className="relative z-10 flex items-center gap-4">
          <motion.div
            className="flex-shrink-0 p-3 rounded-xl bg-white shadow-sm group-hover:shadow-md transition-shadow duration-300"
            whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
            transition={{ duration: 0.4 }}
          >
            {icon}
          </motion.div>
          <h3 className="font-bold text-gray-900 group-hover:text-gray-800 transition-colors leading-snug font-display">
            {title}
          </h3>
        </div>

        {/* Arrow indicator */}
        <motion.div
          className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300"
          initial={{ x: -10 }}
          whileHover={{ x: 0 }}
        >
          <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
}

// ========== STAT COUNTER ==========
function StatCounter({
  value,
  label,
  suffix = "",
  delay = 0,
}: {
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <motion.div
        className="text-4xl md:text-5xl font-black text-white font-display"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
      >
        {value}
        {suffix}
      </motion.div>
      <p className="text-white/70 mt-2 font-medium">{label}</p>
    </motion.div>
  );
}

// ========== MAIN PAGE COMPONENT ==========
export default function Home() {
  const { t } = useLanguage();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  const benefits = [
    {
      icon: <LightningIcon size={32} />,
      title: t("home.benefits.benefit1.title"),
      description: t("home.benefits.benefit1.description"),
      gradient: "bg-gradient-to-br from-red-500/5 to-orange-500/5",
    },
    {
      icon: <BadgeCheckIcon size={32} />,
      title: t("home.benefits.benefit2.title"),
      description: t("home.benefits.benefit2.description"),
      gradient: "bg-gradient-to-br from-purple-500/5 to-pink-500/5",
    },
    {
      icon: <TargetIcon size={32} />,
      title: t("home.benefits.benefit3.title"),
      description: t("home.benefits.benefit3.description"),
      gradient: "bg-gradient-to-br from-blue-500/5 to-cyan-500/5",
    },
    {
      icon: <DeviceConnectIcon size={32} />,
      title: t("home.benefits.benefit4.title"),
      description: t("home.benefits.benefit4.description"),
      gradient: "bg-gradient-to-br from-emerald-500/5 to-teal-500/5",
    },
  ];

  const modules = [
    { icon: <ReportIcon className="text-red-600" size={28} />, title: t("home.modules.module1"), color: "red" },
    { icon: <CalendarIcon className="text-purple-600" size={28} />, title: t("home.modules.module2"), color: "purple" },
    { icon: <BoxIcon className="text-blue-600" size={28} />, title: t("home.modules.module3"), color: "blue" },
    { icon: <UsersIcon className="text-red-600" size={28} />, title: t("home.modules.module4"), color: "red" },
    { icon: <ToolIcon className="text-purple-600" size={28} />, title: t("home.modules.module5"), color: "purple" },
    { icon: <AutomationIcon className="text-blue-600" size={28} />, title: t("home.modules.module6"), color: "blue" },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Spotlight Effect */}
      <SpotlightEffect />

      {/* ==================== HERO SECTION ==================== */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Multi-layer background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100" />
        <AnimatedGridBackground />
        <MeshGradientBackground />
        <FloatingParticles count={60} />
        <GeometricShapes />

        {/* Gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl" />

        <motion.div
          className="container mx-auto px-4 relative z-10"
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        >
          <div className="text-center max-w-6xl mx-auto">
            {/* Animated badge */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-red-200/50 mb-8 shadow-lg shadow-red-500/5"
            >
              <motion.span
                className="w-2.5 h-2.5 bg-gradient-to-r from-red-500 to-red-600 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm font-semibold text-gray-700 font-display">
                Solutions digitales innovantes
              </span>
              <span className="text-xs px-2 py-0.5 bg-red-100 text-red-600 rounded-full font-bold">NEW</span>
            </motion.div>

            {/* Main heading - EPIC */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-8 leading-[0.9] tracking-tight font-display"
            >
              <span className="text-gray-900">{t("home.hero.title")}</span>
              <br />
              <span className="relative inline-block">
                <span className="text-gradient-animated">{t("home.hero.titleHighlight")}</span>
                {/* Underline decoration */}
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 1 }}
                >
                  <motion.path
                    d="M0,6 Q75,0 150,6 T300,6"
                    stroke="url(#gradient)"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#DC2626" />
                      <stop offset="50%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </span>
              <br />
              <span className="text-gray-900">{t("home.hero.titleEnd")}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto font-light"
            >
              {t("home.hero.subtitle")}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              {/* Primary CTA */}
              <Link href="/contact" className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div
                  className="relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-xl font-bold text-lg shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="font-display">{t("home.hero.ctaPrimary")}</span>
                  <motion.svg
                    className="w-5 h-5"
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

              {/* Secondary CTA */}
              <Link href="/solutions" className="group relative">
                <motion.div
                  className="relative flex items-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-xl font-bold text-lg border-2 border-gray-200 hover:border-red-300 shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="font-display group-hover:text-red-600 transition-colors">{t("home.hero.ctaSecondary")}</span>
                  <svg className="w-5 h-5 group-hover:text-red-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.div>
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="mt-16 flex flex-wrap justify-center gap-6 md:gap-10 text-sm text-gray-500"
            >
              {[
                { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", text: "100% Sur-mesure" },
                { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", text: "Support inclus" },
                { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", text: "ROI rapide" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-gray-200/50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 + i * 0.1 }}
                >
                  <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                  <span className="font-medium">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            className="flex flex-col items-center gap-2 text-gray-400"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-xs uppercase tracking-widest font-display">Découvrir</span>
            <div className="w-6 h-10 rounded-full border-2 border-gray-300 flex items-start justify-center p-1">
              <motion.div
                className="w-1.5 h-3 bg-gradient-to-b from-red-500 to-purple-500 rounded-full"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ==================== BENEFITS SECTION ==================== */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl" />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            {/* Section badge */}
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-purple-50 text-red-600 font-semibold text-sm border border-red-100 mb-6"
            >
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse" />
              Avantages
            </motion.span>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-gray-900 font-display">
              {t("home.benefits.title")}{" "}
              <span className="text-gradient">{t("home.benefits.titleHighlight")}</span> ?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
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

      {/* ==================== STATS SECTION ==================== */}
      <section className="relative py-24 px-4 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0aDR2NEgzNnpNMjAgMjBoNHY0SDIweiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

        {/* Glowing orbs */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-red-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <StatCounter value={100} suffix="%" label="Sur-mesure" delay={0} />
            <StatCounter value={50} suffix="%" label="Temps gagné" delay={0.1} />
            <StatCounter value={24} suffix="/7" label="Support" delay={0.2} />
            <StatCounter value={99} suffix="%" label="Satisfaction" delay={0.3} />
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Animated gradient background */}
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

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2NEgzNnpNMjAgMjBoNHY0SDIweiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />

        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-white font-display"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {t("home.cta.title")}
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto text-white/90 font-light leading-relaxed"
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
              <Link href="/contact" className="group inline-block">
                <motion.div
                  className="relative flex items-center gap-3 bg-white text-red-600 px-10 py-5 rounded-2xl text-lg font-bold shadow-2xl hover:shadow-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="font-display">{t("home.cta.button")}</span>
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

        {/* Decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      </section>

      {/* ==================== SOLUTIONS PREVIEW ==================== */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />
        <AnimatedGridBackground />

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
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
              Nos Solutions
            </motion.span>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-gray-900 font-display">
              {t("home.modules.title")}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              {t("home.modules.subtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {modules.map((module, index) => (
              <ModuleCard key={index} {...module} index={index} accentColor={module.color} />
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Link href="/solutions" className="group inline-block">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div
                  className="relative flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-xl font-bold text-lg shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="font-display">{t("home.modules.cta")}</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
