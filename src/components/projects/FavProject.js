import Image from "next/image";
import {GithubOutlined} from "@ant-design/icons";
import {openInNewTab} from "@/utils/common";
import TechLogo from "@/components/skills/TechLogo";
import {useState} from "react";

const FavProject = ({project}) => {
    const [hoverText, setHoverText] = useState('');

    return (
        <div className="flex items-stretch justify-between mb-12">
            <div className="relative">
                <div className="w-[20vw] h-full relative">
                    <Image
                        alt={project.title}
                        src={project.img}
                        fill={true}
                        style={{
                            objectFit: "cover",
                            objectPosition: "center",
                        }}
                    />
                </div>
            </div>
            <div className="md:ml-8 sm:ml-8 font-barlow">
                <div className="flex items-center mb-2">
                    <p
                        className={`text-3xl font-semibold text-primary-700 whitespace-pre-wrap mr-2 ${project.demoLink ? "cursor-pointer" : ""}`}
                        onClick={project.demoLink ? () => openInNewTab(project.demoLink) : null}
                    >
                        {project.title}
                    </p>
                    <GithubOutlined
                        className="text-primary-700 text-2xl leading-none cursor-pointer"
                        onClick={() => openInNewTab(project.githubLink)}
                    />
                </div>
                <p className="text-primary-800">{project.description}</p>
                <div className="flex flex-wrap mt-2 items-baseline gap-2">
                    {project.techStack.map((tech) => (
                        <TechLogo key={tech.name} skill={tech} sm={true} hoverText={hoverText} setHoverText={setHoverText}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FavProject;