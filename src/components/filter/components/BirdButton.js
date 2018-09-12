import React, { Component } from "react";
import { Menu, Dropdown, Button, Icon, message } from "antd";
import "./BirdButton.css";

export const BirdButton = ({ menu, title, whitebox, bird }) => {
  const birdClassName = bird + " centerbox";
  const whiteboxClassName = whitebox + " whitebox";
  return (
    <div className={birdClassName}>
      <div className={whiteboxClassName}>
        <Dropdown overlay={menu}>
          <Button size="large" style={{ width: "15vw", height: "80px" }}>
            {title} <Icon type="down" />
          </Button>
        </Dropdown>
      </div>
    </div>
  );
};

export default BirdButton;
