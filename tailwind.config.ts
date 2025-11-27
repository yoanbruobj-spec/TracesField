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
          crimson: "#FF1744",
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
          950: "#0D0D0D",
        },
        accent: {
          purple: "#8B5CF6",
          violet: "#7C3AED",
          blue: "#3B82F6",
          cyan: "#06B6D4",
          emerald: "#10B981",
          amber: "#F59E0B",
          rose: "#F43F5E",
          fuchsia: "#D946EF",
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
        display: [
          "Space Grotesk",
          "Inter",
          "-apple-system",
          "sans-serif",
        ],
      },
      fontSize: {
        "display-2xl": ["6rem", { lineHeight: "1", letterSpacing: "-0.05em" }],
        "display-xl": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.04em" }],
        "display-lg": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
        "display-md": ["3rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-sm": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
      },
      animation: {
        "gradient-shift": "gradientShift 15s ease infinite",
        "aurora-shift": "auroraShift 10s ease infinite",
        "text-shine": "textShine 4s linear infinite",
        "grid-move": "gridMove 30s linear infinite",
        shimmer: "shimmer 2.5s infinite",
        float: "float 4s ease-in-out infinite",
        "float-delayed": "float 4s ease-in-out 1s infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "pulse-scale": "pulseScale 2s ease-in-out infinite",
        morph: "morph 8s ease-in-out infinite",
        "rotate-border": "rotateBorder 4s linear infinite",
        "fade-in-up": "fadeInUp 0.6s ease forwards",
        "spin-slow": "spin 8s linear infinite",
        "ping-slow": "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite",
        marquee: "marquee 30s linear infinite",
        "bounce-gentle": "bounceGentle 2s ease-in-out infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        "scale-in": "scaleIn 0.3s ease-out",
        "slide-in-right": "slideInRight 0.5s ease-out",
        "slide-in-left": "slideInLeft 0.5s ease-out",
        "slide-in-up": "slideInUp 0.5s ease-out",
        "slide-in-down": "slideInDown 0.5s ease-out",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        auroraShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "25%": { backgroundPosition: "50% 100%" },
          "50%": { backgroundPosition: "100% 50%" },
          "75%": { backgroundPosition: "50% 0%" },
        },
        textShine: {
          to: { backgroundPosition: "300% center" },
        },
        gridMove: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "60px 60px" },
        },
        shimmer: {
          "100%": { left: "100%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(220, 38, 38, 0.3)" },
          "50%": { boxShadow: "0 0 50px rgba(220, 38, 38, 0.6), 0 0 80px rgba(139, 92, 246, 0.3)" },
        },
        pulseScale: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        morph: {
          "0%, 100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
          "25%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" },
          "50%": { borderRadius: "50% 60% 30% 60% / 30% 70% 40% 60%" },
          "75%": { borderRadius: "40% 30% 60% 50% / 70% 40% 60% 30%" },
        },
        rotateBorder: {
          "100%": { transform: "rotate(360deg)" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        bounceGentle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInUp: {
          "0%": { transform: "translateY(50px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInDown: {
          "0%": { transform: "translateY(-50px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(220, 38, 38, 0.4)" },
          "100%": { boxShadow: "0 0 40px rgba(220, 38, 38, 0.8), 0 0 60px rgba(139, 92, 246, 0.4)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-primary": "linear-gradient(135deg, #DC2626 0%, #FF1744 50%, #EF4444 100%)",
        "gradient-premium": "linear-gradient(135deg, #DC2626 0%, #8B5CF6 50%, #3B82F6 100%)",
        "gradient-aurora": "linear-gradient(135deg, #FF1744 0%, #D946EF 25%, #8B5CF6 50%, #3B82F6 75%, #06B6D4 100%)",
        "gradient-dark": "linear-gradient(135deg, #0D0D0D 0%, #171717 50%, #262626 100%)",
        "gradient-mesh": "radial-gradient(at 40% 20%, rgba(220, 38, 38, 0.4) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(139, 92, 246, 0.3) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(59, 130, 246, 0.3) 0px, transparent 50%)",
      },
      boxShadow: {
        "glow-red": "0 0 40px rgba(220, 38, 38, 0.4), 0 0 80px rgba(220, 38, 38, 0.2)",
        "glow-purple": "0 0 40px rgba(139, 92, 246, 0.4), 0 0 80px rgba(139, 92, 246, 0.2)",
        "glow-blue": "0 0 40px rgba(59, 130, 246, 0.4), 0 0 80px rgba(59, 130, 246, 0.2)",
        "glow-multi": "0 0 30px rgba(220, 38, 38, 0.3), 0 0 60px rgba(139, 92, 246, 0.2), 0 0 90px rgba(59, 130, 246, 0.1)",
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        "inner-glow": "inset 0 0 20px rgba(220, 38, 38, 0.1)",
      },
      backdropBlur: {
        xs: "2px",
        "3xl": "64px",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
      scale: {
        "102": "1.02",
        "103": "1.03",
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      zIndex: {
        "60": "60",
        "70": "70",
        "80": "80",
        "90": "90",
        "100": "100",
      },
    },
  },
  plugins: [],
};
export default config;
