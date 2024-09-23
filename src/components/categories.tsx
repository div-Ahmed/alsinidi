"use client";

import Image from "next/image";
import categoryCooking from "/public/assets/categoryCooking.png";
import categoryTravel from "/public/assets/categoryTravel.png";
import categoryCamping from "/public/assets/categoryCamping.png";
import categoryOffer from "/public/assets/categoryOffer.png";
import categoryNew from "/public/assets/categoryNew.png";
import categoryCar from "/public/assets/categoryCar.png";
import { useState } from "react";

const Categoriess = [
  {
    src: categoryCooking,
    title: "Cooking",
    active: true,
  },
  {
    src: categoryTravel,
    title: "Travel",
  },
  {
    src: categoryCamping,
    title: "Camping",
  },
  {
    src: categoryOffer,
    title: "Offer",
  },
  {
    src: categoryNew,
    title: "New",
  },
  {
    src: categoryCar,
    title: "4 * 4",
  },
];

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState<number>();

  return (
    <div className="categories container mx-auto px-4 py-3 sm:px-6 lg:px-8 flex items-center">
      <div className="row-all w-full flex flex-wrap">
        <div className="relative w-full flex items-center mb-5">
          <span className="font-medium lg:text-3xl text-xl text-blackText">
            Categories
          </span>
          <button className="text-primary text-base font-normal rounded-md lg:px-6 px-4 lg:py-2 py-1 border-2 border-solid border-primary hover:bg-primary hover:text-white transition-all duration-500 ease-in-out absolute right-0 cursor-pointer">
            See All
          </button>
        </div>
        {Categoriess.map((Category, index) => (
          <div
            key={index}
            className="col-item p-3 xl:max-w-[16.666%] xl:basis-1/6 max-w-[33%] basis-1/3 "
            onClick={() => setActiveCategory(index)}
          >
            <div
              className={`type-category mx-auto text-center lg:p-4 p-2 lg:min-h-[140px] lg:min-w-[75px] max-h-[85px] max-w-[85px] md:max-h-none md:max-w-none  cursor-pointer bg-white rounded-md ${activeCategory === index
                  ? "border-2 border-solid border-primary shadow-none"
                  : "border-0 shadow-[0_1px_4px_1px] shadow-[#CAC9C9]"
                }`}
            >
              <Image
                src={Category.src}
                className="mx-auto lg:min-h-[70px] lg:min-w-[65px] max-h-[45px] max-w-[45px] md:max-h-none md:max-w-none"
                width={100}
                height={100}
                alt="logo"
              />
              <h4 className="text-primary text-sm lg:text-lg font-normal md:mb-2 md:mt-3 m-0">
                {Category.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
