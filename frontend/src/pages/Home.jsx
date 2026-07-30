import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/layout/HeroSection";
import AboutSection from "../components/common/AboutSection";
import Footer from "../components/common/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Footer />
    </>
  );
}

export default Home;