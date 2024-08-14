import React, { useEffect, useState } from 'react'


const One = () => {

//!UseEffect without any dependencies
    useEffect(()=>{
        <h1>Use effect</h1>
        console.log("useffect runed")
    })

//it executes in each and every renders state change inside useffect without having dependencies leads to infinite renders 
    
    const [count, setCount]=useState(0);
  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>INCRE </button>
    {console.log("state update")}
    
    </>
  )
}

export default One