import React, { useState } from 'react'
import ColourSelector from './ColourSelector'

const Selection = (props) => {
 const [bgStyle,setbgStyle]=useState({ backgroundColor: 'white' })

    function handleColor(){
   props.applyColor(bgStyle)
    }
  return (
    <div  className="fix-box"
    // onClick={handleColor}
    // style={bgStyle}
       >
    </div>
  )
}

export default Selection