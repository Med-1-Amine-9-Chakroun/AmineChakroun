import { ThemeProvider } from "./components/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Expirience from "./components/Expirience";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Expirience />

        <Projects />

        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;