import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggleBtn';

function Header() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

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
  };

  return (
    <header className="overflow-y-hidden text-white py-2 px-4 ">
      <nav className="p-0 m-0">
        <div className="text-3xl md:hidden">
          <button
            onClick={toggleMenu}
            className="burger-menu flex absolute top-0 right-0 p-2"
          >
            <i className="fa-solid fa-bars h-7"></i>
          </button>
        </div>
        <ul
          className={`flex flex-col text-xl font-extrabold items-center mt-12 gap-5 ${
            menuOpen ? '' : 'hidden'
          } md:flex md:flex-row  md:mt-0`}
        >
          <li>
            <a
              href="#About"
              className="rounded-xl p-2 border-[#00d1cd] hover:bg-[#00d1ceb4] w-screen block md:inline text-center"
              data-target="About"
              onClick={ScrollToId}
            >
              {t('about-title')}
            </a>
          </li>
          <li>
            <a
              href="#Skills"
              className="rounded-xl p-2 border-[#00d1cd] hover:bg-[#00d1ceb4] w-screen block md:inline text-center"
              data-target="Skills"
              onClick={ScrollToId}
            >
              {t('skills-title')}
            </a>
          </li>
          <li>
            <a
              href="#Education"
              className="rounded-xl p-2 border-[#00d1cd] hover:bg-[#00d1ceb4] w-screen block md:inline text-center"
              data-target="Education"
              onClick={ScrollToId}
            >
              {t('education-title')}
            </a>
          </li>
          <li>
            <a
              href="#Portfolio"
              className="rounded-xl p-2 border-[#00d1cd] hover:bg-[#00d1ceb4] w-screen block md:inline text-center"
              data-target="Portfolio"
              onClick={ScrollToId}
            >
              {t('portfolio-title')}
            </a>
          </li>
          <li>
            <a
              href="#Contact"
              className="rounded-xl p-2 border-[#00d1cd] hover:bg-[#00d1ceb4] w-screen block md:inline text-center"
              data-target="Contact"
              onClick={ScrollToId}
            >
              {t('contact-title')}
            </a>
          </li>
        </ul>
      </nav>
      <LanguageToggle />
    </header>
  );
}

export default Header;
