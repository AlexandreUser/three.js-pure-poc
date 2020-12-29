import React from "react";
import Renderer from "./components/rendererComponent"
import Header from "./components/header"
import "./App.css"
function Tips(props){
  return <div className="tipsContainer">
    <p className='tipTitle'>{props.title}</p>
    {props.value.map(value=>{
      return  <p  className='tipValue'>{value}</p>
    })}
  </div>
}
function App() {
 

  return <div>
    <Header/>
    <Renderer/>
    <Tips title={"Controls:"} value={['rotate -> left mouse button','move -> right mouse button','zoom -> scroll mouse button']}/>
  </div>;
}

export default App