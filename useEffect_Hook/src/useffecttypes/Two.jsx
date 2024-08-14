import React, { useEffect, useState } from 'react'


const One = () => {
    useEffect(()=>{
        <h1>Use effect</h1>
        console.log("useffect runed")
    },[]) 
//runs only one time when after initial rendering state chnage also then it will not render . 
//similar to component Didmount

    
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