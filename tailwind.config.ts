import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Avenir Next", "Aptos", "Segoe UI Variable", "Segoe UI", "ui-sans-serif", "sans-serif"]
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        surface: "hsl(var(--surface))",
        muted: "hsl(var(--muted))",
        border: "hsl(var(--border))",
        ring: "hsl(var(--ring))",
        primary: "hsl(var(--primary))",
        ai: "hsl(var(--ai))",
        info: "hsl(var(--info))",
        danger: "hsl(var(--danger))",
        violet: {
          50: "hsl(262 80% 97%)",
          100: "hsl(262 76% 93%)",
          500: "hsl(var(--secondary))",
          600: "hsl(262 60% 49%)"
        },
        orange: {
          50: "hsl(var(--orange-50))",
          100: "hsl(var(--orange-100))",
          200: "hsl(var(--orange-200))",
          300: "hsl(var(--orange-300))",
          400: "hsl(var(--orange-400))",
          500: "hsl(var(--orange-500))",
          600: "hsl(var(--orange-600))"
        },
        green: {
          50: "hsl(var(--green-50))",
          100: "hsl(var(--green-100))",
          200: "hsl(var(--green-200))",
          300: "hsl(var(--green-300))",
          400: "hsl(var(--green-400))",
          500: "hsl(var(--green-500))",
          600: "hsl(var(--green-600))"
        }
      },
      boxShadow: {
        soft: "0 12px 40px -18px rgba(15, 23, 42, 0.35)"
      },
      backgroundImage: {
        "mesh-radial":
          "radial-gradient(circle at top left, rgba(79, 70, 229, 0.10), transparent 30%), radial-gradient(circle at top right, rgba(124, 58, 237, 0.08), transparent 28%), radial-gradient(circle at bottom left, rgba(15, 23, 42, 0.06), transparent 30%)"
      }
    }
  },
  plugins: []
};

export default config;
