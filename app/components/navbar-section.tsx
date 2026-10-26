export default function navbarSection() {
    return (
        <nav className="sticky top-0 z-50 w-full py-13 max-w-6xl mx-auto">

            <div className="flex items-center justify-between w-full ">
                <a href="/" className="cursor-pointer text-lg font-display text-white transition-all duration-300">Ariel Christsando</a>

                <div className="text-sm text-white flex items-center space-x-6">
                    <a href="/" className="cursor-pointer transition-all duration-300 hover:text-[#22C55E]">Home</a>
                    <a href="#about-me" className="cursor-pointer transition-all duration-300 hover:text-[#22C55E]">About</a>
                    <a href="#skills" className="cursor-pointer transition-all duration-300 hover:text-[#22C55E]">Skills</a>
                    <a href="#projects" className="cursor-pointer transition-all duration-300 hover:text-[#22C55E]">Projects</a>
                    <a>
                        <button className="cursor-pointer px-4 py-2 text-[#22C55E] transition-all duration-300 rounded-2xl border border-[#22C55E] hover:border-[#22C55E]/80 hover:text-[#22C55E]/80">Download CV</button>
                    </a>
                </div>
            </div>
        </nav>
    );
}