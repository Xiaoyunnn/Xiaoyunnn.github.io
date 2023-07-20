/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    200: "#F3F6F7",
                    300: "#DAE4E7",
                    400: "#C1D3D7",
                    500: "#98b7bf",
                    600: "#849EA3",
                    700: "#65797D",
                    800: "#445a5b",
                },
                secondary: {
                    700: "#3E5463",
                    800: "1C2B36",
                },
                white: "white",
                transparent: "transparent",
            },
        },
    },
    plugins: [],
};
