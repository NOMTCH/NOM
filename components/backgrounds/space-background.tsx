"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const SpaceBackground = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Generate random stars
  const stars = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 5,
    duration: Math.random() * 3 + 2,
  }));

  // Generate floating particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 60 + 40,
    delay: Math.random() * 3,
    duration: Math.random() * 10 + 10,
  }));

  // Generate shooting stars (falling star effect)
  const shootingStars = Array.from({ length: 15 }, (_, i) => {
    const startX = Math.random() * 120 - 10; // Can start slightly off screen
    const startY = Math.random() * 50 - 10;
    const angle = 45 + (Math.random() * 30 - 15); // Angle variation around 45 degrees
    const distance = 40 + Math.random() * 40; // Travel distance
    
    return {
      id: i,
      startX,
      startY,
      endX: startX + distance * Math.cos((angle * Math.PI) / 180),
      endY: startY + distance * Math.sin((angle * Math.PI) / 180),
      delay: Math.random() * 8,
      duration: 1 + Math.random() * 1.5,
      length: 30 + Math.random() * 50, // Trail length
    };
  });

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Static stars background with glow */}
      {stars.map((star) => (
        <motion.div
          key={`star-${star.id}`}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.3, 1],
          }}
          className="absolute rounded-full bg-foreground dark:bg-white"
          initial={{ opacity: 0.3 }}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            boxShadow: `
              0 0 ${star.size * 2}px rgba(255, 255, 255, 0.8),
              0 0 ${star.size * 4}px rgba(0, 240, 255, 0.4)
            `,
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating gradient particles */}
      {particles.map((particle) => (
        <motion.div
          key={`particle-${particle.id}`}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          className="absolute rounded-full blur-3xl"
          initial={{ opacity: 0.1 }}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: `radial-gradient(circle, ${
              particle.id % 2 === 0
                ? "rgba(0, 240, 255, 0.3)"
                : "rgba(196, 0, 255, 0.3)"
            }, transparent)`,
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Shooting stars (falling star effect) */}
      {shootingStars.map((star) => (
        <motion.div
          key={`shooting-star-${star.id}`}
          animate={{
            x: [`${star.startX}%`, `${star.endX}%`],
            y: [`${star.startY}%`, `${star.endY}%`],
            opacity: [0, 1, 0.8, 0],
          }}
          className="absolute"
          initial={{
            x: `${star.startX}%`,
            y: `${star.startY}%`,
            opacity: 0,
          }}
          style={{
            width: `${star.length}px`,
            height: "2px",
            background: `linear-gradient(90deg, 
              transparent, 
              rgba(255, 255, 255, 0.8) 50%, 
              transparent
            )`,
            boxShadow: `
              0 0 6px rgba(255, 255, 255, 0.8),
              0 0 12px rgba(0, 240, 255, 0.6),
              0 0 18px rgba(196, 0, 255, 0.4)
            `,
            transform: "rotate(45deg)",
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            repeatDelay: 3 + Math.random() * 4,
            ease: "easeIn",
          }}
        />
      ))}

      {/* Concentric circles */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0, 0.3],
          }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div
            className="border border-[#00F0FF]/20 rounded-full"
            style={{ width: "600px", height: "600px" }}
          />
        </motion.div>

        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0, 0.3],
          }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          transition={{
            duration: 4,
            delay: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div
            className="border border-[#C400FF]/20 rounded-full"
            style={{ width: "450px", height: "450px" }}
          />
        </motion.div>
      </div>

      {/* Vignette effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, transparent 0%, rgba(13, 15, 26, 0.8) 100%)",
        }}
      />
    </div>
  );
};
