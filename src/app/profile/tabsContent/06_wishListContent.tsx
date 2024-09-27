"use client";

import { useState, useEffect, useContext } from "react";
import ProductCard from "@/components/productCard";
import ProductCardCol from "@/components/productCardCol";
import WishlistContext from "@/contexts/WishlistContext";
export default function WishListContent() {
  const { userFavorites } = useContext(WishlistContext);
  const favorites = userFavorites ?? [];
  console.log(favorites, "favorites")
  useEffect(() => {
    console.log(userFavorites, "userFavorites")
  }, [userFavorites]);
  return (
    <div className="container px-0">


      <h2 className="text-2xl text-blackText font-bold mb-1">My Wish List</h2>
      {favorites.length ? (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {favorites.map((product) => (
              <ProductCardCol product={product} key={product.id} />
            ))}
          </div>
        </>
      ) : (
        <p className="text-captionColor text-sm text-center italic">
          No products found!
        </p>
      )}



    </div>
  );
}
