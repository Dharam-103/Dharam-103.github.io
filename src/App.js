
import './App.css';
import About from './Components/About';
import ButtonTop from './Components/ButtonTop';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Github from './Components/Github';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Tool from './Components/Tool';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Tool/>
        <Github/>
        <Contact/>
        <Footer/>
        <ButtonTop/>
    </div>
  );
}

export default App;
