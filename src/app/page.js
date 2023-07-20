import Image from "next/image";
import Top from "@/components/top/Top";
import About from "@/components/about/About";
import Footer from "@/components/footer/Footer";
import Skills from "@/components/skills/Skills";

export default function Home() {
    return (
        <main>
            <Top />
            <div className="mx-[10%]">
                <About />
                <Skills />
            </div>
            <Footer />
        </main>
    );
}
