import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Brands from './components/Brands';
import Partnership from './components/Partnership';
import SupportedBy from './components/SupportedBy';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Brands />
      <Partnership />
      <SupportedBy />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;