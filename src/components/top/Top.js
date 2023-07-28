import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

const Top = () => {
    return (
        <div>
            <div className="relative">
                <div className="relative h-screen w-screen">
                    <Image
                        alt="Hi"
                        src="/bg2.jpg"
                        fill={true}
                        style={{
                            objectFit: "cover",
                            objectPosition: "bottom",
                        }}
                    />
                </div>
                <h1 className="heading-hi">Hi</h1>
                <h2 className="heading-name">
                    I
                    <Typewriter
                        words={["'m Xiao Yun", " design", " code"]}
                        loop={0}
                        cursor
                        typeSpeed={120}
                        deleteSpeed={70}
                        delaySpeed={1000}
                        // onLoopDone={handleDone}
                        // onType={handleType}
                    />
                </h2>
            </div>
        </div>
    );
};
export default Top;
