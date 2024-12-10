import React from "react";
import {
  Brain,
  Cpu,
  Lightbulb,
  Github,
  ExternalLink,
  ArrowLeft,
  LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { DevpostIcon } from "@/components/icons/DevpostIcon";
import Image from "next/image";

interface Project {
  title: string;
  technologies: string[];
  achievement: string;
  description: string;
  development: string;
  skills: string;
  icon: LucideIcon;
  image: string;
  github?: string;
  demo?: string;
  devpost?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-blue-500/50 transition-colors overflow-hidden group">
    <div className="md:col-span-5 h-48 sm:h-64 md:h-auto relative">
      <div className="w-full h-full bg-gray-900 flex items-center justify-center relative">
        <div className="relative w-full aspect-video overflow-hidden rounded-lg">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 right-4 flex gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800/50 rounded-full hover:bg-blue-500/20 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800/50 rounded-full hover:bg-blue-500/20 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
            {project.devpost && (
              <a
                href={project.devpost}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800/50 rounded-full hover:bg-blue-500/20 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <DevpostIcon className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>

    <div className="md:col-span-7 p-4 md:p-6">
      <div className="flex items-center gap-2 mb-3">
        <project.icon className="w-5 h-5 text-blue-500" />
        <h3 className="text-lg font-semibold text-gray-100">{project.title}</h3>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech: string, i: number) => (
          <span
            key={i}
            className="px-3 py-1 bg-gray-700/50 text-blue-400 rounded-full text-sm font-medium hover:bg-blue-500/20 transition-all"
          >
            {tech}
          </span>
        ))}
      </div>

      {project.achievement && (
        <p className="text-gray-300 text-sm mb-3">{project.achievement}</p>
      )}

      <p className="text-gray-400 text-sm mb-3">{project.description}</p>

      {project.development && (
        <p className="text-gray-400 text-sm mb-3">{project.development}</p>
      )}

      {project.skills && (
        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {project.skills.split(", ").map((skill: string, i: number) => (
            <span
              key={i}
              className="px-3 py-1 bg-gray-700/50 text-green-400 rounded-full text-sm font-medium hover:bg-green-500/20 transition-all"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
);
const ProjectsPage = () => {
  const projects: Project[] = [
    {
      title: "VR Circuit Simulator",
      technologies: ["Unity", "VR", "Meta Quest", "Python", "Pygame"],
      achievement:
        "Created an immersive VR application for building and testing electronic circuits",
      description:
        "Developed a VR Circuit Simulator featuring realistic breadboards, interactive components, and real-time circuit simulation, along with educational tutorials for learners at various skill levels.",
      development:
        "Integrated Circuit Generator for natural language command generation and 2D Circuit Simulator for rapid prototyping and testing in Pygame.",
      skills: "Unity, VR Development, Pygame, NLP, Interactive Design",
      icon: Cpu,
      image: "/gallery.jpg",
      github: "https://github.com/Parth12358/Circuit-Simulator-Kit",
      devpost: "https://devpost.com/software/circuit-simulator",
    },
    {
      title: "PathFinder",
      technologies: ["Next.js", "TypeScript", "React", "AI"],
      achievement:
        "Developed a dual-purpose AI chatbot for Penn State Smeal College of Business and ICDS",
      description:
        "Created an AI-powered platform combining career guidance with RAG capabilities for accurate document summarization and career advice.",
      development:
        "Built using Next.js for frontend, Langchain for AI backend, implementing two distinct data pipelines for career guidance and document processing.",
      skills: "AI Development, RAG, Next.js, Langchain, UX Design",
      icon: Brain,
      image: "/pathfinder.png",
      github: "https://github.com/PabloRogers/hackpsu2024",
      devpost: "https://devpost.com/software/pathfinder-cvhtp6",
    },
    {
      title: "The Moth Challenge",
      technologies: ["Next.js", "JavaScript", "React", "Figma"],
      achievement:
        "Won first place in the cybersecurity track at Bitcamp hosted by the University of Maryland",
      description:
        "Inspired by Cicada 3301 and CIA cybersecurity tests, this project involved creating gamified puzzles to introduce students to cybersecurity.",
      development:
        "Utilized React for front-end development and JavaScript for core logic and puzzles.",
      skills: "Cryptography, Steganography, Web Security, JavaScript, React",
      icon: Lightbulb,
      image: "/mothchallenge.jpg",
      github: "https://github.com/kartikey-onlineGOD/BitCamp-2024-Cyber-",
      devpost: "https://devpost.com/software/moth-challenege",
      demo: "https://moth-challenge.http://phishandchips.us/com",
    },
  ];

  return (
    <div className="min-h-screen py-8 md:py-12 px-4 md:px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 md:mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-300 
    bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-blue-500/50
    rounded-lg transition-all duration-200 hover:text-gray-100 hover:shadow-lg hover:shadow-blue-500/10
    backdrop-blur-sm group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Portfolio
          </Link>
        </div>

        <div className="space-y-2 mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-100">
            My Projects
          </h1>
          <p className="text-gray-400 text-base md:text-lg">
            A collection of my work and achievements
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
