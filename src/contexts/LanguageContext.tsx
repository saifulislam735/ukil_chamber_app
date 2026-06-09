import React, { createContext, useContext, useState } from "react";

type Lang = "en" | "bn";

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (en: string, bn: string) => string;
}

const LanguageContext = createContext<LangCtx>({
  lang: "en",
  setLang: () => {},
  t: (en) => en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const t = (en: string, bn: string) => (lang === "bn" ? bn : en);
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
