import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Certifications />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
