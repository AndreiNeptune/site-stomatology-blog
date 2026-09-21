"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { m, AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import { Menu, X, Phone, Calendar, ChevronDown } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";
import { cn } from "@/lib/utils";

// ─── UPDATE THESE ─────────────────────────────────────────────────────────────
const PHONE_1 = "0726 206 012";
const PHONE_2 = "0799 999 200";
const PHONE_LINK_1 = "tel:0726206012";
const PHONE_LINK_2 = "tel:0799999200";
// ──────────────────────────────────────────────────────────────────────────────

const navLinks = [
  { label: "Acasă", href: "/" },
  { label: "Despre Noi", href: "/despre-noi" },
  { label: "Servicii", href: "/servicii" },
  { label: "Tarife", href: "/tarife" },
  { label: "Portofoliu", href: "/portofoliu" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/programare" },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPhoneOpen, setIsPhoneOpen] = useState(false);
  const phoneDropdownRef = useRef<HTMLDivElement>(null);

  // Close phone dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (phoneDropdownRef.current && !phoneDropdownRef.current.contains(event.target as Node)) {
        setIsPhoneOpen(false);
      }
    };
    if (isPhoneOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isPhoneOpen]);

  const isHomePage = pathname === "/";
  const isSolid = isScrolled || !isHomePage;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <LazyMotion features={domAnimation} strict>
      <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isSolid
          ? "glass shadow-glass py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="relative z-10">
            <Logo
              variant={isSolid ? "dark" : "light"}
              size="md"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  isSolid
                    ? "text-neutral-600 hover:text-primary-600 hover:bg-primary-50"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <div 
              className="relative"
              ref={phoneDropdownRef}
            >
              <button
                onClick={() => setIsPhoneOpen(!isPhoneOpen)}
                className={cn(
                  "flex items-center gap-1.5 text-sm font-semibold transition-colors duration-300",
                  isSolid ? "text-primary-600 hover:text-primary-800" : "text-white/90 hover:text-white"
                )}
              >
                <Phone className="w-4 h-4" />
                <span>{PHONE_1}</span>
                <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", isPhoneOpen ? "rotate-180" : "rotate-0")} />
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isPhoneOpen && (
                  <m.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 min-w-[200px] z-50 origin-top"
                  >
                    {/* Caret pointing up */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-neutral-100 shadow-[-2px_-2px_4px_rgba(0,0,0,0.02)] transform rotate-45" />
                    
                    <div className="relative z-10 bg-white rounded-2xl shadow-xl shadow-black/5 border border-neutral-100 flex flex-col">
                      <a href={PHONE_LINK_1} className="flex items-center gap-3 px-5 py-3.5 text-sm font-semibold text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors rounded-t-2xl">
                        <Phone className="w-4 h-4 text-primary-400" />
                        {PHONE_1}
                      </a>
                      <div className="mx-4 h-px bg-neutral-100" />
                      <a href={PHONE_LINK_2} className="flex items-center gap-3 px-5 py-3.5 text-sm font-semibold text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors rounded-b-2xl">
                        <Phone className="w-4 h-4 text-primary-400" />
                        {PHONE_2}
                      </a>
                    </div>
                  </m.div>
                )}
              </AnimatePresence>
            </div>
            <div className="relative group">
              {!isSolid && (
                <div className="absolute -inset-1 bg-white/40 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              )}
              <Link
                href="/programare"
                className={cn(
                  "relative inline-flex items-center justify-center gap-2 px-7 py-2.5 rounded-full text-sm font-bold transition-all duration-300 active:scale-95 hover:-translate-y-0.5",
                  isSolid
                    ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-md hover:shadow-lg hover:shadow-primary-400/30"
                    : "bg-white text-primary-600 shadow-md hover:shadow-xl"
                )}
              >
                <Calendar className="w-4 h-4" />
                <span>Programare</span>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "lg:hidden relative z-10 p-2 rounded-full transition-colors",
              isSolid || isMobileMenuOpen
                ? "text-neutral-700 hover:bg-neutral-100"
                : "text-white hover:bg-white/10"
            )}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <m.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-white/97 backdrop-blur-xl border-t border-primary-100"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-1">
              {navLinks.map((link, i) => (
                <m.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 rounded-2xl text-neutral-700 font-medium hover:bg-primary-50 hover:text-primary-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </m.div>
              ))}
              <div className="pt-4 border-t border-primary-100">
                <Link
                  href="/programare"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center px-6 py-3 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold"
                >
                  Programare Online
                </Link>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>

      </header>
    </LazyMotion>
  );
}
