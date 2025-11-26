"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AnimatedGridBackground } from "@/components/AnimatedBackground";

export default function TermsPage() {
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
              Conditions{" "}
              <span className="text-gradient">d'utilisation</span>
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Mentions légales</h2>
                <p className="text-gray-600 leading-relaxed">
                  Le site TraceField est édité par :<br /><br />
                  <strong>TraceField</strong><br />
                  Email : tracefield31@gmail.com<br />
                  Téléphone : 07 69 80 63 34<br />
                  Zone d'intervention : France entière
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Objet</h2>
                <p className="text-gray-600 leading-relaxed">
                  Les présentes conditions générales d'utilisation (CGU) ont pour objet de définir les modalités
                  d'accès et d'utilisation du site web TraceField. En accédant au site, vous acceptez sans réserve
                  les présentes conditions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Services proposés</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  TraceField propose des solutions digitales sur-mesure pour les artisans et PME, incluant :
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Rapports d'intervention intelligents</li>
                  <li>Gestion de planning équipes</li>
                  <li>Gestion de stock avec QR code</li>
                  <li>Suivi clients et contrats</li>
                  <li>Suivi matériel et consommables</li>
                  <li>Automatisation de tâches répétitives</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Accès au site</h2>
                <p className="text-gray-600 leading-relaxed">
                  Le site est accessible gratuitement à tout utilisateur disposant d'un accès à Internet.
                  TraceField met tout en oeuvre pour assurer un accès continu au site, mais ne peut garantir
                  une disponibilité permanente. Des interruptions pour maintenance ou mises à jour peuvent survenir.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Propriété intellectuelle</h2>
                <p className="text-gray-600 leading-relaxed">
                  L'ensemble des éléments du site (textes, images, logos, design, code) sont la propriété exclusive
                  de TraceField ou de ses partenaires. Toute reproduction, représentation ou exploitation, partielle ou totale,
                  sans autorisation préalable écrite est interdite et constitue une contrefaçon sanctionnée par le Code
                  de la propriété intellectuelle.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Formulaire de contact</h2>
                <p className="text-gray-600 leading-relaxed">
                  Les informations transmises via le formulaire de contact sont utilisées uniquement pour répondre
                  à vos demandes. En soumettant le formulaire, vous consentez au traitement de vos données conformément
                  à notre <Link href="/privacy" className="text-red-600 hover:underline">politique de confidentialité</Link>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Responsabilité</h2>
                <p className="text-gray-600 leading-relaxed">
                  TraceField s'efforce de fournir des informations exactes et à jour sur son site.
                  Toutefois, TraceField ne peut garantir l'exactitude, la complétude ou l'actualité des informations
                  diffusées. L'utilisateur est seul responsable de l'utilisation qu'il fait des informations présentes sur le site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Liens externes</h2>
                <p className="text-gray-600 leading-relaxed">
                  Le site peut contenir des liens vers des sites tiers. TraceField n'exerce aucun contrôle
                  sur ces sites et décline toute responsabilité quant à leur contenu ou leurs pratiques
                  en matière de protection des données.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Cookies</h2>
                <p className="text-gray-600 leading-relaxed">
                  Le site utilise des cookies techniques essentiels au bon fonctionnement du site
                  (notamment pour la mémorisation de la langue choisie). Ces cookies ne collectent
                  pas de données personnelles à des fins publicitaires.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Modification des CGU</h2>
                <p className="text-gray-600 leading-relaxed">
                  TraceField se réserve le droit de modifier les présentes conditions à tout moment.
                  Les modifications entrent en vigueur dès leur publication sur le site.
                  Il est conseillé de consulter régulièrement cette page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Droit applicable</h2>
                <p className="text-gray-600 leading-relaxed">
                  Les présentes conditions sont régies par le droit français. Tout litige relatif
                  à l'utilisation du site sera soumis à la compétence exclusive des tribunaux français.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact</h2>
                <p className="text-gray-600 leading-relaxed">
                  Pour toute question concernant ces conditions d'utilisation, vous pouvez nous contacter à :<br /><br />
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
