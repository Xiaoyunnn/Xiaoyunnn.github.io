"use client";

import Image from "next/image";

const TechLogo = ({skill, hoverText, setHoverText}) => {
    return (
        <div
            className="w-16 h-18 relative flex flex-col items-center"
            onMouseEnter={() => setHoverText(skill.name)}
            onMouseLeave={() => setHoverText("")}
        >
            <Image
                alt="Hi"
                src={skill.path}
                height={48}
                width={48}
                style={{
                    objectFit: "cover",
                    objectPosition: "bottom",
                }}
            />
            <p
                className={`text-sm text-center text-primary-700 mt-1.5 transition-opacity ease-in-out ${
                    hoverText === skill.name
                        ? "opacity-100"
                        : "opacity-0"
                }`}
            >
                                {skill.name}
            </p>
        </div>
    );

}

export default TechLogo;