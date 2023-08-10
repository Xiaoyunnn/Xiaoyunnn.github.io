import "./globals.css";
import { nanumMyeongjo, barlowSemiCondensed, playFairDisplay } from "./font.js";
import { ThemeProvider } from "./themeProvider.js";

export const metadata = {
    title: "Xiao Yun",
    description:
        "I am a final year Computer Science student passion about building beautiful and useful full-stack applications.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${nanumMyeongjo.variable} ${barlowSemiCondensed.variable} ${playFairDisplay.variable}`}
                suppressHydrationWarning={true}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
