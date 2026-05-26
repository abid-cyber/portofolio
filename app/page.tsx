"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ThemeToggle from "./components/ThemeToggle";

// Type definitions
interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  highlights: string[];
  github: string;
  demo: string;
  illustrationType: "catalog" | "bus" | "food";
}

interface TimelineItem {
  role: string;
  organization: string;
  period: string;
  type: "work" | "education" | "award" | "organization";
  highlights: string[];
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setFormSubmitted(false), 5000);
    }
  };

  const techStack = {
    "Frontend & Backend": ["PHP", "Laravel", "Yii", "HTML", "CSS", "Tailwind", "Bootstrap"],
    "Mobile & Database": ["Flutter", "Dart", "MySQL"],
    "Sains Data / ML": ["Python", "K-Nearest Neighbor", "Naive Bayes"],
    "Desain & UI/UX": ["Figma", "Balsamiq"]
  };

  const projects: Project[] = [
    {
      title: "Sistem Informasi dan E-Katalog pada Toko Usaha Muda",
      category: "Project Based Learning - 2024",
      description: "Platform katalog digital yang dirancang untuk mendigitalkan sistem inventarisasi barang dan mempermudah pemasaran produk kepada pelanggan Toko Usaha Muda agar lebih efisien dan modern.",
      tech: ["System Analyst", "UI/UX Design", "Technical Writer"],
      highlights: [
        "Berkontribusi sebagai System Analyst, UI/UX Designer, dan Technical Writer dalam tim proyek.",
        "Melakukan analisis kebutuhan pengguna dan proses bisnis untuk menentukan fitur sistem yang sesuai.",
        "Mendesain tampilan antarmuka aplikasi agar lebih menarik, mudah digunakan, dan user friendly.",
        "Menyusun dokumentasi proyek seperti alur sistem, kebutuhan fungsional, serta laporan pengembangan sistem."
      ],
      github: "https://github.com/intersectcode-A1/intersectcode_pbl",
      demo: "#",
      illustrationType: "catalog"
    },
    {
      title: "Sistem Informasi dan Pemesanan Tiket Bus Berbasis Web pada PT. Jasa Malindo",
      category: "Project Mandiri - 2024",
      description: "Sistem reservasi tiket terintegrasi yang dikembangkan secara mandiri untuk memudahkan pemesanan tiket online, pengelolaan jadwal keberangkatan bus, dan manajemen data pelanggan secara terpusat.",
      tech: ["Yii Framework", "PHP", "MySQL", "Bootstrap"],
      highlights: [
        "Mengembangkan sistem secara mandiri dari tahap perancangan hingga implementasi.",
        "Membangun frontend dan backend menggunakan Framework Yii.",
        "Mendesain database, fitur pemesanan tiket, jadwal keberangkatan, dan data pelanggan.",
        "Melakukan testing untuk memastikan sistem berjalan dengan baik."
      ],
      github: "https://github.com/andinizakira/tiket-bus-malindo",
      demo: "#",
      illustrationType: "bus"
    },
    {
      title: "Sistem Rekomendasi Menu Makanan Bergizi untuk Program MBG Berbasis Mobile",
      category: "Project Capstone - On Going",
      description: "Aplikasi mobile cerdas yang dirancang untuk merekomendasikan pilihan menu makanan bergizi seimbang secara personal dalam mendukung program nasional Makanan Bergizi Gratis (MBG).",
      tech: ["Flutter", "Dart", "K-Nearest Neighbor", "Naive Bayes", "Mobile Development"],
      highlights: [
        "Mengembangkan aplikasi mobile untuk rekomendasi menu makanan bergizi.",
        "Menggunakan algoritma K-Nearest Neighbor (KNN) dan Naive Bayes.",
        "Berfokus pada pengolahan data, analisis kebutuhan pengguna, dan pengembangan sistem yang user friendly."
      ],
      github: "https://github.com/andinizakira/rekomendasi-menu-mbg",
      demo: "#",
      illustrationType: "food"
    }
  ];

  const timeline: TimelineItem[] = [
    {
      role: "Staff Networking",
      organization: "UKM Cybertech – Politeknik Negeri Padang",
      period: "2025 – 2026",
      type: "organization",
      highlights: [
        "Menjadi anggota aktif pada divisi networking dan berpartisipasi dalam berbagai kegiatan divisi.",
        "Mengikuti pelatihan rutin setiap minggu mengenai jaringan komputer dan teknologi terbaru.",
        "Aktif dalam sharing session untuk menambah wawasan serta meningkatkan kemampuan teknis di bidang networking."
      ]
    },
    {
      role: "Staff HRD",
      organization: "UKM Cybertech – Politeknik Negeri Padang",
      period: "2024 – 2025",
      type: "organization",
      highlights: [
        "Bertanggung jawab dalam mengelola absensi serta memantau kedisiplinan anggota UKM.",
        "Membantu koordinasi internal agar kegiatan organisasi berjalan tertib dan teratur.",
        "Berkontribusi dalam perancangan atribut dan baju organisasi untuk kegiatan resmi maupun event kampus."
      ]
    }
  ];

  // Helper component to render SVG illustrations for project cards
  const ProjectIllustration = ({ type }: { type: "catalog" | "bus" | "food" }) => {
    if (type === "catalog") {
      return (
        <div className="w-full h-full bg-blue-50 dark:bg-slate-900 flex items-center justify-center relative">
          <svg className="w-20 h-20 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
        </div>
      );
    }
    if (type === "bus") {
      return (
        <div className="w-full h-full bg-indigo-50 dark:bg-slate-900 flex items-center justify-center relative">
          <svg className="w-20 h-20 text-indigo-600 dark:text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-12v.75m0 3v.75m0 3v.75m0 3V18m-3-12h15c.621 0 1.125.504 1.125 1.125v10.75c0 .621-.504 1.125-1.125 1.125H4.5A1.125 1.125 0 013.375 16.5V7.125C3.375 6.504 3.879 6 4.5 6zM6 9.75h1.5a.75.75 0 00.75-.75V7.5a.75.75 0 00-.75-.75H6a.75.75 0 00-.75.75V9a.75.75 0 00.75.75zm0 5.25h1.5a.75.75 0 00.75-.75v-1.5a.75.75 0 00-.75-.75H6a.75.75 0 00-.75.75v1.5a.75.75 0 00.75.75zm10.5-5.25H18a.75.75 0 00.75-.75V7.5a.75.75 0 00-.75-.75h-1.5a.75.75 0 00-.75.75V9a.75.75 0 00.75.75zm0 5.25H18a.75.75 0 00.75-.75v-1.5a.75.75 0 00-.75-.75h-1.5a.75.75 0 00-.75.75v1.5a.75.75 0 00.75.75z" />
          </svg>
        </div>
      );
    }
    return (
      <div className="w-full h-full bg-emerald-50 dark:bg-slate-900 flex items-center justify-center relative">
        <svg className="w-20 h-20 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008zM12 3v3.75" />
        </svg>
      </div>
    );
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden font-sans">
      {/* Navigation Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-white/90 dark:bg-gray-950/90 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm py-4"
          : "bg-transparent py-6"
          }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a
            href="#home"
            className="font-outfit text-xl font-extrabold tracking-tight text-blue-600 dark:text-blue-400"
          >
            Portfolio
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8 font-medium">
            <a href="#about" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Tentang Saya</a>
            <a href="#projects" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projek</a>
            <a href="#experience" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Pengalaman</a>
            <a href="#contact" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Kontak</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <a
              href="/CV_Andini_Zakira.pdf"
              download="CV_Andini_Zakira.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/10 active:scale-[0.98] transition-all cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Unduh CV
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center space-x-3 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800/80 py-6 px-6 flex flex-col space-y-4 shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-top-5">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-semibold py-2 border-b border-slate-100 dark:border-slate-800"
            >
              Tentang Saya
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-semibold py-2 border-b border-slate-100 dark:border-slate-800"
            >
              Projek
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-semibold py-2 border-b border-slate-100 dark:border-slate-800"
            >
              Pengalaman
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-semibold py-2 border-b border-slate-100 dark:border-slate-800"
            >
              Kontak
            </a>
            <a
              href="/CV_Andini_Zakira.pdf"
              download="CV_Andini_Zakira.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-md shadow-blue-500/10 cursor-pointer"
            >
              Unduh CV
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-28 pb-16 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center space-y-8 z-10">

          {/* Centered circular avatar container */}
          <div className="relative">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-white dark:border-slate-900 shadow-lg bg-slate-100 dark:bg-slate-900 flex items-center justify-center hover:scale-102 transition-transform duration-300 relative">
              <Image
                src="/andinizakira.jpeg"
                alt="Andini Zakira"
                fill
                priority
                sizes="128px"
                className="object-cover"
              />
            </div>
            {/* Soft decorative ambient glow */}
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl -z-10 hover:scale-110 transition-transform duration-300" />
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-slate-900 dark:text-slate-50">
              Hai, saya <span className="text-blue-600 dark:text-blue-400">Andini Zakira</span>
            </h1>
            <p className="font-outfit text-xl sm:text-2xl font-medium text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Saya membangun aplikasi web dan mobile yang scalable dengan wawasan berbasis data
            </p>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-xl mx-auto font-medium">
              Software Engineer yang berfokus pada Pengembangan Full-Stack dan Frontend, Aplikasi Mobile, dan Machine Learning
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md pt-2">
            <a
              href="#projects"
              className="px-8 py-3.5 rounded-lg font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/10 active:scale-[0.98] transition-all text-center cursor-pointer flex-1"
            >
              Lihat Projek Saya
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-lg font-bold border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 bg-transparent hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-all text-center cursor-pointer flex-1"
            >
              Hubungi Saya
            </a>
          </div>

          {/* Centered Thin Socials */}
          <div className="flex items-center space-x-6 pt-6 text-slate-400 dark:text-slate-500">
            <a href="https://github.com/andinizakira" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors" aria-label="GitHub">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.867 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/andini-zakira-31786a404/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="mailto:andinizakira89@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors" aria-label="Email">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-blue-600 dark:text-blue-400 animate-bounce hover:scale-110 active:scale-95 transition-all cursor-pointer"
          aria-label="Scroll down to About section"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-24 px-6 border-t border-slate-100 dark:border-slate-900/60 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-50 mb-4">Tentang Saya</h2>
            <div className="w-16 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column (Avatar and text only, no outer box) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center text-center">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-white dark:border-slate-900 shadow-md mb-6 relative bg-slate-100 dark:bg-slate-900">
                <Image
                  src="/andini.jpeg"
                  alt="Andini Zakira"
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              </div>
              <h3 className="font-outfit text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-1">
                Software Engineer
              </h3>
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                Rekayasa Perangkat Lunak
              </p>
            </div>

            {/* Right Story Text */}
            <div className="lg:col-span-7 flex flex-col space-y-6 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              <p className="text-justify">
                Saya adalah mahasiswa Jurusan Teknologi Informasi, Program Studi D4 Teknologi Rekayasa Perangkat Lunak, yang memiliki ketertarikan pada bidang pengembangan perangkat lunak dan teknologi digital. Saya memiliki pemahaman dasar dalam pemrograman, pengembangan web maupun aplikasi, serta analisis sistem. Selain itu, saya aktif dalam kegiatan organisasi sehingga terbiasa bekerja sama dalam tim, memiliki kemampuan komunikasi yang baik, dan mampu menjalankan tanggung jawab dengan baik. Saya dikenal sebagai pribadi yang disiplin, cepat beradaptasi, dan selalu ingin belajar hal baru untuk terus meningkatkan kemampuan di bidang teknologi informasi melalui pengalaman kerja maupun proyek yang dikerjakan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="py-24 px-6 border-t border-slate-100 dark:border-slate-900 bg-slate-50/30 dark:bg-slate-900/20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-50 mb-4">Keahlian Teknologi</h2>
            <div className="w-16 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(techStack).map(([category, skills]) => (
              <div
                key={category}
                className="p-6 sm:p-8 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white/70 dark:bg-slate-900/50 shadow-sm flex flex-col justify-start"
              >
                <h3 className="font-outfit text-lg font-bold text-slate-800 dark:text-slate-100 mb-6 border-b border-slate-100 dark:border-slate-800/80 pb-2">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-300 bg-slate-50/60 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/35 hover:scale-[1.01] transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-24 px-6 border-t border-slate-100 dark:border-slate-900 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-50 mb-4">Projek Unggulan</h2>
            <div className="w-16 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full" />
            <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-md mx-auto text-sm sm:text-base">
              Koleksi projek terpilih yang menampilkan keterampilan teknis dan pendekatan pemecahan masalah saya
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                {/* Visual Header */}
                <div className="w-full h-44 border-b border-slate-100 dark:border-slate-850 overflow-hidden relative">
                  <ProjectIllustration type={project.illustrationType} />
                </div>

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="block text-[10px] font-bold tracking-wider text-blue-600 dark:text-blue-400 uppercase mb-2">
                      {project.category}
                    </span>

                    <h3 className="font-outfit text-lg font-bold mb-3 text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 font-medium">
                      {project.description}
                    </p>

                    {/* Key Features Bullets */}
                    <div className="mb-6">
                      <strong className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-3">Fitur Utama:</strong>
                      <ul className="space-y-2 list-none">
                        {project.highlights.map((h, hidx) => (
                          <li key={hidx} className="text-slate-500 dark:text-slate-400 leading-normal flex items-start gap-2.5 text-xs font-medium">
                            <span className="text-blue-500 dark:text-blue-400 select-none text-xs">•</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map((t, index) => (
                        <span
                          key={index}
                          className="px-2.5 py-1.5 rounded-md text-[10px] font-semibold text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900 border border-slate-150 dark:border-slate-800"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Actions Row */}
                    <div className="flex items-center space-x-3 pt-4 border-t border-slate-100 dark:border-slate-850">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold border border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/20 active:scale-[0.98] transition-all cursor-pointer flex-1"
                      >
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.867 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                        </svg>
                        GitHub
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] transition-all cursor-pointer flex-1"
                      >
                        Demo Langsung
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience / Achievements Section */}
      <section id="experience" className="py-24 px-6 border-t border-slate-100 dark:border-slate-900 bg-slate-50/30 dark:bg-slate-900/20">
        <div className="max-w-4xl mx-auto w-full">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-50 mb-4">Pengalaman Organisasi</h2>
            <div className="w-16 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full" />
            <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-md mx-auto text-sm sm:text-base">
              Kontribusi aktif dan peran penting saya dalam organisasi kemahasiswaan
            </p>
          </div>

          {/* Timeline */}
          <div className="relative border-l border-slate-250 dark:border-slate-800 pl-6 sm:pl-8 ml-4 space-y-12 max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="relative group animate-in fade-in duration-300">
                {/* Circle Node Icon */}
                <span className="absolute -left-[35px] sm:-left-[43px] top-1 flex items-center justify-center w-8 h-8 rounded-full border-2 border-white dark:border-gray-950 shadow-sm bg-blue-600 text-white select-none">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>

                {/* Card Container */}
                <div className="p-6 rounded-xl border border-slate-150 dark:border-slate-800 bg-white/70 dark:bg-slate-900/50 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-outfit text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-100">
                        {item.role}
                      </h3>
                      <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                        {item.organization}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500 font-semibold self-start sm:self-center shrink-0">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {item.period}
                    </div>
                  </div>

                  <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400 leading-relaxed list-none">
                    {item.highlights.map((bullet, bidx) => (
                      <li key={bidx} className="flex items-start gap-2.5">
                        <span className="text-blue-500 dark:text-blue-400 select-none text-xs mt-0.5">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 border-t border-slate-100 dark:border-slate-900 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-50 mb-4">Hubungi Saya</h2>
            <div className="w-16 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full" />
            <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-md mx-auto text-sm sm:text-base">
              Punya ide projek menarik atau peluang kolaborasi? Silakan kirim pesan Anda di bawah ini!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Information (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-900/30">
              <div className="flex flex-col space-y-6">
                <h3 className="font-outfit text-xl font-bold text-slate-800 dark:text-slate-100">
                  Mari Berdiskusi!
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                  Saya selalu bersemangat untuk membicarakan peluang kerja, kemitraan riset machine learning, arsitektur backend, atau sekadar berdiskusi seputar teknologi terkini.
                </p>

                <div className="space-y-4 pt-4">
                  {/* Email */}
                  <a
                    href="mailto:andinizakira89@gmail.com"
                    className="flex items-center gap-4 group p-3 rounded-xl hover:bg-white dark:hover:bg-slate-900/50 hover:shadow-sm transition-all cursor-pointer"
                  >
                    <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                    <div>
                      <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Email Profesional</span>
                      <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        andinizakira89@gmail.com
                      </span>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/andini-zakira-31786a404/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group p-3 rounded-xl hover:bg-white dark:hover:bg-slate-900/50 hover:shadow-sm transition-all cursor-pointer"
                  >
                    <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <div>
                      <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">LinkedIn</span>
                      <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        linkedin.com/in/andinizakira
                      </span>
                    </div>
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/andinizakira"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group p-3 rounded-xl hover:bg-white dark:hover:bg-slate-900/50 hover:shadow-sm transition-all cursor-pointer"
                  >
                    <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.867 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <div>
                      <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Profil GitHub</span>
                      <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        github.com/andinizakira
                      </span>
                    </div>
                  </a>
                </div>
              </div>

            </div>

            {/* Form (7 Cols) */}
            <div className="lg:col-span-7 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/50">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Nama Anda"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="email@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    Pesan Anda
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tuliskan pesan atau detail projek Anda..."
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-blue-500/10"
                >
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Kirim Pesan
                </button>

                {formSubmitted && (
                  <div className="p-4 rounded-lg border border-emerald-200/50 dark:border-emerald-800/30 bg-emerald-50/50 dark:bg-emerald-950/20 text-sm text-emerald-700 dark:text-emerald-300 text-center font-medium animate-in fade-in zoom-in duration-300">
                    ✓ Terima kasih! Pesan Anda telah berhasil terkirim. Saya akan segera menghubungi Anda.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-100 dark:border-slate-900 bg-white dark:bg-gray-950 text-center text-xs text-slate-400 dark:text-slate-500 font-medium">
        <p>© {new Date().getFullYear()} Andini Zakira.</p>
      </footer>
    </div>
  );
}
