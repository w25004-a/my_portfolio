"use client";

import Image from "next/image";
import {
  BriefcaseBusiness,
  Code2,
  Home,
  Languages,
  Mail,
  ShieldCheck,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { content, type Language, text } from "@/app/content";
import styles from "./index.module.css";

type HeaderProps = {
  language: Language;
  onLanguageChange: () => void;
};

type NavigationItem = {
  id: string;
  label: { en: string; ja: string };
  icon: LucideIcon;
};

const sectionIcons: Record<string, LucideIcon> = {
  about: UserRound,
  skills: Code2,
  projects: BriefcaseBusiness,
  strengths: ShieldCheck,
  contact: Mail,
};

export default function Header({ language, onLanguageChange }: HeaderProps) {
  const [activeSection, setActiveSection] = useState("top");

  const navigationItems = useMemo<NavigationItem[]>(
    () => [
      {
        id: "top",
        label: { en: "Home", ja: "ホーム" },
        icon: Home,
      },
      ...content.navigation.map((item) => ({
        ...item,
        icon: sectionIcons[item.id],
      })),
    ],
    [],
  );

  useEffect(() => {
    const updateActiveSection = () => {
      const marker = window.scrollY + 150;
      let currentSection = "top";

      for (const item of navigationItems) {
        const section = document.getElementById(item.id);

        if (section && section.offsetTop <= marker) {
          currentSection = item.id;
        }
      }

      const reachedPageEnd =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;

      setActiveSection(reachedPageEnd ? "contact" : currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [navigationItems]);

  return (
    <header className={styles.header}>
      <a className={styles.brand} href="#top" aria-label="Arpan portfolio home">
        <Image src="/logo.png" alt="Arpan logo" width={42} height={42} priority />
        <span>ARPAN</span>
      </a>

      <nav className={styles.navigation} aria-label="Main navigation">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const label = text(item.label, language);
          const isActive = activeSection === item.id;

          return (
            <a
              key={item.id}
              className={isActive ? styles.active : undefined}
              href={`#${item.id}`}
              aria-label={label}
              aria-current={isActive ? "location" : undefined}
              title={label}
              onClick={() => setActiveSection(item.id)}
            >
              <Icon size={18} strokeWidth={2} aria-hidden="true" />
              <span>{label}</span>
            </a>
          );
        })}
      </nav>

      <button
        className={styles.languageButton}
        type="button"
        onClick={onLanguageChange}
        aria-label={language === "en" ? "Switch to Japanese" : "英語に切り替える"}
      >
        <Languages size={17} aria-hidden="true" />
        {language === "en" ? "日本語" : "English"}
      </button>
    </header>
  );
}
