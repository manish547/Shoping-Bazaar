import React, { useEffect, useRef, useState } from "react";

import { categoriesData } from "../../asset/StaticData";
import "./Header.css";

import { IoIosArrowDown, IoMdSearch } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";




const SearchPage = ({handleSearchClose}) => {
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

const hendleiconclose = () => {
  handleSearchClose()
}

  return (
    <>
      <div>
        <div className="SearchPage">
          <div className="Searchpage-header">
            <div>Search To Bazaar</div>
            {/* <Link to="/"> */}
              <button className="close-btn">
                <IoCloseSharp className="closeSharp" onClick={hendleiconclose}/>
              </button>
            {/* </Link> */}
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
                <div id="manuitem" className="modallist2">
                  {isListVisible && (
                    <div className="ui-list" ref={menuRef}>
                      {/* <li key="123" className="li-item">
                        All Categories
                      </li> */}
                      {categoriesData.map((item, index) => (
                        <li
                          key={index}
                          className="li-item"
                          onClick={() => handleCategories(item.name)}
                        >
                          {item.name}
                        </li>
                      ))}
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

export default SearchPage;
