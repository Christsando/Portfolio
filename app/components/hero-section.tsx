export default function heroSection() {
    return (
        <section id="hero-section" className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-6xl mt-16 mx-auto">
            <img src="/images/background/hero-bg.png" alt="Hero Background" className="absolute top-0 left-0 w-full h-screen object-cover opacity-10 z-1"/>

                {/* Left Section */}
                <div className="flex flex-col gap-4 z-2">

                    {/* Tag */}
                    <div className="w-fit border border-[#383838] rounded-full p-1 px-2 flex items-center justify-center gap-2">
                        <div className="bg-[#22C55E] w-2 h-2 rounded-full"></div>
                        <p className="text-xs md:text-sm font-display text-white">Website & Mobile Developer</p>
                    </div>

                    {/* Introduction */}
                    <div className="flex flex-col gap-4 mt-2">
                        <h1 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight">Hello, I'm <br/>
                            <span className="text-[#22C55E] italic">Ariel Christsando</span>
                        </h1>
                        <p className="text-sm md:text-base text-[#A1A1AA] text-justify tracking-wide">
                            Fresh graduate in Information Systems from Telkom University with a strong background in mobile development,
                            UI/UX design, and web development. Experienced in developing personal and collaborative projects, with a
                            strong interest in building user-friendly and impactful digital products.
                        </p>
                    </div>

                    {/* Stack */}
                    <div className="flex flex-wrap gap-2 pt-14">
                        <span className="border border-[#383838] text-white text-xs md:text-sm leading-relaxed font-display cursor-pointer px-3 py-1 hover:bg-[#22C55E] hover:text-[#0B0B0B] transition-all duration-300 rounded-full">Next JS</span>
                        <span className="border border-[#383838] text-white text-xs md:text-sm leading-relaxed font-display cursor-pointer px-3 py-1 hover:bg-[#22C55E] hover:text-[#0B0B0B] transition-all duration-300 rounded-full">Tailwind CSS</span>
                        <span className="border border-[#383838] text-white text-xs md:text-sm leading-relaxed font-display cursor-pointer px-3 py-1 hover:bg-[#22C55E] hover:text-[#0B0B0B] transition-all duration-300 rounded-full">HTML</span>
                    </div>

                    {/* Contact */}
                    <div className="flex gap-2">
                        <img src="/images/email.png" alt="email" className="w-8 h-8"/>
                        <img src="/images/github.png" alt="email" className="w-8 h-8"/>
                        <img src="/images/linkedin.png" alt="email" className="w-8 h-8"/>
                    </div>
                </div>

                {/* Right Section */}
                <div className="hidden md:flex flex-col gap-4 items-end justify-center z-2">
                    <div className="relative">
                        <div className="w-[23rem] h-auto border border-[#22C55E] rounded-full p-4 flex items-center justify-center gap-2">
                            <img src="/images/profile.jpg" alt="Hero Image"
                                className="w-[22rem] rounded-full object-cover align-middle shadow-lg align-middle"/>
                        </div>

                        <div className="absolute bottom-6 left-4 flex items-center gap-2 bg-[#FFFFFF] border border-[#22C55E] rounded-full p-2 px-4">
                            <div className="bg-[#22C55E] w-2 h-2 rounded-full"></div>
                            <p className="text-sm text-semibold font-display text-black">Open to Work</p>
                        </div>
                    </div>
                </div>
        </section>

    );
}