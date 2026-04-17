import React, { createContext, useState, useContext, useEffect } from 'react';
import idPack from './vocab/id.json';
import enPack from './vocab/en.json';
import arPack from './vocab/ar.json';

const dictionaries = {
  id: idPack,
  en: enPack,
  ar: arPack
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // cek localstorage ---
  // cek bahasa, default nya ID.
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('siteLang');
    return savedLanguage || 'id';
  });

  // update localstorage bahasa yang dipilih dan tangani RTL
  useEffect(() => {
    localStorage.setItem('siteLang', language);
    
    // Setel atribut HTML lang dan dir
    document.documentElement.lang = language;
    if (language === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
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