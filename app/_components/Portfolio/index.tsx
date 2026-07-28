"use client";

import { useEffect, useState } from "react";
import { content, type Language } from "@/app/content";
import About from "../About";
import Contact from "../Contact";
import Footer from "../Footer";
import Header from "../Header";
import Hero from "../Hero";
import Projects from "../Projects";
import Skills from "../Skills";
import Strengths from "../Strengths";

export default function Portfolio() {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("portfolio-language");

    if (savedLanguage !== "en" && savedLanguage !== "ja") return;

    const frame = window.requestAnimationFrame(() => {
      setLanguage(savedLanguage);
      document.documentElement.lang = savedLanguage;
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  function switchLanguage() {
    const nextLanguage: Language = language === "en" ? "ja" : "en";

    setLanguage(nextLanguage);
    window.localStorage.setItem("portfolio-language", nextLanguage);
    document.documentElement.lang = nextLanguage;
  }

  return (
    <>
      <Header language={language} onLanguageChange={switchLanguage} />

      <main>
        <Hero language={language} />
        <About language={language} />
        <Skills language={language} />
        <Projects language={language} />
        <Strengths language={language} />
        <Contact language={language} />
      </main>

      <Footer language={language} footerText={content.footer} />
    </>
  );
}
