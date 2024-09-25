"use client";
import GlobalContext from "@/code/globalContext";
import Pagination from "@/components/pagination";
import ProductCardCol from "@/components/productCardCol";
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
import { BsInfoCircle } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
export default function SearchResult() {
  const { AllProducts } = useContext(GlobalContext);
  const allProducts = AllProducts ?? []; // Default to an empty array if AllProducts is null or undefined
  // State for storing products to be displayed on the current page
  const [productList, setProductList] = useState<any[]>([]);
  // State for managing pagination
  const [page, setPage] = useState(1);
  const [itemsPerPages, setItemsPerPages] = useState(20);
  // const allProducts = products;
  // Update the product list whenever the page changes
  useEffect(() => {
    setProductList(allProducts.slice((page - 1) * itemsPerPages, page * itemsPerPages));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemsPerPages, page]);

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

  const [dropdownOpenCity, setDropdownOpenCity] = useState(false);
  const dropdownRefCity = useRef<HTMLDivElement>(null);
  const [itemsCity, setItemsCity] = useState('Categories');

  const [dropdownOpenDistrict, setDropdownOpenDistrict] = useState(false);
  const dropdownRefDistrict = useRef<HTMLDivElement>(null);
  const [itemsDistrict, setItemsDistrict] = useState('Sub Categories');
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
    <div className="container mx-auto px-3 md:px-6 py-12">
      {/*  */}
      <h2 className="text-graySubText font-bold text-3xl mb-4">Search</h2>
      <div className="row-all w-full flex flex-wrap justify-between">
        <div className="col-item xl:max-w-[40%] xl:basis-2/5 max-w-full basis-full ">
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="name"
            className="w-full mb-3 rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            placeholder="Search"
          />
        </div>
        <div className="main-menus block md:flex col-item xl:max-w-[60%] xl:basis-3/5 max-w-full basis-full xl:justify-end">
          {/* Menu With City */}
          <div ref={dropdownRefCity} onClick={handleDropdownClick} className="city md:mx-2 mx-0 mb-4 cursor-pointer flex items-center justify-between min-w-72 max-h-[50px] rounded-md border border-solid border-[#DFDDDD] px-1 py-2">
            <span className="mx-1">{itemsCity}</span>
            <div
              className="relative flex justify-end w-full"
            >
              <button
                className="flex items-center text-primary text-sm xl:text-base font-medium"
              >
                <IoMdArrowDropdown
                  className={`ml-1 transform transition-transform text-2xl  ${dropdownOpenCity ? "rotate-180" : "rotate-0"
                    }`}
                />
              </button>
              <ul
                className={`absolute left-[-95px] top-[23px] mt-2 w-full md:w-72 h-44 z-50 overflow-auto bg-white text-graySubText shadow-lg rounded-md py-2 ${dropdownOpenCity ? "block" : "hidden"
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
          <div ref={dropdownRefDistrict} onClick={handleDropdownClickDistrict} className="District md:mx-2 mx-0 mb-4 cursor-pointer flex items-center justify-between min-w-72 max-h-[50px] rounded-md border border-solid border-[#DFDDDD] px-1 py-2">
            <span className="mx-1">{itemsDistrict}</span>
            <div
              className="relative flex justify-end w-2/4"
            >
              <button
                className="flex items-center text-primary text-sm xl:text-base font-medium"
              >
                <IoMdArrowDropdown
                  className={`ml-1 transform transition-transform text-2xl  ${dropdownOpenDistrict ? "rotate-180" : "rotate-0"
                    }`}
                />
              </button>
              <ul
                className={`absolute left-[-144px] top-[23px] mt-2 w-full md:w-72 h-44 z-50 overflow-auto bg-white text-graySubText shadow-lg rounded-md py-2 ${dropdownOpenDistrict ? "block" : "hidden"
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
        </div>
        <div className="check-search my-5 block md:flex justify-between w-full items-center border-b border-solid mb-8 pb-5">
          <div className="check-leetrs flex items-center">
            <div className="relative flex gap-x-3 mx-2">
              <div className="flex h-6 items-center">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
              </div>
              <div className="text-sm leading-6">
                <label htmlFor="remember" className="text-captionColor text-sm">
                  Search in subcategories
                </label>
              </div>
            </div>
            <div className="relative flex gap-x-3 mx-2">
              <div className="flex h-6 items-center">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
              </div>
              <div className="text-sm leading-6">
                <label htmlFor="remember" className="text-captionColor text-sm">
                  Search in subcategories
                </label>
              </div>
            </div>
          </div>
          <button className="w-64 h-10 rounded-md mt-3 md:mt-0 bg-primary text-white">Search</button>
        </div>
      </div>
      <div className="block md:flex justify-between mb-12">
        <h2 className="text-2xl mb-3 text-blackText font-bold">
          <FiFilter className="inline text-xl" />
          <span className="mx-1">Result</span>
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="border rounded-md grid grid-cols-2 gap-1 px-1 items-center text-sm">
            <span className="font-medium">Sort By:</span>
            <select
              id="sortBy"
              name="sortBy"
              className="bg-transparent rounded-md border-0 py-0 px-3 text-gray-900 placeholder:text-gray-400"
            >
              <option>Name a - z</option>
            </select>
          </div>
          <div className="border rounded-md grid grid-cols-2 gap-1 px-1 items-center text-sm">
            <span className="font-medium">Show:</span>
            <select
              id="pages"
              name="pages"
              className="bg-transparent rounded-md border-0 py-0 px-3 text-gray-900 placeholder:text-gray-400"
              onChange={(e) => setItemsPerPages(Number(e.target.value))}
            >
              <option value={20}>20</option>
              <option value={30}>30</option>
              <option value={40}>40</option>
              <option value={50}>50</option>
            </select>
          </div>
        </div>
      </div>
      {productList.length ? (
        <>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {productList.map((product) => (
              <ProductCardCol product={product} key={product.id} />
            ))}
          </div>
          {allProducts.length > itemsPerPages && (
            <Pagination className="mt-6 justify-center" page={page} numberOfPages={Math.ceil(allProducts.length / itemsPerPages)} setPage={setPage} />
          )}
        </>
      ) : (
        <p className="text-captionColor text-sm text-center italic">
          <BsInfoCircle className="inline" /> <span className="mx-1">No products found!</span>
        </p>
      )}
    </div>
  );
}