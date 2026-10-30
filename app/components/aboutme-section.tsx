export default function aboutmeSection() {
    return (
        <section id="about-me" className="py-0 md:py-20 max-w-6xl">

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">

                {/* Left Content */}
                <div className="flex flex-col">
                    <h2 className="text-xl md:text-3xl font-bold font-display text-white tracking-wider">
                        <span className="text-[#22C55E] italic">Fresh Graduate</span> in Information Systems,
                        who love to create<span className="text-[#22C55E] italic"> innovative digital solutions.</span>
                    </h2>
                    <p className="text-sm md:text-base text-[#A1A1AA] text-justify mt-8 md:mt-12">
                        Fresh graduate in Information Systems from Telkom University with a
                        strong background in mobile development, UI/UX design, and web development.
                        Experienced in developing personal and collaborative projects, with a strong
                        interest in building user-friendly and impactful digital products.<br /><br />
                        Possesses strong adaptability, problem-solving, and teamwork skills,
                        with a continuous commitment to expanding technical expertise and exploring
                        emerging technologies. Driven to grow as a versatile software developer and
                        contribute to impactful digital solutions
                    </p>
                    <div className="flex gap-2 mt-6">
                        <span className="border border-[#383838] text-white text-xs md:text-sm font-display cursor-pointer px-3 py-1 hover:bg-[#22C55E] hover:text-[#0B0B0B] transition-all duration-300 rounded-full">Web Development</span>
                        <span className="border border-[#383838] text-white text-xs md:text-sm font-display cursor-pointer px-3 py-1 hover:bg-[#22C55E] hover:text-[#0B0B0B] transition-all duration-300 rounded-full">Mobile Development</span>
                        <span className="border border-[#383838] text-white text-xs md:text-sm font-display cursor-pointer px-3 py-1 hover:bg-[#22C55E] hover:text-[#0B0B0B] transition-all duration-300 rounded-full">UI / UX</span>
                    </div>
                </div>

                {/* Right Content */}
                <div className="flex flex-col gap-12">
                    <h2 className="text-xl md:text-3xl font-bold font-display text-white tracking-wider">My <span className="text-[#22C55E] italic">Education</span></h2>
                    <div className="flex">
                        <div className="w-1 bg-[#383838] rounded-full mr-4"></div>
                        <div className="flex flex-col gap-4 w-full">

                            {/* Education Item */}
                            <div className="bg-[#161616] flex items-center border border-[#383838] rounded-2xl p-6 gap-4">
                                <img src="images/education/telkom.png" alt="Telkom University" className="w-auto h-16" />
                                <div className="flex flex-col">
                                    <p className="text-xs text-[#22C55E] tracking-wider mb-2">[2022] - [2026]</p>
                                    <h3 className="text-base md:text-lg font-semibold font-display text-white tracking-wider">Telkom University</h3>
                                    <p className="text-sm md:text-base text-[#A1A1AA] text-justify">
                                        Bachelor of Information Systems, 2026
                                    </p>
                                </div>
                            </div>

                            {/* Education Item */}
                            <div className="bg-[#161616] flex items-center border border-[#383838] rounded-2xl p-6 gap-4">
                                <img src="images/education/sma.png" alt="Marsudirini Senior High School" className="w-auto h-16" />
                                <div className="flex flex-col">
                                    <p className="text-xs text-[#22C55E] tracking-wider mb-2">[2019] - [2022]</p>
                                    <h3 className="text-base md:text-lg font-semibold font-display text-white tracking-wider">Marsudirini Senior High School</h3>
                                    <p className="text-sm md:text-base text-[#A1A1AA] text-justify">
                                        Social and Humanities, 2019
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}