"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";
import { cn } from "@/lib/utils";

// ─── UPDATE THESE ─────────────────────────────────────────────────────────────
const PHONE_DISPLAY = "0726 206 012 / 0799 999 200";
const PHONE_LINK    = "tel:0726206012";
// ──────────────────────────────────────────────────────────────────────────────

const navLinks = [
  { label: "Acasă", href: "/#acasa" },
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
          <Link href="/#acasa" className="relative z-10">
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
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={PHONE_LINK}
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors duration-300",
                isSolid ? "text-primary-500" : "text-white/90"
              )}
            >
              <Phone className="w-4 h-4" />
              {PHONE_DISPLAY}
            </a>
            <Link
              href="/programare"
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 active:scale-95",
                isSolid
                  ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-400 hover:to-primary-500 hover:shadow-lg hover:shadow-primary-400/30"
                  : "bg-white text-primary-600 hover:bg-primary-50 hover:shadow-lg"
              )}
            >
              Programare
            </Link>
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
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-white/97 backdrop-blur-xl border-t border-primary-100"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
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
                </motion.div>
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
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}
