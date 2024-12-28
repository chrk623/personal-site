import Link from "next/link";
import type { ExperienceItemType } from "@/types";
import { SectionHeader } from "../SectionHeader";
import { EXPERIENCE_DATA } from "@/constants/sections";

export const Experience = () => {
  return (
    <section id="experience" className="mb-24">
      <SectionHeader number="02" title="Experience" />
      <div className="space-y-12">
        {EXPERIENCE_DATA.map(
          (experience: ExperienceItemType, index: number) => (
            <div key={index}>
              <div className="mb-2 flex items-center justify-between">
                <h4 className="text-lg text-foreground">
                  {experience.title}{" "}
                  {experience.company && (
                    <Link
                      href={
                        experience.companyLink ? experience.companyLink : "#"
                      }
                      className="text-primary no-underline"
                    >
                      @ {experience.company}
                    </Link>
                  )}
                </h4>
                <span className="text-sm text-muted-foreground">
                  {experience.period}
                </span>
              </div>
              <div className="mb-4 space-y-2 tracking-tight text-muted-foreground">
                {experience.description}
              </div>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-primary/20 bg-background/50 px-3 py-1 text-xs text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ),
        )}
      </div>
    </section>
  );
};
