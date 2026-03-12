import Image from "next/image";

export default function NextStep() {
    return (
        <section className="w-full py-12 px-4 md:px-0 relative bg-white overflow-visible">
            <div className="flex justify-center flex-col text-center mb-12">
                <h1 className="text-black lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold">
                    Your Next Step
                </h1>
                <p className="pt-4  text-black text-base md:text-lg xl:text-xl 2xl:text-2xl font-semibold">
                    Transformation begins with clarity.
                </p>
            </div>

            <div className="flex justify-center relative z-10">
                <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-start relative z-10">

                    {/* Right: Text and button */}
                    <div className="relative flex flex-col justify-start items-start">
                        <p className="text-black text-base xl:text-lg 2xl:text-xl mb-2">
                            A Clarity Call helps us explore what is ready to shift and which pathway best supports you now.
                        </p>

                        <ul className="text-[#707070] text-base xl:text-lg 2xl:text-xl mb-8 pl-8 list-disc space-y-1">
                            <li>No pressure.</li>
                            <li>No fixing.</li>
                            <li>Just insight and alignment.</li>
                        </ul>

                        <button
                            className="rounded-4xl px-7 py-3 text-white font-medium text-base xl:text-lg 2xl:text-xl shadow-md relative z-10"
                            style={{
                                background: "linear-gradient(to right, var(--light-orange), var(--dark-orange))",
                            }}
                        >
                            Schedule a clarity call
                        </button>

                    </div>

                    {/* Left: Arched photo */}
                    <div className="flex justify-start relative">
                        <div
                            className="relative p-0.5 w-82.5 h-75 md:w-92.5 md:h-86.25 lg:w-100 lg:h-96.25 xl:w-113 xl:h-106.25 rounded-t-[320px]"
                            style={{
                                background: "linear-gradient(to right, var(--light-gold), var(--dark-gold))",
                            }}
                        >
                            <div className="relative h-full w-full bg-white rounded-t-[315px]">
                                <div className="relative h-full w-full overflow-hidden rounded-t-[310px]">
                                    <Image
                                        src="/assets/next-step-large.png"
                                        alt="Clarity call"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>

                            <div
                                className="absolute -right-27.5 top-17.5 p-0.5 w-45 h-40 md:w-55 md:h-50 lg:w-62 lg:h-60 xl:w-[280px] xl:h-[270px] rounded-t-[210px]"
                                style={{
                                    background: "linear-gradient(to right, var(--light-gold), var(--dark-gold))",
                                }}
                            >
                                <div className="relative h-full w-full bg-white rounded-t-[208px]">
                                    <div className="relative h-full w-full overflow-hidden rounded-t-[200px]">
                                        <Image
                                            src="/assets/next-step-small.png"
                                            alt="Energy healing"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}