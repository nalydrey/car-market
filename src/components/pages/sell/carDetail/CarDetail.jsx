import React from 'react';
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

const CarDetail = () => {
console.log('!!!');
    const value = useSelector((state)=> state.newCar)

    const activeName = () => {
        if (value.isNew===null) return 'All'
        return value.isNew ? 'New':'Used'
    }

    return (
        <div className='change-block carDetail'>
            <h2>Car Details</h2>
            <InputText  title='title'
                        execute={selectOption}
                        value={value.title}
            />
            <InputSelect list={['sedan','SUV', 'hatchback', 'universal']}
                         gridName='body'
                         title='body type'
                         value = {value.characteristics.generalInfo.bodyType}
                         execute={selectOption}
            />
            <InputSelect list={['audi', 'vw', 'mercedes', 'toyota', 'ford', 'chevrolet', 'jeep', 'MINI', 'bmw', 'kia']}
                         title='brand'
                         value = {value.brand}
                         execute={selectOption}
            />
            <InputSelect list={[1,2,3,4]}
                         title='model'
                         value = {value.model}
                         execute={selectOption}
            />
            <InputSelect from={1980}
                         to={2022}
                         title='year'
                         value={value.year}
                         execute={selectOption}
                         
            />
            <InputSelect list={['red', 'green', 'blue', 'white', 'black']}
                         title='color'
                         value={value.characteristics.generalInfo.color}
                         execute={selectOption}

            />
            <InputNumber gridName='passengers'
                         execute={selectPassanger}
                         value={value.countPassanger}
                         title='Passenger Capacity'/>
            <RadioButtons labelList={['New', 'Used']}
                          individualClass='radio__container'
                          title='conditions'
                          radioCallBack={changeCondition}
                          activeName={activeName()}
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