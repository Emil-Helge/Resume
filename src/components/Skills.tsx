function Skills() {
  const skillsData = [
    { label: "HTML-and-CSS", value: 85 },
    { label: "UX-and-Usability", value: 78 },
    { label: "Javascript", value: 75 },
    { label: "Typescript", value: 71 },
    { label: "React", value: 51 },
  ];

  return (
    <>
      <style>
        {skillsData.map(
          (skill) => `
          .${skill.label} {
            animation: ${skill.label} 2.5s ease-in-out forwards;
          }
          @keyframes ${skill.label} {
            from { width: 0%; }
            to { width: ${skill.value}% }
          }
        `
        )}
      </style>
      <div id="Skills" className="flex flex-col text-right pr-5 gap-5">
        <h1 className="text-4xl font-mono font-extrabold mb-2 first-letter:text-[#00d1cd]">
          Skills
        </h1>
        {skillsData.map(({ label, value }) => (
          <div key={label} className="self-end">
            <div>{label.replace(/-and-/g, " & ")}</div>
            <div className="flex bg-slate-700 border-b-2 border-[#00d1cd] justify-start items-center rounded-xl pl-1 pr-1 h-10 w-60 self-end ">
              <div className={`  h-7 w-0 bg-gray-300 rounded-xl ${label}`} />
              <span className="ml-1 font-extrabold text-sm">{value}</span>
            </div>
          </div>
        ))}
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
