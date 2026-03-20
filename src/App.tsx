import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Specs from './components/Specs';
import Delivery from './components/Delivery';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Products />
      <Specs />
      <Delivery />
      <Contact />
      <Footer />
    </div>
  );
}
