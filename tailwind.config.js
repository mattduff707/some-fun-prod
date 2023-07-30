/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      pale: "#F9EFE1",
      fluff: "#F4D8CD",
      burnt: "#CE6f50",
      burntDark: "#CE6243",
      dijon: "#ECC690",
      seawater: "#658E87",
      seaweed: "#33524C",
      landingBg: "#FFFFFA",
    },
    dropShadow: {
      svg: "0px 0.75px 0px #ECC690",
    },
    extend: {
      fontFamily: {
        sans: [`var(--font-kumbh)`, "sans"],
        marshland: [`var(--font-marshland)`, "sans"],
      },
      fontSize: {
        sm: "0.875rem",
        base: "1rem",
        lg: "1.25rem",
        xl: "1.5rem",
      },
      backgroundImage: {
        landing: `url(/landingBg.png)`,
      },
      translate: {
        center: "-50%, -50%",
      },
      maxWidth: {
        constraint: "1200px",
      },
      keyframes: {
        loud: {
          "0%, 100%": { fontSize: "24px" },
          "50%": { fontSize: "32px" },
        },
        rotation: {
          to: { transform: "rotate(360deg)" },
        },
        shadowRotation: {
          to: {
            transform: "rotate(360deg) rotate(-360deg)",
          },
        },
      },
      animation: {
        loud: "loud 0.4s ease forwards",
        rotation: "rotation 24s linear infinite",
        shadowRotation: "shadowRotation 24s linear infinite",
      },
    },
  },
  plugins: [],
};
