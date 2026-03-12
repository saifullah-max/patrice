import Image from "next/image";

export default function Awareness() {
    return (
        <section className="relative overflow-visible pt-10">
            <div className="flex justify-center">
                <Image
                    src='/assets/awareness-bg-star.png'
                    width={666}
                    height={700}
                    alt="Background Image"
                    className="pointer-events-none absolute left-1/2 top-10 -z-10 h-auto w-[420px] -translate-x-1/2 opacity-90 md:w-[540px] 2xl:w-[680px]"
                />
            </div>
            <div className="relative z-10 grid grid-cols-1 gap-6 px-6 py-8 md:px-10 lg:grid-cols-2 lg:px-12 xl:px-14">
                <div>
                    <h1 className="text-black lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold">
                        Awareness Isn't the Problem
                    </h1>
                    <p className="text-black text-base md:text-lg xl:text-xl 2xl:flex flex-col pt-3 lg:pt-4 xl:pt-6 flex flex-col font-semibold">
                        <span>Insight helps.</span>
                        <span>But it does not always change what the body holds</span>
                    </p>
                    <p className="text-xs md:text-sm lg:text-base pt-3 lg:pt-4 xl:pt-6 flex flex-col">
                        <span>Patterns live beneath thought.</span>
                        <span>In nervous system.</span>
                        <span>In the places words alone can’t reach</span>
                        <span className="pt-4">That is where the real change begins.</span>
                    </p>

                    <button className="gradient-outline-btn my-6">
                        <span className="text-[#DA5B00]">Learn More</span>
                    </button>
                </div>
                <div className="relative mx-auto mt-4 w-[260px] sm:w-[320px] md:w-[380px] lg:mt-0 lg:mx-0 lg:w-[430px] xl:w-[470px] 2xl:w-[510px]">
                    <div
                        className="relative h-[260px] w-[260px] overflow-hidden rounded-t-[160px] rounded-b-none p-[1px] sm:h-[320px] sm:w-[320px] sm:rounded-t-[200px] md:h-[380px] md:w-[380px] md:rounded-t-[230px] lg:h-[430px] lg:w-[430px] lg:rounded-t-[250px] xl:h-[470px] xl:w-[470px] xl:rounded-t-[270px] 2xl:h-[510px] 2xl:w-[510px] 2xl:rounded-t-[290px]"
                        style={{ background: "linear-gradient(to right, var(--dark-gold), var(--light-gold))" }}
                    >
                        <div className="relative h-full w-full overflow-hidden rounded-t-[inherit] rounded-b-none bg-white p-[4px]">
                            <div
                                className="relative h-full w-full overflow-hidden rounded-t-[inherit] rounded-b-none border p-[4px]"
                                style={{ borderColor: "var(--light-gold)" }}
                            >
                                <Image
                                    src="/assets/awareness-image.png"
                                    alt="Awareness"
                                    fill
                                    className="object-cover object-center"
                                />
                            </div>
                        </div>
                    </div>

                    <div
                        className="absolute -right-24 bottom-8 h-[140px] w-[125px] overflow-hidden rounded-t-[100px] rounded-b-none p-[1px] sm:h-[120px] sm:w-[110px] md:h-[120px] md:w-[130px] lg:h-[150px] lg:w-[150px] xl:h-[180px] xl:w-[175px] 2xl:h-[260px] 2xl:w-[200px]"
                        style={{ background: "linear-gradient(to right, var(--dark-gold), var(--light-gold))" }}
                    >
                        <div className="h-full w-full rounded-t-[inherit] rounded-b-none bg-white p-[4px]">
                            <div
                                className="flex h-full w-full items-center justify-center rounded-t-[inherit] rounded-b-none border"
                                style={{ borderColor: "var(--light-gold)" }}
                            >
                                <Image
                                    src="/assets/insights.svg"
                                    alt="Insights icon"
                                    width={110}
                                    height={110}
                                    className="h-auto w-[68px] sm:w-[80px] md:w-[90px] lg:w-[100px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Image
                src="/assets/awareness-side-style.png"
                alt="Side Style"
                className="
    pointer-events-none
    absolute right-0 top-40
    -z-10
    h-[160px]
    sm:h-[200px]
    md:h-[240px]
    lg:h-[270px]
    xl:h-[700px]
    2xl:h-[330px]
    object-contain
    w-auto
  "
                width={300} // approximate natural width
                height={330} // match your 2xl height
            />
        </section>
    );
}