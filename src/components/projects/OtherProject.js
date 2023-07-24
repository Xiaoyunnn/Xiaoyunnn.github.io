import Image from "next/image";
import { openInNewTab } from "@/utils/common";
import { GithubOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const OtherProject = ({ project, index }) => {
    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
            className="font-barlow h-full bg-primary-700 p-4"
        >
            <Image
                alt={project.title}
                src={project.img}
                height={250}
                width={250}
                className="w-full object-cover object-top md:h-[250px]"
            />
            <div className="mb-1 mt-3 flex flex-wrap items-center">
                <p
                    className={`mr-2 text-xl font-semibold text-primary-200 ${
                        project.demoLink && "cursor-pointer"
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
                    className="cursor-pointer text-lg leading-none text-primary-200"
                    onClick={() => openInNewTab(project.githubLink)}
                />
            </div>
            <p className="text-primary-300">{project.description}</p>
            <div className="flex flex-wrap">
                {project.techStack.map((tech) => (
                    <span
                        key={`${project.title}-${tech}`}
                        className="mr-2 font-medium text-yellow-light"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

export default OtherProject;
