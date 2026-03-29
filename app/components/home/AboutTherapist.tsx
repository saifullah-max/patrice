import Image from "next/image";

export default function AboutTherapist() {
    return (
        <section className="max-w-7xl mx-auto w-full pt-12 px-6 md:px-10 lg:grid-cols-5 lg:px-12 xl:px-14 relative bg-white overflow-visible">
            <h1 className="text-black text-2xl lg:text-3xl xl:text-[44px] font-bold text-center mb-6">
                About Your Therapist
            </h1>

            <div className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-7 items-center gap-12 lg:gap-16 xl:gap-24">
                    <div className="relative col-span-3">
                        <div
                            className="w-[320px] h-100 md:w-87.5:md:h-110:wlg:w-92.5h-[480px] xl:w-117.5l:h-[650px] 
        rounded-t-[320px] overflow-hidden p-px"
                            style={{ background: "linear-gradient(to right, var(--dark-gold), var(--light-gold))" }}
                        >
                            {/* White layer */}
                            <div className="relative h-full w-full bg-white p-1 rounded-t-[inherit]">

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
                    <div className="relative flex flex-col justify-center items-start col-span-4">
                        <h2 className="text-black text-2xl lg:text-3xl xl:text-4xl mb-8">
                            Working with <span className="text-(--dark-orange)">Dr. Patrice Khan</span>
                        </h2>
                        <div className="grid grid-rows-3 gap-6 lg:gap-8 xl:gap-10">
                            <p className="text-black text-xl lg:text-2xl xl:text-3xl mb-2">
                                I’m an intuitive <span className="font-semibold">Energy Therapist.</span><br />
                                <span className="italic text-black">An Ambassador to the invisible.</span>
                            </p>
                            <p className="text-black text-xl lg:text-2xl xl:text-3xl mb-2">
                                I help reveal what has been hidden
                                <span>so it can finally let go.</span>
                            </p>
                            <p className="text-black text-xl lg:text-2xl xl:text-3xl mb-2">
                                This is intuitive, embodied work.
                                <span>Quiet. Precise. Grounded.</span>
                            </p>
                        </div>

                        <div className="relative inline-block mt-6 lg:mt-8 xl:mt-10">
                            {/* Offset border shape */}
                            <div className="absolute z-50 top-1.5eft-[6px] w-full h-full rounded-l-full border-2 border-black"></div>

                            {/* Button */}
                            <button
                                className="relative py-4 px-10 rounded-l-full text-white font-medium text-base lg:text-lg"
                                style={{
                                    background: 'linear-gradient(to right, var(--light-orange), var(--dark-orange))'
                                }}
                            >
                                Book Your Therapist
                            </button>
                        </div>

                        {/* Small 42px SVG below the button */}
                        <svg
                            className="mt-12 w-10.5-h-10.5ointer-events-none absolute -bottom-30 right-55"
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