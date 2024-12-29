"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { NAV_ITEMS } from "@/constants/nav";
import { motion, useInView } from "motion/react";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export const Sidebar = () => {
  const scrollToSection = useScrollToSection();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="fixed left-[10%] top-[100px] hidden lg:block">
      <div className="mb-12">
        <Image
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Man%20Technologist%20Light%20Skin%20Tone.png"
          alt="Man Technologist Light Skin Tone"
          width={100}
          height={100}
          className="mb-4"
          unoptimized
        />
        <h1
          ref={ref}
          className="mb-2 text-[48px] font-semibold leading-none text-foreground"
        >
          {"Charco Hui".split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.2, delay: index * 0.1 }}
            >
              {letter}
            </motion.span>
          ))}
        </h1>
        <h2 className="mb-6 text-xl font-medium text-muted-foreground/80">
          Data Scientist &amp;
          <br />
          Developer
        </h2>
        <p className="max-w-[250px] text-sm text-muted-foreground">
          Enjoy playing around with data and developing software.
        </p>
      </div>

      <nav className="mb-12">
        <ul className="ml-0 list-none space-y-5">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <Button
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className="text-md ml-0 font-light text-muted-foreground hover:text-primary"
              >
                {item.label}
              </Button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center space-x-5">
        <Link
          href="mailto:phui285@gmail.com"
          className="transform transition-transform duration-200 hover:scale-150"
        >
          <FaEnvelope size={24} className="text-[#D14836]" />
        </Link>
        <Link
          href="https://github.com/chrk623"
          target="_blank"
          rel="noopener noreferrer"
          className="transform transition-transform duration-200 hover:scale-150"
        >
          <FaGithub size={24} className="text-[#333333] dark:text-white" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/charco-hui-836907135/"
          target="_blank"
          rel="noopener noreferrer"
          className="transform transition-transform duration-200 hover:scale-150"
        >
          <FaLinkedin
            size={24}
            className="text-[#0077B5] dark:text-[#4E9FF1]"
          />
        </Link>
      </div>
    </div>
  );
};
