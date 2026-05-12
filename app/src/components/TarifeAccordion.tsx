"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CategorieTarife } from "@/data/tarife";

export default function TarifeAccordion({ categories }: { categories: CategorieTarife[] }) {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleCategory = (id: string) => {
    setOpenCategory(openCategory === id ? null : id);
  };

  return (
    <div className="space-y-4">
      {categories.map((category) => (
        <div key={category.id} className="border border-neutral-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
          <button
            onClick={() => toggleCategory(category.id)}
            className="w-full text-left px-6 py-5 flex items-center justify-between bg-white hover:bg-neutral-50 transition-colors focus:outline-none"
          >
            <h3 className="text-xl font-bold text-neutral-900">{category.nume}</h3>
            <div className={`p-2 rounded-full bg-primary-50 text-primary-600 transition-transform duration-300 ${openCategory === category.id ? "rotate-180" : ""}`}>
              <ChevronDown className="w-5 h-5" />
            </div>
          </button>
          
          <AnimatePresence>
            {openCategory === category.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 pt-2">
                  <div className="border border-neutral-100 rounded-xl overflow-hidden">
                    <ul className="divide-y divide-neutral-100">
                      {category.servicii.map((serviciu) => (
                        <li key={serviciu.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 hover:bg-neutral-50 transition-colors gap-4">
                          <span className="text-neutral-700 font-medium">{serviciu.nume}</span>
                          <span className="text-primary-700 font-bold whitespace-nowrap bg-primary-50 px-3 py-1 rounded-lg shrink-0">
                            {serviciu.pret}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
