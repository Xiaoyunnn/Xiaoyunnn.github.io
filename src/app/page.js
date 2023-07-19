import Image from "next/image";
import Top from "@/components/top/Top";
import About from "@/components/about/About";
import Footer from "@/components/footer/Footer";

export default function Home() {
    return (
        <main>
            <Top/>
            <About/>
            <Footer/>
        </main>
    );
}
