import Image from "next/image";

export default function NextStep() {
    return (
        <section className="py-8 lg:py-12 xl:py-16 max-w-7xl mx-auto relative w-full overflow-visible bg-white px-6 pt-12 md:px-10 lg:px-12 xl:px-14">
            {/* Heading */}
            <div className="text-center mb-12">
            <h1 className="text-black text-2xl lg:text-3xl xl:text-[44px] font-bold text-center mb-6">
                    Your Next Step
                </h1>
            </div>

            {/* Orange container */}
            <div className="relative flex w-full max-w-4xl overflow-visible bg-(--light-orange) px-8 py-6 lg:py-10 xl:py-12 2xl:py-14 md:px-12 lg:px-14">

                <div className="grid w-full grid-cols-1 items-center lg:grid-cols-[420px_1fr] xl:grid-cols-9 gap-12">

                    {/* LEFT CONTENT */}
                    <div className="text-white col-span-4">
                        <h2 className="text-xl lg:text-2xl xl:text-[32px] font-bold leading-snug mb-6">
                            A clarity call is a simple conversation.
                        </h2>

                        <ul className="space-y-2 text-lg lg:text-xl xl:text-2xl mb-4">
                            <li>• No pressure.</li>
                            <li>• No fixing.</li>
                            <li>• Just insight and alignment.</li>
                        </ul>

                        <div className="relative inline-block mt-6 lg:mt-8 xl:mt-10">
                            {/* Offset border shape */}
                            <div className="absolute z-50 top-[10px] -left-[6px] w-full h-full rounded-r-full border-2 border-black"></div>

                            {/* Button */}
                            <button
                                className="relative py-4 px-10 rounded-r-full text-black font-medium text-sm lg:text-base xl:text-lg"
                                style={{
                                    background: 'white'
                                }}
                            >
                                Schedule A Clarity Call
                            </button>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative hidden lg:block col-span-5">
                        <div className="relative">

                            <div className="relative h-82.5 w-155 rounded-tr-[300px] overflow-hidden lg:h-82 lg:w-155 xl:h-92 xl:w-180 2xl:h-104 2xl:w-192">
                                <Image
                                    src="/assets/next-step-image.jpg"
                                    alt="Clarity call"
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

{/* Gradient border */ }
// <div
//     className="rounded-tr-[300px] p-0.5"
//     style={{
//         background: "linear-gradient(to right, var(--light-gold), var(--dark-gold))",
//     }}
// >
//     {/* White layer */}
//     <div className="rounded-tr-[300px] bg-white p-1.5">

//         {/* Image */}
//         <div className="relative h-82.5 w-155 rounded-tr-[300px] overflow-hidden lg:h-87.5 lg:w-165 xl:h-97.5 xl:w-185 2xl:h-107.5 2xl:w-197.5">
//             <Image
//                 src="/assets/next-step-large.png"
//                 alt="Clarity call"
//                 fill
//                 className="object-cover"
//                 priority
//             />
//         </div>
//     </div>
// </div>