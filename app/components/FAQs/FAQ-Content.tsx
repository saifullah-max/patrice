"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQContent() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "What is Energy Therapy?",
            answer: "Energy Therapy works with the subtle and subconscious layers of the mind–body system. Rather than focusing only on thoughts or analysis, it supports nervous-system regulation, emotional patterns, and deeper imprints that influence how you experience life. Many clients describe the process as clearing internal “static,” allowing greater clarity, calm, and creativity to emerge more naturally."
        },
        {
            question: "How is Energy Therapy different from Coaching or traditional Talk Therapy?",
            answer: "Coaching often focuses on goals, strategy, and forward movement. Talk Therapy typically explores experiences through conversation and conscious reflection. Energy Therapy complements these approaches by working beneath conscious thought — supporting the nervous system and subconscious patterns that may not shift through insight alone."
        },
        {
            question: "What happens during a session?",
            answer: "Sessions start with a conversation. It progresses into intuitive, body-aware and body release processes. You remain fully conscious and in control at all times. Depending on your needs, we may work with gentle energy techniques, somatic awareness, subconscious clearing processes, or guided reflection. Each session follows your system’s natural pace rather than a fixed formula."
        },
        {
            question: "How many sessions will I need?",
            answer: "Every person’s journey is unique. Some clients notice meaningful shifts after just one or two sessions, while others choose ongoing support during deeper transitions or periods of change. During your initial call, we’ll explore your goals and create a rhythm that feels supportive and sustainable."
        },
        {
            question: "Do I need to believe in energy work for it to work?",
            answer: "No specific belief system is required. Many clients approach this work from a practical, results-focused perspective. The process supports awareness, nervous-system regulation, and subconscious change — whether you view it through a scientific, psychological, or spiritual lens."
        },
        {
            question: "Is this compatible with my religious or cultural background?",
            answer: "Yes. This work is not tied to any single religion or belief system. It respects and honors your personal values, spiritual practices, and cultural context. Many clients find it strengthens their sense of connection within their own traditions."
        },
        {
            question: "Is this therapy or medical treatment?",
            answer: "This work supports emotional well-being and nervous-system regulation, but it is not a substitute for medical care. Clients can integrate sessions alongside therapy, coaching, or other wellness practices."
        },
        {
            question: "Are sessions in person or online?",
            answer: "In-person sessions are currently offered in Karachi, Pakistan only. Online sessions are offered via Zoom, WhatsApp, or FaceTime, allowing you to work from the comfort of your own space — which often helps the nervous system feel safer and more receptive."
        },
        {
            question: "What is the difference between Freedom Codes and Reset Codes?",
            answer: "Freedom Codes focuses on patterns shaped through your personal life experience. Reset Codes works with inherited and ancestral patterns that may be held across generations. Both approaches support regulation, awareness, and deeper emotional freedom — simply through different entry points."
        }
    ];

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full bg-white">
            <div className="max-w-7xl mx-auto w-full px-6 py-12 md:px-10 lg:px-12 xl:px-14 lg:py-18 xl:py-22">
                {/* Heading */}
                <div className="text-center mb-10 lg:mb-14">
                    <h2 className="text-[#3E2925] text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
                        What Clients Often Ask
                    </h2>

                    <p className="mx-auto text-center mt-4 max-w-6xl text-black text-xl lg:text-2xl xl:text-3xl leading-snug">
                        Beginning something new naturally brings questions. Below you will find thoughtful guidance to help you understand the work, what to expect, and how to know if this approach feels right for you.
                    </p>
                </div>

                {/* Accordion Items */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className="rounded-lg overflow-hidden border border-transparent max-w-2xl mx-auto relative"
                                style={{ background: "#FCEFE6" }}
                            >
                                {/* Question Header */}
                                <button
                                    type="button"
                                    onClick={() => toggleAccordion(index)}
                                    className={`w-full flex items-center justify-between px-6 py-5 lg:px-8 lg:py-6 text-left hover:opacity-90 relative z-10 transition-[transform,opacity] duration-700 ease-in-out ${isOpen ? "-translate-y-2" : "translate-y-0"
                                        }`}
                                    aria-expanded={isOpen}
                                >
                                    <h3 className="text-black text-xl lg:text-2xl xl:text-[26px] leading-snug pr-4 pb-4">
                                        {faq.question}
                                    </h3>
                                    <ChevronDown
                                        className={`h-5 w-5 lg:h-6 lg:w-6 shrink-0 text-black transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                            }`}
                                        strokeWidth={2}
                                    />
                                </button>

                                {/* Bottom border line (inset from card walls) */}
                                <div
                                    className={`absolute left-6 right-6 lg:left-8 lg:right-8 h-px bg-black/20 transition-all duration-500 ${isOpen ? "top-auto bottom-0" : "bottom-2"
                                        }`}
                                />

                                {/* Answer Content */}
                                <div
                                    className="overflow-hidden transition-[max-height,opacity,transform] duration-700 ease-in-out origin-center"
                                    style={{
                                        maxHeight: isOpen ? "420px" : "0px",
                                        opacity: isOpen ? 1 : 0,
                                        transform: isOpen ? "scaleY(1)" : "scaleY(0.85)",
                                    }}
                                >
                                    <div
                                        className="px-6 pb-5 lg:px-8 lg:pb-6 pt-0 border-t border-black/10 transition-[clip-path,opacity] duration-700 ease-in-out"
                                        style={{
                                            clipPath: isOpen ? "inset(0 0 0 0)" : "inset(50% 0 50% 0)",
                                            opacity: isOpen ? 1 : 0,
                                        }}
                                    >
                                        <p className="pt-4 text-black text-base lg:text-lg xl:text-xl leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mx-auto max-w-5xl text-center pt-10 lg:pt-14 xl:pt-18">
                    <h2 className="text-[#3E2925] text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight">
                        Your Turn to Experience It!
                    </h2>

                    <p className="mx-auto mt-4 max-w-5xl text-black text-xl lg:text-2xl xl:text-3xl leading-snug">
                        If this feels familiar, it may be time to write your own chapter. Growth doesn’t happen overnight — it happens through small, meaningful progress.
                    </p>

                    <div className="relative inline-block w-fit mt-8 lg:mt-12">
                        {/* Offset border shape */}
                        <div className="absolute top-2.5 -left-1.5 w-full h-full rounded-r-full border-2 border-black z-50"></div>
                        {/* Button */}
                        <button
                            className="relative py-4 px-10 rounded-r-full text-white font-medium text-sm lg:text-base xl:text-lg"
                            style={{
                                background: 'linear-gradient(to right, var(--light-orange), var(--dark-orange))'
                            }}
                        >
                            Schedule A Session.
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
