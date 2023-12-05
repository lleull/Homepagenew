import React from "react";
import "./Navbar.css";
import { useState } from "react";
import icons from "./icon-menu.svg";
import cancel from './icon-menu-close.svg'
const Navbar = (props) => {
  const [tooglemenu, settooglemenu] = useState(false);
  props.toogle(tooglemenu)
  return (
    <>
      <div className="header">
        <div className="Logo">
          <h1>W.</h1>
        </div>
        <ul>
          <li className="list">Home</li>
          <li className="list">New</li>
          <li className="list">Popular</li>
          <li className="list">Trending</li>
          <li className="list">Categories</li>
        </ul>

        <div className="icon">
          <img
            onClick={() => settooglemenu(true)}
            className="iconspage"
            src={icons}
            alt="datas"
          />
        </div>
      </div>
      {tooglemenu ? (
        <div className="toogle">
             <img
            onClick={() => settooglemenu(false)}
            className="iconscancel"
            src={cancel}
            alt="datas"
          />
          <div className="tooglelist">
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
