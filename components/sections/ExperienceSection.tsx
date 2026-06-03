import { experiences } from "@/lib/content/experience";

export function ExperienceSection() {
  return (
    <section id="experiencia" className="bg-white px-4 py-28 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-16 text-center font-['Poppins:Bold',sans-serif] text-4xl text-[#0f0d1d] md:text-5xl">
          Experiência Profissional
        </h2>
        <div className="relative">
          <div className="absolute top-0 bottom-0 left-4 w-0.5 bg-[#e62e62]/30 md:left-1/2 md:-translate-x-px" />

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            const entryKey = `${exp.company}-${exp.role}-${exp.period}`;
            return (
              <div
                key={entryKey}
                className={`relative mb-12 w-full pl-12 text-left md:mb-16 md:w-1/2 md:pl-0 ${
                  isLeft
                    ? "md:pr-8 md:text-right"
                    : "md:ml-auto md:pl-8 md:text-left"
                }`}
              >
                <div className="card-hover rounded-2xl bg-gradient-to-br from-[#ebe8ff] to-[#f5f3ff] p-6 shadow-lg md:p-8">
                  <div
                    className={`absolute top-8 h-7 w-7 rounded-full border-4 border-white bg-[#e62e62] ${
                      isLeft
                        ? "left-0 -translate-x-1/2 md:right-[-1.75rem] md:left-auto md:translate-x-0"
                        : "left-0 -translate-x-1/2 md:left-[-1.75rem] md:translate-x-0"
                    }`}
                  />

                  <h3 className="mb-2 font-['Poppins:Bold',sans-serif] text-2xl text-[#0f0d1d]">
                    {exp.company}
                  </h3>
                  <p className="mb-1 font-['Poppins:SemiBold',sans-serif] text-lg text-[#e62e62]">
                    {exp.role}
                  </p>
                  <p className="mb-1 font-['Poppins:Regular',sans-serif] text-sm text-[#3e3b53]">
                    {exp.period}
                  </p>
                  {exp.location && (
                    <p className="mb-6 font-['Poppins:Regular',sans-serif] text-sm text-[#3e3b53]/80">
                      {exp.location}
                    </p>
                  )}
                  {!exp.location && <div className="mb-6" />}

                  <ul className="mb-6 list-none space-y-3">
                    {exp.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className={`flex items-start gap-3 text-left font-['Poppins:Regular',sans-serif] text-base text-[#0f0d1d] ${
                          isLeft ? "md:flex-row-reverse md:text-right" : ""
                        }`}
                      >
                        <span
                          className="mt-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-[#e62e62]"
                          aria-hidden
                        />
                        <span className="min-w-0 flex-1">{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div
                    className={`flex flex-wrap gap-2 ${
                      isLeft ? "justify-start md:justify-end" : "justify-start"
                    }`}
                  >
                    {exp.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="rounded-full bg-white px-3 py-1 font-['Poppins:Medium',sans-serif] text-xs text-[#0f0d1d]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
