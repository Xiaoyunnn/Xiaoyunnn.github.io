import {Nanum_Myeongjo, Barlow_Semi_Condensed, Playfair_Display} from "next/font/google";

export const nanumMyeongjo = Nanum_Myeongjo({
    subsets: ["latin"],
    weight: ["400", "700", "800"],
    variable: "--font-nanum",
});

export const barlowSemiCondensed = Barlow_Semi_Condensed({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-barlow",
});

export const playFairDisplay = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
    variable: "--font-playfair",
});
