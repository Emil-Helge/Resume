function Skills() {
  return (
    <>
      <div id="Skills" className="flex flex-col text-right pr-5 gap-5">
        <h1 className="text-4xl font-mono font-extrabold mb-2 first-letter:text-[#00d1cd]">
          Skills
        </h1>
        <p className="text-lg">HTML & CSS</p>
        <div className="progress-bar-container flex bg-slate-700 border-t-2 border-[#00d1cd] justify-start items-center rounded-xl pl-1 pr-1 h-10 w-60 self-end">
          <div className="progress-bar h-7 w-0 bg-gray-300 rounded-xl animate-[firstBarWidth_3s_normal_forwards]"></div>
          <span id="max-value-1" className="ml-1 font-extrabold text-sm">
            85
          </span>
        </div>
        <p className="text-lg">UX & Usability</p>
        <div className="progress-bar-container flex bg-slate-700 justify-start items-center rounded-xl pl-1 pr-1 h-10 w-60 self-end">
          <div className="progress-bar h-7 w-0 bg-gray-300 rounded-xl animate-[secondBarWidth_3s_normal_forwards]"></div>
          <span id="max-value-2" className="ml-1 font-extrabold text-sm">
            78
          </span>
        </div>
        <p className="text-lg">Javascript</p>
        <div className="progress-bar-container flex bg-slate-700 border-b-2 border-[#00d1cd] justify-start items-center rounded-xl pl-1 pr-1 h-10 w-60 self-end">
          <div className="progress-bar h-7 w-0 bg-gray-300 rounded-xl animate-[thirdBarWidth_2s_normal_forwards]"></div>
          <span id="max-value-3" className="ml-1 font-extrabold text-sm">
            36
          </span>
        </div>
        <h4 className="text-2xl font-bold">Additional proficiencies include</h4>
        <p className="text-lg">
          Editing images with Gimp
          <br />
          Working with interface design in Figma
        </p>
      </div>
      <hr className="mt-11 mb-11 w-3/6 scroll-animation-hidden border-[#00d1cd]" />
    </>
  );
}

export default Skills;
