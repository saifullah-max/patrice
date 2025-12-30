
import React from "react";
import Image from "next/image";

export default function WhoIServe() {
    return (
        <section className="w-full py-16 px-12 bg-[#e46d13]">
            <div className="max-w-full w-full">
                {/* Top Heading and Content Column */}
                <div className="w-full flex flex-col items-start bg-[#e46d13] pb-8">
                    {/* Heading */}
                    <div className="w-full flex justify-start px-4 md:px-0">
                        <h2 className="text-xl md:text-5xl font-serif font-bold leading-none mb-4" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                            <span className="text-white">Who</span> <span className="text-[#3d3246]">I Serve</span>
                        </h2>
                    </div>

                    {/* Description */}
                    <div className="w-full flex justify-end px-4 md:px-0">
                        <p className="text-xl md:text-xl text-white max-w-3xl" style={{ fontFamily: "'Helvetica Now', Arial, Helvetica, sans-serif" }}>
                            I support professionals, conscious entrepreneurs, and growth-seekers who are outwardly capable – yet inwardly tired of carrying invisible weight.
                        </p>
                    </div>
                </div>


                {/* Cards Grid: 2 rows, 4 columns */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
                    {/* Card 1: Text */}
                    <div className="bg-white rounded-none p-10 flex flex-col items-start text-left shadow-sm hover:shadow-lg transition-all duration-300 min-h-[320px]">
                        <h3 className="text-3xl font-bold text-[#3d3246] mb-6" style={{ fontFamily: "'Helvetica Now', Arial, Helvetica, sans-serif" }}>Professional</h3>
                        <div className="text-xl text-gray-500 mb-8" style={{ fontFamily: "'Helvetica Now', Arial, Helvetica, sans-serif" }}>
                            Experience the healing power of sound through sessions
                        </div>
                        <div className="mt-auto text-lg font-bold text-[#3d3246]" style={{ fontFamily: "'Helvetica Now', Arial, Helvetica, sans-serif" }}>Discover More</div>
                    </div>
                    {/* Card 2: Image */}
                    <div className="bg-white rounded-none flex items-center justify-center overflow-hidden min-h-[320px]">
                        <Image src="/who-i-serve-1.png" alt="Professional" width={340} height={320} className="object-cover w-full h-full" />
                    </div>
                    {/* Card 3: Text */}
                    <div className="bg-white rounded-none p-10 flex flex-col items-start text-left shadow-sm hover:shadow-lg transition-all duration-300 min-h-[320px]">
                        <h3 className="text-3xl font-bold text-[#3d3246] mb-6" style={{ fontFamily: "'Helvetica Now', Arial, Helvetica, sans-serif" }}>Entrepreneurs</h3>
                        <div className="text-xl text-gray-500 mb-8" style={{ fontFamily: "'Helvetica Now', Arial, Helvetica, sans-serif" }}>
                            Join us for immersive group sound baths and engaging workshops
                        </div>
                        <div className="mt-auto text-lg font-bold text-[#3d3246]" style={{ fontFamily: "'Helvetica Now', Arial, Helvetica, sans-serif" }}>Discover More</div>
                    </div>
                    {/* Card 4: Image */}
                    <div className="bg-white rounded-none flex items-center justify-center overflow-hidden min-h-[320px]">
                        <Image src="/who-i-serve-2.png" alt="Entrepreneurs" width={340} height={320} className="object-cover w-full h-full" />
                    </div>
                    {/* Card 5: Image */}
                    <div className="bg-white rounded-none flex items-center justify-center overflow-hidden min-h-[320px]">
                        <Image src="/who-i-serve-3.png" alt="Conscious" width={340} height={320} className="object-cover w-full h-full" />
                    </div>
                    {/* Card 6: Text */}
                    <div className="bg-white rounded-none p-10 flex flex-col items-start text-left shadow-sm hover:shadow-lg transition-all duration-300 min-h-[320px]">
                        <h3 className="text-3xl font-bold text-[#3d3246] mb-6" style={{ fontFamily: "'Helvetica Now', Arial, Helvetica, sans-serif" }}>Conscious</h3>
                        <div className="text-xl text-gray-500 mb-8" style={{ fontFamily: "'Helvetica Now', Arial, Helvetica, sans-serif" }}>
                            Rejuvenate your mind and body through sound therapy
                        </div>
                        <div className="mt-auto text-lg font-bold text-[#3d3246]" style={{ fontFamily: "'Helvetica Now', Arial, Helvetica, sans-serif" }}>Discover More</div>
                    </div>
                    {/* Card 7: Image */}
                    <div className="bg-white rounded-none flex items-center justify-center overflow-hidden min-h-[320px]">
                        <Image src="/who-i-serve-4.png" alt="Growth Seeker" width={340} height={320} className="object-cover w-full h-full" />
                    </div>
                    {/* Card 8: Text */}
                    <div className="bg-white rounded-none p-10 flex flex-col items-start text-left shadow-sm hover:shadow-lg transition-all duration-300 min-h-[320px]">
                        <h3 className="text-3xl font-bold text-[#3d3246] mb-6" style={{ fontFamily: "'Helvetica Now', Arial, Helvetica, sans-serif" }}>Growth Seeker</h3>
                        <div className="text-xl text-gray-500 mb-8" style={{ fontFamily: "'Helvetica Now', Arial, Helvetica, sans-serif" }}>
                            Join our community for immersive sound bath experiences
                        </div>
                        <div className="mt-auto text-lg font-bold text-[#3d3246]" style={{ fontFamily: "'Helvetica Now', Arial, Helvetica, sans-serif" }}>Discover More</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
