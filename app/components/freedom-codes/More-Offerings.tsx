'use client'

import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

type Offering = {
    id: string;
    title: string;
    description: string;
    icon: "reset" | "heart";
    link: string;
};

const offerings: Offering[] = [
    {
        id: "reset",
        title: "Reset Codes",
        description: "Release Inherited Stress.\n Reclaim Your Life.",
        icon: "reset",
        link: '/reset-codes'
    },
    {
        id: "heart",
        title: "Heart Codes",
        description: "Regulate Stress. Feel\nConnected. Live with Ease.",
        icon: "heart",
        link: 'heart-codes'
    },
];

function OfferingIcon({ type }: { type: Offering["icon"] }) {
    if (type === "reset") {
        return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5 9.63C15.31 6.84 14.18 4.12 12.06 2C10.0091 4.04283 8.7479 6.74593 8.5 9.63C9.79 10.31 10.97 11.19 12 12.26C13.0237 11.2077 14.2044 10.3205 15.5 9.63ZM12 15.45C9.85 12.17 6.18 10 2 10C2 20 11.32 21.89 12 22C12.68 21.88 22 20 22 10C17.82 10 14.15 12.17 12 15.45Z" fill="url(#paint0_linear_1570_650)" />
                <defs>
                    <linearGradient id="paint0_linear_1570_650" x1="22" y1="12" x2="2" y2="12" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#DA5B00" />
                        <stop offset="1" stopColor="#E27B34" />
                    </linearGradient>
                </defs>
            </svg>

        );
    }

    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.9999 1C13.0608 1 14.0782 1.42143 14.8283 2.17157C15.5785 2.92172 15.9999 3.93913 15.9999 5L15.9979 5.055L16.0279 5.037C16.8706 4.54815 17.8636 4.38621 18.8179 4.582L19.0549 4.638C19.56 4.77458 20.0332 5.00966 20.4471 5.32972C20.861 5.64979 21.2076 6.04852 21.4669 6.503C21.9944 7.42097 22.1375 8.51032 21.8649 9.53338C21.5924 10.5564 20.9263 11.4302 20.0119 11.964L19.9439 12L20.0149 12.039C20.8963 12.5544 21.5479 13.3865 21.8369 14.3658C22.1258 15.3451 22.0304 16.3977 21.5699 17.309L21.4689 17.495C21.2095 17.9501 20.8625 18.3494 20.4481 18.6698C20.0336 18.9902 19.5599 19.2254 19.0541 19.3619C18.5483 19.4983 18.0205 19.5334 17.5011 19.4649C16.9818 19.3964 16.4811 19.2259 16.0279 18.963L15.9979 18.943L15.9999 19C15.9999 20.0262 15.6055 21.0132 14.8982 21.7568C14.1909 22.5004 13.2249 22.9437 12.1999 22.995L11.9999 23C10.9391 23 9.92164 22.5786 9.17149 21.8284C8.42135 21.0783 7.99992 20.0609 7.99992 19L8.00092 18.944L7.97192 18.963C7.12938 19.4522 6.13637 19.6145 5.18192 19.419L4.94592 19.363C4.44063 19.2265 3.96731 18.9915 3.55319 18.6714C3.13908 18.3514 2.79234 17.9526 2.53292 17.498C2.00554 16.5804 1.86233 15.4914 2.13452 14.4686C2.4067 13.4458 3.0722 12.5721 3.98592 12.038L4.05592 12L3.98492 11.962C3.10353 11.4466 2.45191 10.6145 2.16296 9.63519C1.87401 8.65591 1.96949 7.6033 2.42992 6.692L2.52992 6.505C2.78935 6.04949 3.13643 5.64986 3.55112 5.32919C3.96581 5.00852 4.43991 4.77315 4.94604 4.63667C5.45218 4.50018 5.98033 4.46529 6.50002 4.534C7.01971 4.60272 7.52065 4.77367 7.97392 5.037L7.99992 5.055V5C7.99992 3.97376 8.39436 2.98677 9.10164 2.24319C9.80893 1.4996 10.775 1.05631 11.7999 1.005L11.9999 1ZM11.9999 9C11.2043 9 10.4412 9.31607 9.8786 9.87868C9.31599 10.4413 8.99992 11.2044 8.99992 12C8.99992 12.7956 9.31599 13.5587 9.8786 14.1213C10.4412 14.6839 11.2043 15 11.9999 15C12.7956 15 13.5586 14.6839 14.1212 14.1213C14.6839 13.5587 14.9999 12.7956 14.9999 12C14.9999 11.2044 14.6839 10.4413 14.1212 9.87868C13.5586 9.31607 12.7956 9 11.9999 9Z" fill="url(#paint0_linear_1570_637)" />
            <defs>
                <linearGradient id="paint0_linear_1570_637" x1="22.0008" y1="12" x2="1.99902" y2="12" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#DA5B00" />
                    <stop offset="1" stopColor="#E27B34" />
                </linearGradient>
            </defs>
        </svg>

    );
}

export default function MoreOfferings() {
    const router = useRouter();

    return (
        <section className="w-full py-12 lg:py-16 xl:py-18">
            <div className="max-w-7xl mx-auto w-full px-6 md:px-10 lg:px-12 xl:px-14">
                <h2 className="text-center text-[#3E2925] text-4xl lg:text-5xl xl:text-[54px] font-bold leading-none">
                    More Offerings
                </h2>

                <div className="mt-8 lg:mt-10 space-y-3">
                    {offerings.map((offering) => (
                        <div key={offering.id} className="rounded-lg bg-[#fcf1ea] px-6 py-6 lg:px-12 lg:py-8">
                            <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.2fr_1fr_auto] lg:items-center lg:gap-8">

                                {/* Title + Arrow (same row on mobile) */}
                                <div className="flex items-center justify-between lg:justify-start gap-3">
                                    <div className="flex items-center gap-3">
                                        <OfferingIcon type={offering.icon} />
                                        <h3 className="text-black text-2xl lg:text-3xl xl:text-4xl leading-none tracking-tight">
                                            {offering.title}
                                        </h3>
                                    </div>

                                    {/* Arrow (mobile only here) */}
                                    <span
                                        className="inline-flex lg:hidden h-8 w-8 items-center justify-center rounded-full bg-(--dark-orange)"
                                        onClick={() => router.push(offering.link)}
                                    >
                                        <ArrowUpRight className="h-5 w-5 text-white" strokeWidth={2.5} />
                                    </span>
                                </div>

                                {/* Description */}
                                <p className="text-black/50 text-base lg:text-lg xl:text-xl leading-tight whitespace-pre-line">
                                    {offering.description}
                                </p>

                                {/* Arrow (desktop only - original position) */}
                                <div className="hidden lg:flex justify-end pt-1 lg:pt-0">
                                    <span
                                        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-(--dark-orange)"
                                        onClick={() => router.push(offering.link)}
                                    >
                                        <ArrowUpRight className="h-5 w-5 text-white" strokeWidth={2.5} />
                                    </span>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
