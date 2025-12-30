'use client'
import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Kanwer A. Saeed",
    text: `Working with Dr. Patrice Khan has been like opening a window to forgotten parts of myself. In her presence, old stories soften, and what once felt heavy begins to breathe again.\n\nShe listens beyond words — to what the heart hides, to what the body remembers. Through her gentle questions and steady light, I’ve been able to return to my past with kindness and reimagine it with love.\n\nThis journey with her has not been about fixing, but about remembering…who I am beneath the noise, beneath the years. I walk away from each session a little more whole, a little more at peace.\n\nGrateful for the grace Dr. Patrice brings, and the mirror she holds up so gently.`,
    role: "Managing Partner at Ascend Consulting",
    location: "Karachi, Pakistan",
    img: "/testimonial-section.png"
  },
  // Add more testimonials as needed
];

export default function TestimonialSection() {
    // Only one testimonial for now, but keep index for future
    const [index, setIndex] = useState(0);
    return (
        <section className="w-full  py-0 px-16 flex flex-col items-center justify-center">
            <div className="max-w-[1600px] w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch min-h-[700px] mx-auto">
                {/* Left: Text Block */}
                <div className="flex flex-col justify-center pr-8 py-16">
                    <div className="text-4xl md:text-5xl font-bold text-[#DA5B00] mb-6" style={{ fontFamily: "'Times New Roman', Times, serif" }}>{testimonials[index].name}</div>
                    <div className="text-lg md:text-xl text-[#888] mb-8 max-w-xl" style={{ fontFamily: "'Helvetica Now', Arial, Helvetica, sans-serif" }}>
                        {testimonials[index].text.split('\n').map((line, i) => (
                            <p key={i} className="mb-4 last:mb-0">{line}</p>
                        ))}
                    </div>
                    <div className="text-2xl font-bold text-[#3d3246] mt-4 mb-1" style={{ fontFamily: "'Helvetica Now', Arial, Helvetica, sans-serif" }}>{testimonials[index].role}</div>
                    <div className="text-xl font-semibold text-[#3d3246] mb-6" style={{ fontFamily: "'Helvetica Now', Arial, Helvetica, sans-serif" }}>{testimonials[index].location}</div>
                    {/* Dots */}
                    <div className="flex gap-2 mt-8">
                        <span className="w-3 h-3 rounded-full bg-[#DA5B00] opacity-80" />
                        <span className="w-3 h-3 rounded-full bg-[#DA5B00] opacity-30" />
                    </div>
                </div>
                {/* Right: Image */}
                <div className="flex items-center justify-center bg-transparent">
                    <div className="w-full h-full flex items-center justify-center">
                        <Image
                            src={testimonials[index].img}
                            alt="Testimonial visual"
                            width={700}
                            height={700}
                            className="object-cover w-full h-full max-w-[700px] max-h-[700px] rounded-none"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}