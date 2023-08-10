"use client";
import "./scrollTop.css";
import { useEffect, useState } from "react";
import { UpOutlined } from "@ant-design/icons";

export default function ScrollTop() {
    const [visible, setVisible] = useState(false);

    function handleVisible() {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            // browser code
            window.addEventListener("scroll", handleVisible);
        }

        return () => {
            window.removeEventListener("scroll", handleVisible);
        };
    }, []);

    return (
        <button
            id="scrollTop"
            className="bg-primary-400 text-primary-700 dark:bg-primary-600 dark:text-primary-200"
            style={{ display: visible ? "flex" : "none" }}
            onClick={scrollToTop}
        >
            <UpOutlined />
        </button>
    );
}
