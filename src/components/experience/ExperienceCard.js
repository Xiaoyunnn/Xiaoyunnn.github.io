import { VerticalTimelineElement } from "react-vertical-timeline-component";
import Image from "next/image";
import TechLogo from "@/components/skills/TechLogo";
import { useState } from "react";

const ExperienceCard = ({ experience }) => {
    const [hoverText, setHoverText] = useState("");
    const darkMode =
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches);

    return (
        <VerticalTimelineElement
            date={experience.date}
            dateClassName={
                darkMode ? "text-primary-300 py-2" : "text-primary-700 py-2"
            }
            iconStyle={{ background: "#fff" }}
            contentStyle={
                darkMode
                    ? {
                          background: "#19262d",
                      }
                    : { background: "#fff" }
            }
            icon={
                <div className="flex h-full w-full items-center justify-center">
                    <Image
                        src={experience.companyLogo}
                        alt={experience.company}
                        width={100}
                        height={100}
                        className="h-3/4 w-3/4 object-contain"
                    />
                </div>
            }
        >
            <div>
                <h3 className="font-barlow text-2xl font-bold text-primary-700 dark:text-primary-400">
                    {experience.title}
                </h3>
                <p
                    className="font-barlow text-base font-normal text-primary-700 dark:text-primary-400"
                    style={{ margin: "5px 0", fontWeight: "400" }}
                >
                    {experience.company}
                </p>
            </div>

            <ul className="font-barlow ml-5 list-disc text-primary-800 dark:text-primary-500">
                {experience.description.map((point, index) => (
                    <li key={`experience-${experience.company}-${index}`}>
                        {point}
                    </li>
                ))}
            </ul>
            <div className="mt-3 flex flex-wrap items-baseline gap-2">
                {experience.techStack.map((tech) => (
                    <TechLogo
                        key={`${experience.companyLogo}-${tech.name}`}
                        skill={tech}
                        sm={true}
                        hoverText={hoverText}
                        setHoverText={setHoverText}
                    />
                ))}
            </div>
        </VerticalTimelineElement>
    );
};

export default ExperienceCard;
