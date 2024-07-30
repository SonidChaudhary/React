// import { createContext, useContext, useState } from "react";
// import React from 'react'


// const countContext = createContext()

// const Count_context_API = (props) => {
//     const[count, setCount]=useState(9);

//   return (
//     <countContext.Provider value ={{count, setCount}}>
//         {props.children}
//     </countContext.Provider>
//   )
// }

// export function useCount(){
//     return useContext(countContext)
// }

// export default Count_context_API


import React, { useContext, useState } from 'react'
import { createContext } from 'react'

const countContext= createContext();
const [count, setCount]=useState(0)

const Count_context_API = (props) => {
  return (
    <countContext.Provider value={{count, setCount}}>
        {props.children}
    </countContext.Provider>
  )
}
export function useCount(){
    return useContext(countContext)
}

export default Count_context_API










