import type { Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate"


const config: Config = {
  darkMode: ["class", "dark"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Classic Scholar Theme
        primary: {
          50: "#f0f4f8",
          100: "#d9e2ec",
          200: "#bcccdc",
          300: "#9fb3c8",
          400: "#829ab1",
          500: "#1e3a5f", // Deep Navy - Main
          600: "#1a3254",
          700: "#162a49",
          800: "#12223e",
          900: "#0e1a33",
          DEFAULT: "#1e3a5f",
          foreground: "#ffffff",
        },
        secondary: {
          50: "#fdf2f4",
          100: "#fce7eb",
          200: "#f9d0d9",
          300: "#f4a9b8",
          400: "#ed7991",
          500: "#8b2e3f", // Warm Burgundy
          600: "#7d2938",
          700: "#6f2431",
          800: "#611f2a",
          900: "#531a23",
          DEFAULT: "#8b2e3f",
          foreground: "#ffffff",
        },
        accent: {
          50: "#faf7f2",
          100: "#f5efe5",
          200: "#eadfc7",
          300: "#dfcfa9",
          400: "#d4bf8b",
          500: "#d4a574", // Warm Gold
          600: "#c89558",
          700: "#bc853c",
          800: "#9a6d32",
          900: "#785427",
          DEFAULT: "#d4a574",
          foreground: "#1e3a5f",
        },
        background: {
          DEFAULT: "#f5f1e8", // Warm Cream
          paper: "#ffffff",
        },
        foreground: {
          DEFAULT: "#2d3436", // Charcoal
          muted: "#636e72",
        },
        success: {
          DEFAULT: "#7a9b76", // Sage Green
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#b2bec3",
          foreground: "#636e72",
        },
        border: "#e1d9cc",
        input: "#e1d9cc",
        ring: "#1e3a5f",
        
        // shadcn/ui required colors
        card: {
          DEFAULT: "#ffffff",
          foreground: "#2d3436",
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#2d3436",
        },
        destructive: {
          DEFAULT: "#dc2626",
          foreground: "#ffffff",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(30, 58, 95, 0.08)',
        'card': '0 4px 12px rgba(30, 58, 95, 0.12)',
        'elevated': '0 8px 24px rgba(30, 58, 95, 0.16)',
      },
    },
  },
  plugins: [
       tailwindAnimate,
],
};

export default config;