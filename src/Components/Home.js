import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    document.body.className = "scroll";
    return () => document.body.classList.remove("scroll");
  }, []);
  return <section className="home"></section>;
};

export default Home;
