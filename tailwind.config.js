/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      min1200: { min: "1200px" },
      max1200: { max: "1200px" },
      min1000: { min: "1000px" },
      max1000: { max: "1000px" },
      min900: { min: "900px" },
      max900: { max: "900px" },
      min700: { min: "700px" },
      max700: { max: "700px" },
      min600: { min: "600px" },
      max600: { max: "600px" },
      min500: { min: "500px" },
      max500: { max: "500px" },
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
      borderWidth: {
        common: "7px",
      },
      fontSize: {
        xs: "0.75rem",
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
          "100%": { transform: "translateX(calc(-296px * 8))" },
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
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        loud: "loud 0.4s ease forwards",
        rotation: "rotation 28s linear infinite",
        shadowRotation: "shadowRotation 28s linear infinite",
        slowSlideHeader: "slowSlideHeader 120s linear infinite",
        slowSlideFooter: "slowSlideFooter 100s linear infinite",
        fadeIn: "fadeIn 0.5s 0.25s ease forwards",
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
        // box: "0px 0px 6px px",
      },
      boxShadowColor: {
        seaweedShadow: "hsla(169deg, 32%, 13%, 0.36)",
        seawaterShadow: "hsla(170deg, 18%, 27%, 0.36)",
        pinkyShadow: "hsla(23deg, 25%, 56%, 0.36)",
        fluffShadow: "hsla(17deg, 27%, 55%, 0.36)",
        dijonShadow: "hsla(36deg, 44%, 46%, 0.36)",
      },
      borderRadius: {
        box: "30px",
        boxMobile: "20px",
      },
      padding: {
        pageTop: "88px",
        pageTopMobile: "40px",
        pageBottomMobile: "200px",
        pageBottom: "252px",
        section: "32px",
        sectionMobile: "16px",
      },
    },
  },
  plugins: [],
};
