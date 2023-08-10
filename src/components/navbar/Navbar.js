"use client";
import "./navbar.css";
import { useState } from "react";
import Link from "next/link";
import {
    CloseOutlined,
    GithubOutlined,
    LinkedinOutlined,
    MenuOutlined,
} from "@ant-design/icons";
import { githubLink, linkedinLink, navLinks } from "@/utils";
import { openInNewTab } from "@/utils/common";
import { ThemeSwitcher } from "@/components/navbar/ThemeSwitcher";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = (elementId) => {
        setOpen(!open);

        if (elementId) {
            document.getElementById(elementId).scrollIntoView({
                behavior: "smooth",
            });
        }
    };
    const handleClose = () => setOpen(false);

    return (
        <div className="font-nanum">
            <div
                className={open ? "main-container" : ""}
                onClick={handleClose}
            />
            <nav className="navbar" onClick={(e) => e.stopPropagation()}>
                <div className="nav-container">
                    <Link
                        href="/"
                        className="nav-logo"
                        scroll={false}
                        onClick={() => {
                            window.scroll({
                                top: 0,
                                behavior: "smooth",
                            });
                        }}
                    >
                        xy.
                    </Link>
                    <ul className={open ? "nav-menu active" : "nav-menu"}>
                        {navLinks.map((item) => {
                            return (
                                <li key={item.name} className="nav-item">
                                    <a
                                        href={item.link}
                                        className="nav-links"
                                        onClick={() => handleOpen(item.name)}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="grid grid-cols-3 items-center gap-3">
                        <LinkedinOutlined
                            className="cursor-pointer text-xl leading-none text-white"
                            onClick={() => openInNewTab(linkedinLink)}
                        />
                        <GithubOutlined
                            className="cursor-pointer text-xl leading-none text-white"
                            onClick={() => openInNewTab(githubLink)}
                        />
                        <ThemeSwitcher />
                    </div>
                    <div className="nav-icon" onClick={() => handleOpen("")}>
                        {open ? <CloseOutlined /> : <MenuOutlined />}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
