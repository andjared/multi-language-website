import { useState } from "react";

const useToggleScroll = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  const handleScroll = () => {
    setIsDesktop(window.matchMedia("(min-width: 1700px)").matches);

    if (isDesktop) {
      document.body.classList.add("disable-scroll");
    } else {
      document.body.classList.remove("disable-scroll");
    }
  };

  return { handleScroll, isDesktop };
};

export default useToggleScroll;
