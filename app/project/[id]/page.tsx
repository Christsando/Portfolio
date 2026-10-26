
import { notFound } from "next/navigation";
import { projects } from "../../data/projects";
import ProjectDetail from "../../components/projectdetail-section";
import Footer from "../../components/footer-section";

export function generateStaticParams() {
  return projects.map((project) => ({
    id: String(project.id),
  }));
}

type ProjectPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { id } = await params;

  const project = projects.find(
    (item) => String(item.id) === id
  );

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-[#0B0B0B] text-white antialiased">
      <main className="flex flex-col w-full min-h-screen max-w-6xl mx-auto">
        <ProjectDetail project={project} />
      </main>
      <Footer  />
    </div>
  );
}
