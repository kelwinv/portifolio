import { Button } from "@/components/ui/Button";
import { SITE_CONTACT, SITE_LINKS } from "@/lib/constants";
import { Mail, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <section
      id="contato"
      className="bg-gradient-to-br from-[#0f0d1d] to-[#16132a] px-4 py-28 sm:px-8"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-8 font-['Poppins:Bold',sans-serif] text-5xl text-white">
          Vamos Trabalhar Juntos?
        </h2>
        <p className="mb-6 font-['Poppins:Regular',sans-serif] text-xl text-[#d0cce9]">
          Aberto a novas oportunidades e projetos desafiadores. Entre em contato
          para conversarmos sobre como posso agregar valor ao seu time.
        </p>

        <div className="mb-10 flex flex-col items-center justify-center gap-2 font-['Poppins:Regular',sans-serif] text-[#d0cce9]">
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-5 w-5 shrink-0" aria-hidden />
            {SITE_CONTACT.location}
          </span>
        </div>

        <div className="mb-12 flex flex-col items-center justify-center gap-6 sm:flex-row sm:flex-wrap">
          <Button variant="light" href={SITE_LINKS.github} external>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
                clipRule="evenodd"
              />
            </svg>
            GitHub
          </Button>

          <Button variant="primary-lg" href={SITE_LINKS.linkedin} external>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </Button>

          <Button variant="ghost" href={SITE_LINKS.email}>
            <Mail className="h-6 w-6" />
            E-mail
          </Button>
        </div>

        <p className="font-['Poppins:Regular',sans-serif] text-sm text-[#d0cce9]/70">
          © 2026 Kelwin Vieira. Desenvolvedor Full Stack.
        </p>
      </div>
    </section>
  );
}
