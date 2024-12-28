import type { EducationItemType } from "@/types";
import { SectionHeader } from "../SectionHeader";
import { EDUCATION_DATA } from "@/constants/sections";

export const Education = () => {
  return (
    <section id="education" className="mb-24">
      <SectionHeader number="03" title="Education" />
      <div className="space-y-12">
        {EDUCATION_DATA.map((education: EducationItemType, index: number) => (
          <div key={index}>
            <div className="mb-2 flex items-center justify-between">
              <div className="flex flex-col">
                <h4 className="text-lg text-foreground">{education.degree}</h4>
                <h5 className="text-primary">{education.institute}</h5>
              </div>
              <span className="text-sm text-muted-foreground">
                {education.period}
              </span>
            </div>
            {education.description && (
              <div className="mb-2 space-y-2 tracking-tight text-muted-foreground">
                {education.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
