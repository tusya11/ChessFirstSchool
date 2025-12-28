import { useEffect, useState } from "react";

export const useResponsive = () => {
  const [isXS, setIsXS] = useState(false);
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsXS(width <= 700);
      setIsSmall(width <= 480);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return { isXS, isSmall };
};
