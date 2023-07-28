import Image from "next/image";
import {
    GithubOutlined,
    GlobalOutlined,
    YoutubeOutlined,
} from "@ant-design/icons";
import { openInNewTab } from "@/utils/common";
import TechLogo from "@/components/skills/TechLogo";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const FavProject = ({ project, index }) => {
    const [hoverText, setHoverText] = useState("");

    return (
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className="mb-12 flex flex-col items-stretch justify-between md:flex-row"
        >
            <div className="relative">
                <div className="relative m-auto h-[250px] w-full sm:w-1/2 md:h-full md:w-[20vw]">
                    <Image
                        alt={project.title}
                        src={project.img}
                        fill={true}
                        sizes={"100%"}
                        style={{
                            objectFit: "cover",
                            objectPosition: "center",
                        }}
                    />
                </div>
            </div>
            <div className="font-barlow mt-3 md:ml-8 md:mt-0">
                <div className="mb-2 flex flex-wrap items-center">
                    <p
                        className={`mr-2 whitespace-pre-wrap text-3xl font-semibold text-primary-700 dark:text-primary-400`}
                    >
                        {project.title}
                    </p>
                    <GithubOutlined
                        className="cursor-pointer text-2xl leading-none text-primary-700 dark:text-primary-400"
                        onClick={() => openInNewTab(project.githubLink)}
                    />
                    {project.demoLink && (
                        <YoutubeOutlined
                            className="ml-3 cursor-pointer text-3xl leading-none text-primary-700 dark:text-primary-400"
                            onClick={() => openInNewTab(project.demoLink)}
                        />
                    )}
                </div>
                <p className="text-primary-800 dark:text-primary-500">
                    {project.description}
                </p>
                <div className="mt-2 flex flex-wrap items-baseline gap-2">
                    {project.techStack.map((tech) => (
                        <TechLogo
                            key={`${project.title}-${tech.name}`}
                            skill={tech}
                            sm={true}
                            hoverText={hoverText}
                            setHoverText={setHoverText}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default FavProject;
