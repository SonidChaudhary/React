import React from 'react'
import { useCount } from '../context/Count_context_API'

const Child2 = () => {
    const {count,setCount}=useCount()
    function decre(){
        setCount(count-1)
    }
  return (
    <>
    <h1>{count}</h1>
    <button onClick={decre}>-</button>
    </>
  )
}

export default Child2