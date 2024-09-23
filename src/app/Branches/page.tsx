
"use client";

import Link from "next/link";
import * as tabContent from "./tabsContentMaps/";
import { useState, useRef, useEffect } from "react";
import { FiFilter } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";


const tabs = [
  {
    id: "One",
    title: "Al Sunaidi Excursions Supplies - Head Office",
  },
  { id: "Tow", title: "Al Sunaidi Excursions Supplies - AlJarda Branch"},
  { id: "Three", title: "Riyadh Exit 12" },
  { id: "Four", title: "Riyadh - Exit 5"},
  { id: "Five", title: "Hafr Al-Batin"},
  { id: "Six", title: "Khamis Mushait" },
  { id: "Seven", title: "Jeddah" },
  { id: "Eight", title: "Khamis Mushait 2" },
];

const Branches = () => {
  const [activeTab, setActiveTab] = useState("One");
  const TabContent: { [key: string]: () => JSX.Element } = tabContent;
  const [ActiveContent, setActiveContent] = useState<
    (() => JSX.Element) | null
  >(null); // Initialize as null
  const [dropdownOpenCity, setDropdownOpenCity] = useState(false);
  const dropdownRefCity = useRef<HTMLDivElement>(null);
  const [itemsCity, setItemsCity] = useState('Select City');

  useEffect(() => {
    setActiveContent(() => TabContent[activeTab]); // Set initial ActiveContent
  }, [TabContent, activeTab]);

  const handleDropdownClick = () => {
    setDropdownOpenCity(!dropdownOpenCity);
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRefCity.current &&
      !dropdownRefCity.current.contains(event.target as Node)
    ) {
      setDropdownOpenCity(false);
    }
  };

  const handleCityChange = (city: string) => {
    setItemsCity(city);
    setDropdownOpenCity(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //

  const [dropdownOpenDistrict, setDropdownOpenDistrict] = useState(false);
  const dropdownRefDistrict = useRef<HTMLDivElement>(null);
  const [itemsDistrict, setItemsDistrict] = useState('All');
  const handleDropdownClickDistrict = () => {
    setDropdownOpenDistrict(!dropdownOpenDistrict);
  };
  const handleClickOutsideDistrict = (event: MouseEvent) => {
    if (
      dropdownRefDistrict.current &&
      !dropdownRefDistrict.current.contains(event.target as Node)
    ) {
      setDropdownOpenDistrict(false);
    }
  };

  const handleCityChangeDistrict = (city: string) => {
    setItemsDistrict(city);
    setDropdownOpenDistrict(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideDistrict,);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideDistrict);
    };
  }, []);
  return (
    <div className="main-branches pt-10">
      <div className="container mx-auto px-4 py-3 sm:px-6 lg:px-8 flex items-center">
        <div className="row-all w-full flex flex-wrap justify-between">
          <div className="col-item xl:max-w-[40%] xl:basis-2/5 max-w-full basis-full ">
            <h2 className="text-lg lg:text-2xl text-blackText font-bold mb-4">
              <FiFilter className="inline text-xl" />
              <span className="mx-5">Find the nearest branch to you</span>
            </h2>
          </div>
          {/* All Menus */}
          <div className="main-menus block md:flex col-item xl:max-w-[60%] xl:basis-3/5 max-w-full basis-full xl:justify-end">
            {/* Menu With City */}
            <div ref={dropdownRefCity} onClick={handleDropdownClick} className="city md:mx-2 mx-0 mb-4 cursor-pointer flex justify-between min-w-44 rounded-md border border-solid border-[#DFDDDD] px-1 py-2">
              <span className="mx-1">City</span>
              <div
                className="relative flex justify-end w-full"
              >
                <button
                  className="flex items-center text-primary text-sm xl:text-base font-medium"
                >
                  {itemsCity}
                  <IoMdArrowDropdown
                    className={`ml-1 transform transition-transform text-2xl  ${
                      dropdownOpenCity ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
                <ul
                  className={`absolute left-[-45px] top-[23px] mt-2 w-full md:w-44 h-44 z-50 overflow-auto bg-white text-graySubText shadow-lg rounded-md py-2 ${
                    dropdownOpenCity ? "block" : "hidden"
                  }`}
                  style={{ scrollbarWidth: "thin", scrollbarColor: "#138AA8" }}
                >
                  <li
                    onClick={() => handleCityChange('All')}
                    className="hover:text-primary hover:bg-bgBrimary transition-all duration-500 ease-in-out cursor-pointer"
                  >
                    <Link href={`#`} className="w-full block px-4 py-2">All</Link>
                  </li>
                  <li
                    onClick={() => handleCityChange('Egypt')}
                    className="hover:text-primary hover:bg-bgBrimary transition-all duration-500 ease-in-out cursor-pointer"
                  >
                    <Link href={`#`} className="w-full block px-4 py-2">Egypt</Link>
                  </li>
                  <li
                    onClick={() => handleCityChange('Saudia')}
                    className="hover:text-primary hover:bg-bgBrimary transition-all duration-500 ease-in-out cursor-pointer"
                  >
                    <Link href={`#`} className="w-full block px-4 py-2">Saudia</Link>
                  </li>
                  <li
                    onClick={() => handleCityChange('UAE')}
                    className="hover:text-primary hover:bg-bgBrimary transition-all duration-500 ease-in-out cursor-pointer"
                  >
                    <Link href={`#`} className="w-full block px-4 py-2">UAE</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Menu With District */}
            <div ref={dropdownRefDistrict} onClick={handleDropdownClickDistrict} className="District md:mx-2 mx-0 mb-4 cursor-pointer flex justify-between min-w-44 rounded-md border border-solid border-[#DFDDDD] px-1 py-2">
              <span className="mx-1">District</span>
              <div
                className="relative flex justify-end w-full"
              >
                <button
                  className="flex items-center text-primary text-sm xl:text-base font-medium"
                >
                  {itemsDistrict}
                  <IoMdArrowDropdown
                    className={`ml-1 transform transition-transform text-2xl  ${
                      dropdownOpenDistrict ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
                <ul
                  className={`absolute left-[-65px] top-[23px] mt-2 w-full md:w-44 h-44 z-50 overflow-auto bg-white text-graySubText shadow-lg rounded-md py-2 ${
                    dropdownOpenDistrict ? "block" : "hidden"
                  }`}
                  style={{ scrollbarWidth: "thin", scrollbarColor: "#138AA8" }}
                >
                  <li
                    onClick={() => handleCityChangeDistrict('All')}
                    className="hover:text-primary hover:bg-bgBrimary transition-all duration-500 ease-in-out cursor-pointer"
                  >
                    <Link href={`#`} className="w-full block px-4 py-2">All</Link>
                  </li>
                  <li
                    onClick={() => handleCityChangeDistrict('Egypt')}
                    className="hover:text-primary hover:bg-bgBrimary transition-all duration-500 ease-in-out cursor-pointer"
                  >
                    <Link href={`#`} className="w-full block px-4 py-2">Egypt</Link>
                  </li>
                  <li
                    onClick={() => handleCityChangeDistrict('Saudia')}
                    className="hover:text-primary hover:bg-bgBrimary transition-all duration-500 ease-in-out cursor-pointer"
                  >
                    <Link href={`#`} className="w-full block px-4 py-2">Saudia</Link>
                  </li>
                  <li
                    onClick={() => handleCityChangeDistrict('UAE')}
                    className="hover:text-primary hover:bg-bgBrimary transition-all duration-500 ease-in-out cursor-pointer"
                  >
                    <Link href={`#`} className="w-full block px-4 py-2">UAE</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Detect your location */}
            <div className="location md:mx-2 mx-0 mb-4 cursor-pointer flex items-center justify-between text-white bg-primary min-w-44 rounded-md px-2 py-2">
              <span className="mx-1">
                <HiOutlineLocationMarker />
              </span>
              <div className="relative">Detect your location</div>
            </div>
          </div>
          {/* Maps */}
          <div className="tabs md:mt-16 mt-8 lg:basis-1/4 basis-full mb-3  border border-solid rounded-md">
            {tabs.map((tab) => (
              <div
                onClick={() => setActiveTab(tab.id)}
                role="button"
                key={tab.id}
                className={`cursor-pointer hover:bg-primary hover:text-white border border-solid transition ease-in-out font-medium text-sm p-3 py-4 flex items-center ${
                  activeTab === tab.id
                    ? "bg-primary text-white"
                    : "bg-transparent text-graySubText"
                }`}
              >
                <span className="px-3">{tab.title}</span>
              </div>
            ))}
          </div>
          <div className="tabs-contentMaps md:mt-16 mt-8 mb-3 lg:basis-3/4 basis-full">
            <div className="ltr:lg:ml-6 rtl:lg:mr-6 mx-0">
              {ActiveContent && <ActiveContent />}{" "}
              {/* Render ActiveContent if it's not null */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Branches;

