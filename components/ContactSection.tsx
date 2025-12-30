import React from "react";
import Image from "next/image";

export default function ContactSection() {
    return (
        <section className="w-full bg-white py-12 px-12 flex flex-col items-center">
            <div className="max-w-[1600px] w-full grid grid-cols-1 md:grid-cols-2 min-h-[700px]">
                {/* Left: Image */}
                <div className="w-full h-full">
                    <Image
                        src="/contact.png"
                        alt="Contact visual"
                        width={500}
                        height={500}
                        className="object-cover w-full h-full"
                        priority
                    />
                </div>
                {/* Right: Form */}
                <div className="w-full h-full flex flex-col justify-center px-8 md:px-20 py-16 bg-white">
                    <div className="uppercase text-sm tracking-widest text-[#3d3246] font-bold mb-2 font-sans" style={{ fontFamily: "'Helvetica Now', Arial, Helvetica, sans-serif" }}>
                        Common Questions
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#3d3246] mb-8 leading-tight" style={{ fontFamily: "'Helvetica Now', Arial, Helvetica, sans-serif" }}>
                        If something<br />here resonates,<br />you’re welcome<br />to reach out
                    </h2>
                    <form className="flex flex-col gap-6 w-full">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-1 flex flex-col">
                                <label className="text-[#3d3246] text-base font-semibold mb-1">Name <span className="text-[#DA5B00]">*</span></label>
                                <input type="text" required className="border border-[#e6c36b]/40 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#e6c36b] bg-white placeholder:text-gray-500" placeholder="Enter your name" />
                            </div>
                            <div className="flex-1 flex flex-col">
                                <label className="text-[#3d3246] text-base font-semibold mb-1">Email <span className="text-[#DA5B00]">*</span></label>
                                <input type="email" required className="border border-[#e6c36b]/40 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#e6c36b] bg-white placeholder:text-gray-500" placeholder="Enter your email" />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-[#3d3246] text-base font-semibold mb-1">Phone</label>
                            <input type="tel" className="border border-[#e6c36b]/40 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#e6c36b] bg-white placeholder:text-gray-500" placeholder="Enter your number" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-[#3d3246] text-base font-semibold mb-1">Message</label>
                            <textarea rows={4} className="border border-[#e6c36b]/40 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#e6c36b] bg-white resize-none placeholder:text-gray-500" placeholder="Enter your message" />
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" id="consent" className="accent-[#DA5B00] w-4 h-4" />
                            <label htmlFor="consent" className="text-sm text-[#3d3246]">I agree that my submitted data is being <span className="text-[#DA5B00]">collected and stored.</span></label>
                        </div>
                        <button type="submit" className="w-full md:w-[220px] bg-gradient-to-r from-[#ffb36b] to-[#DA5B00] text-white font-bold rounded px-6 py-3 mt-2 text-lg shadow-sm hover:from-[#ff9a3c] hover:to-[#b94a00] transition self-start md:self-auto">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
