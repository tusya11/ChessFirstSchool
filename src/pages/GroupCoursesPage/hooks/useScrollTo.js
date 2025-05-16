import { useCallback } from 'react';

const useScrollTo = () => {
  const scrollTo = useCallback((id, offset = 0) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, []);

  return scrollTo;
};

export default useScrollTo;