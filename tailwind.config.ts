import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    keyframes: {
      "infinite-scroll": {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(-100%)" },
      },
      growWidthOpacity: {
        "0%": { width: "0%", opacity: "0%" },
        "100%": { width: "100%", opacity: "100%" },
      },
      shrinkWidthOpacity: {
        "0%": { width: "100%", opacity: "100%" },
        "100%": { width: "0%", opacity: "0%" },
      },
      growWidth: {
        "0%": { width: "0%" },
        "100%": { width: "100%" },
      },
      shrinkWidth: {
        "0%": { width: "100%" },
        "100%": { width: "0%" },
      },
      growHeight: {
        "0%": { height: "0%" },
        "100%": { height: "100%" },
      },
      growServiceheight: {
        "0%": { height: "5rem" },
        "100%": { height: "100%" },
      },
      shrinkHeight: {
        "0%": { height: "100%" },
        "100%": { height: "0%" },
      },
      fadeIn: {
        "0%": { opacity: "0%" },
        "100%": { opacity: "100%" },
      },
      fadeOut: {
        "0%": { opacity: "100%" },
        "100%": { opacity: "0%" },
      },
    },
    animation: {
      infiniteScroll: "infinite-scroll 25s linear infinite",
      growWidth: "growWidth 1.2s ease-in-out",
      shrinkWidth: "shrinkWidth 1.5s ease-in-out",
      blogOpen: "growWidthOpacity 0.4s ease-in-out",
      blogClose: "shrinkWidthOpacity 0.4s ease-in-out",
      blogFadeIn: "fadeIn 0.4s ease-in-out",
      blogFadeOut: "fadeOut 0.4s ease-in-out",
      growHeight: "growHeight 1.2s ease-in-out",
      growServiceHeight: "growServiceHeight 1.2s ease-in-out",
      buttonGrowHeight: "growHeight 0.4s ease-in-out",
      inquiryGrowHeight: "growHeight 0.7s ease-in-out",
      fadeIn: "fadeIn 1.2s ease-in-out",
      fadeInFast: "fadeIn 0.6s ease-in-out",
      fadeOut: "fadeOut 0.5s ease-in-out forwards",
    },
    extend: {
      transitionProperty: {
        height: "height",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        "4xl": [
          "0 0px 5px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
        lg: "-3px 3px 4px rgba(0, 0, 0, 0.1)",
      },
      colors: {
        light: "#DAD7CB",
        secondary: "#CAC3B4",
        dark: "#3F3C38",
        accent: "#B75240",
        accentHighlight: "#BC6759",
        bluepastel: "#606EA9",
        redpastel: "#C85656",
        yellowpastel: "#DFB862",
        greenpastel: "#7D9B53",
        purplepastel: "#9C7BB5",
      },
    },
  },
  plugins: [],
};
export default config;
