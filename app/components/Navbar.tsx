"use client";

import { useEffect, useState, CSSProperties } from "react";
import {
    Menu,
    X,
    ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [offeringsOpen, setOfferingsOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        setOfferingsOpen(false);
    }, [pathname]);

    const scrollToTop = () => {
        if (window.location.pathname === "/") {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setMobileMenuOpen(false);
        } else {
            router.push("/");
        }
    };

    // Navigation items for desktop & mobile reuse
    const navItems = [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        {
            label: "Offerings",
            href: "",
            children: [
                { label: "Freedom Codes", href: "/freedom-codes" },
                { label: "Reset Codes", href: "/reset-codes" },
                { label: "Heart Codes", href: "/heart-codes" },
            ],
        },
        { label: "Testimonials", href: "/testimonials" },
        { label: "FAQs", href: "/FAQs" },
    ];

    return (
        <nav className="relative w-full z-50 transition-all duration-300 py-4 bg-white/90">
            <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-14 2xl:px-16">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div
                        onClick={scrollToTop}
                        className="flex items-center cursor-pointer select-none lg:pr-20 xl:pr-26 2xl:pr-32"
                    >
                        <Image src='/assets/logo-navbar.svg' width={56} height={56} alt="Icon" />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8 lg:gap-10 xl:gap-14">
                        {navItems.map((item) => {
                            if (item.children) {
                                const isAnyChildActive = item.children.some((child) => pathname === child.href || pathname.startsWith(`${child.href}/`));

                                return (
                                    <div
                                        key={item.label}
                                        className="relative"
                                        onMouseEnter={() => setOfferingsOpen(true)}
                                        onMouseLeave={() => setOfferingsOpen(false)}
                                    >
                                        <button
                                            type="button"
                                            onClick={() => setOfferingsOpen((prev) => !prev)}
                                            className="transition-all flex items-center gap-1 text-black text-base lg:text-lg xl:text-xl"
                                            style={isAnyChildActive ? {
                                                background: "linear-gradient(to right, var(--light-orange), var(--dark-orange))",
                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor: "transparent",
                                                backgroundClip: "text"
                                            } as CSSProperties : {}}
                                        >
                                            <span>{item.label}</span>
                                            <ChevronDown className={`h-4 w-4 transition-transform ${offeringsOpen ? "rotate-180" : ""}`} />
                                        </button>

                                        {offeringsOpen && (
                                            <div className="absolute left-0 top-full w-54 pt-2 z-50">
                                                <div className="rounded-lg border border-(--dark-orange) bg-white py-1 shadow-sm">
                                                    {item.children.map((child, index) => {
                                                        const isChildActive = pathname === child.href || pathname.startsWith(`${child.href}/`);

                                                        return (
                                                            <Link
                                                                key={child.label}
                                                                href={child.href}
                                                                className="block px-4 py-1.5 text-lg leading-tight text-[#2D2523] hover:bg-[#fcf1ea]"
                                                                style={isChildActive ? {
                                                                    background: "linear-gradient(to right, var(--light-orange), var(--dark-orange))",
                                                                    WebkitBackgroundClip: "text",
                                                                    WebkitTextFillColor: "transparent",
                                                                    backgroundClip: "text"
                                                                } as CSSProperties : {}}
                                                                onClick={() => setOfferingsOpen(false)}
                                                            >
                                                                {child.label}
                                                                {index < item.children.length - 1 && (
                                                                    <span className="mt-1 block h-px w-full bg-[#E5E5E5]" aria-hidden="true" />
                                                                )}
                                                            </Link>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            }

                            const isActive = item.href === "/"
                                ? pathname === "/"
                                : pathname === item.href || pathname.startsWith(`${item.href}/`);

                            return item.href && (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="transition-all flex items-center gap-2 text-black text-base lg:text-lg xl:text-xl"
                                    style={isActive ? {
                                        background: 'linear-gradient(to right, var(--light-orange), var(--dark-orange))',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text'
                                    } as CSSProperties : {}}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'linear-gradient(to right, var(--light-orange), var(--dark-orange))';
                                        e.currentTarget.style.webkitBackgroundClip = 'text';
                                        e.currentTarget.style.webkitTextFillColor = 'transparent';
                                        e.currentTarget.style.backgroundClip = 'text';
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!isActive) {
                                            e.currentTarget.style.background = '';
                                            e.currentTarget.style.webkitBackgroundClip = '';
                                            e.currentTarget.style.webkitTextFillColor = '';
                                            e.currentTarget.style.backgroundClip = '';
                                        }
                                    }}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </div>

                    <div className="relative hidden lg:inline-block" onClick={() => router.push('/connect')}
                    >
                        {/* Offset border shape */}
                        <div className="absolute z-50 top-1.5 left-1.5 w-full h-full rounded-l-full border-2 border-black"></div>

                        {/* Button */}
                        <button
                            className="relative py-4 px-10 rounded-l-full text-white font-medium"
                            style={{
                                background: 'linear-gradient(to right, var(--light-orange), var(--dark-orange))'
                            }}
                        >
                            Connect
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden text-slate-800 p-2"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="w-7 h-7" />
                        ) : (
                            <Menu className="w-7 h-7" />
                        )}
                    </button>
                </div>
            </div>

            {mobileMenuOpen && (
                <div className="lg:hidden mt-3 bg-white shadow-xl border-t border-slate-100">
                    <div className="px-6 py-6 space-y-1">
                        {navItems.map((item) => {
                            if (item.children) {
                                return (
                                    <div key={item.label} className="rounded-lg border border-[#F1F1F1] bg-[#FCFCFC] px-4 py-3">
                                        <p className="text-base font-medium text-slate-800">{item.label}</p>
                                        <div className="mt-2 space-y-1">
                                            {item.children.map((child) => (
                                                <Link
                                                    key={child.label}
                                                    href={child.href}
                                                    onClick={() => setMobileMenuOpen(false)}
                                                    className="block py-2 px-2 rounded-md text-sm text-slate-700 hover:bg-[#fcf1ea]"
                                                >
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                );
                            }

                            return item.href ? (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="w-full text-left py-3.5 px-4 rounded-lg text-base font-medium text-slate-700 hover:bg-[#fcf1ea] transition flex items-center gap-3"
                                >
                                    {item.label}
                                </Link>
                            ) : null;
                        })}

                        <div className="pt-3">
                            <div className="relative inline-block">
                                <div className="absolute z-50 top-1.5 left-1.5 w-full h-full rounded-l-full border-2 border-black"></div>

                                <button
                                    className="relative py-3 px-8 rounded-l-full text-white font-medium"
                                    style={{
                                        background: "linear-gradient(to right, var(--light-orange), var(--dark-orange))"
                                    }}
                                >
                                    Connect
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
