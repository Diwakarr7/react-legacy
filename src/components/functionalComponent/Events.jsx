import React from 'react'

function Events() {

   const handleClick = ()=>{
    console.log('handleClick')
   }
  console.log("reneders")


  return (
    <div>
      <h1>function click</h1>
      <button onClick={handleClick}>click</button>
    </div>
  )
}

export default Events
