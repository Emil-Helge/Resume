import { useTranslation } from 'react-i18next';

function LanguageToggle() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>en</button>
      <button onClick={() => changeLanguage('sv')}>sv</button>
    </div>
  );
}

export default LanguageToggle;
