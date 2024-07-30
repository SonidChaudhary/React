import React from 'react'
import Count_context_API from './context/Count_context_API'
import Child1 from './components/Child1'
import Child2 from './components/Child2'

const App = () => {
  return (
    <>
    <Count_context_API>
      <Child1></Child1>
      <Child2></Child2>

    </Count_context_API>
    </>
  )
}

export default App