import React from "react";
import Image from "next/image";

const personas = [
    {
        icon: "/assets/who-i-serve-1.png",
        title: "Functional, yet strained",
    },
    {
        icon: "/assets/who-i-serve-2.png",
        title: "Capable, yet depleted",
    },
    {
        icon: "/assets/who-i-serve-3.png",
        title: "Holding, yet fracturing",
    },
];

export default function WhoIServe() {
    return (
        <section className="py-8 lg:py-12 xl:py-16 px-6 pt-12 md:px-10 lg:px-12 xl:px-14 flex justify-center relative overflow-hidden max-w-7xl mx-auto">
            <div className="text-center relative z-10">
                <h1 className="text-black text-2xl lg:text-3xl xl:text-[44px] font-bold text-center">
                    Who I Serve
                </h1>
                <p className="pt-4 text-black text-xl md:text-2xl xl:text-3xl flex flex-col">
                    <span>I guide conscious entrepreneurs, professionals and growth seekers.</span>
                    <span className="pt-4 font-satisfy">I work with people who are:</span>
                </p>

                <div className="mt-12">
                    <div className="grid grid-cols-1 items-start gap-2 md:grid-cols-3 md:gap-6 xl:gap-22">
                        {personas.map((persona, idx) => (
                            <React.Fragment key={persona.title}>
                                <div className="flex flex-col items-center text-center">
                                    <div className="flex items-center justify-center
                w-32 h-32
                sm:w-28 sm:h-28
                md:w-32 md:h-32
                lg:w-40 lg:h-40
                xl:w-[261px] xl:h-[261px]
                2xl:w-[261px] 2xl:h-[261px]">
                                        <Image
                                            src={persona.icon}
                                            alt={persona.title}
                                            width={261}
                                            height={261}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <h3 className="text-xl font-medium text-black lg:text-2xl xl:text-3xl mb-6">
                                        {(() => {
                                            const [first, second] = persona.title.split(",");
                                            return (
                                                <>
                                                    <span>{first}, {" "}</span>
                                                    <span className="font-satisfy">{second.trim()}</span>
                                                </>
                                            );
                                        })()}
                                    </h3>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                <p className="text-center text-2xl text-(--dark-orange) font-satisfy lg:text-3xl xl:text-4xl">
                    You don't need more insight, you need release.
                </p>
            </div>
        </section>
    );
}