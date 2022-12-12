import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => (document.body.style.overflowY = "");
  }, []);

  return <section className="home"></section>;
};

export default Home;
