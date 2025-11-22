"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState, useRef } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { AnimatedGridBackground, MeshGradientBackground } from "@/components/AnimatedBackground";

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
  const { t } = useLanguage();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

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
    t("home.modules.module1"),
    t("home.modules.module2"),
    t("home.modules.module3"),
    t("home.modules.module4"),
    t("home.modules.module5"),
    t("home.modules.module6"),
    t("home.modules.module7"),
    "Autre",
  ];

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Backgrounds animés */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
        <AnimatedGridBackground />
        <MeshGradientBackground />

        <motion.div
          className="container mx-auto px-4 relative z-10"
          style={{ opacity: heroOpacity, scale: heroScale }}
        >
          <div className="text-center max-w-5xl mx-auto pt-24">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-blue-200/50 mb-8 shadow-lg"
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-700">
                Réponse sous 24h
              </span>
            </motion.div>

            {/* Titre principal */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight"
            >
              {t("contact.hero.title")}{" "}
              <span className="text-gradient-animated inline-block">
                {t("contact.hero.titleHighlight")}
              </span>
            </motion.h1>

            {/* Subtitles */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-light mb-4"
            >
              {t("contact.hero.subtitle1")}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-gray-500 max-w-2xl mx-auto"
            >
              {t("contact.hero.subtitle2")}
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Informations de contact - Design sur-mesure */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Titre section */}
              <div>
                <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-6">
                  Contact direct
                </span>
                <h2 className="text-4xl font-black text-gray-900 mb-4">
                  {t("contact.direct.title")}
                </h2>
              </div>

              {/* Cards d'information - Design moderne sans icônes */}
              <div className="space-y-4">
                {/* Email */}
                <div className="group relative p-6 bg-white rounded-2xl border border-gray-100 hover:border-red-500/20 transition-all duration-300 overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-500 to-red-600" />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                      </div>
                      <h3 className="font-bold text-gray-900">{t("contact.direct.email")}</h3>
                    </div>
                    <a
                      href="mailto:tracefield31@gmail.com"
                      className="text-gray-600 hover:text-red-600 transition-colors font-medium ml-11"
                    >
                      tracefield31@gmail.com
                    </a>
                  </div>
                </div>

                {/* Téléphone */}
                <div className="group relative p-6 bg-white rounded-2xl border border-gray-100 hover:border-purple-500/20 transition-all duration-300 overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-purple-600" />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-purple-500" />
                      </div>
                      <h3 className="font-bold text-gray-900">{t("contact.direct.phone")}</h3>
                    </div>
                    <a
                      href="tel:0769806334"
                      className="text-gray-600 hover:text-purple-600 transition-colors font-medium ml-11"
                    >
                      07 69 80 63 34
                    </a>
                  </div>
                </div>

                {/* Zone */}
                <div className="group relative p-6 bg-white rounded-2xl border border-gray-100 hover:border-blue-500/20 transition-all duration-300 overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-blue-600" />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-blue-500" />
                      </div>
                      <h3 className="font-bold text-gray-900">{t("contact.direct.zone")}</h3>
                    </div>
                    <p className="text-gray-600 font-medium ml-11">
                      {t("contact.direct.zoneValue")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Note de garantie */}
              <div className="relative p-8 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl border border-emerald-100 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-200/30 rounded-full blur-2xl" />
                <div className="relative">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center text-white font-bold">
                      ✓
                    </div>
                    <h3 className="font-bold text-gray-900 pt-2">{t("contact.direct.guarantee")}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed ml-13">
                    {t("contact.direct.guaranteeText")}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Formulaire */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="relative bg-white/80 backdrop-blur-sm p-8 md:p-10 rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
                {/* Gradient accent bar */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500" />

                {/* Decorative circles */}
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br from-red-500/10 to-purple-500/10 rounded-full blur-2xl" />

                <div className="relative">
                  <h2 className="text-3xl font-black mb-8 text-gray-900">{t("contact.form.title")}</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Nom / Prénom */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                      {t("contact.form.name")} *
                    </label>
                    <input
                      {...register("name", { required: t("contact.form.required") })}
                      type="text"
                      id="name"
                      className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all font-medium placeholder:text-gray-400"
                      placeholder="Votre nom complet"
                    />
                    {errors.name && <p className="mt-2 text-sm text-red-600 font-medium">{errors.name.message}</p>}
                  </div>

                  {/* Entreprise */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                      {t("contact.form.company")} *
                    </label>
                    <input
                      {...register("company", { required: t("contact.form.required") })}
                      type="text"
                      id="company"
                      className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all font-medium placeholder:text-gray-400"
                      placeholder="Nom de votre entreprise"
                    />
                    {errors.company && <p className="mt-2 text-sm text-red-600 font-medium">{errors.company.message}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                        {t("contact.form.email")} *
                      </label>
                      <input
                        {...register("email", {
                          required: t("contact.form.required"),
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: t("contact.form.invalidEmail"),
                          },
                        })}
                        type="email"
                        id="email"
                        className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all font-medium placeholder:text-gray-400"
                        placeholder="email@exemple.com"
                      />
                      {errors.email && <p className="mt-2 text-sm text-red-600 font-medium">{errors.email.message}</p>}
                    </div>

                    {/* Téléphone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                        {t("contact.form.phone")} *
                      </label>
                      <input
                        {...register("phone", { required: t("contact.form.required") })}
                        type="tel"
                        id="phone"
                        className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all font-medium placeholder:text-gray-400"
                        placeholder="06 12 34 56 78"
                      />
                      {errors.phone && <p className="mt-2 text-sm text-red-600 font-medium">{errors.phone.message}</p>}
                    </div>
                  </div>

                  {/* Nombre d'employés */}
                  <div>
                    <label htmlFor="employees" className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                      {t("contact.form.employees")}
                    </label>
                    <select
                      {...register("employees")}
                      id="employees"
                      className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all font-medium"
                    >
                      <option value="">{t("contact.form.employeesPlaceholder")}</option>
                      <option value="1-5">1-5</option>
                      <option value="6-10">6-10</option>
                      <option value="11-20">11-20</option>
                      <option value="21-30">21-30</option>
                      <option value="30+">30+</option>
                    </select>
                  </div>

                  {/* Modules d'intérêt */}
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">
                      {t("contact.form.modules")}
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {modulesList.map((module) => (
                        <label key={module} className="group relative flex items-center gap-3 p-4 bg-gray-50 hover:bg-gradient-to-r hover:from-red-50 hover:to-purple-50 rounded-xl cursor-pointer transition-all duration-300 border border-gray-200 hover:border-red-300">
                          <input
                            {...register("modules")}
                            type="checkbox"
                            value={module}
                            className="w-5 h-5 text-red-600 border-gray-300 rounded focus:ring-red-500"
                          />
                          <span className="text-sm font-medium text-gray-700 group-hover:text-red-600 transition-colors">{module}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Description du besoin */}
                  <div>
                    <label htmlFor="description" className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                      {t("contact.form.description")}
                    </label>
                    <textarea
                      {...register("description")}
                      id="description"
                      rows={5}
                      className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all resize-none font-medium placeholder:text-gray-400"
                      placeholder={t("contact.form.descriptionPlaceholder")}
                    ></textarea>
                  </div>

                  {/* Préférence de contact */}
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">
                      {t("contact.form.contactPref")}
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {[
                        { value: "Téléphone", label: t("contact.form.contactPrefPhone") },
                        { value: "Email", label: t("contact.form.contactPrefEmail") },
                        { value: "Visio", label: t("contact.form.contactPrefVisio") }
                      ].map((pref) => (
                        <label key={pref.value} className="group relative flex items-center gap-3 px-6 py-3 bg-white hover:bg-gradient-to-r hover:from-red-50 hover:to-purple-50 rounded-xl cursor-pointer transition-all duration-300 border-2 border-gray-200 hover:border-red-300">
                          <input
                            {...register("contactPreference")}
                            type="radio"
                            value={pref.value}
                            className="w-5 h-5 text-red-600 border-gray-300 focus:ring-red-500"
                          />
                          <span className="text-sm font-semibold text-gray-700 group-hover:text-red-600 transition-colors">{pref.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Messages de statut */}
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="relative p-6 bg-gradient-to-br from-emerald-50 to-green-50 border-2 border-emerald-200 rounded-2xl overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-emerald-500 to-green-500" />
                      <div className="relative pl-4">
                        <p className="text-emerald-900 font-bold text-lg mb-1">✅ {t("contact.form.successTitle")}</p>
                        <p className="text-emerald-700">{t("contact.form.successText")}</p>
                      </div>
                    </motion.div>
                  )}

                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="relative p-6 bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-red-500 to-pink-500" />
                      <div className="relative pl-4">
                        <p className="text-red-900 font-bold text-lg mb-1">❌ {t("contact.form.errorTitle")}</p>
                        <p className="text-red-700">{t("contact.form.errorText")}</p>
                      </div>
                    </motion.div>
                  )}

                  {/* Bouton Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full overflow-hidden px-8 py-5 rounded-xl text-lg font-bold shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-red-600" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-red-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative text-white flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          {t("contact.form.submitting")}
                        </>
                      ) : (
                        <>
                          {t("contact.form.submit")}
                          <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </>
                      )}
                    </span>
                  </button>
                </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
