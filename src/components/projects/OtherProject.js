import Image from "next/image";
import { openInNewTab } from "@/utils/common";
import { GithubOutlined, YoutubeOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const OtherProject = ({ project, index }) => {
    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
            className="font-barlow bg-primary-700 h-full p-4"
        >
            <Image
                alt={project.title}
                src={project.img}
                height={250}
                width={250}
                className="w-full object-cover object-top md:h-[250px]"
            />
            <div className="mt-3 mb-1 flex flex-wrap items-center">
                <p className={`text-primary-200 mr-2 text-xl font-semibold`}>
                    {project.title}
                </p>
                <GithubOutlined
                    className="!text-primary-200 cursor-pointer text-lg leading-none"
                    onClick={() => openInNewTab(project.githubLink)}
                />
                {project.demoLink && (
                    <YoutubeOutlined
                        className="!text-primary-200 ml-2 cursor-pointer text-2xl leading-none"
                        onClick={() => openInNewTab(project.demoLink)}
                    />
                )}
            </div>
            <p className="text-primary-300">{project.description}</p>
            <div className="flex flex-wrap">
                {project.techStack.map((tech) => (
                    <span
                        key={`${project.title}-${tech}`}
                        className="text-yellow-light mr-2 font-medium"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

export default OtherProject;
