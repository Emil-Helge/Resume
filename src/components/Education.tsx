import { useEffect, useState } from "react";

function Education() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
        {showBackToTop && (
          <button
            onClick={handleBackToTop}
            className="fixed xl:bottom-16 xl:right-10 bottom-0 right-0 p-3 opacity-50 hover:opacity-100 hover:text-[#00d1cd] transition duration-500 ease-in-out transform hover:animate-wiggle"
          >
            <i className="fa-solid fa-arrow-up fa-xl"></i>
          </button>
        )}
      </div>
      <hr className="mt-11 mb-11 w-1/3 scroll-animation-hidden border-[#00d1cd]" />
    </>
  );
}

export default Education;
