import React, { Component } from "react";
import wonderlemon from "./assets/wonderlemon.jpg";
import yellow from "./assets/fadingyellow.jpg";
import stormbat from "./assets/stormbat.jpg";
import "./App.css";
import Header from "./components/header/Header.js";
import Filter from "./components/filter/Filter.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Filter />
        <div className="divider divider1" />
        <div className="collage">
          <div className="img1">
            <img src={stormbat} />
          </div>
          <div className="img2">
            <img src={yellow} />
          </div>
          <div className="img3">
            <img src={wonderlemon} />
          </div>
        </div>
        <div className="divider divider2" />
      </div>
    );
  }
}

export default App;
