"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

import { DATA } from "@/data";

export const TechScroll = () => {
  // Collect all unique tools from all technology categories
  const allTools = [
    ...DATA.about.technologies.frontend.tools,
    ...DATA.about.technologies.graphicDesign.tools,
    ...DATA.about.technologies.logoDesign.tools,
    ...DATA.about.technologies.uiUx.tools,
  ];

  // Remove duplicates based on name
  const uniqueTools = Array.from(
    new Map(allTools.map((tool) => [tool.name, tool])).values()
  );

  // Duplicate the array for seamless infinite scroll
  const duplicatedTools = [...uniqueTools, ...uniqueTools];

  return (
    <div className="max-w-xl mx-auto px-2 sm:px-4">
      <p className="text-center text-xs sm:text-sm md:text-base text-foreground-500 mb-3 md:mb-4 font-medium">
        Technologies & Tools
      </p>
      <div className="w-full py-3 md:py-4 overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-20 md:w-24 bg-gradient-to-r from-background/100 via-background/60 to-background/0 z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-20 md:w-24 bg-gradient-to-l from-background/100 via-background/60 to-background/0 z-10 pointer-events-none" />
        
        <motion.div
          animate={{
            x: [0, -50 + "%"],
          }}
          className="flex gap-3 sm:gap-4 md:gap-6"
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {duplicatedTools.map((tool, index) => (
            <div
              key={`${tool.name}-${index}`}
              className="flex items-center justify-center transition-all duration-300 hover:scale-110 flex-shrink-0"
            >
              <Icon
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                icon={tool.icon}
                style={"color" in tool && tool.color ? { color: tool.color } : undefined}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
