import Image from "next/image";
import React from "react";

export default function NextStepSection() {
    return (
        <section className="relative w-full h-[560px] overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/next-step.png"
                    alt="Background"
                    fill
                    priority
                    className="object-cover object-center"
                />
                {/* Gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-black/20" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full px-6 md:px-10">
                <div className="h-full flex flex-col justify-end pb-12 md:pb-16">
                    <h2
                        className="text-[#DA5B00] text-3xl md:text-5xl font-bold mb-5 tracking-tight"
                        style={{ fontFamily: "'Times New Roman', Times, serif" }}
                    >
                        Your Next Step
                    </h2>

                    <p
                        className="text-white text-lg md:text-xl font-light max-w-7xl leading-relaxed"
                        style={{ textShadow: "0 3px 12px rgba(0,0,0,0.25)" }}
                    >
                        Transformation begins with clarity.
                        <br />
                        <br />
                        A Clarity Call helps us explore what is ready to shift and which pathway
                        best supports you now.
                        <br />
                        <br />
                    </p>
                    <ul className="list-disc pl-5 mt-4 space-y-1 text-white text-lg md:text-xl font-light marker:text-white/50">
                        <li>No pressure.</li>
                        <li>No fixing.</li>
                        <li>Just insight and alignment.</li>
                    </ul>


                </div>
            </div>

            {/* WhatsApp Floating Icon */}
            <a
                href="whatsapp://send?phone=0000000000"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect on WhatsApp"
                className="absolute bottom-6 right-6 z-20
                   rounded-full p-1
                   bg-white/10 backdrop-blur
                   hover:scale-110 hover:-translate-y-1
                   transition-all duration-300"
            >
                <Image
                    src="/whatsapp.jpeg"
                    alt="WhatsApp"
                    width={48}
                    height={48}
                    className="rounded-full shadow-xl"
                />
            </a>
        </section>
    );
}
