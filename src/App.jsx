import { BrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import Skills from './Components/Skills';
import About from './Components/About';
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import BackToTopButton from "./Components/BackToTopButton";


function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
      <BackToTopButton/>
        {/* <Routes>
          <Route exact path="/" Component={Home}/>
          <Route exact path="/about" Component={About}/>
          <Route exact path="/skills" Component={Skills}/>
          <Route exact path="/projects" Component={Projects}/>
          <Route exact path="/contact" Component={Contact}/>
          <Route exact path="/*" Component={Home}/>
        </Routes> */}
      </BrowserRouter>
    </>
  )
}

export default App
