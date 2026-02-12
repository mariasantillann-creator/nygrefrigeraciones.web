import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NYG Refrigeraciones | Servicio Técnico en Refrigeración Comercial e Industrial",
  description:
    "Soluciones integrales en refrigeración comercial e industrial. Más de 20 años de experiencia en instalación, mantenimiento preventivo y correctivo de sistemas de frío alimentario.",
  keywords: [
    "refrigeración",
    "cámaras frigoríficas",
    "frío industrial",
    "mantenimiento",
    "Buenos Aires",
    "NYG",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" style={{ scrollBehavior: "smooth" }}>
      <body className={`${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
