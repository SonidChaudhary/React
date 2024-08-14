import React, { useEffect, useState } from 'react'

const Four = () => {

    const [count,setCount]=useState(0);

   
    useEffect(()=>{
        console.log("use effect without dependency : Runs for every renders ")
    })

    useEffect(()=>{
        console.log("useEffect with empty dependency: run only one time after initial renders ")
    },[])

    useEffect(()=>{
        console.log("useEffect with state,prop change in array dependency whenever state and props change it runs")
    },[count])


    useEffect(()=>{
        return ()=>{
            console.log("cleanup function and it runs when we want to unmount aur component   ")
        }
    })


//understanding unmounting 
  useEffect(()=>{
    console.log("count updated ",count)
    return ()=>{
        console.log("counter unmounted",count) //first this cleanup function will run then this use effect it first clear the previous value or unmount the component 
                                               //the only this use effect new value gets updated or mounted again 
                                               // so it is also known as cleanup function 
    }

    
  },[count])
  return (
    <>
    {console.log("initial render")}
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>Increee</button>
    </>
  )
}

export default Four;