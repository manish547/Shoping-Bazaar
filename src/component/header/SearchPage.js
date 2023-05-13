import React, { useEffect, useRef, useState } from "react";

import "./Header.css";

import { IoIosArrowDown, IoMdSearch } from "react-icons/io";

import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

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

const SearchPage = () => {
  const [isListVisible, setIsListVisible] = useState(false);
  const [categoriesitem, setCategoriesitem] = useState("All Categories");
  const menuRef = useRef(null);
  const btnRef = useRef(null);

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
    <>
      <div>
        <div className="SearchPage">
          <div className="Searchpage-header">
            <div>Search To Bazaar</div>
            <Link to="/">
            <IoCloseSharp className="closeSharp" /></Link>
          </div>
          <div className="SearchPage-searchbar">
            <div className="headersearchbar-search">
              <div className="searchbar">
                <IoMdSearch className="img-search" />
                <input
                  placeholder="Searching for ..."
                  className="search-inpute-Search"
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
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
