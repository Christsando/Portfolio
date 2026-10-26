export default function skillsSection() {
    return (
        <section id="skills">
            <div className="max-w-6xl mt-32">
                {/* Sub-Title */}
                <h2 className="text-3xl font-bold font-display text-white tracking-wider text">I use modern technologies and tools to
                    build
                    <span className="text-[#22C55E] italic"> responsive, intuitive, and impactful </span>
                    web and mobile experiences that combine
                    <span className="text-[#22C55E] italic"> functionality, performance, and thoughtful design.</span>
                </h2>

                {/* Content */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">

                    {/* Mobile Skills */}
                    <div className="rounded-md flex flex-col p-4 w-full bg-[#161616] border border-[#383838]">
                        <span className="text-[#22C55E] text-sm mb-2">Mobile</span>
                        <h3 className="font-display text-lg text-white tracking-wider font-semibold">Mobile App</h3>

                        {/* Skills List */}
                        <div className="flex gap-2 mt-4">

                            {/* Skill Item */}
                            <div className="bg-[#0B0B0B] border border-[#383838] rounded-full p-2 gap-2 flex items-center justify-center">
                                <div className=" bg-[#16301F] border border-[#383838] rounded-full p-[6px] flex items-center justify-center">
                                    <img src="images/tools/kotlin.png" alt="Kotlin" className="w-auto h-4" />
                                </div>
                                <p className="text-sm text-white mr-2 leading-none">Kotlin</p>
                            </div>
                        </div>
                    </div>

                    {/* Website Skills */}
                    <div className="rounded-md flex flex-col p-4 w-full bg-[#161616] border border-[#383838]">
                        <span className="text-[#22C55E] text-sm mb-2">Website</span>
                        <h3 className="font-display text-lg text-white tracking-wider font-semibold">Website Development</h3>

                        {/* Skills List */}
                        <div className="flex flex-wrap gap-2 mt-4">

                            {/* Skill Item */}
                            <div className="bg-[#0B0B0B] border border-[#383838] rounded-full p-2 gap-2 flex items-center justify-center">
                                <div className=" bg-[#16301F] border border-[#383838] rounded-full p-[6px] flex items-center justify-center">
                                    <img src="images/tools/laravel.png" alt="Laravel" className="w-auto h-4" />
                                </div>
                                <p className="text-sm text-white mr-2 leading-none" >Laravel</p>
                            </div>

                            {/* Skill Item */}
                            <div className="bg-[#0B0B0B] border border-[#383838] rounded-full p-2 gap-2 flex items-center justify-center">
                                <div className=" bg-[#16301F] border border-[#383838] rounded-full p-[6px] flex items-center justify-center">
                                    <img src="images/tools/php.png" alt="Php" className="w-auto h-4" />
                                </div>
                                <p className="text-sm text-white mr-2 leading-none" >Php</p>
                            </div>

                            {/* Skill Item */}
                            <div className="bg-[#0B0B0B] border border-[#383838] rounded-full p-2 gap-2 flex items-center justify-center">
                                <div className=" bg-[#16301F] border border-[#383838] rounded-full p-[6px] flex items-center justify-center">
                                    <img src="images/tools/react.png" alt="React" className="w-auto h-4" />
                                </div>
                                <p className="text-sm text-white mr-2 leading-none" >React JS</p>
                            </div>
                        </div>
                    </div>

                    {/* UI/UX Skills */}
                    <div className="rounded-md flex flex-col p-4 w-full bg-[#161616] border border-[#383838]">
                        <span className="text-[#22C55E] text-sm mb-2">UI/UX</span>
                        <h3 className="font-display text-lg text-white tracking-wider font-semibold">UI/UX Design</h3>

                        {/* Skills List */}
                        <div className="flex flex-wrap gap-2 mt-4">

                            {/* Skill Item */}
                            <div className="bg-[#0B0B0B] border border-[#383838] rounded-full p-2 gap-2 flex items-center justify-center">
                                <div className=" bg-[#16301F] border border-[#383838] rounded-full p-[6px] flex items-center justify-center">
                                    <img src="images/tools/figma.png" alt="Figma" className="w-auto h-4" />
                                </div>
                                <p className="text-sm text-white mr-2 leading-none" >Figma</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full mt-4 bg-[#282828] h-[1px] mb-8"></div>
                <div className="flex flex-wrap gap-2 items-center mb-8">
                    <p className="text-sm text-[#A1A1AA]">Skills in development - </p>
                    {/* Skill Item */}
                    <div className="bg-[#0B0B0B] border border-[#383838] rounded-full p-2 gap-2 flex items-center justify-center">
                        <div className=" bg-[#16301F] border border-[#383838] rounded-full p-[6px] flex items-center justify-center">
                            <img src="images/tools/js.png" alt="JavaScript" className="w-auto h-4" />
                        </div>
                        <p className="text-sm text-white mr-2 leading-none" >JavaScript</p>
                    </div>

                    {/* Skill Item */}
                    <div className="bg-[#0B0B0B] border border-[#383838] rounded-full p-2 gap-2 flex items-center justify-center">
                        <div className=" bg-[#16301F] border border-[#383838] rounded-full p-[6px] flex items-center justify-center">
                            <img src="images/tools/jetpack_compose.png" alt="Jetpack" className="w-auto h-4" />
                        </div>
                        <p className="text-sm text-white mr-2 leading-none" >Jetpack Compose</p>
                    </div>

                    {/* Skill Item */}
                    <div className="bg-[#0B0B0B] border border-[#383838] rounded-full p-2 gap-2 flex items-center justify-center">
                        <div className="bg-[#16301F] border border-[#383838] rounded-full p-[6px] flex items-center justify-center">
                            <img src="images/tools/react.png" alt="React" className="w-auto h-4" />
                        </div>
                        <p className="text-sm text-white mr-2 leading-none" >React JS</p>
                    </div>
                </div>
            </div>
        </section>

    );
}