"use client";
import { projects, titles } from "@/utils";
import FavProject from "@/components/projects/FavProject";
import OtherProject from "@/components/projects/OtherProject";
import { SectionWrapper } from "@/hoc";
import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";
import { styles } from "@/app/styles";

const Projects = () => {
    return (
        <>
            <motion.div variants={textVariant()} className="py-16">
                <h1 className={styles.sectionHeadText}>{titles.projects}</h1>
                <div className="mb-2">
                    <p className={styles.sectionSubText}>
                        My favourite projects...
                    </p>
                    {projects.favorites.map((project, index) => (
                        <FavProject
                            key={project.title}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>
                <p className={styles.sectionSubText}>Other projects...</p>
                <div className="grid grid-cols-3 items-start gap-7">
                    {projects.others.map((project, index) => (
                        <OtherProject
                            key={project.title}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>
            </motion.div>
        </>
    );
};

export default SectionWrapper(Projects, "projects");
