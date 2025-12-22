import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Invitation from "../components/Invitation";
import About from "../components/About";
import Events from "../components/Events";
import Countdown from "../components/Countdown";
import Gallery from "../components/Gallery";
import Location from "../components/Location";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Invitation />
      <About />
      <Events />
      <Countdown />
      <Gallery />
      <Location />
      <Footer />
    </>
  );
}
