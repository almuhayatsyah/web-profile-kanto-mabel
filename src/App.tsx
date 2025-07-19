import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./hooks/ScrollToTop";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <ScrollToTop />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/kontak" element={<ContactPage />} />
          <Route path="/tentang" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
