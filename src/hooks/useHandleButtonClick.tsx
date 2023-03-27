import { useCallback } from 'react';

const useHandleButtonClick = (
  scrollToId?: boolean,
  onMenuClose?: () => void
) => {
  const handleButtonClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
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

      if (onMenuClose) {
        onMenuClose();
      }
    },
    [scrollToId, onMenuClose]
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLAnchorElement | HTMLButtonElement>) => {
      if (event.key === 'Enter' || event.key === ' ') {
        handleButtonClick(event as any);
      }
    },
    [handleButtonClick]
  );

  const handleTouchEnd = useCallback(
    (event: React.TouchEvent<HTMLAnchorElement | HTMLButtonElement>) => {
      const buttonElement = event.currentTarget as
        | HTMLAnchorElement
        | HTMLButtonElement;
      buttonElement.blur();
    },
    []
  );

  return { handleButtonClick, handleKeyDown, handleTouchEnd };
};

export default useHandleButtonClick;
