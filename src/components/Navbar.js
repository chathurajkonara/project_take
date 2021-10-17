import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [productsSelected, setProductsSelected] = useState(true);
  const [servicesSelected, setServicesSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <nav className="bg-gray-50 mb-12 mt-2 bg-transparent sticky top-40 sm:top-29 md:top-21 z-10">
      <ul className="flex justify-evenly space-x-2 bg-gray-200">
        <li
          className={`flex-auto text-center rounded-md bg-white hover:bg-gray-100 transition ease-in-out duration-700 text-gray-700 shadow-md inline-block p-2 ${
            productsSelected ? "bg-gray-200 font-bold" : "bg-current"
          }`}
        >
          <Link
            className=" flex w-full justify-center"
            to="/"
            onClick={(e) => {
              setProductsSelected(true);
              setServicesSelected(false);
              setContactSelected(false);
            }}
          >
            <span>Products</span>
          </Link>
        </li>
        <li
          className={`flex-auto text-center rounded-md bg-white hover:bg-gray-100 transition ease-in-out duration-700 text-gray-700 shadow-md inline-block p-2 ${
            servicesSelected ? "bg-gray-200 font-bold" : "bg-current"
          }`}
        >
          <Link
            className=" flex w-full justify-center"
            to="/create"
            onClick={(e) => {
              setServicesSelected(true);
              setProductsSelected(false);
              setContactSelected(false);
            }}
          >
            <span>Services</span>
          </Link>
        </li>
        <li
          className={`flex-auto text-center rounded-md bg-white hover:bg-gray-100 transition ease-in-out duration-700 text-gray-700 shadow-md inline-block p-2 ${
            contactSelected ? "bg-gray-200 font-bold" : "bg-current"
          }`}
        >
          <Link
            className=" flex w-full justify-center"
            to="/user"
            onClick={(e) => {
              setContactSelected(true);
              setProductsSelected(false);
              setServicesSelected(false);
            }}
          >
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
