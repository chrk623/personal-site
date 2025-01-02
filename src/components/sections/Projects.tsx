import { FaStar } from "react-icons/fa";
import type { ProjectItemType } from "@/types";
import { SectionHeader } from "../SectionHeader";
import { PROJECTS_DATA } from "@/constants/sections";
import { LANGUAGE_COLORS } from "@/constants/languages";

interface ProjectCardProps {
  project: ProjectItemType;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="rounded-md border border-primary/20 bg-background/50 p-4 transition-all hover:scale-110 hover:border-primary/40">
      <div className="mb-3 flex items-start justify-between">
        <div className="flex items-center gap-2">
          <a
            href={project.link}
            className="text-primary no-underline hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.title}
          </a>
        </div>
        {project.stars && (
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <FaStar className="h-4 w-4 text-yellow-500" />
            {project.stars.toLocaleString()}
          </div>
        )}
      </div>
      <p className="mb-4 text-sm text-muted-foreground">
        {project.description}
      </p>
      <div className="flex items-center gap-2">
        <span className="flex items-center gap-1 text-sm text-muted-foreground">
          <span
            className="inline-block h-3 w-3 rounded-full"
            style={{
              backgroundColor: LANGUAGE_COLORS[project.language],
            }}
          />
          {project.language}
        </span>
      </div>
    </div>
  );
}

export const Projects = () => {
  return (
    <section id="projects" className="mb-24">
      <SectionHeader number="04" title="Projects" />
      <div className="space-y-12">
        {PROJECTS_DATA.map((project: ProjectItemType, index: number) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </section>
  );
};
