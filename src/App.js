import React from "react";
import Renderer from "./components/rendererComponent"
import Header from "./components/header"
import pageStyle from "./styles/mainPage.module.css"
import "./App.css"

function App() {
 

  return <div>
    <Header/>
    <Renderer/>
  </div>;
}

export default App