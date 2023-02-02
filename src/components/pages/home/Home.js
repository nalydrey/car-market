
import Slider from "../../Slider/Slider";
import headerFotos from "../../../datas/fotos";
import HorisontalFindPanel from "./horisontalFindPanel/HorisontalFindPanel";
import RecomendedCars from "./recomendedCars/RecomendedCars";
import CompareSection from "./sectionCompare/CompareSection";
import Carusel from "../../Carusel";
import Tiker from "../../tiker/Tiker";
import './Home.scss'






const Home = () => {
    
      return(
        <>
                <Slider data={headerFotos} dots/>
            <div className="container">
                <HorisontalFindPanel/>
                <RecomendedCars/>
                <CompareSection/>
                <Carusel/>
                <Tiker/>
            </div>
        </>


    )
}

export default Home