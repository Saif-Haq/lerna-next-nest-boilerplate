import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate"
// const config: Config = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//       },
//     },
//   },
//   plugins: [],
// };
// export default config;

/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef, @typescript-eslint/no-require-imports
const themeConfig = require("../shared/lib/config/tailwind/tailwind.config");
// import themeConfig from "shared";

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{js,ts,jsx,tsx}",
    "../shared/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: themeConfig.theme,
  plugins: [animate],
};

export default config;