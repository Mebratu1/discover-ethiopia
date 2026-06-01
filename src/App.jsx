import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Destinations from './components/Destinations';
import InteractiveMap from './components/InteractiveMap';
import Gallery from './components/Gallery';
import TravelGuide from './components/TravelGuide';
import CTASection from './components/CTASection';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Introduction />
      <Destinations />
      <InteractiveMap />
      <Gallery />
      <TravelGuide />
      <CTASection />
      <Contact />
      <Footer />
    </div>
  );
}
