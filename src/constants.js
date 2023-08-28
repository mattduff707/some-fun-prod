import swa from "./assets/swa.png";
import ccf from "./assets/ccf.png";
import theatrSeatr from "./assets/theatrSeatr.png";
import evergreen from "./assets/evergreen.png";
import swaHover from "./assets/swaHover.png";
import ccfHover from "./assets/ccfHover.png";
import theatrSeatrHover from "./assets/theatrSeatrHover.png";
import evergreenHover from "./assets/evergreenHover.png";

export const tokens = {
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
  },
  boxShadowColors: {
    seaweedShadow: "hsla(169deg, 32%, 13%, 0.36)",
    pinkyShadow: "hsla(23deg, 25%, 56%, 0.36)",
    fluffShadow: "hsla(17deg, 27%, 55%, 0.36)",
    dijonShadow: "hsla(36deg, 44%, 46%, 0.36)",
  },
};

export const projectData = [
  {
    title: "Stronger With Adrienne",
    thumbnail: swa,
    thumbnailHover: swaHover,
    link: "/work/swa",
  },
  {
    title: "Evergreen Wildlife Rehabilitation",
    thumbnail: evergreen,
    thumbnailHover: evergreenHover,
    link: "/work/evergreen",
  },
  {
    title: "Theatr Seatr",
    thumbnail: theatrSeatr,
    thumbnailHover: theatrSeatrHover,
    link: "/work/theatrSeatr",
  },
  {
    title: "Columbia City Fitness",
    thumbnail: ccf,
    thumbnailHover: ccfHover,
    link: "/work/ccf",
  },
];
