import { debounce } from "@mui/material";
import { useEffect, useState } from "react";

export const useScrollPosition = () => {
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(
    () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPosition > currentScrollPos;

      setPrevScrollPosition(currentScrollPos);
      setVisible(visible);
    },
    [prevScrollPosition],
    0
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPosition, visible, handleScroll]);

  return { prevScrollPosition, visible };
};
