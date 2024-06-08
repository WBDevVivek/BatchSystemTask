import { softLightBackImg } from "@/app/data";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",

          'gradientColor': 'linear-gradient(0deg, #FDE598 5%, #FF0000 90%)',
          'applyOnSecColor': 'linear-gradient(180deg, #0D061F 0%, #251E35 100%)',

          "backSoftLightImg" : `var(--backSoftLightImg)`,
          "seventhSecUserImgVar" : `var(--seventhSecUserImgVar)`,
      },

      screens: {
        // 'lg': '1024px',
      },
      colors: {
        "background": "var(--background)",
        "backGradiYellow": "var(--backGradiYellow)",
        "backGradiRed": "var(--backGradiRed)",
        "iconColor": "var(--iconColor)",
        "btnColor": "var(--btnColor)",
        "paraColor": "var(--paraColor)",

      },

      fontFamily: {
        "ClashDisplayExtralight": "var(--ClashDisplayExtralight)",
        "ClashDisplayLight": "var(--ClashDisplayLight)",
        "ClashDisplayRegular": "var(--ClashDisplayRegular)",
        "ClashDisplayMedium": "var(--ClashDisplayMedium)",
        "ClashDisplaySemibold": "var(--ClashDisplaySemibold)",
        "ClashDisplayBold": "var(--ClashDisplayBold)",
        "ClashDisplayVariable": "var(--ClashDisplayVariable)",
      },

    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
