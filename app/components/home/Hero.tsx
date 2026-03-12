import Image from "next/image";

export default function Hero() {
    return (
        <section className="pt-22">
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-0 px-6 py-8 md:px-10 lg:grid-cols-3 lg:px-12 xl:px-14">
                <div className="relative lg:col-span-2">
                    <h1 className="pt-4 text-3xl md:text-4xl lg:text-5xl xl:text-[86px] 2xl:text-[96px] font-extrabold leading-[1.05] tracking-tight text-black lg:text-[64px]">
                        <span>From stuck to</span>
                        <br />
                        <span className="bg-linear-to-r from-(--dark-gold) to-(--light-gold) bg-clip-text text-transparent">
                            Freedom
                        </span>
                    </h1>

                    <p className="mt-4 text-[13px] text-black/45">
                        Release Hidden Patterns. Come Home to Yourself
                    </p>

                    <button
                        className="mt-4 inline-flex h-10 items-center rounded-xl px-6 text-sm font-medium text-white"
                        style={{
                            background:
                                "linear-gradient(to right, var(--light-orange), var(--dark-orange))",
                        }}
                    >
                        Schedule A Clarity Call
                    </button>

                    <Image
                        src="/assets/tree.png"
                        alt="decorative tree"
                        width={270}
                        height={270}
                        className="pointer-events-none absolute top-55 left-55 hidden opacity-10 lg:block"
                    />
                </div>
                <div className="flex justify-end lg:col-span-1">
                    {/* gold border */}
                    <div
                        className="
      relative p-[2px]
      w-[260px] h-[300px]
      sm:w-[260px] sm:h-[280px]
      md:w-[300px] md:h-[320px]
      lg:w-[330px] lg:h-[400px]
      xl:w-[400px] xl:h-[450px]
      2xl:w-[522px] 2xl:h-[583px]
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
