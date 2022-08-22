import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./Navbar"
import Card from "./Card"
import data from "./data"
function App() {
  const cards=data.map(item=>{
    return(
      <Card 
      key={item.id}
      item={item}
      />
    )
  })
  return (
    //root-->app-->theapp
    <div className="App">
      <div id="theapp">
        <Navbar />
        {cards}
      </div>
    </div>
  );
}

export default App;
