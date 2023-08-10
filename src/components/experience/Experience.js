import { experiences, titles } from "@/utils";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "@/app/styles";
import { textVariant } from "@/utils/motion";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/hoc";
import ExperienceCard from "@/components/experience/ExperienceCard";
import "./experience.css";

const Experience = () => {
    return (
        <>
            <motion.div variants={textVariant()} className="py-16">
                <h1 className={styles.sectionHeadText}>{titles.experience}</h1>
                <div className="flex flex-col">
                    <VerticalTimeline>
                        {experiences.map((experience, index) => (
                            <ExperienceCard
                                key={`experience-${index}`}
                                experience={experience}
                            />
                        ))}
                    </VerticalTimeline>
                </div>
            </motion.div>
        </>
    );
};

export default SectionWrapper(Experience, "experience");
