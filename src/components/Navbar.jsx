import React from "react";
import "../App.css";
import menu_icon from "../assets/images/menu-icon.png";

const showMenu = () => {
  const menuBox = document.getElementsByClassName("menuBox");
  for (let i = 0; i < menuBox.length; i++) {
    menuBox[i].style.display = "block";
  }
};

function Navbar() {
  return (
    <>
      <div className="container navbar">
        <span>
          <img
            src="https://cdn-icons-png.flaticon.com/512/169/169367.png"
            alt="Sun icon"
            className="appLogo"
          />
          <h2 style={{ color: "#fff", fontSize: "28px" }}>Weather App</h2>
        </span>
          <img src={menu_icon} className="menuIcon" style={{width: "40px", marginBottom: "-15px"}} onClick={showMenu} />
      </div>
      <div className="menuBox">
        Github
        <hr />
        Linkedin
      </div>
    </>
  );
}

export default Navbar;
