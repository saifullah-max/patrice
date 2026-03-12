import Image from "next/image";

export default function Footer() {
    return (
        <footer
            className="w-full text-white bg-[#DA5B00]"
        >
            <div className="max-w-400 mx-auto px-4 md:px-8 pt-14 md:pt-16">
                <nav className="flex flex-wrap items-center justify-center gap-x-8  md:gap-x-10 text-base lg:text-lg xl:text-xl 2xl:text-2xl leading-none font-semibold">
                    <a href="#" className="hover:opacity-90 transition-opacity">Benefits</a>
                    <a href="#" className="hover:opacity-90 transition-opacity">How It Works</a>
                    <a href="#" className="hover:opacity-90 transition-opacity">About</a>
                    <a href="#" className="hover:opacity-90 transition-opacity">Testimonials</a>
                    <a href="#" className="hover:opacity-90 transition-opacity">Privacy</a>
                    <a href="#" className="hover:opacity-90 transition-opacity">General Terms</a>
                </nav>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm lg:text-base xl:text-lg 2xl:text-xl leading-none">
                    <span className="text-white/55">Email:</span>
                    <span className="text-white">patrice@patricekhan.com</span>
                    <span className="text-white/55">Phone Number:</span>
                    <span className="text-white">+1 949 903 4188</span>
                </div>
            </div>

            <div className="mt-10 border-t border-white/50" />

            <div className="max-w-[400px] mx-auto px-4 md:px-8 py-4 flex flex-col items-center">
                <Image
                    src="/assets/logo-navbar.svg"
                    alt="LOGO"
                    width={197}
                    height={197}
                    className="w-[110px] sm:w-[130px] md:w-[150px] xl:w-[170px] 2xl:w-[197px] h-auto"
                />

                <p className="text-sm lg:text-base leading-none text-center">
                    Copyright Dr. Patrice Khan . All Rights Reserve
                </p>
            </div>
        </footer>
    );
}