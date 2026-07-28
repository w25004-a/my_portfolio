import { MapPin } from "lucide-react";
import { content, type Language, text } from "@/app/content";
import SectionHeading from "../SectionHeading";
import styles from "./index.module.css";

type AboutProps = { language: Language };

export default function About({ language }: AboutProps) {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <SectionHeading label={content.about.label} title={content.about.title} language={language} />

      <div className={styles.content}>
        {content.about.paragraphs.map((paragraph) => (
          <p key={paragraph.en}>{text(paragraph, language)}</p>
        ))}

        <dl className={styles.facts}>
          {content.about.facts.map((fact) => (
            <div key={fact.name.en}>
              <dt>{text(fact.name, language)}</dt>
              <dd>
                {fact.name.en === "Location" && <MapPin size={16} aria-hidden="true" />}
                {text(fact.value, language)}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
