'use client'

export default function ContactForm() {
    return (
        <section className="w-full bg-white">
            <div className="max-w-7xl mx-auto w-full px-6 py-12 md:px-10 lg:px-12 xl:px-14 lg:py-16 xl:py-20">
                <div className="mx-auto max-w-4xl text-center mb-16 lg:mb-20 xl:mb-24">
                    <h2 className="text-[#3E2925] text-4xl lg:text-5xl xl:text-[54px] font-bold leading-tight tracking-tight">
                        Connect with Dr Patrice
                    </h2>
                    <p className="mt-3 text-black text-xl lg:text-2xl xl:text-[26px] leading-snug">
                        Schedule your complimentary 20-minute Clarity Call.
                    </p>
                    <p className="mx-auto mt-2 max-w-3xl text-black text-xl lg:text-2xl xl:text-[26px] leading-snug">
                        Contact me via email, Messages, WhatsApp, or the form below—whichever feels easiest for you.
                    </p>
                </div>

                <div className="mt-10 rounded-xl bg-[#F6F6F6] p-4 md:p-6 lg:p-8 xl:p-10">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
                        <aside className="rounded-xl bg-[#F6F6F6] px-4 py-6 lg:px-6 lg:py-8 flex flex-col justify-end">
                            <h3 className="text-black text-2xl lg:text-3xl xl:text-[32px] font-semibold leading-snug">
                                When you message me, please include:
                            </h3>

                            <ul className="mt-4 space-y-2 text-black text-xl lg:text-2xl xl:text-[26px] leading-snug">
                                <li className="flex items-start gap-2">
                                    <span className="mt-1 text-(--dark-orange)">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C12.672 4 13.235 4.44 13.599 4.805C14.013 5.22 14.412 5.783 14.759 6.435C15.207 7.28 15.595 8.325 15.813 9.493C16.417 9.1783 17.0534 8.93018 17.711 8.753C18.204 8.624 18.684 8.553 19.11 8.563C19.48 8.572 20.044 8.645 20.45 9.051C20.871 9.472 20.962 10.098 20.933 10.668C20.905 11.196 20.77 11.806 20.548 12.437C20.2715 13.209 19.9064 13.9462 19.46 14.634C19.8879 14.795 20.2997 14.9959 20.69 15.234C21.31 15.62 22 16.203 22 17C22 17.355 21.857 17.642 21.731 17.83C21.32 18.45 20.612 18.855 19.954 19.158C18.926 19.631 17.534 20 16 20C14.45 20 13.04 19.624 12 19.137C10.96 19.624 9.55 20 8 20C6.466 20 5.074 19.631 4.046 19.158C3.388 18.855 2.68 18.45 2.269 17.831C2.09888 17.5868 2.00525 17.2976 2 17C2 16.203 2.69 15.62 3.31 15.235C3.70027 14.9966 4.11208 14.7954 4.54 14.634C4.09358 13.9462 3.72847 13.209 3.452 12.437C3.23 11.806 3.095 11.197 3.067 10.668C3.037 10.098 3.128 9.472 3.55 9.051C3.956 8.645 4.52 8.571 4.89 8.563C5.316 8.553 5.796 8.624 6.289 8.753C6.94661 8.93018 7.58301 9.1783 8.187 9.493C8.38315 8.42648 8.7388 7.39559 9.242 6.435C9.588 5.783 9.987 5.22 10.402 4.805C10.765 4.44 11.327 4 12 4ZM18.145 16.301C17.5245 16.9483 16.8285 17.5187 16.072 18C17.27 17.988 18.35 17.695 19.117 17.342C19.372 17.224 19.579 17.107 19.737 17C19.257 16.676 18.7 16.46 18.145 16.301ZM5.855 16.301C5.3 16.461 4.744 16.676 4.263 17C4.421 17.107 4.628 17.224 4.883 17.342C5.65 17.695 6.73 17.988 7.928 18C7.17143 17.5184 6.47544 16.9476 5.855 16.3V16.301ZM12.183 6.217C12.013 6.047 11.987 6.047 11.817 6.217C11.575 6.46 11.287 6.849 11.008 7.373C10.3475 8.64852 10.0019 10.0636 10 11.5C10.0019 12.9364 10.3475 14.3515 11.008 15.627C11.287 16.151 11.576 16.541 11.818 16.783C11.987 16.953 12.013 16.953 12.183 16.783C12.425 16.541 12.713 16.151 12.992 15.627C13.6525 14.3515 13.9981 12.9364 14 11.5C13.9981 10.0636 13.6525 8.64852 12.992 7.373C12.713 6.849 12.425 6.46 12.183 6.217ZM5.065 10.565C5.08 10.853 5.161 11.269 5.338 11.773C5.692 12.779 6.381 14.003 7.439 15.061C7.95751 15.5783 8.53594 16.0319 9.162 16.412C8.42808 14.9445 8.03174 13.3315 8.002 11.691C7.202 11.181 6.416 10.853 5.783 10.688C5.5483 10.6235 5.3078 10.5823 5.065 10.565ZM18.935 10.565C18.755 10.575 18.513 10.611 18.217 10.688C17.584 10.853 16.798 11.181 15.998 11.691C15.9681 13.3311 15.5718 14.9438 14.838 16.411C15.464 16.0312 16.0424 15.578 16.561 15.061C17.619 14.003 18.308 12.779 18.661 11.773C18.839 11.269 18.92 10.853 18.935 10.565Z" fill="url(#paint0_linear_1928_1205)" />
                                            <defs>
                                                <linearGradient id="paint0_linear_1928_1205" x1="22" y1="12" x2="2" y2="12" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#DA5B00" />
                                                    <stop offset="1" stopColor="#E27B34" />
                                                </linearGradient>
                                            </defs>
                                        </svg>

                                    </span>
                                    <span>Your Time zone</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1 text-(--dark-orange)">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C12.672 4 13.235 4.44 13.599 4.805C14.013 5.22 14.412 5.783 14.759 6.435C15.207 7.28 15.595 8.325 15.813 9.493C16.417 9.1783 17.0534 8.93018 17.711 8.753C18.204 8.624 18.684 8.553 19.11 8.563C19.48 8.572 20.044 8.645 20.45 9.051C20.871 9.472 20.962 10.098 20.933 10.668C20.905 11.196 20.77 11.806 20.548 12.437C20.2715 13.209 19.9064 13.9462 19.46 14.634C19.8879 14.795 20.2997 14.9959 20.69 15.234C21.31 15.62 22 16.203 22 17C22 17.355 21.857 17.642 21.731 17.83C21.32 18.45 20.612 18.855 19.954 19.158C18.926 19.631 17.534 20 16 20C14.45 20 13.04 19.624 12 19.137C10.96 19.624 9.55 20 8 20C6.466 20 5.074 19.631 4.046 19.158C3.388 18.855 2.68 18.45 2.269 17.831C2.09888 17.5868 2.00525 17.2976 2 17C2 16.203 2.69 15.62 3.31 15.235C3.70027 14.9966 4.11208 14.7954 4.54 14.634C4.09358 13.9462 3.72847 13.209 3.452 12.437C3.23 11.806 3.095 11.197 3.067 10.668C3.037 10.098 3.128 9.472 3.55 9.051C3.956 8.645 4.52 8.571 4.89 8.563C5.316 8.553 5.796 8.624 6.289 8.753C6.94661 8.93018 7.58301 9.1783 8.187 9.493C8.38315 8.42648 8.7388 7.39559 9.242 6.435C9.588 5.783 9.987 5.22 10.402 4.805C10.765 4.44 11.327 4 12 4ZM18.145 16.301C17.5245 16.9483 16.8285 17.5187 16.072 18C17.27 17.988 18.35 17.695 19.117 17.342C19.372 17.224 19.579 17.107 19.737 17C19.257 16.676 18.7 16.46 18.145 16.301ZM5.855 16.301C5.3 16.461 4.744 16.676 4.263 17C4.421 17.107 4.628 17.224 4.883 17.342C5.65 17.695 6.73 17.988 7.928 18C7.17143 17.5184 6.47544 16.9476 5.855 16.3V16.301ZM12.183 6.217C12.013 6.047 11.987 6.047 11.817 6.217C11.575 6.46 11.287 6.849 11.008 7.373C10.3475 8.64852 10.0019 10.0636 10 11.5C10.0019 12.9364 10.3475 14.3515 11.008 15.627C11.287 16.151 11.576 16.541 11.818 16.783C11.987 16.953 12.013 16.953 12.183 16.783C12.425 16.541 12.713 16.151 12.992 15.627C13.6525 14.3515 13.9981 12.9364 14 11.5C13.9981 10.0636 13.6525 8.64852 12.992 7.373C12.713 6.849 12.425 6.46 12.183 6.217ZM5.065 10.565C5.08 10.853 5.161 11.269 5.338 11.773C5.692 12.779 6.381 14.003 7.439 15.061C7.95751 15.5783 8.53594 16.0319 9.162 16.412C8.42808 14.9445 8.03174 13.3315 8.002 11.691C7.202 11.181 6.416 10.853 5.783 10.688C5.5483 10.6235 5.3078 10.5823 5.065 10.565ZM18.935 10.565C18.755 10.575 18.513 10.611 18.217 10.688C17.584 10.853 16.798 11.181 15.998 11.691C15.9681 13.3311 15.5718 14.9438 14.838 16.411C15.464 16.0312 16.0424 15.578 16.561 15.061C17.619 14.003 18.308 12.779 18.661 11.773C18.839 11.269 18.92 10.853 18.935 10.565Z" fill="url(#paint0_linear_1928_1205)" />
                                            <defs>
                                                <linearGradient id="paint0_linear_1928_1205" x1="22" y1="12" x2="2" y2="12" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#DA5B00" />
                                                    <stop offset="1" stopColor="#E27B34" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </span>
                                    <span>A few days and times that work best for you</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1 text-(--dark-orange)">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C12.672 4 13.235 4.44 13.599 4.805C14.013 5.22 14.412 5.783 14.759 6.435C15.207 7.28 15.595 8.325 15.813 9.493C16.417 9.1783 17.0534 8.93018 17.711 8.753C18.204 8.624 18.684 8.553 19.11 8.563C19.48 8.572 20.044 8.645 20.45 9.051C20.871 9.472 20.962 10.098 20.933 10.668C20.905 11.196 20.77 11.806 20.548 12.437C20.2715 13.209 19.9064 13.9462 19.46 14.634C19.8879 14.795 20.2997 14.9959 20.69 15.234C21.31 15.62 22 16.203 22 17C22 17.355 21.857 17.642 21.731 17.83C21.32 18.45 20.612 18.855 19.954 19.158C18.926 19.631 17.534 20 16 20C14.45 20 13.04 19.624 12 19.137C10.96 19.624 9.55 20 8 20C6.466 20 5.074 19.631 4.046 19.158C3.388 18.855 2.68 18.45 2.269 17.831C2.09888 17.5868 2.00525 17.2976 2 17C2 16.203 2.69 15.62 3.31 15.235C3.70027 14.9966 4.11208 14.7954 4.54 14.634C4.09358 13.9462 3.72847 13.209 3.452 12.437C3.23 11.806 3.095 11.197 3.067 10.668C3.037 10.098 3.128 9.472 3.55 9.051C3.956 8.645 4.52 8.571 4.89 8.563C5.316 8.553 5.796 8.624 6.289 8.753C6.94661 8.93018 7.58301 9.1783 8.187 9.493C8.38315 8.42648 8.7388 7.39559 9.242 6.435C9.588 5.783 9.987 5.22 10.402 4.805C10.765 4.44 11.327 4 12 4ZM18.145 16.301C17.5245 16.9483 16.8285 17.5187 16.072 18C17.27 17.988 18.35 17.695 19.117 17.342C19.372 17.224 19.579 17.107 19.737 17C19.257 16.676 18.7 16.46 18.145 16.301ZM5.855 16.301C5.3 16.461 4.744 16.676 4.263 17C4.421 17.107 4.628 17.224 4.883 17.342C5.65 17.695 6.73 17.988 7.928 18C7.17143 17.5184 6.47544 16.9476 5.855 16.3V16.301ZM12.183 6.217C12.013 6.047 11.987 6.047 11.817 6.217C11.575 6.46 11.287 6.849 11.008 7.373C10.3475 8.64852 10.0019 10.0636 10 11.5C10.0019 12.9364 10.3475 14.3515 11.008 15.627C11.287 16.151 11.576 16.541 11.818 16.783C11.987 16.953 12.013 16.953 12.183 16.783C12.425 16.541 12.713 16.151 12.992 15.627C13.6525 14.3515 13.9981 12.9364 14 11.5C13.9981 10.0636 13.6525 8.64852 12.992 7.373C12.713 6.849 12.425 6.46 12.183 6.217ZM5.065 10.565C5.08 10.853 5.161 11.269 5.338 11.773C5.692 12.779 6.381 14.003 7.439 15.061C7.95751 15.5783 8.53594 16.0319 9.162 16.412C8.42808 14.9445 8.03174 13.3315 8.002 11.691C7.202 11.181 6.416 10.853 5.783 10.688C5.5483 10.6235 5.3078 10.5823 5.065 10.565ZM18.935 10.565C18.755 10.575 18.513 10.611 18.217 10.688C17.584 10.853 16.798 11.181 15.998 11.691C15.9681 13.3311 15.5718 14.9438 14.838 16.411C15.464 16.0312 16.0424 15.578 16.561 15.061C17.619 14.003 18.308 12.779 18.661 11.773C18.839 11.269 18.92 10.853 18.935 10.565Z" fill="url(#paint0_linear_1928_1205)" />
                                            <defs>
                                                <linearGradient id="paint0_linear_1928_1205" x1="22" y1="12" x2="2" y2="12" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#DA5B00" />
                                                    <stop offset="1" stopColor="#E27B34" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </span>
                                    <span>Your preferred platform for our call (Zoom or WhatsApp)</span>
                                </li>
                            </ul>

                            <p className="mt-5 text-[#1A120E] text-xl lg:text-2xl xl:text-[26px] leading-tight">
                                If you have any questions before scheduling, feel free to reach out—I’m happy to help.
                                Once we confirm a time, I’ll send you the Zoom link (if applicable) and look forward to our conversation.
                            </p>
                        </aside>

                        <div>
                            <form className="space-y-4 rounded-xl bg-[#FBFBFB] px-4 py-5 md:px-5 md:py-6 lg:px-6 lg:py-7" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label className="block text-[#1A120E] text-xl lg:text-2xl xl:text-[26px] font-semibold leading-none">
                                        Name<span className="text-(--dark-orange)">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="my-3 h-16 w-full rounded-md border border-black/10 bg-[#fdf8f4] px-4 text-[#1A120E] text-lg lg:text-xl xl:text-2xl placeholder:text-black/45 outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-[#1A120E] text-xl lg:text-2xl xl:text-[26px] font-semibold leading-none">
                                        Email<span className="text-(--dark-orange)">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Johndoe@gmail.com"
                                        className="my-3 h-16 w-full rounded-md border border-black/10 bg-[#fdf8f4] px-4 text-[#1A120E] text-lg lg:text-xl xl:text-2xl placeholder:text-black/45 outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-[#1A120E] text-xl lg:text-2xl xl:text-[26px] font-semibold leading-none">
                                        Phone Number<span className="text-(--dark-orange)">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        placeholder="+1 (406) 555-0120"
                                        className="my-3 h-16 w-full rounded-md border border-black/10 bg-[#fdf8f4] px-4 text-[#1A120E] text-lg lg:text-xl xl:text-2xl placeholder:text-black/45 outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-[#1A120E] text-xl lg:text-2xl xl:text-[26px] font-semibold leading-none">
                                        Write your message<span className="text-(--dark-orange)">*</span>
                                    </label>
                                    <textarea
                                        placeholder="Write your message..."
                                        rows={5}
                                        className="my-3 w-full rounded-md border border-black/10 bg-[#fdf8f4] px-4 py-3 text-[#1A120E] text-lg lg:text-xl xl:text-2xl placeholder:text-black/45 outline-none resize-none"
                                    />
                                </div>

                            </form>
                            <div className="pt-4 flex justify-center lg:justify-end">
                                <div className="relative inline-block">
                                    <div className="absolute z-20 top-2 -left-1.5 h-full w-full rounded-r-full border-2 border-black" />
                                    <button
                                        type="submit"
                                        className="relative z-10 py-3 px-16 rounded-r-full text-white font-medium text-sm lg:text-base xl:text-lg"
                                        style={{
                                            background: "linear-gradient(to right, var(--light-orange), var(--dark-orange))",
                                        }}
                                    >
                                        Send
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
