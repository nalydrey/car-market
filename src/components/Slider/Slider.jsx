import React, { Children, useEffect, useMemo, useRef, useState } from 'react'
import './Slider.scss'

const Slider = (props) => {
// console.log('render Slider');
    const { data, start=0, fromEnd=0, repeat=true, timeOut=2000, play=false, dots=false, buttons=false } = props
    const end = data.length - fromEnd-1
    // console.log(props);
    const ref = useRef()
    const prev = useRef()
    const next = useRef()
    const viewport = useRef()

    const [slideNumber, setSlide] = useState(0)
    let style = {
        transform: `translate(0px)`
    }

   


    useEffect(()=>{
        if(play){
            const timer = setTimeout(()=>{
                 slideNumber===end ? setSlide(start) : setSlide(slideNumber+1)
             },timeOut)

             return () => {
                 clearTimeout(timer)
             }
        }
        const firstWidth = parseInt(getComputedStyle(viewport.current, null).width)
        viewport.current.style.height = `${firstWidth*0.4}px`
    

    }, [slideNumber])

    if(viewport.current){
        const a = parseInt(getComputedStyle(viewport.current, null).width)
        ref.current.removeAttribute('style')
        ref.current.style.transform = `translate(${-a*slideNumber}px)`;
        ref.current.style.transition = '1s'       
        ref.current.style.width =`${100*data.length}%`
    }

    const prevSlide = ()=>
    {
        console.log(slideNumber);
        !repeat&&(slideNumber<=start ? setSlide(start) : setSlide(slideNumber-1))
        repeat&&(slideNumber<=start ? setSlide(end) : setSlide(slideNumber-1))
    }
    const nextSlide = ()=>
    {
        console.log(slideNumber, end);
        !repeat&&(slideNumber>=end ?  setSlide(slideNumber) : setSlide(slideNumber+1))
        repeat&&(slideNumber>=end ?  setSlide(start) : setSlide(slideNumber+1))
    }

    window.addEventListener('resize', ()=>{
        const a = parseInt(getComputedStyle(viewport.current, null).width)
        ref.current.style.transform = `translate(${-a*slideNumber}px)`
        ref.current.style.transition = 'none'

        viewport.current.style.height = `${a*0.4}px`
    })

  return (    

        <div className='viewport' ref={viewport}>
            <div className='slider__bar' ref={ref} style={{...style, width: `${100*data.length}%`}}>
                {data.map((elem, i)=> {     
                    return (
                        <div className='bar__item' key={i} style={{backgroundImage: `url(${elem.foto})`}}>
                            <h1>{elem.h1}</h1>
                            <h2>{elem.h2}</h2>
                        </div>

                    )
                })}
            </div>
             {dots &&   <div className='slider__dots'>
                            {data.map(( elem, i)=>{
                            return <button className={`slider__dot ${i===slideNumber && 'slider__dot--active'}`} key={i}  onClick={()=>{setSlide(i)}}></button>
                            })}
                        </div>
            }
            {buttons&&  <>
                            <button className='slider__buttons button__prev' ref={prev} onClick={prevSlide}>prev</button>
                            <button className='slider__buttons button__next' ref={next} onClick={nextSlide}>next</button>
                        </>           
            }
        </div>

  )
}

export default Slider