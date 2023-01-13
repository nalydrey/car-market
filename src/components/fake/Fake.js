import { useEffect, useState } from "react"


const Fake = () => {

    const b=[1,2,3,4,5]

    const [a, setA] = useState(b)

    useEffect(()=>{
        setA(b)
    }, [b])





  return (
    <div>{a}</div>
  )
}

export default Fake