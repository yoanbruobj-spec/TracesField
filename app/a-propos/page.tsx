"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import {
  ExperienceIcon,
  InnovationIcon,
  RocketIcon,
  HandshakeIcon,
} from "@/components/icons/Icons";

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

export default function AboutPage() {
  const { t } = useLanguage();

  const approaches = [
    {
      icon: <ExperienceIcon className="text-red-600" size={56} />,
      title: t("about.approach.item1.title"),
      description: t("about.approach.item1.description"),
    },
    {
      icon: <InnovationIcon className="text-red-600" size={56} />,
      title: t("about.approach.item2.title"),
      description: t("about.approach.item2.description"),
    },
    {
      icon: <RocketIcon className="text-red-600" size={56} />,
      title: t("about.approach.item3.title"),
      description: t("about.approach.item3.description"),
    },
    {
      icon: <HandshakeIcon className="text-red-600" size={56} />,
      title: t("about.approach.item4.title"),
      description: t("about.approach.item4.description"),
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              {t("about.hero.title")} <span className="text-red-600">{t("about.hero.titleHighlight")}</span>
            </h1>
            <p className="text-xl text-gray-600">
              {t("about.hero.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Qui sommes-nous */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <Section>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              {t("about.who.title")}
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                {t("about.who.p1")}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t("about.who.p2")}
              </p>
            </div>
          </Section>
        </div>
      </section>

      {/* Notre mission */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <Section delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              {t("about.mission.title")}
            </h2>
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-600">
              <p className="text-xl text-gray-700 leading-relaxed">
                {t("about.mission.text")}
              </p>
            </div>
          </Section>
        </div>
      </section>

      {/* Notre approche */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <Section delay={0.3}>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 text-center">
              {t("about.approach.title")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {approaches.map((approach, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-4">{approach.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{approach.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{approach.description}</p>
                </motion.div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* Pourquoi nous faire confiance */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <Section delay={0.4}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              {t("about.trust.title")}
            </h2>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                {t("about.trust.p1")}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t("about.trust.p2")}
              </p>
            </div>
          </Section>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <Section delay={0.5}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t("about.cta.title")}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {t("about.cta.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                {t("about.cta.ctaPrimary")}
              </Link>
              <Link
                href="/solutions"
                className="bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-800 transition-colors border-2 border-white"
              >
                {t("about.cta.ctaSecondary")}
              </Link>
            </div>
          </Section>
        </div>
      </section>
    </div>
  );
}
