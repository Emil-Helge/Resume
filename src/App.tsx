import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';

function App() {
  return (
    <div className="flex flex-col items-center bg-slate-800 font-custom text-sm text-gray-200 lg:text-lg ">
      <Header />
      <div className="max-w-screen-xl">
        <About />
        <Education />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
