"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export default function Testimonials() {
    const scrollRef = useRef<HTMLDivElement | null>(null);

    const [showLeftFade, setShowLeftFade] = useState(false);
    const [showRightFade, setShowRightFade] = useState(true);

    const testimonials = [
        {
            name: "Anam Jangda",
            role: "Psychotherapist | Karachi, Pakistan",
            image: "/assets/testimonial-author.png",
            title: "Grieving and Old patterns gone",
            text: `I could analyze my pain, but I couldn’t feel where it lived—in my body.
With Dr. Patrice, long-held patterns finally released.
After a broken engagement, I am now happily married.`,
        },
        {
            name: "Anam Jangda",
            role: "Psychotherapist | Karachi, Pakistan",
            image: "/assets/testimonial-author.png",
            title: "Grieving and Old patterns gone",
            text: `I could analyze my pain, but I couldn’t feel where it lived—in my body.
With Dr. Patrice, long-held patterns finally released.
After a broken engagement, I am now happily married.`,
        },
    ];

    const handleScroll = () => {
        const el = scrollRef.current;
        if (!el) return;

        const scrollLeft = el.scrollLeft;
        const maxScroll = el.scrollWidth - el.clientWidth;

        setShowLeftFade(scrollLeft > 10);
        setShowRightFade(scrollLeft < maxScroll - 10);
    };

    useEffect(() => {
        handleScroll();
    }, []);

    return (
        <section className="w-full py-16 px-4 md:px-0 relative bg-white overflow-hidden">

            {/* Heading */}
            <div className="flex justify-center flex-col text-center mb-6">
                <h1 className="text-black lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold">
                    Testimonials
                </h1>
                <p className="pt-4 text-black text-base md:text-lg xl:text-xl 2xl:text-2xl font-semibold">
                    Results that speak volume
                </p>
            </div>

            <div className="relative max-w-6xl mx-auto">

                {/* Slider */}
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex gap-8 overflow-x-auto pb-6 testimonials-scroll"
                >
                    {testimonials.map((item, i) => (
                        <div
                            key={i}
                            className="min-w-[90%] md:min-w-[700px] xl:min-w-[740px] rounded-xl p-8 flex flex-col justify-between"
                            style={{ background: "#FCEFE6" }}
                        >
                            <div>
                                <h3 className="font-bold text-base xl:text-lg 2xl:text-xl mb-6 text-black">
                                    {item.title}
                                </h3>

                                <svg width="40" height="35" viewBox="0 0 40 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 34.4492V28.2451C3.26531 27.7009 5.55103 26.5581 6.85715 24.8166C8.16327 23.0751 8.81633 19.973 8.81633 15.5104H0.489803L0.489803 0.000244141H16.4898L16.4898 13.0615C16.4898 19.8098 15.2381 25.0343 12.7347 28.7349C10.2313 32.5445 5.9864 34.4492 0 34.4492ZM23.5102 34.4492V28.2451C26.7755 27.7009 29.0612 26.5581 30.3673 24.8166C31.6735 23.0751 32.3265 19.973 32.3265 15.5104L24 15.5104L24 0.000244141H40V13.0615C40 19.8098 38.7483 25.0343 36.2449 28.7349C33.7415 32.5445 29.4966 34.4492 23.5102 34.4492Z" fill="#DA5B00" />
                                </svg>

                                <p className="text-gray-700 text-base xl:text-lg 2xl:text-xl leading-snug whitespace-pre-line mt-3">
                                    {item.text}
                                </p>
                            </div>

                            <div className="flex items-center gap-4 mt-30">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={48}
                                    height={48}
                                    className="rounded-full"
                                />
                                <div>
                                    <p className="font-semibold text-black">
                                        {item.name}
                                    </p>
                                    <p className="text-sm">
                                        {item.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Left Fade */}
                {showLeftFade && (
                    <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white/50 to-transparent"></div>
                )}

                {/* Right Fade */}
                {showRightFade && (
                    <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white/50 to-transparent"></div>
                )}

            </div>
        </section>
    );
}