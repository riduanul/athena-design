import "./App.css";
import Achievements from "./components/Home/Achievements/Achievements";
import ContactUs from "./components/Home/ContactUs/ContactUs";
import Footer from "./components/Home/Footer/Footer";

import Header from "./components/Home/Header/Header";
import Project from "./components/Home/Project/Project";
import Services from "./components/Home/Services/Services";
import Packages from "./components/Packages/Packages";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init();
  return (
    <div className="App">
      <Header></Header>

      <div data-aos="fade-up" data-aos-offset="500" data-aos-duration="500">
        <Services />
      </div>

      <div data-aos="fade-up" data-aos-offset="500" data-aos-duration="500">
        <Project></Project>
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500"
      >
        <Achievements />
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor="#example-anchor"
        data-aos-offset="900"
        data-aos-duration="500"
      >
        <Packages />
      </div>

      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
}

export default App;
