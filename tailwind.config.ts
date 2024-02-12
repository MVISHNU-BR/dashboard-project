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
          //'hero': "url('/public/montain2.png')"  
      },
      spacing: {
        '29': '18.75rem',// 300px
        '19': '6.25rem',// 100px
        '85': '22.563rem',//  361px
        '100': '26.68rem',// 427px
        '105': '31rem',// 496px
        '120': '38.563rem' // 617px

      },
      colors: {
        'primary': '#0f1222',
        'blurblue': '#F9FBFF',
        'gray/200': '#EAECF0'
      },
    },
  },
  plugins: [],
};
export default config;
