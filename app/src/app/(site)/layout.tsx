import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

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

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://drbiancaionescu.ro"),
  title: "Dr. Bianca Ionescu | Where Beauty Meets Dentistry — București",
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
  openGraph: {
    title: "Dr. Bianca Ionescu | Where Beauty Meets Dentistry",
    description:
      "Proceduri sigure, complet fără durere, cu rezultate vizibile încă de la prima ședință. Zâmbetul tău, arta noastră.",
    url: "https://drbiancaionescu.ro",
    siteName: "Dr. Bianca Ionescu",
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: "/images/logo-pink.png",
        width: 800,
        height: 600,
        alt: "Dr. Bianca Ionescu Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Bianca Ionescu | Where Beauty Meets Dentistry",
    description: "Proceduri sigure, complet fără durere, cu rezultate vizibile încă de la prima ședință.",
    images: ["/images/logo-pink.png"],
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
  return (
    <html lang="ro" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${plusJakartaSans.variable} ${playfairDisplay.variable} font-sans antialiased`} suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
