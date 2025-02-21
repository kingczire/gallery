import About from "../components/About";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Hero from "../components/Hero";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Gallery />
      <About />
      <Footer />
    </div>
  );
};

export default LandingPage;
