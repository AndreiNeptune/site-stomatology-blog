"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";

type Category = "Toate" | "Implantologie" | "Estetică Dentară" | "Ortodonție";

interface PortfolioItem {
  id: string;
  src: string;
  type: "image" | "video";
  category: Category;
  alt: string;
}

// Generăm lista de itemi bazat pe fișierele din folder
const allItems: PortfolioItem[] = [
  { id: "IMG_5894", src: "/images/portofoliu/IMG_5894.webp", type: "image", category: "Implantologie", alt: "Rezultat implant dentar - Caz clinic 1" },
  { id: "IMG_5895", src: "/images/portofoliu/IMG_5895.webp", type: "image", category: "Implantologie", alt: "Rezultat implant dentar - Caz clinic 2" },
  { id: "IMG_5900", src: "/images/portofoliu/IMG_5900.webp", type: "image", category: "Implantologie", alt: "Rezultat implant dentar - Caz clinic 3" },
  { id: "IMG_5906", src: "/images/portofoliu/IMG_5906.webp", type: "image", category: "Implantologie", alt: "Rezultat implant dentar - Caz clinic 4" },
  { id: "IMG_5908", src: "/images/portofoliu/IMG_5908.mp4", type: "video", category: "Implantologie", alt: "Prezentare video implant dentar 1" },
  { id: "IMG_5910", src: "/images/portofoliu/IMG_5910.webp", type: "image", category: "Implantologie", alt: "Rezultat implant dentar - Caz clinic 5" },
  { id: "IMG_5911", src: "/images/portofoliu/IMG_5911.webp", type: "image", category: "Implantologie", alt: "Rezultat implant dentar - Caz clinic 6" },
  { id: "IMG_5912", src: "/images/portofoliu/IMG_5912.mp4", type: "video", category: "Implantologie", alt: "Prezentare video implant dentar 2" },
  { id: "IMG_5931", src: "/images/portofoliu/IMG_5931.webp", type: "image", category: "Implantologie", alt: "Rezultat implant dentar - Caz clinic 7" },
  { id: "IMG_6024", src: "/images/portofoliu/IMG_6024.webp", type: "image", category: "Implantologie", alt: "Rezultat implant dentar - Caz clinic 8" },
  { id: "IMG_6084", src: "/images/portofoliu/IMG_6084.webp", type: "image", category: "Implantologie", alt: "Rezultat implant dentar - Caz clinic 9" },
  { id: "IMG_6086", src: "/images/portofoliu/IMG_6086.webp", type: "image", category: "Implantologie", alt: "Rezultat implant dentar - Caz clinic 10" },
  { id: "IMG_6087", src: "/images/portofoliu/IMG_6087.webp", type: "image", category: "Implantologie", alt: "Rezultat implant dentar - Caz clinic 11" },
  { id: "IMG_6088", src: "/images/portofoliu/IMG_6088.webp", type: "image", category: "Implantologie", alt: "Rezultat implant dentar - Caz clinic 12" },
  { id: "IMG_6097", src: "/images/portofoliu/IMG_6097.webp", type: "image", category: "Implantologie", alt: "Rezultat implant dentar - Caz clinic 13" },
  { id: "IMG_6098", src: "/images/portofoliu/IMG_6098.webp", type: "image", category: "Implantologie", alt: "Rezultat implant dentar - Caz clinic 14" },
  { id: "IMG_6099", src: "/images/portofoliu/IMG_6099.mp4", type: "video", category: "Implantologie", alt: "Prezentare video implant dentar 3" },
  { id: "IMG_6100", src: "/images/portofoliu/IMG_6100.webp", type: "image", category: "Implantologie", alt: "Rezultat implant dentar - Caz clinic 15" },
  { id: "IMG_6101", src: "/images/portofoliu/IMG_6101.webp", type: "image", category: "Implantologie", alt: "Rezultat implant dentar - Caz clinic 16" },
  { id: "IMG_6102", src: "/images/portofoliu/IMG_6102.webp", type: "image", category: "Implantologie", alt: "Rezultat implant dentar - Caz clinic 17" },
  { id: "IMG_6103", src: "/images/portofoliu/IMG_6103.webp", type: "image", category: "Implantologie", alt: "Rezultat implant dentar - Caz clinic 18" },
  { id: "IMG_6105", src: "/images/portofoliu/IMG_6105.mp4", type: "video", category: "Implantologie", alt: "Prezentare video implant dentar 4" },
  { id: "IMG_6215", src: "/images/portofoliu/IMG_6215.webp", type: "image", category: "Implantologie", alt: "Rezultat implant dentar - Caz clinic 19" },
  { id: "IMG_6223", src: "/images/portofoliu/IMG_6223.mp4", type: "video", category: "Implantologie", alt: "Prezentare video implant dentar 5" },
  { id: "IMG_6227", src: "/images/portofoliu/IMG_6227.webp", type: "image", category: "Implantologie", alt: "Rezultat implant dentar - Caz clinic 20" },
  { id: "IMG_6455", src: "/images/portofoliu/IMG_6455.webp", type: "image", category: "Implantologie", alt: "Rezultat implant dentar - Caz clinic 21" },
  { id: "IMG_6456", src: "/images/portofoliu/IMG_6456.webp", type: "image", category: "Implantologie", alt: "Înainte - Caz clinic 22" },
  { id: "IMG_6457", src: "/images/portofoliu/IMG_6457.webp", type: "image", category: "Implantologie", alt: "După - Caz clinic 22" },
  { id: "IMG_6458", src: "/images/portofoliu/IMG_6458.mp4", type: "video", category: "Implantologie", alt: "Prezentare video implant dentar 6" },
  { id: "IMG_6492", src: "/images/portofoliu/IMG_6492.webp", type: "image", category: "Implantologie", alt: "Rezultat implant dentar - Caz clinic 23" },
  { id: "IMG_6494", src: "/images/portofoliu/IMG_6494.mp4", type: "video", category: "Implantologie", alt: "Prezentare video implant dentar 7" },
  { id: "IMG_6495", src: "/images/portofoliu/IMG_6495.webp", type: "image", category: "Implantologie", alt: "Rezultat implant dentar - Caz clinic 24" },
  { id: "IMG_6532", src: "/images/portofoliu/IMG_6532.webp", type: "image", category: "Implantologie", alt: "Rezultat implant dentar - Caz clinic 25" },
  { id: "IMG_6533", src: "/images/portofoliu/IMG_6533.webp", type: "image", category: "Implantologie", alt: "Înainte - Caz clinic 26" },
  { id: "IMG_6535", src: "/images/portofoliu/IMG_6535.webp", type: "image", category: "Implantologie", alt: "După - Caz clinic 26" },
  { id: "IMG_6536", src: "/images/portofoliu/IMG_6536.webp", type: "image", category: "Implantologie", alt: "Rezultat implant dentar - Caz clinic 27" },
  { id: "IMG_6545", src: "/images/portofoliu/IMG_6545.webp", type: "image", category: "Implantologie", alt: "Rezultat implant dentar - Caz clinic 28" },
  { id: "IMG_6546", src: "/images/portofoliu/IMG_6546.webp", type: "image", category: "Implantologie", alt: "Rezultat implant dentar - Caz clinic 29" },
  { id: "IMG_6555", src: "/images/portofoliu/IMG_6555.webp", type: "image", category: "Implantologie", alt: "Rezultat implant dentar - Caz clinic 30" },
  { id: "IMG_6557", src: "/images/portofoliu/IMG_6557.webp", type: "image", category: "Implantologie", alt: "Înainte - Caz clinic 31" },
  { id: "IMG_6559", src: "/images/portofoliu/IMG_6559.webp", type: "image", category: "Implantologie", alt: "După - Caz clinic 31" },
  { id: "IMG_6645", src: "/images/portofoliu/IMG_6645.webp", type: "image", category: "Implantologie", alt: "Rezultat implant dentar - Caz clinic 32" },
  { id: "IMG_6650", src: "/images/portofoliu/IMG_6650.mp4", type: "video", category: "Implantologie", alt: "Prezentare video implant dentar 8" },
  { id: "IMG_6860", src: "/images/portofoliu/IMG_6860.mp4", type: "video", category: "Implantologie", alt: "Prezentare video implant dentar 9" },
  { id: "IMG_6861", src: "/images/portofoliu/IMG_6861.webp", type: "image", category: "Implantologie", alt: "Rezultat implant dentar - Caz clinic 33" },
  { id: "IMG_6862", src: "/images/portofoliu/IMG_6862.webp", type: "image", category: "Implantologie", alt: "Rezultat implant dentar - Caz clinic 34" },
  { id: "IMG_6954", src: "/images/portofoliu/IMG_6954.mp4", type: "video", category: "Implantologie", alt: "Prezentare video implant dentar 10" },
  { id: "IMG_6955", src: "/images/portofoliu/IMG_6955.webp", type: "image", category: "Implantologie", alt: "Rezultat implant dentar - Caz clinic 35" }
];

const categories: Category[] = ["Toate", "Implantologie", "Estetică Dentară", "Ortodonție"];

function VideoItem({ item, isPlaying, onPlay }: { item: PortfolioItem, isPlaying: boolean, onPlay: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current?.play().catch(e => console.log(e));
    } else {
      videoRef.current?.pause();
    }
  }, [isPlaying]);

  return (
    <div className="relative w-full h-full">
      <video
        ref={videoRef}
        src={item.src}
        className="w-full h-full object-cover"
        controls={isPlaying}
        loop
        playsInline
        preload="metadata"
      />
      {!isPlaying && (
        <div 
          className="absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity hover:bg-black/30 cursor-pointer"
          onClick={onPlay}
        >
          <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg pointer-events-none">
            <Play className="w-5 h-5 text-primary-600 ml-1" />
          </div>
        </div>
      )}
    </div>
  );
}

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("Toate");
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const filteredItems = allItems.filter(
    (item) => activeCategory === "Toate" || item.category === activeCategory
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12">
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeCategory === category
                ? "bg-primary-600 text-white shadow-md shadow-primary-500/20"
                : "bg-white text-neutral-600 hover:bg-primary-50 hover:text-primary-600 border border-neutral-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div 
        layout
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
      >
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-100 shadow-sm hover:shadow-md transition-shadow group"
            >
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
              ) : (
                <VideoItem 
                  item={item} 
                  isPlaying={playingVideo === item.id} 
                  onPlay={() => setPlayingVideo(item.id)} 
                />
              )}
              
              {/* Overlay label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <p className="text-white text-xs font-medium tracking-wide">
                  {item.category}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredItems.length === 0 && (
        <div className="text-center py-20 text-neutral-500">
          Nu există încă elemente în această categorie.
        </div>
      )}
    </div>
  );
}
