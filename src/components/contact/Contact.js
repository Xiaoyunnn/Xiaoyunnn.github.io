"use client";
import { titles } from "@/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import FailureModal from "@/components/modal/FailureModal";
import SuccessModal from "@/components/modal/SuccessModal";
import Spinner from "@/components/contact/Spinner";
import { SectionWrapper } from "@/hoc";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";
import { styles } from "@/app/styles";
import { useTheme } from "next-themes";

const Contact = () => {
    const [mounted, setMounted] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    const [enquiry, setEnquiry] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isOpenSuccess, setIsOpenSuccess] = useState(false);
    const [isOpenFailure, setIsOpenFailure] = useState(false);
    const [failureMessage, setFailureMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;
        setEnquiry((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isSubmitting) {
            setIsOpenFailure(true);
            setFailureMessage(
                "Please wait for the current submission to finish.",
            );
            return;
        }
        setIsSubmitting(true);
        const trimmedName = enquiry.name.trim();
        const trimmedEmail = enquiry.email.trim();
        const trimmedMessage = enquiry.message.trim();
        if (!trimmedName || !trimmedEmail || !trimmedMessage) {
            setIsOpenFailure(true);
            setFailureMessage("Please fill in all the fields.");
            return;
        }
        if (!trimmedEmail.includes("@")) {
            setIsOpenFailure(true);
            setFailureMessage("Please enter a valid email address.");
            return;
        }
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: trimmedName,
                    email: trimmedEmail,
                    message: trimmedMessage,
                }),
            });

            if (res.ok) {
                setIsOpenSuccess(true);
                setEnquiry({ name: "", email: "", message: "" });
            }
        } catch (error) {
            setIsOpenFailure(true);
            setFailureMessage("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!mounted) {
        return null;
    }

    return (
        <>
            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="py-16"
            >
                {isOpenFailure && (
                    <FailureModal
                        isOpen={isOpenFailure}
                        onClose={() => setIsOpenFailure(false)}
                        message={failureMessage}
                    />
                )}
                {isOpenSuccess && (
                    <SuccessModal
                        isOpen={isOpenSuccess}
                        onClose={() => setIsOpenSuccess(false)}
                    />
                )}
                <h1 className={styles.sectionHeadText}>{titles.contact}</h1>
                <div className="flex flex-col sm:flex-row">
                    <div className="contact-height w-full sm:w-1/2">
                        <Image
                            src={
                                theme === "dark"
                                    ? "/contact-dark.png"
                                    : "/contact-light.jpg"
                            }
                            alt={"contact"}
                            width={400}
                            height={400}
                            className={`h-full w-full object-cover ${
                                theme === "dark"
                                    ? "object-bottom"
                                    : "object-center"
                            }`}
                        />
                    </div>
                    <form
                        className="font-nanum w-full border-[1px] px-6 py-[10%] dark:border-0 dark:bg-primary-800 sm:w-1/2 sm:px-12"
                        onSubmit={handleSubmit}
                    >
                        <div className="mb-4 flex flex-col">
                            <label
                                htmlFor="name"
                                className="font-nanum mb-2 text-sm text-primary-700 dark:text-primary-600"
                            >
                                Name
                            </label>
                            <input
                                required={true}
                                type="text"
                                id="name"
                                name="name"
                                className="bg-primary-200 px-3 py-2 font-semibold text-primary-800 placeholder:text-primary-500 focus:outline-0 dark:bg-primary-400 dark:placeholder:text-primary-600"
                                placeholder="Enter your name"
                                value={enquiry.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4 flex flex-col">
                            <label
                                htmlFor="email"
                                className="font-nanum mb-2 text-sm text-primary-700 dark:text-primary-600"
                            >
                                Email
                            </label>
                            <input
                                required={true}
                                type="email"
                                id="email"
                                name="email"
                                className="bg-primary-200 px-3 py-2 font-semibold text-primary-800 placeholder:text-primary-500 focus:outline-0 dark:bg-primary-400 dark:placeholder:text-primary-600"
                                placeholder="Enter your email"
                                value={enquiry.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4 flex flex-col">
                            <label
                                htmlFor="message"
                                className="font-nanum mb-2 text-sm text-primary-700 dark:text-primary-600"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={6}
                                required={true}
                                className="bg-primary-200 px-3 py-2 font-semibold text-primary-800 placeholder:text-primary-500 focus:outline-0 dark:bg-primary-400 dark:placeholder:text-primary-600"
                                placeholder="Leave your message here..."
                                value={enquiry.message}
                                onChange={handleChange}
                            />
                        </div>

                        <button
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            type="submit"
                            className={`btn transition-colors ease-in-out ${
                                isSubmitting
                                    ? "cursor-not-allowed bg-primary-700 dark:bg-primary-750"
                                    : "bg-primary-600 hover:bg-primary-700 dark:bg-primary-700" +
                                      " dark:hover:bg-primary-750"
                            }`}
                        >
                            {isSubmitting ? <Spinner /> : "Send"}
                        </button>
                    </form>
                </div>
            </motion.div>
        </>
    );
};

export default SectionWrapper(Contact, "contact");
