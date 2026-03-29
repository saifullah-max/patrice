"use client";
import testimonials from './Testimonials'

export default function ClientTestimonials() {

    return (
        <section className="max-w-7xl mx-auto relative w-full overflow-hidden bg-white px-6 pt-12 md:px-10 lg:px-12 xl:px-14">
            {/* Heading */}
            <div className="flex justify-center flex-col text-center mb-12">
                <h2 className="text-black text-2xl lg:text-3xl xl:text-[44px] font-bold text-center">
                    Client Testimonials
                </h2>
            </div>

            {/* Grid Layout: 1 col on mobile/sm/md, 2 cols on lg+ */}
            <div className="columns-1 lg:columns-2 gap-6">
                {testimonials.map((item, i) => (
                    <article
                        key={`${item.name}-${i}`}
                        className="mb-6 break-inside-avoid rounded-xl p-8 flex flex-col"
                        style={{ background: "#FCEFE6" }}
                    >
                        {/* Client Info */}
                        <div>
                            <p className="text-black font-semibold text-base lg:text-lg xl:text-xl">
                                {item.name}
                            </p>
                            <p className="text-(--dark-orange) text-xs xl:text-sm mt-1">
                                {item.role}
                            </p>
                        </div>

                        <div className="mt-8">
                            {/* Quote Icon */}
                            <svg width="40" height="35" viewBox="0 0 40 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 34.4492V28.2451C3.26531 27.7009 5.55103 26.5581 6.85715 24.8166C8.16327 23.0751 8.81633 19.973 8.81633 15.5104H0.489803L0.489803 0.000244141H16.4898L16.4898 13.0615C16.4898 19.8098 15.2381 25.0343 12.7347 28.7349C10.2313 32.5445 5.9864 34.4492 0 34.4492ZM23.5102 34.4492V28.2451C26.7755 27.7009 29.0612 26.5581 30.3673 24.8166C31.6735 23.0751 32.3265 19.973 32.3265 15.5104L24 15.5104L24 0.000244141H40V13.0615C40 19.8098 38.7483 25.0343 36.2449 28.7349C33.7415 32.5445 29.4966 34.4492 23.5102 34.4492Z" fill="#DA5B00" />
                            </svg>

                            {/* Testimonial Text */}
                            <p className="mt-6 whitespace-pre-line text-black text-lg lg:text-xl xl:text-2xl leading-relaxed">
                                "{item.text}"
                            </p>
                        </div>


                    </article>
                ))}
            </div>
        </section>
    );
}
