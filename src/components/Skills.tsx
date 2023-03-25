import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useInView from './useInView';

function Skills() {
  const { t } = useTranslation();

  const { ref, inView } = useInView(0.4);

  const [animationApplied, setAnimationApplied] = useState(false);

  useEffect(() => {
    if (inView && !animationApplied) {
      setAnimationApplied(true);
    }
  }, [inView, animationApplied]);

  const skillsData = [
    { label: 'HTML-and-CSS', value: 95 },
    { label: 'UX-and-Usability', value: 85 },
    { label: 'Javascript', value: 75 },
    { label: 'Typescript', value: 71 },
    { label: 'React', value: 55 },
  ];

  let totalDuration = 0;
  const keyframes = skillsData.map((skill) => {
    const duration = (skill.value / 100) * 1.6;
    const delay = totalDuration;
    totalDuration += duration;
    return `
      .${skill.label} {
        animation: ${skill.label} ${duration}s ease-in-out ${delay}s forwards;
      }
      @keyframes ${skill.label} {
        from { width: 0%; }
        to { width: ${skill.value}% }
      }
    `;
  });

  return (
    <>
      <style>{keyframes}</style>
      <div id="Skills" className="flex flex-col text-right pr-5 gap-5 pt-20">
        <h1 className="text-4xl font-mono font-extrabold mb-2 first-letter:text-[#00d1cd]">
          {t('skills-title')}
        </h1>
        {skillsData.map(({ label }) => (
          <div ref={ref} key={label} className="self-end">
            <div>{label.replace(/-and-/g, ' & ')}</div>
            <div className="flex bg-slate-700 border-r-[0.1rem] border-[#00d1cd] rounded-lg h-10 w-60">
              <div
                className={`  h-10  bg-gray-300 rounded-lg ${
                  animationApplied ? label : ''
                }`}
              />
            </div>
          </div>
        ))}
        <h4 className="text-2xl font-bold">{t('skills-description-header')}</h4>
        <p className="text-lg">
          {t('skills-description-one')}
          <br />
          {t('skills-description-two')}
        </p>
      </div>
    </>
  );
}

export default Skills;
