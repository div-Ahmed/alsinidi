"use client";

import Image from "next/image";
import img from "/public/assets/logo-en.png";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineManageAccounts, MdOutlineShoppingCart, MdPhone } from "react-icons/md";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { LuMenu } from "react-icons/lu";
import {
  IoChevronDown,
  IoChevronUp,
  IoClose,
  IoSearchOutline,
} from "react-icons/io5";
import Link from "next/link";
import { useContext, useState } from "react";
import CartMenu from "./cartMenu/cartMenu";
import GlobalContext from "@/code/globalContext";
export type IconProps = React.HTMLAttributes<SVGElement>;
const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isSubmenuOpen, setSubmenuOpen] = useState(false);
  const [cartMenuIsOpen, setCartMenuIsOpen] = useState(false);
  const { G_productsInCart } = useContext(GlobalContext);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const toggleSubmenu = () => {
    setSubmenuOpen(!isSubmenuOpen);
  };
  return (
    <>
    <div className="relative">
      <div className="container mx-auto px-4 py-5 sm:px-6 lg:px-8 flex items-center">
        {/* Logo */}
        <Link href="./" className="flex grow lg:grow-0 items-center">
          <LuMenu
            className="text-2xl text-graySubText mx-2 block lg:hidden cursor-pointer"
            onClick={toggleSidebar}
          />
          <Image
            src={img}
            className=""
            width={180}
            height={40}
            alt="logo"
            priority
          />
        </Link>
        {/* Input Search */}
        <div className="lg:flex grow hidden mx-5">
          <div className="w-full">
            <input
              type="text"
              placeholder="What are you looking for ?"
              className="w-full bg-grayColor text-graySubText rounded-tl-lg rounded-bl-lg p-3 focus:outline-none "
            />
          </div>
          <div className="rounded-tr-lg rounded-br-lg">
            <Link href={"search_result"} className="h-full">
              <button className="text-white bg-primary rounded-tr-lg rounded-br-lg p-3 ">
                Search
              </button>
            </Link>
          </div>
        </div>
        {/* Icon Cart */}
        <div className="icon-nav flex items-center">
          <MdPhone className="text-primary text-2xl lg:block hidden cursor-pointer" />
          <p className="text-primary text-lg mx-2 lg:block hidden">
            Hotline 8004420000
          </p>
          {/* show in phone screen */}
          <IoSearchOutline className="mx-1 text-graySubText text-2xl block lg:hidden cursor-pointer" />
          <div className="relative">
            <button onClick={() => setCartMenuIsOpen(!cartMenuIsOpen)}>
              <span className="bg-secondary text-xs h-5 w-5 leading-5 text-center text-white rounded-full absolute top-[-8px] right-[-12px]"> {G_productsInCart.length} </span>
              <RiShoppingBasket2Line className="lg:text-primary text-graySubText text-2xl grow lg:ml-8 ml-0 cursor-pointer" />
            </button>
            {
              cartMenuIsOpen && <div className="absolute ltr:right-[-24px] rtl:left-[-24px] ltr:lg:right-0 rtl:lg:left-0 top-[30px] z-10"><CartMenu /> </div>
            }
          </div>
          <Link href={"./profile"} className="ml-2">
            <FaRegUserCircle className="mx-1 text-graySubText text-2xl block lg:hidden cursor-pointer" />
          </Link>
        </div>
      </div>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-full overflow-auto bg-white shadow-md transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-between items-center p-4 ">
          <Image src={img} width={120} height={40} alt="logo" priority />
          <IoClose
          id="menuuuu"
            className="text-2xl text-primary cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>
        <ul className="">
          <Link href="/">
            <li className="py-2 border-t cursor-pointer transition-all duration-500 ease-in-out hover:bg-primary hover:text-white text-primary font-medium">
              <span className="px-4">Home</span>
            </li>
          </Link>
          <li className="border-t cursor-pointer ">
            <button
              className="w-full flex justify-between items-center text-left px-4 py-2 transition-all duration-500 ease-in-out hover:bg-primary hover:text-white text-primary font-medium"
              onClick={toggleSubmenu}
            >
              Categories
              {isSubmenuOpen ? (
                <IoChevronUp className="text-xl" />
              ) : (
                <IoChevronDown className="text-xl" />
              )}
            </button>
            <ul
              className={`pl-4 overflow-auto transition-max-height duration-500 ease-in-out ${isSubmenuOpen ? "max-h-80" : "max-h-0"
                }`}
              style={{ scrollbarWidth: "thin", scrollbarColor: "#138AA8" }}
            >
              <li className="p-2 mr-3 my-3 rounded-md  border-2 border-solid border-primary cursor-pointer transition-all duration-500 ease-in-out hover:bg-primary hover:text-white text-primary font-medium">
                <Link href="/option1">Cooking</Link>
              </li>
              <li className="p-2 mr-3 my-3 rounded-md  border-2 border-solid border-primary cursor-pointer transition-all duration-500 ease-in-out hover:bg-primary hover:text-white text-primary font-medium">
                <Link href="/option2">Travel</Link>
              </li>
              <li className="p-2 mr-3 my-3 rounded-md  border-2 border-solid border-primary cursor-pointer transition-all duration-500 ease-in-out hover:bg-primary hover:text-white text-primary font-medium">
                <Link href="/option3">Camping</Link>
              </li>
              <li className="p-2 mr-3 my-3 rounded-md  border-2 border-solid border-primary cursor-pointer transition-all duration-500 ease-in-out hover:bg-primary hover:text-white text-primary font-medium">
                <Link href="/option3">Offer</Link>
              </li>
              <li className="p-2 mr-3 my-3 rounded-md  border-2 border-solid border-primary cursor-pointer transition-all duration-500 ease-in-out hover:bg-primary hover:text-white text-primary font-medium">
                <Link href="/option3">New</Link>
              </li>
            </ul>
          </li>
          <Link href="/new_arrivals">
            <li className="py-2 border-t cursor-pointer transition-all duration-500 ease-in-out hover:bg-primary hover:text-white text-primary font-medium">
              <span className="px-4">New arrivals</span>
            </li>
          </Link>
          <Link href="/Shop">
            <li className="py-2 border-t cursor-pointer transition-all duration-500 ease-in-out hover:bg-primary hover:text-white text-primary font-medium">
              <span className="px-4">Shop by brand</span>
            </li>
          </Link>
          <Link href="/Offer">
            <li className="py-2 border-t cursor-pointer transition-all duration-500 ease-in-out hover:bg-primary hover:text-white text-primary font-medium">
              <span className="px-4">Offer</span>
            </li>
          </Link>
          <Link href="/Branches">
            <li className="py-2 border-t cursor-pointer transition-all duration-500 ease-in-out hover:bg-primary hover:text-white text-primary font-medium">
              <span className="px-4">Branches</span>
            </li>
          </Link>
          <Link href="/whole_sale">
            <li className="py-2 border-t cursor-pointer transition-all duration-500 ease-in-out hover:bg-primary hover:text-white text-primary font-medium">
              <span className="px-4">Wholesale sales</span>
            </li>
          </Link>
          <Link href="/contact_us">
            <li className="py-2 border-t cursor-pointer transition-all duration-500 ease-in-out hover:bg-primary hover:text-white text-primary font-medium">
              <span className="px-4">Contact Us</span>
            </li>
          </Link>
          <Link href="/profile">
            <li className="py-2 border-t cursor-pointer transition-all duration-500 ease-in-out hover:bg-primary hover:text-white text-primary font-medium">
              <span className="px-4">Profile</span>
            </li>
          </Link>
          <Link href="/auth/sign-in">
            <li className="py-2 border-t cursor-pointer transition-all duration-500 ease-in-out hover:bg-primary hover:text-white text-primary font-medium">
              <span className="px-4">Sing in</span>
            </li>
          </Link>
          <Link href="/sign-up">
            <li className="py-2 border-t cursor-pointer transition-all duration-500 ease-in-out hover:bg-primary hover:text-white text-primary font-medium">
              <span className="px-4">Sing up</span>
            </li>
          </Link>
          <Link href="/Help">
            <li className="py-2 border-t cursor-pointer transition-all duration-500 ease-in-out hover:bg-primary hover:text-white text-primary font-medium">
              <span className="px-4">Need Help?</span>
            </li>
          </Link>
        </ul>
      </div>
      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
    </>

  );
};

export default Navbar;
