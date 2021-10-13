import "./App.css";
import React from "react";
import MainComponent from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainComponent></MainComponent>
      </BrowserRouter>
    </div>
  );
}

export default App;
