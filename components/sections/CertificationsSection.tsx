import { certifications } from "@/lib/content/certifications";

export function CertificationsSection() {
  return (
    <section id="certificacoes" className="bg-[#f5f3ff] px-4 py-28 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-center font-['Poppins:Bold',sans-serif] text-5xl text-[#0f0d1d]">
          Certificações
        </h2>
        <ul className="space-y-4">
          {certifications.map((cert) => (
            <li
              key={cert.title}
              className="rounded-2xl bg-white px-6 py-4 font-['Poppins:Regular',sans-serif] text-lg text-[#3e3b53] shadow-md"
            >
              {cert.title}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
