import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  daisyui: {
    themes: [
      {
        deshiBazarTheme: {
          primary: "#0A525B",
          secondary: "#374151",

          "--white": "#FFFFFF",
          "--darkGray": "#4B5563",
          "--mediumGreen": "#007672",
          "--lightGreen": "#50F0A3",
          "--purple": "#313F90",
        },
      },
    ],
  },
  // theme: {
  //   extend: {
  //     backgroundImage: {
  //       "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
  //       "gradient-conic":
  //         "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
  //     },
  //   },
  // },
  plugins: [require("daisyui")],
};
export default config;
