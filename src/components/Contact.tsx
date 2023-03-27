import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import useHandleButtonClick from '../hooks/useHandleButtonClick';
import selfie from '../images/Selfie.jpg';

function Contact() {
  const { t } = useTranslation();
  const { handleButtonClick, handleKeyDown } = useHandleButtonClick();
  const [elementFocusedByTab, setElementFocusedByTab] = useState(false);

  const handleElementFocusedByTab = (
    event: React.KeyboardEvent<HTMLAnchorElement>
  ) => {
    if (event.key === 'Tab') {
      setElementFocusedByTab(true);
    }
  };

  return (
    <>
      <div
        id="Contact"
        className="flex flex-col pl-5 pr-5 pt-20 gap-3 items-center"
      >
        <h1 className="text-4xl text-center font-mono font-extrabold mb-2 first-letter:text-[#00d1cd]">
          {t('contact-title')}
        </h1>
        <img
          src={selfie}
          alt="Picture of me"
          className="w-44 border-y-2 rounded-full border-[#00d1ce4f]"
        />
        <p className="text-center max-w-xl">{t('contact-text')}</p>
        <div className="icon-container w-full flex gap-4 justify-center mt-3 mb-7">
          <a
            href="https://www.linkedin.com/in/emil-helgesson94/"
            onClick={handleButtonClick}
            onKeyDown={handleKeyDown}
            onKeyUp={handleElementFocusedByTab}
            onBlur={() => setElementFocusedByTab(false)}
            target="_blank"
            id="linkedinIcon"
            className={`fa-brands fa-linkedin fa-3x opacity-80 active:text-[#00d1ce] active:bg-tap-transparent ${
              elementFocusedByTab
                ? 'focus:text-[#00d1ce] focus:outline-none'
                : 'focus:outline-none'
            }`}
          ></a>
          <a
            href="https://github.com/Emil-Helge"
            onClick={handleButtonClick}
            onKeyDown={handleKeyDown}
            onKeyUp={handleElementFocusedByTab}
            onBlur={() => setElementFocusedByTab(false)}
            target="_blank"
            id="githubIcon"
            className={`fa-brands fa-square-github fa-3x opacity-80 active:text-[#00d1ce] active:bg-tap-transparent focus:outline-none ${
              elementFocusedByTab
                ? 'focus:text-[#00d1ce] focus:outline-none'
                : 'focus:outline-none'
            }`}
          ></a>
          <a
            href="mailto:emil.helgesson@medieinstitutet.se"
            onClick={handleButtonClick}
            onKeyDown={handleKeyDown}
            onKeyUp={handleElementFocusedByTab}
            onBlur={() => setElementFocusedByTab(false)}
            target="_blank"
            id="emailIcon"
            className={`fa-solid fa-square-envelope fa-3x opacity-80 active:text-[#00d1ce] active:bg-tap-transparent focus:outline-none ${
              elementFocusedByTab
                ? 'focus:text-[#00d1ce] focus:outline-none'
                : 'focus:outline-none'
            }`}
          ></a>
        </div>
      </div>
    </>
  );
}

export default Contact;
