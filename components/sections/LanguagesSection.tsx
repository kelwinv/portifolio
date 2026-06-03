import { languages } from "@/lib/content/languages";

export function LanguagesSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-center font-['Poppins:Bold',sans-serif] text-3xl text-[#0f0d1d]">
          Idiomas
        </h2>
        <ul className="space-y-4">
          {languages.map((lang) => (
            <li
              key={lang.name}
              className="rounded-2xl border border-[#ebe8ff] bg-[#f5f3ff] px-6 py-4 text-center"
            >
              <p className="font-['Poppins:Bold',sans-serif] text-xl text-[#0f0d1d]">
                {lang.name}
              </p>
              <p className="mt-1 font-['Poppins:Regular',sans-serif] text-base text-[#3e3b53]">
                {lang.level}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
