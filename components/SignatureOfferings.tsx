import React from "react";
import Image from "next/image";

const offerings = [
    {
        label: "HEART CODES",
        img: "/offer-1.png",
        author: "shoaibishrat.87@gmail.com",
        authorImg: "/author.png",
    },
    {
        label: "RESET CODES",
        img: "/offer-2.png",
        author: "shoaibishrat.87@gmail.com",
        authorImg: "/author.png",
    },
    {
        label: "FREEDOM CODES",
        img: "/offer-3.png",
        author: "shoaibishrat.87@gmail.com",
        authorImg: "/author.png",
    },
];

export default function SignatureOfferings() {
    return (
        <section className="w-full py-16 px-16 bg-white">
                <div className="flex flex-col text-center uppercase text-xs md:text-base tracking-widest text-[#3d3246] font-sans font-semibold" style={{ fontFamily: "'Helvetica Now', Arial, Helvetica, sans-serif" }}>
                    Why Work With
                </div>
            <div className="max-w-7xl mx-auto flex flex-col gap-10 items-center">
                <div className="text-center">
                    <h2 className="text-[3.5rem] md:text-[4.5rem] font-serif font-normal text-[#3d3246] mb-2 tracking-tight" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                        Lorem Ispum <span className="text-[#d95c1a] font-semibold">Offerings</span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
                    {offerings.map((offering, idx) => (
                        <div
                            key={offering.label}
                            className="bg-white rounded-2xl border border-[#f3e3c6] flex flex-col items-center overflow-hidden transition-transform duration-200 hover:-translate-y-1"
                        >
                            {/* Image */}
                            <div className="w-full h-[220px] md:h-[240px] relative">
                                <Image
                                    src={offering.img}
                                    alt={offering.label}
                                    fill
                                    className="object-cover w-full h-full"
                                    style={{ borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
                                    priority={idx === 0}
                                />
                                {/* Bookmark icon placeholder */}
                                <div className="absolute top-3 right-3 w-6 h-6 bg-[#fff6] rounded-full flex items-center justify-center">
                                    <svg width="18" height="18" fill="none" stroke="#d95c1a" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 4a2 2 0 0 0-2 2v14l8-5.333L20 20V6a2 2 0 0 0-2-2H6z" /></svg>
                                </div>
                            </div>
                            {/* Card Content */}
                            <div className="w-full flex flex-col items-center px-6 py-6">
                                {/* Stars */}
                                <div className="flex gap-1 mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} width="22" height="22" fill="none" stroke="#d95c1a" strokeWidth="2" viewBox="0 0 24 24"><polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" fill="none" /></svg>
                                    ))}
                                </div>
                                {/* Title */}
                                <div className="text-2xl font-bold text-[#3d3246] mb-1 text-center" style={{ fontFamily: "'Helvetica Now', Arial, Helvetica, sans-serif" }}>{offering.label}</div>
                                {/* Author */}
                                <div className="flex items-center gap-2 mb-4">
                                    <Image src={offering.authorImg} alt="author" width={32} height={32} className="rounded-full" />
                                    <span className="text-base text-[#888]">By <span className="text-[#d95c1a]">{offering.author}</span></span>
                                </div>
                                {/* Button */}
                                <button className="w-full border-2 border-[#d95c1a] text-[#d95c1a] font-semibold rounded-lg py-2 mt-2 text-lg transition hover:bg-[#d95c1a] hover:text-white">
                                    Start Learning
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
