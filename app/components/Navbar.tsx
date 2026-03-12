"use client";

import { useState, CSSProperties } from "react";
import {
    Home,
    Menu,
    FolderOpen,
    Users,
    X,
} from "lucide-react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

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
        { label: "Home", href: '/' },
        { label: "About Us", href: 'about-us' },
        {
            label: "Programs",
            href: "/about-us",
        },
        { label: "Testimonials/reviews", href: "/testimonials" },
        { label: "FAQ", href: 'FAQ' },
    ];

    return (
        <nav className="fixed w-full z-50 transition-all duration-300 py-6 bg-white/90 backdrop-blur-md shadow-sm">
            <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-14 2xl:px-16">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div
                        onClick={scrollToTop}
                        className="flex items-center gap-2 cursor-pointer select-none"
                    >
                        <Image src='/assets/logo-navbar.svg' width={40} height={40} alt="Icon" />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8 lg:gap-12 xl:gap-14">
                        {navItems.map((item) => {
                            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                            return item.href && (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="transition-all flex items-center gap-1.5 text-black/50"
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

                    <div className="hidden lg:flex">
                        <button
                            className="py-2 px-6 rounded-md text-white font-medium"
                            style={{ background: 'linear-gradient(to right, var(--light-orange), var(--dark-orange))' }}
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
                <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 animate-in slide-in-from-top duration-300">
                    <div className="px-6 py-6 space-y-1">
                        {navItems.map((item) => (
                            item.href && (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="w-full text-left py-3.5 px-4 rounded-lg text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 transition flex items-center gap-3"
                                >
                                    {item.label}
                                </Link>
                            )
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
