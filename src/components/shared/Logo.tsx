// import { Link } from 'react-router-dom';
import { BookOpen } from "lucide-react";
import Link from "next/link";

interface LogoProps {
  variant?: "default" | "light";
  showText?: boolean;
}

export function Logo({ variant = "default", showText = true }: LogoProps) {
  const textColor =
    variant === "light" ? "text-primary-foreground" : "text-foreground";
  const iconColor =
    variant === "light" ? "text-primary-foreground" : "text-accent";

  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div
        className={`${iconColor} transition-transform group-hover:scale-110`}
      >
        <BookOpen className="h-8 w-8" />
      </div>
      {showText && (
        <span className={`font-display text-2xl font-bold ${textColor}`}>
          Library
        </span>
      )}
    </Link>
  );
}
