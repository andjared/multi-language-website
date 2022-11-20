import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    document.body.className = "scroll";
    return () => document.body.classList.remove("scroll");
  }, []);
  return <div className="home"></div>;
};

export default Home;
