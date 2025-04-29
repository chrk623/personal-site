import Link from "next/link";
import type { PublicationItemType } from "@/types";
import { SectionHeader } from "../SectionHeader";
import { PUBLICATION_DATA } from "@/constants/sections";

export const Publication = () => {
  return (
    <section id="publication" className="mb-24">
      <SectionHeader number="05" title="Papers" />
      <div className="space-y-12">
        {PUBLICATION_DATA.map(
          (publication: PublicationItemType, index: number) => (
            <div key={index}>
              <div className="mb-2 flex items-center justify-between">
                <h4 className="text-lg text-foreground">
                  <Link
                    href={publication.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {publication.paperTitle}
                  </Link>
                </h4>
                <span className="text-sm text-muted-foreground">
                  {publication.year}
                </span>
              </div>
              {publication.description && (
                <div className="mb-4 space-y-2 tracking-tight text-muted-foreground">
                  {publication.description}
                </div>
              )}
            </div>
          ),
        )}
      </div>
    </section>
  );
};
