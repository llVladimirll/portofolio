"use client";

import ParallaxImage from "./ParallaxImage";

const projects = [
  {
    title: "TokoTani",
    description:
      "TokoTani is a marketplace website that empowers farmers to sell their goods directly to consumers, ensuring fair pricing and better market access.",
    image: "/images/TokoTani-2.png",
    technologies: ["React", "Node.js", "Express", "PostgreSQL"],
    link: "https://toko-tani-2.vercel.app/",
  },
  {
    title: "Scholarium",
    description:
      "Scholarium is a platform that helps users find scholarships, volunteer opportunities, and other academic or career-enhancing programs.",
    image: "/images/Scholarium-2.png",
    technologies: ["HTML", "Tailwind", "MySQL", "PHP"],
    link: "https://github.com/llVladimirll/scholarium-main",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-5 px-4 md:px-8 bg-elegant-primary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center text-elegant-accent">
          Featured Projects
        </h2>
        <div className="mt-8 min-h-screen">
          <div className="flex flex-wrap -mx-0 lg:-mx-2">
            {projects.map((project, index) => (
              <ParallaxImage key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
