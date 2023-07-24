import Image from "next/image";
import { GithubOutlined } from "@ant-design/icons";
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
            className="mb-12 flex items-stretch justify-between"
        >
            <div className="relative">
                <div className="relative h-full w-[20vw]">
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
            <div className="font-barlow sm:ml-8 md:ml-8">
                <div className="mb-2 flex items-center">
                    <p
                        className={`mr-2 whitespace-pre-wrap text-3xl font-semibold text-primary-700 ${
                            project.demoLink ? "cursor-pointer" : ""
                        }`}
                        onClick={
                            project.demoLink
                                ? () => openInNewTab(project.demoLink)
                                : null
                        }
                    >
                        {project.title}
                    </p>
                    <GithubOutlined
                        className="cursor-pointer text-2xl leading-none text-primary-700"
                        onClick={() => openInNewTab(project.githubLink)}
                    />
                </div>
                <p className="text-primary-800">{project.description}</p>
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
