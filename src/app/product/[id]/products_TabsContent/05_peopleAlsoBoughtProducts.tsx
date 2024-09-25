"use client";

import GlobalContext from "@/code/globalContext";
// import products from "@/code/products_db";
import ProductCardCol from "@/components/productCardCol";
import { useContext } from "react";

export default function PeopleAlsoBought({ product }: { product: any }) {
  const { AllProducts } = useContext(GlobalContext);
  const allProducts = AllProducts ?? []; // Default to an empty array if AllProducts is null or undefined
  const productsList = allProducts.slice(0, 4);
  return (
    <div className="container px-0">
      <h2 className="text-sm text-primary font-medium my-3 text-end underline">See all</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {productsList.map((product) => (
          <ProductCardCol product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
