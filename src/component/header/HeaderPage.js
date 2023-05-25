import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import "./Header.css";

import { IoIosArrowDown, IoIosArrowForward, IoMdSearch } from "react-icons/io";
import { BiCategory, BiSearch } from "react-icons/bi";

import {
  categoriesData,
  fullmenu,
  home,
  megaManu,
  pagesArray,
  prodectData,
  userAccountArray,
  vendorAccountArray,
} from "../../asset/StaticData";
import Sidemenu from "./Sidemenu";
import SearchPage from "./SearchPage";
import Footer from "../footer/Footer";
import Slider from "../slider/Slider";
import Product from "../Homepage/Product";

const HeaderPage = () => {
  const [isListVisible, setIsListVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
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
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

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



  return (
    <div>
      <div className={`component ${isSidebarVisible ? "visible" : ""}`}>
        <Sidemenu handleClose={() => setIsSidebarVisible(false)} />
      </div>
      <div className={`costomSearchbar ${isVisible ? "visible" : ""}`}>
        <SearchPage handleSearchClose={() => setIsVisible(false)} />
      </div>
      {!isSidebarVisible && !isVisible && (
        <div>
          <div className="headermain">
            <div className="header-div">
              <div className="headerlogo">
                <img src="./images/logo1.svg" alt="images" className="logo1" />
                {/* <Link to="/sidemenu" > */}
                <img
                  onClick={() => setIsSidebarVisible(true)}
                  src="./images/new16.svg"
                  alt="images"
                  className="new16"
                />
                {/* </Link> */}
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
                      <div className="ui-list" ref={menuRef}>
                        {/* <div key="123" className="li-item">
                          All Categories
                        </div> */}
                        {categoriesData.map((item, index) => (
                          <div
                            key={index}
                            className="li-item"
                            onClick={() => handleCategories(item.name)}
                          >
                            {item.name}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="Account-cart">
                {/* <Link to="/searchPage"> */}
                <BiSearch
                  className="biSearch"
                  onClick={() => setIsVisible(true)}
                />
                {/* </Link> */}
                <Link to="/login">
                  <div className="userAccount">
                    {/* <FaUserAlt /> */}
                    <img
                      src="./images/new14.svg"
                      alt="account"
                      className="Acc-Cart-img"
                    />
                  </div>
                </Link>
                <Link to="/art">
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
                    <div className="prod-item" ref={menuRef}>
                      {prodectData.map((item, index) => {
                        return (
                          <div className="prod-itemli" key={index}>
                            <img
                              src={`/images/${item.img}`}
                              alt="img"
                              className="productimg"
                            />
                            {item.name}
                          </div>
                        );
                      })}
                    </div>
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
                          <div className="nevDropui">
                            {home.map((item, index) => {
                              return (
                                <div className="nevDropli" key={index}>
                                  {item.name}
                                </div>
                              );
                            })}
                          </div>
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
                          <div className="nevDropui">
                            {megaManu.map((item, index) => {
                              return (
                                <div className="nevDropli" key={index}>
                                  {item.name}
                                </div>
                              );
                            })}
                          </div>
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
                          <div className="newDropui">
                            {fullmenu.map((item, index) => {
                              return (
                                <div className="nevDropli" key={index}>
                                  <div className="menu-logo">
                                    <img
                                      src={`/images/${item.logo}`}
                                      alt="logo"
                                      className="menulogo"
                                    />
                                    <div>{item.name}</div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
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
                          <div
                            className="nevDropui"
                            onMouseEnter={() => handleMouseEnter(3)}
                            onMouseLeave={() => handleMouseLeave(3)}
                          >
                            {pagesArray.map((page, index) => (
                              <div key={index}>
                                <div
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
                                          {page.version.map(
                                            (version, index) => (
                                              <div
                                                className="hovermodalDrop"
                                                key={index}
                                              >
                                                <div className="nevDrop-itemDrop">
                                                  <div className="version-dropdown-ui">
                                                    <div href="#">
                                                      {version.name}
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            )
                                          )}
                                        </div>
                                      </div>
                                    )}
                                </div>
                              </div>
                            ))}
                          </div>
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
                          <div
                            className="nevDropui"
                            onMouseEnter={() => handleMouseEnter(4)}
                            onMouseLeave={() => handleMouseLeave(4)}
                          >
                            {userAccountArray.map((page, index) => (
                              <div key={index}>
                                <div
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
                                          {page.version.map(
                                            (version, index) => (
                                              <div
                                                className="hovermodalDrop"
                                                key={index}
                                              >
                                                <div className="nevDrop-itemDrop">
                                                  <div className="version-dropdown-ui">
                                                    <div href="#">
                                                      {version.name}
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            )
                                          )}
                                        </div>
                                      </div>
                                    )}
                                </div>
                              </div>
                            ))}
                          </div>
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
                          <div
                            className="nevDropui"
                            onMouseEnter={() => handleMouseEnter(5)}
                            onMouseLeave={() => handleMouseLeave(5)}
                          >
                            {vendorAccountArray.map((page, index) => {
                              return (
                                <div key={index}>
                                  <div
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
                                          onMouseEnter={() =>
                                            handleMouseEnter(5)
                                          }
                                          onMouseLeave={() =>
                                            handleMouseLeave(5)
                                          }
                                        >
                                          <div className="version-dropdown-menu">
                                            {page.version.map(
                                              (version, index) => (
                                                <div
                                                  className="hovermodalDrop"
                                                  key={index}
                                                >
                                                  <div className="nevDrop-itemDrop">
                                                    <div className="version-dropdown-ui">
                                                      <div href="#">
                                                        {version.name}
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              )
                                            )}
                                          </div>
                                        </div>
                                      )}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    {!isSidebarVisible && !isVisible && <Slider />}
    {<Product />}
      {!isSidebarVisible && !isVisible && <Footer />}
    </div>
  );
};
export default HeaderPage;
