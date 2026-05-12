"use client";

import { useState } from "react";
import { Search, Filter, X } from "lucide-react";
import { cn } from "@/lib/utils";

const TREATMENT_TYPES = [
  { value: "all", label: "Toate", labelEn: "All", icon: "🦷" },
  { value: "preventive", label: "Preventive", labelEn: "Preventive", icon: "🛡️" },
  { value: "restorative", label: "Restaurative", labelEn: "Restorative", icon: "🔧" },
  { value: "cosmetic", label: "Cosmetice", labelEn: "Cosmetic", icon: "✨" },
  { value: "orthodontic", label: "Ortodontice", labelEn: "Orthodontic", icon: "😁" },
  { value: "surgical", label: "Chirurgicale", labelEn: "Surgical", icon: "💉" },
  { value: "pediatric", label: "Pediatrice", labelEn: "Pediatric", icon: "👶" },
  { value: "emergency", label: "Urgențe", labelEn: "Emergency", icon: "🚨" },
];

interface BlogSearchBarProps {
  onSearch: (term: string) => void;
  onFilterTreatment: (type: string) => void;
  activeTreatment: string;
  locale?: "ro" | "en";
}

export default function BlogSearchBar({
  onSearch,
  onFilterTreatment,
  activeTreatment,
  locale = "ro",
}: BlogSearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    onSearch(value);
  };

  const clearSearch = () => {
    setSearchTerm("");
    onSearch("");
  };

  return (
    <div className="w-full space-y-4">
      {/* Search Input */}
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-accent-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative flex items-center bg-white rounded-2xl shadow-soft border border-primary-100/50 overflow-hidden transition-all duration-300 group-hover:shadow-card group-hover:border-primary-200">
          <Search className="w-5 h-5 text-primary-400 ml-5 flex-shrink-0" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder={
              locale === "ro"
                ? "Caută articole despre tratamente..."
                : "Search articles about treatments..."
            }
            className="w-full px-4 py-4 bg-transparent text-neutral-800 placeholder:text-neutral-400 focus:outline-none text-sm"
            id="blog-search-input"
          />
          {searchTerm && (
            <button
              onClick={clearSearch}
              className="mr-3 p-1.5 rounded-full hover:bg-primary-50 text-neutral-400 hover:text-primary-500 transition-colors"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className={cn(
              "flex items-center gap-2 px-5 py-4 border-l border-primary-100/50 text-sm font-medium transition-colors",
              isFilterOpen
                ? "bg-primary-50 text-primary-600"
                : "text-neutral-500 hover:text-primary-500 hover:bg-primary-50/50"
            )}
            id="blog-filter-toggle"
          >
            <Filter className="w-4 h-4" />
            <span className="hidden sm:inline">
              {locale === "ro" ? "Filtrează" : "Filter"}
            </span>
          </button>
        </div>
      </div>

      {/* Treatment Type Filter Pills */}
      {isFilterOpen && (
        <div className="flex flex-wrap gap-2 animate-in slide-in-from-top-2 duration-300">
          {TREATMENT_TYPES.map((type) => (
            <button
              key={type.value}
              onClick={() => onFilterTreatment(type.value)}
              className={cn(
                "inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeTreatment === type.value
                  ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-400/25 scale-105"
                  : "bg-white text-neutral-600 border border-primary-100 hover:border-primary-300 hover:text-primary-600 hover:shadow-soft"
              )}
              id={`filter-${type.value}`}
            >
              <span>{type.icon}</span>
              <span>{locale === "ro" ? type.label : type.labelEn}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
