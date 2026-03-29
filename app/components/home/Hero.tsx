import Image from "next/image";

export default function Hero() {
    return (
        <section>
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-0 px-6 py-8 md:px-10 lg:grid-cols-5 lg:px-12 xl:px-14">
                <div className="relative lg:col-span-3">
                    <h1 className="text-6xl md:text-[64px] lg:text-7xl xl:text-[86px] 2xl:text-[96px] font-semibold leading-[1.05] tracking-tight text-black lg:text-[64px]">
                        <span>From stuck to</span>
                        <br />
                        <span className="bg-linear-to-r from-(--dark-gold) to-(--light-gold) bg-clip-text text-transparent">
                            Freedom
                        </span>
                    </h1>

                    <p className="mt-8 text-3xl lg:text-4xl xl:text-[44px] text-black flex flex-col font-medium">
                        <span>Release Hidden Patterns.</span>
                        <span>Come Home to Yourself.</span>
                    </p>

                    <p className="pt-8 text-xl lg:text-2xl xl:text-3xl max-w-md text-black font-normal">
                        You are self-aware, you have done the work.
                    </p>

                    <p className="text-[#DA5B00] max-w-md lg:max-w-lg text text-3xl lg:text-4xl xl:text-[40px] font-satisfy font-normal pt-8">
                        Therapy . Coaching . Retreats . Books . Practices.
                    </p>

                    <p className="pt-6 text-black text-xl lg:text-2xl xl:text-3xl ">... and still something feels stuck.</p>

                    {/* <button
                        className="mt-4 inline-flex h-10 items-center rounded-xl px-6 text-sm font-medium text-white"
                        style={{
                            background:
                                "linear-gradient(to right, var(--light-orange), var(--dark-orange))",
                        }}
                    >
                        Schedule A Clarity Call
                    </button> */}

                    {/* <Image
                        src="/assets/tree.svg"
                        alt="decorative tree"
                        width={270}
                        height={270}
                        className="pointer-events-none absolute top-55 left-55 hidden opacity-10 lg:block"
                    /> */}
                </div>
                <div className="flex justify-center lg:justify-end lg:col-span-2">
                    {/* gold border */}
                    <div
                        className="
      relative p-[2px]
      w-[270px] h-[370px]
      sm:w-[290px] sm:h-[360px]
      md:w-[360px] md:h-[420px]
      lg:w-[400px] lg:h-[520px]
      xl:w-[480px] xl:h-[620px]
      2xl:w-[522px] 2xl:h-[673px]
      rounded-t-[260px]
    "
                        style={{
                            background: "linear-gradient(to right, var(--light-gold), var(--dark-gold))",
                        }}
                    >

                        {/* white inner border */}
                        <div className="relative h-full w-full bg-white p-[6px] rounded-t-[255px]">

                            {/* image wrapper */}
                            <div className="relative h-full w-full overflow-hidden rounded-t-[250px]">
                                <Image
                                    src="/assets/home-banner.png"
                                    alt="sunset doorway"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
