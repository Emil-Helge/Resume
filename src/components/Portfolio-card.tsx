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
  return (
    <div className="rounded-lg max-w-xs flex flex-col gap-3 text-center">
      <img src={imageSrc} alt={altText} className="rounded-lg h-28" />
      <div className="bg-slate-900 min-h-[23rem] flex flex-col place-content-between">
        <p className=" px-3 mt-3">{firstDescription}</p>
        <p className=" px-3">{secondDescription}</p>
        <div className="flex place-content-between p-3">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fa-brands fa-square-github fa-3x opacity-60 hover:opacity-100 hover:text-[#00d1cd]"
          />
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`fa-3x opacity-60 hover:opacity-100 hover:text-[#00d1cd] ${demoIcon}`}
          />
        </div>
      </div>
    </div>
  );
}

export default PortfolioCard;
