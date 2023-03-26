import { useEffect, useState } from 'react';

function BackToTopBtn() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {showBackToTop && (
        <button
          onClick={handleBackToTop}
          className="fa-solid fa-arrow-up fa-2xl rounded-xl fixed z-50 xl:bottom-16 xl:right-7 bottom-12 right-1 opacity-50 hover:opacity-100 hover:text-[#00d1cd] focus:text-[#00d1ce] focus:outline-none focus:opacity-100 transition duration-500 ease-in-out transform hover:animate-wiggle focus:animate-wiggle"
        />
      )}
    </>
  );
}

export default BackToTopBtn;
