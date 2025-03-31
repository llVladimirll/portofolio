"use client";

import { motion } from "framer-motion";

const FloatingParticle = ({ delay }: { delay: number }) => {
  return (
    <motion.div
      className="absolute w-2 h-2 bg-elegant-secondary rounded-full opacity-30"
      style={{
        top: `${Math.random() * 100}vh`, // Spread across the full height
        left: `${Math.random() * 100}vw`, // Spread across the full width
      }}
      initial={{ opacity: 0 }}
      animate={{
        y: `${(Math.random() - 0.5) * 200}vh`, // Move randomly up or down
        x: `${(Math.random() - 0.5) * 200}vw`, // Move randomly left or right
        opacity: [0, 1, 1, 0], // Appear and disappear smoothly
      }}
      transition={{
        duration: 5 + Math.random() * 5, // Make speed vary
        delay: delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
    />
  );
};

const ParticleContainer = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {Array.from({ length: 50 }).map((_, i) => (
        <FloatingParticle key={i} delay={Math.random() * 4} />
      ))}
    </div>
  );
};

export default ParticleContainer;
