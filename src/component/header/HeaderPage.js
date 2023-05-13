import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import "./Header.css";

import { IoIosArrowDown, IoIosArrowForward, IoMdSearch } from "react-icons/io";
import { BiCategory, BiSearch } from "react-icons/bi";
import { AiFillCaretRight } from "react-icons/ai";

const categoriesData = [
  {
    index: 0,
    id: "car",
    name: "Car",
  },
  {
    index: 1,
    id: "clothes",
    name: "Clothes",
  },
  {
    index: 2,
    id: "electronics",
    name: "Electronics",
  },
  {
    index: 3,
    id: "laptop",
    name: "Laptop",
  },
  {
    index: 4,
    id: "desktop",
    name: "Desktop",
  },
  {
    index: 5,
    id: "camera",
    name: "Camera",
  },
  {
    index: 6,
    id: "toys",
    name: "Toys",
  },
];

const prodectData = [
  {
    index: 0,
    id: "fashion",
    name: "Fashion",
    img: "new4.svg",
    items: ["shirt", "T-shirt", "pant", "underwear"],
  },
  {
    index: 1,
    id: "electronics",
    name: "Electronics",
    img: "new44.svg",
    items: ["shirt", "T-shirt", "pant", "underwear"],
  },
  {
    index: 2,
    id: "fashion",
    name: "Fashion",
    img: "new5.svg",
    items: ["shirt", "T-shirt", "pant", "underwear"],
  },
  {
    index: 3,
    id: "bikes",
    name: "Bikes",
    img: "new6.svg",
    items: ["shirt", "T-shirt", "pant", "underwear"],
  },
  {
    index: 4,
    id: "home & garden",
    name: "Home & Garden",
    img: "new7.svg",
  },
  {
    index: 5,
    id: "giftd",
    name: "Giftd",
    img: "new8.svg",
  },
  {
    index: 6,
    id: " health & beauty",
    name: " Health & Beauty",
    img: "new9.svg",
  },
  {
    index: 7,
    id: "pets",
    name: "Pets",
    img: "new10.svg",
  },
  {
    index: 8,
    id: "baby toys",
    name: "Baby Toys",
    img: "new11.svg",
  },
  {
    index: 9,
    id: "groceries",
    name: "Groceries",
    img: "new12.svg",
  },
  {
    index: 10,
    id: "automotive",
    name: "Automotive",
    img: "new13.svg",
  },
];

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
    arrow: <AiFillCaretRight />,
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
    arrow: <AiFillCaretRight />,
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
    arrow: <AiFillCaretRight />,
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
    arrow: <AiFillCaretRight />,
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
    arrow: <AiFillCaretRight />,
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
    arrow: <AiFillCaretRight />,
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
    arrow: <AiFillCaretRight />,
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
    arrow: <AiFillCaretRight />,
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
    arrow: <AiFillCaretRight />,
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

const HeaderPage = () => {
  const [isListVisible, setIsListVisible] = useState(false);
  const [categoriesitem, setCategoriesitem] = useState("All Categories");
  const menuRef = useRef(null);
  const btnRef = useRef(null);

  const [product, setProduct] = useState(false);
  const [manuItem, setManuItem] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const [selectedPage, setSelectedPage] = useState(null);

  const handlePageSelect = (page) => {
    setSelectedPage(page);
  };

  const handleMouseEnter = (index) => {
    setManuItem((prevState) =>
      prevState.map((state, i) => (i === index ? true : state))
    );
    setSelectedPage(null);
  };

  const handleMouseLeave = (index) => {
    setManuItem((prevState) =>
      prevState.map((state, i) => (i === index ? false : state))
    );
  };

  useEffect(() => {
    function handleClickbtn(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        btnRef.current !== event.target
      ) {
        // setProduct(false);
        setIsListVisible(false);
      }
    }
    document.addEventListener("mousedown", handleClickbtn);

    return () => {
      document.removeEventListener("mousedown", handleClickbtn);
    };
  }, [btnRef, menuRef]);

  const handleCategories = (categoriesid) => {
    setCategoriesitem(categoriesid);
    setIsListVisible(false);
  };

  const handleproduct = () => {
    console.log("ijijsmdiasmimaidmaismdiammds");
    // setProduct(true);
  };

  return (
    <>
      <div>
        <div className="headermain">
          <div className="header-div">
            <div className="headerlogo">
              <img src="./images/logo1.svg" alt="images" className="logo1" />
              <Link to="/Sidemenu" >
                <img src="./images/new16.svg" alt="images" className="new16" />
              </Link>
            </div>

            <img src="./images/logo11.svg" alt="images" className="logo11" />

            <div className="headersearchbar">
              <div className="searchbar">
                <IoMdSearch className="img-search" />
                <input
                  placeholder="Searching for ..."
                  className="search-inpute"
                />
              </div>
              <div className="searchbarbtn">
                <button
                  ref={btnRef}
                  onClick={() => setIsListVisible(!isListVisible)}
                >
                  {categoriesitem} <IoIosArrowDown />
                </button>
                <div id="manuitem" className="modallist">
                  {isListVisible && (
                    <ui className="ui-list" ref={menuRef}>
                      <li key="123" className="li-item">
                        All Categories
                      </li>
                      {categoriesData.map((item, index) => (
                        <li
                          key={index}
                          className="li-item"
                          onClick={() => handleCategories(item.name)}
                        >
                          {item.name}
                        </li>
                      ))}
                    </ui>
                  )}
                </div>
              </div>
            </div>

            <div className="Account-cart">
              <Link to="/SearchPage">
              <BiSearch className="biSearch" /></Link>
              <Link to="/Login">
                <div className="userAccount">
                  {/* <FaUserAlt /> */}
                  <img
                    src="./images/new14.svg"
                    alt="account"
                    className="Acc-Cart-img"
                  />
                </div>
              </Link>
              <Link to="/Cart">
                <div className="cartPage">
                  {/* <FaCartArrowDown /> */}
                  <img
                    src="./images/new15.svg"
                    alt="account"
                    className="Acc-Cart-img"
                  />
                  <span className="cartspan">3</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="productmain">
          <div className="product-div">
            <div>
              <button
                className="productBTn"
                ref={btnRef}
                onClick={() => {
                  setProduct(!product);
                }}
              >
                <div className="prodCategory">
                  <BiCategory className="prodCategory-icon" />
                  Categoriess
                </div>

                <div className="productBTnArrow">
                  {product ? <IoIosArrowDown /> : <IoIosArrowForward />}
                </div>
              </button>
              <div
                id=""
                className="prod-catagorey"
                style={{ display: product ? "block" : "none" }}
                onClick={() => {
                  setProduct(false);
                }}
              >
                {product && (
                  <ui className="prod-item" ref={menuRef}>
                    {prodectData.map((item, index) => {
                      console.log(item.items);
                      return (
                        <li
                          className="prod-itemli"
                          key={index}
                          onClick={handleproduct}
                        >
                          <img
                            src={`/images/${item.img}`}
                            alt="img"
                            className="productimg"
                          />
                          {item.name}
                        </li>
                      );
                    })}
                  </ui>
                )}
              </div>
            </div>
            <div className="prodNevmain">
              <div className="prodNev-item">
                <div
                  className="nevItem"
                  onMouseEnter={() => handleMouseEnter(0)}
                  onMouseLeave={() => handleMouseLeave(0)}
                >
                  <button className="newBtn">Home</button>
                  <IoIosArrowDown />
                  {manuItem[0] && (
                    <div
                      className="hovermodal"
                      onMouseEnter={() => handleMouseEnter(0)}
                      onMouseLeave={() => handleMouseLeave(0)}
                    >
                      <div className="nevDrop-item">
                        <ul className="nevDropui">
                          {home.map((item) => {
                            return <li className="nevDropli">{item.name}</li>;
                          })}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                <div
                  className="nevItem"
                  onMouseEnter={() => handleMouseEnter(1)}
                  onMouseLeave={() => handleMouseLeave(1)}
                >
                  <button className="newBtn">Mega Menu</button>
                  <IoIosArrowDown />
                  {manuItem[1] && (
                    <div
                      className="hovermodal"
                      onMouseEnter={() => handleMouseEnter(1)}
                      onMouseLeave={() => handleMouseLeave(1)}
                    >
                      <div className="nevDrop-item">
                        <ul className="nevDropui">
                          {megaManu.map((item) => {
                            return <li className="nevDropli">{item.name}</li>;
                          })}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                <div
                  className="nevItem"
                  onMouseEnter={() => handleMouseEnter(2)}
                  onMouseLeave={() => handleMouseLeave(2)}
                >
                  <button className="newBtn">Full Screen Menu</button>
                  <IoIosArrowDown />
                  {manuItem[2] && (
                    <div
                      className="hovermodal"
                      onMouseEnter={() => handleMouseEnter(2)}
                      onMouseLeave={() => handleMouseLeave(2)}
                    >
                      <div className="nevDrop-item">
                        <ui className="newDropui">
                          {fullmenu.map((item, index) => {
                            return (
                              <li className="nevDropli" key={index}>
                                <div className="menu-logo">
                                  <img
                                    src={`/images/${item.logo}`}
                                    alt="logo"
                                    className="menulogo"
                                  />
                                  <li>{item.name}</li>
                                </div>
                              </li>
                            );
                          })}
                        </ui>
                      </div>
                    </div>
                  )}
                </div>

                <div
                  className="nevItem"
                  onMouseEnter={() => handleMouseEnter(3)}
                  onMouseLeave={() => handleMouseLeave(3)}
                >
                  <button className="newBtn">Pages</button>
                  <IoIosArrowDown />
                  {manuItem[3] && (
                    <div className="hovermodal">
                      <div className="nevDrop-item">
                        <ui
                          className="nevDropui"
                          onMouseEnter={() => handleMouseEnter(3)}
                          onMouseLeave={() => handleMouseLeave(3)}
                        >
                          {pagesArray.map((page) => (
                            <ui key={page.id}>
                              <li
                                onMouseEnter={() => handlePageSelect(page)}
                                className="version-ui nevDropli"
                              >
                                <div className="name-arrow-div">
                                  {page.name}
                                  <div className="arrow"></div>
                                  {page.arrow}
                                </div>

                                {selectedPage &&
                                  selectedPage.id === page.id && (
                                    <div
                                      className="version-dropdown-menu0"
                                      onMouseEnter={() => handleMouseEnter(3)}
                                      onMouseLeave={() => handleMouseLeave(3)}
                                    >
                                      <div className="version-dropdown-menu">
                                        {page.version.map((version) => (
                                          <div className="hovermodalDrop">
                                            <div className="nevDrop-itemDrop">
                                              <ui
                                                key={version.id}
                                                className="version-dropdown-ui"
                                              >
                                                <li href="#">{version.name}</li>
                                              </ui>
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                              </li>
                            </ui>
                          ))}
                        </ui>
                      </div>
                    </div>
                  )}
                </div>

                <div
                  className="nevItem"
                  onMouseEnter={() => handleMouseEnter(4)}
                  onMouseLeave={() => handleMouseLeave(4)}
                >
                  <button className="newBtn">User Account</button>
                  <IoIosArrowDown />
                  {manuItem[4] && (
                    <div className="hovermodal">
                      <div className="nevDrop-item">
                        <ui
                          className="nevDropui"
                          onMouseEnter={() => handleMouseEnter(4)}
                          onMouseLeave={() => handleMouseLeave(4)}
                        >
                          {userAccountArray.map((page) => (
                            <ui key={page.id}>
                              <li
                                onMouseEnter={() => handlePageSelect(page)}
                                className="version-ui nevDropli"
                              >
                                <div className="name-arrow-div">
                                  {page.name}
                                  <div className="arrow"></div>
                                  {page.arrow}
                                </div>
                                {selectedPage &&
                                  selectedPage.id === page.id &&
                                  page.version.length !== 0 && (
                                    <div
                                      className="version-dropdown-menu0"
                                      onMouseEnter={() => handleMouseEnter(4)}
                                    >
                                      <div className="version-dropdown-menu">
                                        {page.version.map((version) => (
                                          <div className="hovermodalDrop">
                                            <div className="nevDrop-itemDrop">
                                              <ui
                                                key={version.id}
                                                className="version-dropdown-ui"
                                              >
                                                <li href="#">{version.name}</li>
                                              </ui>
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                              </li>
                            </ui>
                          ))}
                        </ui>
                      </div>
                    </div>
                  )}
                </div>

                <div
                  className="nevItem"
                  onMouseEnter={() => handleMouseEnter(5)}
                  onMouseLeave={() => handleMouseLeave(5)}
                >
                  <button className="newBtn">Vendor Account</button>
                  <IoIosArrowDown />
                  {manuItem[5] && (
                    <div className="hovermodal">
                      <div className="nevDrop-item">
                        <ui
                          className="nevDropui"
                          onMouseEnter={() => handleMouseEnter(5)}
                          onMouseLeave={() => handleMouseLeave(5)}
                        >
                          {vendorAccountArray.map((page) => {
                            console.log(page.version);
                            return (
                              <ui key={page.id}>
                                <li
                                  onMouseEnter={() => handlePageSelect(page)}
                                  className="version-ui nevDropli"
                                >
                                  <div className="name-arrow-div">
                                    {page.name}
                                    <div className="arrow"></div>
                                    {page.arrow}
                                  </div>
                                  {selectedPage &&
                                    selectedPage.id === page.id &&
                                    page.version.length !== 0 && (
                                      <div
                                        className="version-dropdown-menu0"
                                        onMouseEnter={() => handleMouseEnter(5)}
                                        onMouseLeave={() => handleMouseLeave(5)}
                                      >
                                        <div className="version-dropdown-menu">
                                          {page.version.map((version) => (
                                            <div className="hovermodalDrop">
                                              <div className="nevDrop-itemDrop">
                                                <ui
                                                  key={version.id}
                                                  className="version-dropdown-ui"
                                                >
                                                  <li href="#">
                                                    {version.name}
                                                  </li>
                                                </ui>
                                              </div>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    )}
                                </li>
                              </ui>
                            );
                          })}
                        </ui>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderPage;
