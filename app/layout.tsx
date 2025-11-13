import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "TraceField - Solutions digitales sur-mesure pour artisans et PME",
  description: "TraceField développe des outils digitaux personnalisés pour les artisans et PME : rapports d'intervention intelligents, gestion de planning, traçabilité QR code, suivi client et stock. Gagnez du temps, réduisez les erreurs, concentrez-vous sur votre métier.",
  keywords: ["solutions digitales", "artisans", "PME", "rapports intervention", "gestion planning", "QR code", "traçabilité", "automatisation"],
  authors: [{ name: "TraceField" }],
  openGraph: {
    title: "TraceField - Solutions digitales sur-mesure pour artisans et PME",
    description: "Automatisez vos tâches et simplifiez vos interventions avec des solutions 100% sur-mesure",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
