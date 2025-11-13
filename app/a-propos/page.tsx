"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
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
  const approaches = [
    {
      icon: <ExperienceIcon className="text-red-600" size={56} />,
      title: "On comprend votre métier",
      description: "Expérience terrain dans la maintenance et les interventions techniques",
    },
    {
      icon: <InnovationIcon className="text-red-600" size={56} />,
      title: "Du sur-mesure intelligent",
      description: "Chaque entreprise est unique, votre outil aussi",
    },
    {
      icon: <RocketIcon className="text-red-600" size={56} />,
      title: "Développement agile",
      description: "On construit ensemble, étape par étape",
    },
    {
      icon: <HandshakeIcon className="text-red-600" size={56} />,
      title: "Accompagnement complet",
      description: "De l'analyse de vos besoins à la formation de vos équipes",
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
              À propos de <span className="text-red-600">TraceField</span>
            </h1>
            <p className="text-xl text-gray-600">
              Née d'une expérience terrain, conçue pour votre réalité
            </p>
          </motion.div>
        </div>
      </section>

      {/* Qui sommes-nous */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <Section>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Qui sommes-nous ?
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                TraceField est née d'une expérience terrain. En tant que technicien en maintenance de systèmes de détection gaz,
                j'ai vécu au quotidien les mêmes galères que vous : rapports chronophages, traçabilité compliquée, outils
                inadaptés qui ralentissent plus qu'ils n'aident.
              </p>
              <p className="text-gray-600 leading-relaxed">
                C'est cette frustration qui m'a poussé à créer TraceField : pour apporter des solutions qui correspondent
                vraiment aux besoins des professionnels de terrain.
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
              Notre mission
            </h2>
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-600">
              <p className="text-xl text-gray-700 leading-relaxed">
                Créer des solutions digitales qui collent vraiment à votre réalité. Pas de logiciel tout-fait qui vous oblige
                à changer vos habitudes. On développe avec vous, pour vous, exactement ce dont vous avez besoin.
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
              Notre approche
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
              Pourquoi nous faire confiance ?
            </h2>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Parce qu'on ne vend pas un logiciel, on résout vos problèmes.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nos solutions sont déjà utilisées en conditions réelles et ont fait leurs preuves sur le terrain.
                Chaque jour, des techniciens gagnent du temps et des entreprises optimisent leurs process grâce à nos outils.
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
              Vous voulez en savoir plus ?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Discutons de votre projet et voyons ensemble comment TraceField peut transformer votre quotidien.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Prendre rendez-vous
              </Link>
              <Link
                href="/solutions"
                className="bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-800 transition-colors border-2 border-white"
              >
                Découvrir nos solutions
              </Link>
            </div>
          </Section>
        </div>
      </section>
    </div>
  );
}
