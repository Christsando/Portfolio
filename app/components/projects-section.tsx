import { projects } from "../data/projects";
import Link from "next/link";

export default function projectSection() {
    const featuredProject = projects[0];
    const otherProject = projects.slice(1, 3);

    return (
        <section id="projects">
            <div className="flex md:py-20 flex-col items-center justify-center w-full max-w-6xl mx-auto ">
                <div className="flex flex-col items-center justify-center w-full">
                    <h1 className="text-xl md:text-3xl font-bold font-display text-white tracking-wider">Projects that I have <span className="text-[#22C55E] italic">worked on.</span></h1>
                    <p className="mt-2 text-sm md:text-base text-[#A1A1AA] text-justify">Here are some of my projects that I have worked on. <a target="_blank" href="https://github.com/christsando?tab=repositories" className="text-[#22C55E] text-sm hover:underline">View all projects on my github.</a></p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-12 mb-12 w-full">

                    {/* Project 1 */}
                    <div className="bg-[#161616] border border-[#383838] col-span-3 rounded-md p-6 flex flex-col gap-4">
                        <div className="flex flex-col justify-between gap-4 h-full">
                            <div className="flex flex-col gap-2">
                                <img src={featuredProject.thumbnail} alt="Laravel" className="w-full h-auto" />
                                <p className="text-xs md:text-sm font-semibold text-[#22C55E] mt-4">Thesis · {featuredProject.projectType}</p>
                                <h1 className="text-lg md:text-2xl font-display font-semibold text-white">{featuredProject.appTitle}</h1>
                                <p className="text-sm md:text-base text-[#A1A1AA] text-justify">{featuredProject.overview}</p>
                                <ul className="flex flex-wrap gap-2 mt-4">
                                    {featuredProject.technologies.map((tech) => (
                                        <li key={tech} className="border border-[#383838] text-white text-xs md:text-sm font-display cursor-pointer px-3 py-1 hover:bg-[#22C55E] hover:text-[#0B0B0B] transition-all duration-300 rounded-full">
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <Link href={`/project/${featuredProject.id}`} className="text-sm cursor-pointer py-2 text-[#22C55E] transition-all duration-300 rounded-2xl hover:text-[#22C55E]/80 font-semibold">
                                View Project 
                                <i className="fas text-[#22C55E] fa-arrow-right text-xs md:text-sm ml-2 "></i>
                            </Link>
                        </div>
                    </div>

                    {/* Right Container */}
                    <div className="col-span-3 lg:col-span-2 gap-4 flex flex-col">
                        {otherProject.map((project) => (
                            <div className="bg-[#161616] border border-[#383838] rounded-md p-6 flex flex-col gap-4" key={project.id}>
                                <div className="flex flex-col gap-2">
                                    <img src={project.thumbnail} alt="Laravel" className="w-full h-24 rounded-md object-cover" />
                                    <p className="text-xs md:text-sm font-semibold text-[#22C55E] mt-4">Other Project · {project.projectType}</p>
                                    <h1 className="text-lg md:text-2xl font-display font-semibold text-white">{project.appTitle}</h1>
                                    <p className="text-sm md:text-base text-[#A1A1AA] text-justify">{project.overview}</p>
                                </div>
                                <Link href={`/project/${project.id}`} className="text-sm cursor-pointer py-2 text-[#22C55E] transition-all duration-300 rounded-2xl hover:text-[#22C55E]/80 font-semibold">View Project <i className="fas text-[#22C55E] fa-arrow-right text-xs md:text-sm ml-2 "></i></Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}