'use client'
import React from "react";
import Image from "next/image";

export default function AwarenessSection() {
    return (
        <section className="w-full flex justify-center py-0 px-6 md:px-12 bg-gradient-to-b from-[#e67c2b] to-[#DA5B00] relative overflow-hidden min-h-[700px]">
            <div className="max-w-[1600px] w-full mx-auto flex flex-col items-center pt-12 pb-0">
                {/* Top: Centered Heading and Subheading */}
                <div className="w-full flex flex-col items-center mb-8">
                    <div className="uppercase text-sm tracking-widest text-white font-bold mb-6 font-sans text-center" style={{ fontFamily: "'Helvetica Now', Arial, Helvetica, sans-serif" }}>
                        Awareness isn’t the problem
                    </div>
                    <h2 className="text-white text-5xl md:text-6xl font-serif font-bold leading-tight text-center" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                        Insight alone doesn’t<br />create lasting change.
                    </h2>
                </div>

                {/* Bottom: Text left, Image right */}
                <div className="w-full flex flex-col md:flex-row items-center justify-center">
                    {/* Left: Paragraphs */}
                    <div className="flex-1 flex flex-col justify-center items-start max-w-[700px] md:pl-12">
                        <div className="space-y-8 text-lg md:text-xl font-sans text-white" style={{ fontFamily: "'Helvetica Now', Arial, Helvetica, sans-serif" }}>
                            <p>Most thoughts, habits, and emotional reactions are driven by <span className="font-extrabold">subconscious patterns</span> stored in the body and nervous system — long before the mind can intervene.</p>
                            <p>That’s why talk therapy, mindset work, and willpower often reach a limit.</p>
                            <p>Real change happens <span className="font-extrabold">beneath awareness.</span></p>
                        </div>
                    </div>

                    {/* Right: Square Image */}
                    <div className="flex-1 flex items-center justify-center mt-10 md:mt-0">
                        <div className="flex items-center justify-center w-[400px] h-[400px]">
                            <Image
                                src="/awareness-section.png"
                                alt="Awareness visual"
                                width={500}
                                height={500}
                                className="object-cover rounded-2xl w-full h-full"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
