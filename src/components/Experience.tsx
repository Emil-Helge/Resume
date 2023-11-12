import { useTranslation } from 'react-i18next';

function Experience() {
  const { t } = useTranslation();

  return (
    <>
      <div
        id="Experience"
        className="flex flex-col text-left pl-5 gap-5 text-lg"
      >
        <h1 className="text-4xl font-mono font-extrabold mb-2 first-letter:text-[#00d1cd] pt-20">
          {t('experience-title')}
        </h1>
        <div className="flex gap-12 content-center">
          <div>
            <h5 className="font-serif font-extrabold">GTI</h5>
            <p>2010-2013</p>
          </div>
          <div>
            <h5 className="font-serif font-extrabold">Medieinstitutet</h5>
            <p>2022-2024</p>
          </div>
        </div>
        <div>
          <h5 className="font-serif font-extrabold">
            {t('experience-fujitsu')}
          </h5>
          <p>{t('experience-fujitsu-period')}</p>
        </div>
      </div>
    </>
  );
}

export default Experience;
