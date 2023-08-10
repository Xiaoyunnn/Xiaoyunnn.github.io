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
                className="flex flex-col items-stretch justify-between py-16 md:flex-row"
                variants={textVariant()}
            >
                <div className="relative p-0 md:pl-14 md:pt-14">
                    <hr className="absolute top-[-25px] w-1/2 rounded-full border-t-2 border-primary-400 dark:border-primary-600 md:hidden" />
                    <hr className="absolute bottom-[-25px] right-0 w-1/2 rounded-full border-t-2 border-primary-400 dark:border-primary-600 md:hidden" />
                    <div className="absolute top-1 bg-primary-300 opacity-0 dark:bg-primary-700 xs:left-1/3 sm:h-[100px] sm:w-[100px] md:left-0 md:h-[150px] md:w-[150px] md:opacity-100" />
                    <div className="relative z-10 m-auto h-[105vw] w-[90%] sm:h-[45vw] sm:w-[35vw] md:h-full md:w-[18vw]">
                        <Image
                            alt="xy"
                            src="/xy.jpg"
                            fill={true}
                            style={{
                                objectFit: "cover",
                            }}
                        />
                    </div>
                </div>
                <div className="mt-16 md:ml-14">
                    <h1 className={styles.sectionHeadText}>{titles.about}</h1>
                    <p className="font-barlow mb-4 whitespace-pre-wrap text-base text-primary-800 dark:text-primary-400">
                        {aboutMeDescription}
                    </p>
                    <button
                        onClick={() => openInNewTab("/WuXiaoYun_Resume.pdf")}
                        className="btn bg-primary-600 transition-colors ease-in-out hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-800"
                    >
                        Resume
                    </button>
                </div>
            </motion.div>
        </>
    );
};

export default SectionWrapper(About, "about");
