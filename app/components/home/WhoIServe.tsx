import React from "react";
import Image from "next/image";

const personas = [
    {
        icon: "/assets/serve-sprinkle.png",
        title: "Capable but tired",
    },
    {
        icon: "/assets/serve-react.png",
        title: "Self aware but still looping",
    },
    {
        icon: "/assets/serve-leaf.png",
        title: "Functional, but carrying weight you can't name.",
    },
];

export default function WhoIServe() {
    return (
        <section className="px-6 py-8 md:px-10 lg:px-12 xl:px-14 flex justify-center relative overflow-hidden">
            {/* Circular background */}
            <Image
                src="/assets/serve-circulars.png"
                width={350}
                height={350}
                alt="styled circular lines"
                className="pointer-events-none absolute top-10 -right-10 opacity-80 z-0"
            />

            <div className="flex justify-center flex-col text-center relative z-10">
                <h1 className="text-black lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold">
                    Who I Serve
                </h1>
                <p className="pt-4 text-black text-base md:text-lg xl:text-xl 2xl:text-2xl font-medium flex flex-col">
                    <span>I guide conscious entrepreneurs, professionals and growth seekers.</span>
                    <span className="pt-4 font-semibold">I work with people who are:</span>
                </p>

                <div className="mt-12 px-10">
                    <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:gap-6 xl:gap-0">
                        {personas.map((persona, idx) => (
                            <React.Fragment key={persona.title}>
                                <div className="flex flex-col items-center text-center">
                                    <div className="mb-6 flex h-28 w-28 items-center justify-center md:h-32 md:w-32">
                                        <Image
                                            src={persona.icon}
                                            alt={persona.title}
                                            width={128}
                                            height={128}
                                            className="h-auto w-full"
                                        />
                                    </div>
                                    <h3
                                        className={`text-lg font-medium text-black md:text-xl whitespace-pre-line ${idx < 2 ? "whitespace-nowrap" : ""}`}
                                    >
                                        {persona.title}
                                    </h3>
                                </div>
                                {idx < personas.length - 1 && (
                                    <div className="hidden pt-12 md:block">
                                        <Image
                                            src="/assets/arrow.svg"
                                            alt="arrow"
                                            width={120}
                                            height={60}
                                            className="h-auto w-20 xl:w-25"
                                        />
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                <p className="mt-12 text-center text-base text-black/50 md:text-lg xl:text-xl flex flex-col">
                    <span>Your don't need more insight.</span>
                    <span className="text-black font-semibold">Your need release.</span>
                </p>
            </div>
        </section>
    );
}