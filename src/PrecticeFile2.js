import React, { useState } from "react";

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

const PrecticeFile2 = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState([false,false,false]);
  const [isDropdownOpenHome, setIsDropdownOpenHome] = useState([false]);
  const [selectedPage, setSelectedPage] = useState(null);

  const handleMouseEnter = (index) => {
    setIsDropdownOpen((prevState) =>
      prevState.map((state, i) => (i === index ? true : state))
    );
  };

  const handleMouseLeave = (index) => {
    setIsDropdownOpen((prevState) =>
      prevState.map((state, i) => (i === index ? false : state))
    );
  };
  const handleMouseEnterHome = (index) => {
    setIsDropdownOpenHome((prevState) =>
      prevState.map((state, i) => (i === index ? true : state))
    );
  };

  const handleMouseLeaveHome = (index) => {
    setIsDropdownOpen((prevState) =>
      prevState.map((state, i) => (i === index ? false : state))
    );
  };

  const handlePageSelect = (page) => {
    setSelectedPage(page);
  };
  return (
    <>
      <nav>
        <ul className="navbar">
          <li className="navbar-item dropdown">
            <a
              href="#"
              className="navbar-link"
              onMouseEnter={handleMouseEnterHome}
              onMouseLeave={handleMouseLeaveHome}
            >
              Home
            </a>
            {isDropdownOpen && (
              <ul className="dropdown-menu" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                {pagesArray.map((page) => (
                  <li key={page.id} className="dropdown-item">
                    <a href="#" onMouseEnter={() => handlePageSelect(page)}>
                      {page.name}
                    </a>
                    {selectedPage && selectedPage.id === page.id && (
                      <ul className="version-dropdown-menu">
                        {page.version.map((version) => (
                          <li
                            key={version.id}
                            className="version-dropdown-item"
                          >
                            <a href="#">{version.name}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
          {/* Add more navbar items here */}
        </ul>
      </nav>
    </>
  );
};

export default PrecticeFile2;
