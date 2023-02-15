import FindPanel from "../FindPanel/FindPanel"
import RadioButtons from '../inputComponents/radioButton/RadioButtons'
import RangeSlider from "../inputComponents/RangeSlider/RangeSlider"
import {changeNewOrUsed, resetAllFilters} from "../../store/actionCreators/actionCreate";
import {useSelector} from "react-redux";
import './LeftFindPanel.scss'
import Button from "../UI elements/Button/Button";


const LeftFindPanel = (props) => {
  // console.log('render LeftFindPanel');

  const { radio=false } = props

    const allCars = useSelector((state)=>state.cars)
    const findObj = useSelector((state)=>state.findObj)
    const newOrUsed = useSelector((state)=>state.findObj.isNew[0])
    const data = useSelector((state)=>state.pageElements.collectObj)
    // let data = []
    const activateRadioName = (data) => {
    if(data===undefined)
        return 'All'
    if(data)
        return 'New'
    if(!data)
        return 'Used'
}

  
  const filterByBrand = findObj.brand ? allCars.filter((car)=>{
      return findObj.brand.some(el => {
        return el === car.brand
      })
  }) : []

  const models = filterByBrand.map((car) => {return car.model} )
  return (
    <div className="filters">
        <h4>Filters</h4>  
        <div className="find">
            <input  type="text" placeholder="Search" />
        </div>
        {radio&&
        <div className="filters__radio">
            <h5>Conditions</h5>
            <RadioButtons buttonType='radio__button' labelList={['All', 'New', 'Used']} individualClass='radio__container' radioCallBack={changeNewOrUsed} activeName={activateRadioName(newOrUsed)}/>
        </div>}
        <FindPanel data={data.year} dataKey='year' sort sortDescending>Year</FindPanel>
        <FindPanel data={data.brand} isSearch dataKey='brand' open>Brand</FindPanel>
        <FindPanel data={models} dataKey='model'>Model</FindPanel>
        <FindPanel data={data.drive} dataKey='drive'>Transmission</FindPanel>
        <FindPanel data={data['count passenger']} dataKey='countPassanger'>Passanger</FindPanel>
        <FindPanel data={data['fuel type']}  dataKey='fuel' >Fuel</FindPanel>
        <div className="chosePrise">
          <RangeSlider/>
        </div>
        <Button onClick={resetAllFilters} text={'Reset Filters'}/>
    </div>
  )
}

export default LeftFindPanel