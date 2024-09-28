import React from 'react'

function Hero({hero}) {
  if(hero === "antman"){
    throw new Error("something went wrong!")
  }


  return (
    <div>
        <h1>{hero}</h1>
    </div>
  )
}

export default Hero
