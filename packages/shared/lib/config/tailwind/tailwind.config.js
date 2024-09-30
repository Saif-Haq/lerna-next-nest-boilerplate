const plugin = require("tailwindcss/plugin");
import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "20px",
      screens: {
        "2xl": "1440px",
      },
    },
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
      loose: 2,
      custom: "1.8",
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "left-shade":
          "linear-gradient(-90deg, rgba(1, 1, 6, 0.00) 0%, #010106 100%)",
        "right-shade":
          "linear-gradient(90deg, rgba(1, 1, 6, 0.00) 0%, #010106 100%)",
        "top-shade":
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)",
        "full-shade":
          "linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%)",

        "radial-gradient":
          "linear-gradient(137deg, #111214 4.87%, #0c0d0f 75.88%)",
        "nav-gradient":
          "linear-gradient(137deg, rgba(17, 18, 20, .75) 4.87%, rgba(12, 13, 15, .9) 75.88%)",
        "badge-gradient":
          "linear-gradient(180deg, hsla(0, 0%, 100%, .03), hsla(0, 0%, 100%, .1))",
        "badge-gradient-2":
          "linear-gradient(40deg, hsla(0, 0%, 100%, .03), hsla(0, 0%, 100%, .1))",
        "main-gradient":
          "linear-gradient(252.35deg, #37B9C5 33.72%, #0A78AB 94.31%)",
        "nav-hover":
          "linear-gradient(251.31deg, rgba(142, 208, 221, 0.05) 17.49%, rgba(55, 185, 197, 0.05) 66.15%, rgba(10, 120, 171, 0.05) 116.8%)",
      },
      borderColor: {
        "light-white": "rgb(255 255 255 / 10%)",
        "light-gray": "#5B5B5B",
        nav: "linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 100%)",
      },
      backgroundColor: {
        "dark-gray": "rgb(0 0 0 / 32%)",
        "lighter-black": "#16161B",
        "main-gradient":
          "linear-gradient(252.35deg, #37B9C5 33.72%, #0A78AB 94.31%)",
        "light-gray": "#5B5B5B",
      },
      boxShadow: {
        "badge-gradient":
          "inset 0 1px 0 0 hsla(0, 0%, 100%, .05), 0 0 0 1px hsla(0, 0%, 100%, .25), inset 0 -1px 0 0 rgba(0, 0, 0, .2)",
        nav: "0px 4px 6px 0px rgba(0, 0, 0, 0.08)",
        card: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        "card-2":
          "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
      },
      height: {
        nav: "calc(100vh - 76px)",
      },
    },
  },
  plugins: [animate], //require("tailwindcss-animate")],
};
