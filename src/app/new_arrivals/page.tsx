"use client";
import GlobalContext from "@/code/globalContext";
// import products from "@/code/products_db";
import Pagination from "@/components/pagination";
import ProductCardCol from "@/components/productCardCol";
import { useContext, useEffect, useState } from "react";
import { BsInfoCircle } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";
export default function NewArrivals() {
  // Access context data
  const { AllProducts } = useContext(GlobalContext);
  // State for storing products to be displayed on the current page
  const [productList, setProductList] = useState<any[]>([]);
  // State for managing pagination
  const [page, setPage] = useState(1);
  const [itemsPerPages, setItemsPerPages] = useState(20);
  // Ensure AllProducts is not null or undefined
  const allProducts = AllProducts ?? [];
  // Update the product list whenever the page changes
  useEffect(() => {
    setProductList(allProducts.slice((page - 1) * itemsPerPages, page * itemsPerPages));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemsPerPages, page]);
  return (
    <div className="container mx-auto px-3 md:px-6 py-12">
      <div className="flex justify-between mb-12">
        <h2 className="text-2xl text-blackText font-bold">
          <FiFilter className="inline text-xl" />
          <span className="mx-1">New Arrivals</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
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