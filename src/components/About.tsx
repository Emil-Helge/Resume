import { useTranslation } from 'react-i18next';
import HrAnimation from './HrAnimation';
import ResumeNameLogo from '/src/images/resume-name-alt-logo.png';

function About() {
  const { t } = useTranslation();

  return (
    <>
      <div id="About" className="flex flex-col pl-5 pr-5 pt-5 gap-3 text-lg">
        <h1 className="text-4xl font-mono font-extrabold mb-2 pt-7 md:pt-0 first-letter:text-[#00d1cd]">
          {t('about-header')}
        </h1>
        <img
          src={ResumeNameLogo}
          alt="Image with name and logo"
          className="w-40"
        />
        <h2 className="text-xl font-mono font-extrabold">{t('front-end')}</h2>
        <p className="md:w-2/3">{t('about-text-one')}</p>
        <p className="md:w-2/3">{t('about-text-two')}</p>
      </div>
      <HrAnimation width="66%" />
    </>
  );
}

export default About;
