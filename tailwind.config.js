/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      900: "900px",
    },
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
      strokePinky: "#edc4ab",
      strokeDijon: "",
    },
    dropShadow: {
      svg: "0px 0.75px 0px #ECC690",
    },
    extend: {
      fontFamily: {
        sans: [`var(--font-kumbh)`, "sans"],
        marshland: [`var(--font-marshland)`, "sans"],
        bavistage: [`var(--font-bavistage)`, "sans"],
      },
      fontSize: {
        sm: "0.875rem",
        base: "1rem",
        lg: "1.25rem",
        xl: "1.5rem",
        xxl: "2rem",
        xxxl: "2.5rem",
      },
      backgroundImage: {
        landing: `url(/landingBg.png)`,
        stack: "url(/starBg.png)",
        rainbow: `url(/rainbowSquiggle.png)`,
        greenSquiggle: `url(/greenSquiggle.png)`,
        pinkSquiggle: `url(/pinkSquiggle.png)`,
        squiggleBg: "url(/squiggleBg.png)",
      },
      translate: {
        center: "-50%, -50%",
      },
      maxWidth: {
        constraint: "1000px",
      },
      keyframes: {
        slowSlideFooter: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-244px * 8))" },
        },
        slowSlideHeader: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-366px * 8))" },
        },
        loud: {
          "0%, 100%": { fontSize: "1.5rem" },
          "50%": { fontSize: "2rem" },
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
        slowSlideHeader: "slowSlideHeader 60s linear infinite",
        slowSlideFooter: "slowSlideFooter 60s linear infinite",
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
        fluffShadow: "hsla(17deg, 27%, 55%, 0.36)",
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
