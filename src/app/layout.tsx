import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const mono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["400", "500", "700"] });
const display = Space_Grotesk({ variable: "--font-display", subsets: ["latin"], weight: ["500", "700"] });

const description = `${profile.role} at ${profile.company}. Laravel, Inertia, React and TypeScript platforms in English and Arabic, built and run end to end.`;

export const metadata: Metadata = {
  metadataBase: new URL("https://professional-portfolio-v2-dis2.vercel.app"),
  title: `${profile.name} · ${profile.role}`,
  description,
  openGraph: {
    title: `${profile.name} · ${profile.role}`,
    description,
    type: "website",
    images: [{ url: "/shots/brandcode.webp", width: 1200, height: 750 }],
  },
};

export const viewport: Viewport = { themeColor: "#0a0708" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${mono.variable} ${display.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
