export default function SelfAware() {
    return (
        <section className="pt-12 flex justify-center overflow-x-hidden max-w-7xl mx-auto">
            <div className="relative max-w-6xl w-full">
                {/* CARD */}
                <div className="bg-[#E27B34] px-6 py-6 lg:py-12 xl:py-14 rounded-2xl xl:rounded-4xl my-4 mx-4" style={{
                    boxShadow: "3px 3px 0px #F8D4B9"
                }}>

                    <div>
                        <p className=" text-2xl md:text-3xl xl:text-[44px] text-white text-center font-semibold pb-2 lg:pb-4 xl:pb-6">
                            Talk therapy and mindset work build awareness.
                        </p>
                        <p className="text-3xl md:text-4xl xl:text-5xl text-(--light-gold) text-center font-normal font-satisfy pb-6">
                            Some patterns live deeper.
                        </p>
                    </div>

                    <div>
                        <p className="text-2xl md:text-3xl xl:text-[44px] text-white text-center font-semibold pb-2 lg:pb-4 xl:pb-6">
                            If this feels familiar,
                        </p>
                        <p className="text-3xl md:text-4xl xl:text-5xl text-(--light-gold) text-center font-normal font-satisfy">
                            nothing is wrong with you.
                        </p>
                    </div>
                </div>

                {/* BOTTOM LEFT SVG */}
                <svg
                    className="absolute bottom-12 -left-24"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path opacity="0.5" d="M3.55163 4.41074e-05L11.0325 5.59115L20.1464 3.55168L14.5553 11.0325L16.5948 20.1464L9.11393 14.5553L1.66893e-06 16.5948L5.59111 9.11397L3.55163 4.41074e-05Z" fill="url(#paint0_linear_158_1454)" />
                </svg>

            </div>
        </section>
    );
}