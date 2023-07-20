"use client";
import { skills, titles } from "@/utils";
import Image from "next/image";
import { useState } from "react";
import TechLogo from "@/components/skills/TechLogo";

const Skills = () => {
    const [hoverText, setHoverText] = useState("");

    return (
        <div className="my-24" id="skills">
            <h1 className="text-4xl font-extrabold font-nanum text-secondary-700 mb-3">
                {titles.skills}
            </h1>
            <div className="mb-2">
                <p className="mb-2 font-barlow text-primary-700">I&apos;m familiar with...</p>
                <div className="grid grid-cols-10 items-baseline">
                    {skills.familiar.map((skill) => (
                        <TechLogo skill={skill} hoverText={hoverText} setHoverText={setHoverText} key={skill.name}/>
                    ))}
                </div>
            </div>
            <div>
                <p className="mb-2 font-barlow text-primary-700">I&apos;ve played around with...</p>
                <div className="grid grid-cols-10 items-baseline">
                    {skills.playedAround.map((skill) => (
                        <TechLogo skill={skill} hoverText={hoverText} setHoverText={setHoverText} key={skill.name}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
