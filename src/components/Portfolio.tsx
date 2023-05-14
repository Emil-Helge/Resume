import { useTranslation } from 'react-i18next';
import PortfolioCard from './Portfolio-card';
import GHEDb from '/src/images/GHEDb.png';
import Tech101 from '/src/images/Tech101.png';
import Bumpy from '/src/images/bumpy.png';

function Portfolio() {
  const { t } = useTranslation();

  return (
    <>
      <div
        id="Portfolio"
        className="flex flex-col pl-5 pr-5 pt-20 gap-3 text-lg text-center"
      >
        <h1 className="text-4xl font-mono font-extrabold mb-2 first-letter:text-[#00d1cd]">
          {t('portfolio-title')}
        </h1>
        <p className="text-lg md:w-2/4 place-self-center">
          {t('portfolio-description-header')}
        </p>
      </div>
      <div className="flex justify-center gap-4 flex-wrap mt-5 text-lg">
        <PortfolioCard
          imageSrc={Bumpy}
          altText="Bumpy Monster title"
          firstDescription={t('portfolio-bumpy-description-one')}
          secondDescription={t('portfolio-bumpy-description-two')}
          githubUrl="https://github.com/Emil-Helge/Bumpy-The-game"
          demoUrl="https://bumpythegame.netlify.app/"
          demoIcon="fa-solid fa-gamepad"
        />
        <PortfolioCard
          imageSrc={GHEDb}
          altText="GHEDb title"
          firstDescription={t('portfolio-GHEDb-description-one')}
          secondDescription={t('portfolio-GHEDb-description-two')}
          githubUrl="https://github.com/Emil-Helge/GHE-Movie-App"
          demoUrl="https://ghedb.netlify.app/"
          demoIcon="fa-solid fa-film"
        />
        <PortfolioCard
          imageSrc={Tech101}
          altText="Tech101 title"
          firstDescription={t('portfolio-Tech101-description-one')}
          secondDescription={t('portfolio-Tech101-description-two')}
          githubUrl="https://github.com/Emil-Helge/Tech-101-Webshop"
          demoUrl="https://tech-101-webshop.netlify.app/"
          demoIcon="fa-solid fa-computer"
        />
      </div>
    </>
  );
}

export default Portfolio;
