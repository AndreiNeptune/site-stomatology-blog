"use client";

import { Link2, Check, Share2, MessageCircle } from "lucide-react";
import { useState } from "react";

interface SocialShareProps {
  url: string;
  title: string;
  description?: string;
}

export default function SocialShare({ url, title, description }: SocialShareProps) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDesc = encodeURIComponent(description || "");

  const shareLinks = [
    {
      name: "Facebook",
      icon: MessageCircle,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: "hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200",
    },
    {
      name: "Twitter",
      icon: Share2,
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: "hover:bg-sky-50 hover:text-sky-500 hover:border-sky-200",
    },
    {
      name: "LinkedIn",
      icon: Share2,
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDesc}`,
      color: "hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200",
    },
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const input = document.createElement("input");
      input.value = url;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex items-center gap-2">
      {shareLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-2.5 rounded-xl border border-primary-100/50 text-neutral-400 transition-all duration-300 ${link.color}`}
          aria-label={`Share on ${link.name}`}
          id={`share-${link.name.toLowerCase()}`}
        >
          <link.icon className="w-4 h-4" />
        </a>
      ))}
      <button
        onClick={copyToClipboard}
        className={`p-2.5 rounded-xl border transition-all duration-300 ${
          copied
            ? "border-green-300 bg-green-50 text-green-600"
            : "border-primary-100/50 text-neutral-400 hover:bg-primary-50 hover:text-primary-600 hover:border-primary-200"
        }`}
        aria-label="Copy link"
        id="share-copy-link"
      >
        {copied ? <Check className="w-4 h-4" /> : <Link2 className="w-4 h-4" />}
      </button>
    </div>
  );
}
