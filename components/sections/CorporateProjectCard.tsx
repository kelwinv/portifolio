"use client";

import { motion, useReducedMotion } from "motion/react";

import type { CorporateProject } from "@/lib/content/corporate-projects";

type CorporateProjectCardProps = {
  project: CorporateProject;
};

export function CorporateProjectCard({ project }: CorporateProjectCardProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className="flex w-[min(90vw,380px)] shrink-0 flex-col rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
      whileHover={reducedMotion ? undefined : { y: -2 }}
      transition={{ duration: 0.2 }}
    >
      {project.company && (
        <p className="mb-1 font-['Poppins:SemiBold',sans-serif] text-sm tracking-wide text-[#e62e62] uppercase">
          {project.company}
        </p>
      )}
      <h4 className="mb-4 font-['Poppins:Bold',sans-serif] text-2xl text-white">
        {project.name}
      </h4>
      <p className="mb-6 flex-grow font-['Poppins:Regular',sans-serif] text-base text-[#d0cce9]">
        {project.description}
      </p>

      <div className="space-y-4">
        <div>
          <p className="mb-2 font-['Poppins:SemiBold',sans-serif] text-sm text-[#e62e62]">
            Stack Principal
          </p>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-[#e62e62]/20 px-3 py-1 font-['Poppins:Medium',sans-serif] text-xs text-[#ebe8ff]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-1 font-['Poppins:SemiBold',sans-serif] text-sm text-[#e62e62]">
            Problema
          </p>
          <p className="font-['Poppins:Regular',sans-serif] text-sm text-[#d0cce9]">
            {project.problem}
          </p>
        </div>

        {project.technicalDecision && (
          <div>
            <p className="mb-1 font-['Poppins:SemiBold',sans-serif] text-sm text-[#e62e62]">
              Decisão técnica
            </p>
            <p className="font-['Poppins:Regular',sans-serif] text-sm text-[#d0cce9]">
              {project.technicalDecision}
            </p>
          </div>
        )}

        {project.tradeOff && (
          <div>
            <p className="mb-1 font-['Poppins:SemiBold',sans-serif] text-sm text-[#e62e62]">
              Trade-off
            </p>
            <p className="font-['Poppins:Regular',sans-serif] text-sm text-[#d0cce9]">
              {project.tradeOff}
            </p>
          </div>
        )}

        <div>
          <p className="mb-1 font-['Poppins:SemiBold',sans-serif] text-sm text-[#e62e62]">
            Resultado
          </p>
          <p className="font-['Poppins:Regular',sans-serif] text-sm font-semibold text-white">
            {project.result}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
