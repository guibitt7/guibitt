import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: "0.8rem",
      center: true,
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0e0e11",
        },
        secondary: {
          DEFAULT: "#d9286c",
        },
      },
    },
    fontFamily: {
      'mclaren': ['McLaren', 'monospace'],
    },
  },
  plugins: [],
};
export default config;
