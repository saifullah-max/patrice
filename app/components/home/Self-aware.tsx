export default function SelfAware() {
    return (
        <section className="pt-18 flex justify-center">
            <div className="relative max-w-4xl w-full">

                {/* TOP RIGHT SVG */}
                <svg
                    className="absolute top-12 -right-24"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path opacity="0.5" d="M3.55163 4.41074e-05L11.0325 5.59115L20.1464 3.55168L14.5553 11.0325L16.5948 20.1464L9.11393 14.5553L1.66893e-06 16.5948L5.59111 9.11397L3.55163 4.41074e-05Z" fill="url(#paint0_linear_158_1454)" />
                    <defs>
                        <linearGradient id="paint0_linear_158_1454" x1="1.66893e-06" y1="16.5948" x2="20.1464" y2="3.55168">
                            <stop offset="0.129808" stopColor="#C78F1F" />
                            <stop offset="0.432692" stopColor="#F7E399" />
                            <stop offset="0.586538" stopColor="#F7E399" />
                            <stop offset="1" stopColor="#C78F1F" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* CARD */}
                <div className="bg-[#FCEFE6] px-10 py-8 rounded-[50px] my-4">
                    <p className="text-base md:text-lg xl:text-xl 2xl:text-2xl text-black text-center">
                        You Are self-aware. Your have done the work
                    </p>

                    <h3 className="py-3 bg-linear-to-r from-(--light-orange) to-(--dark-orange) bg-clip-text text-transparent lg:text-2xl xl:text-3xl 2xl:text-4xl font-extrabold text-center">
                        Therapy. Coaching. Retreats. Books. Practice
                    </h3>

                    <p className="text-base md:text-lg xl:text-xl 2xl:text-2xl text-black text-center">
                        And still - something feels stuck
                    </p>

                    <div className="py-4">
                        <p className="text-base md:text-lg xl:text-xl 2xl:text-2xl text-black text-center font-medium">
                            Talk therapy and mindset work build awareness
                        </p>
                        <p className="text-base md:text-lg xl:text-xl 2xl:text-2xl text-black text-center font-bold">
                            Some patterns live deeper
                        </p>
                    </div>

                    <div className="pt-4">
                        <p className="text-base md:text-lg xl:text-xl 2xl:text-2xl text-black text-center font-medium">
                            If this feels familiar,
                        </p>
                        <p className="text-base md:text-lg xl:text-xl 2xl:text-2xl text-black text-center font-bold">
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