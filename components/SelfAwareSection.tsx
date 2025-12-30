import React from "react";
import Image from "next/image";

export default function SelfAwareSection() {
    return (
        <section className="w-full flex flex-col items-center px-16">
            {/* Conversation Block */}
            <div className="w-full flex flex-col items-center y-12 pt-24 px-2 md:px-0">
                <div className="max-w-6xl w-full text-center">
                    <div className="text-xl md:text-3xl font-serif text-black mb-4" style={{fontFamily: "'Times New Roman', Times, serif"}}>
                        You are self-aware. You have done the work.
                    </div>
                    <div className="text-2xl md:text-6xl font-serif text-[#d95c1a] mb-6" style={{fontFamily: "'Times New Roman', Times, serif"}}>
                        Therapy. Coaching. Retreats. Books. Practices.
                    </div>
                    <div className="text-lg md:text-3xl text-black mb-4" style={{fontFamily: "'Helvetica Now', Arial, Helvetica, sans-serif"}}>
                        Yet something still feels stuck. Stress returns. Old reactions repeat. A quiet sense of
                        <span className="italic text-[#444]"> "there must be more" </span>lingers.
                    </div>
                    <div className="text-lg md:text-3xl text-[#d95c1a] mt-2" style={{fontFamily: "'Helvetica Now', Arial, Helvetica, sans-serif"}}>
                        If this feels familiar, nothing is wrong with you.
                    </div>
                </div>
            </div>
            {/* Subtle gradient fade at bottom */}
            <div className="w-full h-24 bg-gradient-to-b from-white to-[#f6f6f9]" />
        </section>
    );
}