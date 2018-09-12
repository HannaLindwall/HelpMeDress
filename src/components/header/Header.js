import React, { Component } from "react";
import anime from "../../assets/anime.jpg";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <div className="App-title">
          <h1>You want some help with that?</h1>
        </div>
        <div className="App-image-container">
          <img className="App-image" src={anime} />
        </div>
      </header>
    );
  }
}

export default Header;
