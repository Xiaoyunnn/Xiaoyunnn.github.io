'use client'
import {aboutMeDescription, titles} from "@/utils";
import Image from "next/image";
import Link from "next/link";
import {openInNewTab} from "@/utils/common";
import bg from "@/app/bg2.jpg";

const About = () => {
    return (
        <div className="flex items-stretch justify-between mx-[10%] my-16">
            <div className="relative pt-14 pl-14">
                <div className="w-[150px] h-[150px] bg-primary-300 absolute top-1 left-0"/>
                <div className="w-[20vw] h-full relative z-10">
                    <Image
                        alt='Hi'
                        src='/bg2.jpg'
                        fill={true}
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                </div>
            </div>
            <div className="mt-16 md:ml-14 sm:ml-10">
                <h1 className="text-4xl font-extrabold font-nanum text-secondary-700 mb-3">{titles.about}</h1>
                <p className="text-base font-barlow text-primary-800 whitespace-pre-wrap mb-4">{aboutMeDescription}</p>
                <button onClick={() => openInNewTab("/WuXiaoYun_Resume.pdf" )} className="btn hover:bg-primary-700 transition-colors ease-in-out">
                    Resume
                </button>
            </div>

        </div>
    );

}

export default About;