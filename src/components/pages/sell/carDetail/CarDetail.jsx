import React from 'react';
import {
    addDiscription,
    changeBodyType,
    changeBrand, changeColor, changeCondition,
    changeModel,
    changeTitle, changeYear, selectPassanger
} from "../../../../store/actionCreators/actionCreateAddCar";
import InputSelect from "../../../inputComponents/InputSelect/InputSelect";
import InputNumber from "../../../inputComponents/InputNumber/InputNumber";
import RadioButtons from "../../../inputComponents/radioButton/RadioButtons";
import {useSelector} from "react-redux";
import InputText from '../InputText/InputText';
import './CarDetail.scss'

const CarDetail = () => {

    const value = useSelector((state)=> state.newCar)

    const activeName = () => {
        return value.isNew ? 'New':'Used'
    }

    // onInput={(e)=>changeTitle(e.target.value)

    return (
        <div className='change-block carDetail'>
            <h2>Car Details</h2>
            <InputText execute={changeTitle}/>
            <InputSelect list={['sedan','SUV', 'hatchback', 'universal']}
                         gridName='body'
                         title='body type'
                         name='bodyType'
                         value = {value.characteristics.generalInfo.bodyType}
                         execute={changeBodyType}
            />
            <InputSelect list={['audi', 'vw', 'mercedes', 'toyota', 'ford', 'chevrolet', 'jeep', 'MINI', 'bmw', 'kia']}
                         gridName='brand'
                         title='brand'
                         name='brand'
                         value = {value.brand}
                         execute={changeBrand}
            />
            <InputSelect list={[1,2,3,4]}
                         gridName='model'
                         title='model'
                         name='model'
                         value = {value.model}
                         execute={changeModel}
            />
            <InputSelect gridName='year'
                         from={1980}
                         to={2022}
                         title='year'
                         name='year'
                         value={value.year}
                         execute={changeYear}
            />
            <InputSelect list={['red', 'green', 'blue', 'white', 'black']}
                         gridName='color'
                         title='color'
                         name='color'
                         value={value.characteristics.generalInfo.color}
                         execute={changeColor}

            />
            <InputNumber gridName='passengers'
                         execute={selectPassanger}
                         value={value.countPassanger}
                         title='Passenger Capacity'/>
            <RadioButtons labelList={['New', 'Used']}
                          individualClass='radio__container'
                          title='Сonditions'
                          radioCallBack={changeCondition}
                          activeName={activeName()}
            />

            <div className='description'>
                <textarea name=""
                          id=""
                          cols="30"
                          rows="7"
                          placeholder='Write description about your car'
                          onInput={(e)=>addDiscription(e.target.value)}
                />
                <span>Description</span>
            </div>

        </div>
    );
};

export default CarDetail;