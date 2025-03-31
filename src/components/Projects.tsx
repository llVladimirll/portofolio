"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "TokoTani",
    description:
      "TokoTani is a marketplace website that empowers farmers to sell their goods directly to consumers, ensuring fair pricing and better market access. It bridges the gap between farmers and buyers through a seamless and efficient online platform.",
    image: "/images/TokoTani.png",
    technologies: ["React", "Node.js", "Express", "PostgreSQL"],
    link: "https://toko-tani-2.vercel.app/",
  },
  {
    title: "Scholarium",
    description:
      "Scholarium is a platform that helps users find scholarships, volunteer opportunities, and other academic or career-enhancing programs. It connects students and professionals with valuable opportunities to support their education and personal growth.",
    image: "/images/Scholarium.png",
    technologies: ["HTML", "Tailwind", "MySQL", "PHP"],
    link: "https://github.com/llVladimirll/scholarium-main",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-elegant-primary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-elegant-accent">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-lg" // Added rounded-lg here
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full rounded-lg"
              >
                <div className="rounded-lg bg-elegant-secondary overflow-hidden shadow-lg hover:shadow-elegant-accent transition-all duration-300 transform hover:scale-105 h-full flex flex-col">
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    {" "}
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover rounded-t-lg" // Apply rounded-t-lg directly to Image
                    />
                  </div>
                  <div className="p-6 flex-1 rounded-b-lg">
                    <h3 className="text-xl font-semibold mb-2 text-elegant-accent">
                      {project.title}
                    </h3>
                    <p className="text-elegant-accent mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-elegant-primary text-elegant-accent text-xs font-semibold px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
