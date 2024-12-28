import Image from "next/image";
import { MobileNav } from "./MobileNav";
import { ThemeToggle } from "./theme-toggle";

export const MobileHeader = () => {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-accent/20 bg-background/80 px-6 py-4 backdrop-blur-sm lg:hidden">
      <div className="flex items-center justify-between">
        <Image
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Man%20Technologist%20Light%20Skin%20Tone.png"
          alt="Man Technologist Light Skin Tone"
          width={50}
          height={50}
          unoptimized
        />{" "}
        {/* <h1 className="text-2xl font-semibold text-foreground">Charco Hui</h1> */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
};
