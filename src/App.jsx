import "./App.css";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";

function App() {
  return (
    <>
      <div className="font-sans">
        <HeroSection />
        <HowItWorks/>
        <WhyChooseUs/>
      </div>
    </>
  );
}

export default App;
