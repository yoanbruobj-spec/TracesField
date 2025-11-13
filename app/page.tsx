"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
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
  GlobeIcon,
  AutomationIcon,
} from "@/components/icons/Icons";

// Composant pour les cartes de bénéfices
function BenefitCard({ icon, title, description, index }: { icon: React.ReactNode; title: string; description: string; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
    >
      <div className="text-red-600 mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}

export default function Home() {
  const benefits = [
    {
      icon: <LightningIcon size={56} />,
      title: "Gain de temps immédiat",
      description: "Réduisez de 80% le temps passé sur les rapports et tâches administratives. Vos techniciens se concentrent sur le terrain.",
    },
    {
      icon: <BadgeCheckIcon size={56} />,
      title: "Conformité garantie",
      description: "Traçabilité complète, rapports conformes aux normes, historique consultable à tout moment. Zéro oubli, zéro stress.",
    },
    {
      icon: <TargetIcon size={56} />,
      title: "100% adapté à vous",
      description: "Pas de logiciel générique. On développe exactement ce dont vous avez besoin, avec votre process, vos documents.",
    },
    {
      icon: <DeviceConnectIcon size={56} />,
      title: "Terrain et bureau connectés",
      description: "QR codes, synchronisation temps réel, accès mobile. L'info circule instantanément entre vos équipes et le bureau.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Solutions sur-mesure pour{" "}
              <span className="text-red-600">automatiser vos tâches</span> et simplifier vos interventions
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              TraceField développe des outils digitaux personnalisés pour les artisans et PME : rapports d'intervention intelligents,
              gestion de planning, traçabilité QR code, suivi client et stock. Gagnez du temps, réduisez les erreurs,
              concentrez-vous sur votre métier.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Prendre rendez-vous
              </Link>
              <Link
                href="/solutions"
                className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors border-2 border-gray-200"
              >
                Découvrir les solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bénéfices Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Pourquoi choisir <span className="text-red-600">TraceField</span> ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des solutions pensées pour vous, par quelqu'un qui connaît votre réalité terrain
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} {...benefit} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Prêt à simplifier votre quotidien ?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Discutons de vos besoins et voyons ensemble comment TraceField peut vous faire gagner du temps et de l'argent.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Demander une démo gratuite
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Aperçu Solutions */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              7 modules pour transformer votre activité
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choisissez uniquement les modules dont vous avez besoin. Commencez petit, évoluez à votre rythme.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { icon: <ReportIcon className="text-red-600" size={40} />, title: "Rapports d'intervention intelligents" },
              { icon: <CalendarIcon className="text-red-600" size={40} />, title: "Gestion de planning équipes" },
              { icon: <BoxIcon className="text-red-600" size={40} />, title: "Gestion de stock avec QR" },
              { icon: <UsersIcon className="text-red-600" size={40} />, title: "Suivi clients & contrats" },
              { icon: <ToolIcon className="text-red-600" size={40} />, title: "Suivi matériel & consommables" },
              { icon: <GlobeIcon className="text-red-600" size={40} />, title: "Site interne / Intranet" },
              { icon: <AutomationIcon className="text-red-600" size={40} />, title: "Automatisation tâches répétitives" },
            ].map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center space-x-4"
              >
                <div className="flex-shrink-0">{module.icon}</div>
                <h3 className="font-semibold text-gray-900">{module.title}</h3>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/solutions"
              className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors shadow-lg"
            >
              Découvrir tous les modules en détail
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
