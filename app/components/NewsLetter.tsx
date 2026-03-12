export default function NewsLetter() {
    return (
        <section>
            <div className="bg-[#DA5B00] py-12 px-6 md:px-24 text-center">

                <div className="flex justify-center flex-col items-center">
                    <h1 className="text-white text-base lg:text-lg xl:text-xl 2xl:text-2xl mb-4">
                        Sign Up for our news letter
                    </h1>

                    <p className="text-white/70 text-base lg:text-lg xl:text-xl max-w-2xl mb-8">
                        Subscribe to receive reflections, insights, and gentle updates to support your journey toward clarity and balance.
                    </p>

                    {/* Input + Button */}
                    <div className="flex w-full max-w-xl bg-white border-1 border-white rounded-2xl overflow-hidden">

                        <input
                            type="email"
                            placeholder="Enter Your Email Address"
                            className="flex-1 px-6 py-4 text-gray-700 outline-none"
                        />

                        <button className="bg-[#DA5B00] text-white px-6 py-3 font-medium rounded-l-xl hover:bg-[#c65100] transition text-base lg:text-lg xl:text-xl max-w-2xl">
                            Subscribe
                        </button>

                    </div>

                </div>
            </div>
        </section>
    );
}