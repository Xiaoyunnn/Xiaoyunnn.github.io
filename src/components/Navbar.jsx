"use client";
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const [open, setOpen] = useState(false);

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
        <div>
            <div
                className={open ? "main-container" : ""}
                onClick={() => Close()}
            />
            <nav className="navbar" onClick={(e) => e.stopPropagation()}>
                <div className="nav-container">
                    <Link href="/" className="nav-logo">
                        xy.
                    </Link>
                    <div>
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
                        <div className="nav-icon" onClick={handleOpen}>
                            {open ? (
                                <FontAwesomeIcon icon={faTimes} />
                            ) : (
                                <FontAwesomeIcon icon={faBars} />
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
