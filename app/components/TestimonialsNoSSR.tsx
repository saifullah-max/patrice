"use client";

import dynamic from "next/dynamic";

const Testimonials = dynamic(() => import("./home/Testimonials"), {
  ssr: false,
});

export default Testimonials;
