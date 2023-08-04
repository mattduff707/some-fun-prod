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
      pinky: "#F6E2D6",
      fluff: "#F4D8CD",
      burnt: "#CE6f50",
      burntDark: "#CE6243",
      dijon: "#ECC690",
      darkDijon: "#C69248",
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
        rainbow: `url(/rainbowSquiggle.png)`,
        greenSquiggle: `url(/greenSquiggle.png)`,
        pinkSquiggle: `url(/pinkSquiggle.png)`,
      },
      translate: {
        center: "-50%, -50%",
      },
      maxWidth: {
        constraint: "1000px",
      },
      keyframes: {
        slowSlide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-1830px)" },
        },
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
        rotation: "rotation 28s linear infinite",
        shadowRotation: "shadowRotation 28s linear infinite",
        slowSlide: "slowSlide 60s linear infinite",
      },
      boxShadow: {
        main: "0px 0px 0px 8px #CE6F50",
        box: `0px 0.1px 0.1px,
              0px 0.6px 0.7px -0.4px,
              0px 1px 1.1px -0.7px,
              0.1px 1.7px 1.9px -1.1px,
              0.1px 2.7px 3px -1.4px,
              0.2px 4.2px 4.7px -1.8px,
              0.2px 6.4px 7.2px -2.1px,
              0.4px 9.5px 10.7px -2.5px`,
      },
      boxShadowColor: {
        seaweedShadow: "hsla(169deg, 32%, 13%, 0.36)",
        pinkyShadow: "hsla(23deg, 25%, 56%, 0.36)",
      },
      borderRadius: {
        box: "30px",
      },
      padding: {
        pageTop: "88px",
        pageBottom: "252px",
      },
    },
  },
  plugins: [],
};
