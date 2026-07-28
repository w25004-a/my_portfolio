import { Code2 } from "lucide-react";
import { content, type Language, text } from "@/app/content";
import SectionHeading from "../SectionHeading";
import styles from "./index.module.css";

type SkillsProps = { language: Language };

export default function Skills({ language }: SkillsProps) {
  return (
    <section id="skills" className="section">
      <SectionHeading label={content.skills.label} title={content.skills.title} language={language} />

      <div className={styles.grid}>
        {content.skills.items.map((skill) => (
          <article className={styles.card} key={skill.name}>
            <Code2 size={21} aria-hidden="true" />
            <h3>{skill.name}</h3>
            <p>{text(skill.detail, language)}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
