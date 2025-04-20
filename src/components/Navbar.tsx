"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import type React from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed w-full z-20 transition-colors duration-300 ${
        isScrolled ? "bg-elegant-primary shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="text-elegant-accent font-bold text-xl cursor-pointer"
            >
              Vladimirrahman
            </Link>
          </div>

          <div className="flex items-center space-x-6">
            <SocialLink href="https://linkedin.com/in/vladimirrahman">
              Linkedin
            </SocialLink>
            <SocialLink href="https://github.com/llVladimirll">
              GitHub
            </SocialLink>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="skills">Skills</NavLink>
              <NavLink to="projects">Projects</NavLink>
              <NavLink to="contact">Contact</NavLink>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

function SocialLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative text-elegant-accent font-medium text-sm md:text-base overflow-hidden group"
      whileTap={{ scale: 0.97 }}
    >
      <span className="relative z-10 transition duration-300 group-hover:text-elegant-secondary">
        {children}
      </span>
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-elegant-secondary transition-all duration-300 group-hover:w-full"></span>
    </motion.a>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      smooth={true}
      duration={500}
      className="text-elegant-accent hover:bg-elegant-secondary hover:text-elegant-primary px-3 py-2 rounded-md text-sm font-medium transition duration-300 cursor-pointer"
    >
      {children}
    </Link>
  );
}
