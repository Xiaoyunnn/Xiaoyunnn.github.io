"use client";
import { aboutMeDescription, titles } from "@/utils";
import Image from "next/image";
import { openInNewTab } from "@/utils/common";
import { styles } from "@/app/styles";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/hoc";
import { textVariant } from "@/utils/motion";

const About = () => {
    return (
        <>
            <motion.div
                className="flex items-stretch justify-between py-16 sm:flex-col md:flex-row"
                variants={textVariant()}
            >
                <div className="relative sm:p-0 md:pl-14 md:pt-14">
                    <div className="absolute top-1 bg-primary-300 xs:left-1/3 sm:h-[100px] sm:w-[100px] md:left-0 md:h-[150px] md:w-[150px]" />
                    <div className="relative z-10 w-[20vw] sm:m-auto sm:h-[30vw] md:h-full">
                        <Image
                            alt="Hi"
                            src="/bg2.jpg"
                            fill={true}
                            style={{
                                objectFit: "cover",
                            }}
                        />
                    </div>
                </div>
                <div className="mt-16 md:ml-14">
                    <h1 className={styles.sectionHeadText}>{titles.about}</h1>
                    <p className="font-barlow mb-4 whitespace-pre-wrap text-base text-primary-800">
                        {aboutMeDescription}
                    </p>
                    <button
                        onClick={() => openInNewTab("/WuXiaoYun_Resume.pdf")}
                        className="btn bg-primary-600 transition-colors ease-in-out hover:bg-primary-700"
                    >
                        Resume
                    </button>
                </div>
            </motion.div>
        </>
    );
};

export default SectionWrapper(About, "about");
