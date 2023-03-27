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
  const { handleButtonClick, handleKeyDown, handleTouchEnd } =
    useHandleButtonClick();

  return (
    <div className="max-w-xs flex flex-col gap-3 text-center">
      <a
        href={demoUrl}
        onClick={handleButtonClick}
        onKeyDown={handleKeyDown}
        onTouchEnd={handleTouchEnd}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-2xl h-full drop-shadow-[0_0_0.15rem_rgba(0,209,205,0.5)]"
      >
        <img src={imageSrc} alt={altText} className="rounded-2xl h-full" />
      </a>

      <div className="bg-slate-900 min-h-[23rem] flex flex-col place-content-between rounded-2xl ">
        <p className=" px-3 mt-3">{firstDescription}</p>
        <p className=" px-3">{secondDescription}</p>
        <div className="flex place-content-between p-3">
          <a
            href={githubUrl}
            onClick={handleButtonClick}
            onKeyDown={handleKeyDown}
            onTouchEnd={handleTouchEnd}
            target="_blank"
            rel="noopener noreferrer"
            className="fa-brands fa-square-github fa-3x opacity-60 hover:opacity-100 hover:text-[#00d1cd] focus:text-[#00d1ceb4] focus:outline-none focus:opacity-100"
          />
          <a
            href={demoUrl}
            onClick={handleButtonClick}
            onKeyDown={handleKeyDown}
            onTouchEnd={handleTouchEnd}
            target="_blank"
            rel="noopener noreferrer"
            className={`fa-3x opacity-60 hover:opacity-100 hover:text-[#00d1cd] ${demoIcon} focus:text-[#00d1ceb4] focus:outline-none focus:opacity-100`}
          />
        </div>
      </div>
    </div>
  );
}

export default PortfolioCard;
