import React, { createContext, useState, useContext } from 'react';
import idPack from './vocab/id.json';
import enPack from './vocab/en.json';

const dictionaries = {
  id: idPack,
  en: enPack
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('id');

  // read (.) buat deep folder
  const t = (path) => {
    // split code
    const keys = path.split('.');

    // start default buat translator (default nya indo)
    let currentData = dictionaries[language];

    // scan 1 1 bahasa
    for (let key of keys) {
      if (currentData[key] === undefined) {
        // return error
        return path;
      }
      currentData = currentData[key];
    }

    return currentData;
  };
  // ====================

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);