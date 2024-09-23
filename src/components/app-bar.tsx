"use client";

import { FaRegUserCircle } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import { CiGlobe } from "react-icons/ci";
import { useContext, useEffect, useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import Link from "next/link";
// import categories from "@/code/categories_db";
import ReactFlagsSelect from "react-flags-select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import GlobalContext from "@/code/globalContext";

const itemsNav = [
  { title: "New arrivals", path: "/new_arrivals" },
  { title: "Shop by brand", path: "/Shop" },
  { title: "Offer", path: "/Offer" },
  { title: "Branches", path: "/Branches" },
  { title: "Need Help?", path: "/Help" },
  { title: "Wholesale sales", path: "/whole_sale" },
];

const AppBar = () => {
  const { AllCategories } = useContext(GlobalContext);
  const [selected, setSelected] = useState("SA");
  const allCategories = AllCategories ?? [];
  return (
    <div className="bg-bgBrimary lg:block hidden">
      <div className="container mx-auto px-4 py-3 sm:px-6 lg:px-8 flex items-center">
        <div className="flex items-center relative">
          {/* Dropdown Menu */}
          <div className="relative">
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center relative text-primary text-sm xl:text-base font-medium">
                  <LuMenu className="text-2xl text-primary mx-2 cursor-pointer" />
                  Categories
                  <IoMdArrowDropdown className="ml-1 text-2xl" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 h-[40vh] overflow-y-scroll">
                <DropdownMenuItem>
                  <Link href="/categories" className="w-full block px-4 py-2">
                    All Categories
                  </Link>
                </DropdownMenuItem>
                {allCategories.map((item, index) => (
                  <DropdownMenuSub key={index}>
                    <DropdownMenuSubTrigger>
                      <Link href={`/categories/${item.id}`}>{item.name}</Link>
                    </DropdownMenuSubTrigger>

                    {/* Subcategories (Level 2 Only) */}
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent
                        id="subCat"
                        className="relative !left-[4px] "
                        style={{ direction: "rtl" }}
                      >
                        {item.child.map((subItem: any, subIndex: any) => (
                          <DropdownMenuItem key={subIndex} style={{ direction: "rtl" }}>
                            <Link className="text-right" href={`/categories/${subItem.id}`}>
                              {subItem.name}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Links Nav */}
          <ul className="flex">
            {itemsNav.map((item, index) => (
              <Link key={index} className="cursor-pointer" href={item.path}>
                <li className="py-2 px-2 xl:px-4 text-sm xl:text-base text-primary font-medium">
                  {item.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        {/* Icon Nav */}
        <div className="icon-nav flex items-center justify-end grow text-primary">
          <div className="flex mx-2 cursor-pointer">
            <ReactFlagsSelect
              fullWidth={false}
              countries={["SA", "EG"]}
              customLabels={{ SA: "SA", EG: "EG" }}
              placeholder={selected}
              onSelect={(code) => setSelected(code)}
              selected={selected}
            />
            <CiGlobe className="text-2xl mx-1" />
            <span className="mx-1">Ar</span>
          </div>
          <Link className="flex mx-2 cursor-pointer" href="/profile">
            <FaRegUserCircle className="mx-1 text-2xl" />
            <span className="mx-1">Profile</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
