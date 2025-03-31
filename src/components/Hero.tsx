"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const BackgroundPattern = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeOpacity="0.1"
          />
        </pattern>
        <pattern
          id="circles"
          width="100"
          height="100"
          patternUnits="userSpaceOnUse"
        >
          <circle
            cx="50"
            cy="50"
            r="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeOpacity="0.1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
      <rect width="100%" height="100%" fill="url(#circles)" />
    </svg>
  );
};

const FloatingParticle = ({ delay }: { delay: number }) => {
  return (
    <motion.div
      className="absolute w-2 h-2 bg-elegant-secondary rounded-full opacity-30"
      initial={{ y: "100%", x: Math.random() * 100 + "%", opacity: 0 }}
      animate={{
        y: "-100%",
        opacity: [0, 1, 1, 0],
        x: `calc(${Math.random() * 100}% + ${(Math.random() - 0.5) * 50}px)`,
      }}
      transition={{
        duration: 10 + Math.random() * 10,
        delay: delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
    />
  );
};

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const [particles, setParticles] = useState<number[]>([]);

  useEffect(() => {
    setParticles(Array.from({ length: 20 }, (_, i) => i));
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-elegant-primary text-elegant-accent px-4 relative overflow-hidden"
    >
      <BackgroundPattern />
      {particles.map((_, index) => (
        <FloatingParticle key={index} delay={index * 0.5} />
      ))}
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm{" "}
            <span className="text-elegant-secondary">
              Vladimirrahman Salsabil Abdullah
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6">
            I'm a{" "}
            <TypeAnimation
              sequence={[
                "Fullstack Developer",
                2000,
                "Problem Solver",
                2000,
                "Tech Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
              className="text-elegant-secondary"
            />
          </h2>
          <Link to="projects" smooth={true} duration={500}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-elegant-secondary text-elegant-accent font-bold py-2 px-6 rounded-md transition duration-300 hover:bg-elegant-accent hover:text-elegant-primary"
            >
              Explore My Work
            </motion.button>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 rounded-full">
            <Image
              src="/images/image-1.jpeg"
              alt="Your Name"
              fill
              style={{ objectFit: "cover" }}
              className="transition-all duration-300 ease-in-out"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
