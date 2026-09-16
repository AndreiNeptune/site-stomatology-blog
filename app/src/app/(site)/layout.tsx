import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, Montserrat } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";
import { VisualEditing } from "next-sanity/visual-editing";

const DynamicFloatingCTA = dynamic(() => import("@/components/FloatingCTA"));

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://rapident.ro"),
  title: "Dr. Bianca Ionescu | Stomatologie și Estetică Dentară — București",
  description:
    "Dr. Bianca Ionescu este clinica stomatologică premium din București, dedicată rezultatelor estetice elegante. Fațete dentare, albire profesională, implanturi și coroane — toate cu grijă, fără durere. Str. Vulturilor 93A, Sector 3.",
  keywords: [
    "Dr. Bianca Ionescu",
    "clinica stomatologica bucuresti",
    "fatete dentare",
    "implanturi dentare",
    "albire dentara",
    "estetica dentara",
    "stomatolog bucuresti",
    "coroane dentare",
    "aparate dentare",
    "zambet perfect",
    "beauty dentistry",
  ],
  authors: [{ name: "Dr. Bianca Ionescu" }],
  alternates: {
    canonical: "https://rapident.ro",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Dr. Bianca Ionescu | Stomatologie și Estetică Dentară",
    description:
      "Proceduri sigure, complet fără durere, cu rezultate vizibile încă de la prima ședință. Zâmbetul tău, arta noastră.",
    url: "https://rapident.ro",
    siteName: "Dr. Bianca Ionescu",
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: "/images/og-image-cover.png",
        width: 1200,
        height: 630,
        alt: "Dr. Bianca Ionescu - Cabinet Stomatologic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Bianca Ionescu | Stomatologie și Estetică Dentară",
    description: "Proceduri sigure, complet fără durere, cu rezultate vizibile încă de la prima ședință. Zâmbetul tău, arta noastră.",
    images: ["/images/og-image-cover.png"],
  },
  icons: {
    icon: "/images/logo-pink.png",
    shortcut: "/images/logo-pink.png",
    apple: "/images/logo-pink.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Dr. Bianca Ionescu",
    "url": "https://rapident.ro",
    "image": "https://rapident.ro/images/logo-pink.png",
    "description": "Dr. Bianca Ionescu este clinica stomatologică premium din București, dedicată rezultatelor estetice elegante.",
    "telephone": "0726 206 012",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "București",
      "addressCountry": "RO"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "12:00",
      "closes": "20:00"
    }
  };

  return (
    <html lang="ro" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${plusJakartaSans.variable} ${playfairDisplay.variable} font-sans antialiased`} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <DynamicFloatingCTA />
        <VisualEditing />
      </body>
    </html>
  );
}
