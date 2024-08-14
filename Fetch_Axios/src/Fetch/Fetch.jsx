import React from 'react'

function getData(){
    const data = fetch("https://api.github.com/users")
    .then(res=>res.json())
    .then(result=>result)

}
const Fetch = () => {
  return (
    <>
     <button onClick={()=>getData()}>Getdata</button>
    </>
  )
}

export default Fetch