import About from "../sections/About";
import Brands from "../sections/Brands";
import Clients from "../sections/Clients";
import Features from "../sections/Features";
import Hero from "../sections/Hero";
import Platform from "../sections/Platform";
import Products from "../sections/Products";
import VisiMisi from "../sections/VisiMisi";
import Merek from "../sections/Merek";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <Platform />
      <About />
      <Features />
      <VisiMisi />
      <Clients />
      <Products />
      <Merek />
      <Brands />
    </>
  );
};

export default LandingPage;
