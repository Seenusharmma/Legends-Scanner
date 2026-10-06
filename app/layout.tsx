import type { Metadata, Viewport } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Legends Microbrewery | Digital Menu",
  description: "Explore the food and beverage menu at Legends Microbrewery.",
  openGraph: {
    title: "Legends Microbrewery | Digital Menu",
    description: "Explore the food and beverage menu at Legends Microbrewery.",
    type: "website",
    siteName: "Legends Microbrewery",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Legends Microbrewery | Digital Menu",
    description: "Explore the food and beverage menu at Legends Microbrewery.",
  },
};

export const viewport: Viewport = {
  themeColor: "#7A1735",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-burgundy focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-cream"
        >
          Skip to menu content
        </a>
        {children}
      </body>
    </html>
  );
}
