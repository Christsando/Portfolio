import type { ReactNode } from "react";

type Project = {
    id: number;
    projectType: string;
    appTitle: string;
    tagline: string;
    overview: string;
    background: ReactNode;
    solution: string;
    responsible: string;
    role: string;
    duration: string;
    team: string;
    year: string;
    imgSrc: string[];
    githubLink: string;
    features: string[];
    technologies: string[];
};

type ProjectDetailProps = {
    project: Project;
};

export default function ProjectDetail({
    project,
}: ProjectDetailProps) {
    return (
        <section className="py-2 md:py-6 mt-12">
            <a href="/#projects"
                className="text-[#F5F5F5] hover:text-[#22C55E] transition-all duration-300">
                <i className="fas fa-arrow-left mr-2 text-sm"></i> Back to Home
            </a>

            <div className="flex flex-col mt-8">
                {/* Title */}
                <div className="flex flex-col gap-4 pb-12 pt-4 border-b border-[#383838]">
                    <p className="text-[#22C55E] text-sm">Project Detail · {project.projectType}</p>

                    <h1>
                        <span className="italic text-5xl text-white font-display font-semibold">{project.appTitle}</span>
                        <span className="text-[#22C55E] text-md font-display ml-4">- {project.tagline} -</span>
                    </h1>
                    <p className="text-md text-[#A1A1AA] text-justify">{project.overview}</p>
                </div>

                {/* Role, Duration, Team, Year */}
                <div className="flex flex-wrap gap-20 mt-6 pb-6 border-b border-[#383838]">
                    <div>
                        <h3 className="text-[#A1A1AA] text-sm font-semibold">Role</h3>
                        <p>{project.role}</p>
                    </div>

                    <div>
                        <h3 className="text-[#A1A1AA] text-sm font-semibold">Duration</h3>
                        <p>{project.duration}</p>
                    </div>

                    <div>
                        <h3 className="text-[#A1A1AA] text-sm font-semibold">Team</h3>
                        <p>{project.team}</p>
                    </div>

                    <div>
                        <h3 className="text-[#A1A1AA] text-sm font-semibold">Year</h3>
                        <p>{project.year}</p>
                    </div>
                </div>

                {/* Image */}
                <div className="mt-16 flex gap-6 overflow-x-auto flex-nowrap [&::-webkit-scrollbar]:hidden">
                    {project.imgSrc.map((image) => 
                        <img key={image} src={image} alt={`${project.appTitle} project`} className="rounded-lg shadow-lg w-92 h-auto"/>
                    )}
                </div>

                {/* Project Backgorund */}
                <div className="grid grid-cols-3 mt-12 gap-12">
                    <div className="col-span-2 flex flex-col gap-8">

                        {/* Backgorund */}
                        <div className="flex flex-col gap-2">
                            <h2 className="text-2xl font-display font-semibold text-white">Project Background</h2>
                            <p className="text-md text-[#A1A1AA] tracking-wide text-justify">{project.background}</p>
                        </div>

                        {/* Solution */}
                        <div className="flex flex-col gap-2">
                            <h2 className="text-2xl font-display font-semibold text-white">Project Solution</h2>
                            <p className="text-md text-[#A1A1AA] text-justify">{project.solution}</p>
                        </div>

                        {/* Responsible */}
                        <div className="flex flex-col gap-2">
                            <h2 className="text-2xl font-display font-semibold text-white">Responsible</h2>
                            <p className="text-md text-[#A1A1AA] text-justify">{project.responsible}</p>
                        </div>
                    </div>

                    <div className="bg-[#161616] border border-[#383838] rounded-md p-6 flex flex-col gap-4">
                        
                        {/* Texhnologies */}
                        <p className="text-[#22C55E] tracking-wide text-md font-display">Technologies</p>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((technology) => (
                                <span
                                    key={technology}
                                    className="hover:bg-[#22C55E] hover:text-[#0B0B0B] px-4 py-2 rounded-xl border border-[#383838] text-sm"
                                >
                                    {technology}
                                </span>
                            ))}
                        </div>

                        {/* Feature */}
                        <p className="text-[#22C55E] tracking-wide text-md font-display mt-4">Features</p>
                        <ul className="flex flex-wrap gap-2">
                            {project.features.map((feat) => (
                                <li key={feat} className="text-sm font-display px">· {feat}</li>
                                )
                            )}
                        </ul>

                        {/* Button To Project */}
                        <a href={`https://github.com/Christsando/${project.githubLink}`} target="_blank">
                            <button className="cursor-pointer w-full my-8 px-4 text-sm py-2 text-black transition-all duration-300 rounded-2xl bg-[#22C55E] hover:bg-[#22C55E]/80">View Project on GitHub</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}