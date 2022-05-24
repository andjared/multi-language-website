import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();
const LanguageUpdateContext = createContext();

//custom hooks
export function useLanguage() {
  return useContext(LanguageContext);
}
export function useUpdateLanguage() {
  return useContext(LanguageUpdateContext);
}

export function LanguageProvider({ children }) {
  let languageStoredInLocalStorage = localStorage.getItem("language");
  const [language, setLanguage] = useState(
    languageStoredInLocalStorage || "serbian"
  );
  function storeLanguageInLocalStorage(language) {
    localStorage.setItem("language", language);
  }
  const changeLanguage = (language) => {
    setLanguage(language);
    storeLanguageInLocalStorage(language);
  };

  return (
    <LanguageContext.Provider value={language}>
      <LanguageUpdateContext.Provider value={changeLanguage}>
        {children}
      </LanguageUpdateContext.Provider>
    </LanguageContext.Provider>
  );
}
