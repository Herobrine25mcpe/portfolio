import Navbar from "./component/Navbar/Navbar";
import './App.css';
import Intro from "./component/Intro/Intro";
import Services from "./component/Services/Services";
import About from "./component/About/About";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <About/>
      
    </div>
  );
}

export default App;
