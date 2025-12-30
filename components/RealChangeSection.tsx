import React from "react";
import Image from "next/image";

export default function RealChangeSection() {
  return (
    <section className="w-full flex justify-center py-20 px-12 bg-white">
      <div className="max-w-[1600px] w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Left: Centered Image on dark bg */}
        <div className="flex items-center justify-center w-full h-full min-h-[650px]">
          <div className="bg-[#28223a] flex items-center justify-center w-full max-w-[600px] h-full min-h-[550px] p-0">
            <Image
              src="/transforming-section.png"
              alt="Transforming Lives Visual"
              width={400}
              height={400}
              className="object-contain w-full h-full"
              priority
            />
          </div>
        </div>
        {/* Right: Text Block */}
        <div className="flex flex-col justify-center items-start px-2 md:px-0">
          <div className="uppercase text-sm tracking-widest text-[#3d3246] font-bold mb-4 font-sans" style={{fontFamily: "'Helvetica Now', Arial, Helvetica, sans-serif"}}>
            Transforming Lives
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-[#d95c1a]" style={{fontFamily: "'Times New Roman', Times, serif"}}>
            Where Real Change Begins
          </h2>
          <div className="text-lg md:text-xl font-sans text-[#3d3246] mb-4" style={{fontFamily: "'Helvetica Now', Arial, Helvetica, sans-serif"}}>
            True freedom begins when the body releases what the mind already understands.
          </div>
          <div className="text-lg md:text-xl font-sans text-[#3d3246] mb-4" style={{fontFamily: "'Helvetica Now', Arial, Helvetica, sans-serif"}}>
            My work clears <span className="font-bold">hidden emotional and energetic patterns</span> that drive stress, anxiety, self-doubt, and self-sabotage — even when you “know better.”
          </div>
          <div className="text-lg md:text-xl font-sans text-[#3d3246] mb-4" style={{fontFamily: "'Helvetica Now', Arial, Helvetica, sans-serif"}}>
            As these patterns release:
            <ul className="list-disc pl-6 mt-2">
              <li>your system settles</li>
              <li>reactions soften</li>
              <li>clarity and ease return</li>
            </ul>
          </div>
          <div className="text-lg md:text-xl font-sans text-[#3d3246] mt-2" style={{fontFamily: "'Helvetica Now', Arial, Helvetica, sans-serif"}}>
            This isn’t about fixing yourself.<br />
            It’s about freeing yourself from the patterns that have been running your life.
          </div>
        </div>
      </div>
    </section>
  );
}