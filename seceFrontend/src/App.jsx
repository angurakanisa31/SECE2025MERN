import Home from"./components/FunctionalComponents/Home"
import About from "./components/FunctionalComponents/About"
import  ClassCompEG from "./components/classComponents/ClassCompEG"
import Gallery from "./components/FunctionalComponents/Gallery"
import Contact from "./components/FunctionalComponents/Contact"
<components></components>

function App() {
  return (<section>
    <Home />
    <About/>
    <Gallery image="SECE logo" page="Gallery"/>
    <Contact/>
    <ClassCompEG/>
  </section>)
        
}

export default App;


