import './App.css';
import Contact from './sections/Contact/Contact';
import Education from './sections/Education/Education';
import Header from './sections/Header/Header';
// import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';

function App() {
  return (
    <>
      <Header/>
      <Hero />
      <Skills />
      <Projects />
      <Education/>
      <Contact />
      {/* <Footer /> */}
    </>
  );
}

export default App;
