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
                className="flex items-stretch justify-between py-16"
                variants={textVariant()}
            >
                <div className="relative pl-14 pt-14">
                    <div className="absolute left-0 top-1 h-[150px] w-[150px] bg-primary-300" />
                    <div className="relative z-10 h-full w-[20vw]">
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
                <div className="mt-16 sm:ml-10 md:ml-14">
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
