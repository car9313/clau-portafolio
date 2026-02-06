import type { Metadata } from "next";
import "./globals.css";

import { Inter, Roboto_Mono } from "next/font/google";

// Inter es más estable y tiene mejor soporte offline
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  adjustFontFallback: true,
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "Clau | Frontend Developer & Educator",
  description:
    "Portafolio de Clau, desarrolladora frontend especializada en React, Next.js, TypeScript y animaciones con Framer Motion. Explora proyectos, tutoriales y soluciones prácticas para la web moderna.",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Portafolio",
    "Educación técnica",
  ],
  authors: [{ name: "Clau" }],
  openGraph: {
    title: "Clau | Frontend Developer & Educator",
    description:
      "Explora proyectos y tutoriales de desarrollo web moderno en el portafolio de Clau.",
    url: "https://tusitio.com",
    siteName: "Clau Dev Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Clau Frontend Developer Portfolio",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clau | Frontend Developer & Educator",
    description:
      "Portafolio de proyectos y tutoriales en React, Next.js y más.",
    images: ["/og-image.png"],
    creator: "@tuusuario",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${robotoMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
