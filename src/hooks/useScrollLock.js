import { useEffect } from 'react';

export const useScrollLock = (movie) => {
  useEffect(() => {
    // Locks the screen when menu isOpen
    if (movie) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [movie]);
};
