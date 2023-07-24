import { titles } from "@/utils";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "@/app/styles";
import Image from "next/image";
import { textVariant } from "@/utils/motion";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/hoc";

const Experience = () => {
    return (
        <>
            <motion.div variants={textVariant()} className="py-16">
                <h1 className={styles.sectionHeadText}>{titles.experience}</h1>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{}}
                        contentArrowStyle={{
                            borderRight: "7px solid  rgb(33, 150, 243)",
                        }}
                        date="2011 - present"
                        iconStyle={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundImage: `url(/icons/gs.png)`,
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            backgroundColor: "#fff",
                        }}
                        // icon={
                        // <div className="w-full h-full flex justify-center items-center rounded-full" style={{backgroundImage: `url(/icons/gs.png)`}}>
                        //     {/*<Image*/}
                        //     {/*    alt="Goldman Sachs"*/}
                        //     {/*    src="/icons/gs.png"*/}
                        //     {/*    width={40}*/}
                        //     {/*    height={40}*/}
                        //     {/*    style={{*/}
                        //     {/*        objectFit: "contain",*/}
                        //     {/*    }}*/}
                        //     {/*/>*/}
                        // </div>
                        //
                        // }
                    >
                        <h3 className="vertical-timeline-element-title">
                            Creative Director
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Miami, FL
                        </h4>
                        <p>
                            Creative Direction, User Experience, Visual Design,
                            Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2010 - 2011"
                        iconStyle={{
                            background: "rgb(33, 150, 243)",
                            color: "#fff",
                        }}
                        // icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">
                            Art Director
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            San Francisco, CA
                        </h4>
                        <p>
                            Creative Direction, User Experience, Visual Design,
                            SEO, Online Marketing
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2002 - 2006"
                        iconStyle={{
                            background: "rgb(233, 30, 99)",
                            color: "#fff",
                        }}
                        // icon={<SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">
                            Bachelor of Science in Interactive Digital Media
                            Visual Imaging
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Bachelor Degree
                        </h4>
                        <p>Creative Direction, Visual Design</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        iconStyle={{
                            background: "rgb(16, 204, 82)",
                            color: "#fff",
                        }}
                        // icon={<StarIcon />}
                    />
                </VerticalTimeline>
            </motion.div>
        </>
    );
};

export default SectionWrapper(Experience, "experience");
