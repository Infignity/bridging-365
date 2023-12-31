import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#489248",
          "white-smoke": "#f2f1ef",
          "light-green": "#65CE66",
          "dark-green": "#1D3A35",
        },
      },
    },
  },
  plugins: [],
};
export default config;
