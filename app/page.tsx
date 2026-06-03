import { Github, Linkedin, Mail } from "lucide-react";

import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center px-4 py-12">
      <div className="mb-8">
        <div className="bg-brand-gold flex h-24 w-24 items-center justify-center rounded-lg">
          <Image src="/logo.png" alt="logo" width={250} height={250} />
        </div>
      </div>

      <div className="mx-auto mb-10 flex w-full max-w-lg justify-center">
        <Image
          src="/maintenance.svg"
          width={400}
          height={400}
          alt="Picture of the author"
        />
      </div>

      <h1 className="title mb-3 text-center">Site em Manutenção</h1>
      <h2 className="subtitle mb-6 text-center">
        Estamos construindo algo incrível!
      </h2>
      <p className="mx-auto mb-8 max-w-md text-center">
        Nosso site está passando por uma reformulação completa para trazer a
        melhor experiência possível. Voltaremos em breve com novidades!
      </p>

      <a
        href="https://portifolio-git-main-kelwinv.vercel.app"
        className="text-pink-light hover:text-pink underline"
      >
        Site antigo
      </a>

      <div className="mt-12 flex flex-col items-center gap-6 sm:flex-row">
        <a
          href="mailto:kelwin.v.goncalves@gmail.com"
          className="group text-brand-pink flex items-center gap-2 hover:text-pink-500 hover:underline"
        >
          <i className="transition group-hover:-translate-y-1">
            <Mail />
          </i>
          kelwin.v.goncalves@gmail.com
        </a>
        <a
          href="https://github.com/kelwinv"
          className="group text-brand-pink flex items-center gap-2 hover:text-pink-500 hover:underline"
        >
          <i className="transition group-hover:-translate-y-1">
            <Github />
          </i>
          Github
        </a>
        <a
          href="https://linkedin.com/in/kelwinv"
          className="group text-brand-pink flex items-center gap-2 hover:text-pink-500 hover:underline"
        >
          <i className="transition group-hover:-translate-y-1">
            <Linkedin />
          </i>
          Linkedin
        </a>
      </div>
    </div>
  );
}
