import Hero from "./components/hero/Hero";
import Premium from "./components/Premium";
import Underhero from "./components/Underhero";
import { SectionCard } from "./components/cards/SectionCard";
import Communication from "./components/communication/Communication";
function App() {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      {/* END Hero Section */}
      {/* Premium Features */}
      <Premium />
      {/* END Premium Features */}
      {/* Express Functionality section */}
      <Underhero />
      {/* END Express Functionality section */}
      {/* Cards */}
      <SectionCard />
      {/* END Cards */}
      {/* Communication */}
      <Communication />
      {/* END Communication */}
    </>
  );
}

export default App;
