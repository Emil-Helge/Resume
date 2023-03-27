import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

function LanguageToggle() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [btnFocusedByTab, setBtnFocusedByTab] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const handleBtnTab = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Tab') {
      setBtnFocusedByTab(true);
    }
  };

  return (
    <button
      ref={buttonRef}
      className={`absolute top-1 left-1 font-extrabold text-lg flex gap-2 place-items-center select-none active:text-[#00d1ce] active:bg-transparent border border-slate-800 rounded-full p-1 ${
        btnFocusedByTab
          ? 'focus:text-[#00d1ce] focus:outline-none'
          : 'focus:outline-none'
      }`}
      onClick={() => changeLanguage(currentLanguage === 'en' ? 'sv' : 'en')}
      onKeyUp={handleBtnTab}
      onBlur={() => setBtnFocusedByTab(false)}
      title={currentLanguage === 'en' ? 'Byt språk' : 'Change language'}
    >
      <i className="fa-solid fa-earth-europe fa-lg" />
      {currentLanguage === 'en' ? 'SV' : 'EN'}
    </button>
  );
}

export default LanguageToggle;
