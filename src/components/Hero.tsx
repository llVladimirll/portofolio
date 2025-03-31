"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { Link } from "react-scroll";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import ParticleContainer from "./ParticleContainer";

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

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-elegant-primary text-elegant-accent px-4 relative overflow-hidden"
    >
      <BackgroundPattern />
      <ParticleContainer />
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I&apos;m{" "}
            <span className="text-elegant-secondary">
              Vladimirrahman Salsabil Abdullah
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6">
            I&apos;m a{" "}
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
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mt-6">
            <Link to="projects" smooth={true} duration={500}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-elegant-secondary text-elegant-accent font-bold py-2 px-6 rounded-md transition duration-300 hover:bg-elegant-accent hover:text-elegant-primary"
              >
                Explore My Work
              </motion.button>
            </Link>
            <div className="flex gap-4">
              <motion.a
                href="https://linkedin.com/in/vladimirrahman"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="text-elegant-accent hover:text-elegant-secondary transition-colors duration-300"
              >
                <FaLinkedin size={32} />
              </motion.a>
              <motion.a
                href="https://github.com/llVladimirll"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="text-elegant-accent hover:text-elegant-secondary transition-colors duration-300"
              >
                <FaGithub size={32} />
              </motion.a>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0"
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
