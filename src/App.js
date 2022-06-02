import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
import { LanguageProvider } from "./Components/LanguageContext";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  const images = { firstGalleryimg, secondGalleryimg, thirdGalleryimg };
  return (
    <LanguageProvider>
      <div className="App">
        <Router>
          <ScrollToTop />
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <AboutUs />
            </Route>
            <Route exact path="/services">
              <Services />
            </Route>
            <Route exact path="/gallery">
              <Gallery items={images} />
            </Route>
            <Route exact path="/contact">
              <ContactUs />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    </LanguageProvider>
  );
}

export default App;
