import { ChevronsRight } from "lucide-react";
import Image from "next/image";

export default function AboutContent() {
    return (
        <section className="max-w-7xl mx-auto relative w-full overflow-visible bg-white px-6 pt-12 md:px-10 lg:px-12 xl:px-14">
            <div className="py-8 lg:py-12 xl:py-16">
                <h1 className="text-[#3E2925] text-3xl lg:text-4xl xl:text-5xl text-center mb-4 lg:mb-6 font-semibold">Roots & Rhythm</h1>
                <p className="flex flex-col text-center text-xl lg:text-2xl xl:text-[26px] text-black leading-tight">
                    <span>
                        I grew up in Trinidad & Tobago, immersed in a vibrant tapestry of cultures and traditions that
                        nurtured my love for the mystical and sacred. The island’s rhythm—waves, music, and movement—taught
                        me early that the unseen is as real as what we touch.
                    </span>
                    <span>
                        found me at eight, in a home that served as a center for Transcendental Meditation.
                        Sitting in stillness and listening inward became the foundation of everything I now share.
                    </span>
                </p>
            </div>

            <div className="py-8 lg:py-12 xl:py-16">
                <h1 className="text-[#3E2925] text-3xl lg:text-4xl xl:text-5xl text-center mb-4 lg:mb-6 font-semibold">A Life Between Worlds</h1>
                <p className="flex flex-col text-center text-xl lg:text-2xl xl:text-[26px] text-black leading-tight">
                    <span>
                        I live and work between cultures—having moved between
                        Trinidad, the United States, and Pakistan. This cross-cultural perspective informs every session, adding
                        nuance and depth to the way I hold space.
                        Healing belongs to no single place or philosophy.
                        It is universal.
                    </span>
                </p>
            </div>

            <div className="py-8 lg:py-12 xl:py-16">
                <h1 className="text-[#3E2925] text-2xl lg:text-3xl xl:text-[44px] text-center mb-8 font-bold">Education & Foundations</h1>

                <div className="grid grid-cols-1 items-center gap-8 lg:gap-10 lg:grid-cols-5">
                    <div className="col-span-3 pr-4 order-2 lg:order-1">
                        <div className="flex flex-col gap-6 pt-1">
                            <p className="text-black text-xl lg:text-2xl xl:text-[26px] leading-snug">
                                I believe true transformation is a <span className="font-black">blend of art, science, and the mystical.</span>
                            </p>

                            <p className="text-black text-xl lg:text-2xl xl:text-[26px] leading-snug">
                                My academic training grounds my work, while curiosity, lived experience, and the unseen dimensions of healing keep it alive.
                            </p>

                            <div className="pt-2">
                                <h2 className="text-black text-xl lg:text-2xl xl:text-[26px] font-black leading-snug">
                                    All advanced degrees earned in the U.S.A.:
                                </h2>

                                <ul className="list-disc pl-8 pt-4 text-black text-xl lg:text-2xl xl:text-[26px] leading-snug space-y-2">
                                    <li>Ph.D. Clinical–Counseling Psychology</li>
                                    <li>M.A. Counseling</li>
                                    <li>B.A. Business Management</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center lg:justify-end col-span-2 order-1 lg:order-2">
                        <div className="mx-auto mt-4 w-65 sm:w-[320px] md:w-95 lg:mt-0 lg:mx-0 lg:w-107.5 xl:w-117.5 2xl:w-127.5">
                            <div
                                className="h-100 w-65 overflow-hidden rounded-t-[160px] rounded-b-none p-px sm:h-85 sm:w-80 sm:rounded-t-[200px] md:h-100 md:w-90 md:rounded-t-[230px] lg:h-110 lg:w-100 lg:rounded-t-[250px] xl:h-125 xl:w-115 xl:rounded-t-[270px] 2xl:h-136.5 2xl:w-117.5 2xl:rounded-t-[290px]"
                                style={{ background: "var(--dark-gold)" }}
                            >
                                <div className="relative h-full w-full overflow-hidden rounded-t-[inherit] rounded-b-none bg-white p-1">
                                    <div
                                        className="relative h-full w-full overflow-hidden rounded-t-[inherit] rounded-b-none border p-1"
                                        style={{ borderColor: "var(--light-gold)" }}
                                    >
                                        <Image
                                            src="/assets/education-foundation.jpg"
                                            alt="Education and foundations"
                                            fill
                                            className="object-cover object-center"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-8 lg:py-12 xl:py-16">
                <h1 className="text-[#3E2925] text-2xl lg:text-3xl xl:text-[44px] text-center mb-8 font-bold">Integrative Energy-Healing Modalities</h1>

                <div className="grid grid-cols-1 items-center gap-8 lg:gap-10 lg:grid-cols-5">

                    <div className="flex justify-center lg:justify-end col-span-2">
                        <div className="mx-auto mt-4 w-65 sm:w-[320px] md:w-95 lg:mt-0 lg:mx-0 lg:w-107.5 xl:w-117.5 2xl:w-127.5">
                            <div
                                className="h-100 w-65 overflow-hidden rounded-t-[160px] rounded-b-none p-px sm:h-85 sm:w-90 sm:rounded-t-[200px] md:h-100 md:w-100 md:rounded-t-[230px] lg:h-110 lg:w-110 lg:rounded-t-[250px] xl:h-125 xl:w-120 xl:rounded-t-[270px] 2xl:h-136.5 2xl:w-125 2xl:rounded-t-[290px]"
                                style={{ background: "var(--dark-gold)" }}
                            >
                                <div className="relative h-full w-full overflow-hidden rounded-t-[inherit] rounded-b-none bg-white p-1">
                                    <div
                                        className="relative h-full w-full overflow-hidden rounded-t-[inherit] rounded-b-none border p-1"
                                        style={{ borderColor: "var(--light-gold)" }}
                                    >
                                        <Image
                                            src="/assets/energy-healing.jpg"
                                            alt="Education and foundations"
                                            fill
                                            className="object-cover object-center"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-3 pl-4">
                        <div className="flex flex-col gap-6 pt-1">
                            <p className="text-black text-xl lg:text-2xl xl:text-[26px] leading-snug flex flex-col">
                                <span>Every session is tailored to you.</span>
                                <span>I draw intuitively from:</span>
                            </p>
                            <ul className="list-disc pl-8 pt-4 text-black text-xl lg:text-2xl xl:text-[26px] leading-tight space-y-2">
                                <li>Evidence-based psychology</li>
                                <li>Energy healing</li>
                                <li>Somatic therapies</li>
                                <li>Consciousness and Ancestral work</li>
                            </ul>

                            <p className="text-black text-xl lg:text-2xl xl:text-[26px] leading-snug">
                                These are not techniques applied from a checklist,
                                but living currents woven together as needed —
                                making each session as unique as you are.
                            </p>

                            <div className="pt-2">
                                <h2 className="text-(--dark-orange) underline underline-offset-8 decoration-1 text-xl lg:text-2xl xl:text-[26px] font-medium leading-snug flex items-center gap-2">
                                    See the full list of Integ Energy Healing Modalities
                                    <ChevronsRight />
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-8 lg:py-12 xl:py-16">
                <h1 className="text-[#3E2925] text-2xl lg:text-3xl xl:text-[44px] text-center mb-8 font-bold">Begin Your Transformation</h1>

                <div className="grid grid-cols-1 items-center gap-8 lg:gap-10 lg:grid-cols-5">
                    <div className="col-span-3 pr-4 order-2 lg:order-1">
                        <div className="flex flex-col gap-6 pt-1">
                            <p className="text-black text-xl lg:text-2xl xl:text-[26px] leading-snug flex flex-col">
                                <span>If something here resonates, listen to that</span>
                                <span>quiet yes in your body.</span>
                                <span>Consider this an invitation.</span>
                            </p>
                            <p className="text-black text-xl lg:text-2xl xl:text-[26px] leading-snug pt-4 lg:pt-6 xl:pt-8">
                                Our work begins with a simple conversation, creating a space where you can release what no longer serves you and step fully into the life that is waiting.
                            </p>
                        </div>

                        <div className="relative inline-block mt-6 lg:mt-8 xl:mt-10">
                            {/* Offset border shape */}
                            <div className="absolute z-50 top-2.5 -left-1.5 w-full h-full rounded-r-full border-2 border-black"></div>

                            {/* Button */}
                            <button
                                className="relative py-4 px-10 rounded-r-full text-white font-medium text-sm lg:text-base xl:text-lg"
                                style={{
                                    background: 'linear-gradient(to right, var(--light-orange), var(--dark-orange))'
                                }}
                            >
                                Schedule A Clarity Call
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-center lg:justify-end col-span-2 order-1 lg:order-2">
                        <div className="mx-auto mt-4 w-65 sm:w-[320px] md:w-95 lg:mt-0 lg:mx-0 lg:w-107.5 xl:w-117.5 2xl:w-127.5">
                            <div
                                className="h-100 w-65 overflow-hidden rounded-t-[160px] rounded-b-none p-px sm:h-85 sm:w-80 sm:rounded-t-[200px] md:h-100 md:w-90 md:rounded-t-[230px] lg:h-110 lg:w-100 lg:rounded-t-[250px] xl:h-125 xl:w-115 xl:rounded-t-[270px] 2xl:h-136.5 2xl:w-117.5 2xl:rounded-t-[290px]"
                                style={{ background: "var(--dark-gold)" }}
                            >
                                <div className="relative h-full w-full overflow-hidden rounded-t-[inherit] rounded-b-none bg-white p-1">
                                    <div
                                        className="relative h-full w-full overflow-hidden rounded-t-[inherit] rounded-b-none border p-1"
                                        style={{ borderColor: "var(--light-gold)" }}
                                    >
                                        <Image
                                            src="/assets/transformation.jpg"
                                            alt="Education and foundations"
                                            fill
                                            className="object-cover object-center"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}