import React from 'react';
import InputNumber from "../../../inputComponents/InputNumber/InputNumber";
import {useSelector} from "react-redux";
import './Dimension.scss'
import {changeWidth, changeLength, changeCargo, changeHeight} from "../../../../store/actionCreators/actionCreateAddCar";

const Dimension = () => {

    const value = useSelector((state)=> state.newCar)

    return (
        <div className='change-block dimension-box'>
            <h2>Dimension</h2>
            {/*<div className='dimension__box'>*/}
                <InputNumber gridName='length'
                                dimension='mm'
                             execute={changeLength}
                             value={value.characteristics.dimension.length}
                             title='length'
                />
                <InputNumber gridName='width'
                                dimension='mm'
                             execute={changeWidth}
                             value={value.characteristics.dimension.width}
                             title='width'
                />
                <InputNumber gridName='height'
                                dimension='mm'
                             execute={changeHeight}
                             value={value.characteristics.dimension.height}
                             title='height'
                />
                <InputNumber gridName='cargo'
                                dimension='L'
                             execute={changeCargo}
                             value={value.characteristics.dimension.cargoVolume}
                             title='Cargo Volume'
                />
            {/*</div>*/}

        </div>

    );
};

export default Dimension;