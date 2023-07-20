"use client";
import { skills, titles } from "@/utils";
import Image from "next/image";
import { useState } from "react";
import TechLogo from "@/components/skills/TechLogo";

const Skills = () => {
    const [hoverText, setHoverText] = useState("");

    return (
        <div className="pt-16" id="skills">
            <h1 className="font-nanum mb-3 text-4xl font-extrabold text-secondary-700">
                {titles.skills}
            </h1>
            <div className="mb-2">
                <p className="font-barlow mb-2 text-lg text-primary-700">
                    I&apos;m familiar with...
                </p>
                <div className="grid grid-cols-10 items-baseline">
                    {skills.familiar.map((skill) => (
                        <TechLogo
                            skill={skill}
                            hoverText={hoverText}
                            setHoverText={setHoverText}
                            key={skill.name}
                        />
                    ))}
                </div>
            </div>
            <div>
                <p className="font-barlow mb-2 text-lg text-primary-700">
                    I&apos;ve played around with...
                </p>
                <div className="grid grid-cols-10 items-baseline">
                    {skills.playedAround.map((skill) => (
                        <TechLogo
                            skill={skill}
                            hoverText={hoverText}
                            setHoverText={setHoverText}
                            key={skill.name}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
