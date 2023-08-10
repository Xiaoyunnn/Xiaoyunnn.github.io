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

        await new Promise((resolve, reject) => {
            // verify connection configuration
            transporter.verify(function (error, success) {
                if (error) {
                    console.log(error);
                    reject(error);
                } else {
                    console.log("Server is ready to take our messages");
                    resolve(success);
                }
            });
        });

        const mailOptions = {
            from: process.env.NODEMAILER_EMAIL,
            to: process.env.TO_EMAIL,
            subject: `New message on Portfolio website from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };

        await new Promise((resolve, reject) => {
            // send mail
            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    console.error(err);
                    reject(err);
                } else {
                    console.log("Email sent: " + info.response);
                    resolve(info);
                }
            });
        });

        // await transporter.sendMail(mailOptions, (error, info) => {
        //     if (error) {
        //         console.error(error);
        //     } else {
        //         console.log("Email sent: " + info.response);
        //     }
        // });
        return NextResponse.json({ message: "Email sent", status: 200 });
    } catch (e) {
        console.error(e);
        return NextResponse.json({
            error: "Something went wrong before sending email",
            status: 500,
        });
    }
};
