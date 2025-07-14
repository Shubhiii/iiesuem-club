import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGray: '#2B2B2B',
        purple: '#83285F',
        cream: '#FFDEBF',
        lightgrey: '#A9A9A9',
        green: '#7EDFA0'
      },
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
        cairo: ["Cairo", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
