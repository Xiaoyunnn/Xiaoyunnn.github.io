"use client"
import "./scrollTop.css";
import {useState} from "react";
import {UpOutlined} from "@ant-design/icons";

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

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    window.addEventListener("scroll", handleVisible);

    return (
        <button
            id="scrollTop"
            style={{ display: visible ? "flex" : "none" }}
            onClick={scrollToTop}
        >
            <UpOutlined />
        </button>
    );
}