import React, { Component } from 'react'
import '../App.css'

class ClassComp extends Component {
    render(){
  return (
    <div>
      <div className="cont2">
                <h2>This is created using class Component</h2>
                <p>This is done using external CSS</p>
                <p style={{color:"blue"}}>This is done using inline CSS</p>
              </div>
    </div>
  )
}
}

export default ClassComp
