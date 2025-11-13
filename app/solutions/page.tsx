"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
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
}: {
  icon: React.ReactNode;
  title: string;
  problem: string;
  solution: string;
  benefits: string;
  index: number;
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
          <h4 className="font-bold text-lg mb-2 text-red-600">Problème</h4>
          <p className="text-gray-600 leading-relaxed">{problem}</p>
        </div>

        {/* Solution */}
        <div>
          <h4 className="font-bold text-lg mb-2 text-gray-900">Solution</h4>
          <p className="text-gray-600 leading-relaxed">{solution}</p>
        </div>

        {/* Bénéfices */}
        <div>
          <h4 className="font-bold text-lg mb-2 text-green-600">Bénéfices</h4>
          <p className="text-gray-600 leading-relaxed">{benefits}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function SolutionsPage() {
  const modules = [
    {
      icon: <ReportIcon className="text-white" size={56} />,
      title: "Rapports d'intervention intelligents",
      problem:
        "Vos techniciens perdent 30 minutes par intervention à remplir des Word ou du papier. Infos manquantes, erreurs de saisie, retard de facturation.",
      solution:
        "Scan QR de l'équipement, formulaire adapté sur mobile/tablette, génération automatique du rapport PDF professionnel avec photos, signatures électroniques et traçabilité complète.",
      benefits:
        "80% de temps en moins, zéro erreur de saisie, facturation immédiate, conformité garantie.",
    },
    {
      icon: <CalendarIcon className="text-white" size={56} />,
      title: "Gestion de planning équipes",
      problem:
        "Planning Excel illisible, techniciens qui se déplacent pour rien, clients qui attendent, doublons d'interventions.",
      solution:
        "Planning intelligent avec vue temps réel, affectation automatique selon compétences et disponibilités, notifications aux techniciens, synchronisation calendrier.",
      benefits:
        "Optimisation des tournées, moins de km à vide, satisfaction client, vue d'ensemble instantanée.",
    },
    {
      icon: <BoxIcon className="text-white" size={56} />,
      title: "Gestion de stock avec QR",
      problem:
        "Vous ne savez jamais ce qui reste en stock, commandes en urgence, matériel perdu, inventaires cauchemars.",
      solution:
        "Chaque article a son QR code. Scan à la sortie/entrée, alertes de stock minimum, traçabilité des mouvements, inventaire en quelques minutes.",
      benefits:
        "Stock optimisé, moins d'immobilisation, zéro rupture, économies sur les achats.",
    },
    {
      icon: <UsersIcon className="text-white" size={56} />,
      title: "Suivi clients & contrats",
      problem:
        "Contrats oubliés, relances manquées, historique client éparpillé dans les emails, opportunités perdues.",
      solution:
        "Base clients centralisée, historique complet des interventions, alertes automatiques de renouvellement, gestion des devis et contrats, relances programmées.",
      benefits:
        "Aucun contrat oublié, fidélisation client, CA récurrent sécurisé, vision 360° de votre activité.",
    },
    {
      icon: <ToolIcon className="text-white" size={56} />,
      title: "Suivi matériel & consommables",
      problem:
        "Contrôles techniques oubliés, dates de validité dépassées, non-conformité, amendes.",
      solution:
        "Fiche de vie pour chaque équipement avec QR code, alertes automatiques (entretien, contrôle, péremption), historique complet, certificats accessibles instantanément.",
      benefits:
        "Conformité totale, prévention des pannes, optimisation de la maintenance, sérénité réglementaire.",
    },
    {
      icon: <GlobeIcon className="text-white" size={56} />,
      title: "Site interne / Intranet entreprise",
      problem:
        "Infos dispersées, procédures introuvables, docs obsolètes, communication compliquée entre équipes.",
      solution:
        "Portail interne sur-mesure : base documentaire, procédures accessibles, communication interne, tableau de bord de pilotage.",
      benefits:
        "Information centralisée, onboarding facilité, autonomie des équipes, culture d'entreprise renforcée.",
    },
    {
      icon: <AutomationIcon className="text-white" size={56} />,
      title: "Automatisation de tâches répétitives",
      problem:
        "Relances manuelles, saisies multiples de la même info, copier-coller entre logiciels, temps perdu sur des tâches sans valeur.",
      solution:
        "Analyse de vos process, automatisation intelligente (emails, rappels, synchronisation de données, génération de documents), workflows personnalisés.",
      benefits:
        "Libérez du temps pour l'essentiel, moins d'erreurs humaines, productivité multipliée.",
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
              Nos <span className="text-red-600">7 modules</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Des solutions modulaires pour transformer votre activité. Choisissez uniquement ce dont vous avez besoin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-12">
            {modules.map((module, index) => (
              <ModuleCard key={index} {...module} index={index} />
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
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Approche modulaire</h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Vous ne payez que pour ce dont vous avez besoin. Commencez par un module, ajoutez les autres à votre rythme.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Tout est conçu pour évoluer avec vous. Chaque module s'intègre parfaitement avec les autres,
                créant un écosystème digital complet et cohérent pour votre entreprise.
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
              Tarification transparente
            </h2>
            <p className="text-xl text-gray-600">
              Des prix adaptés à votre projet, sans surprises
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
              <h3 className="text-2xl font-bold mb-4">Développement initial</h3>
              <div className="text-4xl font-bold mb-4">3 000 - 8 000€</div>
              <p className="text-red-100 mb-6">Selon les modules choisis</p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Analyse de vos besoins</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Développement sur-mesure</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Formation de vos équipes</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Déploiement et mise en production</span>
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
              <h3 className="text-2xl font-bold mb-4">Maintenance mensuelle</h3>
              <div className="text-4xl font-bold mb-4">150 - 300€</div>
              <p className="text-gray-300 mb-6">Par mois</p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-0.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Hébergement sécurisé</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-0.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Support technique prioritaire</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-0.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Corrections de bugs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-0.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Sauvegardes quotidiennes</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-0.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Évolutions mineures</span>
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
              <strong>Nouveaux modules ou évolutions majeures :</strong> Devis personnalisé selon vos besoins
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
              Prêt à transformer votre activité ?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Discutons de vos besoins et créons ensemble la solution parfaite pour votre entreprise.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Prendre rendez-vous
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
