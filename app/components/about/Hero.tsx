import Image from "next/image";

export default function AboutHero() {
    return (
        <section className="max-w-7xl mx-auto w-full pt-12 px-6 md:px-10 lg:grid-cols-5 lg:px-12 xl:px-14 relative bg-white overflow-visible">
            <div className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-7 items-stretch gap-12 lg:gap-16 xl:gap-24">
                    <div className="relative col-span-3">
                        <div
                            className="w-107.5 h-150 md:w-112.5 md:h-175 lg:w-125 lg:h-200 xl:w-137.5 xl:h-225 
        rounded-t-[320px] overflow-hidden p-px"
                            // style={{ background: "linear-gradient(to right, var(--dark-gold), var(--light-gold))" }}
                            style={{ background: "var(--dark-gold)" }}
        >
                            {/* White layer */}
                            <div className="relative h-full w-full bg-white p-1.5 rounded-t-[inherit]">

                                {/* Inner border layer */}
                                <div
                                    className="relative h-full w-full overflow-hidden rounded-t-[inherit] border p-1"
                                    style={{ borderColor: "var(--light-gold)" }}
                                >
                                    <Image
                                        src="/assets/Dr-patrice.jpg"
                                        alt="Dr. Patrice Khan"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Text and button */}
                    <div className="relative flex flex-col justify-center items-start col-span-4 lg:pl-10 xl:pl-16 2xl:pl-20 h-full">
                        <h1 className="text-[#3E2925] text-3xl lg:text-4xl xl:text-5xl mb-2 font-bold">
                            About Dr. Patrice Khan
                        </h1>
                        <p className="text-lg lg:text-xl xl:text-2xl text-black">Energy Therapist & Subconscious Alchemist</p>
                        <div className="flex flex-col gap-2 lg:gap-4 xl:gap-6 pt-10 lg:pt-12 xl:pt-16">
                            <h1 className="text-[#3E2925] text-3xl lg:text-4xl xl:text-5xl mb-2 font-bold">
                                Think of Me as Your Intuitive Guide
                            </h1>

                            <p className="flex flex-col gap-1 text-xl lg:text-2xl xl:text-[26px] text-black">
                                <span>I gently hold up a mirror</span>
                                <span className="text-(--light-orange) font-semibold">so you can see the parts of yourself —</span>
                                <span className="text-(--light-orange) font-semibold">you did not even know were there.</span>
                                <span>the ones shaping your thoughts, emotions, and patterns.</span>
                            </p>

                            <p className="flex flex-col gap-1 text-xl lg:text-2xl xl:text-[26px] text-black">
                                <span>This is where old patterns live.</span>
                                <span>Where truth has been quietly waiting.</span>
                                <span>From there,</span>
                                <span>Clarity emerges.</span>
                                <span>Power returns.</span>
                            </p>
                        </div>

                        {/* Small 42px SVG below the button */}
                        <svg
                            className="mt-12 w-10.5 h-10.5 pointer-events-none absolute -bottom-30 right-55"
                            viewBox="0 0 21 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                opacity="0.5"
                                d="M3.55163 0L11.0325 5.59115L20.1464 3.55168L14.5553 11.0325L16.5948 20.1464L9.11393 14.5553L0 16.5948L5.59111 9.11397L3.55163 0Z"
                                fill="url(#paint0_linear_158_1454)"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            {/* Top-right extreme SVG */}
            <svg
                className="absolute top-30 right-10 w-28 h-28 pointer-events-none"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    opacity="0.5"
                    d="M3.55163 0L11.0325 5.59115L20.1464 3.55168L14.5553 11.0325L16.5948 20.1464L9.11393 14.5553L0 16.5948L5.59111 9.11397L3.55163 0Z"
                    fill="url(#paint0_linear_158_1454)"
                />
            </svg>
        </section>
    );
}