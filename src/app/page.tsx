"use client";

import "./globals.css";
import DownloadButton from "../components/DownloadButton";
import { DevpostIcon } from "@/components/icons/DevpostIcon";
import React, { useState } from "react";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Terminal,
  ExternalLink,
} from "lucide-react";

export default function Home() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const primarySkills = [
    {
      name: "Python",
      description: "ML/AI Development, Data Processing, Backend",
      years: "3 years",
    },
    {
      name: "React",
      description: "Frontend Development, UI/UX, Components",
      years: "2 years",
    },
    {
      name: "Next.js",
      description: "Full-stack Applications, Server Components",
      years: "1.5 years",
    },
    {
      name: "TypeScript",
      description: "Type-safe Development, Better DX",
      years: "2 years",
    },
    {
      name: "LLM",
      description: "RAG, Prompt Engineering, AI Integration",
      years: "1 year",
    },
    {
      name: "Javascript",
      description: "Web Development, DOM Manipulation",
      years: "3 years",
    },
  ];

  const achievements = [
    {
      title: "First place in cybersecurity track at Bitcamp 2024",
      link: "https://devpost.com/",
      date: "April 2024",
    },
    {
      title:
        "Developed AI chatbot for Penn State Smeal College of Business and ICDS",
      link: "https://smeal.psu.edu/",
      date: "October 2024",
    },
    {
      title: "Best VR/AR hack at HackUmass 2024 with our project VR Breadboard",
      link: "https://hackumass.com/",
      date: "November 2024",
    },
  ];

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col md:flex-row items-center justify-center gap-12 py-8 px-8 md:px-8">
      <div className="flex-1 max-w-xl">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-5xl font-bold text-gray-100 hover:scale-105 transition-transform cursor-default">
              Hi, I&apos;m
              <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                {" "}
                Parth
              </span>
            </h1>
            <p className="text-2xl text-gray-300">
              Computer Science Student & Software Developer
            </p>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed">
            I&apos;m a Computer Science student at Penn State University.
            Currently maintaining a 3.59 CGPA with a minor in Entrepreneurship
            and Innovation. I love building things that aim to impact our lives
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 
                text-white rounded-lg font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
            >
              View My Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <DownloadButton />
          </div>

          <div className="flex items-center gap-6 pt-4">
            {[
              {
                icon: <Github className="w-6 h-6" />,
                href: "https://github.com/Parth12358",
                tooltip: "Github",
              },
              {
                icon: <Linkedin className="w-6 h-6" />,
                href: "https://www.linkedin.com/in/parth-kshirsagar-0a46a9217/",
                tooltip: "LinkedIn",
              },
              {
                icon: <DevpostIcon className="w-6 h-6" />,
                href: "https://devpost.com/parth-kshirsagar1410",
                tooltip: "DevPost",
              },
              {
                icon: <Mail className="w-6 h-6" />,
                href: "mailto:parth.kshirsagar1410@gmail.com",
                tooltip: "Email",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-gray-400 hover:text-blue-500 transition-all hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="border-t border-gray-700 pt-6 mt-8">
            <h2 className="text-xl font-semibold text-gray-100 mb-4">
              Recent Achievements
            </h2>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <a
                  key={index}
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-gray-300 hover:text-gray-100 transition-colors"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 group-hover:scale-110 transition-transform" />
                  <div className="flex-1">
                    <p className="group-hover:text-blue-400 transition-colors">
                      {achievement.title}
                    </p>
                    <p className="text-sm text-gray-500">{achievement.date}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 max-w-md">
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-colors">
          <h2 className="text-xl font-semibold text-gray-100 mb-4 flex items-center gap-2">
            <Terminal className="w-5 h-5 text-blue-500" />
            Technical Focus
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-200 mb-2">
                Primary Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {primarySkills.map((skill) => (
                  <div
                    key={skill.name}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="relative group"
                  >
                    <span
                      className="px-3 py-1 bg-gray-700/50 text-blue-400 rounded-full text-sm font-medium 
                      hover:bg-blue-500/20 transition-all cursor-pointer"
                    >
                      {skill.name}
                    </span>
                    {hoveredSkill === skill.name && (
                      <div
                        className="absolute bottom-full left-0 mb-2 w-48 p-2 bg-gray-800 rounded-lg shadow-lg
                        text-sm text-gray-300 z-10 transform -translate-x-1/4"
                      >
                        <p className="font-medium text-blue-400">
                          {skill.name}
                        </p>
                        <p className="text-xs mt-1">{skill.description}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          Experience: {skill.years}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-200 mb-2">
                Learning
              </h3>
              <div className="flex flex-wrap gap-2">
                {["App Development", "Full Stack", "Backend Development"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-700/50 text-green-400 rounded-full text-sm font-medium
                        hover:bg-green-500/20 transition-all cursor-pointer"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-700">
            <h3 className="text-lg font-medium text-gray-200 mb-3">
              Education
            </h3>
            <div className="space-y-2 hover:transform hover:scale-105 transition-transform cursor-default">
              <p className="text-gray-100">Penn State University</p>
              <p className="text-gray-300">B.S. Computer Science</p>
              <p className="text-gray-300">
                Minor in Entrepreneurship and Innovation
              </p>
              <p className="text-blue-500">CGPA: 3.59</p>
              <p className="text-gray-400">Expected Graduation: May 2026</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
