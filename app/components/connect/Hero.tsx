import { Mail, MessageCircleMore, PhoneCall } from "lucide-react";

const contactItems = [
    {
        label: "Email:",
        value: "patrice@patricekhan.com",
        icon: <svg width="190" height="190" viewBox="0 0 190 190" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="186" height="186" rx="93" stroke="url(#paint0_linear_1801_228)" strokeWidth="4" />
            <path d="M113.833 126.167H77.1666C66.1666 126.167 58.8333 120.667 58.8333 107.833V82.1666C58.8333 69.3333 66.1666 63.8333 77.1666 63.8333H113.833C124.833 63.8333 132.167 69.3333 132.167 82.1666V107.833C132.167 120.667 124.833 126.167 113.833 126.167Z" stroke="url(#paint1_linear_1801_228)" strokeWidth="6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M113.833 84L102.357 93.1667C98.5801 96.1733 92.3834 96.1733 88.6067 93.1667L77.1667 84" stroke="url(#paint2_linear_1801_228)" strokeWidth="6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <defs>
                <linearGradient id="paint0_linear_1801_228" x1="190" y1="95" x2="0" y2="95" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#DA5B00" />
                    <stop offset="1" stopColor="#E27B34" />
                </linearGradient>
                <linearGradient id="paint1_linear_1801_228" x1="132.167" y1="95" x2="58.8333" y2="95" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#DA5B00" />
                    <stop offset="1" stopColor="#E27B34" />
                </linearGradient>
                <linearGradient id="paint2_linear_1801_228" x1="113.833" y1="89.7108" x2="77.1667" y2="89.7108" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#DA5B00" />
                    <stop offset="1" stopColor="#E27B34" />
                </linearGradient>
            </defs>
        </svg>,
    },
    {
        label: "Messages:",
        value: "+1 949 903 4188",
        icon: <svg width="190" height="190" viewBox="0 0 190 190" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="186" height="186" rx="93" stroke="url(#paint0_linear_1801_229)" strokeWidth="4" />
            <path d="M84.5 89.5H110.167" stroke="url(#paint1_linear_1801_229)" strokeWidth="6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M77.1666 118.577H91.8333L108.15 129.43C110.57 131.043 113.833 129.32 113.833 126.387V118.577C124.833 118.577 132.167 111.243 132.167 100.243V78.2433C132.167 67.2433 124.833 59.91 113.833 59.91H77.1666C66.1666 59.91 58.8333 67.2433 58.8333 78.2433V100.243C58.8333 111.243 66.1666 118.577 77.1666 118.577Z" stroke="url(#paint2_linear_1801_229)" strokeWidth="6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <defs>
                <linearGradient id="paint0_linear_1801_229" x1="190" y1="95" x2="0" y2="95" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#DA5B00" />
                    <stop offset="1" stopColor="#E27B34" />
                </linearGradient>
                <linearGradient id="paint1_linear_1801_229" x1="110.167" y1="90" x2="84.5" y2="90" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#DA5B00" />
                    <stop offset="1" stopColor="#E27B34" />
                </linearGradient>
                <linearGradient id="paint2_linear_1801_229" x1="132.167" y1="94.9796" x2="58.8333" y2="94.9796" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#DA5B00" />
                    <stop offset="1" stopColor="#E27B34" />
                </linearGradient>
            </defs>
        </svg>
        ,
    },
    {
        label: "WhatsApp:",
        value: "+1 949 903 4188",
        icon: <svg width="190" height="190" viewBox="0 0 190 190" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="186" height="186" rx="93" stroke="url(#paint0_linear_1801_230)" strokeWidth="4" />
            <path d="M121.35 69.0033C117.988 65.6084 113.984 62.9165 109.571 61.0847C105.158 59.2528 100.425 58.3175 95.6466 58.3333C75.6266 58.3333 59.3099 74.65 59.3099 94.67C59.3099 101.087 60.9966 107.32 64.1499 112.82L59.0166 131.667L78.2666 126.607C83.5833 129.503 89.5599 131.043 95.6466 131.043C115.667 131.043 131.983 114.727 131.983 94.7067C131.983 84.99 128.207 75.86 121.35 69.0033ZM95.6466 124.883C90.2199 124.883 84.9033 123.417 80.2466 120.667L79.1466 120.007L67.7066 123.013L70.7499 111.867L70.0166 110.73C67.0009 105.916 65.4 100.351 65.3966 94.67C65.3966 78.0233 78.9633 64.4567 95.6099 64.4567C103.677 64.4567 111.267 67.61 116.95 73.33C119.765 76.1308 121.995 79.4627 123.512 83.1322C125.029 86.8017 125.802 90.736 125.787 94.7067C125.86 111.353 112.293 124.883 95.6466 124.883ZM112.22 102.297C111.303 101.857 106.83 99.6567 106.023 99.3267C105.18 99.0333 104.593 98.8867 103.97 99.7667C103.347 100.683 101.623 102.737 101.11 103.323C100.597 103.947 100.047 104.02 99.1299 103.543C98.2133 103.103 95.2799 102.113 91.8333 99.0333C89.1199 96.6133 87.3233 93.6433 86.7733 92.7267C86.2599 91.81 86.6999 91.3333 87.1766 90.8567C87.5799 90.4533 88.0933 89.7933 88.5333 89.28C88.9733 88.7667 89.1566 88.3633 89.4499 87.7767C89.7433 87.1533 89.5966 86.64 89.3766 86.2C89.1566 85.76 87.3233 81.2867 86.5899 79.4533C85.8566 77.6933 85.0866 77.9133 84.5366 77.8767H82.7766C82.1533 77.8767 81.1999 78.0967 80.3566 79.0133C79.5499 79.93 77.2033 82.13 77.2033 86.6033C77.2033 91.0767 80.4666 95.4033 80.9066 95.99C81.3466 96.6133 87.3233 105.78 96.4166 109.703C98.5799 110.657 100.267 111.207 101.587 111.61C103.75 112.307 105.73 112.197 107.307 111.977C109.067 111.72 112.697 109.777 113.43 107.65C114.2 105.523 114.2 103.727 113.943 103.323C113.687 102.92 113.137 102.737 112.22 102.297Z" fill="url(#paint1_linear_1801_230)" />
            <defs>
                <linearGradient id="paint0_linear_1801_230" x1="190" y1="95" x2="0" y2="95" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#DA5B00" />
                    <stop offset="1" stopColor="#E27B34" />
                </linearGradient>
                <linearGradient id="paint1_linear_1801_230" x1="131.983" y1="94.9999" x2="59.0166" y2="94.9999" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#DA5B00" />
                    <stop offset="1" stopColor="#E27B34" />
                </linearGradient>
            </defs>
        </svg>
        ,
    },
];

export default function ConnectHero() {
    return (
        <section className="w-full bg-[#FCEFE6]">
            <div className="max-w-7xl mx-auto w-full px-6 py-12 md:px-10 lg:px-12 xl:px-14 lg:py-16 xl:py-20">
                <div className="text-center">
                    <h1 className="text-[#3E2925] text-4xl lg:text-5xl xl:text-[54px] font-bold leading-tight tracking-tight">
                        Contact Me
                    </h1>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-10 text-center sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:gap-10">
                    {contactItems.map(({ label, value, icon }) => (
                        <article key={label} className="flex flex-col items-center">
                            <div className="h-22 w-22 lg:h-24 lg:w-24 rounded-full border-2 border-(--dark-orange) flex items-center justify-center">
                                {icon}
                            </div>

                            <p className="mt-4 text-black text-base lg:text-lg xl:text-xl leading-none">{label}</p>
                            <p className="mt-2 text-[#3E2925] text-xl lg:text-2xl xl:text-[28px] font-bold leading-tight tracking-tight">
                                {value}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
