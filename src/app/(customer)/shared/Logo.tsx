import { BookOpen } from "lucide-react";
import Link from "next/link";

interface LogoProps {
  variant?: "default" | "light" | "white";
  showText?: boolean;
  className?: string;
}

export function Logo({ variant = "default", showText = true, className = "" }: LogoProps) {
  const getColors = () => {
    switch (variant) {
      case "light":
        return {
          text: "text-primary-foreground",
          icon: "text-primary-foreground"
        };
      case "white":
        return {
          text: "text-white",
          icon: "text-white"
        };
      default:
        return {
          text: "text-foreground",
          icon: "text-[#32674D]"
        };
    }
  };

  const colors = getColors();

  return (
    <Link href="/" className={`flex items-center gap-2 group ${className}`}>
      <div className={`${colors.icon} transition-transform group-hover:scale-110`}>
        <BookOpen className="h-8 w-8" />
      </div>
      {showText && (
        <span className={`font-display text-2xl font-bold ${colors.text}`}>
          Library
        </span>
      )}
    </Link>
  );
}