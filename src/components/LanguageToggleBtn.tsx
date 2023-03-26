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
    <div className="absolute top-0 left-0 font-extrabold text-lg">
      <button
        ref={buttonRef}
        className={`flex gap-2 place-items-center rounded-xl p-2 active:text-[#00d1ce] active:bg-none focus:bg-none ${
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
    </div>
  );
}

export default LanguageToggle;
