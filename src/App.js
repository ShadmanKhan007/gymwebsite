import About from "./Component/About/About";
import Footer from "./Component/Footer/Footer";
import LogIn from "./Component/LogIn/LogIn";
import Navbar from "./Component/Navbar/Navbar";
import Pricing from "./Component/Pricing/Pricing";
import Singin from "./Component/SingIn/Singin";
import Trainer from "./Component/Trainer/Trainer";
import Home from "./pages/Home/home";
import {Routes , Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/Singin" element={<Singin />} /> 
        <Route path="/About" element={<About />} />    
        <Route path="/Trainer" element={<Trainer />} />    
        <Route path="/Pricing" element={<Pricing />} />       
      </Routes>
      <Footer />
    
    
    </div>
  );
}

export default App;
