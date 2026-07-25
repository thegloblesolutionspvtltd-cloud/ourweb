import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(localStorage.getItem('app_lang') || 'en');
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    localStorage.setItem('app_lang', lang);
    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', lang);

    // Fetch translations from backend
    axios.get(`/api/public/translations/${lang}`)
      .then(res => {
        setTranslations(res.data || {});
      })
      .catch(err => {
        console.warn('Could not load translations from server:', err);
      });
  }, [lang]);

  const t = (key, fallback = '') => {
    return translations[key] || fallback || key;
  };

  const changeLanguage = (newLang) => {
    setLang(newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage, t, dir: lang === 'ar' ? 'rtl' : 'ltr' }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
