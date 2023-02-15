import { ReactComponent as AddCar } from '../../../assets/icons/add-car.svg'
import Card from "../../Templates/card/Card"
import { Link } from "react-router-dom"
import './Compare.scss'
import InfoAccordion, {InfoImages} from "../../infoAccordion/InfoAccordion"
import React from "react"
import {useSelector} from "react-redux";

const Compare = (props) => {
  // console.log('render compare');

  const {} = props

    const allCars = useSelector((state)=>state.cars)

  const comparedCar = allCars.filter((car) => car.compared)
  const c = comparedCar.length
  comparedCar.length = 3
  comparedCar.fill(undefined, c)  
  comparedCar.sort((a,b)=> a < b ? 1 : -1)

  const keyObj = []
  if(comparedCar[0]){
    for(const key in comparedCar[0].characteristics){
      keyObj.push(key)
    }
  }

  return (
    <div className="larger__container">
      <h1>Compare</h1>
      <div className="compared">
        {comparedCar.map((el,i)=>{
          return <React.Fragment key={i}>
                    {el ? 
                      <Card {...el}/>
                      :
                      <div className="compare__box">
                          <AddCar/>
                          <p><Link to={'../search_result'}>Add car to compare</Link></p>
                      </div>}
                    
                  </React.Fragment>
          })}
      </div>
          {keyObj.map((key)=>{
           return <InfoAccordion data={comparedCar} objName={key} key={key}/>
          })}
            <InfoImages data={comparedCar}/>
      </div>

  )
}

export default Compare