import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

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
    const [menuState, setMenuState] = useState({
      home: false,
      megaMenu: false,
      fullScreenMenu: false,
      pages: false,
      userAccount: false,
      vendorAccount: false,
    });
  
    const toggleMenu = (menuName) => {
      setMenuState((prevState) => ({
        ...prevState,
        [menuName]: !prevState[menuName],
      }));
    };
  
    return (
      <>
        <div>
          <div>
            <div>
              <IoCloseSharp />
            </div>
            <div>
              <div>
                <button onClick={() => toggleMenu('home')}>
                  <h6>Home</h6>
                  {menuState.home ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </button>
                {menuState.home &&
                  home.map((item, index) => {
                    return (
                      <div key={item.id}>
                        <span>{item.name}</span>
                      </div>
                    );
                  })}
              </div>
              <div>
                <button onClick={() => toggleMenu('megaMenu')}>
                  <h6>Mega Menu</h6>
                  {menuState.megaMenu ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </button>
                {menuState.megaMenu &&
                  megaManu.map((item, index) => {
                    return (
                      <div key={item.id}>
                        <span>{item.name}</span>
                      </div>
                    );
                  })}
              </div>
              <div>
                <button onClick={() => toggleMenu('fullScreenMenu')}>
                  <h6>Full Screen Menu</h6>
                  {menuState.fullScreenMenu ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </button>
                {menuState.fullScreenMenu &&
                  fullmenu.map((item, index) => {
                    return (
                      <div key={item.id}>
                        <span>{item.name}</span>
                      </div>
                    );
                  })}
              </div>
              <div>
                <button onClick={() => toggleMenu('pages')}>
                  <h6>Pages</h6>
                  {menuState.pages ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </button>
                {menuState.pages &&
                  pagesArray.map((item, index) => {
                    return (
                      <div key={item.id}>
                        <span>{item.name}</span>
                      </div>
                    );
                  })}
              </div>
              <div>
                <button onClick={() => toggleMenu('userAccount')}>
                  <h6>User Account</h6>
                  {menuState.userAccount ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </button>
                {menuState.userAccount &&
                  userAccountArray.map((item, index) => {
                    return (
                      <div key={item.id}>
                        <span>{item.name}</span>
                      </div>
                    );
                  })}
              </div>
              </div>
              </div>
              </div></>)}
             
  

export default Sidemenu;
