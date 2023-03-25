import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggleBtn';

function Header() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [burgerMenuFocusedByTab, setBurgerMenuFocusedByTab] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const ScrollToId = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = event.currentTarget.dataset.target as string;
    const targetElement = document.getElementById(targetId) as HTMLElement;
    window.scrollTo({
      behavior: 'smooth',
      top: targetElement.offsetTop,
    });
    setActiveMenuItem(targetId);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (event.key === ' ' || event.key === 'Spacebar') {
      event.preventDefault();
      ScrollToId(event as any);
    }
  };

  const handleBurgerMenuTab = (
    event: React.KeyboardEvent<HTMLButtonElement>
  ) => {
    if (event.key === 'Tab') {
      setBurgerMenuFocusedByTab(true);
    }
  };

  const handleBlur = () => {
    setActiveMenuItem(null);
  };

  const isMenuItemActive = (itemId: string) => activeMenuItem === itemId;
  return (
    <header className="overflow-y-hidden text-white py-2 px-4 w-full md:w-auto">
      <LanguageToggle />
      <nav className="p-0 m-0">
        <div className="text-3xl md:hidden">
          <button
            onClick={toggleMenu}
            onKeyUp={handleBurgerMenuTab}
            onBlur={() => setBurgerMenuFocusedByTab(false)}
            className={`flex absolute top-2 right-2  fa-solid fa-bars h-7 ${
              burgerMenuFocusedByTab
                ? 'focus:text-[#00d1ceb4] focus:outline-none'
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
              className={`rounded-xl p-2 border-[#00d1cd] hover:bg-[#00d1ceb4]${
                isMenuItemActive('About') ? '' : ' focus:bg-[#00d1ceb4]'
              } focus:outline-none w-full block md:inline text-center`}
              data-target="About"
              onClick={ScrollToId}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
            >
              {t('about-title')}
            </a>
          </li>
          <li className="w-full">
            <a
              href="#Education"
              className={`rounded-xl p-2 border-[#00d1cd] hover:bg-[#00d1ceb4]${
                isMenuItemActive('Education') ? '' : ' focus:bg-[#00d1ceb4]'
              } focus:outline-none w-full block md:inline text-center`}
              data-target="Education"
              onClick={ScrollToId}
              onKeyDown={handleKeyDown}
            >
              {t('education-title')}
            </a>
          </li>
          <li className="w-full">
            <a
              href="#Skills"
              className={`rounded-xl p-2 border-[#00d1cd] hover:bg-[#00d1ceb4]${
                isMenuItemActive('Skills') ? '' : ' focus:bg-[#00d1ceb4]'
              } focus:outline-none w-full block md:inline text-center`}
              data-target="Skills"
              onClick={ScrollToId}
              onKeyDown={handleKeyDown}
            >
              {t('skills-title')}
            </a>
          </li>
          <li className="w-full">
            <a
              href="#Portfolio"
              className={`rounded-xl p-2 border-[#00d1cd] hover:bg-[#00d1ceb4]${
                isMenuItemActive('Portfolio') ? '' : ' focus:bg-[#00d1ceb4]'
              } focus:outline-none w-full block md:inline text-center`}
              data-target="Portfolio"
              onClick={ScrollToId}
              onKeyDown={handleKeyDown}
            >
              {t('portfolio-title')}
            </a>
          </li>
          <li className="w-full">
            <a
              href="#Contact"
              className={`rounded-xl p-2 border-[#00d1cd] hover:bg-[#00d1ceb4]${
                isMenuItemActive('Contact') ? '' : ' focus:bg-[#00d1ceb4]'
              } focus:outline-none w-full block md:inline text-center`}
              data-target="Contact"
              onClick={ScrollToId}
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
