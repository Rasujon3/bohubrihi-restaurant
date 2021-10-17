import "./App.css";
import React from "react";
import MainComponent from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";
import myStore from "./redux/store";
import { Provider } from 'react-redux';

function App() {
  // console.log("App.js: ", myStore.getState());
  return (
    <div className="App">
      <Provider store={myStore}>
        <BrowserRouter>
          <MainComponent></MainComponent>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
