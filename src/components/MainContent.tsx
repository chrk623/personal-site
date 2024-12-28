import { About } from "./sections/About";
import { Education } from "./sections/Education";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";

export const MainContent = () => {
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
