import './App.css';
import FuncComp from './Component/FuncComp';
import ClassComp from './Component/ClassComp';
import { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      funState : false,
      classState : false
    }
  }
  toggle = (type) =>{
    if(type === 'f'){
      this.state.funState = !this.state.funState
    }
    else{
      this.state.classState = !this.state.classState
    }
    this.setState(this.state);
  }
  render(){
  return (
    <div className="App">
       <h1>Styling using Functional and Class Component</h1>
       
       <div >
          <p
            className={this.state.funState ? "btn1 active" : "btn1"}
            onClick={(event) => this.toggle("f")}>
            To see styling in functional component
          </p>
          <p
            className={this.state.classState ? "btn2 active" : "btn2"}
            onClick={(event) => this.toggle("c")}>
            To see styling in class component
          </p>
        </div>
      

       <div className="buttonDiv">
          <div className="content">
            {this.state.funState ?  <FuncComp /> : ""}
          </div>
          <div className="content">
            {this.state.classState ?  <ClassComp /> : ""}
          </div>
        </div>
    </div>
  );
}
}

export default App;
