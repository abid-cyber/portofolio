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
  title: "Abid Mustaghfirin | Full-Stack Developer & Software Engineering Student",
  description: "Halo, saya Abid Mustaghfirin, mahasiswa D4 Teknologi Rekayasa Perangkat Lunak (IPK 3.81) dan Full-Stack Developer yang membangun aplikasi web, mobile, REST API, serta integrasi Machine Learning.",
  keywords: [
    "Abid Mustaghfirin",
    "Portfolio",
    "Full-Stack Developer",
    "Software Engineering Student",
    "TypeScript",
    "Next.js",
    "React",
    "Vue.js",
    "Laravel",
    "Symfony",
    "Express.js",
    "Flutter",
    "PostgreSQL",
    "MySQL",
    "Python",
    "Machine Learning"
  ],
  authors: [{ name: "Abid Mustaghfirin" }],
  creator: "Abid Mustaghfirin",
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

