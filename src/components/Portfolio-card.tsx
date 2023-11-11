import { useState } from 'react';
import useHandleButtonClick from '../hooks/useHandleButtonClick';

interface Props {
  imageSrc: string;
  altText: string;
  firstDescription: string;
  secondDescription: string;
  githubUrl: string;
  demoUrl: string;
  demoIcon: string;
}

function PortfolioCard({
  imageSrc,
  altText,
  firstDescription,
  secondDescription,
  githubUrl,
  demoUrl,
  demoIcon,
}: Props) {
  const { handleButtonClick, handleKeyDown } = useHandleButtonClick();
  const [elementFocusedByTab, setElementFocusedByTab] = useState(false);

  const handleElementFocusedByTab = (
    event: React.KeyboardEvent<HTMLAnchorElement>
  ) => {
    if (event.key === 'Tab') {
      setElementFocusedByTab(true);
    }
  };

  return (
    <div className="max-w-xs flex flex-col gap-2 text-center">
      <a
        href={demoUrl}
        onClick={handleButtonClick}
        onKeyDown={handleKeyDown}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:animate-wiggle rounded-2xl h-full drop-shadow-[0_0_0.15rem_rgba(0,209,205,0.5)]"
      >
        <img
          src={imageSrc}
          alt={altText}
          className="rounded-2xl min-h-[10rem]"
        />
      </a>

      <div className="bg-slate-900 min-h-[26rem] flex flex-col place-content-between rounded-2xl ">
        <div className="flex flex-col gap-3">
          <p className=" px-3 mt-3">{firstDescription}</p>
          <p className=" px-3">{secondDescription}</p>
        </div>
        <div className="flex place-content-between p-3">
          <a
            href={githubUrl}
            onClick={handleButtonClick}
            onKeyDown={handleKeyDown}
            onKeyUp={handleElementFocusedByTab}
            onBlur={() => setElementFocusedByTab(false)}
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:animate-wiggle hover:text-[#00d1cd] fa-brands fa-square-github fa-3x opacity-80 active:text-[#00d1ce] active:bg-tap-transparent focus:outline-none ${
              elementFocusedByTab
                ? 'focus:text-[#00d1ce] focus:outline-none'
                : 'focus:outline-none'
            }`}
          />
          <a
            href={demoUrl}
            onClick={handleButtonClick}
            onKeyDown={handleKeyDown}
            onKeyUp={handleElementFocusedByTab}
            onBlur={() => setElementFocusedByTab(false)}
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:animate-wiggle hover:text-[#00d1cd] ${demoIcon} fa-3x opacity-80 active:text-[#00d1ce] active:bg-tap-transparent focus:outline-none ${
              elementFocusedByTab
                ? 'focus:text-[#00d1ce] focus:outline-none'
                : 'focus:outline-none'
            }`}
          />
        </div>
      </div>
    </div>
  );
}

export default PortfolioCard;
