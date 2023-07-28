"use client";
import Top from "@/components/top/Top";
import About from "@/components/about/About";
import Footer from "@/components/footer/Footer";
import Skills from "@/components/skills/Skills";
import Experience from "@/components/experience/Experience";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";
import ScrollTop from "@/components/scrollTop/ScrollTop";
import { useEffect, useState } from "react";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
    const [darkMode, setDarkMode] = useState(
        localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches),
    );

    useEffect(() => {
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            localStorage.theme = "dark";
            document.documentElement.classList.add("dark");
        } else {
            localStorage.theme = "light";
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggleDarkMode = (isDark = darkMode) => {
        setDarkMode(isDark);
        if (isDark) {
            document.documentElement.classList.add("dark");
            localStorage.theme = "dark";
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        }
    };
    return (
        <>
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <main className="dark:bg-[#19262d]">
                <ScrollTop />
                <Top />
                <div className="mx-[7.5%] sm:mx-[12.5%]">
                    <About />
                    <Skills />
                    <Experience />
                    <Projects />
                    <Contact />
                </div>
                <Footer />
            </main>
        </>
    );
}
