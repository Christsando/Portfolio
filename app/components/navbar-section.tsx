"use client";

import { useState } from "react";

export default function NavbarSection() {
    const [isOpen, setIsOpen] = useState(false);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="sticky top-0 z-50 w-full max-w-6xl mx-auto lg:px-0 px-6 py-4 mt-14">

            <div className="flex items-center justify-between w-full">
                {/* Logo */}
                <a href="/" className="cursor-pointer text-lg font-display text-white transition-all duration-300">
                    Ariel Christsando
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-6 text-sm text-white">
                    <a href="/" className="transition-all duration-300 hover:text-[#22C55E]">
                        Home
                    </a>

                    <a href="/#about-me" className="transition-all duration-300 hover:text-[#22C55E]">
                        About
                    </a>

                    <a href="/#skills" className="transition-all duration-300 hover:text-[#22C55E]">
                        Skills
                    </a>

                    <a href="/#projects" className="transition-all duration-300 hover:text-[#22C55E]">
                        Projects
                    </a>

                    <a
                        href="/cv.pdf"
                        download
                        className="cursor-pointer px-4 py-2 text-[#22C55E] transition-all duration-300 rounded-2xl border border-[#22C55E] hover:border-[#22C55E]/80 hover:text-[#22C55E]/80"
                    >
                        Download CV
                    </a>
                </div>

                {/* Hamburger Button — Mobile */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden flex flex-col justify-center items-center gap-1.5 p-2 text-white"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                >
                    <span
                        className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                            isOpen ? "translate-y-2 rotate-45" : ""
                        }`}
                    />

                    <span
                        className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                            isOpen ? "opacity-0" : ""
                        }`}
                    />

                    <span
                        className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                            isOpen ? "-translate-y-2 -rotate-45" : ""
                        }`}
                    />
                </button>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen
                        ? "max-h-96 opacity-100 mt-4"
                        : "max-h-0 opacity-0 mt-0"
                }`}
            >
                <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-black/90 p-5 text-sm text-white">

                    <a
                        href="/"
                        onClick={closeMenu}
                        className="transition-colors duration-300 hover:text-[#22C55E]"
                    >
                        Home
                    </a>

                    <a
                        href="/#about-me"
                        onClick={closeMenu}
                        className="transition-colors duration-300 hover:text-[#22C55E]"
                    >
                        About
                    </a>

                    <a
                        href="/#skills"
                        onClick={closeMenu}
                        className="transition-colors duration-300 hover:text-[#22C55E]"
                    >
                        Skills
                    </a>

                    <a
                        href="/#projects"
                        onClick={closeMenu}
                        className="transition-colors duration-300 hover:text-[#22C55E]"
                    >
                        Projects
                    </a>

                    <a
                        href="/cv.pdf"
                        download
                        onClick={closeMenu}
                        className="w-fit rounded-xl border border-[#22C55E] px-4 py-2 text-[#22C55E] transition-all duration-300 hover:bg-[#22C55E]/10"
                    >
                        Download CV
                    </a>

                </div>
            </div>

        </nav>
    );
}