import React, { useEffect, useRef, useState } from 'react'
import './Slider.scss'

const Slider = (props) => {
// console.log('render Slider');
    const { children=[],
        start=0,
        fromEnd=0,
        repeat=true,
        timeOut=7000,
        play=false,
        dots=false,
        buttons=false,
        preview=false,
        proportion=0.5,
        prevInner=null,
        nextInner=null,
        } = props
    const end = children.length - fromEnd-1
    // console.log(props);
    const ref = useRef()
    const prev = useRef()
    const next = useRef()
    const viewport = useRef()

    const [slideNumber, setSlide] = useState(0)
    let style = {
        transform: `translate(0px)`,
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
    }, [slideNumber])

    useEffect(()=>{
        const firstWidth = parseInt(getComputedStyle(viewport.current, null).width)
        viewport.current.style.height = `${firstWidth*proportion}px`
        // ref.current.style.transition = '0s'

        window.addEventListener('resize', resize)
        return () => {
            window.removeEventListener('resize', resize)
        }
    },[slideNumber])

    if(viewport.current){

        const a = parseInt(getComputedStyle(viewport.current, null).width)
        ref.current.removeAttribute('style')
        ref.current.style.transform = `translate(${-a*slideNumber}px)`;
        ref.current.style.transition = '1s'       
        ref.current.style.width =`${100*children.length}%`
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

    const resize = () => {
        const firstWidth = parseInt(getComputedStyle(viewport.current, null).width)
        viewport.current.style.height = `${firstWidth*proportion}px`
        console.log(slideNumber)
        const a = parseInt(getComputedStyle(viewport.current, null).width)
        ref.current.style.transform = `translate(${-a*slideNumber}px)`
        ref.current.style.transition = '0s'
        viewport.current.style.height = `${a*proportion}px`
    }



  return  (
      <>
        <div className='viewport' ref={viewport} >

            <div className='slider__bar' ref={ref} style={{...style, width: `${100*children.length}%`}}>
                {children.map((child)=>{return child})}
            </div>

             {(children.length>1 && dots) &&
                        <div className='slider__dots'>
                            {children.map(( elem, i)=>{
                            return <button className={`slider__dot ${i===slideNumber && 'slider__dot--active'}`} key={i}  onClick={()=>{setSlide(i)}}></button>
                            })}
                        </div>
            }
            {(children.length>1 && buttons) &&
                        <>
                            <button className='slider__buttons button__prev' ref={prev} onClick={prevSlide}>{prevInner}</button>
                            <button className='slider__buttons button__next' ref={next} onClick={nextSlide}>{nextInner}</button>
                        </>
            }

        </div>
          {(children.length>1 && preview) &&
                      <div className="preview">
                        {children.map((child, ind)=>{return <div className={`preview__item ${ind===slideNumber ? 'preview__item--active':''}`}
                                                                 key={ind}
                                                                 onClick={()=>{setSlide(ind)}}>{child}</div>})}
                      </div>}
      </>
  )
}

export default Slider