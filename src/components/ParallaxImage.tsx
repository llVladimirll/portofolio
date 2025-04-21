import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
};

export default function ParallaxImage({ project }: { project: Project }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div className="w-full lg:w-1/2 px-0 lg:px-2 mb-8">
      <Link href={project.link} target="_blank">
        <div ref={ref} className="h-[500px] overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full object-cover h-full"
            style={{ y }}
          />
        </div>
        <h2 className="text-2xl mt-2 pr-4">{project.title}</h2>
        <div className="flex mt-2 gap-1 flex-wrap">
          {project.technologies.map((technology: string, index: number) => (
            <span
              key={index}
              className="bg-[#1B1B1A] px-2 py-[2px] rounded-[3px] font-light text-sm"
            >
              {technology}
            </span>
          ))}
        </div>
      </Link>
    </div>
  );
}
