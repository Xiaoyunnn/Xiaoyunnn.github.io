"use client";
import { skills, titles } from "@/utils";
import { useState } from "react";
import TechLogo from "@/components/skills/TechLogo";
import { styles } from "@/app/styles";
import { SectionWrapper } from "@/hoc";
import { textVariant } from "@/utils/motion";
import { motion } from "framer-motion";

const Skills = () => {
    const [hoverText, setHoverText] = useState("");

    return (
        <>
            <motion.div variants={textVariant()} className="pt-16">
                <h1 className={styles.sectionHeadText}>{titles.skills}</h1>
                <div className="mb-2">
                    <p className={styles.sectionSubText}>
                        I&apos;m familiar with...
                    </p>
                    <div className="grid grid-cols-5 items-baseline md:grid-cols-10">
                        {skills.familiar.map((skill, index) => (
                            <TechLogo
                                skill={skill}
                                index={index}
                                hoverText={hoverText}
                                setHoverText={setHoverText}
                                key={skill.name}
                            />
                        ))}
                    </div>
                </div>
                <div>
                    <p className={styles.sectionSubText}>
                        I&apos;ve played around with...
                    </p>
                    <div className="grid grid-cols-5 items-baseline md:grid-cols-10">
                        {skills.playedAround.map((skill, index) => (
                            <TechLogo
                                skill={skill}
                                hoverText={hoverText}
                                setHoverText={setHoverText}
                                key={skill.name}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default SectionWrapper(Skills, "skills");
