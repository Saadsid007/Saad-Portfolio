import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B1020",
        card: "#111933",
        border: "rgba(255,255,255,0.10)"
      }
    }
  },
  plugins: []
} satisfies Config;
