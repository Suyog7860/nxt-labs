import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "NXT LABS | Digital Services & Web Development",
  description: "NXT LABS DIGITAL SERVICES builds modern websites, web applications and custom software solutions for businesses.",
  keywords: ["web development", "website development", "web applications", "software solutions", "digital services", "business websites", "custom software", "UI/UX development"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "NXT LABS | Digital Services & Web Development",
    description: "Modern websites, web applications and custom software solutions for businesses.",
    url: "/",
    siteName: "NXT LABS DIGITAL SERVICES",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "NXT LABS | Digital Services & Web Development",
    description: "Modern websites, web applications and custom software solutions for businesses.",
  },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${dmSans.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
