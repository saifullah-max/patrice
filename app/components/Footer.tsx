import Image from "next/image";

export default function Footer() {
    return (
        <footer
            className="w-full text-white bg-[#DA5B00] mt-12"
        >
            <div className="max-w-400 mx-auto px-4 md:px-8 pt-14 md:pt-16">
                <nav className="flex flex-wrap items-center justify-center gap-x-8  md:gap-x-10 text-lg lg:text-xl xl:text-2xl leading-none">
                    <a href="#" className="hover:opacity-90 transition-opacity">About Me</a>
                    <a href="#" className="hover:opacity-90 transition-opacity">Offerings</a>
                    <a href="#" className="hover:opacity-90 transition-opacity">Testimonials</a>
                    <a href="#" className="hover:opacity-90 transition-opacity">FAQs</a>
                    <a href="#" className="hover:opacity-90 transition-opacity">Connect</a>
                </nav>

                <div className="mt-10 flex flex-col items-center gap-3 text-sm lg:text-base xl:text-lg 2xl:text-xl leading-none">

                    {/* EMAIL ROW */}
                    <div className="flex gap-2 flex-wrap justify-center">
                        <span className="text-white/50">Email:</span>
                        <span className="text-white">patrice@patricekhan.com</span>
                    </div>

                    {/* PHONE ROW */}
                    <div className="flex gap-2 flex-wrap justify-center">
                        <span className="text-white/50">Phone Number:</span>
                        <span className="text-white">+1 949 903 4188</span>
                    </div>

                </div>
            </div>

            <div className="mt-10 border-t border-white/50" />

            <div className="max-w-100 mx-auto px-4 md:px-8 py-4 flex flex-col items-center">
                <Image
                    src="/assets/logo-navbar.svg"
                    alt="LOGO"
                    width={197}
                    height={197}
                    className="w-27.5 sm:w-32.5 md:w-37.5 xl:w-42.5 2xl:w-49.25 h-auto"
                />

                <p className="text-sm lg:text-base leading-none text-center">
                    Copyright Dr. Patrice Khan . All Rights Reserve
                </p>
            </div>
        </footer>
    );
}