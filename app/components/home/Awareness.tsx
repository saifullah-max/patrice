import Image from "next/image";

export default function Awareness() {
    return (
        <section className="relative overflow-hidden pt-12 mx-auto max-w-7xl">
            <div className="flex justify-center">
                <Image
                    src='/assets/awareness-bg-star.png'
                    width={666}
                    height={700}
                    alt="Background Image"
                    className="pointer-events-none absolute left-1/2 top-10 -z-10 h-auto w-105 -translate-x-1/2 opacity-90 md:w-135 2xl:w-170"
                />
            </div>
            <div className="relative z-10 grid grid-cols-1 items-center gap-2 lg:gap-10 px-6 py-8 md:px-10 lg:grid-cols-5 lg:px-12 xl:px-14">

                {/* LEFT SIDE */}
                <div className="col-span-3">
                    <h1 className="text-black text-2xl lg:text-3xl xl:text-[44px] font-bold">
                        Awareness is not Enough
                    </h1>

                    <div className="flex flex-col gap-6 pt-3 lg:pt-4 xl:pt-6">

                        <p className="text-black text-base md:text-lg xl:text-xl font-medium">
                            <span className="text-2xl lg:text-3xl xl:text-4xl tracking-tight">
                                Insight alone doesn't create lasting change.
                            </span>
                        </p>

                        <p className="text-black text-2xl lg:text-3xl xl:text-4xl font-medium leading-tight tracking-tight">
                            About <span className="text-(--dark-orange) font-satisfy">95%</span> of our thoughts habits, and emotional reactions are driven by
                            <span className="text-(--dark-orange) font-satisfy"> subconscious patterns</span> stored in the body and nervous system — long before the mind can intervene.
                        </p>

                        <p className="text-black text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-medium leading-tight tracking-tight">
                            That's why talk therapy, mindset work, and willpower often reach a limit.
                        </p>

                        <p className="text-black text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-medium tracking-tight">
                            Real change happens <span className="text-(--dark-orange) font-satisfy">beneath awareness.</span>
                        </p>
                    </div>
                </div>

                {/* RIGHT SIDE (UNCHANGED IMAGE DIMENSIONS) */}
                <div className="flex justify-center lg:justify-end col-span-2">
                    <div className="mx-auto mt-4 w-65 sm:w-[320px] md:w-[380px] lg:mt-0 lg:mx-0 lg:w-[430px] xl:w-[470px] 2xl:w-[510px]">
                        <div
                            className="h-[400px] w-[260px] overflow-hidden rounded-t-[160px] rounded-b-none p-[1px] sm:h-[420px] sm:w-[280px] sm:rounded-t-[200px] md:h-[460px] md:w-[300px] md:rounded-t-[230px] lg:h-[500px] lg:w-[340px] lg:rounded-t-[250px] xl:h-[540px] xl:w-[380px] xl:rounded-t-[270px] 2xl:h-[570px] 2xl:w-[430px] 2xl:rounded-t-[290px]"
                            style={{ background: "linear-gradient(to right, var(--dark-gold), var(--light-gold))" }}
                        >
                            <div className="relative h-full w-full overflow-hidden rounded-t-[inherit] rounded-b-none bg-white p-[4px]">
                                <div
                                    className="relative h-full w-full overflow-hidden rounded-t-[inherit] rounded-b-none border p-[4px]"
                                    style={{ borderColor: "var(--light-gold)" }}
                                >
                                    <Image
                                        src="/assets/awareness-image.jpg"
                                        alt="Awareness"
                                        fill
                                        className="object-cover object-center"
                                    />
                                </div>
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