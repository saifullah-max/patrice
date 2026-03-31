'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ResetContent() {
    const router = useRouter(

    )
    return (
        <>
            <section className="max-w-7xl mx-auto w-full px-6 py-12 md:px-10 lg:px-12 xl:px-14">
                <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 lg:gap-6">
                    <div className="col-span-3">
                        <h2 className="text-black text-4xl lg:text-5xl xl:text-[54px] leading-snug tracking-tighter font-medium">
                            Some struggles didn’t begin with you.
                        </h2>
                    </div>

                    <div className="pt-4 pl-4 lg:pl-8 xl:pl-10 col-span-4 flex flex-col gap-6 text-black text-xl lg:text-2xl xl:text-[26px] leading- tracking-tight">
                        <p>
                            <span className="font-semibold">RESET CODES</span> is a gentle, trauma-informed healing
                            experience that supports nervous-system regulation while exploring inherited emotional
                            patterns.
                        </p>

                        <p>This work doesn’t force change — it creates the conditions for your system to soften, settle, and reconnect in its own time.</p>

                        <p>
                            This isn’t about fixing you. It’s about returning to yourself — with more clarity, steadiness, and ease.                        </p>
                    </div>
                </div>
            </section>

            <section>
                <div className="mt-16 bg-[#fcf1ea] px-4 py-10 md:px-8 lg:px-10 xl:px-12  w-full">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center">
                            <h2 className="text-black text-6xl lg:text-5xl xl:text-[54px] leading-snug tracking-tighter font-semibold">
                                Inherited Patterns
                            </h2>

                            <p className="mx-auto mt-6 text-black text-xl lg:text-2xl xl:text-[26px] leading-snug">
                                Protective responses learned through family and lived experience can continue to shape how safe, connected, or supported you feel today.
                            </p>

                            <p className="mx-auto mt-6 text-black text-xl lg:text-2xl xl:text-[26px] leading-snug">
                                They may show up as:
                            </p>
                        </div>

                        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
                            <div className="rounded-lg bg-white px-6 py-8 lg:px-4">
                                <ul className="space-y-4 text-black text-xl lg:text-2xl xl:text-[26px] font-semibold leading-tight tracking-tight">
                                    <li className="flex items-start gap-3">
                                        <span className="text-(--dark-gold) text-xl leading-none mt-2">
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
                                        <span>Anxiety or feeling constantly on edge</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-(--dark-gold) text-xl leading-none mt-2">
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
                                        <span>Emotional overwhelm or shutdown</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="rounded-lg bg-white px-6 py-8 lg:px-4">
                                <ul className="space-y-4 text-black text-xl lg:text-2xl xl:text-[26px] font-semibold leading-tight tracking-tight">
                                    <li className="flex items-center gap-3">
                                        <span className="text-(--dark-gold) text-xl leading-none mt-2">
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
                                        <span>Emotional overwhelm or shutdown</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-(--dark-gold) text-xl leading-none mt-2">
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
                                        <span>Emotional overwhelm or shutdown</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <p className="flex flex-col mx-auto mt-10 lg:mt-14 xl:mt-18 max-w-5xl text-center text-black text-xl lg:text-2xl xl:text-[26px] leading-snug">
                            <span>What you are experiencing is valid —</span>
                            <span>and it lives not only in the mind, but in the body and nervous system.</span>
                        </p>
                    </div>
                </div>
            </section>

            <section className="w-full">
                <div className="max-w-7xl mx-auto w-full px-6 py-12 md:px-10 lg:px-12 xl:px-10 pr-4!">
                    <div className="grid grid-cols-1 items-start lg:grid-cols-5">
                        <div className="col-span-3 pr-4 order-2 lg:order-1 pt-12 lg:pt-16 xl:pt-24">
                            <div className="flex flex-col gap-4 pt-1 text-black text-xl lg:text-2xl xl:text-[26px] leading-snug">
                                <h1 className="text-[#3E2925] text-4xl lg:text-5xl xl:text-[54px] font-bold mb-2">
                                    The RESET CODES Approach
                                </h1>

                                <p className="pt-3 lg:pt-5 text-xl lg:text-2xl xl:text-[26px] leading-snug">
                                    <span className="font-semibold">RESET CODES</span> works beneath surface-level insight — where the nervous system holds memory and adaptation.
                                </p>

                                <p className="text-xl lg:text-2xl xl:text-[26px]">
                                    Through gentle somatic awareness and intuitive guidance, sessions support your system in recognizing patterns that once protected you but may no longer be needed.
                                </p>

                                <p className="pt-2 text-xl lg:text-2xl xl:text-[26px] leading-snug flex flex-col">
                                    <span>Change unfolds through safety, presence, and pacing</span>
                                    <span>— not pressure.</span>
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-center lg:justify-start col-span-2 order-1 lg:order-2">
                            <div className="mx-auto mt-4 w-65 sm:w-[320px] md:w-95 lg:mt-0 lg:mx-0 lg:w-107.5 xl:w-117.5 2xl:w-127.5">
                                <div
                                    className="h-100 w-65 overflow-hidden rounded-t-[160px] rounded-b-none p-px sm:h-105 sm:w-80 sm:rounded-t-[200px] md:h-110 md:w-90 md:rounded-t-[230px] lg:h-120 lg:w-100 lg:rounded-t-[250px] xl:h-135 xl:w-118 xl:rounded-t-[270px] 2xl:h-140 2xl:w-117.5 2xl:rounded-t-[290px]"
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
                <div className="max-w-7xl mx-auto w-full px-6 py-16 lg:py-22 xl:py-30 md:px-10 lg:px-12 xl:px-14">
                    <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-5">
                        <div className="col-span-3 text-black text-xl lg:text-2xl xl:text-[26px] leading-snug">
                            <p>Many people who feel drawn to <span className="font-bold">RESET CODES</span> are not new to inner work.</p>

                            <p className="mt-4">They have read, reflected, and tried to understand themselves — yet something deeper still feels unresolved.</p>

                            <p className="mt-4">Often it is not a lack of insight.</p>

                            <p className="mt-4">
                                It is a nervous system that has learned to stay alert long after the original story has passed.
                            </p>

                            <p className="mt-4">
                                When your system begins to feel supported rather than pushed, subtle shifts can emerge — a quiet steadiness, clearer boundaries, and a sense of coming back into alignment with yourself.
                            </p>
                        </div>

                        <div className="col-span-2">
                            <h2 className="text-[#3E2925] text-4xl lg:text-5xl xl:text-[54px] font-bold leading-17">
                                A Different Kind of Healing Space
                            </h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full">
                <div className="max-w-7xl mx-auto w-full px-6 py-12 md:px-10 lg:px-12 xl:px-14">
                    <div className="grid grid-cols-1 items-center gap-8 lg:gap-10 lg:grid-cols-5">

                        <div className="flex justify-center lg:justify-end col-span-2 order-1 lg:order-1">
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

                        <div className="col-span-3 pr-4 order-2 lg:order-2">
                            <div className="flex flex-col gap-4 pt-1 text-black text-xl lg:text-2xl xl:text-[26px] leading-snug">
                                <h1 className="text-[#3E2925] text-4xl lg:text-5xl xl:text-[54px] font-bold mb-2">
                                    Why This Work Matters
                                </h1>

                                <p className="border border-black/50 p-5 mt-3 rounded-md lg:mt-5 flex flex-col text-xl lg:text-2xl xl:text-[26px] leading-snug">
                                    Research in epigenetics and nervous-system science suggests that stress responses
                                    can echo across generations. Without awareness, inherited stress can quietly shape
                                    how we move through relationships, decisions, and daily life.
                                </p>

                                <p className="border border-black/50 p-5 rounded-md mt-2 text-xl lg:text-2xl xl:text-[26px] leading-snug">
                                    <span className="font-semibold">RESET CODES</span> offers a regulated space where stored tension can begin to soften — at your own rhythm.
                                </p>
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
                                Who This Is For
                            </h2>

                            <p className="mt-4 lg:mt-6 text-xl lg:text-2xl xl:text-[26px] leading-snug">
                                <span className="font-semibold">RESET CODES</span> may resonate if you:
                            </p>
                        </div>

                        <div className="text-black text-xl lg:text-2xl xl:text-[26px] leading-tight lg:translate-x-[-8%]">
                            <ul className="space-y-5 lg:space-y-6">
                                <li className="flex items-start gap-4">
                                    <span className="mt-2 h-4 w-4 lg:h-8 lg:w-8 shrink-0 rounded-full bg-linear-to-r from-(--light-orange) to-(--dark-orange)" aria-hidden="true" />
                                    <span>Notice repeating life or relationship patterns.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="mt-2 h-4 w-4 lg:h-8 lg:w-8 shrink-0 rounded-full bg-linear-to-r from-(--light-orange) to-(--dark-orange)" aria-hidden="true" />
                                    <span>Want change that includes your nervous system — not just your thoughts.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="mt-2 h-4 w-4 lg:h-8 lg:w-8 shrink-0 rounded-full bg-linear-to-r from-(--light-orange) to-(--dark-orange)" aria-hidden="true" />
                                    <span>Have done therapy or personal development but still feel something deeper remains.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="mt-2 h-4 w-4 lg:h-8 lg:w-8 shrink-0 rounded-full bg-linear-to-r from-(--light-orange) to-(--dark-orange)" aria-hidden="true" />
                                    <span>You are ready for change that feels embodied and sustainable.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full">
                <div className="max-w-7xl mx-auto w-full px-6 py-14 md:px-10 lg:px-12 xl:px-14 lg:py-18 xl:py-22">
                    <div className="mx-auto max-w-4xl text-center">
                        <h2 className="text-[#3E2925] text-4xl lg:text-5xl xl:text-[54px] font-bold leading-snug">
                            Ways to Work Together
                        </h2>

                        <p className="mt-4 text-black text-xl lg:text-2xl xl:text-[26px] leading-snug">
                            <span className="font-semibold">RESET CODES</span> is an invitation to come home to yourself — gently and in your own time.
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">

                        {/* Item 1 */}
                        <div className="flex flex-col items-center text-center">
                            <div className="mx-auto mt-4 w-65 sm:w-[320px] md:w-95 lg:mt-0 lg:mx-0 lg:w-90 xl:w-100">
                                <div
                                    className="h-95 w-60 overflow-hidden rounded-t-[160px] rounded-b-none p-px 
                           sm:h-85 sm:w-60 sm:rounded-t-[200px] 
                           md:h-95 md:w-70 md:rounded-t-[230px] 
                           lg:h-105 lg:w-80 lg:rounded-t-[250px] 
                           xl:h-115 xl:w-90 xl:rounded-t-[270px]"
                                    style={{ background: "var(--dark-gold)" }}
                                >
                                    <div className="relative h-full w-full overflow-hidden rounded-t-[inherit] rounded-b-none bg-white p-1">
                                        <div
                                            className="relative h-full w-full overflow-hidden rounded-t-[inherit] rounded-b-none border p-1"
                                            style={{ borderColor: "var(--light-gold)" }}
                                        >
                                            {/* <Image
                                                src="/asssets/demo-image.png"
                                                alt="Corporate Wellness Programs"
                                                fill
                                                className="object-cover object-center"
                                            /> */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p className="mt-4 text-[#3E2925] text-xl lg:text-2xl xl:text-[26px] leading-snug">
                                Corporate Wellness Programs
                            </p>
                        </div>

                        {/* Item 2 */}
                        <div className="flex flex-col items-center text-center">
                            <div className="mx-auto mt-4 w-65 sm:w-[320px] md:w-95 lg:mt-0 lg:mx-0 lg:w-100 xl:w-100">
                                <div
                                    className="h-95 w-60 overflow-hidden rounded-t-[160px] rounded-b-none p-px 
                           sm:h-85 sm:w-60 sm:rounded-t-[200px] 
                           md:h-95 md:w-70 md:rounded-t-[230px] 
                           lg:h-105 lg:w-80 lg:rounded-t-[250px] 
                           xl:h-115 xl:w-90 xl:rounded-t-[270px]"
                                    style={{ background: "var(--dark-gold)" }}
                                >
                                    <div className="relative h-full w-full overflow-hidden rounded-t-[inherit] rounded-b-none bg-white p-1">
                                        <div
                                            className="relative h-full w-full overflow-hidden rounded-t-[inherit] rounded-b-none border p-1"
                                            style={{ borderColor: "var(--light-gold)" }}
                                        >
                                            {/* <Image
                                                src="/asssets/demo-image.png"
                                                alt="Group Workshops"
                                                fill
                                                className="object-cover object-center"
                                            /> */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p className="mt-4 text-[#3E2925] text-xl lg:text-2xl xl:text-[26px] leading-snug">
                                Group Workshops
                            </p>
                        </div>

                        {/* Item 3 */}
                        <div className="flex flex-col items-center text-center">
                            <div className="mx-auto mt-4 w-65 sm:w-[320px] md:w-95 lg:mt-0 lg:mx-0 lg:w-100 xl:w-100">
                                <div
                                    className="h-95 w-60 overflow-hidden rounded-t-[160px] rounded-b-none p-px 
                           sm:h-85 sm:w-60 sm:rounded-t-[200px] 
                           md:h-95 md:w-70 md:rounded-t-[230px] 
                           lg:h-105 lg:w-80 lg:rounded-t-[250px] 
                           xl:h-115 xl:w-90 xl:rounded-t-[270px]"
                                    style={{ background: "var(--dark-gold)" }}
                                >
                                    <div className="relative h-full w-full overflow-hidden rounded-t-[inherit] rounded-b-none bg-white p-1">
                                        <div
                                            className="relative h-full w-full overflow-hidden rounded-t-[inherit] rounded-b-none border p-1"
                                            style={{ borderColor: "var(--light-gold)" }}
                                        >
                                            {/* <Image
                                                src="/asssets/demo-image.png"
                                                alt="One-on-One RESET CODES Sessions"
                                                fill
                                                className="object-cover object-center"
                                            /> */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p className="mt-4 text-[#3E2925] text-xl lg:text-2xl xl:text-[26px] leading-snug">
                                One-on-One RESET CODES Sessions
                            </p>
                        </div>

                    </div>

                    <div className="mt-8 lg:mt-10 flex justify-center">
                        <div className="relative inline-block group cursor-pointer">

                            {/* Offset border shape */}
                            <div className="absolute z-20 top-2.5 -left-1.5 h-full w-full rounded-r-full border-2 border-black transition-all duration-200"></div>

                            {/* Button */}
                            <button
                                className="relative py-4 px-10 rounded-r-full text-white font-medium text-sm lg:text-base xl:text-lg transition-all duration-300 group-hover:-translate-x-3.5 group-hover:translate-y-4.5"
                                style={{
                                    background: "linear-gradient(to right, var(--light-orange), var(--dark-orange))"
                                }}
                            >
                                Schedule A Session
                            </button>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}