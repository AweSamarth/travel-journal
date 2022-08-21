import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./Navbar"
import Card from "./Card"
function App() {
  return (
    //root-->app-->theapp
    <div className="App">
      <div id="theapp">
        <Navbar />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
