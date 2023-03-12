import HrAnimation from "./HrAnimation";

function Skills() {
  const skillsData = [
    { label: "HTML-and-CSS", value: 95 },
    { label: "UX-and-Usability", value: 85 },
    { label: "Javascript", value: 75 },
    { label: "Typescript", value: 71 },
    { label: "React", value: 55 },
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
      <div id="Skills" className="flex flex-col text-right pr-5 gap-5">
        <h1 className="text-4xl font-mono font-extrabold mb-2 first-letter:text-[#00d1cd]">
          Skills
        </h1>
        {skillsData.map(({ label, value }) => (
          <div key={label} className="self-end">
            <div>{label.replace(/-and-/g, " & ")}</div>
            <div className="flex bg-slate-700 border-b-2 border-[#00d1cd] justify-start items-center rounded-xl pl-1 pr-1 h-10 w-60 self-end ">
              <div className={`  h-7 w-0 bg-gray-300 rounded-xl ${label}`} />
              <span className="ml-1 font-extrabold text-sm"></span>
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
      <HrAnimation width="50%" />
    </>
  );
}

export default Skills;
