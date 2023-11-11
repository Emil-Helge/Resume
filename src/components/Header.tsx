import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import useHandleButtonClick from '../hooks/useHandleButtonClick';
import LanguageToggle from './LanguageToggleBtn';

function Header() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [elementFocusedByTab, setElementFocusedByTab] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const { handleButtonClick, handleKeyDown } = useHandleButtonClick(
    true,
    toggleMenu
  );

  const handleElementFocusedByTab = (
    event: React.KeyboardEvent<HTMLButtonElement>
  ) => {
    if (event.key === 'Tab') {
      setElementFocusedByTab(true);
    }
  };

  return (
    <header className="overflow-y-hidden text-white py-2 px-4 w-full md:w-auto">
      <LanguageToggle />
      <nav className="p-0 m-0">
        <div className="text-3xl md:hidden">
          <button
            onClick={toggleMenu}
            onKeyUp={handleElementFocusedByTab}
            onBlur={() => setElementFocusedByTab(false)}
            className={`hover:text-[#00d1cd] flex absolute top-2 right-2 fa-solid fa-bars h-7 active:text-[#00d1ce] active:bg-tap-transparent ${
              elementFocusedByTab
                ? 'focus:text-[#00d1ce] focus:outline-none'
                : 'focus:outline-none'
            }`}
          />
        </div>
        <ul
          className={`flex flex-col text-xl font-extrabold items-center mt-12 gap-5 ${
            menuOpen ? '' : 'hidden'
          } md:flex md:flex-row  md:mt-0`}
        >
          <li className="w-full">
            <a
              href="#About"
              className={`whitespace-nowrap rounded-xl p-2 border-[#00d1cd] hover:bg-[#00d1ceb4] focus:bg-[#00d1ceb4] focus:outline-none w-full block md:inline text-center`}
              data-target="About"
              onClick={handleButtonClick}
              onKeyDown={handleKeyDown}
            >
              {t('about-title')}
            </a>
          </li>
          <li className="w-full">
            <a
              href="#Experience"
              className={`whitespace-nowrap rounded-xl p-2 border-[#00d1cd] hover:bg-[#00d1ceb4] focus:bg-[#00d1ceb4] focus:outline-none w-full block md:inline text-center`}
              data-target="Experience"
              onClick={handleButtonClick}
              onKeyDown={handleKeyDown}
            >
              {t('experience-title')}
            </a>
          </li>
          <li className="w-full">
            <a
              href="#Skills"
              className={`whitespace-nowrap rounded-xl p-2 border-[#00d1cd] hover:bg-[#00d1ceb4] focus:bg-[#00d1ceb4] focus:outline-none w-full block md:inline text-center`}
              data-target="Skills"
              onClick={handleButtonClick}
              onKeyDown={handleKeyDown}
            >
              {t('skills-title')}
            </a>
          </li>
          <li className="w-full">
            <a
              href="#Portfolio"
              className={`whitespace-nowrap rounded-xl p-2 border-[#00d1cd] hover:bg-[#00d1ceb4] focus:bg-[#00d1ceb4] focus:outline-none w-full block md:inline text-center`}
              data-target="Portfolio"
              onClick={handleButtonClick}
              onKeyDown={handleKeyDown}
            >
              {t('portfolio-title')}
            </a>
          </li>
          <li className="w-full">
            <a
              href="#Contact"
              className={`whitespace-nowrap rounded-xl p-2 border-[#00d1cd] hover:bg-[#00d1ceb4] focus:bg-[#00d1ceb4] focus:outline-none w-full block md:inline text-center`}
              data-target="Contact"
              onClick={handleButtonClick}
              onKeyDown={handleKeyDown}
            >
              {t('contact-title')}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
