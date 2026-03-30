import Image from "next/image";

export default function WhyThisWork() {
    return (
        <section className="px-6 pt-12 md:px-10 lg:px-12 xl:px-14 py-8 lg:py-12 xl:py-16">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-center text-black text-2xl lg:text-3xl xl:text-[44px] font-bold">
                    What This Work Does
                </h1>
                <div className="flex justify-center">
                    <p className="pt-4 text-center text-black text-2xl lg:text-3xl xl:text-4xl max-w-5xl leading-tight lg:leading-snug">
                        My work clears <span className="text-(--dark-orange) font-bold">hidden emotional and energetic patterns</span> that drive stress, anxiety, self-doubt, and self-sabotage - even when you "know better."
                    </p>
                </div>
                <div className="flex justify-center">
                    <div className="px-6 mt-16 md:mt-40 grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:gap-4 xl:gap-4 max-w-5xl relative">

                        {/* Step 1 */}
                        <div className="text-center w-full max-w-[200px] mx-auto relative md:-top-6">
                            <div className="text-[72px] md:text-[96px] leading-none font-bold text-[#DA5B00]">
                                1
                            </div>
                            <p className="mt-4 md:mt-8 text-black text-lg lg:text-xl xl:text-2xl">
                                Your system settles.
                            </p>
                        </div>

                        {/* Arrow 1 */}
                        <div className="hidden md:block relative -top-14">
                            <Image
                                src="/assets/arrow.svg"
                                alt="arrow"
                                width={240}
                                height={80}
                                className="h-auto w-[100px] xl:w-[150px] -ml-6"
                            />
                        </div>

                        {/* Step 2 */}
                        <div className="text-center w-full max-w-[250px] mx-auto relative md:-top-24">
                            <div className="text-[72px] md:text-[96px] leading-none font-bold text-[#DA5B00]">
                                2
                            </div>
                            <p className="mt-4 text-black text-lg lg:text-xl xl:text-2xl">
                                Clarity returns
                            </p>
                        </div>

                        {/* Arrow 2 */}
                        <div className="hidden md:block relative -top-16 -right-6">
                            <Image
                                src="/assets/arrow.svg"
                                alt="arrow"
                                width={240}
                                height={80}
                                className="h-auto w-[100px] xl:w-[150px] -ml-6 rotate-10"
                            />
                        </div>

                        {/* Step 3 */}
                        <div className="text-center w-full max-w-[220px] mx-auto relative md:-top-6">
                            <div className="text-[72px] md:text-[96px] leading-none font-bold text-[#DA5B00]">
                                3
                            </div>
                            <p className="mt-4 md:mt-8 text-black text-lg lg:text-xl xl:text-2xl">
                                Life moves with more ease
                            </p>
                        </div>

                    </div>
                </div>

                <div className="flex justify-center pt-12">
                    <p className="text-center flex flex-col text-2xl lg:text-3xl xl:text-4xl text-(--dark-orange) font-satisfy">
                        <span>This is not about fixing yourself.</span>
                        <span>It is about freeing yourself from patterns running your life.</span>
                    </p>
                </div>
            </div>
        </section>
    );
}