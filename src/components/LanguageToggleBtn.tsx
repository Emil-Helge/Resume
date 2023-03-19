import { useTranslation } from 'react-i18next';

function LanguageToggle() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="absolute top-0 left-0 font-extrabold text-lg">
      <button
        className="flex gap-2 place-items-center rounded-xl p-2 border-[#00d1cd] hover:bg-[#00d1ceb4]"
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
