"use client"
import Top from "@/components/top/Top";
import About from "@/components/about/About";
import Footer from "@/components/footer/Footer";
import Skills from "@/components/skills/Skills";
import Experience from "@/components/experience/Experience";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";
import ScrollTop from "@/components/scrollTop/ScrollTop";

export default function Home() {
    return (
        <main>
            <ScrollTop/>
            <Top />
            <div className="mx-[12.5%]">
                <About />
                <Skills />
                <Experience/>
                <Projects/>
                <Contact />
            </div>
            <Footer />
        </main>
    );
}
