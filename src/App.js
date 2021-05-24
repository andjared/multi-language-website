
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Footer from "./Components/Footer";
import Gallery from './Components/Gallery';
import ContactUs from './Components/ContactUs';
import Usluge from './Components/Usluge';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            < Home />
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/usluge">
            <Usluge />
          </Route>
          <Route exact path="/galery">
            <Gallery />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
        <Footer />
      </div >
    </Router>
  );
}

export default App;
