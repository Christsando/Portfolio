export default function footerSection() {
    return (
        <section className="flex flex-col mt-32 bg-[#161616] border-t border-[#383838] px-6 lg:px-0 py-8">

            {/* Footer Container  */}
            <div className="max-w-6xl w-full mx-auto pb-16 flex border-b border-[#383838]">

                {/* Footer Content */}
                <div className="flex flex-col gap-4">

                    {/* Footer Title */}
                    <h2 className="text-white text-xl md:text-3xl font-semibold font-display tracking-wider">Have an <span className="text-[#22C55E] italic">idea</span> or
                        <span className="text-[#22C55E] italic"> project</span> in mind? <br/>Lets talk and make it happen.
                    </h2>
                    <p className="text-[#A1A1AA] text-sm md:text-base text-justify">
                        I'm open to project discussions, creative ideas, and opportunities to work.
                    </p>

                    {/* Footer Contact */}
                    <div className="flex flex-col md:flex-row gap-4 mt-6">
                        <a href="mailto:christsandoariel05@gmail.com" target="_blank">
                            <button className="w-full md:w-fill cursor-pointer px-4 text-sm md:text-base py-2 text-black transition-all duration-300 rounded-2xl bg-[#22C55E] hover:bg-[#22C55E]/80">
                                christsandoariel05@gmail.com
                            </button>
                        </a>
                        <a>
                            <button className="w-full md:w-fill text-sm md:text-basecursor-pointer px-4 py-2 text-[#22C55E] transition-all duration-300 rounded-2xl border border-[#22C55E] hover:border-[#22C55E]/80 hover:text-[#22C55E]/80">
                                Download CV
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl w-full mx-auto flex">
                {/* Footer Copyright */}
                <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-8 md:gap-4 mt-6">
                    {/* My Name */}
                    <div>
                        <p className="text-white text-base md:text-lg font-display font-semibold">Ariel Christsando</p>
                        <p className="text-xs md:text-sm text-[#A1A1AA]">Website & Mobile Developer</p>
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-center">
                        <ul className="flex gap-8">
                            <li><a href="" className="text-sm md:text-base text-[#A1A1AA] hover:text-[#22C55E]">Home</a></li>
                            <li><a href="#about" className="text-sm md:text-base text-[#A1A1AA] hover:text-[#22C55E]">About</a></li>
                            <li><a href="#skills" className="text-sm md:text-base text-[#A1A1AA] hover:text-[#22C55E]">Skills</a></li>
                            <li><a href="#projects" className="text-sm md:text-base text-[#A1A1AA] hover:text-[#22C55E]">Projects</a></li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="flex justify-end">
                        <div className="flex gap-4">
                            <a href="https://github.com/Christsando" target="_blank" className="text-[#A1A1AA] hover:text-[#22C55E]">
                                <i className="text-sm md:text-base fab fa-github text-xl"></i>
                            </a>
                            <a href="https://linkedin.com/in/ariel-christsando" target="_blank" className="text-[#A1A1AA] hover:text-[#22C55E]">
                                <i className="text-sm md:text-base fab fa-linkedin-in text-xl"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl w-full mx-auto flex justify-between mt-16">
                {/* Footer Copyright */}
                <p className="text-[#A1A1AA] text-xs md:text-sm">&copy; 2026 Ariel Christsando. All rights reserved.</p>
                <a href="#" className="text-[#A1A1AA] text-xs md:text-sm hover:text-[#22C55E] transition-all duration-300">
                    Back to Top
                </a>
            </div>
        </section>
    );
}