"use client";

import { useState, useEffect } from "react";
import { Phone, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero (100vh)
      setIsVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-40 lg:hidden"
        >
          <div className="bg-white/90 backdrop-blur-xl border-t border-neutral-200 px-5 py-3 shadow-elevated">
            <div className="flex items-center justify-between gap-3 max-w-7xl mx-auto">
              <a
                href="tel:0724542600"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-neutral-100 text-neutral-700 font-medium text-sm hover:bg-neutral-200 transition-colors flex-1"
              >
                <Phone className="w-4 h-4 text-primary-600" />
                Sună Acum
              </a>
              <a
                href="/programare"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold text-sm hover:shadow-lg transition-all flex-1"
              >
                <Calendar className="w-4 h-4" />
                Programare
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
