import React from 'react';
import InputSelect from "../../../inputComponents/InputSelect/InputSelect";
import {
    selectOption, changeEngine, changeMilage, changePower,
} from "../../../../store/actionCreators/actionCreateAddCar";
import InputNumber from "../../../inputComponents/InputNumber/InputNumber";
import {useSelector} from "react-redux";
import './EngineDetails.scss'

const EngineDetails = () => {

    const value = useSelector((state)=>state.newCar)

    return (
        <div className='change-block engineDetail'>
            <h2>engine details</h2>
            <InputSelect list={['gasoline', 'diesel','gas','electric','hibrid']}
                         gridName='fuel'
                         title='fuel type'
                         name='fuel'
                         value={value.fuel}
                         execute={selectOption}

            />
            <InputNumber gridName='milage' dimension='km' execute={changeMilage} value={value.characteristics.engineDetails.mileage} title='Mileage'/>
            <InputSelect list={['automat', 'manual', 'robot', 'variator']}
                         title='transmission'
                         value={value.characteristics.engineDetails.transmission}
                         execute={selectOption}

            />
            <InputSelect list={['front-drive', 'back-drive', 'all-drive']}
                         gridName='drive'
                         title='drivetrain'
                         name='drive'
                         value={value.drive}
                         execute={selectOption}

            />
            <InputNumber gridName='engine' dimension='cc' execute={changeEngine} value={value.characteristics.engineDetails.engineCapacity} title='Engine Capacity'/>
            <InputNumber gridName='power' dimension='hp' execute={changePower} value={value.characteristics.engineDetails.power} title='Power'/>

        </div>
    );
};

export default EngineDetails;