'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
    {
        name: "Anam Jangda",
        text: `I came to Dr. Patrice five years ago grieving a broken engagement and repeating old patterns. After a lifetime in therapy, I could analyze my pain but couldn’t feel where it truly lived—in my body.\n\nReal change began with her gentle blend of energy work: tapping and somatic healing. I moved from understanding my pain to releasing long-held patterns and reclaiming a grounded self.\n\nToday I’m engaged in a relationship rooted in emotional safety, mutual growth, and deep presence. I carry her integrative wisdom into my own psychotherapy practice.`,
        role: "Psychotherapist",
        location: "Karachi, Pakistan",
        img: "/testimonial-section.png"
    },
    {
        name: "Kanwer A. Saeed",
        text: `Working with Dr. Patrice Khan has been like opening a window to forgotten parts of myself.\n\nShe listens beyond words — to what the heart hides, to what the body remembers.\n\nThis journey has not been about fixing, but about remembering who I am beneath the noise.\n\nI walk away from each session a little more whole, a little more at peace.`,
        role: "Managing Partner at Ascend Consulting",
        location: "Karachi, Pakistan",
        img: "/testimonial-section.png"
    }
];

export default function TestimonialSection() {
    const [index, setIndex] = useState(0);

    // Auto-rotate every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const handleDotClick = (i: any) => {
        setIndex(i);
    };

    return (
        <section className="w-full py-12 px-16 flex flex-col items-center justify-center">
            <div className="max-w-[1600px] w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch min-h-[700px] mx-auto">

                {/* Left: Text */}
                <div className="flex flex-col justify-center pr-8 py-16">
                    <div
                        className="text-4xl md:text-5xl font-bold text-[#DA5B00] mb-6"
                        style={{ fontFamily: "'Times New Roman', Times, serif" }}
                    >
                        {testimonials[index].name}
                    </div>

                    <div
                        className="text-lg md:text-xl text-[#888] mb-8 max-w-xl"
                        style={{ fontFamily: "'Helvetica Now', Arial, Helvetica, sans-serif" }}
                    >
                        {testimonials[index].text.split('\n').map((line, i) => (
                            <p key={i} className="mb-4 last:mb-0">{line}</p>
                        ))}
                    </div>

                    <div
                        className="text-2xl font-bold text-[#3d3246] mt-4 mb-1"
                        style={{ fontFamily: "'Helvetica Now', Arial, Helvetica, sans-serif" }}
                    >
                        {testimonials[index].role}
                    </div>

                    <div
                        className="text-xl font-semibold text-[#3d3246] mb-6"
                        style={{ fontFamily: "'Helvetica Now', Arial, Helvetica, sans-serif" }}
                    >
                        {testimonials[index].location}
                    </div>

                    {/* Dots */}
                    <div className="flex gap-2 mt-8">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => handleDotClick(i)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === i
                                    ? "bg-[#DA5B00] opacity-90"
                                    : "bg-[#DA5B00] opacity-30"
                                    }`}
                                aria-label={`Go to testimonial ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Right: Image */}
                <div className="flex items-center justify-center">
                    <Image
                        src={testimonials[index].img}
                        alt="Testimonial visual"
                        width={700}
                        height={700}
                        className="object-cover w-full h-full max-w-[700px] max-h-[700px]"
                        priority
                    />
                </div>

            </div>
        </section>
    );
}
