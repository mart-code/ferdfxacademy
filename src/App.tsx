import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Mentor from "./components/Mentor";
import Resources from "./components/Resources";
import Community from "./components/Community";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// import ForexRiskCalculator from "./components/RiskCalculator";

function App() {
  return (
    <>
      <div className="max-w-[1500px] relative overflow-x-hidden mx-auto">
        <Navbar />
        <Hero />
        <Benefits />
        <Testimonials />
        <Mentor />
        <Community />
        <Resources />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
