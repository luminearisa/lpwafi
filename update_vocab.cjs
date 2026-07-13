const fs = require('fs');
const path = require('path');

const vocabDir = path.join(__dirname, 'src', 'vocab');
const langs = ['id', 'en', 'ar'];

const quranContent = {
  id: {
    menu: "Al-Quran",
    title: "Al-Quran Digital",
    search: "Cari Surah...",
    play: "Putar",
    pause: "Jeda",
    mushaf_mode: "Mode Mushaf",
    list_mode: "Mode List",
    translation: "Terjemahan",
    reciter: "Pilih Qori"
  },
  en: {
    menu: "Al-Quran",
    title: "Digital Al-Quran",
    search: "Search Surah...",
    play: "Play",
    pause: "Pause",
    mushaf_mode: "Mushaf Mode",
    list_mode: "List Mode",
    translation: "Translation",
    reciter: "Choose Reciter"
  },
  ar: {
    menu: "القرآن",
    title: "القرآن الرقمي",
    search: "البحث عن سورة...",
    play: "تشغيل",
    pause: "توقف",
    mushaf_mode: "وضع المصحف",
    list_mode: "وضع القائمة",
    translation: "ترجمة",
    reciter: "اختر المقرئ"
  }
};

langs.forEach(lang => {
  const filePath = path.join(vocabDir, `${lang}.json`);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // Add to header.menu
  if (data.header && data.header.menu) {
    data.header.menu.quran = quranContent[lang].menu;
  }
  
  // Add quran section
  data.quran = quranContent[lang];
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log(`Updated ${lang}.json`);
});
