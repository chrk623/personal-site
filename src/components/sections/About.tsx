import Link from "next/link";
import { SectionHeader } from "../SectionHeader";

export const About = () => {
  return (
    <section id="about" className="mb-24">
      <SectionHeader number="01" title="About" />

      <div className="mb-4 block lg:hidden">
        <h1 className="mb-2 text-[48px] font-semibold leading-none text-foreground">
          Charco Hui
        </h1>
        <h2 className="mb-6 text-xl font-medium text-muted-foreground/60">
          Data Scientist &amp; Developer
        </h2>
      </div>

      <div className="space-y-4 leading-relaxed text-muted-foreground">
        <p>
          I&apos;m a developer and PhD candidate at{" "}
          <Link href="https://auckland.ac.nz">The University of Auckland</Link>{" "}
          researching in <i>&quot;Natural Language Processing in Clinicial </i>
          Trials&quot;. I working across a variety of fields to solve complex
          problems with technology. While my main focus is on AI and machine
          learning, I also take on projects in data science, software
          development, web development, and blockchain, depending on what
          interests me at the time or what the job requires.
        </p>
        <p>
          I enjoy exploring different areas of technology, applying AI to create
          innovative solutions and combining it with practical skills in
          development to bring ideas to life. Whether it&apos;s building
          predictive models, diving into data analysis, or creating
          user-friendly applications.
        </p>
      </div>
    </section>
  );
};
