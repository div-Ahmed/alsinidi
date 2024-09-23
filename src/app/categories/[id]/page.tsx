
"use client";

import { iCategory, iProduct } from "@/code/dataModels";
import Pagination from "@/components/pagination";
import ProductCardCol from "@/components/productCardCol";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { BsInfoCircle } from "react-icons/bs";
import Image from "next/image";
import GlobalContext from "@/code/globalContext";

export default function Category({ params }: { params: { id: string } }) {
  // Access context data


  const { AllProducts, AllCategories, fetchSubCategoriesProducts } = useContext(GlobalContext);
  const [products, setProducts] = useState<iProduct[]>([]);
  const fetchProducts = async () => {
    const { data } = await fetchSubCategoriesProducts(params.id);
    console.log(data);
    setProducts(data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(products, "test");
  // Find the category based on the ID in the URL params this is for the first class category
  const cat = AllCategories?.find((category) => category.id == (params.id));
  console.log(cat, "cat", AllCategories);
  const getParents = AllCategories
    ?.filter(item => item.child.some((child: { id: number; }) => child.id === parseInt(params.id)));

  console.log(getParents, "getChgetParents");
  // Find the current parent category 
  const currentParent = AllCategories?.find((category) => category.id == cat?.id || category.id == cat?.parentId);
  console.log(currentParent, "currentParent");
  // Find all subcategories of the current parent category
  const catSubs = AllCategories?.filter((category) => category.parentId == currentParent?.id) || [];
  console.log(catSubs, "catSubs");
  // Determine the current category
  const mainCategory = AllCategories?.find((category) => category.id == cat?.id && category.parentId) ||
    (catSubs.length ? catSubs[0] : currentParent);

  // State for storing main categories (those without parent)
  const [cats, setCats] = useState<iCategory[]>([]);

  // State for managing pagination
  const [page, setPage] = useState(1);

  // State for storing products to be displayed on the current page
  const [productList, setProductList] = useState<iProduct[]>([]);

  // Filter products based on the current category from the context
  const allProducts = AllProducts?.filter((product) => product.category.id === mainCategory?.id) || [];

  // Fetch main categories on component mount
  // useEffect(() => {
  //   if (AllCategories) {
  //     setCats(AllCategories.filter((category) => !category.parentId));
  //   }
  // }, [AllCategories]);

  // Update the product list whenever the page changes
  // useEffect(() => {
  //   setProductList(allProducts.slice((page - 1) * 8, page * 8));
  // }, [page, allProducts]);

  return (
    <main dir="rtl" className="bg-mainBg">
      <div className="container mx-auto px-3 md:px-6 py-12">
        <h2 className="text-2xl text-blackText font-bold mb-3">{getParents?.[0]?.name || currentParent?.name}</h2>

        {/* Display main categories */}
        {currentParent && <div className="grid gap-2 grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {currentParent?.child?.map((category: iCategory, index: number) => (
            <Link href={`/categories/${category.id}`} key={index}
              className={`type-category text-center lg:p-4 p-2 cursor-pointer bg-white rounded-md shadow-md border-2 
                  ${(currentParent?.id == category.id) && "border-primary"}`}>
              <Image src={category.imgUrl || ""} alt="category" width={55} height={55} className="mx-auto" />
              <p className="text-primary text-base font-normal mt-3">{category.name}</p>
            </Link>
          ))}
        </div>}

        {/* Display subcategories */}
        <div className="mt-6">
          {getParents?.[0]?.child.map((category: iCategory, index: number) => (
            <Link href={`/categories/${category.id}`} key={index}
              className={`text-primary text-base font-normal rounded-md px-3 py-1 mx-1 border-2 border-primary transition-all duration-500 ease-in-out inline-block mb-3 
                  ${mainCategory && mainCategory.id == category.id && "border-1 bg-primary text-white"}`}>
              {category.name}
            </Link>
          ))}
        </div>

        {/* Display products or a message if no products are found */}
        {mainCategory && (
          <div className="pt-6">
            <h2 className="text-2xl text-blackText font-bold mb-3">{products[0]?.category?.name}</h2>
            {products.length ? (
              <>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                  {products.map((product) => (
                    <ProductCardCol product={product} key={product.id} />
                  ))}
                </div>
                {products.length > 8 && (
                  <Pagination className="mt-6 justify-center" page={page} numberOfPages={Math.ceil(products.length / 8)} setPage={setPage} />
                )}
              </>
            ) : (
              <p className="text-captionColor text-sm text-center italic">
                <BsInfoCircle className="inline" /> <span className="mx-1">No products found!</span>
              </p>
            )}


          </div>
        )}

      </div>
    </main>
  );
}
