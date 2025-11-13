"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState } from "react";

type FormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  employees: string;
  modules: string[];
  description: string;
  contactPreference: string;
};

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = async (data: FormData) => {
    try {
      // Préparer les modules sélectionnés en texte lisible
      const modulesText = data.modules?.length > 0 ? data.modules.join(", ") : "Aucun module sélectionné";

      // Envoyer via Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY_HERE",
          subject: `Nouveau contact TraceField - ${data.company}`,
          from_name: data.name,
          name: data.name,
          company: data.company,
          email: data.email,
          phone: data.phone,
          employees: data.employees,
          modules: modulesText,
          description: data.description,
          contactPreference: data.contactPreference,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      setSubmitStatus("error");
    }
  };

  const modulesList = [
    "Rapports d'intervention",
    "Gestion de planning",
    "Gestion de stock",
    "Suivi clients",
    "Suivi matériel",
    "Intranet",
    "Automatisation",
    "Autre",
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
              Parlons de votre <span className="text-red-600">projet</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-4">
              Vous perdez du temps sur des tâches répétitives ? Vos outils actuels ne vous conviennent pas ?
            </p>
            <p className="text-lg text-gray-600">
              Échangeons 30 minutes pour comprendre vos besoins et voir comment TraceField peut vous aider.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Informations de contact */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Contact direct</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:tracefield31@gmail.com" className="text-gray-600 hover:text-red-600 transition-colors">
                      tracefield31@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Téléphone</h3>
                    <a href="tel:0769806334" className="text-gray-600 hover:text-red-600 transition-colors">
                      07 69 80 63 34
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Zone d'intervention</h3>
                    <p className="text-gray-600">France entière</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-2">Réponse rapide garantie</h3>
                <p className="text-gray-600 text-sm">
                  Nous nous engageons à vous répondre sous 24h ouvrées pour échanger sur votre projet.
                </p>
              </div>
            </motion.div>

            {/* Formulaire */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Demander un rendez-vous</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Nom / Prénom */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom / Prénom *
                    </label>
                    <input
                      {...register("name", { required: "Ce champ est requis" })}
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
                  </div>

                  {/* Entreprise */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Entreprise *
                    </label>
                    <input
                      {...register("company", { required: "Ce champ est requis" })}
                      type="text"
                      id="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                    />
                    {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      {...register("email", {
                        required: "Ce champ est requis",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Email invalide",
                        },
                      })}
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                  </div>

                  {/* Téléphone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone *
                    </label>
                    <input
                      {...register("phone", { required: "Ce champ est requis" })}
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                    />
                    {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
                  </div>

                  {/* Nombre d'employés */}
                  <div>
                    <label htmlFor="employees" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre d'employés
                    </label>
                    <select
                      {...register("employees")}
                      id="employees"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                    >
                      <option value="">Sélectionner</option>
                      <option value="1-5">1-5</option>
                      <option value="6-10">6-10</option>
                      <option value="11-20">11-20</option>
                      <option value="21-30">21-30</option>
                      <option value="30+">30+</option>
                    </select>
                  </div>

                  {/* Modules d'intérêt */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Modules d'intérêt
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {modulesList.map((module) => (
                        <label key={module} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            {...register("modules")}
                            type="checkbox"
                            value={module}
                            className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-600"
                          />
                          <span className="text-sm text-gray-700">{module}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Description du besoin */}
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                      Description du besoin
                    </label>
                    <textarea
                      {...register("description")}
                      id="description"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all resize-none"
                      placeholder="Décrivez-nous brièvement votre projet et vos besoins..."
                    ></textarea>
                  </div>

                  {/* Préférence de contact */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Préférence de contact
                    </label>
                    <div className="flex flex-wrap gap-4">
                      {["Téléphone", "Email", "Visio"].map((pref) => (
                        <label key={pref} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            {...register("contactPreference")}
                            type="radio"
                            value={pref}
                            className="w-4 h-4 text-red-600 border-gray-300 focus:ring-red-600"
                          />
                          <span className="text-sm text-gray-700">{pref}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Messages de statut */}
                  {submitStatus === "success" && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800 font-medium">✅ Merci ! Votre message a été envoyé avec succès.</p>
                      <p className="text-green-700 text-sm mt-1">Nous vous contacterons sous 24h.</p>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-800 font-medium">❌ Une erreur est survenue.</p>
                      <p className="text-red-700 text-sm mt-1">Veuillez réessayer ou nous contacter directement.</p>
                    </div>
                  )}

                  {/* Bouton Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? "Envoi en cours..." : "Demander un rendez-vous"}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
