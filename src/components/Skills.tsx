"use client";

import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiHtml5,
  SiCss3,
  SiGit,
  SiDocker,
  SiSpring,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";

const skills = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "Git", icon: SiGit },
  { name: "Docker", icon: SiDocker },
  { name: "Java", icon: FaJava },
  { name: "Spring Boot", icon: SiSpring },
  { name: "Golang", icon: FaGolang },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 md:px-8 bg-elegant-accent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-elegant-primary">
          My Skillset
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-elegant-primary rounded-lg p-4 text-center hover:bg-elegant-secondary transition duration-300 cursor-pointer relative overflow-hidden"
            >
              <skill.icon className="text-4xl mb-2 mx-auto text-elegant-accent" />
              <div className="text-elegant-accent font-semibold">
                {skill.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
