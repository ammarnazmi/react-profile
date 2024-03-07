import "./App.css";
import ContactMe from "./components/ConctactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/NavBar/Navbar";
import Skills from "./components/Skills/SKills";
import WorkExperience from "./components/WorkExperience/WorkExperience";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <Skills />
        <WorkExperience />
        <ContactMe />
      </div>
      <Footer />
    </>
  );
}

export default App;
