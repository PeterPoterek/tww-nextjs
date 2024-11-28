import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "@/components/ui/toaster";

import Navbar from "../components/navbar/navbar";
import Footer from "@/components/footer/footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "TWW - Technologia Wykonania Wnętrz",
  description:
    "Specjaliści w wykończeniach łazienek i kuchni. Oferujemy kompleksowe usługi remontowe dostosowane do Twoich potrzeb. Stwórz wymarzoną przestrzeń z naszym wykwalifikowanym zespołem.",
  keywords: [
    "technologia wykonania wnetrz",
    "technologia wykonania wnętrz",
    "poterek",
    "piotr poterek",
    "wykończenia łazienek",
    "wykończenia kuchni",
    "remonty kraków",
    "remonty krakow",
    "remonty łazienek",
    "remonty kuchni",
    "specjaliści w wykończeniach",
    "profesjonalne wykończenia",
    "usługi remontowe",
    "projektowanie łazienek",
    "projektowanie kuchni",
    "kompleksowe usługi remontowe",
    "wymarzona przestrzeń",
    "profesjonalny zespół remontowy",
    "specjaliści od wykończeń wnętrz",
  ],
  openGraph: {
    title: "Technologia Wykonania Wnętrz",
    description:
      "Specjaliści w wykończeniach łazienek. Oferujemy kompleksowe usługi remontowe dostosowane do Twoich potrzeb. Stwórz wymarzoną przestrzeń z naszym wykwalifikowanym zespołem.",
    url: "https://www.technologiawykonaniawnetrz.pl",
    siteName: "Technologia Wykonania Wnętrz",
    images: [
      {
        url: "/opengraph.png",
        width: 1200,
        height: 630,
        alt: "Technologia Wykonania Wnętrz",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body className={`${roboto.variable} roboto text-slate-50`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}

          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
