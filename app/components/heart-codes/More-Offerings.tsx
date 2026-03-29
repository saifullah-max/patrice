import { ArrowUpRight } from "lucide-react";

type Offering = {
    id: string;
    title: string;
    description: string;
    icon: "reset" | "freedom";
};

const offerings: Offering[] = [
    {
        id: "freedom",
        title: "Freedom Codes",
        description: "Release Old Patterns.\nReclaim Your Inner Power.",
        icon: "freedom",
    },
    {
        id: "reset",
        title: "Reset Codes",
        description: "Release Inherited Stress.\n Reclaim Your Life.",
        icon: "reset",
    }
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
            <path d="M12.455 2.30917L12 2.07617L11.545 2.30917C10.4003 2.89381 9.35705 3.65856 8.455 4.57417C9.76816 5.25726 10.9647 6.14428 12 7.20217C13.035 6.14436 14.2312 5.25735 15.544 4.57417C14.6423 3.65865 13.5993 2.89391 12.455 2.30917ZM10.699 8.73417C8.95498 6.89583 6.67295 5.65784 4.181 5.19817L3 4.98017V13.0002C2.9996 14.8065 3.54273 16.5711 4.55877 18.0646C5.57481 19.5581 7.01673 20.7113 8.697 21.3742C8.23404 19.9624 7.99877 18.4859 8 17.0002C8 13.9082 9.001 11.0502 10.699 8.73417ZM21 4.98117L19.82 5.19817C14.232 6.22417 10 11.1172 10 17.0002C10 18.5362 10.29 20.0072 10.817 21.3602L11.057 21.9752C11.371 21.9852 11.686 22.0002 12 22.0002C14.3869 22.0002 16.6761 21.052 18.364 19.3641C20.0518 17.6763 21 15.3871 21 13.0002V4.98117Z" fill="url(#paint0_linear_1579_1276)" />
            <defs>
                <linearGradient id="paint0_linear_1579_1276" x1="21" y1="12.0382" x2="3" y2="12.0382" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#DA5B00" />
                    <stop offset="1" stopColor="#E27B34" />
                </linearGradient>
            </defs>
        </svg>


    );
}

export default function MoreOfferings() {
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
                                <div className="flex items-center gap-3">
                                    <OfferingIcon type={offering.icon} />
                                    <h3 className="text-black text-2xl lg:text-3xl xl:text-4xl leading-none tracking-tight">
                                        {offering.title}
                                    </h3>
                                </div>

                                <p className="text-black/50 text-base lg:text-lg xl:text-xl leading-tight whitespace-pre-line">
                                    {offering.description}
                                </p>

                                <div className="flex justify-start lg:justify-end pt-1 lg:pt-0">
                                    <span className="inline-flex h-8 w-8 lg:h-10 lg:w-10 items-center justify-center rounded-full bg-(--dark-orange)">
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
