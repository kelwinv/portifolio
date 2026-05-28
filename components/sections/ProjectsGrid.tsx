"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { useFadeInOnScroll } from "@/lib/hooks/useFadeInOnScroll";
import { projectsInfo, type projectInfoType } from "@/projectsApi";

type Tag = "all" | "design" | "code";

type ProjectsGridProps = {
  featuredOnly?: boolean;
  showFilters?: boolean;
};

export function ProjectsGrid({
  featuredOnly = false,
  showFilters = true,
}: ProjectsGridProps) {
  const [tag, setTag] = useState<Tag>("all");

  const sourceProjects = useMemo(() => {
    if (featuredOnly) {
      return projectsInfo.filter((p) => p.featured);
    }
    return projectsInfo;
  }, [featuredOnly]);

  const filteredProjects = useMemo(() => {
    if (tag === "all") return sourceProjects;
    return sourceProjects.filter((p) => p.tag === tag || p.tag === "all");
  }, [tag, sourceProjects]);

  return (
    <>
      {showFilters && (
        <div className="flex flex-wrap gap-2">
          <FilterButton active={tag === "all"} onClick={() => setTag("all")}>
            Todos
          </FilterButton>
          <FilterButton
            active={tag === "design"}
            onClick={() => setTag("design")}
          >
            Design
          </FilterButton>
          <FilterButton active={tag === "code"} onClick={() => setTag("code")}>
            Code
          </FilterButton>
        </div>
      )}

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </>
  );
}

function ProjectCard({ project }: { project: projectInfoType }) {
  const { ref, visible } = useFadeInOnScroll();

  return (
    <article
      ref={ref}
      className={`fade-in-on-scroll card-hover flex flex-col overflow-hidden rounded-2xl border border-[#ebe8ff] shadow-sm ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      } transition-all duration-500`}
    >
      <div className="relative aspect-[16/10] bg-[#f5f3ff]">
        <Image
          src={project.imgUrl}
          alt={project.name}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
        />
      </div>

      <div className="flex flex-grow flex-col p-6">
        <h4 className="font-['Poppins:Bold',sans-serif] text-xl text-[#0f0d1d]">
          {project.name}
        </h4>
        <p className="mt-3 flex-grow font-['Poppins:Regular',sans-serif] text-base text-[#3e3b53]">
          {project.about}
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          {project.tecs.map((Tec, idx) => (
            <span
              key={idx}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#ebe8ff] text-[#0f0d1d]"
              title="Tecnologia"
              aria-label="Tecnologia"
            >
              <Tec />
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          {project.project && (
            <a
              href={project.project}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-11 flex-1 items-center justify-center rounded-lg bg-[#e62e62] px-4 py-2 text-center font-['Poppins:SemiBold',sans-serif] text-sm text-white transition-colors hover:bg-[#d12755]"
            >
              Ver projeto
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-11 flex-1 items-center justify-center rounded-lg border border-[#0f0d1d]/30 px-4 py-2 text-center font-['Poppins:SemiBold',sans-serif] text-sm text-[#0f0d1d] transition-colors hover:border-[#0f0d1d]/60"
          >
            Ver código
          </a>
        </div>
      </div>
    </article>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`min-h-11 rounded-full px-4 py-2 font-['Poppins:SemiBold',sans-serif] text-sm transition-colors ${
        active
          ? "bg-[#0f0d1d] text-white"
          : "bg-[#ebe8ff] text-[#0f0d1d] hover:bg-[#d0cce9]"
      }`}
    >
      {children}
    </button>
  );
}
