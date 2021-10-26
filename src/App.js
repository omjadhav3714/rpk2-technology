import './App.css';
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Slider from "./Components/Slider";
import Footer from "./Components/Footer";
import Login from './Components/Login';
import Signup from './Components/Signup';
import Features from './Components/Features';

function App() {
  return (<div>
  {/* <Login /> */}
  <Navbar />
  <Hero />
  <Slider />
  <Features />
  <Footer />
  </div>
  );
}

export default App;
