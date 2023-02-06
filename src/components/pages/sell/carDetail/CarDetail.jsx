import React, {useState} from 'react';
import {
    selectOption, addDiscription, changeCondition, changeTitle, selectPassanger
} from "../../../../store/actionCreators/actionCreateAddCar";
import InputSelect from "../../../inputComponents/InputSelect/InputSelect";
import InputNumber from "../../../inputComponents/InputNumber/InputNumber";
import RadioButtons from "../../../inputComponents/radioButton/RadioButtons";
import {useSelector} from "react-redux";
import InputText from '../../../inputComponents/InputText/InputText';
import TextArea from '../../../inputComponents/TextArea/TextArea';
import './CarDetail.scss'
import {showHideInputPopUp} from "../../../../store/actionCreators/actionCreatePageElements";

const CarDetail = (props) => {

    const { color, brand, bodyType, year, model } = props
    const value = useSelector((state)=> state.newCar)
    const cars = useSelector(state => state.cars)
    const activeNameButton = () => {
        if (value.isNew===null) return 'All'
        return value.isNew ? 'New':'Used'
    }

    const [models, setModels] = useState([])
    const listModels = (brand) => {
        console.log(cars)
        console.log(brand)
        const modelList = cars.filter(car =>car.brand === brand).map(el=>el.model)
        console.log(modelList)
        setModels(modelList)
    }

    return (
        <div className='change-block carDetail'>
            <h2>Car Details</h2>
            <InputText  title='title'
                        execute={selectOption}
                        value={value.title}
            />
            <InputSelect list={bodyType}
                         gridName='body'
                         title='body type'
                         value = {value.characteristics['general info']['body type']}
                         execute={selectOption}
                         buttonClick={showHideInputPopUp}

            />
            <InputSelect list={brand}
                         title='brand'
                         value = {value.brand}
                         execute={(name, val)=>{listModels(val); selectOption(name,val)}}
                         buttonClick={showHideInputPopUp}

            />
            <InputSelect list={models}
                         title='model'
                         value = {value.model}
                         execute={selectOption}
                         buttonClick={showHideInputPopUp}
            />
            <InputSelect list={year}
                         title='year'
                         value={value.year}
                         execute={selectOption}
                         buttonClick={showHideInputPopUp}

                         
            />
            <InputSelect list={color}
                         title='color'
                         value={value.characteristics['general info'].color}
                         execute={selectOption}
                         buttonClick={showHideInputPopUp}


            />
            <InputNumber gridName='passengers'
                         execute={selectPassanger}
                         value={value['count passenger']}
                         title='Passenger Capacity'/>
            <RadioButtons labelList={['New', 'Used']}
                          individualClass='radio__container'
                          title='conditions'
                          radioCallBack={changeCondition}
                          activeName={activeNameButton()}
            />
            <TextArea title='description'
                      execute={addDiscription}
                      placeholder='Write description about your car'
                      value={value.description}
            />

           

        </div>
    );
};

export default CarDetail;