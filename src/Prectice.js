import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';



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
const Prectice = () => {
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
  };

  const handleMouseLeave = (index) => {
    setManuItem((prevState) =>
      prevState.map((state, i) => (i === index ? false : state))
    );
  };
  return (
    <>
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
                            console.log(page.version, "mmmmmmmmmmmmmmmmm");
                            return (
                              <ui key={page.id}>
                                <li
                                  onMouseEnter={() => handlePageSelect(page)}
                                  className="version-ui"
                                >
                                  {page.name}
                                  {selectedPage &&
                                    selectedPage.id === page.id &&
                                    page.version.length !== 0 && (
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
    </>
  )
}

export default Prectice