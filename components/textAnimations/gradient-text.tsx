import * as React from "react";
import { motion, type Transition } from "framer-motion";

import { cn } from "../../lib/utils";

type GradientTextProps = React.ComponentProps<"span"> & {
  text: string;
  gradient?: string;
  neon?: boolean;
  transition?: Transition;
};

function GradientText({
  text,
  className,
  gradient = "linear-gradient(90deg, #00F0FF 0%, #C400FF 20%, #00F0FF 50%, #C400FF 80%, #00F0FF 100%)",
  neon = false,
  transition = { duration: 50, repeat: Infinity, ease: "linear" },
  ...props
}: GradientTextProps) {
  const baseStyle: React.CSSProperties = {
    backgroundImage: gradient,
  };

  return (
    <span
      className={cn("relative inline-block", className)}
      data-slot="gradient-text"
      {...props}
    >
      <motion.span
        animate={{ backgroundPosition: "500% 100%" }}
        className="m-0 text-transparent bg-clip-text bg-[length:700%_100%] bg-[position:0%_0%]"
        initial={{ backgroundPosition: "0% 0%" }}
        style={baseStyle}
        transition={transition}
      >
        {text}
      </motion.span>

      {neon && (
        <motion.span
          animate={{ backgroundPosition: "500% 100%" }}
          className="m-0 absolute top-0 left-0 text-transparent bg-clip-text blur-[8px] mix-blend-plus-lighter bg-[length:700%_100%] bg-[position:0%_0%]"
          initial={{ backgroundPosition: "0% 0%" }}
          style={baseStyle}
          transition={transition}
        >
          {text}
        </motion.span>
      )}
    </span>
  );
}

export { GradientText, type GradientTextProps };
