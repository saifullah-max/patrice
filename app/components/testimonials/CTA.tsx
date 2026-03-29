export default function TestimonialCTA() {
    return (
        <section className="w-full">
            <div className="max-w-7xl mx-auto w-full px-6 py-14 md:px-10 lg:px-12 xl:px-14 lg:py-18 xl:py-22">
                <div className="mx-auto max-w-5xl text-center">
                    <h2 className="text-[#3E2925] text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight">
                        Your Turn to Experience It!
                    </h2>

                    <p className="mx-auto mt-4 max-w-5xl text-black text-xl lg:text-2xl xl:text-3xl leading-snug">
                        If this feels familiar, it may be time to write your own chapter. Growth doesn’t happen overnight — it happens through small, meaningful progress.
                    </p>

                    <div className="relative inline-block w-fit mt-8 lg:mt-12">
                        {/* Offset border shape */}
                        <div className="absolute top-2.5 -left-1.5 w-full h-full rounded-r-full border-2 border-black z-50"></div>
                        {/* Button */}
                        <button
                            className="relative py-4 px-10 rounded-r-full text-white font-medium text-sm lg:text-base xl:text-lg"
                            style={{
                                background: 'linear-gradient(to right, var(--light-orange), var(--dark-orange))'
                            }}
                        >
                            Schedule A Session.
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}