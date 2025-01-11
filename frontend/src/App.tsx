import AboutUs from "./ui/AboutUs";
import Blog from "./ui/Blog";
import Business from "./ui/Business";
import Hero from "./ui/Hero";
import MemberSmallBanner from "./ui/MemberSmallBanner";
import OurComrades from "./ui/OurComrades";
import Quotes from "./ui/Quotes";
import WhyWeExist from "./ui/WhyWeExist";

function App() {
  return (
    <main>
      <Hero />
      <MemberSmallBanner />
      <AboutUs />
      <WhyWeExist />
      <OurComrades />
      <Business />
      <Quotes />
      <Blog />
    </main>
  );
}

export default App;
