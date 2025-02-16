import About from "./components/About"
import Clients from "./components/Clients"
import Contact from "./components/Contact"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Works from "./components/Works"

const App = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <Clients/>
        <Works/>
        <About/>
        <Contact/>
    </div>
  )
}

export default App
