/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/hoc/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        screens: {
            xs: "500px",
            sm: "640px",
            md: "955px",
            lg: "1024px",
            xl: "1280px",
        },
        extend: {
            colors: {
                primary: {
                    200: "#ecf0f1",
                    300: "#DAE4E7",
                    400: "#C1D3D7",
                    500: "#98b7bf",
                    600: "#849EA3",
                    700: "#65797D",
                    750: "#556a6e",
                    800: "#445a5b",
                },
                secondary: {
                    700: "#3E5463",
                    800: "1C2B36",
                },
                white: "white",
                transparent: "transparent",
                yellow: {
                    light: "#EADAB5",
                    DEFAULT: "#EADAB5",
                    dark: "#EADAB5",
                },
                danger: {
                    300: "#FBEFEF",
                    400: "#F9DAD9",
                    500: "#EFBEBE",
                    600: "#d07575",
                    700: "#D55D5D",
                },
            },
        },
    },
    plugins: [],
};
