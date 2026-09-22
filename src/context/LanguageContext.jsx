import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import en from "../locales/en.json";
import th from "../locales/th.json";

const translations = { en, th };

const LanguageContext = createContext({
  language: "th",
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: (path) => path,
  strings: th,
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    if (typeof window === "undefined") return "th";
    const saved = localStorage.getItem("portfolio-language");
    if (saved === "en" || saved === "th") return saved;
    // Default to Thai
    return "th";
  });

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem("portfolio-language", language);
  }, [language]);

  const setLanguage = useCallback((lang) => {
    if (lang === "en" || lang === "th") {
      setLanguageState(lang);
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => (prev === "en" ? "th" : "en"));
  }, []);

  const strings = translations[language] || translations.th;

  // Helper function for nested keys like t('nav.about')
  const t = useCallback(
    (keyPath) => {
      const keys = keyPath.split(".");
      let current = strings;
      for (const k of keys) {
        if (current && typeof current === "object" && k in current) {
          current = current[k];
        } else {
          return keyPath;
        }
      }
      return current;
    },
    [strings]
  );

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
        strings,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
