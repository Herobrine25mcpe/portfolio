import Navbar from "./component/Navbar/Navbar";
import './App.css';
import Intro from "./component/Intro/Intro";
import Services from "./component/Services/Services";
import About from "./component/About/About";
import Portfolio from "./component/Portfolio/Portfolio";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
import Experience from "./component/Experience/Experience";

function App() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar/>
      <Intro/>
      <Services/>
      <About/>
      <Experience/>
      <Portfolio/>
      <Contact/>
      <Footer/>

      
    </div>
  );
}

export default App;
