import { motion } from "framer-motion";
import React from "react";

type Props = {
  project: {
    id: number;
    title: string;
    challenge: string;
    solution: string;
  };
  slideNumber: string;
};

const ProjectContentUI = ({ project, slideNumber }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="relative flex h-full flex-col justify-start bg-paper p-8 md:p-12 lg:p-14 overflow-hidden"
    >
      <h2 className="mb-8 font-spring text-2xl tracking-tight text-background md:mb-12">
        {project.title}
      </h2>

      <div className="space-y-8">
        <div>
          <h3 className="mb-4 font-spring font-bold text-base tracking-wide text-primary">
            Challenge:
          </h3>
          <p className="leading-relaxed text-sm font-light text-background">
            {project.challenge}
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-spring font-bold text-base tracking-wide text-primary">
            Solution:
          </h3>
          <p className="leading-relaxed text-sm font-light text-background">
            {project.solution}
          </p>
        </div>
      </div>

      {/* Slide Number */}
      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12">
        <span className="font-spring text-sm tracking-wider text-primary">
          {slideNumber}
        </span>
      </div>
    </motion.div>
  );
};

export default ProjectContentUI;
