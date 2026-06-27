// Dr. Bianca Ionescu — SVG Logo Component
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: { icon: 28, text: 11, sub: 8 },
  md: { icon: 36, text: 13, sub: 9 },
  lg: { icon: 48, text: 16, sub: 10 },
};

export default function Logo({ className, variant = "dark", size = "md" }: LogoProps) {
  const s = sizeMap[size];
  const textColor = variant === "light" ? "#ffffff" : "#4d0025";
  const subColor = variant === "light" ? "rgba(255,255,255,0.7)" : "#be0c5e";
  const iconPink = variant === "light" ? "#fdb8d3" : "#f43f8e";
  const iconDeep = variant === "light" ? "#ffffff" : "#4d0025";

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      {/* Icon: Moon + Tooth + Sparkle */}
      <svg
        width={s.icon}
        height={s.icon}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Crescent moon silhouette */}
        <path
          d="M30 8C22.268 8 16 14.268 16 22C16 29.732 22.268 36 30 36C31.5 36 32.95 35.77 34.3 35.35C30.1 33.55 27 29.42 27 24.5C27 17.596 32.596 12 39.5 12C40.2 12 40.88 12.06 41.55 12.18C39.1 9.63 35.23 8 30 8Z"
          fill={iconPink}
          opacity="0.9"
        />
        {/* Tooth shape inside moon */}
        <path
          d="M26 19C26 19 24.5 17 22 17C19.5 17 18 18.5 18 20.5C18 22 18.5 23.5 19 25L20.5 30C20.8 31.1 21.5 32 22.5 32C23.5 32 24 31.3 24 30.5C24 30 24 28.5 24 27.5C24 26.5 24.5 26 25.5 26C26.5 26 27 26.5 27 27.5C27 28.5 27 30 27 30.5C27 31.3 27.5 32 28.5 32C29.5 32 30.2 31.1 30.5 30L32 25C32.5 23.5 33 22 33 20.5C33 18.5 31.5 17 29 17C26.5 17 26 19 26 19Z"
          fill={iconDeep}
          opacity="0.85"
        />
        {/* Sparkle top-right */}
        <path
          d="M39 10L39.7 12.3L42 13L39.7 13.7L39 16L38.3 13.7L36 13L38.3 12.3L39 10Z"
          fill={iconPink}
        />
        {/* Sparkle small */}
        <path
          d="M13 8L13.4 9.6L15 10L13.4 10.4L13 12L12.6 10.4L11 10L12.6 9.6L13 8Z"
          fill={iconPink}
          opacity="0.7"
        />
      </svg>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span
          style={{
            fontSize: s.text,
            color: textColor,
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Dr. Bianca Ionescu
        </span>
        <span
          style={{
            fontSize: s.sub,
            color: subColor,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 400,
            letterSpacing: "0.12em",
            marginTop: 1,
          }}
        >
          Where Beauty Meets Dentistry
        </span>
      </div>
    </div>
  );
}
