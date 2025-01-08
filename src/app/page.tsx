import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";

const Portfolio = () => {
  return (
    <div className="mx-auto w-full max-w-[580px] px-6 pb-[100px] pt-[100px] lg:ml-[40%] lg:px-0">
      <About />
      <Experience />
      <Education />
      <Projects />
      <Skills />
    </div>
  );
};

export default Portfolio;
