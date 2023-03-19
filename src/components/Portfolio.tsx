import { useTranslation } from 'react-i18next';
import PortfolioCard from './Portfolio-card';
import Bumpy from '/src/images/bumpy.png';
import GHEDb from '/src/images/GHEDb.png';

function Portfolio() {
  const { t } = useTranslation();

  return (
    <>
      <div
        id="Portfolio"
        className="flex flex-col pl-5 pr-5 pt-5 gap-3 text-lg text-center"
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
          firstDescription="Bumpy Monster was created for an assignment by myself and five other students where we used p5.js, TypeScript and worked with OOP."
          secondDescription="Learn more about the game or try it out by checking it out on GitHub or play the demo by clicking the links below"
          githubUrl="https://github.com/Emil-Helge/Bumpy-The-game"
          demoUrl="https://bumpythegame.netlify.app/"
          demoIcon="fa-solid fa-gamepad"
        />
        <PortfolioCard
          imageSrc={GHEDb}
          altText="GHEDb title"
          firstDescription="GHEDb was created for an assignment by myself and two other students where we used React, Typescript, worked with an API and used Styled-Components."
          secondDescription="Learn more about the site or browse it for yourself by checking it out on GitHub or view the demo by clicking the links below"
          githubUrl="https://github.com/Emil-Helge/GHE-Movie-App"
          demoUrl="https://ghedb.netlify.app/"
          demoIcon="fa-solid fa-film"
        />
      </div>
    </>
  );
}

export default Portfolio;
