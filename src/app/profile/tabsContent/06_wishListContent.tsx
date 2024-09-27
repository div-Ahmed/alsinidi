"use client";

import { useState, useEffect, useContext } from "react";
import ProductCard from "@/components/productCard";
import { BiShoppingBag, BiSolidTrash } from "react-icons/bi";
import GlobalContext from "@/code/globalContext";
import ProductCardCol from "@/components/productCardCol";
import Pagination from "@/components/pagination";
export default function WishListContent() {
  const { AllProducts,  userFavorites, setUserFavorites } = useContext(GlobalContext);
  const allProducts = AllProducts ?? []; // Default to an empty array if AllProducts is null or undefined
  const favorites = userFavorites ?? [];
  const [productsList, setProductsList] = useState<any[]>([]);
const[ allFavorits,setAllFavorits]=useState([]);
  useEffect(() => {
    // setProductsList(allProducts.slice(0, 2));
    // setAllFavorits(userFavorites);
    console.log(userFavorites,"uuuuuuu")
  }, []);

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
