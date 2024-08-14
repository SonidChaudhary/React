import React, { useState } from 'react'
// import One from './useffecttypes/One'
// import Three from './useffecttypes/Three'
import Four from './useffecttypes/four'

const App = () => {
  const [state, setState]=useState(true);
  return (
    <>
    <h1>Use EFfect</h1>
    {/* <One/> */}
    {/* <Three/> */}
    {/* <Four/> */}
    <button onClick={(e)=>setState(!state)}>Toggle</button>
    {
      state?<Four/>:""
    }
    </>
  )
}

export default App