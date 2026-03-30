export default function Banner() {
    return (
        <section className="py-8 lg:py-12 xl:py-16 max-w-7xl mx-auto px-6 pt-12 md:px-10 lg:px-12 xl:px-14">
            <div className="max-w-5xl  mx-auto">
                <div className="bg-(--dark-orange) py-4 lg:py-6 px-6 lg:px-8 xl:px-10 rounded-xl">
                    <p className="flex flex-col text-center text-white text-xl lg:text-2xl xl:text-[32px] font-normal">
                        <span className="font-satisfy">“You are not to here fix yourself.</span>
                        <span className="font-satisfy">You are here to come home to who you already are”</span>
                        <span className="pt-2 font-semibold">— Dr. Patrice</span>
                    </p>
                </div>
            </div>
        </section>
    )
}