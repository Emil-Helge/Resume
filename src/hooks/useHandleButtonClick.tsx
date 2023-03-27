import { useCallback } from 'react';

const useHandleButtonClick = (scrollToId?: boolean) => {
  const handleButtonClick = useCallback(
    (
      event:
        | React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
        | React.KeyboardEvent<HTMLAnchorElement | HTMLButtonElement>
    ) => {
      const buttonElement = event.currentTarget as
        | HTMLAnchorElement
        | HTMLButtonElement;

      if (scrollToId) {
        event.preventDefault();
        const targetId = buttonElement.dataset.target as string;
        const targetElement = document.getElementById(targetId) as HTMLElement;

        const ulElement = document.querySelector('ul') as HTMLElement;
        const scrollPosition = targetElement.offsetTop - ulElement.offsetHeight;

        window.scrollTo({
          behavior: 'smooth',
          top: scrollPosition,
        });
      }

      buttonElement.blur();
    },
    [scrollToId]
  );

  return handleButtonClick;
};

export default useHandleButtonClick;
