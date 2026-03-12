import Image from "next/image";

export default function WhyThisWork() {
    return (
        <section className="px-6 py-12 md:px-10 lg:px-12 xl:px-14 flex justify-center">
            <div className="mx-auto max-w-7xl">
                <h1 className="text-center text-black font-bold lg:text-2xl xl:text-3xl 2xl:text-4xl">
                    What This Work Does
                </h1>
                <p className="pt-4 text-center text-black text-base md:text-lg xl:text-xl 2xl:text-2xl font-semibold">
                    When the body releases what the mind is holding:
                </p>
                <div className="mt-40 grid grid-cols-1 items-start gap-8 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:gap-6 xl:gap-8 max-w-4xl relative">
                    {/* Step 1 */}
                    <div className="text-center w-[150px] mx-auto relative -top-6">
                        <div className="text-[96px] leading-none font-bold" style={{ color: "#DA5B00" }}>1</div>
                        <p className="mt-8 text-black text-xl text-nowrap">Your system settles.</p>
                    </div>

                    {/* Arrow 1 */}
                    <div className="hidden md:block relative -top-14">
                        <Image src="/assets/arrow.svg" alt="arrow" width={240} height={80} className="h-auto w-[100px] xl:w-[150px] -ml-6" />
                    </div>

                    {/* Step 2 */}
                    <div className="text-center w-[150px] mx-auto relative -top-24">
                        <div className="text-[96px] leading-none font-bold" style={{ color: "#DA5B00" }}>2</div>
                        <p className="mt-4 text-black text-xl">Clarity returns</p>
                    </div>

                    {/* Arrow 2 */}
                    <div className="hidden md:block relative -top-16 -right-6">
                        <Image src="/assets/arrow.svg" alt="arrow" width={240} height={80} className="h-auto w-[100px] xl:w-[150px] -ml-6 rotate-10" />
                    </div>

                    {/* Step 3 */}
                    <div className="text-center w-[150px] mx-auto relative -top-6">
                        <div className="text-[96px] leading-none font-bold" style={{ color: "#DA5B00" }}>3</div>
                        <p className="mt-8 text-black text-xl text-nowrap">Life moves with more ease</p>
                    </div>
                </div>

                <div className="flex justify-center pt-12">
                    <p className="flex flex-col text-xs md:text-sm lg:text-base">
                        <span>This is not about doing something new.</span>
                        <span className="font-bold text-black">It is about freeing what is already here.</span>
                    </p>
                </div>
            </div>
        </section>
    );
}