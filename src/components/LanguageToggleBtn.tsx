import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

function LanguageToggle() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [isActive, setIsActive] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsActive(!isActive);

    buttonRef.current?.blur();
  };

  return (
    <div className="absolute top-0 left-0 font-extrabold text-lg">
      <button
        ref={buttonRef}
        className={`flex gap-2 place-items-center rounded-xl p-2  hover:bg-[#00d1ceb4] ${
          isActive ? '' : ' focus:bg-[#00d1ceb4]'
        } focus:outline-none`}
        onClick={() => changeLanguage(currentLanguage === 'en' ? 'sv' : 'en')}
        title={currentLanguage === 'en' ? 'Byt språk' : 'Change language'}
      >
        <i className="fa-solid fa-earth-europe fa-lg" />
        {currentLanguage === 'en' ? 'SV' : 'EN'}
      </button>
    </div>
  );
}

export default LanguageToggle;
