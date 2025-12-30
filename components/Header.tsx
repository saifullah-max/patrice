
import React from "react";
import Image from "next/image";

const navLinks = [
    { label: "Home", href: "#home", active: true },
    { label: "About Me", href: "#about" },
    { label: "Freedom Codes", href: "#freedom-codes" },
    { label: "Reset Codes", href: "#awareness" },
    { label: "Heart Codes", href: "#real-change" },
    { label: "FAQs", href: "#contact" },
];

export default function Header() {
    // Smooth scroll handler
    const handleNavClick = (e: any, href: any) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            const el = document.querySelector(href);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };
    const handleConnectClick = (e: any) => {
        e.preventDefault();
        const el = document.querySelector('#contact');
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <header className="w-full bg-white">
            <div className="max-w-[1600px] mx-auto px-14 py-6 w-full">
                <div className="flex items-center w-full justify-between">
                    {/* Logo left */}
                    <div className="flex items-center min-w-[80px]">
                        <Image src="/logo.png" alt="Logo" width={60} height={60} />
                    </div>
                    {/* Nav center */}
                    <nav className="flex-1 flex justify-end mr-2">
                        <ul className="flex gap-2 list-none m-0 p-0">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        onClick={e => handleNavClick(e, link.href)}
                                        className={
                                            `text-sm font-normal transition-colors duration-200 px-2 ` +
                                            (link.active
                                                ? "text-[#DA5B00] font-bold font-serif"
                                                : "text-[#3d3246] font-sans hover:text-[#DA5B00]")
                                        }
                                        style={
                                            link.active
                                                ? { fontFamily: "'Times New Roman', Times, serif" }
                                                : { fontFamily: "'Helvetica Now', Arial, Helvetica, sans-serif" }
                                        }
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    {/* Connect button right */}
                    <div className="flex items-center min-w-[140px] justify-end">
                        <button
                            className="bg-gradient-to-b from-[#ff9a3c] to-[#DA5B00] text-white font-bold font-serif text-sm rounded-none px-4 py-2 shadow-none transition hover:from-[#ffb36b] hover:to-[#b94a00]"
                            style={{ fontFamily: "'Times New Roman', Times, serif" }}
                            onClick={handleConnectClick}
                        >
                            Connect
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
