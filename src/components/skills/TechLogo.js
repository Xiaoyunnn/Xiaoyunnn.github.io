"use client";

import Image from "next/image";

const TechLogo = ({ skill, hoverText, setHoverText, sm }) => {
    return (
        <div
            className="h-18 relative flex w-16 flex-col items-center"
            onMouseEnter={() => setHoverText(skill.name)}
            onMouseLeave={() => setHoverText("")}
        >
            <Image
                alt={skill.name}
                src={skill.path}
                height={48}
                width={48}
                style={{
                    objectFit: "contain",
                    objectPosition: "center",
                    width: "auto",
                    height: sm ? "40px" : "48px",
                }}
            />
            <p
                className={`mt-1.5 text-center text-sm text-primary-700 transition-opacity ease-in-out ${
                    hoverText === skill.name ? "opacity-100" : "opacity-0"
                }`}
            >
                {skill.name}
            </p>
        </div>
    );
};

export default TechLogo;
