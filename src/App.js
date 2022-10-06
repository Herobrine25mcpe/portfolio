import Navbar from "./component/Navbar/Navbar";
import './App.css';
import Intro from "./component/Intro/Intro";
import Services from "./component/Services/Services";
import About from "./component/About/About";
import Portfolio from "./component/Portfolio/Portfolio";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <About/>
      <Portfolio/>
      
    </div>
  );
}

export default App;
