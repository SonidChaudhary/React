import React from 'react'
import { useCount } from '../context/Count_context_API'

const Child1 = () => {
    const {count,setCount}=useCount()

    function incre(){
        setCount(count+1);
    }
  return (
    <>
    <h1>{count}</h1>
    <button onClick={incre}>+</button>

    </>
  )
}

export default Child1