import Image from "next/image";
import { Code2, Eye } from "lucide-react";
import { content, type Language, text } from "@/app/content";
import SectionHeading from "../SectionHeading";
import styles from "./index.module.css";

type ProjectsProps = { language: Language };

export default function Projects({ language }: ProjectsProps) {
  return (
    <section id="projects" className="section">
      <SectionHeading label={content.projects.label} title={content.projects.title} language={language} />

      <div className={styles.grid}>
        {content.projects.items.map((project, index) => (
          <article className={styles.card} key={project.title.en}>
            <div className={styles.preview}>
              <Image
                src={project.image}
                alt={text(project.imageAlt, language)}
                fill
                sizes="(max-width: 560px) 100vw, (max-width: 860px) 50vw, 33vw"
              />
            </div>

            <div className={styles.body}>
              <span className={styles.number}>0{index + 1}</span>
              <h3>{text(project.title, language)}</h3>
              <p>{text(project.description, language)}</p>

              <ul className={styles.tags} aria-label="Technologies">
                {project.stack.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>

              <div className={styles.links}>
                <ProjectLink
                  url={project.demoUrl}
                  label={text(content.projects.live, language)}
                  unavailableLabel={text(content.projects.unavailable, language)}
                  icon={<Eye size={16} aria-hidden="true" />}
                />
                <ProjectLink
                  url={project.sourceUrl}
                  label={text(content.projects.source, language)}
                  unavailableLabel={text(content.projects.unavailable, language)}
                  icon={<Code2 size={16} aria-hidden="true" />}
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

type ProjectLinkProps = {
  url: string;
  label: string;
  unavailableLabel: string;
  icon: React.ReactNode;
};

function ProjectLink({ url, label, unavailableLabel, icon }: ProjectLinkProps) {
  if (!url) {
    return (
      <span className={`${styles.link} ${styles.disabled}`} aria-disabled="true">
        {icon}
        {unavailableLabel}
      </span>
    );
  }

  return (
    <a className={styles.link} href={url} target="_blank" rel="noreferrer">
      {icon}
      {label}
    </a>
  );
}
