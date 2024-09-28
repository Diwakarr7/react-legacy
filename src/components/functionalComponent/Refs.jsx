import React, { createRef, useEffect, useState } from 'react'

function Refs() {

    const [val, setVal] =  useState("")
  const inputRef = createRef();

   useEffect(()=>{
        inputRef.current.focus()
        console.log(inputRef.current.value)
   },[])

  return (
    <div>
      <h1>innput your name</h1>
       <input type="text" name="name" ref={inputRef} onChange={(e)=>setVal(e.target.value) } value={val}/>
      {/* <button>click</button> */}

    </div>
  )
}

export default Refs
