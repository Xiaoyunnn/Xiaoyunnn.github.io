"use client";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import { openInNewTab } from "@/utils/common";
import { githubLink, linkedinLink } from "@/utils";

const Footer = () => {
    return (
        <div className="bg-primary-700 py-5 text-white flex items-center justify-between font-nanum px-[10%] font-extrabold">
            <div />
            <span>Xiao Yun © 2023 </span>
            <div className="grid grid-cols-2 gap-3 items-center">
                <LinkedinOutlined
                    className="text-white text-xl leading-none cursor-pointer"
                    onClick={() => openInNewTab(linkedinLink)}
                />
                <GithubOutlined
                    className="text-white text-xl leading-none cursor-pointer"
                    onClick={() => openInNewTab(githubLink)}
                />
            </div>
        </div>
    );
};

export default Footer;
