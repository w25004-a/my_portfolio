import { type Language, type LocalizedText, text } from "@/app/content";

type SectionHeadingProps = {
  label: LocalizedText;
  title: LocalizedText;
  language: Language;
};

export default function SectionHeading({ label, title, language }: SectionHeadingProps) {
  return (
    <div>
      <p className="eyebrow">{text(label, language)}</p>
      <h2>{text(title, language)}</h2>
    </div>
  );
}
