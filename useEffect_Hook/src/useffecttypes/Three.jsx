import React, { useEffect, useState } from 'react'

const Three = () => {

 

    const [count1,setCount1]=useState(0);

    const [count2,setCount2]=useState(0)

    useEffect(()=>{
        <h1>Toh kaise ho app log</h1>
        console.log("Useffect runed")
    },[count1])

    // here the useeffect loads after initial renders  
    //but since count1 state is the given dependency for useEffect so if state of count1 chnages it loads again
    // state of count2 changes then it wont load agaiin after the initial rendering because it value is dependent on state change of count1
    // it is same as component Didupdate method
    
  return (
    <>
      <h1>{count1}</h1>
      <h2>{count2}</h2>
      <button onClick={()=>setCount2(count2-1)}>deree</button>
      <button onClick={()=>setCount1(count1+1)}>Incree</button>
      {console.log("state changed")}
    </>
  )
}

export default Three