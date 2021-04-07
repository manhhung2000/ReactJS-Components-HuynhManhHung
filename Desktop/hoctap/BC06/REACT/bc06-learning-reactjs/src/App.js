import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Smartphone from "./components/Smartphone";
import Promotion from './components/Promotion';

function App() {
  return (
    <div>
      <div>
        <Header />
        <Carousel />
        <Smartphone />
        <Promotion />
      </div>
    </div>
  );
}

export default App;
