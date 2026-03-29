import Image from "next/image";
import Link from "next/link";
import { ArrowRight, House } from "lucide-react";

export default function TestimonialsHero() {
    return (
        <section className="w-full">
            <div className="relative w-full overflow-hidden h-72 sm:h-80 lg:h-92 xl:h-100">
                <Image
                    src="/assets/testimonials-hero.jpg"
                    alt="Testimonials hero"
                    fill
                    priority
                    className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-black/15" />
                <div className="absolute inset-0 bg-linear-to-r from-[#DA5B00]/35 via-[#DA5B00]/15 to-transparent" />

                <div className="relative z-10 max-w-7xl mx-auto h-full w-full px-6 md:px-10 lg:px-12 xl:px-14">
                    <div className="h-full flex flex-col justify-center pb-10 lg:pb-12">
                        <h1 className="text-white text-4xl sm:text-6xl lg:text-7xl xl:text-[80px] font-bold leading-none">
                            Clients Experiences
                        </h1>

                        <p className="font-satisfy mt-1 text-white text-lg lg:text-xl xl:text-2xl italic leading-tight">
                            Stories of transformation
                        </p>

                        <div className="mt-8 lg:mt-10 flex items-center gap-2 text-white text-lg lg:text-xl xl:text-2xl leading-none">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.99998 19V14H14V19C14 19.55 14.45 20 15 20H18C18.55 20 19 19.55 19 19V12H20.7C21.16 12 21.38 11.43 21.03 11.13L12.67 3.59997C12.29 3.25997 11.71 3.25997 11.33 3.59997L2.96998 11.13C2.62998 11.43 2.83998 12 3.29998 12H4.99998V19C4.99998 19.55 5.44998 20 5.99998 20H8.99998C9.54998 20 9.99998 19.55 9.99998 19Z" fill="url(#paint0_linear_1136_659)" />
                                <defs>
                                    <linearGradient id="paint0_linear_1136_659" x1="21.2023" y1="11.6725" x2="2.80212" y2="11.6725" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#DA5B00" />
                                        <stop offset="1" stopColor="#E27B34" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <Link href="/" className="hover:opacity-90 transition-opacity">Home</Link>
                            <svg width="31" height="12" viewBox="0 0 31 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 4.7735C0.447715 4.7735 0 5.22121 0 5.7735C0 6.32578 0.447715 6.7735 1 6.7735V5.7735V4.7735ZM31 5.7735L21 -4.29153e-06V11.547L31 5.7735ZM1 5.7735V6.7735H22V5.7735V4.7735H1V5.7735Z" fill="url(#paint0_linear_1136_663)" />
                                <defs>
                                    <linearGradient id="paint0_linear_1136_663" x1="31" y1="6.2735" x2="1" y2="6.2735" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#DA5B00" />
                                        <stop offset="1" stopColor="#E27B34" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <span className="font-medium">Testimonials</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
