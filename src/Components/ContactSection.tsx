import router from "next/router";
import { FormEvent, useState } from "react";
import { Container } from "../styles/components/ContactSection.modules";

function ContactSection() {
  const [subject, setSubject] = useState<string>();
  const [message, setMessage] = useState<string>();
  const [isWrong, setIsWrong] = useState(false);

  function HandleSendEmail(event: FormEvent) {
    event.preventDefault();

    if (!subject || !message) {
      setIsWrong(true);
      return;
    } else {
      setIsWrong(false);
      const url = `mailto:kelwin.v.goncalves@gmail.com?subject=${subject}&body=${message}`;
      router.push(url);
    }
  }
  return (
    <Container id="contact">
      <h1>CONTATO</h1>

      <form
        method="POST"
        encType="multipart/form-data"
        name="EmailForm"
        onSubmit={HandleSendEmail}
      >
        <label className={isWrong && !subject ? "error" : undefined}>
          <p>Por favor preencha o campo*</p>
          <input
            type="text"
            placeholder="Assunto*"
            name="ContactName"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </label>
        <label className={isWrong && !message ? "error" : undefined}>
          <p>Por favor preencha o campo*</p>
          <textarea
            placeholder="Sua mensagem*"
            name="ContactComment"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <button type="submit">ENVIAR</button>
      </form>
      <p>OU</p>
      <a
        href="https://wa.me/5511989581779/?text=Oi%20kelwin%20vim%20pelo%20site"
        target="_blank"
        rel="noreferrer"
      >
        Mande uma mensagem no <strong>WhatsApp</strong>
      </a>
    </Container>
  );
}

export default ContactSection;
