"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import {
  ReportIcon,
  CalendarIcon,
  BoxIcon,
  UsersIcon,
  ToolIcon,
  GlobeIcon,
  AutomationIcon,
} from "@/components/icons/Icons";

// Composant pour chaque module
function ModuleCard({
  icon,
  title,
  problem,
  solution,
  benefits,
  index,
  problemLabel,
  solutionLabel,
  benefitsLabel,
}: {
  icon: React.ReactNode;
  title: string;
  problem: string;
  solution: string;
  benefits: string;
  index: number;
  problemLabel: string;
  solutionLabel: string;
  benefitsLabel: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      <div className="bg-gradient-to-br from-red-600 to-red-700 p-6 text-white">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">{icon}</div>
          <h3 className="text-2xl font-bold">{title}</h3>
        </div>
      </div>
      <div className="p-8 space-y-6">
        {/* Problème */}
        <div>
          <h4 className="font-bold text-lg mb-2 text-red-600">{problemLabel}</h4>
          <p className="text-gray-600 leading-relaxed">{problem}</p>
        </div>

        {/* Solution */}
        <div>
          <h4 className="font-bold text-lg mb-2 text-gray-900">{solutionLabel}</h4>
          <p className="text-gray-600 leading-relaxed">{solution}</p>
        </div>

        {/* Bénéfices */}
        <div>
          <h4 className="font-bold text-lg mb-2 text-green-600">{benefitsLabel}</h4>
          <p className="text-gray-600 leading-relaxed">{benefits}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function SolutionsPage() {
  const { t } = useLanguage();

  const modules = [
    {
      icon: <ReportIcon className="text-white" size={56} />,
      title: t("solutions.modules.module1.title"),
      problem: t("solutions.modules.module1.problem"),
      solution: t("solutions.modules.module1.solution"),
      benefits: t("solutions.modules.module1.benefits"),
    },
    {
      icon: <CalendarIcon className="text-white" size={56} />,
      title: t("solutions.modules.module2.title"),
      problem: t("solutions.modules.module2.problem"),
      solution: t("solutions.modules.module2.solution"),
      benefits: t("solutions.modules.module2.benefits"),
    },
    {
      icon: <BoxIcon className="text-white" size={56} />,
      title: t("solutions.modules.module3.title"),
      problem: t("solutions.modules.module3.problem"),
      solution: t("solutions.modules.module3.solution"),
      benefits: t("solutions.modules.module3.benefits"),
    },
    {
      icon: <UsersIcon className="text-white" size={56} />,
      title: t("solutions.modules.module4.title"),
      problem: t("solutions.modules.module4.problem"),
      solution: t("solutions.modules.module4.solution"),
      benefits: t("solutions.modules.module4.benefits"),
    },
    {
      icon: <ToolIcon className="text-white" size={56} />,
      title: t("solutions.modules.module5.title"),
      problem: t("solutions.modules.module5.problem"),
      solution: t("solutions.modules.module5.solution"),
      benefits: t("solutions.modules.module5.benefits"),
    },
    {
      icon: <GlobeIcon className="text-white" size={56} />,
      title: t("solutions.modules.module6.title"),
      problem: t("solutions.modules.module6.problem"),
      solution: t("solutions.modules.module6.solution"),
      benefits: t("solutions.modules.module6.benefits"),
    },
    {
      icon: <AutomationIcon className="text-white" size={56} />,
      title: t("solutions.modules.module7.title"),
      problem: t("solutions.modules.module7.problem"),
      solution: t("solutions.modules.module7.solution"),
      benefits: t("solutions.modules.module7.benefits"),
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
              {t("solutions.hero.title")} <span className="text-red-600">{t("solutions.hero.titleHighlight")}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              {t("solutions.hero.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-12">
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
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg border-l-4 border-red-600">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">{t("solutions.modular.title")}</h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                {t("solutions.modular.p1")}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t("solutions.modular.p2")}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tarification */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              {t("solutions.pricing.title")}
            </h2>
            <p className="text-xl text-gray-600">
              {t("solutions.pricing.subtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-red-600 to-red-700 text-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4">{t("solutions.pricing.dev.title")}</h3>
              <div className="text-4xl font-bold mb-4">{t("solutions.pricing.dev.price")}</div>
              <p className="text-red-100 mb-6">{t("solutions.pricing.dev.subtitle")}</p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t("solutions.pricing.dev.item1")}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t("solutions.pricing.dev.item2")}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t("solutions.pricing.dev.item3")}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t("solutions.pricing.dev.item4")}</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-900 text-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4">{t("solutions.pricing.maintenance.title")}</h3>
              <div className="text-4xl font-bold mb-4">{t("solutions.pricing.maintenance.price")}</div>
              <p className="text-gray-300 mb-6">{t("solutions.pricing.maintenance.subtitle")}</p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-0.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t("solutions.pricing.maintenance.item1")}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-0.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t("solutions.pricing.maintenance.item2")}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-0.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t("solutions.pricing.maintenance.item3")}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-0.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t("solutions.pricing.maintenance.item4")}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-0.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t("solutions.pricing.maintenance.item5")}</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200"
          >
            <p className="text-gray-700 text-center">
              {t("solutions.pricing.custom")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t("solutions.cta.title")}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {t("solutions.cta.subtitle")}
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              {t("solutions.cta.button")}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
