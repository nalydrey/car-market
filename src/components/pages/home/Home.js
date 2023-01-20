
import Slider from "../../Slider/Slider";
import headerFotos from "../../../datas/fotos";
import HorisontalFindPanel from "./horisontalFindPanel/HorisontalFindPanel";
import RecomendedCars from "./recomendedCars/RecomendedCars";
import CompareSection from "./sectionCompare/CompareSection";



const Home = () => {
    
      return(
        <>
            <Slider data={headerFotos} dots/>
        <div className="container">
            <HorisontalFindPanel/>
            <RecomendedCars/>
            <CompareSection/>
        </div>
        </>


    )
}

export default Home