import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-green": "#5BC5B7",
        "primary-green-dark": "#3D8F87",
        "secondary-green": "#EDF9F8",
        "medium-green": "#b2deca",
        "primary-dark": "#242424",
        "secondary-dark": "#52525B",
        "light-blue": "#90e0ef",
        salmon: "#e07a5f",
        "light-yellow": "#f5e1da",
        "light-purple": "#e1d5f5",
        "light-red": "#f5a1a1",
      },
      screens: {
        xs: "475px",
      },
    },
  },
  plugins: [],
};
export default config;
