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

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    // useEffect(() => {
    //     // Add a listener for changes to the screen size
    //     const mediaQuery = window.matchMedia("(max-width: 500px)");
    //
    //     // Set the initial value of the `isMobile` state variable
    //     setIsMobile(mediaQuery.matches);
    //
    //     // Define a callback function to handle changes to the media query
    //     const handleMediaQueryChange = (event) => {
    //         setIsMobile(event.matches);
    //     };
    //
    //     // Add the callback function as a listener for changes to the media query
    //     mediaQuery.addEventListener("change", handleMediaQueryChange);
    //
    //     // Remove the listener when the component is unmounted
    //     return () => {
    //         mediaQuery.removeEventListener("change", handleMediaQueryChange);
    //     };
    // }, []);

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
            style={{ display: visible ? "flex" : "none" }}
            onClick={scrollToTop}
        >
            <UpOutlined />
        </button>
    );
}
