import About from "../../Component/About/About"
import Pricing from "../../Component/Pricing/Pricing"
import Slider from "../../Component/Sider/Slider"
import Trainer from "../../Component/Trainer/Trainer"


const Home =()=>{
    return (
        <div className="Home">
         <Slider/>
         <About />
         <Trainer />
         <Pricing />  
        </div>
    )
}
export default Home;