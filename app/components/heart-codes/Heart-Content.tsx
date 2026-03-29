import Image from "next/image";

export default function HeartContent() {
    return (
        <>
            <section>
                <p className="max-w-6xl text-center mx-auto text-3xl lg:text-4xl xl:text-[44px] leading-tight text-black my-8 lg:my-10 xl:my-12">A heart-coherence journey grounded in science and designed to support stress regulation, anxiety relief and emotional balance.</p>
            </section>

            <section className="w-full">
                <div className="max-w-7xl mx-auto w-full px-6 py-12 md:px-10 lg:px-12 xl:px-14">
                    <div className="grid grid-cols-1 items-start gap-8 lg:gap-10 lg:grid-cols-5">
                        <div className="col-span-3 pr-4 order-2 lg:order-1">
                            <div className="flex flex-col gap-4 pt-1 text-black text-xl lg:text-2xl xl:text-[26px] leading-snug">
                                <h1 className="text-[#3E2925] text-4xl lg:text-5xl xl:text-[54px] font-bold mb-2">
                                    Do You Feel Disconnected?
                                </h1>

                                <p className="pt-3 flex flex-col text-xl lg:text-2xl xl:text-[26px] leading-snug">
                                    <span>Disconnection doesn’t always look dramatic. </span>
                                    <span>Often, it feels like:</span>
                                </p>

                                <ul className="list-disc font-semibold pl-8 text-black text-xl lg:text-2xl xl:text-[26px] leading-tight space-y-2 marker:text-[18px]">
                                    <li>Anxious</li>
                                    <li>Lonely</li>
                                    <li>Overwhelmed</li>
                                    <li>Hopeless</li>
                                    <li>Mental overload</li>
                                </ul>

                                <p className="text-xl lg:text-2xl xl:text-[26px]">If this feels familiar, you are not alone — nothing is wrong with you.</p>
                                <p className="text-xl lg:text-2xl xl:text-[26px] leading-snug">You don’t need to push yourself harder to change it.</p>

                                <p className="text-xl lg:text-2xl xl:text-[26px] leading-snug">Some people live with a mind that rarely rests — always thinking, always holding things together. Over time, that can leave you feeling tense and drained, even when life looks fine on the outside.</p>

                                <p className="pt-2 text-xl lg:text-2xl xl:text-[26px] leading-snug flex flex-col font-semibold">
                                    <span>You don’t need to become someone new — </span>
                                    <span>just return to yourself.</span>
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-center lg:justify-end col-span-2 order-1 lg:order-2">
                            <div className="mx-auto mt-4 w-65 sm:w-[320px] md:w-95 lg:mt-0 lg:mx-0 lg:w-107.5 xl:w-117.5 2xl:w-127.5">
                                <div
                                    className="h-135 w-65 overflow-hidden rounded-t-[160px] rounded-b-none p-px sm:h-135 sm:w-80 sm:rounded-t-[200px] md:h-155 md:w-90 md:rounded-t-[230px] lg:h-165 lg:w-100 lg:rounded-t-[250px] xl:h-195 xl:w-115 xl:rounded-t-[270px] 2xl:h-200 2xl:w-117.5 2xl:rounded-t-[290px]"
                                    style={{ background: "var(--dark-gold)" }}
                                >
                                    <div className="relative h-full w-full overflow-hidden rounded-t-[inherit] rounded-b-none bg-white p-1">
                                        <div
                                            className="relative h-full w-full overflow-hidden rounded-t-[inherit] rounded-b-none border p-1"
                                            style={{ borderColor: "var(--light-gold)" }}
                                        >
                                            <Image
                                                src="/asssets/demo-image.png"
                                                alt="Demo image"
                                                fill
                                                className="object-cover object-center"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full">
                <div className="max-w-7xl mx-auto w-full px-6 py-12 md:px-10 lg:px-12 xl:px-14">
                    <div className="grid grid-cols-1 items-start gap-8 lg:gap-10 lg:grid-cols-5">
                        <div className="flex justify-center lg:justify-end col-span-2 order-1 lg:order-1">
                            <div className="mx-auto mt-4 w-65 sm:w-[320px] md:w-95 lg:mt-0 lg:mx-0 lg:w-107.5 xl:w-117.5 2xl:w-127.5">
                                <div
                                    className="h-127 w-65 overflow-hidden rounded-t-[160px] rounded-b-none p-px sm:h-127 sm:w-80 sm:rounded-t-[200px] md:h-147 md:w-90 md:rounded-t-[230px] lg:h-158 lg:w-100 lg:rounded-t-[250px] xl:h-188 xl:w-115 xl:rounded-t-[270px] 2xl:h-190 2xl:w-117.5 2xl:rounded-t-[290px]"
                                    style={{ background: "var(--dark-gold)" }}
                                >
                                    <div className="relative h-full w-full overflow-hidden rounded-t-[inherit] rounded-b-none bg-white p-1">
                                        <div
                                            className="relative h-full w-full overflow-hidden rounded-t-[inherit] rounded-b-none border p-1"
                                            style={{ borderColor: "var(--light-gold)" }}
                                        >
                                            <Image
                                                src="/asssets/demo-image.png"
                                                alt="Demo image"
                                                fill
                                                className="object-cover object-center"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-3 pr-4 order-2 lg:order-2">
                            <div className="flex flex-col gap-4 pt-1 text-black text-xl lg:text-2xl xl:text-[26px] leading-snug">
                                <h1 className="text-[#3E2925] text-4xl lg:text-5xl xl:text-[54px] font-bold mb-2">
                                    When You Reconnect, Something Shifts
                                </h1>

                                <p className="pt-3 flex flex-col text-xl lg:text-2xl xl:text-[26px] leading-snug">
                                    As your system begins to settle, something subtle — yet powerful — starts to change.
                                </p>

                                <p className="pt-3 font-semibold flex flex-col text-xl lg:text-2xl xl:text-[26px] leading-snug">
                                    <span>Your thoughts soften.</span>
                                    <span>Your emotions regain rhythm.</span>
                                    <span>Your body feels more at ease.</span>
                                </p>

                                <p className="pt-3 flex flex-col text-xl lg:text-2xl xl:text-[26px] leading-snug">
                                    Many people begin to experience:
                                </p>
                                <ul className="list-disc font-semibold pl-8 text-black text-xl lg:text-2xl xl:text-[26px] leading-tight space-y-2 marker:text-[18px]">
                                    <li>Intuition</li>
                                    <li>Confidence</li>
                                    <li>Hope</li>
                                    <li>Ease and flow</li>
                                    <li>Love and care</li>
                                </ul>
                                <p className="text-xl lg:text-2xl xl:text-[26px] flex flex-col">
                                    <span>This is not about forcing positivity or trying to be different.</span>
                                    <span>It’s about restoring balance — naturally.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full bg-[#fcf1ea]">
                <div className="max-w-7xl mx-auto w-full px-6 py-16 lg:py-22 xl:py-30 md:px-10 lg:px-12 xl:px-14">
                    <div className="grid grid-cols-1 items-center gap-8 lg:gap-10 lg:grid-cols-12">
                        <div className="col-span-7 text-black text-xl lg:text-2xl xl:text-[26px] leading-snug">
                            <p>Instead of trying harder to manage stress, Heart Codes introduces simple heart-based practices you can use in real life.y</p>

                            <p className="mt-4 mb-3 lg:mb-5">Through guided videos and reflective journaling, you will learn tools to:</p>

                            <ul className="mt-3 list-disc pl-8 space-y-1 marker:text-[18px]">
                                <li className="font-semibold">Regulate stress and ease anxiety</li>
                                <li className="font-semibold">Settle emotional overwhelm and restore inner balance</li>
                                <li className="font-semibold">Feel clear, connected, and present</li>
                            </ul>

                            <p className="mt-4">
                                These practices support you during a difficult moment, a busy day, or anytime you need to return to yourself.                            </p>
                        </div>

                        <div className="col-span-5 max-w-[85%]">
                            <h2 className="text-[#3E2925] text-4xl lg:text-5xl xl:text-[54px] font-bold leading-17">
                                Heart Codes Helps You Make This Shift — Gently and Practically
                            </h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full">
                <div className="max-w-7xl mx-auto w-full px-6 py-12 md:px-10 lg:px-12 xl:px-14">
                    <div className="grid grid-cols-1 items-start gap-8 lg:gap-10 lg:grid-cols-5">
                        <div className="flex justify-center lg:justify-end col-span-2 order-1 lg:order-1">
                            <div className="mx-auto mt-4 w-65 sm:w-[320px] md:w-95 lg:mt-0 lg:mx-0 lg:w-107.5 xl:w-117.5 2xl:w-127.5">
                                <div
                                    className="h-127 w-65 overflow-hidden rounded-t-[160px] rounded-b-none p-px sm:h-127 sm:w-80 sm:rounded-t-[200px] md:h-147 md:w-90 md:rounded-t-[230px] lg:h-158 lg:w-100 lg:rounded-t-[250px] xl:h-188 xl:w-115 xl:rounded-t-[270px] 2xl:h-190 2xl:w-117.5 2xl:rounded-t-[290px]"
                                    style={{ background: "var(--dark-gold)" }}
                                >
                                    <div className="relative h-full w-full overflow-hidden rounded-t-[inherit] rounded-b-none bg-white p-1">
                                        <div
                                            className="relative h-full w-full overflow-hidden rounded-t-[inherit] rounded-b-none border p-1"
                                            style={{ borderColor: "var(--light-gold)" }}
                                        >
                                            <Image
                                                src="/asssets/demo-image.png"
                                                alt="Demo image"
                                                fill
                                                className="object-cover object-center"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-3 pr-4 order-2 lg:order-2">
                            <div className="flex flex-col gap-4 pt-1 text-black text-xl lg:text-2xl xl:text-[26px] leading-snug">
                                <h1 className="text-[#3E2925] text-4xl lg:text-5xl xl:text-[54px] font-bold mb-2">
                                    The Heart Is a Proven Source of Intelligence
                                </h1>

                                <p className="pt-3 flex flex-col text-xl lg:text-2xl xl:text-[26px] leading-snug">
                                    When we connect with our heart’s intelligence, people often notice they react less, feel calmer in their body and think more clearly under pressure.
                                </p>

                                <p className="pt-3 text-xl lg:text-2xl xl:text-[26px] leading-snug max-w-xl">
                                    Modern science shows that the heart is far more than a physical pump. It continuously communicates with the brain and nervous system,influencing:
                                </p>

                                <ul className="list-disc font-semibold pl-8 pt-4 text-black text-xl lg:text-2xl xl:text-[26px] leading-snug space-y-3 marker:text-[18px]">
                                    <li>Stress and emotional regulation </li>
                                    <li>Mental clarity and physical wellbeing</li>
                                    <li>Higher qualities such as compassion and intuition</li>
                                </ul>

                                <p className="text-xl lg:text-2xl xl:text-[26px] flex flex-col pt-4">
                                    The heart communicates a wide spectrum of information — from basic physiological balance to deeper emotional awareness.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="mt-16 bg-[#fcf1ea] px-4 py-10 lg:py-14 xl:py-12 md:px-8 lg:px-10 xl:px-12 max-w-7xl mx-auto w-full">
                    <div className="text-center">
                        <h2 className="text-black text-6xl lg:text-5xl xl:text-[54px] leading-snug tracking-tighter font-semibold">
                            Discover Heart Coherence
                        </h2>

                        <p className="mx-auto mt-6 text-black text-xl lg:text-2xl xl:text-[26px] leading-snug">
                            Heart coherence is an optimal state in which the heart, brain, and body move into a smooth, synchronized rhythm.
                        </p>

                        <p className="mx-auto mt-6 text-black text-xl lg:text-2xl xl:text-[26px] leading-snug">
                            In coherence:
                        </p>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
                        <div className="rounded-lg bg-white px-6 py-8 lg:px-4">
                            <ul className="space-y-4 text-black text-xl lg:text-2xl xl:text-[26px] font-semibold leading-tight tracking-tight">
                                <li className="flex items-start gap-3">
                                    <span className="text-(--dark-gold) text-xl leading-none">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M12 4C12.672 4 13.235 4.44 13.599 4.805C14.013 5.22 14.412 5.783 14.759 6.435C15.207 7.28 15.595 8.325 15.813 9.493C16.417 9.1783 17.0534 8.93018 17.711 8.753C18.204 8.624 18.684 8.553 19.11 8.563C19.48 8.572 20.044 8.645 20.45 9.051C20.871 9.472 20.962 10.098 20.933 10.668C20.905 11.196 20.77 11.806 20.548 12.437C20.2715 13.209 19.9064 13.9462 19.46 14.634C19.8879 14.795 20.2997 14.9959 20.69 15.234C21.31 15.62 22 16.203 22 17C22 17.355 21.857 17.642 21.731 17.83C21.32 18.45 20.612 18.855 19.954 19.158C18.926 19.631 17.534 20 16 20C14.45 20 13.04 19.624 12 19.137C10.96 19.624 9.55 20 8 20C6.466 20 5.074 19.631 4.046 19.158C3.388 18.855 2.68 18.45 2.269 17.831C2.09888 17.5868 2.00525 17.2976 2 17C2 16.203 2.69 15.62 3.31 15.235C3.70027 14.9966 4.11208 14.7954 4.54 14.634C4.09358 13.9462 3.72847 13.209 3.452 12.437C3.23 11.806 3.095 11.197 3.067 10.668C3.037 10.098 3.128 9.472 3.55 9.051C3.956 8.645 4.52 8.571 4.89 8.563C5.316 8.553 5.796 8.624 6.289 8.753C6.94661 8.93018 7.58301 9.1783 8.187 9.493C8.38315 8.42648 8.7388 7.39559 9.242 6.435C9.588 5.783 9.987 5.22 10.402 4.805C10.765 4.44 11.327 4 12 4ZM18.145 16.301C17.5245 16.9483 16.8285 17.5187 16.072 18C17.27 17.988 18.35 17.695 19.117 17.342C19.372 17.224 19.579 17.107 19.737 17C19.257 16.676 18.7 16.46 18.145 16.301ZM5.855 16.301C5.3 16.461 4.744 16.676 4.263 17C4.421 17.107 4.628 17.224 4.883 17.342C5.65 17.695 6.73 17.988 7.928 18C7.17143 17.5184 6.47544 16.9476 5.855 16.3V16.301ZM12.183 6.217C12.013 6.047 11.987 6.047 11.817 6.217C11.575 6.46 11.287 6.849 11.008 7.373C10.3475 8.64852 10.0019 10.0636 10 11.5C10.0019 12.9364 10.3475 14.3515 11.008 15.627C11.287 16.151 11.576 16.541 11.818 16.783C11.987 16.953 12.013 16.953 12.183 16.783C12.425 16.541 12.713 16.151 12.992 15.627C13.6525 14.3515 13.9981 12.9364 14 11.5C13.9981 10.0636 13.6525 8.64852 12.992 7.373C12.713 6.849 12.425 6.46 12.183 6.217ZM5.065 10.565C5.08 10.853 5.161 11.269 5.338 11.773C5.692 12.779 6.381 14.003 7.439 15.061C7.95751 15.5783 8.53594 16.0319 9.162 16.412C8.42808 14.9445 8.03174 13.3315 8.002 11.691C7.202 11.181 6.416 10.853 5.783 10.688C5.5483 10.6235 5.3078 10.5823 5.065 10.565ZM18.935 10.565C18.755 10.575 18.513 10.611 18.217 10.688C17.584 10.853 16.798 11.181 15.998 11.691C15.9681 13.3311 15.5718 14.9438 14.838 16.411C15.464 16.0312 16.0424 15.578 16.561 15.061C17.619 14.003 18.308 12.779 18.661 11.773C18.839 11.269 18.92 10.853 18.935 10.565Z" fill="url(#paint0_linear_1928_1201)" />
                                            <defs>
                                                <linearGradient id="paint0_linear_1928_1201" x1="2" y1="12" x2="22" y2="12" gradientUnits="userSpaceOnUse">
                                                    <stop offset="0.129808" stopColor="#C78F1F" />
                                                    <stop offset="0.432692" stopColor="#F7E399" />
                                                    <stop offset="0.586538" stopColor="#F7E399" />
                                                    <stop offset="1" stopColor="#C78F1F" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </span>
                                    <span>The nervous system settles</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-(--dark-gold) text-xl leading-none">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M12 4C12.672 4 13.235 4.44 13.599 4.805C14.013 5.22 14.412 5.783 14.759 6.435C15.207 7.28 15.595 8.325 15.813 9.493C16.417 9.1783 17.0534 8.93018 17.711 8.753C18.204 8.624 18.684 8.553 19.11 8.563C19.48 8.572 20.044 8.645 20.45 9.051C20.871 9.472 20.962 10.098 20.933 10.668C20.905 11.196 20.77 11.806 20.548 12.437C20.2715 13.209 19.9064 13.9462 19.46 14.634C19.8879 14.795 20.2997 14.9959 20.69 15.234C21.31 15.62 22 16.203 22 17C22 17.355 21.857 17.642 21.731 17.83C21.32 18.45 20.612 18.855 19.954 19.158C18.926 19.631 17.534 20 16 20C14.45 20 13.04 19.624 12 19.137C10.96 19.624 9.55 20 8 20C6.466 20 5.074 19.631 4.046 19.158C3.388 18.855 2.68 18.45 2.269 17.831C2.09888 17.5868 2.00525 17.2976 2 17C2 16.203 2.69 15.62 3.31 15.235C3.70027 14.9966 4.11208 14.7954 4.54 14.634C4.09358 13.9462 3.72847 13.209 3.452 12.437C3.23 11.806 3.095 11.197 3.067 10.668C3.037 10.098 3.128 9.472 3.55 9.051C3.956 8.645 4.52 8.571 4.89 8.563C5.316 8.553 5.796 8.624 6.289 8.753C6.94661 8.93018 7.58301 9.1783 8.187 9.493C8.38315 8.42648 8.7388 7.39559 9.242 6.435C9.588 5.783 9.987 5.22 10.402 4.805C10.765 4.44 11.327 4 12 4ZM18.145 16.301C17.5245 16.9483 16.8285 17.5187 16.072 18C17.27 17.988 18.35 17.695 19.117 17.342C19.372 17.224 19.579 17.107 19.737 17C19.257 16.676 18.7 16.46 18.145 16.301ZM5.855 16.301C5.3 16.461 4.744 16.676 4.263 17C4.421 17.107 4.628 17.224 4.883 17.342C5.65 17.695 6.73 17.988 7.928 18C7.17143 17.5184 6.47544 16.9476 5.855 16.3V16.301ZM12.183 6.217C12.013 6.047 11.987 6.047 11.817 6.217C11.575 6.46 11.287 6.849 11.008 7.373C10.3475 8.64852 10.0019 10.0636 10 11.5C10.0019 12.9364 10.3475 14.3515 11.008 15.627C11.287 16.151 11.576 16.541 11.818 16.783C11.987 16.953 12.013 16.953 12.183 16.783C12.425 16.541 12.713 16.151 12.992 15.627C13.6525 14.3515 13.9981 12.9364 14 11.5C13.9981 10.0636 13.6525 8.64852 12.992 7.373C12.713 6.849 12.425 6.46 12.183 6.217ZM5.065 10.565C5.08 10.853 5.161 11.269 5.338 11.773C5.692 12.779 6.381 14.003 7.439 15.061C7.95751 15.5783 8.53594 16.0319 9.162 16.412C8.42808 14.9445 8.03174 13.3315 8.002 11.691C7.202 11.181 6.416 10.853 5.783 10.688C5.5483 10.6235 5.3078 10.5823 5.065 10.565ZM18.935 10.565C18.755 10.575 18.513 10.611 18.217 10.688C17.584 10.853 16.798 11.181 15.998 11.691C15.9681 13.3311 15.5718 14.9438 14.838 16.411C15.464 16.0312 16.0424 15.578 16.561 15.061C17.619 14.003 18.308 12.779 18.661 11.773C18.839 11.269 18.92 10.853 18.935 10.565Z" fill="url(#paint0_linear_1928_1201)" />
                                            <defs>
                                                <linearGradient id="paint0_linear_1928_1201" x1="2" y1="12" x2="22" y2="12" gradientUnits="userSpaceOnUse">
                                                    <stop offset="0.129808" stopColor="#C78F1F" />
                                                    <stop offset="0.432692" stopColor="#F7E399" />
                                                    <stop offset="0.586538" stopColor="#F7E399" />
                                                    <stop offset="1" stopColor="#C78F1F" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </span>
                                    <span>Energy restores</span>
                                </li>
                            </ul>
                        </div>

                        <div className="rounded-lg bg-white px-6 py-8 lg:px-4">
                            <ul className="space-y-4 text-black text-xl lg:text-2xl xl:text-[26px] font-semibold leading-tight tracking-tight">
                                <li className="flex items-center gap-3">
                                    <span className="text-(--dark-gold) text-xl leading-none">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M12 4C12.672 4 13.235 4.44 13.599 4.805C14.013 5.22 14.412 5.783 14.759 6.435C15.207 7.28 15.595 8.325 15.813 9.493C16.417 9.1783 17.0534 8.93018 17.711 8.753C18.204 8.624 18.684 8.553 19.11 8.563C19.48 8.572 20.044 8.645 20.45 9.051C20.871 9.472 20.962 10.098 20.933 10.668C20.905 11.196 20.77 11.806 20.548 12.437C20.2715 13.209 19.9064 13.9462 19.46 14.634C19.8879 14.795 20.2997 14.9959 20.69 15.234C21.31 15.62 22 16.203 22 17C22 17.355 21.857 17.642 21.731 17.83C21.32 18.45 20.612 18.855 19.954 19.158C18.926 19.631 17.534 20 16 20C14.45 20 13.04 19.624 12 19.137C10.96 19.624 9.55 20 8 20C6.466 20 5.074 19.631 4.046 19.158C3.388 18.855 2.68 18.45 2.269 17.831C2.09888 17.5868 2.00525 17.2976 2 17C2 16.203 2.69 15.62 3.31 15.235C3.70027 14.9966 4.11208 14.7954 4.54 14.634C4.09358 13.9462 3.72847 13.209 3.452 12.437C3.23 11.806 3.095 11.197 3.067 10.668C3.037 10.098 3.128 9.472 3.55 9.051C3.956 8.645 4.52 8.571 4.89 8.563C5.316 8.553 5.796 8.624 6.289 8.753C6.94661 8.93018 7.58301 9.1783 8.187 9.493C8.38315 8.42648 8.7388 7.39559 9.242 6.435C9.588 5.783 9.987 5.22 10.402 4.805C10.765 4.44 11.327 4 12 4ZM18.145 16.301C17.5245 16.9483 16.8285 17.5187 16.072 18C17.27 17.988 18.35 17.695 19.117 17.342C19.372 17.224 19.579 17.107 19.737 17C19.257 16.676 18.7 16.46 18.145 16.301ZM5.855 16.301C5.3 16.461 4.744 16.676 4.263 17C4.421 17.107 4.628 17.224 4.883 17.342C5.65 17.695 6.73 17.988 7.928 18C7.17143 17.5184 6.47544 16.9476 5.855 16.3V16.301ZM12.183 6.217C12.013 6.047 11.987 6.047 11.817 6.217C11.575 6.46 11.287 6.849 11.008 7.373C10.3475 8.64852 10.0019 10.0636 10 11.5C10.0019 12.9364 10.3475 14.3515 11.008 15.627C11.287 16.151 11.576 16.541 11.818 16.783C11.987 16.953 12.013 16.953 12.183 16.783C12.425 16.541 12.713 16.151 12.992 15.627C13.6525 14.3515 13.9981 12.9364 14 11.5C13.9981 10.0636 13.6525 8.64852 12.992 7.373C12.713 6.849 12.425 6.46 12.183 6.217ZM5.065 10.565C5.08 10.853 5.161 11.269 5.338 11.773C5.692 12.779 6.381 14.003 7.439 15.061C7.95751 15.5783 8.53594 16.0319 9.162 16.412C8.42808 14.9445 8.03174 13.3315 8.002 11.691C7.202 11.181 6.416 10.853 5.783 10.688C5.5483 10.6235 5.3078 10.5823 5.065 10.565ZM18.935 10.565C18.755 10.575 18.513 10.611 18.217 10.688C17.584 10.853 16.798 11.181 15.998 11.691C15.9681 13.3311 15.5718 14.9438 14.838 16.411C15.464 16.0312 16.0424 15.578 16.561 15.061C17.619 14.003 18.308 12.779 18.661 11.773C18.839 11.269 18.92 10.853 18.935 10.565Z" fill="url(#paint0_linear_1928_1201)" />
                                            <defs>
                                                <linearGradient id="paint0_linear_1928_1201" x1="2" y1="12" x2="22" y2="12" gradientUnits="userSpaceOnUse">
                                                    <stop offset="0.129808" stopColor="#C78F1F" />
                                                    <stop offset="0.432692" stopColor="#F7E399" />
                                                    <stop offset="0.586538" stopColor="#F7E399" />
                                                    <stop offset="1" stopColor="#C78F1F" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </span>
                                    <span>Thoughts become clearer</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-(--dark-gold) text-xl leading-none">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M12 4C12.672 4 13.235 4.44 13.599 4.805C14.013 5.22 14.412 5.783 14.759 6.435C15.207 7.28 15.595 8.325 15.813 9.493C16.417 9.1783 17.0534 8.93018 17.711 8.753C18.204 8.624 18.684 8.553 19.11 8.563C19.48 8.572 20.044 8.645 20.45 9.051C20.871 9.472 20.962 10.098 20.933 10.668C20.905 11.196 20.77 11.806 20.548 12.437C20.2715 13.209 19.9064 13.9462 19.46 14.634C19.8879 14.795 20.2997 14.9959 20.69 15.234C21.31 15.62 22 16.203 22 17C22 17.355 21.857 17.642 21.731 17.83C21.32 18.45 20.612 18.855 19.954 19.158C18.926 19.631 17.534 20 16 20C14.45 20 13.04 19.624 12 19.137C10.96 19.624 9.55 20 8 20C6.466 20 5.074 19.631 4.046 19.158C3.388 18.855 2.68 18.45 2.269 17.831C2.09888 17.5868 2.00525 17.2976 2 17C2 16.203 2.69 15.62 3.31 15.235C3.70027 14.9966 4.11208 14.7954 4.54 14.634C4.09358 13.9462 3.72847 13.209 3.452 12.437C3.23 11.806 3.095 11.197 3.067 10.668C3.037 10.098 3.128 9.472 3.55 9.051C3.956 8.645 4.52 8.571 4.89 8.563C5.316 8.553 5.796 8.624 6.289 8.753C6.94661 8.93018 7.58301 9.1783 8.187 9.493C8.38315 8.42648 8.7388 7.39559 9.242 6.435C9.588 5.783 9.987 5.22 10.402 4.805C10.765 4.44 11.327 4 12 4ZM18.145 16.301C17.5245 16.9483 16.8285 17.5187 16.072 18C17.27 17.988 18.35 17.695 19.117 17.342C19.372 17.224 19.579 17.107 19.737 17C19.257 16.676 18.7 16.46 18.145 16.301ZM5.855 16.301C5.3 16.461 4.744 16.676 4.263 17C4.421 17.107 4.628 17.224 4.883 17.342C5.65 17.695 6.73 17.988 7.928 18C7.17143 17.5184 6.47544 16.9476 5.855 16.3V16.301ZM12.183 6.217C12.013 6.047 11.987 6.047 11.817 6.217C11.575 6.46 11.287 6.849 11.008 7.373C10.3475 8.64852 10.0019 10.0636 10 11.5C10.0019 12.9364 10.3475 14.3515 11.008 15.627C11.287 16.151 11.576 16.541 11.818 16.783C11.987 16.953 12.013 16.953 12.183 16.783C12.425 16.541 12.713 16.151 12.992 15.627C13.6525 14.3515 13.9981 12.9364 14 11.5C13.9981 10.0636 13.6525 8.64852 12.992 7.373C12.713 6.849 12.425 6.46 12.183 6.217ZM5.065 10.565C5.08 10.853 5.161 11.269 5.338 11.773C5.692 12.779 6.381 14.003 7.439 15.061C7.95751 15.5783 8.53594 16.0319 9.162 16.412C8.42808 14.9445 8.03174 13.3315 8.002 11.691C7.202 11.181 6.416 10.853 5.783 10.688C5.5483 10.6235 5.3078 10.5823 5.065 10.565ZM18.935 10.565C18.755 10.575 18.513 10.611 18.217 10.688C17.584 10.853 16.798 11.181 15.998 11.691C15.9681 13.3311 15.5718 14.9438 14.838 16.411C15.464 16.0312 16.0424 15.578 16.561 15.061C17.619 14.003 18.308 12.779 18.661 11.773C18.839 11.269 18.92 10.853 18.935 10.565Z" fill="url(#paint0_linear_1928_1201)" />
                                            <defs>
                                                <linearGradient id="paint0_linear_1928_1201" x1="2" y1="12" x2="22" y2="12" gradientUnits="userSpaceOnUse">
                                                    <stop offset="0.129808" stopColor="#C78F1F" />
                                                    <stop offset="0.432692" stopColor="#F7E399" />
                                                    <stop offset="0.586538" stopColor="#F7E399" />
                                                    <stop offset="1" stopColor="#C78F1F" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </span>
                                    <span>Emotions feel more manageable</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <p className="mx-auto mt-2 lg:mt-4 xl:mt-6 max-w-5xl text-center text-black text-xl lg:text-2xl xl:text-[26px] leading-snug">
                        It’s a state of inner harmony — a skill you can learn and access intentionally to support nervous system balance.
                    </p>
                    <p className="mx-auto mt-2 lg:mt-4 xl:mt-6 max-w-5xl text-center text-black text-xl lg:text-2xl xl:text-[26px] leading-snug">
                        This is what heart coherence feels like — when your heart, brain, and body come back into alignment
                    </p>
                    <p className="font-satisfy mx-auto mt-2 lg:mt-4 xl:mt-6 max-w-5xl text-center text-black text-xl lg:text-2xl xl:text-[26px] leading-snug">
                        Ease replaces effort. Presence replaces strain.
                    </p>
                </div>
            </section>

            <section className="w-full">
                <div className="max-w-7xl mx-auto w-full px-6 py-12 md:px-10 lg:px-12 xl:px-14">
                    <div className="grid grid-cols-1 items-start gap-8 lg:gap-10 lg:grid-cols-5">
                        <div className="col-span-3 pr-4 order-2 lg:order-1">
                            <div className="flex flex-col gap-4 pt-1 text-black text-xl lg:text-2xl xl:text-[26px] leading-snug">
                                <h1 className="text-[#3E2925] text-4xl lg:text-5xl xl:text-[54px] font-bold mb-2">
                                    Backed by 30+ Years of Scientific Research
                                </h1>

                                <p className="pt-3 lg:pt-5 flex flex-col text-xl lg:text-2xl xl:text-[26px] leading-snug">
                                    Heart Codes is informed by over three decades of research from the Institute of Heart Math, a globally recognized research organization studying the heart–brain connection and nervous system regulation.
                                </p>

                                <p className="text-xl lg:text-2xl xl:text-[26px]">This body of work has been:</p>
                                <ul className="list-disc font-semibold pl-8 text-black text-xl lg:text-2xl xl:text-[26px] leading-tight space-y-2 marker:text-[18px]">
                                    <li>Validated by 400+ independent research studies</li>
                                    <li>Applied in healthcare, education, leadership, and trauma-informed settings worldwide</li>
                                    <li>Shown to support stress reduction, emotional resilience, and overall wellbeing</li>
                                </ul>

                                <p className="pt-2 text-xl lg:text-2xl xl:text-[26px] leading-snug flex flex-col">
                                    <span>This research confirms a simple truth:</span>
                                    <span className="font-bold">when the heart leads, the entire system stabilizes.</span>
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-center lg:justify-end col-span-2 order-1 lg:order-2">
                            <div className="mx-auto mt-4 w-65 sm:w-[320px] md:w-95 lg:mt-0 lg:mx-0 lg:w-107.5 xl:w-117.5 2xl:w-127.5">
                                <div
                                    className="h-105 w-65 overflow-hidden rounded-t-[160px] rounded-b-none p-px sm:h-105 sm:w-80 sm:rounded-t-[200px] md:h-120 md:w-90 md:rounded-t-[230px] lg:h-130 lg:w-100 lg:rounded-t-[250px] xl:h-145 xl:w-115 xl:rounded-t-[270px] 2xl:h-150.5 2xl:w-117.5 2xl:rounded-t-[290px]"
                                    style={{ background: "var(--dark-gold)" }}
                                >
                                    <div className="relative h-full w-full overflow-hidden rounded-t-[inherit] rounded-b-none bg-white p-1">
                                        <div
                                            className="relative h-full w-full overflow-hidden rounded-t-[inherit] rounded-b-none border p-1"
                                            style={{ borderColor: "var(--light-gold)" }}
                                        >
                                            <Image
                                                src="/asssets/demo-image.png"
                                                alt="Demo image"
                                                fill
                                                className="object-cover object-center"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full bg-[#fcf1ea]">
                <div className="max-w-7xl mx-auto w-full px-6 py-14 md:px-10 lg:px-12 xl:px-14 lg:py-18 xl:py-22">
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
                        <div className="text-black flex flex-col justify-center h-full translate-y-[-8%] pl-6 lg:pl-10 xl:pl-12">
                            <h2 className="text-[#3E2925] text-4xl lg:text-5xl xl:text-[54px] font-bold leading-15 tracking-tight flex flex-col">
                                <span>Who Is Heart</span>
                                <span>Codes For?</span>
                            </h2>

                            <p className="mt-4 lg:mt-6 text-xl lg:text-2xl xl:text-[26px] leading-snug">
                                Heart Codes is for you if:
                            </p>
                        </div>

                        <div className="text-black text-xl lg:text-2xl xl:text-[26px] leading-tight lg:translate-x-[-8%]">
                            <ul className="space-y-5 lg:space-y-6">
                                <li className="flex items-start gap-4">
                                    <span className="mt-2 h-4 w-4 lg:h-8 lg:w-8 shrink-0 rounded-full bg-linear-to-r from-(--light-orange) to-(--dark-orange)" aria-hidden="true" />
                                    <span>You feel mentally busy and emotionally disconnected</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="mt-2 h-4 w-4 lg:h-8 lg:w-8 shrink-0 rounded-full bg-linear-to-r from-(--light-orange) to-(--dark-orange)" aria-hidden="true" />
                                    <span>You experience chronic stress, anxiety, or nervous-system overload</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="mt-2 h-4 w-4 lg:h-8 lg:w-8 shrink-0 rounded-full bg-linear-to-r from-(--light-orange) to-(--dark-orange)" aria-hidden="true" />
                                    <span>You want science-backed tools that feel gentle, practical, and embodied</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="mt-2 h-4 w-4 lg:h-8 lg:w-8 shrink-0 rounded-full bg-linear-to-r from-(--light-orange) to-(--dark-orange)" aria-hidden="true" />
                                    <span>You are ready to feel calmer, clearer, and more present in daily life</span>
                                </li>
                            </ul>

                            <p className="mt-8 lg:mt-10 leading-snug text-xl lg:text-2xl xl:text-[26px] flex flex-col">
                                <span> prior experience is needed.</span>
                                <span>Just a willingness to pause, listen inward, and reconnect.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full">
                <div className="max-w-7xl mx-auto w-full px-6 py-12 md:px-10 lg:px-12 xl:px-14 lg:py-18 xl:py-22">
                    <div className="grid grid-cols-1 items-start gap-8 lg:gap-10 lg:grid-cols-5">
                        <div className="col-span-3 pr-4 order-2 lg:order-1">
                            <div className="flex flex-col gap-6 pt-1">
                                <h2 className="text-[#3E2925] text-4xl lg:text-5xl xl:text-[54px] font-bold leading-snug">
                                    Begin Your Heart Codes Journey
                                </h2>

                                <p className="text-black text-xl lg:text-2xl xl:text-[26px] leading-snug pt-2">
                                    You don’t have to wait until you are exhausted to feel different.
                                </p>

                                <p className="text-black text-xl lg:text-2xl xl:text-[26px] leading-snug">
                                    If something in you feels ready for more ease, more clarity, and a quieter nervous system, Heart Codes offers a simple place to begin.
                                </p>

                                <p className="text-black text-xl lg:text-2xl xl:text-[26px] leading-snug flex flex-col">
                                    You don’t have to change who you are. You only need to reconnect with what’s already within you.
                                </p>

                                <div className="relative inline-block w-fit mt-4">
                                    {/* Offset border shape */}
                                    <div className="absolute top-2.5 -left-1.5 w-full h-full rounded-r-full border-2 border-black z-50"></div>
                                    {/* Button */}
                                    <button
                                        className="relative py-4 px-10 rounded-r-full text-white font-medium text-sm lg:text-base xl:text-lg"
                                        style={{
                                            background: 'linear-gradient(to right, var(--light-orange), var(--dark-orange))'
                                        }}
                                    >
                                        Book your Clarity Convo.
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center lg:justify-start col-span-2 order-1 lg:order-2">
                            <div className="mx-auto mt-4 w-65 sm:w-[320px] md:w-95 lg:mt-0 lg:mx-0 lg:w-107.5 xl:w-117.5 2xl:w-127.5">
                                <div
                                    className="h-120 w-65 overflow-hidden rounded-t-[160px] rounded-b-none p-px sm:h-120 sm:w-80 sm:rounded-t-[200px] md:h-130 md:w-90 md:rounded-t-[230px] lg:h-145 lg:w-100 lg:rounded-t-[250px] xl:h-150 xl:w-115 xl:rounded-t-[270px] 2xl:h-130 2xl:w-117.5 2xl:rounded-t-[290px]"
                                    style={{ background: "var(--dark-gold)" }}
                                >
                                    <div className="relative h-full w-full overflow-hidden rounded-t-[inherit] rounded-b-none bg-white p-1">
                                        <div
                                            className="relative h-full w-full overflow-hidden rounded-t-[inherit] rounded-b-none border p-1"
                                            style={{ borderColor: "var(--light-gold)" }}
                                        >
                                            <Image
                                                src="/assets/clarity-conversation.jpg"
                                                alt="Clarity Conversation"
                                                fill
                                                className="object-cover object-center"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}