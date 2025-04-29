import type { LANGUAGE_COLORS } from "@/constants/languages";

export interface EducationItemType {
  degree: string;
  institute: string;
  period: string;
  description?: JSX.Element;
}

export interface ExperienceItemType {
  title: string;
  company?: string;
  companyLink?: string;
  period: string;
  description: string | JSX.Element;
  technologies: string[];
}

export interface ProjectItemType {
  title: string;
  description: string;
  language: keyof typeof LANGUAGE_COLORS;
  link?: string;
  stars?: number;
}

export interface PublicationItemType {
  paperTitle: string;
  year: string;
  url: string;
  description?: string;
}

export interface NavItem {
  id: string;
  label: string;
  atHome: boolean;
}
