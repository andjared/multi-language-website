import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import ContactUs from "./Components/ContactUs";
import Services from "./Components/Services";
import firstGalleryimg from "./assets/firstGalleryimg";
import secondGalleryimg from "./assets/secondGalleryimg";
import thirdGalleryimg from "./assets/thirdGalleryimg";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  const [showHiddenNav, setShowHiddenNav] = useState(false);

  const images = { firstGalleryimg, secondGalleryimg, thirdGalleryimg };
  let languageStoredInLocalStorage = localStorage.getItem("language");

  const [language, setLanguage] = useState(
    languageStoredInLocalStorage || "serbian"
  );

  function storeLanguageInLocalStorage(language) {
    localStorage.setItem("language", language);
  }

  const changeLanguage = (language) => {
    setLanguage(language);
    storeLanguageInLocalStorage(language);
  };

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar
          language={language}
          handleChangeLanguage={changeLanguage}
          showHiddenNav={showHiddenNav}
          setShowHiddenNav={setShowHiddenNav}
        />
        <main className={showHiddenNav ? "disabled" : ""}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <AboutUs language={language} />
            </Route>
            <Route exact path="/services">
              <Services language={language} />
            </Route>
            <Route exact path="/gallery">
              <Gallery items={images} language={language} />
            </Route>
            <Route exact path="/contact">
              <ContactUs language={language} />
            </Route>
          </Switch>
        </main>
        <Footer language={language} />
      </Router>
    </div>
  );
}

export default App;
