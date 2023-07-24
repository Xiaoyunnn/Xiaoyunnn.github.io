"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const TechLogo = ({ skill, hoverText, setHoverText, sm, index }) => {
    return (
        <motion.div
            variants={fadeIn("", "orchestration", index * 0.2, 0.75)}
            className="h-18 relative mb-1 flex w-16 flex-col items-center"
            onMouseEnter={() => setHoverText(skill.name)}
            onMouseLeave={() => setHoverText("")}
        >
            <Image
                alt={skill.name}
                src={skill.path}
                height={48}
                width={48}
                style={{
                    objectFit: "contain",
                    objectPosition: "center",
                    width: "auto",
                    height: sm ? "40px" : "48px",
                }}
            />
            <p
                className={`hover-text ${
                    hoverText === skill.name ? "opacity-100" : "opacity-0"
                }`}
            >
                {skill.name}
            </p>
        </motion.div>
    );
};

export default TechLogo;
