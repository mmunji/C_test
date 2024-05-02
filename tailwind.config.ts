import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "3xl": "34px",
        "2xl": "28px",
        xl: "24px",
        md: "20px",
        regular: "16px",
        sm: "14px",
        xs: "12px",
        E_lg: "48px",
        E_md: "16px",
        E_sm: "12px",
      },
      fontWeight: {
        Bold: "700",
        Medium: "500",
        Regular: "400",
      },
      colors: {
        Black: "#222",
        D1_Gray: "#2E2C2B",
        D2_Gray: "#403e3c",
        D3_Gray: "#545250",
        Gray: "#545250",
        L_Gray: "#999490",
        Gray_Orange: "#999490",
        Silver: "#e9e9e9",
        White: "#ffffff",
        Primary: "#ff7a00",
        Secondary: "#b4e2c4",
        Info: "#2194f3",
        Shade_1: "#e86318",
        Shade_2: "#bc551a",
        Shade_3: "#91461d",
        Shade_4: "7a3f1d",
        Shade_5: "#7a3f1d",
        Error: "#FF2B56",
        D1_Error: "#832D2B",
        D2_Error: "#362524",
        Success: "#2E7D31",
        Tint_1: "#FF7A2F",
        Tint_2: "#FF8846",
        Tint_3: "#FFA674",
        Tint_4: "#FFD3BA",
        Tint_5: "#FFF1E8",
        Opacity_W10: "rgba(255, 255, 255, 0.10)",
        Opacity_W15: "rgba(255, 255, 255, 0.15)",
        Opacity_W20: "rgba(255, 255, 255, 0.20)",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
