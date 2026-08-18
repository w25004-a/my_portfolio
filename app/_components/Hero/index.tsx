import Image from "next/image";
import { ArrowRight, FileDown } from "lucide-react";
import { content, type Language, text } from "@/app/content";
import styles from "./index.module.css";

type HeroProps = { language: Language };

export default function Hero({ language }: HeroProps) {
  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.copy}>
        <p className="eyebrow">{text(content.hero.eyebrow, language)}</p>
        <h1
          id="hero-title"
          className={language === "ja" ? styles.japaneseTitle : undefined}
        >
          {text(content.hero.title, language)}
        </h1>
        <h1
          id="hero-subtitle"
          className={language === "ja" ? styles.japaneseTitle : undefined}
        >
          {text(content.hero.Subtitle, language)}
        </h1>
        <p className={styles.description}>
          {text(content.hero.description, language)}
        </p>

        <div className={styles.actions}>
          <a className="button buttonPrimary" href="#projects">
            {text(content.hero.work, language)}
            <ArrowRight size={18} aria-hidden="true" />
          </a>

          <a className="button" href="/arpan-khatiwada-resume.pdf" download>
            <FileDown size={18} aria-hidden="true" />
            {text(content.hero.resume, language)}
          </a>
        </div>
      </div>

      <div className={styles.image} aria-hidden="true">
        <Image
          src="/Arpan.JPG"
          alt=""
          fill
          sizes="(max-width: 800px) 100vw, 45vw"
          priority
        />
      </div>
    </section>
  );
}
