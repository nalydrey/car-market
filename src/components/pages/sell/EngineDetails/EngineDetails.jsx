import React from 'react';
import InputSelect from "../../../inputComponents/InputSelect/InputSelect";
import {
    selectOption, changeEngine, changeMilage, changePower,
} from "../../../../store/actionCreators/actionCreateAddCar";
import InputNumber from "../../../inputComponents/InputNumber/InputNumber";
import {useSelector} from "react-redux";
import './EngineDetails.scss'
import {showHideInputPopUp} from "../../../../store/actionCreators/actionCreatePageElements";

const EngineDetails = (props) => {

    const value = useSelector((state)=>state.newCar)
    const {transmission, fuel, drive} = props

    return (
        <div className='change-block engineDetail'>
            <h2>engine details</h2>
            <InputSelect list={fuel}
                         gridName='fuel'
                         title='fuel type'
                         name='fuel'
                         value={value.fuel}
                         execute={selectOption}
                         buttonClick={showHideInputPopUp}

            />
            <InputNumber gridName='milage'
                         max={1000000}
                         dimension='km'
                         title='Mileage'
                         execute={changeMilage}
                         value={value.characteristics['engine details'].mileage}
            />
            <InputSelect list={transmission}
                         title='transmission'
                         value={value.characteristics['engine details'].transmission}
                         execute={selectOption}
                         buttonClick={showHideInputPopUp}

            />
            <InputSelect list={drive}
                         gridName='drive'
                         title='drivetrain'
                         name='drive'
                         value={value.drive}
                         execute={selectOption}
                         buttonClick={showHideInputPopUp}
            />
            <InputNumber gridName='engine'
                         dimension='cc'
                         title='Engine Capacity'
                         execute={changeEngine}
                         value={value.characteristics['engine details']['engine capacity']}
            />
            <InputNumber gridName='power'
                         dimension='hp'
                         title='Power'
                         execute={changePower}
                         value={value.characteristics['engine details'].power}
             />

        </div>
    );
};

export default EngineDetails;