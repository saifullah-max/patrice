import React from "react";
import Image from "next/image";

export default function WhyWorkWithPatrice() {
  return (
    <section className="w-full flex justify-center py-20 px-4 bg-white">
      <div className="max-w-6xl w-full flex flex-col gap-10">
        {/* Heading and intro */}
        <div>
          <div className="flex flex-col uppercase text-xs md:text-sm tracking-widest text-[#3d3246] mb-2 font-sans font-semibold" style={{fontFamily: "'Helvetica Now', Arial, Helvetica, sans-serif"}}>
            Why Work With <span className="text-[#d95c1a] mt-4 text-lg md:text-4xl 2xl:text-5xl pl-3 font-extrabold">Dr. Patrice Khan</span>
          </div>
        </div>
        {/* Divider */}
        <hr className="border-t border-[#e6c36b] my-1" />
        {/* Two-column: left text, right image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4 items-center">
          {/* Left: Text */}
          <div className="text-[1.35rem] md:text-[1.45rem] font-sans text-black leading-relaxed pl-2" style={{fontFamily: "'Helvetica Now', Arial, Helvetica, sans-serif"}}>
            I am Dr. Patrice Khan — an intuitive energy therapist, often called an <span className="italic">Ambassador to the Invisible.</span>
            <br /><br />
            Think of me as your intuitive guide.<br />
            I gently illuminate what has been hidden, helping you reconnect with your inner truth, clarity, and power.
            <br /><br />
            This is not abstract spirituality.<br />
            It is a precise, embodied process where awareness becomes transformation.
          </div>
          {/* Right: Image */}
          <div className="flex items-center justify-center w-full">
            <Image
              src="/whywork-section.png"
              alt="Why Work With Patrice"
              width={700}
              height={420}
              className="object-cover rounded-2xl shadow-xl w-full h-[320px] md:h-[420px]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
