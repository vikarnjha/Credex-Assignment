import "./App.css";
import ChatWidget from "./components/ChatWidget";
import ContactForm from "./components/ContactForm";
import DarkModeToggle from "./components/DarkModeToggle";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";

function App() {
  return (
    <>
      <div className="font-sans">
        <DarkModeToggle/>
        <HeroSection />
        <HowItWorks/>
        <WhyChooseUs/>
        <Testimonials/>
        <ContactForm/>
        <ChatWidget/>
      </div>
    </>
  );
}

export default App;
