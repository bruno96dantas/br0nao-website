// src/data.ts
import { Experience, SkillCategory, Project, Education } from "../types";

export const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "Tech Corp",
    duration: "Jan 2021 - Present",
    description: "Developed scalable web applications using React and Node.js.",
  },
];

export const skills: SkillCategory = {
  "Programming Languages": ["JavaScript", "Python", "Java"],
  "Frameworks": ["React", "Node.js", "Tailwind CSS"],
  "Tools": ["Git", "Docker", "VS Code"],
};

export const projects: Project[] = [
  {
    name: "Project 1",
    description: "A web application for task management.",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/yourprofile/project1",
  },
];

export const education: Education[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of XYZ",
    duration: "2017 - 2021",
  },
];