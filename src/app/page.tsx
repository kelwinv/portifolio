import { Github, Linkedin, Mail } from 'lucide-react';

import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="mb-8">
        <div className="w-24 h-24 bg-brand-gold rounded-lg flex items-center justify-center">
          <Image src="/logo.png" alt='logo' width={250} height={250} />
        </div>
      </div>

      <div className="w-full max-w-lg justify-center flex mx-auto mb-10">
        <Image
          src="/maintenance.svg"
          width={400}
          height={400}
          alt="Picture of the author"
        />
      </div>

      <h1 className="title text-center mb-3">Site em Manutenção</h1>
      <h2 className="subtitle text-center mb-6">Estamos construindo algo incrível!</h2>
      <p className="text-center max-w-md mx-auto mb-8">
        Nosso site está passando por uma reformulação completa para trazer
        a melhor experiência possível. Voltaremos em breve com novidades!
      </p>


      <div className="mt-12 flex flex-col sm:flex-row items-center gap-6 ">
        <a href="mailto:kelwin.v.goncalves@gmail.com" className="group hover:text-pink-500 flex items-center gap-2 text-brand-pink hover:underline">
          <i className='group-hover:-translate-y-1 transition'>
            <Mail />
          </i>
          kelwin.v.goncalves@gmail.com
        </a>
        <a href="https://github.com/kelwinv" className="group hover:text-pink-500 flex items-center gap-2 text-brand-pink hover:underline">
          <i className='group-hover:-translate-y-1 transition'><Github /></i>
          Github
        </a>
        <a href="https://linkedin.com/in/kelwinv" className="group hover:text-pink-500 flex items-center gap-2 text-brand-pink hover:underline">
          <i className='group-hover:-translate-y-1 transition'><Linkedin /></i>
          Linkedin
        </a>
      </div>
    </div>
  );
}

