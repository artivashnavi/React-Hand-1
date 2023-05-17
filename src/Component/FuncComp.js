import React from 'react'
import '../App.css'

function FuncComp() {
  return (
    <div>
      <div className="cont1">
                <h2>This is created using functional Component</h2>
                <p>This is done using external CSS</p>
                <p style={{color:"blue"}}>This is done using inline CSS</p>
      </div>
    </div>
  )
}

export default FuncComp
