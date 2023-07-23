import nodemailer from "nodemailer";
import { console } from "next/dist/compiled/@edge-runtime/primitives";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    try {
        const { name, email, message } = await req.json();
        console.log(name, email, message);
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.NODEMAILER_EMAIL,
                pass: process.env.NODEMAILER_PW,
            },
        });

        const mailOptions = {
            from: process.env.NODEMAILER_EMAIL,
            to: process.env.TO_EMAIL,
            subject: `New message on Portfolio website from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };

        await transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error(error);
            } else {
                console.log("Email sent: " + info.response);
            }
        });
        return NextResponse.json({ message: "Email sent", status: 200 });
    } catch (e) {
        console.error(e);
        return NextResponse.json({
            error: "Something went wrong before sending email",
            status: 500,
        });
    }
};
