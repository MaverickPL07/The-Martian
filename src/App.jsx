import './index.css';
import Navbar from './components/Navbar'
import FrameCircles from './components/FrameCircles';
import Frame from './components/Frame';
import Hero from './components/Hero'
import Background from './components/Background'
import Footer from './components/Footer'

function App() {
  return (
    <div className="">
      <Background />
      <div id="watney" style={{filter: "drop-shadow(0 0 100px #FF6B00)"}} className="absolute z-2 w-[100vw] bottom-0 h-[100vh] bg-left bg-no-repeat bg-contain opacity-[.7]"></div>

      <FrameCircles />
      <Navbar />
      <Frame />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
