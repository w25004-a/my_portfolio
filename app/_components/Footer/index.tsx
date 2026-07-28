import { type Language, type LocalizedText, text } from "@/app/content";
import styles from "./index.module.css";

type FooterProps = {
  language: Language;
  footerText: LocalizedText;
};

export default function Footer({ language, footerText }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Arpan. {text(footerText, language)}</p>
    </footer>
  );
}
