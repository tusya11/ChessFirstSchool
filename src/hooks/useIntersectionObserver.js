import { useState, useEffect } from "react";

const useIntersectionObserver = (elementId, options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = document.getElementById(elementId);
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        root: options.root || null,
        rootMargin: options.rootMargin || "0px",
        threshold: options.threshold || 0,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [elementId, options.root, options.rootMargin, options.threshold]);

  return isIntersecting;
};

export default useIntersectionObserver;
