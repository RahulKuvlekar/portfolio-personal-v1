import Navbar from "./Components/Navbar";
// import Test from "./Components/test";
import "./app.scss";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Components/Home/Home";
import Parallax from "./Components/Parallax/Parallax";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Cursor from "./Components/Cursor/Cursor";
import Skills from "./Components/Skills/Skills";

const App = () => {
  return (
    <div className="app">
      <Cursor />
      <section id="Home">
        <Sidebar className="sidebar sidebar-outter" />
        <Navbar />
        <Home />
      </section>
      <Parallax type="experience" />
      <Experience />
      <Parallax />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
