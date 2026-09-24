"use client";

import { motion, useReducedMotion } from "motion/react";

import type { CorporateProject } from "@/lib/content/corporate-projects";

type CorporateProjectCardProps = {
  project: CorporateProject;
};

export function CorporateProjectCard({ project }: CorporateProjectCardProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.article
      className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
      whileHover={reducedMotion ? undefined : { y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <div>
        {project.company && (
          <p className="mb-2 font-['Poppins:SemiBold',sans-serif] text-sm tracking-wide text-[#e62e62] uppercase">
            {project.company}
          </p>
        )}
        <h4 className="mb-4 font-['Poppins:Bold',sans-serif] text-xl text-white">
          {project.name}
        </h4>
        <p className="mb-5 font-['Poppins:Regular',sans-serif] text-sm leading-relaxed text-[#d0cce9]">
          {project.description}
        </p>
      </div>

      <div className="flex-grow space-y-4">
        <div>
          <p className="mb-1 font-['Poppins:SemiBold',sans-serif] text-xs text-[#e62e62] uppercase">
            Problema
          </p>
          <p className="font-['Poppins:Regular',sans-serif] text-sm leading-relaxed text-[#d0cce9]">
            {project.problem}
          </p>
        </div>
        {project.technicalDecision && (
          <div>
            <p className="mb-1 font-['Poppins:SemiBold',sans-serif] text-xs text-[#e62e62] uppercase">
              Decisão
            </p>
            <p className="font-['Poppins:Regular',sans-serif] text-sm leading-relaxed text-[#d0cce9]">
              {project.technicalDecision}
            </p>
          </div>
        )}
        <div>
          <p className="mb-1 font-['Poppins:SemiBold',sans-serif] text-xs text-[#e62e62] uppercase">
            Resultado
          </p>
          <p className="font-['Poppins:Regular',sans-serif] text-sm leading-relaxed font-semibold text-white">
            {project.result}
          </p>
        </div>
      </div>

      {project.stack.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-4">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-[#e62e62]/20 px-3 py-1 font-['Poppins:Medium',sans-serif] text-xs text-[#ebe8ff]"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </motion.article>
  );
}
