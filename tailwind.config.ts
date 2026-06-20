import type { Config } from "tailwindcss";

/* ============================================================
   WORKERS COMPENSATION EXEMPTIONS — "Forest Green & Warm Gray" palette
   Token NAMES are inherited from the shared component architecture;
   VALUES are remapped to forest green (primary) / warm blue-gray
   (secondary) / medium green accent.
   clay = forest green · sage = warm blue-gray · gold = medium green accent
   cream = soft green-white · sand = pale green-gray
   ============================================================ */

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5F8F5",
        sand: "#EBF0EC",
        white: "#FFFFFF",
        clay: {
          DEFAULT: "#2F6B3E",
          dark: "#1F4E2C",
          light: "#408A52",
          50: "#EEF5EF",
          100: "#D4E8D7",
          200: "#A8D0B0",
          300: "#78B589",
          400: "#5A9E6A",
          500: "#408A52",
          600: "#2F6B3E",
          700: "#1F4E2C",
          800: "#163620",
          900: "#0E2415",
        },
        sage: {
          DEFAULT: "#556070",
          dark: "#404C58",
          light: "#6A7888",
          50: "#F0F2F4",
          100: "#D8DCE1",
          200: "#B0BAC3",
          300: "#8898A5",
          400: "#6A7888",
          500: "#556070",
          600: "#404C58",
          700: "#2D3740",
        },
        gold: {
          DEFAULT: "#5A9E6A",
          dark: "#408050",
          light: "#78C08A",
          50: "#EEF5EF",
          100: "#D4E8D7",
          200: "#A8D0B0",
          300: "#78C08A",
          400: "#5A9E6A",
          500: "#408050",
          600: "#306040",
        },
        espresso: "#161E18",
        cocoa: "#263028",
        mocha: "#506050",
        adobe: "#CCDACC",
        adobeDark: "#B0C4B0",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        arch: "2rem 2rem 2rem 2rem",
        arch2: "2.5rem 2.5rem 1.5rem 1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      backgroundImage: {
        "sunrise-bands":
          "linear-gradient(180deg, #F5F8F5 0%, #EBF0EC 40%, #E8F0E8 70%, #F5F8F5 100%)",
        "warm-radial":
          "radial-gradient(circle at 30% 20%, rgba(47,107,62,0.10) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(85,96,112,0.07) 0%, transparent 55%)",
        "clay-gradient": "linear-gradient(135deg, #2F6B3E 0%, #408A52 100%)",
        "sage-gradient": "linear-gradient(135deg, #556070 0%, #6A7888 100%)",
        "gold-gradient": "linear-gradient(135deg, #5A9E6A 0%, #78C08A 100%)",
      },
      boxShadow: {
        warm: "0 10px 40px -15px rgba(31, 78, 44, 0.22), 0 4px 12px -6px rgba(22, 30, 24, 0.08)",
        "warm-lg": "0 30px 70px -20px rgba(31, 78, 44, 0.28), 0 10px 30px -10px rgba(22, 30, 24, 0.10)",
        card: "0 2px 8px -2px rgba(22, 30, 24, 0.06), 0 1px 3px -1px rgba(22, 30, 24, 0.04)",
        "card-hover": "0 20px 50px -15px rgba(31, 78, 44, 0.24), 0 8px 20px -8px rgba(22, 30, 24, 0.10)",
        arch: "inset 0 -8px 30px -10px rgba(31, 78, 44, 0.10)",
      },
      keyframes: {
        "fade-up": { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "slow-zoom": { "0%, 100%": { transform: "scale(1)" }, "50%": { transform: "scale(1.05)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        "arch-rise": { "0%": { transform: "scaleY(0.6)", opacity: "0", transformOrigin: "bottom" }, "100%": { transform: "scaleY(1)", opacity: "1", transformOrigin: "bottom" } },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "slow-zoom": "slow-zoom 20s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "arch-rise": "arch-rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
