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

function App() {
  let languageStoredInLocalStorage = localStorage.getItem("language");
  const [language, setLanguage] = useState(
    languageStoredInLocalStorage || "serbian"
  );
  const changeLanguage = (language) => {
    setLanguage(language);
    storeLanguageInLocalStorage(language);
    console.log(languageStoredInLocalStorage);
  };
  const images = { firstGalleryimg, secondGalleryimg, thirdGalleryimg };

  return (
    <Router>
      <div className="App">
        <Navbar language={language} handleChangeLanguage={changeLanguage} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <AboutUs language={language} />
          </Route>
          <Route path="/usluge">
            <Services language={language} />
          </Route>
          <Route exact path="/galery">
            <Gallery language={language} items={images} />
          </Route>
          <Route path="/contact">
            <ContactUs language={language} />
          </Route>
        </Switch>
        <Footer language={language} />
      </div>
    </Router>
  );
}

function storeLanguageInLocalStorage(language) {
  localStorage.setItem("language", language);
}

export default App;
