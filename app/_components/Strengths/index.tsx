import { Award } from "lucide-react";
import { content, type Language, text } from "@/app/content";
import SectionHeading from "../SectionHeading";
import styles from "./index.module.css";

type StrengthsProps = { language: Language };

export default function Strengths({ language }: StrengthsProps) {
  return (
    <section id="strengths" className={`section ${styles.strengths}`}>
      <SectionHeading label={content.strengths.label} title={content.strengths.title} language={language} />

      <div>
        <div className={styles.list}>
          {content.strengths.items.map((item) => (
            <article key={item.title.en}>
              <h3>{text(item.title, language)}</h3>
              <p>{text(item.detail, language)}</p>
            </article>
          ))}
        </div>

        <div className={styles.certifications}>
          <Award size={20} aria-hidden="true" />
          <ul>
            {content.strengths.certifications.map((certification) => (
              <li key={certification}>{certification}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
