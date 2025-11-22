import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          red: "#DC2626",
          "red-light": "#EF4444",
          "red-dark": "#B91C1C",
          black: "#0A0A0A",
          white: "#FFFFFF",
        },
        gray: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
        accent: {
          purple: "#8B5CF6",
          blue: "#3B82F6",
          cyan: "#06B6D4",
          emerald: "#10B981",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      fontSize: {
        "display-xl": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["3rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
      },
      animation: {
        "gradient-shift": "gradientShift 15s ease infinite",
        "text-shine": "textShine 3s linear infinite",
        "grid-move": "gridMove 20s linear infinite",
        shimmer: "shimmer 2s infinite",
        float: "float 3s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
      },
      keyframes: {
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        textShine: {
          to: { backgroundPosition: "200% center" },
        },
        gridMove: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "40px 40px" },
        },
        shimmer: {
          "100%": { left: "100%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(220, 38, 38, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(220, 38, 38, 0.6)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "glow-red": "0 0 30px rgba(220, 38, 38, 0.3)",
        "glow-purple": "0 0 30px rgba(139, 92, 246, 0.3)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
export default config;
