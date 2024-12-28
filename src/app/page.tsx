"use client";

import { useState, useEffect } from "react";
import { MobileHeader } from "@/components/nav/MobileHeader";
import { Sidebar } from "@/components/nav/Sidebar";
import { MainContent } from "../components/MainContent";
import { ThemeToggle } from "@/components/nav/theme-toggle";

interface MousePosition {
  x: number;
  y: number;
}

const Portfolio = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-background">
      <div className="fixed right-24 top-8 z-50 hidden lg:block">
        <ThemeToggle />
      </div>

      <div
        className="pointer-events-none fixed inset-0 opacity-20 transition-all duration-300 ease-out"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgb(124, 58, 237) 0%, transparent 50%)`,
        }}
      />

      <div
        className="pointer-events-none fixed inset-0 opacity-20 transition-all duration-300 ease-out dark:opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgb(124, 58, 237) 0%, rgba(124, 58, 237, 0.3) 50%)`,
        }}
      />

      <MobileHeader />
      <div className="relative mx-auto w-full max-w-7xl">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
};

export default Portfolio;
