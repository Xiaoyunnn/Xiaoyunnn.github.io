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
import MoonIcon from "@/components/icons/MoonIcon";
import SunIcon from "@/components/icons/SunIcon";
import {githubLink, linkedinLink, navLinks } from "@/utils";
import { openInNewTab } from "@/utils/common";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };

    const handleOpen = (elementId)=> {
        setOpen(!open)

        if (elementId) {
            document.getElementById(elementId).scrollIntoView({
                behavior: 'smooth'
            })
        }
    }
    const handleClose = () => setOpen(false);

    return (
        <div className="font-nanum">
            <div
                className={open ? "main-container" : ""}
                onClick={handleClose}
            />
            <nav className="navbar" onClick={(e) => e.stopPropagation()}>
                <div className="nav-container">
                    <Link href='/' className="nav-logo" scroll={false} onClick={() => {
                        window.scroll({
                            top: 0,
                            behavior: 'smooth'
                        });
                    }}>
                        xy.
                    </Link>
                    <ul className={open ? "nav-menu active" : "nav-menu"}>
                        {navLinks.map((item) => {
                            return (
                                <li key={item.name} className="nav-item">
                                    <Link
                                        href={item.link}
                                        scroll={false}
                                        className="nav-links"
                                        onClick={() => handleOpen(item.name)}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="grid grid-cols-3 gap-3 items-center">
                        <LinkedinOutlined
                            className="text-white text-xl leading-none cursor-pointer"
                            onClick={() => openInNewTab(linkedinLink)}
                        />
                        <GithubOutlined
                            className="text-white text-xl leading-none cursor-pointer"
                            onClick={() => openInNewTab(githubLink)}
                        />
                        {darkMode ? (
                            <SunIcon toggleDarkMode={toggleDarkMode} />
                        ) : (
                            <MoonIcon toggleDarkMode={toggleDarkMode} />
                        )}
                    </div>
                    <div className="nav-icon" onClick={() => handleOpen('')}>
                        {open ? <CloseOutlined /> : <MenuOutlined />}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;