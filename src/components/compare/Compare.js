import {  useState } from "react"
import FindPanel from "../FindPanel/FindPanel"
import Cards from "../cards/Cards"

const Compare = () => {
  // console.log('render compare');

  const [data, setData] = useState('')
  const [findObj, setObj] = useState({})

  const getData = (data) => {
    setData(data)
  }

  const createFindObj = (inData) => {
    for(const key in inData){
      findObj[key] = inData[key]
      findObj[key].length === 0 &&delete findObj[key]
    }
    setObj({...findObj})
  }



  return (
    <>
      {/* <RadioButtons labelList={['All', 'New', 'Used']} callOutFunction={refresh}/> */}

      <FindPanel data={data.year} dataKey='year' createFindObj={createFindObj}>Year</FindPanel>
      <FindPanel data={data.brand} isSearch dataKey='brand' createFindObj={createFindObj}>Brand</FindPanel>
      <FindPanel data={data.model} >Model</FindPanel>
      <FindPanel data={data.drive} >Transmission</FindPanel>
      <FindPanel data={data.countPassanger} >Passanger</FindPanel>
      <FindPanel data={data.fuel}  dataKey='fuel' createFindObj={createFindObj}>Fuel</FindPanel>
      <Cards findObj={findObj} showFrom={0} showTo={7} isNew getData={getData} class={true?'horisontal': ''} sortBy={'fuel'}/>
    </>
  )
}

export default Compare