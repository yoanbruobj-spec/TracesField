"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AnimatedGridBackground } from "@/components/AnimatedBackground";

export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
        <AnimatedGridBackground />

        <motion.div
          className="container mx-auto px-4 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center max-w-4xl mx-auto pt-24">
            <h1 className="text-5xl md:text-6xl font-black mb-6 text-gray-900">
              Politique de{" "}
              <span className="text-gradient">confidentialité</span>
            </h1>
            <p className="text-xl text-gray-600">
              Dernière mise à jour : Novembre 2025
            </p>
          </div>
        </motion.div>
      </section>

      {/* Content */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100 space-y-8">

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-600 leading-relaxed">
                  TraceField s'engage à protéger la vie privée des utilisateurs de son site web et de ses services.
                  Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos données personnelles
                  conformément au Règlement Général sur la Protection des Données (RGPD).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Responsable du traitement</h2>
                <p className="text-gray-600 leading-relaxed">
                  Le responsable du traitement des données est :<br />
                  <strong>TraceField</strong><br />
                  Email : tracefield31@gmail.com<br />
                  Téléphone : 07 69 80 63 34
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Données collectées</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Nous collectons les données suivantes via notre formulaire de contact :
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Nom et prénom</li>
                  <li>Nom de l'entreprise</li>
                  <li>Adresse email</li>
                  <li>Numéro de téléphone</li>
                  <li>Nombre d'employés</li>
                  <li>Modules d'intérêt</li>
                  <li>Description du besoin</li>
                  <li>Préférence de contact</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Finalité du traitement</h2>
                <p className="text-gray-600 leading-relaxed">
                  Les données collectées sont utilisées uniquement pour :
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                  <li>Répondre à vos demandes de contact et de rendez-vous</li>
                  <li>Vous proposer un devis personnalisé</li>
                  <li>Assurer le suivi commercial de votre demande</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Base légale</h2>
                <p className="text-gray-600 leading-relaxed">
                  Le traitement de vos données repose sur votre consentement explicite lors de la soumission
                  du formulaire de contact, ainsi que sur notre intérêt légitime à répondre à vos demandes commerciales.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Durée de conservation</h2>
                <p className="text-gray-600 leading-relaxed">
                  Vos données sont conservées pendant une durée maximale de 3 ans à compter de votre dernier contact avec nous,
                  sauf obligation légale contraire.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Partage des données</h2>
                <p className="text-gray-600 leading-relaxed">
                  Vos données ne sont jamais vendues ni partagées avec des tiers à des fins commerciales.
                  Nous utilisons le service Web3Forms pour la transmission sécurisée des formulaires de contact.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Vos droits</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Conformément au RGPD, vous disposez des droits suivants :
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li><strong>Droit d'accès</strong> : obtenir une copie de vos données</li>
                  <li><strong>Droit de rectification</strong> : corriger vos données inexactes</li>
                  <li><strong>Droit à l'effacement</strong> : demander la suppression de vos données</li>
                  <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
                  <li><strong>Droit d'opposition</strong> : vous opposer au traitement de vos données</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Pour exercer ces droits, contactez-nous à : <a href="mailto:tracefield31@gmail.com" className="text-red-600 hover:underline">tracefield31@gmail.com</a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Sécurité</h2>
                <p className="text-gray-600 leading-relaxed">
                  Nous mettons en place des mesures techniques et organisationnelles appropriées pour protéger vos données
                  contre tout accès non autorisé, modification, divulgation ou destruction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact</h2>
                <p className="text-gray-600 leading-relaxed">
                  Pour toute question concernant cette politique de confidentialité ou vos données personnelles,
                  vous pouvez nous contacter à :<br /><br />
                  <strong>Email</strong> : <a href="mailto:tracefield31@gmail.com" className="text-red-600 hover:underline">tracefield31@gmail.com</a><br />
                  <strong>Téléphone</strong> : 07 69 80 63 34
                </p>
              </section>

            </div>

            <div className="mt-8 text-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Retour à l'accueil
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
