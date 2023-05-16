import React, { useState } from "react";

import "./Header.css";
import {  fullmenu, home, megaManu, pagesArray, userAccountArray, vendorAccountArray } from "../../asset/StaticData";


import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";



const Sidemenu = ({handleClose }) => {
  const [isOpen, setIsOpen] = useState({
    home: false,
    megaMenu: false,
    fullmenu: false,
    pagesArray: false,
    userAccountArray: false,
    vendorAccountArray: false,
  });

  const toggle = (value) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [value]: !prevState[value],
    }));
  };

  const handleCloseIconClick = ()=>{
   handleClose()
  }

  return (
    <>
      <div  className="sidemenu">
        <div className="sidemenu-div">
          <div className="closeicon">
            {/* <Link to="/"> */}
              <IoCloseSharp onClick={handleCloseIconClick} className="ioClose" />
            {/* </Link> */}
          </div>
          <div className="menu-div">
            <div className="menu">
              <button className="menu-btn" onClick={() => toggle("home")}>
                <h6 style={{ color: isOpen.home ? "#D23F57" : "" }}>Home</h6>
                {isOpen.home ? (
                  <span style={{ color: isOpen ? "#D23F57" : "" }}>
                    <IoIosArrowUp />
                  </span>
                ) : (
                  <span>
                    <IoIosArrowDown />
                  </span>
                )}
              </button>
              {isOpen.home &&
                home.map((item, index) => {
                  return (
                    <div key={index} className="menu-div-spen">
                      <span className="menuname-span">{item.name}</span>
                    </div>
                  );
                })}
            </div>
            <div className="menu">
              <button className="menu-btn" onClick={() => toggle("megaMenu")}>
                <h6 style={{ color: isOpen.megaMenu ? "#D23F57" : "" }}>
                  Mega Menu
                </h6>
                {isOpen.megaMenu ? (
                  <span style={{ color: isOpen.megaMenu ? "#D23F57" : "" }}>
                    <IoIosArrowUp />
                  </span>
                ) : (
                  <span>
                    <IoIosArrowDown />
                  </span>
                )}
              </button>
              {isOpen.megaMenu &&
                megaManu.map((item, index) => {
                  return (
                    <div key={index} className="menu-div-spen">
                      <span className="menuname-span">{item.name}</span>
                    </div>
                  );
                })}
            </div>
            <div className="menu">
              <button className="menu-btn" onClick={() => toggle("fullmenu")}>
                <h6 style={{ color: isOpen.fullmenu ? "#D23F57" : "" }}>
                  Full Screen Menu
                </h6>
                {isOpen.fullmenu ? (
                  <span style={{ color: isOpen.fullmenu ? "#D23F57" : "" }}>
                    <IoIosArrowUp />
                  </span>
                ) : (
                  <span>
                    <IoIosArrowDown />
                  </span>
                )}
              </button>
              {isOpen.fullmenu &&
                fullmenu.map((item, index) => {
                  return (
                    <div key={index} className="menu-div-spen">
                      <span className="menuname-span">{item.name}</span>
                    </div>
                  );
                })}
            </div>
            <div className="menu">
              <button className="menu-btn" onClick={() => toggle("pagesArray")}>
                <h6 style={{ color: isOpen.pagesArray ? "#D23F57" : "" }}>
                  Pages
                </h6>
                {isOpen.pagesArray ? (
                  <span style={{ color: isOpen.pagesArray ? "#D23F57" : "" }}>
                    <IoIosArrowUp />
                  </span>
                ) : (
                  <span>
                    <IoIosArrowDown />
                  </span>
                )}
              </button>
              {isOpen.pagesArray &&
                pagesArray.map((item, index) => {
                  return (
                    <div key={index} className="menu-div-spen">
                      <span className="menuname-span">{item.name}</span>
                    </div>
                  );
                })}
            </div>
            <div className="menu">
              <button
                className="menu-btn"
                onClick={() => toggle("userAccountArray")}
              >
                <h6 style={{ color: isOpen.userAccountArray ? "#D23F57" : "" }}>
                  User Account
                </h6>
                {isOpen.userAccountArray ? (
                  <span
                    style={{ color: isOpen.userAccountArray ? "#D23F57" : "" }}
                  >
                    <IoIosArrowUp />
                  </span>
                ) : (
                  <span>
                    <IoIosArrowDown />
                  </span>
                )}
              </button>
              {isOpen.userAccountArray &&
                userAccountArray.map((item, index) => {
                  return (
                    <div key={index} className="menu-div-spen">
                      <span className="menuname-span">{item.name}</span>
                    </div>
                  );
                })}
            </div>
            <div className="menu">
              <button
                className="menu-btn"
                onClick={() => toggle("vendorAccountArray")}
              >
                <h6
                  style={{ color: isOpen.vendorAccountArray ? "#D23F57" : "" }}
                >
                  Vendor Account
                </h6>
                {isOpen.vendorAccountArray ? (
                  <span
                    style={{
                      color: isOpen.vendorAccountArray ? "#D23F57" : "",
                    }}
                  >
                    <IoIosArrowUp />
                  </span>
                ) : (
                  <span>
                    <IoIosArrowDown />
                  </span>
                )}
              </button>
              {isOpen.vendorAccountArray &&
                vendorAccountArray.map((item, index) => {
                  return (
                    <div key={index} className="menu-div-spen">
                      <span className="menuname-span">{item.name}</span>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidemenu;
