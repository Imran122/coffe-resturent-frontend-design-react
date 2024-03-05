import "./App.css";
import Banner from "./components/Banner";
import CoffeMenu from "./components/CoffeMenu";
import VideoComponnet from "./components/VideoComponnet";
import WhyChooseUs from "./components/WhyChooseUs";
import Header from "./components/shared/Header";

function App() {
  return (
    <div className="">
      <div className="border border-b-[#D9D9D9]">
        <Header />
      </div>

      <Banner />
      <VideoComponnet />
      <WhyChooseUs />
      <CoffeMenu />
    </div>
  );
}

export default App;
