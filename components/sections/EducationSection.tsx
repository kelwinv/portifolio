export function EducationSection() {
  return (
    <section className="bg-[#f5f3ff] px-4 py-28 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-16 text-center font-['Poppins:Bold',sans-serif] text-5xl text-[#0f0d1d]">
          Formação
        </h2>
        <div className="rounded-2xl bg-white p-8 shadow-lg">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 rounded-2xl bg-gradient-to-br from-[#e62e62] to-[#d12755] p-6">
              <svg
                className="h-12 w-12 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
            </div>
            <div className="flex-grow">
              <h3 className="mb-2 font-['Poppins:Bold',sans-serif] text-2xl text-[#0f0d1d]">
                Bacharelado em Ciência da Computação
              </h3>
              <p className="mb-2 font-['Poppins:SemiBold',sans-serif] text-lg text-[#e62e62]">
                Universidade Cidade de São Paulo (UNICID)
              </p>
              <p className="font-['Poppins:Regular',sans-serif] text-base text-[#3e3b53]">
                2022 — 2027
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
