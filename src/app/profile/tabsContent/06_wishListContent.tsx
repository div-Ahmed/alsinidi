"use client";

import { iProduct } from "@/code/dataModels";
import { useState, useEffect, useContext } from "react";
import ProductCard from "@/components/productCard";
import { BiShoppingBag, BiSolidTrash } from "react-icons/bi";
import products from "@/code/products_db";
import GlobalContext from "@/code/globalContext";
export default function WishListContent() {
  const { AllProducts } = useContext(GlobalContext);
  const allProducts=AllProducts?? []; // Default to an empty array if AllProducts is null or undefined
  const [productsList, setProductsList] = useState<iProduct[]>([]);

  useEffect(() => {
    setProductsList(allProducts.slice(0, 2));
  }, []);

  return (
    <div className="container px-0">
      <h2 className="text-2xl text-blackText font-bold mb-1">My Wish List</h2>
      {productsList && productsList.length ? (
        productsList.map((product, index) => (
          <ProductCard key={index + 1} product={product}>
            <div className="mt-3 flex justify-center lg:justify-end text-sm font-medium">
              <button className="text-secondary mx-1 flex items-center">
                {" "}
                <BiShoppingBag className="mx-1 text-lg" />{" "}
                <span> Add to cart </span>{" "}
              </button>
              <button className="text-redColor mx-1 flex items-center">
                {" "}
                <BiSolidTrash className="mx-1 text-lg" /> <span> Remove </span>{" "}
              </button>
            </div>
          </ProductCard>
        ))
      ) : (
        <div className="text-sm text-captionColor text-center">
          No products found
        </div>
      )}
    </div>
  );
}
