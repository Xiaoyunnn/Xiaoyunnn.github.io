import Image from "next/image";
import Top from "@/components/top/Top";
import About from "@/components/about/About";
import Footer from "@/components/footer/Footer";
import Skills from "@/components/skills/Skills";
import Experience from "@/components/experience/Experience";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";

export default function Home() {
    return (
        <main>
            <Top />
            <div className="mx-[10%]">
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
