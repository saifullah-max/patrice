import Image from "next/image";

export default function AboutTherapist() {
    return (
        <section className="w-full py-12 px-4 md:px-0 relative bg-white overflow-visible">
            {/* Background tree */}
            <Image
                src="/assets/about-tree.png"
                alt="decorative leaf"
                width={400}
                height={400}
                className="pointer-events-none absolute top-72 right-44 -translate-y-1/4 opacity-90 z-0 hidden md:block"
            />

            <h1 className="text-black lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-center mb-6 relative z-10">
                About Your Therapist
            </h1>

            <div className="flex justify-center relative z-10">
                <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
                    {/* Left: Arched photo */}
                    <div className="flex justify-start relative">
                        <div
                            className="relative p-[2px] w-[320px] h-[400px] md:w-[350px] md:h-[440px] lg:w-[370px] lg:h-[480px] xl:w-[518px] xl:h-[690px] rounded-t-[320px]"
                            style={{
                                background: "linear-gradient(to right, var(--light-gold), var(--dark-gold))",
                            }}
                        >
                            <div className="relative h-full w-full bg-white p-[6px] rounded-t-[315px]">
                                <div className="relative h-full w-full overflow-hidden rounded-t-[310px]">
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
                    <div className="relative flex flex-col justify-center items-start">
                        <h2 className="text-black text-base lg:text-lg md:text-xl xl:text-2xl font-bold mb-2 font-semibold">
                            Working with Dr. Patrice Khan
                        </h2>
                        <p className="text-black text-base xl:text-lg 2xl:text-xl mb-2">
                            I’m an intuitive Energy Therapist.<br />
                            <span className="italic text-black">An Ambassador to the invisible.</span>
                        </p>
                        <p className="text-black text-base xl:text-lg 2xl:text-xl mb-2">
                            I help reveal what has been hidden so it can finally let go.
                        </p>
                        <p className="text-black text-base xl:text-lg 2xl:text-xlmb-2">
                            This is intuitive, embodied work.<br />Quiet. Precise. Grounded.
                        </p>
                        <p className="text-black text-base xl:text-lg 2xl:text-xl mb-6">
                            Awareness becomes lived change.
                        </p>

                        <button
                            className="rounded-4xl px-7 py-3 text-white font-medium text-base xl:text-lg 2xl:text-xl shadow-md relative z-10"
                            style={{
                                background: "linear-gradient(to right, var(--light-orange), var(--dark-orange))",
                            }}
                        >
                            Book Your Therapist
                        </button>

                        {/* Small 42px SVG below the button */}
                        <svg
                            className="mt-12 w-[42px] h-[42px] pointer-events-none absolute -bottom-30"
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
                className="absolute top-30 right-10 w-36 h-36 pointer-events-none"
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