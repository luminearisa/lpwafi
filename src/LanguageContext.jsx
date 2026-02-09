import React, { createContext, useState, useContext, useEffect } from 'react';
import idPack from './vocab/id.json';
import enPack from './vocab/en.json';

const dictionaries = {
  id: idPack,
  en: enPack
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // cek localstorage ---
  // cek bahasa, default nya ID.
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('siteLang');
    return savedLanguage || 'id';
  });

  // update localstorage bahasa yang dipilih
  useEffect(() => {
    localStorage.setItem('siteLang', language);
  }, [language]);

  // function LanguageContext
  const t = (path) => {
    const keys = path.split('.');
    let currentData = dictionaries[language];

    for (let key of keys) {
      if (currentData[key] === undefined) {
        return path;
      }
      currentData = currentData[key];
    }

    return currentData;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);