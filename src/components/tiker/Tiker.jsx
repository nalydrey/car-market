import React, {useEffect, useRef, useState} from 'react';
import brandLable from "../../datas/brandLable";
import './Tiker.scss'

const Tiker = () => {
    let width = 0

    const box = useRef()

    const [size, setSize] = useState(0)
    useEffect(()=>{
       width =parseInt(getComputedStyle(box.current, null).width)/brandLable.length
       setSize(width)
    }, [size])



    return (
        <div className='tiker'>
            <div className='wrap'>
                <ul className='tiker__container tiker__container--prev' ref={box}>
                    {brandLable.map((lable, ind)=>{
                        return <li className='rect' style={{width: `${size}px`}} key={ind}>
                            <img src={lable} alt=""/>
                        </li>
                    })}
                </ul>

                <ul className='tiker__container tiker__container--next'>
                    {brandLable.map((lable, ind)=>{
                        return <li className='rect' style={{width: `${size}px`}} key={ind}>
                            <img src={lable} alt=""/>
                        </li>
                    })}
                </ul>
            </div>
        </div>

    );
};

export default Tiker;