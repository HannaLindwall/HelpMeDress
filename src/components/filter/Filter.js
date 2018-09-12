import React, { Component } from "react";
import { Menu, message } from "antd";
import "./Filter.css";
import birds from "../../assets/birds2.jpg";
import BirdButton from "./components/BirdButton.js";

const menuTitles = [
  {
    key: 1,
    title: "Pick a Season",
    whitebox: "whitebox1",
    bird: "bird1"
  },
  {
    key: 2,
    title: "Pick an Occasion",
    whitebox: "whitebox2",
    bird: "bird2"
  }
];

class Filter extends Component {
  handleButtonClick(e) {
    message.info("Click on left button.");
    console.log("click left button", e);
  }

  handleMenuClick(e) {
    message.info("Click on menu item.");
    console.log("click", e);
  }

  render() {
    const seasonMenu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">Winter</Menu.Item>
        <Menu.Item key="2">Summer</Menu.Item>
      </Menu>
    );
    const occasionMenu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">Casual</Menu.Item>
        <Menu.Item key="2">Business</Menu.Item>
        <Menu.Item key="3">Party</Menu.Item>
        <Menu.Item key="4">Formal</Menu.Item>
      </Menu>
    );
    return (
      <div className="birds">
        <BirdButton
          menu={seasonMenu}
          title={menuTitles[0].title}
          whitebox={menuTitles[0].whitebox}
          bird={menuTitles[0].bird}
        />
        <BirdButton
          menu={occasionMenu}
          title={menuTitles[1].title}
          whitebox={menuTitles[1].whitebox}
          bird={menuTitles[1].bird}
        />
      </div>
    );
  }
}

export default Filter;
