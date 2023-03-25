import { useTranslation } from 'react-i18next';
import selfie from '../images/Selfie.jpg';

function Contact() {
  const { t } = useTranslation();

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLAnchorElement>,
    url: string
  ) => {
    if (event.key === ' ' || event.key === 'Spacebar') {
      event.preventDefault();
      event.currentTarget.blur();
      window.open(url, '_blank', 'noopener noreferrer');
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
            onKeyDown={(event) =>
              handleKeyDown(
                event,
                'https://www.linkedin.com/in/emil-helgesson94/'
              )
            }
            target="_blank"
            id="linkedinIcon"
            className="fa-brands fa-linkedin fa-3x opacity-60 hover:opacity-100 hover:text-[#00d1cd] focus:text-[#00d1ceb4] focus:outline-none focus:opacity-100"
          ></a>
          <a
            href="https://github.com/Emil-Helge"
            onKeyDown={(event) =>
              handleKeyDown(event, 'https://github.com/Emil-Helge')
            }
            target="_blank"
            id="githubIcon"
            className="fa-brands fa-square-github fa-3x opacity-60 hover:opacity-100 hover:text-[#00d1cd] focus:text-[#00d1ceb4] focus:outline-none focus:opacity-100"
          ></a>
          <a
            href="mailto:emil.helgesson@medieinstitutet.se"
            onKeyDown={(event) =>
              handleKeyDown(event, 'mailto:emil.helgesson@medieinstitutet.se')
            }
            target="_blank"
            id="emailIcon"
            className="fa-solid fa-square-envelope fa-3x opacity-60 hover:opacity-100 hover:text-[#00d1cd] focus:text-[#00d1ceb4] focus:outline-none focus:opacity-100"
          ></a>
        </div>
      </div>
    </>
  );
}

export default Contact;
