
import Slider from "../../Slider/Slider";
import headerFotos from "../../../datas/fotos";
import HorisontalFindPanel from "./horisontalFindPanel/HorisontalFindPanel";
import RecomendedCars from "./recomendedCars/RecomendedCars";


const Home = () => {
    
      return(
        <>
            <Slider data={headerFotos} dots/>
        <div className="container">
            <HorisontalFindPanel/>
            <RecomendedCars/>
           
          
          
        </div>
        </>


    )
}

export default Home