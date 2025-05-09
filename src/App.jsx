import "./App.css";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";

function App() {
  return (
    <>
      <div className="font-sans">
        <HeroSection />
        <HowItWorks/>
      </div>
    </>
  );
}

export default App;
