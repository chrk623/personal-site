"use client";

import dynamic from "next/dynamic";
import { SectionHeader } from "../SectionHeader";

const ThreeScene = dynamic(() => import("../skills-anim/ThreeScene"), {
  ssr: false,
  loading: () => (
    <div className="mx-auto flex h-[300px] w-[600px] items-center justify-center rounded-lg border border-primary/20 bg-background/50">
      <span className="text-2xl text-primary">Loading ...</span>
    </div>
  ),
});

export const Skills = () => {
  return (
    <section id="skills" className="mb-24">
      <SectionHeader number="05" title="Skills" />
      <ThreeScene />
    </section>
  );
};
