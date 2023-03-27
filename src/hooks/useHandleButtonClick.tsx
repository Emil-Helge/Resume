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
        event.preventDefault();
        handleButtonClick(event as any);

        const buttonElement = event.currentTarget as HTMLAnchorElement;
        const url = buttonElement.href;
        const target = buttonElement.target;

        if (url) {
          if (target === '_blank') {
            window.open(url, target);
          } else {
            window.location.href = url;
          }
        }
      }
    },
    [handleButtonClick]
  );

  return { handleButtonClick, handleKeyDown };
};

export default useHandleButtonClick;
