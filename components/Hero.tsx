import React from "react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="w-full h-[420px] md:h-[410px] 2xl:h-[550px] flex flex-col md:flex-row overflow-hidden">
            {/* Left: Text Block */}
            <div className="flex-1 flex flex-col justify-center items-start bg-gradient-to-r from-[#bf3505] to-[#f05813] p-8 md:p-16 min-h-[320px]">
                <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-2" style={{ fontFamily: "'Helvetica Now', Arial, Helvetica, sans-serif" }}>
                    from stuck<br />
                    <span className="bg-gradient-to-r from-[#dcb568] to-[#d4a344] text-transparent bg-clip-text pl-24">to freedom</span>
                </h1>
                <div className="text-2xl md:text-3xl font-semibold text-white mb-6" style={{ fontFamily: "'Helvetica Now', Arial, Helvetica, sans-serif" }}>
                    Release Hidden Patterns. Come Home to Yourself
                </div>
                <button className="bg-gradient-to-r from-[#dcb568] to-[#d4a344] text-[#b94a00] font-bold rounded px-6 py-3 mt-2 text-lg shadow-sm hover:bg-[#ffe7b2] transition">
                    Schedule A Clarity Call
                </button>
            </div>
            {/* Right: Hero Image */}
            <div className="flex-1 relative min-h-[320px]">
                <Image
                    src="/hero.jpg"
                    alt="Hero hands visual"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-none"
                    priority
                />
            </div>
        </section>
    );
}