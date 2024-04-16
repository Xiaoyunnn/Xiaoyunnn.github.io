"use client";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import { openInNewTab } from "@/utils/common";
import { githubLink, linkedinLink } from "@/utils";

const Footer = () => {
    return (
        <div className="font-nanum mt-16 flex items-center justify-between bg-primary-700 px-[10%] py-6 font-extrabold text-white dark:bg-primary-800">
            <div />
            <span>Xiaoyun © 2023 - {new Date().getFullYear()}</span>
            <div className="grid grid-cols-2 items-center gap-3">
                <LinkedinOutlined
                    className="cursor-pointer text-xl leading-none text-white"
                    onClick={() => openInNewTab(linkedinLink)}
                />
                <GithubOutlined
                    className="cursor-pointer text-xl leading-none text-white"
                    onClick={() => openInNewTab(githubLink)}
                />
            </div>
        </div>
    );
};

export default Footer;
