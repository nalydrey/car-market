import { useState } from "react"
import Cards from "../../cards/Cards"

const UsedCars = () => {
  const[number, setNumber] = useState(0)
   
  const lookFor = (a) => {setNumber(a)}
  
  return(
      <>
          
          <h1>Used cars</h1>
          <div className="cars__box">
              <h2>Найдено {number} </h2>
              {/* <Cards isNew={false} findQtyCar={lookFor}/> */}
          </div>
      </>    
  )
}

export default UsedCars