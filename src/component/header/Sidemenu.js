import React, { useState } from "react";

import "./Header.css";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const home = [
  {
    id: 0,
    name: "Market 1",
  },
  {
    id: 2,
    name: "Market 2",
  },
  {
    id: 3,
    name: "Furniture",
  },
  {
    id: 4,
    name: "grocery 1",
  },
  {
    id: 5,
    name: "grocery 2",
  },
  {
    id: 6,
    name: "grocery 3",
  },
  {
    id: 7,
    name: "Health And beauty",
  },
  {
    id: 8,
    name: "Fashion 1",
  },
  {
    id: 9,
    name: "Fashion 2",
  },
  {
    id: 10,
    name: "Fashion 3",
  },
  {
    id: 11,
    name: "gift Store",
  },
  {
    id: 12,
    name: "Gadget",
  },
];
const megaManu = [
  {
    id: 0,
    name: "Order List",
  },
  {
    id: 2,
    name: "Order Details",
  },
  {
    id: 3,
    name: "View Profile",
  },
  {
    id: 4,
    name: "Edit Profile",
  },
  {
    id: 5,
    name: "Address List",
  },
  {
    id: 6,
    name: "Add Address",
  },
  {
    id: 7,
    name: "All Tickets",
  },
  {
    id: 8,
    name: "Ticket Details",
  },
  {
    id: 9,
    name: "wishlist",
  },
];
const fullmenu = [
  {
    id: 0,
    logo: "f1.svg",
    name: "T-Shirt",
  },
  {
    id: 1,
    logo: "f2.svg",
    name: "Formal Shirt",
  },
  {
    id: 2,
    logo: "f3.svg",
    name: "Shirt",
  },
  {
    id: 3,
    logo: "f4.svg",
    name: "Shoes",
  },
  {
    id: 4,
    logo: "f5.svg",
    name: "Jeans Pant",
  },
  {
    id: 5,
    logo: "f5.svg",
    name: "Gabardin Pant",
  },
  {
    id: 6,
    logo: "f5.svg",
    name: "Formal Pant",
  },
  {
    id: 7,
    logo: "f6.svg",
    name: "Sunglass",
  },
  {
    id: 8,
    logo: "f9.svg",
    name: "Formal Shoes",
  },
  {
    id: 9,
    logo: "f6.svg",
    name: "Lungi",
  },
  {
    id: 10,
    logo: "f9.svg",
    name: "Tunk",
  },
  {
    id: 11,
    logo: "f6.svg",
    name: "Jacket",
  },
];

const pagesArray = [
  {
    id: 0,
    index: "salepage",
    name: "Sale Paage",

    version: [
      {
        id: 0,
        name: "Version 1",
      },
      {
        id: 1,
        name: "Version 2",
      },
    ],
  },
  {
    id: 1,
    index: "vendor",
    name: "Vendor",

    version: [
      {
        id: 0,
        name: "All Vendors",
      },
      {
        id: 1,
        name: "Vendor Store",
      },
    ],
  },
  {
    id: 3,
    index: "shop",
    name: "Shop",

    version: [
      {
        id: 0,
        name: "Search Product",
      },
      {
        id: 1,
        name: "Single Product",
      },
      {
        id: 2,
        name: "Cart",
      },
      {
        id: 3,
        name: "Checkout",
      },
      {
        id: 4,
        name: "Alternative Checkout",
      },
      {
        id: 5,
        name: "Order Confirmation",
      },
    ],
  },
];
const userAccountArray = [
  {
    id: 0,
    index: "orders",
    name: "Orders",

    version: [
      {
        id: 0,
        name: "Order List",
      },
      {
        id: 1,
        name: "Order Details",
      },
    ],
  },
  {
    id: 1,
    index: "profile",
    name: "Profile",

    version: [
      {
        id: 0,
        name: "View Profile",
      },
      {
        id: 1,
        name: "Edit Profile",
      },
    ],
  },
  {
    id: 2,
    index: "address",
    name: "Address",

    version: [
      {
        id: 0,
        name: "Address List",
      },
      {
        id: 1,
        name: "Add Address",
      },
    ],
  },
  {
    id: 3,
    index: "supporttickets ",
    name: "Support Tickets",

    version: [
      {
        id: 0,
        name: "All Tickets",
      },
      {
        id: 1,
        name: "Ticket Details",
      },
    ],
  },
  {
    id: 4,
    index: "whishlist",
    name: "Whishlist",
    version: [],
  },
];
const vendorAccountArray = [
  {
    id: 0,
    index: "dashboard",
    name: "Dashboard",
    version: [],
  },
  {
    id: 1,
    index: "products",
    name: "Products",

    version: [
      {
        id: 0,
        name: "All Product",
      },
      {
        id: 1,
        name: "Add/Edit Product",
      },
    ],
  },
  {
    id: 3,
    index: "orders",
    name: "Orders",

    version: [
      {
        id: 0,
        name: "All Orders",
      },
      {
        id: 1,
        name: "Orders details",
      },
    ],
  },
  {
    id: 4,
    index: "profile ",
    name: "Profile",
    version: [],
  },
];

const Sidemenu = () => {
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

  return (
    <>
      <div className="sidemenu">
        <div className="sidemenu-div">
          <div className="closeicon">
            <Link to="/">
              <IoCloseSharp className="ioClose" />
            </Link>
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
                    <div key={item.id} className="menu-div-spen">
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
                    <div key={item.id} className="menu-div-spen">
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
                    <div key={item.id} className="menu-div-spen">
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
                    <div key={item.id} className="menu-div-spen">
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
                    <div key={item.id} className="menu-div-spen">
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
                    <div key={item.id} className="menu-div-spen">
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
