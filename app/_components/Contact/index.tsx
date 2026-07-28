import { ExternalLink, Mail, Send } from "lucide-react";
import { type FormEvent } from "react";
import { content, type Language, text } from "@/app/content";
import SectionHeading from "../SectionHeading";
import styles from "./index.module.css";

const EMAIL = "w25004@osfl.ac.jp";
const GITHUB_URL = "https://github.com/w25004-a";

type ContactProps = { language: Language };

export default function Contact({ language }: ContactProps) {
  function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);

    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="section">
      <SectionHeading label={content.contact.label} title={content.contact.title} language={language} />

      <div className={styles.layout}>
        <div className={styles.copy}>
          <p>{text(content.contact.description, language)}</p>

          <a className={styles.contactLink} href={`mailto:${EMAIL}`}>
            <Mail size={18} aria-hidden="true" />
            {EMAIL}
          </a>

          <a className={styles.contactLink} href={GITHUB_URL} target="_blank" rel="noreferrer">
            <ExternalLink size={18} aria-hidden="true" />
            {text(content.contact.github, language)}
          </a>
        </div>

        <form className={styles.form} onSubmit={sendMessage}>
          <label>
            <span>{text(content.contact.name, language)}</span>
            <input
              type="text"
              name="name"
              autoComplete="name"
              placeholder={text(content.contact.namePlaceholder, language)}
              required
            />
          </label>

          <label>
            <span>{text(content.contact.emailLabel, language)}</span>
            <input type="email" name="email" autoComplete="email" placeholder="name@example.com" required />
          </label>

          <label>
            <span>{text(content.contact.message, language)}</span>
            <textarea
              name="message"
              rows={6}
              placeholder={text(content.contact.messagePlaceholder, language)}
              required
            />
          </label>

          <button className="button buttonPrimary" type="submit">
            <Send size={18} aria-hidden="true" />
            {text(content.contact.send, language)}
          </button>

          <p className={styles.note}>{text(content.contact.note, language)}</p>
        </form>
      </div>
    </section>
  );
}
