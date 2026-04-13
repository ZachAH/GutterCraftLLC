import { useScrollReveal } from './hooks/useScrollReveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import WhyUs from './components/WhyUs';
import ServiceAreas from './components/ServiceAreas';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <WhyUs />
      <ServiceAreas />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
