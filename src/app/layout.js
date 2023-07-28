import "./globals.css";
import { nanumMyeongjo, barlowSemiCondensed, playFairDisplay } from "./font.js";
import Head from "next/head";

export const metadata = {
    title: "Xiao Yun",
    description:
        "I am a final year Computer Science student passion about building beautiful and useful full-stack applications.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Head>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/favicon/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon/favicon-16x16.png"
                />
                <link rel="manifest" href="/favicon/site.webmanifest" />
            </Head>

            {/*<link rel="icon" href="/favicon.ico" sizes="any" />*/}
            <body
                className={`${nanumMyeongjo.variable} ${barlowSemiCondensed.variable} ${playFairDisplay.variable}`}
                suppressHydrationWarning={true}
            >
                {children}
            </body>
        </html>
    );
}
