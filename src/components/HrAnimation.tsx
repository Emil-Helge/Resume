import { useEffect, useRef } from 'react';

interface HrAnimationProps {
  width: string;
}

function HrAnimation({ width }: HrAnimationProps) {
  const hrRef = useRef<HTMLHRElement>(null);

  useEffect(() => {
    const hrElement = hrRef.current;
    if (!hrElement) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          hrElement.style.width = width;
          hrElement.style.transition = `width 4s`;

          observer.unobserve(hrElement);
        }
      });
    });
    observer.observe(hrElement);
  }, [width]);

  return (
    <hr
      ref={hrRef}
      className={`mt-11 mb-11 xl:w-full h-[0.1rem] bg-gradient-to-r from-transparent via-[#00d1cd]  border-none`}
      style={{ width: '0%' }}
    />
  );
}

export default HrAnimation;
