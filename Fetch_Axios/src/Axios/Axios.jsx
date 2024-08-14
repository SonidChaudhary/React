import React from 'react'
import axios from 'axios'

    const data = axios("https://api.github.com/users")
    .then(res=>((res.data)))


const Axios = () => {
  return (
    <>

    <button onClick={()=>getdata()}>get data</button>
    
    
    </>
  )
}

export default Axios