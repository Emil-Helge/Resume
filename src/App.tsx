import About from './components/About';
import BackToTopBtn from './components/BackToTopBtn';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';

function App() {
  return (
    <div className="flex flex-col items-center font-custom text-sm text-gray-200 lg:text-lg ">
      <Header />
      <div className="max-w-screen-xl">
        <About />
        <Experience />
        <Skills />
        <Portfolio />
        <Contact />
        <BackToTopBtn />
      </div>
    </div>
  );
}

export default App;
