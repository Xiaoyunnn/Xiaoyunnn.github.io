"use client";
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import {CloseOutlined, GithubOutlined, LinkedinOutlined, MenuOutlined} from "@ant-design/icons";
import MoonIcon from "@/components/MoonIcon";
import SunIcon from "@/components/SunIcon";

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
    }

    const handleOpen = () => setOpen(!open);
    const Close = () => setOpen(false);
    let navLinks = [
        { name: "about", link: "#about" },
        { name: "skills", link: "#skills" },
        { name: "experience", link: "#experience" },
        { name: "projects", link: "#projects" },
        { name: "contact", link: "#contact" },
    ];

    return (
        <div className="font-nanum">
            <div
                className={open ? "main-container" : ""}
                onClick={() => Close()}
            />
            <nav className="navbar" onClick={(e) => e.stopPropagation()}>
                <div className="nav-container">
                    <Link href="/" className="nav-logo">
                        xy.
                    </Link>
                    <ul className={open ? "nav-menu active" : "nav-menu"}>
                        {navLinks.map((item) => {
                            return (
                                <li key={item.name} className="nav-item">
                                    <Link
                                        href={item.link}
                                        className="nav-links"
                                        onClick={open ? handleOpen : null}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="grid grid-cols-3 gap-3 items-center">
                        <LinkedinOutlined className="text-white text-xl leading-none"/>
                        <GithubOutlined className="text-white text-xl leading-none"/>
                        {darkMode ? <SunIcon toggleDarkMode={toggleDarkMode}/> : <MoonIcon toggleDarkMode={toggleDarkMode}/>}

                    </div>
                    <div className="nav-icon" onClick={handleOpen}>
                        {open ? <CloseOutlined /> : <MenuOutlined />}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
