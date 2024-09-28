import React, { useState } from 'react'

//  memo acts as a pure component fro functional component
function Memo({count}) {
  console.log("memo component")
  return (
    <div>
      <h1>memo component</h1>
        <span>{count}</span>
    </div>
  )
}

export default React.memo(Memo)



