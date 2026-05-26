import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Andini Zakira | Full-Stack Software Engineer & ML Specialist",
  description: "Halo, saya Andini Zakira. Saya membangun aplikasi web dan mobile yang scalable dengan wawasan berbasis data. Jelajahi keahlian, pengalaman, dan projek unggulan saya menggunakan Next.js, Symfony, Flutter, dan Machine Learning.",
  keywords: [
    "Andini Zakira",
    "Portfolio",
    "Software Engineer",
    "Machine Learning Specialist",
    "Next.js",
    "Symfony",
    "Flutter",
    "Python",
    "Data Science",
    "Web Developer",
    "PostgreSQL"
  ],
  authors: [{ name: "Andini Zakira" }],
  creator: "Andini Zakira",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${outfit.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans antialiased bg-slate-50 dark:bg-gray-950 text-slate-900 dark:text-slate-100 selection:bg-violet-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}

