import { useTranslation } from 'react-i18next';
import HrAnimation from './HrAnimation';
import ResumeNameLogo from '/src/images/resume-name-alt-logo.png';

function About() {
  const { t } = useTranslation();

  return (
    <>
      <div
        id="About"
        className="flex flex-col pl-5 pr-5 pt-5 gap-3 text-lg w-fit md:w-2/3"
      >
        <h1 className="text-4xl font-mono font-extrabold mb-2 pt-7 md:pt-0 first-letter:text-[#00d1cd]">
          {t('about-header')}
        </h1>
        <img
          src={ResumeNameLogo}
          alt="Image with name and logo"
          className="w-40"
        />
        <h2 className="text-xl font-mono font-extrabold">{t('front-end')}</h2>
        <p>{t('about-text-one')}</p>
        <p>{t('about-text-two')}</p>
        <HrAnimation width="100%" />
      </div>
    </>
  );
}

export default About;
