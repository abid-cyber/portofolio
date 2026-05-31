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

  // Typewriter effect state
  const roles = [
    "Full-Stack Developer",
    "Mobile Developer",
    "Software Engineering Student"
  ];
  const [currentRole, setCurrentRole] = useState("Full-Stack Developer");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeletingRole, setIsDeletingRole] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [mounted, setMounted] = useState(false);
  const [selectedTab, setSelectedTab] = useState<"all" | "work" | "organization" | "award">("all");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleTyping = () => {
      const fullText = roles[roleIndex];

      if (!isDeletingRole) {
        // Typing: Add one character at a natural, readable pace
        setCurrentRole(fullText.slice(0, currentRole.length + 1));
        setTypingSpeed(100 + Math.random() * 60); // Comfortable typing speed (100ms - 160ms)

        if (currentRole === fullText) {
          setTypingSpeed(500); // Brief readable pause on completion (0.5s) to allow reading
          setIsDeletingRole(true);
        }
      } else {
        // Deleting: Smooth backspace execution
        setCurrentRole(fullText.slice(0, currentRole.length - 1));
        setTypingSpeed(50); // Comfortable deletion speed (50ms)

        if (currentRole === "") {
          setIsDeletingRole(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(300); // Brief transition pause before typing next word (300ms)
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentRole, isDeletingRole, roleIndex, typingSpeed, mounted]);

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
    "Web Development": ["PHP", "Laravel", "Symfony", "Node.js", "Vue.js", "HTML", "CSS", "TailwindCSS"],
    "Mobile & Database": ["Flutter", "Dart", "MySQL"],
    "Architecture & Tools": ["API Integration", "MVC", "Microservices", "Visual Studio Code", "GitHub", "Python", "Figma"]
  };

  const projects: Project[] = [
    {
      title: "Sistem Prediksi Kelayakan Beasiswa",
      category: "Capstone Project - 2026",
      description: "Sistem prediksi otomatis kelayakan beasiswa menggunakan integrasi machine learning dengan antarmuka web admin dan mobile untuk kenyamanan mahasiswa.",
      tech: ["Flutter", "Dart", "XGBoost", "SVM", "API Integration", "Machine Learning"],
      highlights: [
        "Mengembangkan Aplikasi Mobile (untuk mahasiswa) dan Web Admin (untuk panitia).",
        "Menerapkan model XGBoost dan SVM sebagai sistem prediksi kelayakan otomatis.",
        "Mengintegrasikan model machine learning ke antarmuka aplikasi menggunakan API."
      ],
      github: "https://github.com/abid-cyber/prediksi-beasiswa",
      demo: "#",
      illustrationType: "food"
    },
    {
      title: "Sistem Reservasi & Promosi Villa Hasanah",
      category: "Personal Project - 2025",
      description: "Aplikasi web client-server untuk otomatisasi sistem reservasi villa dan promosi kavling secara interaktif dan responsif.",
      tech: ["Symfony Framework", "PHP", "MySQL", "MVC", "Bootstrap"],
      highlights: [
        "Membangun aplikasi web client-server untuk otomatisasi reservasi villa dan promosi kavling.",
        "Mengimplementasikan framework Symfony (MVC) dan MySQL untuk pengelolaan basis data.",
        "Merancang antarmuka publik yang responsif dan dashboard back-end khusus untuk admin."
      ],
      github: "https://github.com/abid-cyber/Vila-Hasanah",
      demo: "#",
      illustrationType: "bus"
    },
    {
      title: "Sistem Informasi dan E-Katalog Toko Usaha Muda",
      category: "Project Based Learning - 2024",
      description: "Platform e-katalog digital yang dirancang untuk mempermudah pemasaran produk serta melakukan digitalisasi data inventarisasi barang toko.",
      tech: ["Project Manager", "Frontend Development", "HTML", "CSS", "MySQL"],
      highlights: [
        "Berperan sebagai Project Manager yang bertanggung jawab atas perencanaan dan pengawasan proyek.",
        "Berkontribusi langsung secara teknis dalam merancang dan mengembangkan kode antarmuka pengguna (Frontend).",
        "Memastikan seluruh tahapan proyek berjalan lancar dari awal hingga penyusunan laporan."
      ],
      github: "https://github.com/intersectcode-A1/intersectcode_textilehub",
      demo: "#",
      illustrationType: "catalog"
    }
  ];

  const timeline: TimelineItem[] = [
    {
      role: "IT Support",
      organization: "PT. SINARMULIA ANDALAS INFOCOM",
      period: "Okt 2021 – Jan 2022",
      type: "work",
      highlights: [
        "Melakukan instalasi dan konfigurasi sistem operasi serta software pada perangkat laptop/PC baru.",
        "Melakukan perakitan hardware PC dan troubleshooting kerusakan ringan.",
        "Melakukan instalasi, pengujian, dan maintenance driver printer untuk memastikan kesiapan pakai."
      ]
    },
    {
      role: "Wakil Ketua Pelaksanaan Oprec & Programming Staff",
      organization: "UKM PNP Cybertech",
      period: "2023 – 2025",
      type: "organization",
      highlights: [
        "Wakil Ketua Pelaksanaan Open Recruitment (2023 – 2024).",
        "Staff Divisi Programming (2023 – 2025).",
        "Berkontribusi dalam kegiatan pelatihan teknologi, pemrograman, dan koordinasi kepanitiaan organisasi."
      ]
    },
    {
      role: "Ketua Pelaksanaan TI CUP & Anggota Divisi MIKAT",
      organization: "HMJ-TEKINFO",
      period: "2023 – 2024",
      type: "organization",
      highlights: [
        "Ketua Pelaksanaan Futsal TI CUP (2024).",
        "Anggota Divisi Minat dan Bakat (MIKAT) (2023 – 2024).",
        "Bertanggung jawab dalam merencanakan, melaksanakan, dan mengoordinasikan turnamen futsal mahasiswa tingkat jurusan."
      ]
    },
    {
      role: "Juara 3 Hackathon Fest 2026 - CORE3D 2026",
      organization: "Departemen Teknik Komputer - UNAND",
      period: "16 – 17 Mei 2026",
      type: "award",
      highlights: [
        "Mencetuskan ide dan konsep utama CAMPUS-E dalam tim (5 orang) sebagai sistem prediksi risiko depresi mahasiswa berbasis NLP (IndoBERT) dengan prinsip Early-Warning dan Empathy.",
        "Berkontribusi dalam pengembangan frontend reaktif menggunakan Livewire v3, Livewire Volt, dan Tailwind CSS v4 untuk membangun antarmuka pengguna yang responsif.",
        "Membantu perancangan alur sistem proaktif untuk mendeteksi indikasi stres dari bahasa informal/curhatan mahasiswa sebelum diintegrasikan ke AI.",
        "Sukses mempresentasikan inovasi solusi kesehatan mental ini bersama tim hingga berhasil meraih penghargaan Juara 3."
      ]
    },
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
              href="/cv_Abid Mustaghfirin.pdf"
              download="CV_Abid_Mustaghfirin.pdf"
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
              href="/cv_Abid Mustaghfirin.pdf"
              download="CV_Abid_Mustaghfirin.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-md shadow-blue-500/10 cursor-pointer"
            >
              Unduh CV
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-slate-950">

        {/* Background decorative vector elements & glows (similar to the premium aesthetic in image 2) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 dark:opacity-40">
          {/* Top-right ambient blue light glow */}
          <div className="absolute right-[-10%] top-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/10 dark:bg-blue-600/10 blur-[120px]"></div>
          {/* Bottom-left ambient purple light glow */}
          <div className="absolute left-[-10%] bottom-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-500/10 dark:bg-indigo-600/10 blur-[120px]"></div>

          {/* Wavy curve paths in background */}
          <svg className="absolute left-0 bottom-0 w-full h-[60%] text-slate-200/40 dark:text-slate-900/40" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none">
            <path d="M0,400 C300,500 600,300 900,450 C1200,600 1350,550 1440,500 L1440,600 L0,600 Z" fill="currentColor" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
          {/* Left Column - Text Block */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">

            {/* Tagline Indicator */}
            <div className="flex items-center gap-2 mb-2 animate-fade-in">
              <span className="w-8 h-[2px] bg-blue-600 dark:bg-blue-400"></span>
              <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 font-outfit">
                Selamat Datang di Portofolio Saya
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-slate-50">
                Hai, saya <span className="text-blue-600 dark:text-blue-400">Abid Mustaghfirin</span>
              </h1>
              <h2 className="font-outfit text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-200 min-h-[40px] flex items-center gap-1" suppressHydrationWarning>
                <span>{currentRole}</span>
                <span className="w-[3px] h-[30px] bg-blue-600 dark:bg-blue-400 animate-pulse inline-block"></span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-lg font-medium leading-relaxed">
                Pengembang Full-Stack dan Machine Learning yang fokus menciptakan produk digital scalable, inovatif, dan berbasis data untuk kebutuhan pengguna serta bisnis.
              </p>
            </div>

            {/* Actions & Social Media circular badges */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-full font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/10 active:scale-[0.98] transition-all text-center cursor-pointer text-sm"
              >
                Lihat Projek Saya
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-full font-bold border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 bg-transparent hover:bg-blue-50 dark:hover:bg-blue-950/20 active:scale-[0.98] transition-all text-center cursor-pointer text-sm"
              >
                Hubungi Saya
              </a>

              <div className="flex items-center space-x-2.5 sm:ml-2">
                <a
                  href="https://github.com/abid-cyber"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white/80 dark:bg-slate-900/80 hover:bg-blue-600 dark:hover:bg-blue-500 text-slate-700 dark:text-slate-300 hover:text-white dark:hover:text-white border border-slate-200 dark:border-slate-800 hover:border-blue-600 dark:hover:border-blue-500 shadow-sm transition-all duration-300 active:scale-95"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.867 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/abid-mustaghfirin-793279278/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white/80 dark:bg-slate-900/80 hover:bg-blue-600 dark:hover:bg-blue-500 text-slate-700 dark:text-slate-300 hover:text-white dark:hover:text-white border border-slate-200 dark:border-slate-800 hover:border-blue-600 dark:hover:border-blue-500 shadow-sm transition-all duration-300 active:scale-95"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="mailto:abidmustaghfirin25@gmail.com"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white/80 dark:bg-slate-900/80 hover:bg-blue-600 dark:hover:bg-blue-500 text-slate-700 dark:text-slate-300 hover:text-white dark:hover:text-white border border-slate-200 dark:border-slate-800 hover:border-blue-600 dark:hover:border-blue-500 shadow-sm transition-all duration-300 active:scale-95"
                  aria-label="Email"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Image with premium frame setup */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
            <div className="relative flex items-center justify-center w-full max-w-sm sm:max-w-md lg:max-w-none mx-auto py-8">

              {/* Background decorative offset frame outline */}
              <div className="absolute w-[240px] h-[300px] sm:w-[280px] sm:h-[350px] border-2 border-blue-500/40 rounded-2xl translate-x-4 -translate-y-4 -z-10 hidden sm:block transition-all duration-500 hover:translate-x-3 hover:-translate-y-3"></div>

              {/* Main Image Container */}
              <div className="relative w-[240px] h-[300px] sm:w-[280px] sm:h-[350px] rounded-2xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-200/50 dark:border-slate-800 flex items-center justify-center group z-10">
                <Image
                  src="/abid4.jpeg"
                  alt="Abid Mustaghfirin"
                  fill
                  priority
                  sizes="(max-width: 640px) 240px, 280px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Subtle dark gradient overlay to anchor it */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60"></div>
              </div>

            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-blue-600 dark:text-blue-400 animate-bounce hover:scale-110 active:scale-95 transition-all cursor-pointer z-10"
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
              <div className="relative flex items-center justify-center w-full py-6 mb-4">

                {/* Background decorative offset frame outline (matching Hero section) */}
                <div className="absolute w-[180px] h-[225px] border-2 border-blue-500/40 rounded-2xl translate-x-3 -translate-y-3 -z-10 hidden sm:block transition-all duration-500 hover:translate-x-2 hover:-translate-y-2"></div>

                {/* Main Image Container */}
                <div className="relative w-[180px] h-[225px] rounded-2xl overflow-hidden shadow-xl bg-slate-900 border border-slate-200/50 dark:border-slate-800 flex items-center justify-center group z-10">
                  <Image
                    src="/abid1.jpeg"
                    alt="Abid Mustaghfirin"
                    fill
                    sizes="180px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60"></div>
                </div>
              </div>
            </div>

            {/* Right Story Text */}
            <div className="lg:col-span-7 flex flex-col space-y-6 text-slate-650 dark:text-slate-350 text-base sm:text-lg leading-relaxed">
              <p className="text-justify">
                Mahasiswa D4 Teknologi Rekayasa Perangkat Lunak yang memiliki minat
                dalam pengembang teknologi, khususnya dibidang Full Stack Development.
                Didukung latar belakang dan kemampuan teknis yang solid, saya siap
                berkontribusi dalam pengembangan solusi web yang inovatif, fungsional, dan
                berorientasi pada pengguna dan saya siap belajar hal yang baru.
                Selain fokus di bidang akademis, saya aktif dalam kegiatan organisasi kampus seperti UKM PNP Cybertech dan HMJ-TEKINFO. Pengalaman kepemimpinan ini membentuk soft-skills saya dalam komunikasi, pemecahan masalah (problem solving), kerja sama tim, kedisiplinan, serta manajemen waktu yang baik. Saya adalah pribadi yang adaptif, disiplin, dan selalu bersemangat untuk mempelajari teknologi baru demi memberikan kontribusi nyata dalam setiap proyek perangkat lunak.
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
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-50 mb-4">Pengalaman & Organisasi</h2>
            <div className="w-16 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full mb-4" />
            <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto text-sm sm:text-base">
              Riwayat pengalaman profesional, kontribusi organisasi, serta pencapaian prestasi akademik dan kompetisi saya.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-16 max-w-2xl mx-auto p-1.5 rounded-xl bg-slate-100/80 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800/50 backdrop-blur-md">
            <button
              onClick={() => setSelectedTab("all")}
              className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${selectedTab === "all"
                ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm"
                : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                }`}
            >
              Semua
            </button>
            <button
              onClick={() => setSelectedTab("work")}
              className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${selectedTab === "work"
                ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm"
                : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                }`}
            >
              Magang SMK
            </button>
            <button
              onClick={() => setSelectedTab("organization")}
              className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${selectedTab === "organization"
                ? "bg-white dark:bg-slate-800 text-purple-600 dark:text-purple-400 shadow-sm"
                : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                }`}
            >
              Organisasi Kuliah
            </button>
            <button
              onClick={() => setSelectedTab("award")}
              className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${selectedTab === "award"
                ? "bg-white dark:bg-slate-800 text-amber-600 dark:text-amber-400 shadow-sm"
                : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                }`}
            >
              Lomba & Prestasi
            </button>
          </div>

          {/* Timeline */}
          <div className="relative border-l border-slate-250 dark:border-slate-800 pl-6 sm:pl-8 ml-4 space-y-12 max-w-3xl mx-auto">
            {timeline
              .filter((item) => selectedTab === "all" || item.type === selectedTab)
              .map((item, index) => (
                <div key={index} className="relative group animate-in fade-in duration-500">
                  {/* Circle Node Icon based on Experience Type */}
                  <span className={`absolute -left-[40px] sm:-left-[48px] top-1 flex items-center justify-center w-8 h-8 rounded-full border-2 border-white dark:border-gray-950 shadow-sm text-white select-none ${item.type === "work"
                    ? "bg-blue-600"
                    : item.type === "organization"
                      ? "bg-purple-600"
                      : "bg-amber-500"
                    }`}>
                    {item.type === "work" ? (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ) : item.type === "organization" ? (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 9H4.5a2.5 2.5 0 010-5H6M18 9h1.5a2.5 2.5 0 000-5H18M4 22h16M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34M12 2a6 6 0 016 6c0 4.14-3.5 7.5-7.5 7.5H11.5c-4 0-7.5-3.36-7.5-7.5a6 6 0 016-6z" />
                      </svg>
                    )}
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
                    href="mailto:abidmustaghfirin25@gmail.com"
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
                        abidmustaghfirin25@gmail.com
                      </span>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/abid-mustaghfirin-793279278/"
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
                        linkedin.com/in/abid-mustaghfirin
                      </span>
                    </div>
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/abid-cyber"
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
                        github.com/abid-cyber
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
                    suppressHydrationWarning
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
                    suppressHydrationWarning
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
                    suppressHydrationWarning
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  suppressHydrationWarning
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
        <p>© {new Date().getFullYear()} Abid Mustaghfirin.</p>
      </footer>
    </div>
  );
}
