import React from "react";

export default function SelfAwareSection() {
  return (
    <section className="w-full flex justify-center py-16 px-4 bg-white">
      <div className="max-w-6xl w-full">
        <div className="uppercase text-xs md:text-sm tracking-widest text-[#3d3246] mb-4 font-sans font-semibold" style={{fontFamily: "'Helvetica Now', Arial, Helvetica, sans-serif"}}>
          YOUR JOURNEY IN SELF-AWARENESS
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight mb-4" style={{fontFamily: "'Times New Roman', Times, serif"}}>
          <span className="block text-[#3d3246] font-bold">You are self-aware.</span>
          <span className="block text-[#3d3246] font-bold">You have done the work.</span>
          <span className="block text-[#3d3246] font-bold">Therapy. Coaching. Retreats. Books. Practices</span>
          <span className="block text-[#3d3246] font-bold mt-2">Yet something still feels stuck.</span>
          <span className="block text-[#3d3246] font-bold mt-2">Stress returns…Old reactions repeat…A quiet sense of “there must be more” lingers.</span>
          <span className="block text-[#DA5B00] font-bold mt-6">If this feels familiar, nothing is wrong with you.</span>
        </h2>
      </div>
    </section>
  );
}
