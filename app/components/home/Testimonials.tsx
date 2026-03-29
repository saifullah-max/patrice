"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";

export default function Testimonials() {
    const [startIndex, setStartIndex] = useState(0);

    const testimonials = [
        {
            name: "Kanwer Saeed",
            role: "Managing Partner, Ascending Consulting | Karachi, Pakistan",
            text: `The journey with Dr. Patrice hasn't been about fixing. Its been about remembering who i am beneath the noise.
I feel more whole. More peace. I can breathe.`,
        },
        {
            name: "N.A.",
            role: "Conscious Growth Seeker | Karachi, Pakistan.",
            text: `I sought out Patrice during a period of severe anxiety and burnout, feeling completely closed off from myself and unable to process years of accumulated trauma. Despite having tried many therapists globally without success, I felt an immediate sense of safety and "home" the moment I met her. Her amazing energy.`,
        },
        {
            name: "Client",
            role: "Entrepreneur | UAE",
            text: `For the first time, I felt regulation in my body, not just understanding in my mind. The shifts were subtle, then undeniable.`,
        },
    ];

    const cardsPerPage = 2;
    const hasPagination = testimonials.length > cardsPerPage;
    const maxStartIndex = Math.max(0, testimonials.length - cardsPerPage);

    const visibleTestimonials = useMemo(
        () => testimonials.slice(startIndex, startIndex + cardsPerPage),
        [startIndex, testimonials],
    );

    const canGoPrev = hasPagination && startIndex > 0;
    const canGoNext = hasPagination && startIndex < maxStartIndex;

    const goPrev = () => {
        if (!canGoPrev) return;
        setStartIndex((prev) => Math.max(0, prev - 1));
    };

    const goNext = () => {
        if (!canGoNext) return;
        setStartIndex((prev) => Math.min(maxStartIndex, prev + 1));
    };

    return (
        <section className="max-w-7xl mx-auto relative w-full overflow-hidden bg-white px-6 pt-12 md:px-10 lg:px-12 xl:px-14">

            {/* Heading */}
            <div className="flex justify-center flex-col text-center mb-6">
                <h1 className="text-black text-2xl lg:text-3xl xl:text-[44px] font-bold text-center mb-6">
                    Testimonials
                </h1>
            </div>

            <div className="relative max-w-7xl mx-auto">

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {visibleTestimonials.map((item, i) => (
                        <article
                            key={`${item.name}-${startIndex}-${i}`}
                            className="rounded-xl p-8 flex min-h-107.5 flex-col justify-between"
                            style={{ background: "#FCEFE6" }}
                        >
                            <div>

                                <svg width="40" height="35" viewBox="0 0 40 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 34.4492V28.2451C3.26531 27.7009 5.55103 26.5581 6.85715 24.8166C8.16327 23.0751 8.81633 19.973 8.81633 15.5104H0.489803L0.489803 0.000244141H16.4898L16.4898 13.0615C16.4898 19.8098 15.2381 25.0343 12.7347 28.7349C10.2313 32.5445 5.9864 34.4492 0 34.4492ZM23.5102 34.4492V28.2451C26.7755 27.7009 29.0612 26.5581 30.3673 24.8166C31.6735 23.0751 32.3265 19.973 32.3265 15.5104L24 15.5104L24 0.000244141H40V13.0615C40 19.8098 38.7483 25.0343 36.2449 28.7349C33.7415 32.5445 29.4966 34.4492 23.5102 34.4492Z" fill="#DA5B00" />
                                </svg>

                                <p className="mt-6 whitespace-pre-line text-black text-lg lg:text-xl xl:text-2xl leading-relaxed">
                                    {item.text}
                                </p>
                            </div>

                            <div className="mt-2">
                                <p className="text-black font-semibold text-base lg:text-lg xl:text-xl">{item.name}</p>
                                <p className="text-(--dark-orange) text-xs xl:text-sm">{item.role}</p>
                            </div>
                        </article>
                    ))}
                </div>

                {canGoPrev && (
                    <button
                        type="button"
                        onClick={goPrev}
                        aria-label="Previous testimonials"
                        className="absolute left-0 top-1/2 -translate-x-12 -translate-y-1/2 text-black/40 transition hover:text-black"
                    >
                        <ChevronLeft className="h-10 w-10" strokeWidth={1.5} />
                    </button>
                )}

                {canGoNext && (
                    <button
                        type="button"
                        onClick={goNext}
                        aria-label="Next testimonials"
                        className="absolute right-0 top-1/2 translate-x-12 -translate-y-1/2 text-black/40 transition hover:text-black"
                    >
                        <ChevronRight className="h-10 w-10" strokeWidth={1.5} />
                    </button>
                )}
            </div>
        </section>
    );
}