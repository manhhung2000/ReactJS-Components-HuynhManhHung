import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Contents from "./components/Contents";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div>
        <Navbar />
        <Carousel />
        <Contents />
        <Footer />
      </div>
    </div>
  );
}

export default App;
