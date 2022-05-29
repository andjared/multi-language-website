import { useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";

const ScrollToTop = () => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
    console.log("scroll");
  }, [location?.pathname]);

  return null;
};

export default ScrollToTop;
