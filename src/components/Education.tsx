function Education() {
  return (
    <>
      <div id="Education" className="flex flex-col text-left pl-5 gap-5">
        <h1 className="text-4xl font-mono font-extrabold mb-2 first-letter:text-[#00d1cd]">
          Education
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
      </div>
      <hr className="mt-11 mb-11 w-1/3 scroll-animation-hidden border-[#00d1cd]" />
    </>
  );
}

export default Education;
