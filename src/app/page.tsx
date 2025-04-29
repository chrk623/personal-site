import BodyWrapper from "@/components/BodyWrapper";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Publication } from "@/components/sections/Publication";
import { Skills } from "@/components/sections/Skills";

const Portfolio = () => {
  return (
    <BodyWrapper>
      <About />
      <Experience />
      <Education />
      <Publication />
      <Projects />
      <Skills />
    </BodyWrapper>
  );
};

export default Portfolio;
