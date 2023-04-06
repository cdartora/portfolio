import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
  return (
    <div className="mt-36 flex justify-center w-full">
      <section className="flex flex-col items-center projects text-center max-w-3xl">
        <span className="hero-title text-3xl font-semibold text-slate-800 hover:underline hover:underline-offset-4 cursor-pointer mb-10">
          Cada Projeto um Aprendizado Diferente
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-5">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </section>
    </div>
  );
}
