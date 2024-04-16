import "./globals.css";
import { ThemeProvider } from "./themeProvider.js";

export const metadata = {
    title: "Xiaoyun",
    description:
        "I am a final year Computer Science student passion about building beautiful and useful full-stack applications.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body suppressHydrationWarning={true}>
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
